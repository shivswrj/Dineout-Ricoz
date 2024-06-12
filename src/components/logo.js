import PropTypes from "prop-types";
import "./logo.css";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <div className="social-media">
        <img className="facebook-icon" alt="" src="/facebook.svg" />
        <img className="instagram-icon" alt="" src="/instagram.svg" />
        <img className="twitter-icon" alt="" src="/twitter.svg" />
      </div>
      <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</div>
      <div className="logo1">
        <div className="dineout">Dineout</div>
      </div>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
