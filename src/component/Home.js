import React from "react";
import egg from "../images/desktop/image-transform.jpg";
import lamp from "../images/desktop/image-stand-out.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <p className="header__tittle">we are creatives</p>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
      <div className="home__content home__content--first">
        <div className="home__content_title">Transform your brand</div>
        <p className="home__content__desc">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className="home__content--border">Learn more</div>
      </div>
      <img className=" home__image home__image--egg" src={egg} alt=" an egg" />
      <img className=" home__image" src={lamp} alt="a lamp" />
      <div className="home__content home__content--second">
        <div className="home__content_title ">
          Stand out to the right audience
        </div>
        <p className="home__content__desc">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, well build and extend
          your brand in digital places.
        </p>
        <div className="home__content--border">Learn more</div>
      </div>
      <div className="home__image home__image--bg1">
        <p className="home__image_title">Graphic design</p>
        <p className="home_image_desc">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div className="home__image home__image--bg2">
        <p className="home__image_title">Photography</p>
        <p className="home_image_desc">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Home;
