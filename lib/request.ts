import { userAgent } from "next/server";
import type { NextRequest, NextResponse } from 'next/server'

export const LOCALHOST_GEO_DATA = {
  continent: "NA",
  country: "US",
  city: "San Francisco",
  region: "CA",
  latitude: "37.7695",
  longitude: "-122.385",
};

export const getRequestDetails = (req: NextRequest) => {
  const ipAddress =
    req.headers.get("x-forwarded-for") ||
    // Fallback for localhost or non Vercel deployments
    "0.0.0.0";

  return {
    os: userAgent(req).os?.name,
    browser: userAgent(req).browser?.name,
    ip: ipAddress,
    isAndroid: userAgent(req).os?.name === "Android",
    isIOS: userAgent(req).os?.name === "iOS",
  };
};
