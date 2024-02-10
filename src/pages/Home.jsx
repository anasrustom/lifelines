import React, { useEffect } from "react";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Landing />
        <LandingIntro />
      </div>
    </div>
  );
};

export default Home;
