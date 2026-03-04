"use client";

import SwaggerUI from "swagger-ui-react";
import { openapiSpec } from "@/lib/openapi";

export default function DocsPage() {
    return (
        <main style={{ padding: 20 }}>
        <h1>API Documentation</h1>
        <SwaggerUI spec={openapiSpec} />
        </main>
    );
}