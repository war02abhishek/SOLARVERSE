import React, { Fragment } from "react";
import Header from "../Layout/Header/Header";
import Banner from "../../assets/images/banner.png";

import "./Home.css";

import ContentContainer from "./Content/ContentContainer";
import ServiceContainer from "./ServiceHome/ServiceContainer";
import MobileHeader from "../Layout/Header/MobileHeader";
import Top from "./Top";

const Home = () => {
  const user = "Yash";
  const login = true;
  return (
    <Fragment>
      <div className="Container" id="top">
        <Header
          className="Navbar"
          data={{ User: { user }, Login: { login } }}
        />
        <MobileHeader
          className="MobileNavbar"
          data={{ User: { user }, Login: { login } }}
        />
        <div className="MainContainer">
          <hr className="hr" />
          <div className="BannerContainer">
            <div className="Banner">
              <img src={Banner} className="temp" alt="Banner" />
            </div>
            <hr />
          </div>
          <ContentContainer />
          <ServiceContainer />
          <Top className="ScrollTop" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
