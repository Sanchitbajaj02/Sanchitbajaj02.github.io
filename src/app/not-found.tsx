import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Sanchit Bajaj",
  description: "The page you are looking for does not exist. Return to Sanchit Bajaj's portfolio.",
};

export default function NotFound() {
  return (
    <article
      className="about active"
      data-page="not-found"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        gap: "16px",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          fontWeight: 800,
          background: "linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}
      >
        404
      </h1>

      <h2 className="h2" style={{ marginBottom: "4px" }}>
        Page Not Found
      </h2>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.7,
          maxWidth: "340px",
          lineHeight: 1.6,
        }}
      >
        The page you are looking for doesn&apos;t exist or has been moved. Head
        back to the portfolio.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
        <Link
          href="/"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            background: "linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))",
            color: "hsl(240,2%,12%)",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid hsl(45,100%,71%)",
            color: "hsl(45,100%,71%)",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Contact Me
        </Link>
      </div>
    </article>
  );
}
