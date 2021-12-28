import styled from "styled-components";
import Carousel from "react-multi-carousel";

const ImgSlider = (props) => {
  const settings = {
    swipeable: true,
    showDots: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Slider {...settings} responsive={responsive}>
      <Wrap>
        <a href="#">
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Slider>
  );
};

const Slider = styled(Carousel)`
  margin-top: 20px;
  overflow: initial;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    background-color: transparent !important;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  & > .react-multiple-carousel__arrow--left {
    left: -75px;
  }

  & > .react-multiple-carousel__arrow--right {
    right: -75px;
  }

  ul.react-multi-carousel-dot-list {
    margin-bottom: -2.5rem;
    justify-content: center;
    margin-left: -1vw;
  }

  ul.react-multi-carousel-dot-list li {
    padding: 8px;
  }

  ul li button {
    height: 10px;
    width: 10px;
    background: rgb(150, 158, 171) !important;
    opacity: 0.5;
  }

  ul li.react-multi-carousel-dot--active button {
    opacity: 1 !important;
    background: #f9f9f9 !important;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
