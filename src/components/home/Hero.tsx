import Link from "next/link";
import { heroContent, siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow">{heroContent.eyebrow}</div>
        <h1>
          {heroContent.title1}
          <span className="grad-text">{heroContent.titleGradient}</span>
        </h1>
        <p>{heroContent.description}</p>
        <div className="hero-actions">
          <Link href={siteConfig.bookingUrl} className="btn btn-lg">
            {heroContent.buttonText}
          </Link>
          <span className="hero-note">{heroContent.note}</span>
        </div>
      </div>
    </section>
  );
}
