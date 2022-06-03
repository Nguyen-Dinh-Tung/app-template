import { Button } from "components/UI/Button";
import { SlickSlider } from "components/UI/SlickSlider";
import React from "react";
import Main from "screens/main";

const HomeScreen = () => {
  return (
    <Main>
      Home Screen
      <Button>Button</Button>
      <SlickSlider items={Array(10).fill("")}>
        {(item: any, ind: number) => {
          return (
            <div>
              <div style={{ background: "red" }}>{ind}</div>
            </div>
          );
        }}
      </SlickSlider>
    </Main>
  );
};

export default HomeScreen;
