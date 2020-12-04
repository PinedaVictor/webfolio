import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// If theme changes on scroll implement different color
// import LightLogo from "../../assets/images/logo/----.png";
// import DarkLogo from "../../assets/images/logo/----.png";
import logo from "../../assets/images/logo/logo.png";
import { LogoWrapper } from "./logo.style";

const Logo = (props) => {
  return (
    <LogoWrapper {...props}>
      <Link to="/">
        <img src={logo} className="img-fluid light-logo" alt="logo" />
        <img src={logo} className="img-fluid dark-logo" alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

Logo.propTypes = {
  justifycontent: PropTypes.string,
};

Logo.defaultProps = {
  justifycontent: "flex-start",
};

export default Logo;
