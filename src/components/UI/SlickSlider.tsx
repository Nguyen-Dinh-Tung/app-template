import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSettings: any = {
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: true,
  centerPadding: "0",
  dots: false,
  fade: false,
  autoplay: false,
  infinite: true,
  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  swipe: true,
  // prevArrow: <div>LeftArrow</div>,
  // nextArrow: <div>RightArrow</div>,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SlickSlider = ({ items, settings, children }: any) => {
  return (
    <Styles>
      <Slider {...defaultSettings} {...(settings || {})}>
        {items.map(
          (item: any, ind: number) =>
            children && React.cloneElement(children(item, ind), { key: ind })
        )}
      </Slider>
    </Styles>
  );
};

const Styles = styled.div`
  width: 90%;
  margin: 0 auto;
  display: block;
  position: relative;

  .slide-wrapp {
    background: blue;
    border: 1px solid;
  }

  .slide-item {
    background: red;
    margin: 0 auto;
    width: 50px;
  }
`;
