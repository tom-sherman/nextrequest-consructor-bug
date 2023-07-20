import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force dynamic";

export function GET(request: NextRequest) {
  const cloned = new NextRequest(request);
  return NextResponse.json(Object.fromEntries(cloned.headers.entries()));
}
