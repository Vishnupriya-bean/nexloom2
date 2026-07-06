import Link from "next/link";
import { ctaContent, siteConfig } from "@/data/content";

export default function CTA() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="cta-inner">
          <h2>
            {ctaContent.title1}
            <span className="grad-text">{ctaContent.titleGradient}</span>
          </h2>
          <p>{ctaContent.description}</p>
          <Link href={siteConfig.bookingUrl} className="btn btn-lg">
            {ctaContent.buttonText}
          </Link>
          <p className="contact-line">{ctaContent.contactLine}</p>
        </div>
      </div>
    </section>
  );
}
