import { UIButton } from "components/UI/Button";
import { UIList } from "components/UI/List";
import styled from "styled-components";

export const HomeScreen = (props: any) => {
  const prev = () => {
    const el = document.getElementsByClassName("slide-cover")[0];
    el.scrollBy({ behavior: "smooth", top: 0, left: -10 });
  };
  const next = () => {
    const el = document.getElementsByClassName("slide-cover")[0];
    el.scrollBy({ behavior: "smooth", top: 0, left: 10 });
  };
  return (
    <Styles>
      <div className="slide-wrapper">
        <UIButton onClick={prev}>Left</UIButton>
        <UIList items={Array(10).fill("")} className="slide-cover">
          {(item: any, index: number) => {
            return <div className="slide-item">{index + 1}</div>;
          }}
        </UIList>
        <UIButton onClick={next}>Right</UIButton>
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0;
  .slide-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .slide-item {
    min-width: 100px;
    height: 100px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    border-radius: 4px;
    color: white;
    scroll-snap-align: start;
  }

  .slide-cover {
    display: flex;
    align-items: center;
    gap: 16px;
    /* width: 448px; */
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
`;
