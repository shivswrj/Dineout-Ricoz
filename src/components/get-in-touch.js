import PropTypes from "prop-types";
import "./get-in-touch.css";

const GetInTouch = ({ className = "" }) => {
  return (
    <div className={`get-in-touch ${className}`}>
      <div className="lorem-ipsum-dolor1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </div>
      <div className="get-in-touch1">Get in touch</div>
      <div className="button">
        <img className="button-child" alt="" src="/rectangle-1.svg" />
        <div className="text-icon">
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <img className="get-in-touch-child" alt="" src="/rectangle-10.svg" />
      <div className="email">Email</div>
    </div>
  );
};

GetInTouch.propTypes = {
  className: PropTypes.string,
};

export default GetInTouch;
