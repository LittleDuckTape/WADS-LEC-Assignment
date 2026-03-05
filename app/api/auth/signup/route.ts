import { NextResponse } from "next/server";
import { usersStore } from "@/lib/usersStore";

export async function POST(req: Request) {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });

    const email = typeof body.email === "string" ? body.email : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email.trim() || !password.trim()) {
        return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    if (password.length < 6) {
        return NextResponse.json({ message: "Password must be at least 6 characters." }, { status: 400 });
    }

    const result = usersStore.createUser(email, password);
    if (!result.ok) return NextResponse.json({ message: result.message }, { status: 409 });

    return NextResponse.json(
        { message: "Signup successful", user: { id: result.user.id, email: result.user.email } },
        { status: 201 }
    );
}