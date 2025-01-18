import { BookOpen, CircleCheckBig, Download } from "lucide-react";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume - Sanchit Bajaj",
};

const skills = [
  {
    skillName: "Web app development",
    percentage: "95%",
  },
  {
    skillName: "Mobile app development",
    percentage: "85%",
  },
  {
    skillName: "Blockchain development",
    percentage: "85%",
  },
  {
    skillName: "UI/UX designing",
    percentage: "90%",
  },
  {
    skillName: "System Design and Optimization",
    percentage: "92%",
  },
  {
    skillName: "Personal Branding",
    percentage: "80%",
  },
];

type SkillItem = (typeof skills)[0];

const SkillBadge = ({ skill }: { skill: SkillItem }) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5">{skill.skillName}</h5>
        <data value={skill.percentage}>{skill.percentage}</data>
      </div>
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: skill.percentage }}
        ></div>
      </div>
    </li>
  );
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
          <a href="docs/Sanchit's%20resume.pdf" title="Download Resume" role="button" target="_blank">
            <Download />
          </a>
        </div>
      </header>

      {/* <a
        className="form-btn"
        style={{ margin: 0, fontSize: 12 }}
        role="button"
        download
      >
        Download Resume
      </a> */}

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer | Infozech Software Pvt. Ltd.
            </h4>

            <span>Jul 2023 — Present</span>

            <ul className="timeline-text pl-4">
              <li className="list-disc">
                Worked on cross-platform technologies to develop customizable
                reporting features based on the IFRS-16 reporting by utilizing
                the DMR modules under the part of user stories
              </li>
              <li className="list-disc">
                Streamlined and optimized the software workflow by migrating
                data processing modules to PostgreSQL functions, resulting in a
                70% reduction in processing time.
              </li>
              <li className="list-disc">
                Exposed the tightly coupled internal APIs for user based access
                to integrate into OIM application of their for fast and
                centralized user management for the client 'Airtel Africa'.
              </li>
              <li className="list-disc">
                Identified and mitigated critical security vulnerabilities,
                improving product quality by 50% and boosting overall client
                satisfaction.
              </li>
              <li className="list-disc">
                Created the Service Order Tracker for the client 'Airtel
                Africa', streamlining order management with efficient asset
                handling and extensive role based access control.
              </li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Developer (Intern) | Techcurators Pvt. Ltd.
            </h4>

            <span>Dec 2022 — May 2023</span>

            {/* <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p> */}
            <ul className="timeline-text pl-4">
              <li className="list-disc">
                Built and deployed a scalable Applicant Tracking System (ATS)
                and Interview-as-a-Service platform using the MERN Stack,
                integrating many third-party and customized APIs, reducing
                time-to-hire by 30% and enhancing the candidate experience.
              </li>
              <li className="list-disc">
                Designed and optimized the user interface to meet modern
                standards, improving usability by 25%.
              </li>
              <li className="list-disc">
                Led the architecture, software design, API testing, and
                deployment on Azure, with CI/CD pipeline integration via GitHub.
              </li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Lead Full-Stack Developer (Intern) | A4R LLC - Fitness Lifestyle
              Token
            </h4>

            <span>Jan 2022 — Sep 2022</span>

            {/* <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p> */}
            <ul className="timeline-text pl-4">
              <li className="list-disc">
                Developed and deployed the A4R token on a Layer-1 ERC20
                blockchain, creating a robust cryptocurrency platform.
              </li>
              <li className="list-disc">
                Built both frontend and backend for the marketing website,
                attracting over 10,000 users, and devised a user dashboard for
                progress tracking.
              </li>
              <li className="list-disc">
                Integrated Web3 authentication and live price tracking of A4R
                token with launchpad access using Moralis.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Manav Rachna University{" "}
              <small className="timeline-text">
                (Faridabad, Haryana, India)
              </small>
            </h4>

            <span>2019 — 2023</span>

            <p className="timeline-text">
              Completed my Bachelors in Computer Science & Technology and
              achieved the aggregated CGPA 8.9.
              <br />
              Actively being a part of Tech Society as a Coordinator and Mentor.
              Participated in many hackathon and led many projects with
              collaboration of students and professors.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Lilawati Vidya Mandir Sr. Sc. School{" "}
              <small className="timeline-text">(Delhi, India)</small>
            </h4>

            <span>2006 — 2019</span>

            <p className="timeline-text">
              Completed my 10<sup>th</sup> and 12<sup>th</sup> while achieving
              the aggregated percentage 88% & 86% respectively. Being a part of
              many technical and literacy clubs, and had a chance to be prefect
              for a year.
            </p>
          </li>

          {/* <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Lilawati Vidya Mandir Sr. Sc. School{" "}
              <small className="timeline-text">
                Delhi, India
              </small>
            </h4>

            <span>2002 — 2004</span>

            <p className="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li> */}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="service-list">
          {skills &&
            skills.length > 0 &&
            skills.map((skill: SkillItem) => (
              <SkillChip key={skill.skillName} skill={skill} />
            ))}
        </ul>
      </section>

      <section className="tech-stack my-8">
        <h3 className="h3 skills-title">Technology Stack</h3>

        <TechStack />
      </section>
    </article>
  );
}
