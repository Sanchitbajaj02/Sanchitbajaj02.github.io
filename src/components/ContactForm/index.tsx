"use client";
import React, { FormEvent, useState } from "react";
import emailObject from "@emailjs/browser";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      setStatus("error");
      return;
    }

    try {
      const res = await emailObject.send(
        "service_m25e4kp",
        "template_8c1zgma",
        {
          to_name: "Sanchit",
          from_name: formData.get("fullname"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        publicKey
      );
      if (res.status === 200) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "40px 24px",
            borderRadius: "12px",
            background: "hsla(140,60%,12%,0.6)",
            border: "1px solid hsl(140,55%,28%)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.15 }}
          >
            <CheckCircle size={44} style={{ color: "hsl(140,75%,55%)" }} />
          </motion.div>
          <p style={{ fontWeight: 700, fontSize: "16px", color: "hsl(140,75%,65%)" }}>
            Message sent!
          </p>
          <p style={{ fontSize: "13px", opacity: 0.75, lineHeight: 1.6 }}>
            Thanks for reaching out — I&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              marginTop: "8px",
              padding: "8px 18px",
              borderRadius: "8px",
              border: "1px solid hsl(0,0%,30%)",
              background: "transparent",
              color: "hsl(0,0%,72%)",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
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
            placeholder="Write your message in 100 words..."
            required
            minLength={5}
            maxLength={1000}
            rows={5}
          />

          <AnimatePresence>
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  fontSize: "13px",
                  color: "hsl(0,80%,65%)",
                  marginBottom: "8px",
                }}
              >
                Something went wrong — please email me at{" "}
                <a
                  href="mailto:sanchitbajaj02@gmail.com"
                  style={{ color: "hsl(45,100%,71%)", textDecoration: "underline" }}
                >
                  sanchitbajaj02@gmail.com
                </a>
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            className="form-btn"
            type="submit"
            disabled={status === "sending"}
            whileHover={status !== "sending" ? { scale: 1.03 } : undefined}
            whileTap={status !== "sending" ? { scale: 0.97 } : undefined}
            style={{ opacity: status === "sending" ? 0.75 : 1 }}
          >
            {status === "sending" ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                  style={{ display: "flex" }}
                >
                  <Loader2 size={16} />
                </motion.span>
                <span>Sending…</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
