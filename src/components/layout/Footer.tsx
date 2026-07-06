"use client";

import Link from "next/link";
import { siteConfig } from "@/data/content";
import { useState, useEffect } from "react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="ft">
            <div>
              <div className="logo">
                <img src="/nexloom-mark.svg" alt="" className="logo-img" />
                <span className="wordmark"><span className="nex">Nex</span><span className="loom">loom</span></span>
              </div>
              <p style={{ marginTop: "14px", maxWidth: "34ch" }}>{siteConfig.footerText}</p>
            </div>
            <div className="ft-links">
              {siteConfig.navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href={siteConfig.bookingUrl}>Book a call</Link>
            </div>
          </div>
          <div className="ft-bottom">
            {siteConfig.copyright} &nbsp;·&nbsp; {siteConfig.contactEmail} &nbsp;·&nbsp;{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal("privacy"); }}>Privacy</a> &nbsp;·&nbsp;{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal("terms"); }}>Terms</a>
          </div>
        </div>
      </footer>

      {/* ===== Privacy modal ===== */}
      <div
        className={`modal-overlay ${activeModal === "privacy" ? "open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}
      >
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
          <button className="modal-close" aria-label="Close" onClick={() => setActiveModal(null)}>&times;</button>
          <h2 id="privacy-title">Privacy Policy</h2>
          <div className="eff">Effective date: [Month DD, YYYY]</div>
          <div className="legal-note">Generic template for North American use. This is not legal advice. Have a qualified attorney review and adapt it before publishing.</div>
          <p>Nexloom ("we," "us," or "our") respects your privacy. This policy explains what information we collect through nexloom.co (the "Site"), how we use it, and the choices you have. It is written for visitors in the United States and Canada.</p>
          <h3>Information we collect</h3>
          <ul>
            <li><b>Information you provide.</b> When you book a call, email us, or fill out a form, we collect details such as your name, email address, phone number (if provided), company, and anything you choose to share about your needs.</li>
            <li><b>Information collected automatically.</b> When you visit the Site, we may collect device and usage data such as IP address, browser type, pages viewed, and referring URLs, through cookies and similar technologies.</li>
            <li><b>Scheduling data.</b> Calls are booked through a third-party scheduling provider (Cal.com), which processes the information you enter to confirm your appointment.</li>
          </ul>
          <h3>How we use information</h3>
          <ul>
            <li>To respond to inquiries, schedule and conduct calls, and provide our services.</li>
            <li>To operate, maintain, and improve the Site.</li>
            <li>To send communications you have requested, and to comply with legal obligations.</li>
          </ul>
          <h3>Cookies and analytics</h3>
          <p>We may use cookies and analytics tools to understand how the Site is used. You can control cookies through your browser settings. Disabling cookies may affect some functionality.</p>
          <h3>How we share information</h3>
          <p>We do not sell your personal information. We share it only with service providers who help us operate (for example, scheduling, hosting, and analytics providers), when required by law, or in connection with a business transfer. These providers are bound to protect your information.</p>
          <h3>Data retention and security</h3>
          <p>We keep personal information only as long as needed for the purposes described here or as required by law, and we use reasonable safeguards to protect it. No method of transmission or storage is completely secure.</p>
          <h3>Your rights</h3>
          <p>Depending on where you live, you may have rights to access, correct, delete, or limit the use of your personal information. California residents have rights under the CCPA/CPRA, and Canadian residents have rights under PIPEDA and applicable provincial laws. To make a request, contact us at {siteConfig.contactEmail}. We will not discriminate against you for exercising these rights.</p>
          <h3>Children's privacy</h3>
          <p>The Site is not directed to children under 16, and we do not knowingly collect their information.</p>
          <h3>Changes to this policy</h3>
          <p>We may update this policy from time to time. The "Effective date" above reflects the latest version.</p>
          <h3>Contact</h3>
          <p>Questions about this policy? Email {siteConfig.contactEmail}.</p>
        </div>
      </div>

      {/* ===== Terms modal ===== */}
      <div
        className={`modal-overlay ${activeModal === "terms" ? "open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}
      >
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="terms-title">
          <button className="modal-close" aria-label="Close" onClick={() => setActiveModal(null)}>&times;</button>
          <h2 id="terms-title">Terms of Service</h2>
          <div className="eff">Effective date: [Month DD, YYYY]</div>
          <div className="legal-note">Generic template for North American use. This is not legal advice. Have a qualified attorney review and adapt it before publishing.</div>
          <p>These Terms of Service ("Terms") govern your use of nexloom.co (the "Site") and any related services provided by Nexloom ("we," "us," or "our"). By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.</p>
          <h3>Use of the Site</h3>
          <p>You may use the Site for lawful purposes only. You agree not to misuse the Site, interfere with its operation, attempt unauthorized access, or use it in any way that violates applicable U.S. or Canadian law.</p>
          <h3>Services and communications</h3>
          <p>Information on the Site, including any discovery call, is provided for general informational purposes and does not create a client relationship or a binding commitment until set out in a separate written agreement. Scheduling is handled through a third-party provider subject to its own terms.</p>
          <h3>Intellectual property</h3>
          <p>The Site and its content, including text, graphics, logos, and the Nexloom name and mark, are owned by us or our licensors and are protected by applicable law. You may not copy, reproduce, or reuse them without our written permission.</p>
          <h3>Third-party links and services</h3>
          <p>The Site may link to third-party websites or services we do not control. We are not responsible for their content, policies, or practices.</p>
          <h3>Disclaimer of warranties</h3>
          <p>The Site is provided "as is" and "as available" without warranties of any kind, express or implied, including fitness for a particular purpose and non-infringement, to the fullest extent permitted by law.</p>
          <h3>Limitation of liability</h3>
          <p>To the fullest extent permitted by law, Nexloom will not be liable for any indirect, incidental, special, or consequential damages, or loss of profits or data, arising from your use of the Site.</p>
          <h3>Indemnification</h3>
          <p>You agree to indemnify and hold Nexloom harmless from claims arising out of your misuse of the Site or violation of these Terms.</p>
          <h3>Governing law</h3>
          <p>These Terms are governed by the laws of [State/Province], [Country], without regard to conflict-of-law rules. Disputes will be handled in the courts located there.</p>
          <h3>Changes to these Terms</h3>
          <p>We may update these Terms from time to time. Continued use of the Site after changes means you accept the updated Terms.</p>
          <h3>Contact</h3>
          <p>Questions about these Terms? Email {siteConfig.contactEmail}.</p>
        </div>
      </div>
    </>
  );
}