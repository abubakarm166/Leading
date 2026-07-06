import { NextResponse } from "next/server";

/**
 * Fast liveness probe — no external API calls.
 * Used by PM2 health watchdog; must respond in milliseconds.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      checks: { app: "ok" },
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      pid: process.pid,
    },
    {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
