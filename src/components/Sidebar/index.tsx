"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Mail,
  // Phone,
  CalendarDays,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [toggleData, setToggleData] = useState<boolean>(false);

  const toggleSidebar = () => {
    setToggleData((prev) => !prev);
  };

  return (
    <aside className={`sidebar ${toggleData && "active"}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/assets/images/profile-pic.png"
            alt="Sanchit Bajaj"
            width={200}
            height={200}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Sanchit Bajaj
          </h1>

          <p className="title">Full Stack developer</p>
        </div>

        <button className="info_more-btn active" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <ChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:sanchitbajaj02@gmail.com"
                className="contact-link"
              >
                sanchitbajaj02@gmail.com
              </a>
            </div>
          </li>

          {/* <li className="contact-item">
            <div className="icon-box">
              <Phone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <CalendarDays />
            </div>

            <div className="contact-info">
              <p className="contact-title">Schedule a call</p>

              {/* <time dateTime="1982-06-23">June 23, 1982</time> */}
              <Link href="https://topmate.io/sanchitbajaj02" target="_blank" className="contact-link">
                topmate.io/sanchitbajaj02
              </Link>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Delhi, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <Link href="https://www.linkedin.com/in/sanchitbajaj02" target="_blank" className="social-link">
              <Linkedin />
            </Link>
          </li>

          <li className="social-item">
            <Link href="https://github.com/sanchitbajaj02" target="_blank" className="social-link">
              <Github />
            </Link>
          </li>

          <li className="social-item">
            <Link href="https://x.com/solitrix02" target="_blank" className="social-link">
              <Twitter />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
