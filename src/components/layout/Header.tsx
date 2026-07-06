import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Header() {
  return (
    <>
      <div className="ribbon">Working draft — new positioning, matched to your live site's theme.</div>

      <header>
        <div className="wrap nav">
          <Link href="/" className="logo" aria-label="Nexloom home">
            <img src="/nexloom-mark.svg" alt="" className="logo-img" />
            <span className="wordmark"><span className="nex">Nex</span><span className="loom">loom</span></span>
          </Link>
          <nav className="nav-links">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href={siteConfig.bookingUrl} className="btn">
              Book a call →
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}