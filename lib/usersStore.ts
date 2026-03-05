import crypto from "crypto";

export type User = {
    id: number;
    email: string;
    passwordHash: string;
    salt: string;
};

export const usersStore = {
    users: [] as User[],

    nextId() {
        return this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    },

    hashPassword(password: string, salt: string) {
        // built-in hashing (no extra npm libraries)
        return crypto.scryptSync(password, salt, 64).toString("hex");
    },

    createUser(email: string, password: string) {
        const normalizedEmail = email.trim().toLowerCase();
        const exists = this.users.some((u) => u.email === normalizedEmail);
        if (exists) return { ok: false as const, message: "Email already registered." };

        const salt = crypto.randomBytes(16).toString("hex");
        const passwordHash = this.hashPassword(password, salt);

        const user: User = {
        id: this.nextId(),
        email: normalizedEmail,
        salt,
        passwordHash,
        };

        this.users.push(user);
        return { ok: true as const, user };
    },

    verifyUser(email: string, password: string) {
        const normalizedEmail = email.trim().toLowerCase();
        const user = this.users.find((u) => u.email === normalizedEmail);
        if (!user) return { ok: false as const, message: "Invalid email or password." };

        const attemptedHash = this.hashPassword(password, user.salt);
        if (attemptedHash !== user.passwordHash) {
        return { ok: false as const, message: "Invalid email or password." };
        }

        return { ok: true as const, user };
    },
};