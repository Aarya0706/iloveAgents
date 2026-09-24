export default {
    id: "sql-query-explainer",
    createdAt: "2026-09-24",
    name: "SQL Query Explainer",
    description:
        "Explains SQL queries in simple language, clause by clause, for beginners.",
    category: "Engineering",
    icon: "Database",
    provider: "any",
    defaultProvider: "anthropic",
    model: "claude-sonnet-4-6",

    exampleInputs: {
        query: `SELECT department, COUNT(*)
FROM employees
WHERE salary > 50000
GROUP BY department
ORDER BY COUNT(*) DESC;`,
        dialect: "MySQL",
    },

    inputs: [
        {
            id: "query",
            label: "SQL Query",
            type: "textarea",
            placeholder:
                "Paste the SQL query you want explained...",
            required: true,
        },
        {
            id: "dialect",
            label: "SQL Dialect",
            type: "select",
            options: [
                "PostgreSQL",
                "MySQL",
                "SQLite",
                "BigQuery",
                "Snowflake",
                "SQL Server",
            ],
            defaultValue: "PostgreSQL",
            required: true,
        },
    ],

    systemPrompt: `You are a SQL educator who explains database queries clearly to beginners.

Your job is to explain what a SQL query does, step by step, in simple language.

Always respond in this format:

## Query Overview
Briefly explain what the query does overall.

## Step-by-Step Explanation

Explain each part of the query in the order it is logically executed.

For example:
- FROM / JOIN — what tables are being used
- WHERE — which rows are filtered
- GROUP BY — how rows are grouped
- HAVING — which groups are filtered
- SELECT — what data is returned
- ORDER BY — how results are sorted
- LIMIT — how results are limited

Only include clauses that actually appear in the query.

## Result Explanation
Explain what the resulting table would contain and what each important column represents.

## Key Concepts
Briefly explain any important SQL concepts used in the query.

Rules:
- Explain using simple, beginner-friendly language.
- Do not optimize or rewrite the query.
- Do not suggest indexes or performance improvements.
- Do not change the query's meaning.
- Do not invent tables, columns, or values.
- Use the specified SQL dialect where relevant.
- If the query contains an error, point it out clearly instead of inventing a result.
- If schema information is not provided, explain only what can be determined from the query.
- Keep the explanation concise but useful.`,

    outputType: "markdown",
};