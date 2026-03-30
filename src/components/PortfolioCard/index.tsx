"use client";
import Image from "next/image";
import Link from "next/link";
import { tabList } from "@/static/tabList";
import { Project, Tab } from "@/types";
import { Eye } from "lucide-react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export const PortfolioCard = ({ projectItem }: { projectItem: Project }) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const prefersReduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 28,
  });

  // Image floats in opposite direction for parallax
  const imgX = useTransform(rawX, [-0.5, 0.5], [6, -6]);
  const imgY = useTransform(rawY, [-0.5, 0.5], [6, -6]);
  const imgSpringX = useSpring(imgX, { stiffness: 200, damping: 24 });
  const imgSpringY = useSpring(imgY, { stiffness: 200, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.li
      ref={cardRef}
      className="project-item active"
      data-filter-item
      data-category={projectItem.tabId.toLowerCase()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReduced
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 800,
              willChange: "transform",
            }
      }
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 24 } }}
    >
      <Link href={projectItem.url} target="_blank" rel="noopener noreferrer">
        <figure className="project-img" style={{ overflow: "hidden", borderRadius: "12px" }}>
          <div className="project-item-icon-box">
            <Eye />
          </div>

          <motion.div
            style={prefersReduced ? {} : { x: imgSpringX, y: imgSpringY }}
          >
            <Image
              src={projectItem.image}
              alt={projectItem.title}
              title={projectItem.title}
              loading="lazy"
              width={500}
              height={500}
              style={{ display: "block" }}
            />
          </motion.div>
        </figure>

        <h3 className="project-title">{projectItem.title}</h3>

        <p className="project-category">
          {tabList &&
            tabList.length > 0 &&
            tabList.find((tab: Tab) => tab?.id === projectItem?.tabId)?.name}
        </p>

        {projectItem.description && (
          <p
            className="project-category"
            style={{ fontSize: "12px", marginTop: "4px", opacity: 0.75, lineHeight: 1.5 }}
          >
            {projectItem.description}
          </p>
        )}

        {projectItem.techStack && projectItem.techStack.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              marginTop: "6px",
            }}
          >
            {projectItem.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "10px",
                  padding: "2px 7px",
                  borderRadius: "999px",
                  background: "hsla(45,100%,71%,0.12)",
                  color: "hsl(45,100%,71%)",
                  border: "1px solid hsla(45,100%,71%,0.25)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.li>
  );
};
