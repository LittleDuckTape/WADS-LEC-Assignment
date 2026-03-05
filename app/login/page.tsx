"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert(`Logged in as ${email}`);
    }

    return (
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
        <section style={{ width: "100%", maxWidth: 420, border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
            <h1 style={{ marginBottom: 6 }}>Login</h1>
            <p style={{ marginTop: 0, marginBottom: 16, color: "#555" }}>
            Demo login page (for Assignment 3). API is available at <b>/docs</b>.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 6 }}>
                Email
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                type="email"
                required
                style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
                />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
                Password
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                required
                style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
                />
            </label>

            <button
                type="submit"
                style={{
                padding: 10,
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                }}
            >
                Login
            </button>
            </form>

            <div style={{ marginTop: 14, fontSize: 14, color: "#666" }}>
            Quick links:{" "}
            <a href="/docs">Swagger Docs</a>{" "}
            ·{" "}
            <a href="/api/tasks" target="_blank" rel="noreferrer">
                /api/tasks
            </a>
            </div>
        </section>
        </main>
    );
}