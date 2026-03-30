import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Sanchit Bajaj — Let's Build Something Together",
  description:
    "Get in touch with Sanchit Bajaj — Full-Stack Software Engineer based in Delhi, India. Available for full-time roles, freelance projects, and consulting. Book a call or send a message.",
  keywords: [
    "contact Sanchit Bajaj",
    "hire full stack developer Delhi",
    "hire React developer India",
    "full stack developer available for work",
    "book a call software engineer India",
    "freelance developer Delhi",
  ],
};

export default function ContactPage() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Get in Touch</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50039.70585388934!2d77.19040476705113!3d28.527279416249836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sbd!4v1737195784031!5m2!1sen!2sbd"
            width="1000"
            height="1000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanchit Bajaj location — Delhi, India"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Send a Message</h3>
        <ContactForm />
      </section>

      <section
        style={{
          marginTop: "32px",
          padding: "20px 24px",
          borderRadius: "12px",
          background: "var(--bg-gradient-jet)",
          border: "1px solid hsl(0,0%,22%)",
        }}
      >
        <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "12px" }}>
          Prefer to see my work first?
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link
            href="/portfolio"
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid hsl(45,100%,71%)",
              color: "hsl(45,100%,71%)",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            View Portfolio
          </Link>
          <Link
            href="/resume"
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid hsl(0,0%,40%)",
              color: "hsl(0,0%,84%)",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            View Resume
          </Link>
        </div>
      </section>
    </article>
  );
}
