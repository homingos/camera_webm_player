import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";
import { getRequestDetails } from "./lib/request";
import { parse } from "./lib/parse";

export function middleware(request: NextRequest) {
  const { fullPath, domain } = parse(request);

  const { isAndroid, isIOS, browser } = getRequestDetails(request);

  const ua = userAgent(request);
  const isMobile = ua.device.type === "mobile" || isAndroid || isIOS;


  const deviceType = isMobile ? 'mobile' : 'desktop';
  return NextResponse.rewrite(
    new URL(`/${deviceType}${fullPath}`, request.url)
  );
}

export const config = {
    matcher: [
      /*
       * Match all paths except for:
       * 1. /api/ routes
       * 2. /_next/ (Next.js internals)
       * 3. /_proxy/ (proxies for third-party services)
       * 4. /_static/ (static files inside /public folder)
       * 5. Metadata files: favicon.ico, sitemap.xml, robots.txt, manifest.webmanifest, .well-known
       */
      "/((?!api/|_next/|_proxy/|_static/|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|.well-known).*)",
    ],
  };