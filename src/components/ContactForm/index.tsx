"use client";
import React, { FormEvent } from "react";
import emailObject from "@emailjs/browser";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const publicKey: string | undefined =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (publicKey) {
      emailObject
        .send(
          "service_m25e4kp",
          "template_8c1zgma",
          {
            to_name: "Sanchit",
            from_name: formData.get("fullname"),
            email: formData.get("email"),
            message: formData.get("message"),
          },
          publicKey!
        )
        .then(
          (res) => {
            console.log("SUCCESS!", res);
            if (res.status === 200) {
              alert("Thank you for submitting. I will contact you soon!");
            }
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      alert(
        "It seems there is a problem sending message! Please reach out to me directly at my email"
      );
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          name="fullname"
          className="form-input"
          placeholder="Full name"
          required
        />

        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email address"
          required
        />
      </div>

      <textarea
        name="message"
        className="form-input"
        placeholder="Your Message"
        required
      ></textarea>

      <button className="form-btn" type="submit">
        <Send />
        <span>Send Message</span>
      </button>
    </form>
  );
};
