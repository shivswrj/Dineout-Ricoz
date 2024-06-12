import { useMemo } from "react";
import PropTypes from "prop-types";
import "./store-google-play-style-black.css";

const StoreGooglePlayStyleBlack = ({
  className = "",
  storeGooglePlayStyleBlack,
  storeGooglePlayStyleBlackWidth,
  storeGooglePlayStyleBlackHeight,
  storeGooglePlayStyleBlackPosition,
  storeGooglePlayStyleBlackTop,
  storeGooglePlayStyleBlackLeft,
  storeGooglePlayStyleBlackOverflow,
}) => {
  const storeGooglePlayStyleBlackStyle = useMemo(() => {
    return {
      width: storeGooglePlayStyleBlackWidth,
      height: storeGooglePlayStyleBlackHeight,
      position: storeGooglePlayStyleBlackPosition,
      top: storeGooglePlayStyleBlackTop,
      left: storeGooglePlayStyleBlackLeft,
      overflow: storeGooglePlayStyleBlackOverflow,
    };
  }, [
    storeGooglePlayStyleBlackWidth,
    storeGooglePlayStyleBlackHeight,
    storeGooglePlayStyleBlackPosition,
    storeGooglePlayStyleBlackTop,
    storeGooglePlayStyleBlackLeft,
    storeGooglePlayStyleBlackOverflow,
  ]);

  return (
    <img
      className={`storegoogle-play-styleblack ${className}`}
      alt=""
      src={storeGooglePlayStyleBlack}
      style={storeGooglePlayStyleBlackStyle}
    />
  );
};

StoreGooglePlayStyleBlack.propTypes = {
  className: PropTypes.string,
  storeGooglePlayStyleBlack: PropTypes.string,

  /** Style props */
  storeGooglePlayStyleBlackWidth: PropTypes.any,
  storeGooglePlayStyleBlackHeight: PropTypes.any,
  storeGooglePlayStyleBlackPosition: PropTypes.any,
  storeGooglePlayStyleBlackTop: PropTypes.any,
  storeGooglePlayStyleBlackLeft: PropTypes.any,
  storeGooglePlayStyleBlackOverflow: PropTypes.any,
};

export default StoreGooglePlayStyleBlack;
