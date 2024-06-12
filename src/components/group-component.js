import { useMemo } from "react";
import PropTypes from "prop-types";
import "./group-component.css";

const GroupComponent = ({
  className = "",
  group8442,
  prop,
  kebab,
  unsplashUC0HZdUitWY,
  prop1,
  propTop,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const divStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const kebabStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const div1Style = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  return (
    <div className={`group-div ${className}`} style={groupDivStyle}>
      <div className="group-child2" />
      <div className="group-parent">
        <img className="group-child3" alt="" src={group8442} />
        <div className="star-parent">
          <img className="star-icon" alt="" src="/star-7.svg" />
          <div className="div" style={divStyle}>
            {prop}
          </div>
        </div>
      </div>
      <div className="kebab" style={kebabStyle}>
        {kebab}
      </div>
      <div className="lorem-ipsum-is">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </div>
      <div className="rectangle-parent1">
        <div className="group-child4" />
        <div className="order-now">Order Now</div>
      </div>
      <div className="group-container">
        <div className="unsplashuc0hzduitwy-parent">
          <img
            className="unsplashuc0hzduitwy-icon"
            alt=""
            src={unsplashUC0HZdUitWY}
          />
          <div className="ellipse-parent">
            <div className="group-child5" />
            <div className="div1" style={div1Style}>
              {prop1}
            </div>
          </div>
        </div>
        <div className="group-child6" />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  group8442: PropTypes.string,
  prop: PropTypes.string,
  kebab: PropTypes.string,
  unsplashUC0HZdUitWY: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propLeft1: PropTypes.any,
  propLeft2: PropTypes.any,
  propLeft3: PropTypes.any,
};

export default GroupComponent;
