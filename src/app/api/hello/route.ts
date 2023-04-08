// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }

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

interface devlab_Table {
  dev_id: Generated<number>;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  gender: string;
  date_of_birth: string;
  profile_title: string;
  about_me: string;
  image_url: string;
  github_link: string;
  best_project_title: string;
  best_project_description: string;
  skills: string;
  personal_website: string;
  linkedin_url: string;
  is_approved: boolean;
}

interface Database {
  devlab: devlab_Table
}

export async function GET(request: NextRequest) {
  const db = new Kysely<Database>({
    dialect: new PostgresDialect({
      pool: new Pool({
        ssl: true,
        connectionString: process.env.NEON_DATABASE_URL
      })
    })
  });

  const result = await db
    .selectFrom("devlab")
    .selectAll()
    .execute();

  console.log("Devlab Neon Dev DB Reult on API", result);
  return new NextResponse(JSON.stringify(result))

}