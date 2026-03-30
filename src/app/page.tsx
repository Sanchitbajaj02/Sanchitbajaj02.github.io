import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import TextScramble from "@/components/animations/TextScramble";

export const metadata: Metadata = {
  title: "Sanchit Bajaj — Full-Stack Developer | React · Next.js · Node.js",
  description:
    "Sanchit Bajaj is a Full-Stack Software Engineer based in Delhi, India, with 2+ years of experience building scalable web and mobile apps using React, Next.js, and Node.js.",
};

export type InfoCard = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};

const whatIamDoing: InfoCard[] = [
  {
    cardTitle: "Web Design",
    cardDescription:
      "Crafting visually stunning, user-friendly designs that leave an impact.",
    cardImage: "/assets/images/icon-design.svg",
  },
  {
    cardTitle: "Frontend Development",
    cardDescription:
      "Creating interactive and responsive user interfaces with modern frameworks.",
    cardImage: "/assets/images/icon-dev.svg",
  },
  {
    cardTitle: "Backend Development",
    cardDescription:
      "Designing secure, scalable servers, APIs, and database solutions.",
    cardImage: "/assets/images/icon-dev.svg",
  },
  {
    cardTitle: "Mobile Development",
    cardDescription:
      "Building cross-platform apps for seamless experiences on iOS and Android.",
    cardImage: "/assets/images/icon-app.svg",
  },
];


export default function HomePage() {
  return (
    <>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">
            <TextScramble text="About Me" />
          </h2>
        </header>

        <ScrollReveal>
          <section className="about-text">
            <h4 className="h4 timeline-item-title">Hey, I&apos;m Sanchit Bajaj!</h4>
            <p className="timeline-item-title">
              I&apos;ve helped reduce system processing time by{" "}
              <strong>70%</strong>, onboarded <strong>10,000+ users</strong> to a
              crypto ecosystem, and cut deployment cycle time from 3 hours to 30
              minutes — all as a{" "}
              <strong>Full-Stack Software Engineer with 2+ years of experience</strong>{" "}
              at product companies and startups. I build with{" "}
              <strong>JavaScript · React · Next.js · Node.js · Express.js</strong>{" "}
              and have strong command over{" "}
              <strong>SQL & NoSQL databases</strong> and system design.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <MagneticButton>
                <Link
                  href="/portfolio"
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))",
                    color: "hsl(240,2%,12%)",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  View My Work
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "1px solid hsl(45,100%,71%)",
                    color: "hsl(45,100%,71%)",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Let&apos;s Talk
                </Link>
              </MagneticButton>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="service">
            <h3 className="h3 service-title">What I&apos;m Doing</h3>

            <StaggerContainer>
              <ul className="service-list">
                {whatIamDoing.map((card: InfoCard, idx: number) => (
                  <StaggerItem key={idx}>
                    <li className="service-item">
                      <div className="service-icon-box">
                        <Image
                          src={card.cardImage}
                          alt={card.cardTitle}
                          width={50}
                          height={50}
                        />
                      </div>

                      <div className="service-content-box">
                        <h4 className="h4 service-item-title">{card.cardTitle}</h4>
                        <p className="service-item-text">{card.cardDescription}</p>
                      </div>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </section>
        </ScrollReveal>


        <ScrollReveal delay={0.1}>
          <section
            style={{
              marginTop: "32px",
              padding: "20px 24px",
              borderRadius: "12px",
              background: "var(--bg-gradient-jet)",
              border: "1px solid hsl(0,0%,22%)",
            }}
          >
            <h3 className="h3" style={{ marginBottom: "8px" }}>
              From My Blog
            </h3>
            <p
              style={{ fontSize: "13px", opacity: 0.75, marginBottom: "16px" }}
            >
              I write about JavaScript, React, system design, and software
              engineering on Hashnode.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <MagneticButton>
                <Link
                  href="/blog"
                  style={{
                    display: "block",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))",
                    color: "hsl(240,2%,12%)",
                    fontWeight: 600,
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  Read All Articles
                </Link>
              </MagneticButton>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section style={{ marginTop: "40px" }}>
            <h3 className="h3" style={{ marginBottom: "16px" }}>
              Frequently Asked Questions
            </h3>

            <StaggerContainer>
              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  {
                    q: "Is Sanchit Bajaj available for new opportunities?",
                    a: "Yes — I am currently open to full-time roles, freelance projects, and consulting engagements. Feel free to reach out via the Contact page or book a call on Topmate.",
                  },
                  {
                    q: "What technologies does Sanchit Bajaj specialise in?",
                    a: "I specialise in JavaScript and TypeScript across the full stack — React and Next.js on the frontend, and Node.js with Express.js on the backend. I also have hands-on experience with PostgreSQL, MongoDB, Redis, React Native, and cloud platforms including AWS and Azure.",
                  },
                  {
                    q: "What kinds of projects has Sanchit Bajaj worked on?",
                    a: "I have built ATS and interview-automation platforms, IFRS-16 financial reporting systems, blockchain-based token ecosystems with 10,000+ users, and real-time service order trackers for Airtel Africa. My work spans startups, enterprises, and freelance projects.",
                  },
                  {
                    q: "How can I contact Sanchit Bajaj?",
                    a: "You can reach me at sanchitbajaj02@gmail.com, send a message via the Contact page, or book a call directly at topmate.io/sanchitbajaj02.",
                  },
                  {
                    q: "Where is Sanchit Bajaj based?",
                    a: "I am based in Delhi, India, and am open to remote opportunities worldwide as well as on-site roles in India.",
                  },
                ].map(({ q, a }, idx) => (
                  <StaggerItem key={idx}>
                    <details
                      style={{
                        padding: "16px",
                        borderRadius: "10px",
                        background: "var(--bg-gradient-jet)",
                        border: "1px solid hsl(0,0%,22%)",
                        cursor: "pointer",
                      }}
                    >
                      <summary
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {q}
                        <span style={{ opacity: 0.5, flexShrink: 0 }}>+</span>
                      </summary>
                      <p
                        style={{
                          marginTop: "10px",
                          fontSize: "13px",
                          lineHeight: 1.7,
                          opacity: 0.8,
                        }}
                      >
                        {a}
                      </p>
                    </details>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </section>
        </ScrollReveal>
      </article>
    </>
  );
}
