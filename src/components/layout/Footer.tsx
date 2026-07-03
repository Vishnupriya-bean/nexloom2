import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(222,47%,6%)] pt-15 pb-11">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:ml-58 lg:mr-[59px] lg:px-8">

        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-3">
              <span className="font-base text-xl text-white">
                Nex<span className="text-accent">loom</span>
              </span>
            </Link>
            <p className="max-w-[330px] text-[14px] leading-[1.7] font-normal text-[#AEB7C9]">
  Technology advice for established
  <br />
  businesses ready to fix what&apos;s slowing
  <br />
  them down.
</p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-8">
            <Link href="/how-we-help" className="footer-link">
              How we help
            </Link>
            <Link href="/about" className="footer-link">
              About
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
            <Link href="/book-a-call" className="footer-link">
              Book a call
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm text-slate-500">
            <span>&copy; {year} Nexloom. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <a href="mailto:info@nexloom.co" className="hover:text-accent transition-colors">
              info@nexloom.co
            </a>
            <span className="hidden sm:inline">&middot;</span>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <span className="hidden sm:inline">&middot;</span>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}