export const openapiSpec = {
    openapi: "3.0.0",
    info: {
        title: "Tasks API",
        version: "1.0.0",
        description: "Week 4 Assignment - CRUD endpoints using dummy data (no database).",
    },
    paths: {
        "/api/tasks": {
        get: {
            summary: "Get all tasks",
            responses: { 200: { description: "OK" } },
        },
        post: {
            summary: "Create a task",
            requestBody: {
            required: true,
            content: {
                "application/json": {
                schema: {
                    type: "object",
                    properties: { title: { type: "string" } },
                    required: ["title"],
                },
                example: { title: "New Task" },
                },
            },
            },
            responses: { 201: { description: "Created" } },
        },
        put: {
            summary: "Update a task",
            requestBody: {
            required: true,
            content: {
                "application/json": {
                schema: {
                    type: "object",
                    properties: {
                    id: { type: "number" },
                    title: { type: "string" },
                    done: { type: "boolean" },
                    },
                    required: ["id"],
                },
                example: { id: 1, title: "Updated Task", done: true },
                },
            },
            },
            responses: {
            200: { description: "Updated" },
            404: { description: "Not found" },
            },
        },
        delete: {
            summary: "Delete a task",
            requestBody: {
            required: true,
            content: {
                "application/json": {
                schema: {
                    type: "object",
                    properties: { id: { type: "number" } },
                    required: ["id"],
                },
                example: { id: 2 },
                },
            },
            },
            responses: {
            200: { description: "Deleted" },
            404: { description: "Not found" },
            },
        },
        },
    },
};