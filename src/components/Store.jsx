import React from "react";
import "./Store.css";
import homeImg from "../assets/home.png";
import aboutImg from "../assets/about.png";

function Store() {
  return (
    <div>
      <main className="main">
        {/* HOME SECTION */}
        <section className="home" id="home">
          <div className="home__container ">
            <img src={homeImg} alt="" className="home__img" />

            <div className="home__data">
              <h1 className="home__title">
                Plants will make <br /> your life better
              </h1>
              <p className="home__description">
                Create incredible plant design for your offices or apartments.
                Add freshness to your new ideas.
              </p>
              <a href="/home" className="button button--flex">
                Explore
                <i className="ri-arrow-right-down-line button__icon"></i>
              </a>
            </div>

            {/* <div className="home__social">
              <span className="home__social-follow">Follow Us</span>
              <div className="home__social-links">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div> */}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about section container" id="about">
          <div className="about__container ">
            <img src={aboutImg} alt="" className="about__img" />

            <div className="about__data">
              <h2 className="section__title about__title">
                Who we really are & <br /> why choose us
              </h2>
              <p className="about__description">
                We have over 4000+ unbiased reviews, and our customers trust our
                plant process and delivery service every time.
              </p>
              <div className="about__details">
                {[
                  "We always deliver on time.",
                  "We give you guides to protect and care for your plants.",
                  "We always come over for a check-up after sale.",
                  "100% money-back guaranteed.",
                ].map((detail, index) => (
                  <p key={index} className="about__details-description">
                    <i className="ri-checkbox-fill about__details-icon"></i>
                    {detail}
                  </p>
                ))}
              </div>
              <a href="/home" className="button--link button--flex">
                Shop Now{" "}
                <i className="ri-arrow-right-down-line button__icon"></i>
              </a>
            </div>
          </div>
        </section>

        {/* STEPS SECTION */}
        <section className="steps section container">
          <div className="steps__bg">
            <h2 className="section__title-center steps__title">
              Steps to start your <br /> plants off right
            </h2>
            <div className="steps__container ">
              {[
                {
                  number: "01",
                  title: "Choose Plant",
                  description:
                    "We have several varieties plants you can choose from.",
                },
                {
                  number: "02",
                  title: "Place an order",
                  description:
                    "Once your order is set, we move to the next step which is the shipping.",
                },
                {
                  number: "03",
                  title: "Get plants delivered",
                  description:
                    "Our delivery process is easy, you receive the plant direct to your door.",
                },
              ].map((step, index) => (
                <div key={index} className="steps__card">
                  <div className="steps__card-number">{step.number}</div>
                  <h3 className="steps__card-title">{step.title}</h3>
                  <p className="steps__card-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Store;
