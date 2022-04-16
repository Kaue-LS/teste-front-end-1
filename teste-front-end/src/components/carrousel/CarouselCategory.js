import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/Carrousel.scss";
export default function CarouselCategory({showArrows, children }) {
  // const CustomRightArrow = ({onClick}) => {
  //   return <button style={{backgroundColor:'wheat'}} onClick={() => onClick()} >direita</button>;
  // };

  return (
    <section >
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        shouldResetAutoplay
        //   autoPlaySpeed={0}
        centerMode={false}
      className=" Carrousel-Category"
        containerClass="container"
        dotListClass=""
        //   draggable
        // customDot={images}
        infinite={true}
        itemClass=""
        keyBoardControl
        renderDotsOutside={true}
        
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1075,
            },

            items: 4,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
      
       
        {children}
      </Carousel>
    </section>
  );
}
