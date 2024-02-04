import React from "react";
import { GitHub, Linkedin, Twitter, ArrowRight } from "react-feather";
import Socials from "@/components/ui/socials";

export default function Contactus() {
  return (
    <div>
      <section id="contact" className="relative w-full p-0">
        <div className="w-full h-full p-10 py-16 md:p-24 bg-stone-800 dark:bg-stone-700 text-stone-50 rounded-t-xl flex flex-col items-start justify-between">
          <div className="h-full">
            <h2 className="text-2xl font-Syne font-medium">
              {/* <LetterAnim text="" /> */}
              Have a project for Me?
            </h2>
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-Syne font-bold">
              {/* <LetterAnim text="Let's Talk" /> */}
              Lets Talk
              {/* Let&rsquo;s Talk */}
            </h1>
            <form
              action="mailto:dev2005adi@gmail.com"
              method="get"
              encType="text/plain"
              className="max-w-md flex flex-col gap-3 flex-1 my-20"
            >
              {/* <Field required id="subject" labelText="Subject" />
              <Field required id="email" labelText="Your Email" />
              <Field
                required
                id="body"
                labelText="Message"
                placeholder="Your Message"
                type="textarea"
              /> */}
              <button className="text-base leading-none py-4 bg-stone-50 text-stone-900 self-start">
                Get in touch
                <ArrowRight className="transform scale-150" />
              </button>
            </form>
          </div>
          <footer className="w-full flex flex-col md:flex-row md:items-center justify-between">
            <span className="text-2xl font-Syne font-medium">
              {/* <LetterAnim text="Aditya Nandan" /> */}
              {/* Aditya Nandan */}
              Sanchit Bajaj
            </span>
            <Socials
              socials={[
                {
                  name: "Linkedin",
                  href: "https://www.linkedin.com/in/aditya-nandan-thats-it/",
                  icon: <Linkedin />,
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com/iMADi69235681",
                  icon: <Twitter />,
                },
                {
                  name: "Github",
                  href: "https://github.com/iMADi-ARCH",
                  icon: <GitHub />,
                },
              ]}
            />
          </footer>
        </div>
      </section>
    </div>
  );
}
