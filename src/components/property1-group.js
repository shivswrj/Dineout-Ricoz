import { useMemo } from "react";
import PropTypes from "prop-types";
import "./property1-group.css";

const Property1Group = ({
  className = "",
  property1Group8434Width,
  property1Group8434Overflow,
  property1Group8434Height,
  property1Group8434Position,
  property1Group8434Top,
  property1Group8434Left,
}) => {
  const property1Group8434Style = useMemo(() => {
    return {
      width: property1Group8434Width,
      overflow: property1Group8434Overflow,
      height: property1Group8434Height,
      position: property1Group8434Position,
      top: property1Group8434Top,
      left: property1Group8434Left,
    };
  }, [
    property1Group8434Width,
    property1Group8434Overflow,
    property1Group8434Height,
    property1Group8434Position,
    property1Group8434Top,
    property1Group8434Left,
  ]);

  return (
    <img
      className={`property-1group-8434 ${className}`}
      alt=""
      src="/slider.svg"
      style={property1Group8434Style}
    />
  );
};

Property1Group.propTypes = {
  className: PropTypes.string,

  /** Style props */
  property1Group8434Width: PropTypes.any,
  property1Group8434Overflow: PropTypes.any,
  property1Group8434Height: PropTypes.any,
  property1Group8434Position: PropTypes.any,
  property1Group8434Top: PropTypes.any,
  property1Group8434Left: PropTypes.any,
};

export default Property1Group;
