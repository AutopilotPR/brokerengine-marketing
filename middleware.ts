import { type NextRequest, NextResponse } from "next/server";

// Site is temporarily offline.
export async function middleware(_request: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html><html><head><title>Offline</title><meta name="robots" content="noindex"></head><body style="margin:0;background:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:sans-serif;color:#999;"><p>This site is currently unavailable.</p></body></html>`,
    { status: 503, headers: { "Content-Type": "text/html", "Retry-After": "86400" } }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
