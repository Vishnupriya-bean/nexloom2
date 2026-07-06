import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import RootShell from "@/components/layout/RootShell";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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

  openGraph: {
    title: "Nexloom | We Build Software That Ships",
    description:
      "Senior-led software engineering consultancy specialising in product engineering, cloud DevOps, AI automation, and integrations.",
    url: "https://nexloom.co",
    siteName: "Nexloom",
    images: [
      {
        url: "/favicon.svg",
        width: 1230,
        height: 630,
        alt: "Nexloom Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexloom | We Build Software That Ships",
    description:
      "Senior-led software engineering consultancy specialising in product engineering, cloud DevOps, AI automation, and integrations.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
