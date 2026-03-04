import { NextResponse } from "next/server";

type Task = { id: number; title: string; done: boolean };

let tasks: Task[] = [
  { id: 1, title: "Study Next.js", done: false },
  { id: 2, title: "Finish Assignment 4", done: false },
];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const title = typeof body?.title === "string" ? body.title : "Untitled task";

    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      done: false,
    };

    tasks.push(newTask);
    return NextResponse.json(newTask, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body. Send: { \"title\": \"...\" }" },
      { status: 400 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const id = Number(body?.id);

    if (!Number.isFinite(id)) {
      return NextResponse.json(
        { message: "Invalid id. Send: { \"id\": 1, \"title\": \"...\", \"done\": true }" },
        { status: 400 }
      );
    }

    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    const title = typeof body?.title === "string" ? body.title : tasks[index].title;
    const done = typeof body?.done === "boolean" ? body.done : tasks[index].done;

    tasks[index] = { ...tasks[index], title, done };

    return NextResponse.json({ message: "Task updated", task: tasks[index] });
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const id = Number(body?.id);

    if (!Number.isFinite(id)) {
      return NextResponse.json(
        { message: "Invalid id. Send: { \"id\": 1 }" },
        { status: 400 }
      );
    }

    const before = tasks.length;
    tasks = tasks.filter((t) => t.id !== id);

    if (tasks.length === before) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task deleted" });
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 }
    );
  }
}