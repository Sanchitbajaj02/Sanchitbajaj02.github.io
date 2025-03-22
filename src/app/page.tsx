// import { CircleX } from "lucide-react";

export type InfoCard = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};

/*
/assets/images/icon-design.svg
/assets/images/icon-dev.svg
/assets/images/icon-app.svg
/assets/images/icon-photo.svg
*/

const whatIamDoing: InfoCard[] = [
  {
    cardTitle: "Web Design",
    cardDescription:
      "Crafting visually stunning, user-friendly designs that leave an impact.",
    cardImage: "/assets/images/icon-design.svg",
  },
  {
    cardTitle: "Frontend Development",
    cardDescription:
      "Creating interactive and responsive user interfaces with modern frameworks.",
    cardImage: "/assets/images/icon-dev.svg",
  },
  {
    cardTitle: "Backend development",
    cardDescription:
      "Designing secure, scalable servers, APIs, and database solutions.",
    cardImage: "/assets/images/icon-dev.svg",
  },
  {
    cardTitle: "Mobile Development",
    cardDescription:
      "Building cross-platform apps for seamless experiences on iOS and Android.",
    cardImage: "/assets/images/icon-app.svg",
  },
];

export default function HomePage() {
  return (
    <>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <h4 className="h4 timeline-item-title">👋 Hey, I'm Sanchit Bajaj!</h4>
          <p className="timeline-item-title">
            Results-driven{" "}
            <strong>Software Engineer with 2+ years of experience</strong>{" "}
            developing scalable applications, optimizing system performance
            (improving response times by 50%), and enhancing security.
            Proficient in web development technologies, including{" "}
            <strong>JavaScript</strong> (React, Next.js, Node.js, Express.js),
            with a strong understanding of{" "}
            <strong>SQL & NoSQL databases.</strong>
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            {whatIamDoing.map((card: InfoCard, idx: number) => {
              return (
                <li className="service-item" key={idx}>
                  <div className="service-icon-box">
                    <img
                      src={card.cardImage}
                      alt="design icon"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{card.cardTitle}</h4>

                    <p className="service-item-text">{card.cardDescription}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-1.png"
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Daniel lewis
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-2.png"
                    alt="Jessica miller"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Jessica miller
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-3.png"
                    alt="Emily evans"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Emily evans
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-4.png"
                    alt="Henry william"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Henry william
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <CircleX />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="/assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div> */}

        {/* <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section> */}
      </article>
    </>
  );
}
