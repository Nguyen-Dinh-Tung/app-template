import { UISlider } from "components/UI/Slider";
import styled from "styled-components";

export const HomeScreen = (props: any) => {
  return (
    <Styles>
      <UISlider
        items={Array(10).fill("")}
        slidesToShow={4}
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
    </Styles>
  );
};

const Styles = styled.div`
  padding: 50px;
  .slide-item {
    width: 100px;
    height: 50px;
    color: white;
    background: blue;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;
