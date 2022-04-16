import React from "react";
import Logo from "../Assets/popcorn.svg";

const Header = () => {
  return (
    <section>
      <div className="header-container">
        <img src={Logo} alt="logo" />
      </div>
    </section>
  );
};

export default Header;
