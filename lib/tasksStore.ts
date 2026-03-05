export type Task = { id: number; title: string; done: boolean };

export const tasksStore = {
    tasks: [
        { id: 1, title: "Study Next.js", done: false },
        { id: 2, title: "Finish Assignment 4", done: false },
    ] as Task[],

    nextId() {
        return this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    },
};