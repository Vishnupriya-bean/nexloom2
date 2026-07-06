"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBookACall = pathname === "/book-a-call";

  return (
    <>
      {!isBookACall && <Header />}
      <main>{children}</main>
      {!isBookACall && <Footer />}
    </>
  );
}
