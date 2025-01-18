import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Sanchit Bajaj",
};

export default function ContactPage() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Get in Touch!</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50039.70585388934!2d77.19040476705113!3d28.527279416249836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sbd!4v1737195784031!5m2!1sen!2sbd"
            width="1000"
            height="1000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <ContactForm />
      </section>
    </article>
  );
}
