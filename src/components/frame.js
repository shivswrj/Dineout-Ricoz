import PropTypes from "prop-types";
import "./frame.css";

const Frame = ({ className = "" }) => {
  return (
    <div className={`frame5 ${className}`}>
      <img className="decore-icon1" alt="" src="/decore1.svg" />
      <div className="rectangle-parent2">
        <div className="group-child7" />
        <div className="about-us3">About Us</div>
      </div>
      <b className="we-are-more-container">
        <span>{`We are `}</span>
        <span className="more">more</span>
        <span>{` than `}</span>
        <span className="multiple">multiple</span>
        <span> service</span>
      </b>
      <div className="this-is-a">
        This is a type of resturent which typically serves food and drink, in
        addition to light refreshments such as baked goods or snacks. The term
        comes frome the rench word meaning food
      </div>
      <img className="frame-child10" alt="" src="/vector-9.svg" />
      <div className="online-order">Online Order</div>
      <div className="pre-reservation">Pre-Reservation</div>
      <div className="super-chef">Super Chef</div>
      <div className="clean-kitchen">Clean Kitchen</div>
      <div className="oragonized-dineout-place">Oragonized Dineout Place</div>
      <div className="service">24/7 Service</div>
      <img className="image-15-icon" alt="" src="/image-15@2x.png" />
      <img className="image-17-icon" alt="" src="/image-17@2x.png" />
      <img className="image-18-icon" alt="" src="/image-18@2x.png" />
      <img className="image-20-icon" alt="" src="/image-18@2x.png" />
      <img className="image-21-icon" alt="" src="/image-18@2x.png" />
      <img className="image-19-icon" alt="" src="/image-18@2x.png" />
      <img className="frame-child11" alt="" src="/group-8472@2x.png" />
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
