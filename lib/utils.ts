import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Metadata } from "next";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title,
  description,
  image,
  icons = "/favicon.ico",
  metadataBase = "https://ar-preview.flamapp.ai",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  metadataBase?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      creator: "@flamappofficial",
    },
    icons,
    metadataBase: new URL(metadataBase),
    // themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}