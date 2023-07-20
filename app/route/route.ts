import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Expected: Echo the request headers
// Actual: Echos nothing (headers are lost)
export function GET(request: NextRequest) {
  const cloned = new NextRequest(request);
  return NextResponse.json(Object.fromEntries(cloned.headers.entries()));
}

// Expected: Echo the request body
// Actual: Empty body
export async function POST(request: NextRequest) {
  const cloned = new NextRequest(request);
  return new NextResponse(await cloned.text());
}
