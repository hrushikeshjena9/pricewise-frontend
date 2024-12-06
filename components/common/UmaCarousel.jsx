import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function UmaCarousel({ autoPlay = true, autoPlayInterval = 3000, children }) {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [childWidth, setChildWidth] = useState();
  const [totalWidth, setTotalWidth] = useState(0);
  useEffect(() => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild;
      if (firstChild) {
        const childWidth = firstChild.offsetWidth;
        setChildWidth(childWidth);
        setTotalWidth(carouselRef.current.scrollWidth);
      }
    }
  }, [carouselRef]);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -childWidth,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    if (
      carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
      totalWidth
    ) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scrollBy({
        left: +childWidth,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (carouselRef.current && childWidth && totalWidth) {
      if (!intervalRef.current && autoPlay) {
        intervalRef.current = setInterval(() => {
          scrollRight();
        }, autoPlayInterval);
      }
    }
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [carouselRef, childWidth, totalWidth]);
  return (
    <div className="umaCarouselContainer container">
      <div className="umaCarousel" ref={carouselRef}>
        {children}
      </div>
      <div className="buttonContainer">
        <button onClick={scrollLeft}>Previous</button>
        <button onClick={scrollRight}>Next</button>
      </div>
    </div>
  );
}

export default UmaCarousel;
