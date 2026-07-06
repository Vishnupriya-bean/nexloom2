import Header from "./Header";
import Footer from "./Footer";

export default function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
