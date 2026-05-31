import dynamic from "next/dynamic";
import {
  BookOpen,
  GraduationCap,
  CircleCheckBig,
  Download,
  Wrench,
  CalendarDays,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";
import { skills } from "@/static/skillItems";
import { SkillItem, TimelineItem } from "@/types";
import { workExperienceTimeline } from "@/static/workExperienceTimeline";
import { studyTimeline } from "@/static/studyTimeline";
import { TechStackSkeleton } from "@/components/TechStack";

const TechStack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <TechStackSkeleton />,
});

export const metadata: Metadata = {
  title: "Resume - Sanchit Bajaj",
};

const SkillChip = ({ skill }: { skill: SkillItem }) => (
  <div className="service-item hover-lift">
    <div className="service-content-box flex flex-row items-center justify-between w-full gap-2">
      <h5 className="h5">{skill.skillName}</h5>
      <div className="icon-box">
        <CircleCheckBig size={18} />
      </div>
    </div>
  </div>
);

const TimelineMeta = ({
  location,
  year,
}: {
  location: string;
  year: string;
}) => (
  <div className="timeline-meta">
    <span className="timeline-pill">
      <CalendarDays size={12} />
      {year}
    </span>
    <span className="timeline-pill timeline-pill--muted">
      <MapPin size={12} />
      {location}
    </span>
  </div>
);

const Timeline = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: TimelineItem[];
}) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">{icon}</div>
      <h3 className="h3 font-semibold">{title}</h3>
    </div>

    <ol className="timeline-list">
      {items.map((entry, idx) => (
        <li
          className="timeline-item fade-in-up"
          key={idx}
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          <h4 className="h4 timeline-item-title">{entry.title}</h4>
          <TimelineMeta location={entry.location} year={entry.year} />
          <ul className="timeline-text">
            {entry.timelineItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default function ResumePage() {
  return (
    <article className="resume active" data-page="resume">
      <header className="flex flex-row gap-4 items-start">
        <h2 className="h2 article-title">My Resume</h2>
        <div className="icon-box">
          <a
            href="docs/Sanchit's%20resume.pdf"
            title="Download Resume"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
          </a>
        </div>
      </header>

      <Timeline
        title="Employment Experience"
        icon={<BookOpen size={18} />}
        items={workExperienceTimeline}
      />

      <Timeline
        title="Education"
        icon={<GraduationCap size={18} />}
        items={studyTimeline}
      />

      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <Wrench size={18} />
          </div>
          <h3 className="h3 font-semibold">My Skills</h3>
        </div>

        <ul className="service-list">
          {skills?.map((skill: SkillItem) => (
            <SkillChip key={skill.skillName} skill={skill} />
          ))}
        </ul>
      </section>

      <section className="tech-stack my-8">
        <h3 className="h3 font-semibold mb-6">Technology Stack</h3>
        <TechStack />
      </section>
    </article>
  );
}
