import { UISlider } from "components/UI/Slider";
import { UIInput } from "components/UI/input/Input";
import { useState } from "react";
import styled from "styled-components";

export const HomeScreen = (props: any) => {
  const [num, setNum] = useState("");
  return (
    <Styles>
      <UISlider
        items={Array(50).fill("")}
        slidesToShow={10}
        responsive={[
          { breakpoint: 1199, slidesToShow: 3 },
          { breakpoint: 767, slidesToShow: 2 },
          { breakpoint: 480, slidesToShow: 1 },
        ]}
      >
        {(item: any, index: number) => {
          return <div className="slide-item">{index + 1}</div>;
        }}
      </UISlider>

      <UIInput
        isFormatNumber
        // value={num}
        // onChange={(value: any) => {
        //   console.log("valueeee", value);
        //   setNum(value);
        // }}
      />
    </Styles>
  );
};

const Styles = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .slide-item {
    width: 100px;
    height: 100px;
    color: white;
    background: blue;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;
