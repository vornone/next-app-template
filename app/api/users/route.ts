import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM grc_user"); // Test query
    client.release();
    return NextResponse.json({ success: true, result: result.rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
