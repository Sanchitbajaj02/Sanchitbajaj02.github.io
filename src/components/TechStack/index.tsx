import { techStack } from "@/static/techStack";

export default function TechStack() {
  return (
    <div className="content-card flex flex-wrap justify-start items-start gap-3">
      {techStack.map((badge) => (
        <img
          key={badge.alt}
          src={badge.src}
          alt={badge.alt}
          loading="lazy"
          decoding="async"
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        />
      ))}
    </div>
  );
}

export function TechStackSkeleton() {
  return (
    <div className="content-card flex flex-wrap gap-3">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="skeleton"
          style={{ width: 110, height: 28, borderRadius: 6 }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
