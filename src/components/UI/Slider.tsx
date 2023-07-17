import React, { useRef } from "react";
import styled from "styled-components";

/* <UISlider
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
</UISlider>; */

interface Props {
  children: any;
  items: any[];
  responsive: any[];
  slidesToShow: number;
}

export const UISlider = ({
  items,
  children,
  responsive,
  slidesToShow,
}: Props) => {
  const ref: any = useRef();
  return (
    <Styles responsive={responsive} slidesToShow={slidesToShow}>
      <div
        className="slide-action"
        onClick={() => {
          ref.current.scrollBy({ left: -10, behavior: "smooth" });
        }}
      >
        Prev
      </div>
      <div className="slide-cover" ref={ref}>
        {items.map(
          (item: any, ind: number) =>
            children && React.cloneElement(children(item, ind), { key: ind })
        )}
      </div>
      <div
        className="slide-action"
        onClick={() => {
          ref.current.scrollBy({ left: 10, behavior: "smooth" });
        }}
      >
        Next
      </div>
    </Styles>
  );
};

const calMinWidth = (slidesToShow: number) => {
  return `calc(${100 / slidesToShow}% - ${
    ((slidesToShow - 1) * 16) / slidesToShow
  }px)`;
};

const Styles = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .slide-action {
    cursor: pointer;
  }

  .slide-cover {
    background: red;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    overflow: auto;
    scroll-snap-type: x mandatory;
    > div {
      scroll-snap-align: start;
      min-width: ${({ slidesToShow }: any) => calMinWidth(slidesToShow)};
    }
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  ${({ responsive }: any) => {
    return responsive.map(
      (r: any) => ` @media only screen and (max-width: ${r.breakpoint}px){
            .slide-cover {
                > div{
                    min-width: ${calMinWidth(r.slidesToShow)};
                }
            }
        }`
    );
  }}
`;
