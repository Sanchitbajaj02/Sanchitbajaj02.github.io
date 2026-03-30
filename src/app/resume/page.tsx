import { BookOpen, Download } from "lucide-react";
import type { Metadata } from "next";
import { skills } from "@/static/skillItems";
import { SkillItem } from "@/types";
import { workExperienceTimeline } from "@/static/workExperienceTimeline";
import { studyTimeline } from "@/static/studyTimeline";
import CountUpBar from "@/components/animations/CountUpBar";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Resume — Sanchit Bajaj | Full-Stack Software Engineer, 2+ Years Experience",
  description:
    "View Sanchit Bajaj's professional resume — 2+ years as a Full-Stack Software Engineer at Infozech, Techcurators, and A4R LLC. Expertise in React, Next.js, Node.js, PostgreSQL, and system design.",
  keywords: [
    "Sanchit Bajaj resume",
    "Sanchit Bajaj CV",
    "full stack developer resume India",
    "software engineer experience",
    "React developer experience",
    "Node.js developer resume",
    "Infozech software engineer",
    "MERN stack developer resume",
  ],
};

const TechStack = () => {
  return (
    <div className="content-card flex flex-wrap justify-start items-start gap-4">
      <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript" alt="JavaScript" width={120} height={28} />
      <img src="https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript" alt="TypeScript" width={120} height={28} />
      <img src="https://img.shields.io/badge/python-%23323330?style=for-the-badge&logo=python" alt="Python" width={100} height={28} />
      <img src="https://img.shields.io/badge/c++-%23323330.svg?style=for-the-badge&logo=c%2B%2B" alt="C++" width={80} height={28} />
      <img src="https://img.shields.io/badge/php-%23323330.svg?style=for-the-badge&logo=php" alt="PHP" width={80} height={28} />

      <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" width={80} height={28} />
      <img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure" width={90} height={28} />
      <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" width={95} height={28} />
      <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#05BDBA" alt="Netlify" width={95} height={28} />

      <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" width={90} height={28} />
      <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" width={80} height={28} />
      <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" width={80} height={28} />
      <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" width={90} height={28} />
      <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" width={140} height={28} />
      <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="React Query" width={140} height={28} />
      <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" width={105} height={28} />
      <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next JS" width={95} height={28} />
      <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" width={80} height={28} />
      <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" width={120} height={28} />
      <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" alt="Expo" width={85} height={28} />
      <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" width={105} height={28} />
      <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" width={115} height={28} />
      <img src="https://img.shields.io/badge/Redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" width={95} height={28} />
      <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" width={140} height={28} />
      <img src="https://img.shields.io/badge/flutter-%2320232a.svg?style=for-the-badge&logo=flutter&logoColor=%2361DAFB" alt="Flutter" width={100} height={28} />
      <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" width={80} height={28} />

      <img src="https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white" alt="Apache" width={100} height={28} />
      <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" width={90} height={28} />

      <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" width={115} height={28} />
      <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" width={90} height={28} />
      <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" width={105} height={28} />
      <img src="https://img.shields.io/badge/Appwrite-black?style=for-the-badge&logo=appwrite&logoColor=#F02D65" alt="Appwrite" width={110} height={28} />
      <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" width={115} height={28} />
      <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" width={90} height={28} />
      <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" width={95} height={28} />

      <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" width={110} height={28} />
      <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" width={80} height={28} />
      <img src="https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white" alt="Gitpod" width={100} height={28} />
      <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" width={100} height={28} />
      <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" width={160} height={28} />
      <img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" width={95} height={28} />
      <img src="https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab CI" width={115} height={28} />

      <img src="https://img.shields.io/badge/figma-black.svg?style=for-the-badge&logo=figma&logoColor=pink" alt="Figma" width={90} height={28} />
      <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva" width={95} height={28} />
    </div>
  );
};

export default function ResumePage() {
  return (
    <article className="resume active" data-page="resume">
      <header className="flex flex-row gap-4 items-center">
        <h2 className="h2 article-title">My Resume</h2>

        <div className="icon-box">
          <a
            href="/docs/Sanchit's%20resume.pdf"
            title="Download Resume PDF"
            role="button"
            download="Sanchit_Bajaj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{ fontSize: "13px", fontWeight: 500 }}
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>
      </header>

      <ScrollReveal>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <BookOpen />
            </div>
            <h3 className="h3 font-semibold">Employment Experience</h3>
          </div>

          <StaggerContainer>
            <ol className="timeline-list">
              {workExperienceTimeline.map((timeline, idx) => (
                <StaggerItem key={idx}>
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">{timeline.title}</h4>
                    <span className="my-2">
                      {timeline.location} | {timeline.year}
                    </span>
                    <ul className="timeline-text pl-4">
                      {timeline.timelineItems.map((item, i) => (
                        <li className="list-disc" key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                </StaggerItem>
              ))}
            </ol>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <BookOpen />
            </div>
            <h3 className="h3 font-semibold">Education</h3>
          </div>

          <StaggerContainer>
            <ol className="timeline-list">
              {studyTimeline.map((timeline, idx) => (
                <StaggerItem key={idx}>
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">{timeline.title}</h4>
                    <span className="my-2">
                      {timeline.location} | {timeline.year}
                    </span>
                    <ul className="timeline-text pl-4">
                      {timeline.timelineItems.map((item, i) => (
                        <li className="list-disc" key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                </StaggerItem>
              ))}
            </ol>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <section className="skill">
          <h3 className="h3 skills-title font-semibold">My Skills</h3>

          <ul className="service-list" style={{ display: "grid", gap: "16px" }}>
            {skills &&
              skills.length > 0 &&
              skills.map((skill: SkillItem, idx: number) => (
                <li key={skill.skillName}>
                  <CountUpBar skill={skill} index={idx} />
                </li>
              ))}
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <section className="tech-stack my-8">
          <h3 className="h3 skills-title font-semibold">Technology Stack</h3>
          <TechStack />
        </section>
      </ScrollReveal>
    </article>
  );
}
