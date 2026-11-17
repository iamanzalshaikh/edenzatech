import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Edenza Tech (EDENZATECH) collects, uses, and protects personal information when you visit our website or contact us about software projects.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const lastUpdated = "November 17, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12 text-center">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Legal
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            How {siteConfig.name} collects, uses, and protects your information when you use our
            website and services.
          </p>
          <p className="mt-4 text-xs text-white/60">Last updated: {lastUpdated}</p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <article className="prose prose-lg prose-slate mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-brand-blue prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline prose-strong:text-brand-blue">
            <p>
              This Privacy Policy describes how <strong>Edenza Tech</strong> (also referred to as{" "}
              <strong>{siteConfig.name}</strong>, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) handles personal information when you visit{" "}
              <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, "")}</a>, contact us,
              book a consultation, or otherwise engage with our software development services.
            </p>
            <p>
              By using our website or submitting information to us, you acknowledge the practices
              described in this policy. If you do not agree, please do not use the site or provide
              personal information.
            </p>

            <h2>1. Who we are</h2>
            <p>
              Edenza Tech is a full-stack software development company building web applications,
              mobile apps, SaaS platforms, and custom software. We operate from locations in{" "}
              {siteConfig.locations.map((loc) => loc.name).join(" and ")}.
            </p>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>

            <h2>2. Information we collect</h2>
            <p>We may collect the following categories of information:</p>
            <h3>Information you provide</h3>
            <ul>
              <li>
                <strong>Contact and inquiry details</strong> — name, email address, phone number,
                company or project details, and message content submitted through our contact form,
                consultation planner, email, or WhatsApp.
              </li>
              <li>
                <strong>Business correspondence</strong> — information shared while discussing or
                delivering a project, proposal, or support request.
              </li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>
                <strong>Usage and device data</strong> — IP address, browser type, device type,
                pages visited, referring URLs, and approximate location derived from IP, typically
                via analytics tools.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong> — small files or identifiers used
                to remember preferences, measure site performance, and understand how visitors use
                the site (see Cookies below).
              </li>
            </ul>
            <p>
              We do not knowingly collect sensitive personal data through the marketing website
              unless you voluntarily include it in a message. Please avoid sending passwords,
              payment card numbers, or unnecessary sensitive information via forms or chat.
            </p>

            <h2>3. How we use your information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>Respond to inquiries and schedule consultations</li>
              <li>Provide proposals, quotes, and project-related communications</li>
              <li>Deliver and support contracted software services</li>
              <li>Improve our website, content, and user experience</li>
              <li>Measure traffic and engagement (for example via Google Analytics)</li>
              <li>Comply with legal obligations and protect our rights and security</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use contact-form submissions for
              unrelated third-party marketing lists.
            </p>

            <h2>4. Cookies and analytics</h2>
            <p>
              Our website may use cookies, local storage, and similar technologies for essential
              site functionality and analytics. We use Google Analytics to understand aggregated
              visitor behavior (for example, which pages are viewed and how visitors arrive).
            </p>
            <p>
              You can control cookies through your browser settings. Blocking some cookies may
              affect site features. For more about Google Analytics, see Google&apos;s own privacy
              documentation and advertising settings.
            </p>

            <h2>5. How we share information</h2>
            <p>We may share personal information with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> who help us operate the site or business (for
                example hosting, email delivery, analytics, or messaging tools), under obligations
                to protect the data
              </li>
              <li>
                <strong>Professional advisors</strong> such as legal or accounting partners when
                reasonably required
              </li>
              <li>
                <strong>Authorities</strong> when required by law, court order, or to protect rights,
                safety, or security
              </li>
            </ul>
            <p>
              If we work with subcontractors on a client project, we share only what is needed to
              perform the work, consistent with our agreements with you.
            </p>

            <h2>6. Data retention</h2>
            <p>
              We retain personal information only as long as needed for the purposes described
              above — for example, to respond to an inquiry, maintain a client relationship, meet
              legal or accounting requirements, or resolve disputes. Inquiry messages that do not
              lead to a project may be kept for a limited period for follow-up and record-keeping,
              then deleted or anonymized when no longer needed.
            </p>

            <h2>7. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect personal
              information against unauthorized access, loss, misuse, or alteration. No method of
              transmission or storage is completely secure; if you believe your interaction with us
              has been compromised, contact us promptly at{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>

            <h2>8. Your rights and choices</h2>
            <p>
              Depending on your location and applicable law, you may have rights to request access
              to, correction of, or deletion of personal information we hold about you, or to object
              to or restrict certain processing. You may also withdraw consent where processing is
              based on consent.
            </p>
            <p>
              To exercise these rights, email{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> with
              enough detail for us to verify and respond to your request. You may also unsubscribe
              from non-essential marketing emails using the link in those messages, where
              applicable.
            </p>

            <h2>9. International transfers</h2>
            <p>
              Because we operate across {siteConfig.locations.map((loc) => loc.name).join(" and ")}{" "}
              and may use cloud or analytics providers in other countries, your information may be
              processed outside your home country. Where required, we take steps intended to ensure
              appropriate safeguards for such transfers.
            </p>

            <h2>10. Children&apos;s privacy</h2>
            <p>
              Our website and services are directed to businesses and professionals. We do not
              knowingly collect personal information from children under 16. If you believe a child
              has provided us information, contact us and we will take appropriate steps to delete
              it.
            </p>

            <h2>11. Third-party links</h2>
            <p>
              Our site may link to third-party websites or profiles (for example social media). We
              are not responsible for the privacy practices of those sites. Review their policies
              before providing personal information.
            </p>

            <h2>12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
              at the top of this page will change when we do. Continued use of the site after
              changes means you accept the revised policy, to the extent permitted by law.
            </p>

            <h2>13. Contact us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, contact:</p>
            <ul>
              <li>
                <strong>Company:</strong> Edenza Tech ({siteConfig.name})
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
              <li>
                <strong>Locations:</strong>{" "}
                {siteConfig.locations.map((loc) => loc.name).join("; ")}
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <Link href="/contact">Contact page</Link>
              </li>
            </ul>
          </article>
        </Container>
      </section>
    </div>
  );
}
