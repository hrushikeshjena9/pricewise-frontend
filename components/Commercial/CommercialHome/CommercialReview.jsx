import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CommercialReview = () => {

const options = {
    margin: 10,
    loop: true,
    autoplay: true,
    nav: true,
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
        items: 3,
        },
    },
    };
  return (

    <section className="ptb-50 exclu-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="title-bx title-left">
              <h3 className="text-dark fw-medium">
                Bedrijven vinden van <span className="text-warning">Energise...</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="exclu-btn">
              <a href="#" className="btn-three">
                Reviews
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
              <OwlCarousel {...options} className="testimonial-box owl-carousel">
                <div className="testimonial-item">
                  <Image
                    src="/images/profile1.png"
                    height={200}
                    width={200}
                    alt="qwe"
                  />
                  <div className="star">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Energise heeft weer voor een geslaagde vergelijking bij mij
                    gezorgd! Jammer dat ik niet altijd zo makkelijk kan besparen
                    haha :)
                  </p>
                  <div className="test-desc">
                    <div className="row">
                      <div className="col-6">
                        <ul>
                          <li>
                            <span>Gebruiksvriendelijkheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                          <li>
                            <span>Betrouwbaarheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>
                            <span>Klantvriendelijkheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                          <li>
                            <span>Bereikbaarheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4>A. Zegers</h4>
                </div>
                <div className="testimonial-item">
                  <Image
                    src="/images/userimg.png"
                    height={200}
                    width={200}
                    alt="qwe"
                  />
                  <div className="star">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    Energise heeft weer voor een geslaagde vergelijking bij mij
                    gezorgd! Jammer dat ik niet altijd zo makkelijk kan besparen
                    haha :)
                  </p>
                  <div className="test-desc">
                    <div className="row">
                      <div className="col-6">
                        <ul>
                          <li>
                            <span>Gebruiksvriendelijkheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                          <li>
                            <span>Betrouwbaarheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>
                            <span>Klantvriendelijkheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                          <li>
                            <span>Bereikbaarheid</span>
                            <div className="star-bx">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4>A. Zegers</h4>
                </div>
              </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default CommercialReview
