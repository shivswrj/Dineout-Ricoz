import { useCallback } from "react";
import Property1Group from "./property1-group";
import PropTypes from "prop-types";
import "./frame2.css";

const Frame2 = ({ className = "" }) => {
  const onTodaySpecialOffersClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='loremIpsumIs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurMenuTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='menuThatAlways']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={`frame3 ${className}`}>
      <img className="frame-child1" alt="" src="/group-8438@2x.png" />
      <div className="rectangle-div" />
      <img className="ellipse-icon" alt="" src="/ellipse-45.svg" />
      <div className="today-special-offers-parent">
        <div
          className="today-special-offers"
          onClick={onTodaySpecialOffersClick}
        >
          Today special offers
        </div>
        <div className="why-dineout">Why Dineout</div>
        <div className="today-special-offers" onClick={onOurMenuTextClick}>
          Our Menu
        </div>
        <div className="why-dineout">Our Popular food</div>
      </div>
      <img className="polygon-icon" alt="" src="/polygon-1.svg" />
      <img className="vector-icon" alt="" src="/vector-3.svg" />
      <div className="frame-child2" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="sign-up">Sign Up</div>
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="downlode-app">Downlode App</div>
      </div>
      <div className="best-cooks-and">
        Best cooks and best delivery guys all at your service. Hot tasty food
        will reach you in 60 minutes.
      </div>
      <div className="were-serious-for-container">
        <span>{`We're `}</span>
        <span className="serious">Serious</span>
        <span>{` For `}</span>
        <span className="serious">Food</span>
        <span>{` & `}</span>
        <span className="delivery">Delivery</span>
        <span>.</span>
      </div>
      <img className="logo-icon" alt="" src="/logo.svg" />
      <div className="rectangle-container">
        <div className="group-inner" />
        <div className="people-trust-us">People Trust us</div>
        <img className="group-child1" alt="" src="/group-8426.svg" />
      </div>
      <img className="frame-child3" alt="" src="/group-8429@2x.png" />
      <img className="frame-child4" alt="" src="/vector-2.svg" />
      <img className="arrow-1-stroke" alt="" src="/arrow-1-stroke.svg" />
      <img className="orange-icon" alt="" src="/orange.svg" />
      <div className="frame-child5" />
      <img className="decore-icon" alt="" src="/decore.svg" />
      <div className="search-food">Search food</div>
      <img className="bxbx-search-icon" alt="" src="/bxbxsearch.svg" />
      <img className="frame-child6" alt="" src="/group-8430.svg" />
      <img className="emojionefire-icon" alt="" src="/emojionefire.svg" />
      <img className="mint-icon" alt="" src="/-mint.svg" />
      <img className="frame-child7" alt="" src="/group-8431.svg" />
      <img className="frame-child8" alt="" src="/group-8432@2x.png" />
      <img className="frame-child9" alt="" src="/group-8433.svg" />
      <img className="card-icon" alt="" src="/card.svg" />
      <img
        className="meal-png-download-image-2-icon"
        alt=""
        src="/mealpngdownloadimage-2@2x.png"
      />
      <img className="pngfind-1-icon" alt="" src="/pngfind-1@2x.png" />
      <img
        className="meal-png-download-image-1-icon"
        alt=""
        src="/mealpngdownloadimage-1@2x.png"
      />
      <img
        className="t4gag1e6fmeokhs7mt3g58vhbt-1-icon"
        alt=""
        src="/t4gag1e6fmeokhs7mt3g58vhbt-1@2x.png"
      />
      <div className="play-demo">
        <div className="watch-video">Watch Video</div>
        <img className="play-button-icon" alt="" src="/play-button.svg" />
      </div>
      <img className="seekpng-icon1" alt="" src="/seekpng@2x.png" />
      <Property1Group
        property1Group8434Width="1.375rem"
        property1Group8434Overflow="unset"
        property1Group8434Height="3.813rem"
        property1Group8434Position="absolute"
        property1Group8434Top="54.75rem"
        property1Group8434Left="4.375rem"
      />
    </div>
  );
};

Frame2.propTypes = {
  className: PropTypes.string,
};

export default Frame2;
