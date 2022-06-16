import React from "react";

const Header = () => {
  const logo = "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png";
  return (
    <div className="header__container">
      <div className="container">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <img className="navbar__logo" src={logo} alt="" width={"200px"} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "500px",
            }}>
            <a className="header__nav" href="#model-s">
              Model S
            </a>
            <a className="header__nav" href="#model-y">
              Model Y
            </a>
            <a className="header__nav" href="#model-x">
              Model X
            </a>
            <a className="header__nav" href="#model-3">
              Model 3
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
