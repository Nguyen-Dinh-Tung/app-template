import { Button } from "components/UI/Button";
import { List } from "components/UI/List";
import { Select } from "components/UI/Select";
import { SlickSlider } from "components/UI/SlickSlider";
import React from "react";
import Main from "screens/main";

const HomeScreen = () => {
  return (
    <Main>
      Home Screen
      <Button>Button</Button>
      <Button outline>Outline button</Button>
      <Select options={[1, 2, 3, 4, 5]} />
      <SlickSlider items={Array(10).fill("")}>
        {(item: any, ind: number) => {
          return (
            <div>
              <div style={{ background: "red" }}>{ind}</div>
            </div>
          );
        }}
      </SlickSlider>
      <List items={[300, 400, 500, 600, 700, 800, 900]}>
        {(item: any) => {
          return (
            <p style={{ fontWeight: item, fontSize: "24px" }}>ROBOTO {item}</p>
          );
        }}
      </List>
    </Main>
  );
};

export default HomeScreen;
