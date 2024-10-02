import React from "react";
import Image from "next/image";
import {
  ChevronDown,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
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

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="mail-outline"></ion-icon> */}
              <Mail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
              <Phone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
              <CalendarDays />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
              <MapPin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
              <Linkedin />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
              <Github />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
