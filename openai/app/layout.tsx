import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenKlap - Free Video Snippets",
  description: "Generate viral short-form clips for free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen">{children}</body>
    </html>
  );
}