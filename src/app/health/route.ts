import { BASE_URL } from "@/utils/constants";
import { NextResponse } from "next/server";

const API_PROBE_TIMEOUT_MS = 3_000;

async function probeUpstreamApi(): Promise<"ok" | "unreachable" | "skipped"> {
  if (!BASE_URL) {
    return "skipped";
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), API_PROBE_TIMEOUT_MS);

  try {
    const res = await fetch(`${BASE_URL}/blogs`, {
      signal: controller.signal,
      headers: { "x-website": "true" },
      cache: "no-store",
    });
    return res.ok ? "ok" : "unreachable";
  } catch {
    return "unreachable";
  } finally {
    clearTimeout(timer);
  }
}

/** Liveness probe — always 200 when Node responds. API status is informational. */
export async function GET() {
  const api = await probeUpstreamApi();
  const degraded = api === "unreachable";

  return NextResponse.json(
    {
      status: degraded ? "degraded" : "ok",
      checks: { app: "ok", api },
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    { status: 200 },
  );
}
