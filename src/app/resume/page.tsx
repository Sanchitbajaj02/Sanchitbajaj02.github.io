import { BookOpen } from "lucide-react";
import React from "react";

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
    skillName: "Web designing",
    percentage: "90%",
  },
  {
    skillName: "System Design and Optimizations",
    percentage: "92%",
  },
  {
    skillName: "Content Creation",
    percentage: "75%",
  },
  {
    skillName: "Personal Branding",
    percentage: "80%",
  },
];

type SkillItem = (typeof skills)[0];

export default function ResumePage() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

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
                70% reduction in processing time. Exposed the tightly coupled
                internal APIs to integrate into OIM application of their own.
              </li>
              <li className="list-disc">
                Identified and mitigated critical security vulnerabilities,
                significantly improving product quality and boosting overall
                client satisfaction.
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

        <ul className="skills-list content-card">
          {skills &&
            skills.length > 0 &&
            skills.map((skill: SkillItem) => {
              return (
                <li className="skills-item" key={skill.skillName}>
                  <div className="title-wrapper">
                    <h5 className="h5">{skill.skillName}</h5>
                    <data value="80">{skill.percentage}</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </article>
  );
}
