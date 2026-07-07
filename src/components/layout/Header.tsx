"use client";

import Link from "next/link";
import { siteConfig } from "@/data/content";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBookACall = pathname === "/book-a-call";

  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="Nexloom home">
          <img src="/nexloom-mark.svg" alt="" className="logo-img" />
          <span className="wordmark"><span className="nex">Nex</span><span className="loom">loom</span></span>
        </Link>
        <nav className="nav-links">
          {siteConfig.navLinks.map((link) => {
            if (isBookACall && link.label === "Contact") return null;
            return (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            );
          })}
          <Link href={siteConfig.bookingUrl} className="btn">
            Book a call →
          </Link>
        </nav>
      </div>
    </header>
  );
}