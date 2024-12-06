import Image from "next/image";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const EventsTab2Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const mainCarouselRef = useRef();
  const thumbnailCarouselRef = useRef();
  const handleSlideChange = (event) => {
    setActiveIndex(event);
  };
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setLoadingIndex(index);
  };
  const options = {
    margin: 10,
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    mouseDrag: true,
    autoplaySpeed: 2000,
    navText: [
      "<i className='fal fa-chevron-left'></i>",
      "<i className='fal fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  const options2 = {
    margin: 10,
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    mouseDrag: true,
    autoplaySpeed: 2000,
    navText: [
      "<i className='fal fa-chevron-left'></i>",
      "<i className='fal fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  const images = [
    "/images/placeholder.png",
    "/images/payslip.png",
    "/images/reserve.png",
    "/images/profile1.png",
    "/images/placeholder.png",
  ];
  return (
    <>
      <div className="tabinsidebx table-responsive">
        <div className="client-slider">
          <OwlCarousel
            {...options}
            className="banner-slider event-img-slider"
            ref={thumbnailCarouselRef}
            startPosition={activeIndex}
          >
            {images.map((item, index) => (
              <div className="item" key={index}>
                <div className="stp-imgupload">
                  <Image width={200} height={200} alt="aa" src={item} />
                  <a
                    className="pl-us"
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                    data-img-src="/images/placeholder.png"
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <i className="fas fa-plus" />
                  </a>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div
          className="modal fade"
          id="imageModal"
          tabIndex={-1}
          aria-labelledby="imageModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content img-pop">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times" />
              </button>
              <div className="modal-body text-center">
                <div id="imageCarousel" className="owl-theme">
                  <OwlCarousel
                    {...options2}
                    className="banner-slider event-img-slider"
                    ref={mainCarouselRef}
                    startPosition={activeIndex}
                    onTranslate={handleSlideChange}
                  >
                    {images.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="stp-imgupload">
                          <Image width={200} height={200} alt="aa" src={item} />
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                  {/* Images and text areas will be dynamically added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-4">
            <div className="viwcal-bx">
              <h6>Portefolio:</h6>
              <p>Zaal</p>
              <ul className="list-unstyled">
                <li>Catering</li>
                <li>Versiering/stylisten</li>
                <li>Muziek/Foto-videograaf</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="viwcal-bx">
              <h6>Capaciteit:</h6>
              <ul className="list-unstyled">
                <li>
                  Min: <span>....</span>
                </li>
                <li>
                  Max: <span>....</span>
                </li>
                <li>
                  Parkeren: <span>.....</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="viwcal-bx">
              <h6>Aanvang:</h6>
              <ul className="list-unstyled">
                <li>Datum: DD-MM-JJJJ</li>
                <li>Van: 12:00 Tot 21:00</li>
              </ul>
              <h6>Aanvang:</h6>
              <ul className="list-unstyled">
                <li>Plaatsnaam</li>
              </ul>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead></thead>
        </table>
      </div>
    </>
  );
};

export default EventsTab2Slider;
