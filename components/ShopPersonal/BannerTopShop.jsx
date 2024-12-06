import React, { useEffect, useRef, useState } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import Link from "next/link";
const BannerTopShop = ({ banners }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    loop: true,
    smartSpeed: 1000,
    autoplayTimeout: 8000,
    navText: [
      "<i class='fas fa-caret-left'></i>",
      "<i class='fas fa-caret-right'></i>",
    ],

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  const progressBarRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      progressBarRef.current.style.transition = `width ${options.autoplayTimeout}ms linear`;
      progressBarRef.current.style.width = "100%";

      interval = setInterval(() => {
        progressBarRef.current.style.transition = "none";
        progressBarRef.current.style.width = "0%";
        setTimeout(() => {
          progressBarRef.current.style.transition = `width ${options.autoplayTimeout}ms linear`;
          progressBarRef.current.style.width = "100%";
        }, 50);
      }, options.autoplayTimeout);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    progressBarRef.current.style.transition = "none";
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    progressBarRef.current.style.transition = `width ${options.autoplayTimeout}ms linear`;
    progressBarRef.current.style.width = "100%";
  };

  return (
    <>
      <div
        className="shop-banner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <OwlCarousel className="owl-theme" {...options}>
          {banners &&
            banners.map((banner, i) => (
              <div
                key={i}
                className="banner-item"
                style={{ background: `url('/images/banner.jpg')` }}
              >
                <div className="container">
                  <div className="first-shop-banner">
                    <div className="row">
                      <div className="col-6">
                        <h1>
                          {banner.title}
                          <span className="text-white d-block">
                            {banner.sub_title}
                          </span>
                        </h1>
                        <p className="fw-bold text-warning">
                          {banner.description}
                        </p>
                        <Link
                          href={`${banner.btn_url}`}
                          className="pro-add btn"
                        >
                          {banner.btn_text}
                        </Link>
                      </div>
                      <div className="col-6">
                        <Image
                          src={banner.image}
                          width={450}
                          height={300}
                          alt={banner.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
        </OwlCarousel>
        <div className="progress-bar-container">
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      </div>
    </>
  );
};

export default BannerTopShop;
