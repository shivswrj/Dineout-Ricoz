import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import "./frame1.css";

const Frame1 = ({ className = "" }) => {
  return (
    <div className={`frame4 ${className}`}>
      <img className="rosemary-icon" alt="" src="/rosemary.svg" />
      <b className="today-special-offers-container">
        <span>{`Today `}</span>
        <span className="special">special</span>
        <span> offers</span>
      </b>
      <div className="lorem-ipsum-is1" data-scroll-to="loremIpsumIs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <GroupComponent
        group8442="/group-8442.svg"
        prop="(4.5)"
        kebab="Kebab"
        unsplashUC0HZdUitWY="/unsplashuc0hzduitwy@2x.png"
        prop1="10$"
      />
      <GroupComponent
        group8442="/group-84421.svg"
        prop="(4.8)"
        kebab="Chicken Tikka"
        unsplashUC0HZdUitWY="/unsplashuc0hzduitwy@2x.png"
        prop1="15$"
        propTop="12.688rem"
        propLeft="28.481rem"
        propLeft1="1.875rem"
        propLeft2="4.063rem"
        propLeft3="1rem"
      />
      <GroupComponent
        group8442="/group-84422.svg"
        prop="(4.2)"
        kebab="Desi Chowmein"
        unsplashUC0HZdUitWY="/unsplashuc0hzduitwy@2x.png"
        prop1="8$"
        propTop="12.688rem"
        propLeft="48.981rem"
        propLeft1="1.938rem"
        propLeft2="3.563rem"
        propLeft3="1.188rem"
      />
      <GroupComponent
        group8442="/group-8442.svg"
        prop="(5.0)"
        kebab="Chicken Chargha"
        unsplashUC0HZdUitWY="/unsplashuc0hzduitwy@2x.png"
        prop1="28$"
        propTop="12.688rem"
        propLeft="69.481rem"
        propLeft1="1.875rem"
        propLeft2="2.813rem"
        propLeft3="0.875rem"
      />
      <img className="group-icon1" alt="" src="/group@2x.png" />
    </div>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
};

export default Frame1;
