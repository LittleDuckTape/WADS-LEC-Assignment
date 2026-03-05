import { NextResponse } from "next/server";
import { tasksStore } from "@/lib/tasksStore";

export async function GET() {
    return NextResponse.json(tasksStore.tasks);
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const title =
        typeof body?.title === "string" && body.title.trim() !== ""
            ? body.title.trim()
            : null;

    if (!title) {
        return NextResponse.json(
            { message: "Title is required (string)." },
            { status: 400 }
        );
    }

    const newTask = { id: tasksStore.nextId(), title, done: false };
    tasksStore.tasks.push(newTask);

        return NextResponse.json(newTask, { status: 201 });
    } catch {
        return NextResponse.json(
        { message: 'Invalid JSON. Send: { "title": "..." }' },
        { status: 400 }
        );
    }
}