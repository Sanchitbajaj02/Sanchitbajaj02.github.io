import { BookOpen, CircleCheckBig, Download } from "lucide-react";
import type { Metadata } from "next";
import { skills } from "@/static/skillItems";
import { SkillItem } from "@/types";
import { workExperienceTimeline } from "@/static/workExperienceTimeline";
import { studyTimeline } from "@/static/studyTimeline";

export const metadata: Metadata = {
  title: "Resume - Sanchit Bajaj",
};

const SkillChip = ({ skill }: { skill: SkillItem }) => {
  return (
    <div className="service-item">
      <div className="service-content-box flex flex-row items-center justify-between w-full">
        <h5 className="h5">{skill.skillName}</h5>

        <div className="icon-box">
          <CircleCheckBig />
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="content-card flex flex-wrap justify-start items-start gap-4">
      <img
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript"
        alt="JavaScript"
      />
      <img
        src="https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript"
        alt="TypeScript"
      />
      <img
        src="https://img.shields.io/badge/python-%23323330?style=for-the-badge&logo=python"
        alt="Python"
      />
      <img
        src="https://img.shields.io/badge/c++-%23323330.svg?style=for-the-badge&logo=c%2B%2B"
        alt="C++"
      />
      <img
        src="https://img.shields.io/badge/php-%23323330.svg?style=for-the-badge&logo=php"
        alt="PHP"
      />

      <img
        src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
        alt="AWS"
      />
      <img
        src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white"
        alt="Azure"
      />
      <img
        src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
        alt="Vercel"
      />
      <img
        src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#05BDBA"
        alt="Netlify"
      />

      <img
        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML5"
      />
      <img
        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS3"
      />
      <img
        src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
        alt="SASS"
      />
      <img
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="React"
      />
      <img
        src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="React Native"
      />
      <img
        src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
        alt="React Query"
      />
      <img
        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
        alt="NodeJS"
      />
      <img
        src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
        alt="Next JS"
      />
      <img
        src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
        alt="JWT"
      />
      <img
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
        alt="Express.js"
      />
      <img
        src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37"
        alt="Expo"
      />
      <img
        src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
        alt="FastAPI"
      />
      <img
        src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
        alt="Socket.io"
      />
      <img
        src="https://img.shields.io/badge/Redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
        alt="Redux"
      />
      <img
        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt="TailwindCSS"
      />
      <img
        src="https://img.shields.io/badge/flutter-%2320232a.svg?style=for-the-badge&logo=flutter&logoColor=%2361DAFB"
        alt="Flutter"
      />
      <img
        src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
        alt="Vite"
      />

      <img
        src="https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white"
        alt="Apache"
      />
      <img
        src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
        alt="Nginx"
      />

      <img
        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
        alt="MongoDB"
      />
      <img
        src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
        alt="MySQL"
      />
      <img
        src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
        alt="Firebase"
      />
      <img
        src="https://img.shields.io/badge/Appwrite-black?style=for-the-badge&logo=appwrite&logoColor=#F02D65"
        alt="Appwrite"
      />
      <img
        src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
        alt="Postgres"
      />
      <img
        src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
        alt="Redis"
      />
      <img
        src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
        alt="Prisma"
      />

      <img
        src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
        alt="Postman"
      />
      <img
        src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
        alt="Git"
      />
      <img
        src="https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white"
        alt="Gitpod"
      />
      <img
        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
        alt="GitHub"
      />
      <img
        src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"
        alt="GitHub  Actions"
      />
      <img
        src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white"
        alt="GitLab"
      />
      <img
        src="https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white"
        alt="GitLab CI"
      />

      <img
        src="https://img.shields.io/badge/figma-black.svg?style=for-the-badge&logo=figma&logoColor=pink"
        alt="Figma"
      />
      <img
        src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
        alt="Canva"
      />
    </div>
  );
};

export default function ResumePage() {
  return (
    <article className="resume active" data-page="resume">
      <header className="flex flex-row gap-4">
        <h2 className="h2 article-title">My Resume</h2>

        <div className="icon-box">
          <a
            href="docs/Sanchit's%20resume.pdf"
            title="Download Resume"
            role="button"
            target="_blank"
          >
            <Download />
          </a>
        </div>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen />
          </div>

          <h3 className="h3 font-semibold">Employment Experience</h3>
        </div>

        <ol className="timeline-list">
          {workExperienceTimeline.map((timeline, idx) => {
            return (
              <li className="timeline-item" key={idx}>
                <h4 className="h4 timeline-item-title">{timeline.title}</h4>

                <span className="my-2">
                  {timeline.location} | {timeline.year}
                </span>
                <ul className="timeline-text pl-4">
                  {timeline.timelineItems.map((item, i) => {
                    return (
                      <li className="list-disc" key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen />
          </div>

          <h3 className="h3 font-semibold">Education</h3>
        </div>

        <ol className="timeline-list">
          {studyTimeline.map((timeline, idx) => {
            return (
              <li className="timeline-item" key={idx}>
                <h4 className="h4 timeline-item-title">{timeline.title}</h4>

                <span className="my-2">
                  {timeline.location} | {timeline.year}
                </span>
                <ul className="timeline-text pl-4">
                  {timeline.timelineItems.map((item, i) => {
                    return (
                      <li className="list-disc" key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title font-semibold">My skills</h3>

        <ul className="service-list">
          {skills &&
            skills.length > 0 &&
            skills.map((skill: SkillItem) => (
              <SkillChip key={skill.skillName} skill={skill} />
            ))}
        </ul>
      </section>

      <section className="tech-stack my-8">
        <h3 className="h3 skills-title font-semibold">Technology Stack</h3>

        <TechStack />
      </section>
    </article>
  );
}
