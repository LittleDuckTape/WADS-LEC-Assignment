import { NextResponse } from "next/server";
import { tasksStore } from "@/lib/tasksStore";

function parseId(idParam: string) {
    const id = Number(idParam);
    return Number.isFinite(id) ? id : null;
}

// GET (detail)
export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const taskId = parseId(id);
    if (taskId === null)
        return NextResponse.json({ message: "Invalid id" }, { status: 400 });

    const task = tasksStore.tasks.find((t) => t.id === taskId);
    if (!task)
        return NextResponse.json({ message: "Task not found" }, { status: 404 });

    return NextResponse.json(task);
}

// PUT (update)
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const taskId = parseId(id);
    if (taskId === null)
        return NextResponse.json({ message: "Invalid id" }, { status: 400 });

    const index = tasksStore.tasks.findIndex((t) => t.id === taskId);
    if (index === -1)
        return NextResponse.json({ message: "Task not found" }, { status: 404 });

    const body = await req.json().catch(() => null);
    if (!body)
        return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });

    const title =
        typeof body?.title === "string" && body.title.trim() !== ""
        ? body.title.trim()
        : tasksStore.tasks[index].title;

    const done =
        typeof body?.done === "boolean" ? body.done : tasksStore.tasks[index].done;

    tasksStore.tasks[index] = { ...tasksStore.tasks[index], title, done };

    return NextResponse.json({
        message: "Task updated",
        task: tasksStore.tasks[index],
    });
}

// DELETE (delete)
export async function DELETE(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const taskId = parseId(id);
    if (taskId === null)
        return NextResponse.json({ message: "Invalid id" }, { status: 400 });

    const before = tasksStore.tasks.length;
    tasksStore.tasks = tasksStore.tasks.filter((t) => t.id !== taskId);

    if (tasksStore.tasks.length === before) {
        return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task deleted" });
}