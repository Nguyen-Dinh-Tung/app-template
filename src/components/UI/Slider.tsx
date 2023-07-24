import React, { useRef, useState } from "react";
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
  const [isScroll, setScroll] = useState(false);
  const [clientX, setClientX] = useState(0);
  const onMouseDown = (e: any) => {
    setScroll(true);
    setClientX(e.clientX);
  };
  const onMouseMove = (e: any) => {
    if (isScroll) {
      const left = clientX - e.clientX;
      ref.current.scrollBy({ left: left });
      setClientX(e.clientX);
    }
  };
  const onMouseUp = () => {
    setScroll(false);
    setClientX(0);
  };

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
      <div
        className="slide-cover"
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        style={{
          scrollSnapType: isScroll ? "unset" : "x mandatory",
          cursor: isScroll ? "grabbing" : "unset",
        }}
      >
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
