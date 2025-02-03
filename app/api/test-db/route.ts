import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()"); // Test query
    client.release();
    
    return NextResponse.json({ success: true, time: result.rows[0] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
