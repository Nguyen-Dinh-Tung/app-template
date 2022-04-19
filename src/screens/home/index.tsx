import React from "react";
import Main from "screens/main";
import sampleImg from "assets/images/top-jackpot.png";

const HomeScreen = () => {
  return (
    <Main>
      Home Screen
      <img src={sampleImg} />
      <div className="slider-wrap"></div>
    </Main>
  );
};

export default HomeScreen;
