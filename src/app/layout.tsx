import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import RootShell from "@/components/layout/RootShell";
import "./globals.css";



export const metadata: Metadata = {
  title: {
    default: "Nexloom | We Build Software That Ships",
    template: "%s | Nexloom",
  },
  description:
    "Senior-led software engineering consultancy specialising in product engineering, cloud DevOps, AI automation, and integrations.",
  metadataBase: new URL("https://nexloom.co"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
