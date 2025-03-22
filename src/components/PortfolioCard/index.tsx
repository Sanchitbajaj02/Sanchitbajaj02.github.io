import Image from "next/image";
import Link from "next/link";
import { tabList } from "@/static/tabList";
import { Project, Tab } from "@/types";
import { Eye } from "lucide-react";

export const PortfolioCard = ({ projectItem }: { projectItem: Project }) => {
  return (
    <li
      className="project-item active"
      data-filter-item
      data-category={projectItem.tabId.toLowerCase()}
    >
      <Link href={projectItem.url} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <Eye />
          </div>

          <Image
            src={projectItem.image}
            alt={projectItem.title}
            title={projectItem.title}
            loading="lazy"
            width={500}
            height={500}
          />
        </figure>

        <h3 className="project-title">{projectItem.title}</h3>

        <p className="project-category">
          {tabList &&
            tabList.length > 0 &&
            tabList.find((tab: Tab) => tab?.id === projectItem?.tabId)?.name}
        </p>
      </Link>
    </li>
  );
}