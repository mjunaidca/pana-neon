import { NextRequest, NextResponse } from "next/server";

import { Pool } from 'pg';

import {
    Kysely,
    PostgresDialect,
    Generated,
    ColumnType,
    Selectable,
    Insertable,
    Updateable,
} from 'kysely';

interface dev_Table {
    id: Generated<number>;
    name: string;
    email: string;
    password: string;
}

interface Database {
    dev: dev_Table
}

export async function POST(request: NextRequest) {

    const data = await request.json();

    const { name, password } = data;

    console.log("Neon Dev DB Reult on API", data);


    const db = new Kysely<Database>({
        dialect: new PostgresDialect({
            pool: new Pool({
                ssl: true,
                connectionString: process.env.NEON_DATABASE_URL
            })
        })
    });

    const result = await db
        .selectFrom("dev")
        .selectAll()
        .where("name", "=", name)
        .execute();

    console.log("Neon Dev DB Reult on API", result);
    return new NextResponse(JSON.stringify(result[0]))

}