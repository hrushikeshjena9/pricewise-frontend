import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
const YouMayLike = ({ data }) => {
  console.log(data);

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
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
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className="nw-val you-may-like">
        <div className="container">
          <h4 className="nw-val-ti">You might be interested in</h4>
          <ReactOwlCarousel className="owl-theme" {...options}>
            {data.map((pro, i) => (
              <div key={i} className="pro-bx">
                <div className="bx-top">
                  <Image
                    src={pro.banner_image}
                    width={285}
                    height={190}
                    alt="product1"
                  />
                  <dv className="wish-list">
                    <i class="far fa-heart"></i>
                  </dv>
                  {pro.available_status == 1 && (
                    <i class="bx bxs-circle bx-flashing dot-green blink-dot"></i>
                  )}
                  {pro.available_status == 2 && (
                    <i class="bx bxs-circle bx-flashing dot-orange blink-dot"></i>
                  )}
                  {pro.available_status == 3 && (
                    <i class="bx bxs-circle bx-flashing dot-gold blink-dot"></i>
                  )}
                  {pro.available_status == 0 && (
                    <i class="bx bxs-circle bx-flashing dot-grey blink-dot"></i>
                  )}
                </div>
                <Link href={`/shop/${pro.slug}`}>
                  <h5 className="pro-title equal-height">{pro.title}</h5>
                </Link>
                <p className="v-details">
                  incl. VAT and free shipping above €50
                  <a href="javascript:void(0);">
                    <i className="fas green-cyan fa-info-circle ms-2"></i>
                  </a>
                </p>
                <div className="row">
                  <div className="col-6">
                    <h4 className="pro-price">
                      € {pro.sell_price} <span>€ {pro.actual_price}</span>
                    </h4>
                  </div>
                  <div className="col-6">
                    <div className="form-check compair-pro">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="procompair"
                      />
                      <label className="form-check-label" htmlFor="procompair">
                        Vergelijk
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 pro-reivew">
                    <Rating
                      initialValue={pro.rating}
                      size={20}
                      readonly
                      allowFraction
                      fillColor="gold"
                      emptyColor="gray"
                    />
                    <a href="#" className="review-count">
                      Review {pro.reviews ?? 0}
                    </a>
                  </div>
                  <div className="col-6">
                    <p className="tags">Bestseller</p>
                    <p className="stock-status">
                      {pro.available_status == 1 && "Op voorraad"}
                      {pro.available_status == 2 && "Beperkt voorraad"}
                      {pro.available_status == 3 && "Op aanvraag"}
                      {pro.available_status == 0 && "Uitverkocht"}
                    </p>
                  </div>
                </div>
                <div className="row highlights">
                  {pro.highlights && pro.highlights.length > 0 && (
                    <div className="col-12">
                      <h5>Highlights</h5>
                      <ul className="unstyled">
                        {pro.highlights.map((hl, i) => (
                          <li key={i}>
                            <i className="fas fa-star" /> {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {pro.available_status == 0 && (
                  <div className="product-not-stock">
                    <button
                      className="pro-not-avl btn"
                      data-bs-toggle="modal"
                      data-bs-target="#notstock"
                    >
                      <Image
                        src="/images/emailbail.png"
                        width={64}
                        height={64}
                        alt="email"
                      />
                    </button>
                  </div>
                )}
                {pro.available_status == 3 && (
                  <div className="product-not-stock">
                    <Link href="/shop/special-request">
                      <button className="pro-not-avl btn">
                        <Image
                          src="/images/requestproduct.png"
                          width={64}
                          height={64}
                          alt="email"
                        />
                      </button>
                    </Link>
                  </div>
                )}
                {(pro.available_status == 1 || pro.available_status == 2) && (
                  <div className="ad-cart-wrp">
                    <Link href="/shop/1">
                      {" "}
                      <button className="pro-add btn">
                        <i class="fas fa-cart-arrow-down"></i> Add to Cart
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </ReactOwlCarousel>
        </div>
      </div>
    </>
  );
};

export default YouMayLike;
