export const openapiSpec = {
    openapi: "3.0.0",
    info: {
        title: "Tasks API",
        version: "1.0.0",
        description: "Assignment Log Book API (dummy data, no database).",
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
                responses: {
                    201: { description: "Created" },
                    400: { description: "Bad Request" },
                },
            },
        },

        "/api/tasks/{id}": {
            get: {
                summary: "Get task detail",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "number" },
                    },
                ],
                responses: {
                    200: { description: "OK" },
                    400: { description: "Invalid id" },
                    404: { description: "Not found" },
                },
            },
            put: {
                summary: "Update a task",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "number" },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                            title: { type: "string" },
                            done: { type: "boolean" },
                            },
                        },
                        example: { title: "Updated Task", done: true },
                        },
                    },
                },
                responses: {
                    200: { description: "Updated" },
                    400: { description: "Bad Request" },
                    404: { description: "Not found" },
                },
            },
            delete: {
                summary: "Delete a task",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "number" },
                    },
                ],
                responses: {
                    200: { description: "Deleted" },
                    400: { description: "Invalid id" },
                    404: { description: "Not found" },
                },
            },
        },
    },
};