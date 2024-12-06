import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import LoginModal from "../common/LoginModal";
import { useSession } from "next-auth/react";
import CartModal from "../common/CartModal";

const NewArrivals = ({
  data,
  addToWishlist,
  addToCart,
  specialRequest,
  sync,
  setSync,
  setMessage,
  message,
  setSelectedProductId,setRecentlyAddedProduct
}) => {
  const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const { data: session } = useSession();

  const options = {
    margin: 30,
    slideBy: 4,
    responsiveClass: true,
    nav: true,
    autoplayTimeout: 15000,
    dots: false,
    autoplay: true,
    loop: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
        autoplayTimeout: 10000,
      },
      600: {
        items: 1,
        autoplayTimeout: 10000,
      },
      700: {
        items: 2,
        autoplayTimeout: 10000,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>      
      <div className="nw-val">
        <div className="container">
          <h4 className="nw-val-ti">New Arrivals</h4>
          <ReactOwlCarousel className="owl-theme" {...options}>
            {data &&
              data.map((nA, i) => (
                <div key={i} className="pro-bx">
                  <div className="bx-top">
                    <Image
                      src={nA?.banner_image}
                      width={285}
                      height={190}
                      alt="product1"
                    />

                    <div
                      className="wish-list"
                      onClick={() => addToWishlist(nA.id)}
                    >
                      <i className="far fa-heart"></i>
                    </div>
                    <i className="bx bxs-circle bx-flashing dot-green blink-dot"></i>
                  </div>
                  <Link href={`/shop/${nA.slug}`}>
                    <h5 className="pro-title equal-height">{nA.title}</h5>
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
                        € {nA.sell_price} <span>€ {nA.actual_price}</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="procompair"
                        >
                          Vergelijk
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 pro-reivew">
                      <Rating
                        initialValue={nA.rating}
                        size={20}
                        readonly
                        allowFraction
                        fillColor="#FFD700"
                        emptyColor="gray"
                      />
                      <a href="#" className="review-count">
                        Review {nA.reviews?.length ?? 0}
                      </a>
                    </div>
                    <div className="col-6">
                      <p className="tags">Bestseller</p>
                      <p className="stock-status">Op voorraad</p>
                    </div>
                  </div>
                  {nA.highlights && nA.highlights.length > 0 && (
                    <div className="row highlights">
                      <div className="col-12">
                        <h5>Highlights</h5>
                        <ul className="unstyled">
                          {nA.highlights.map((hl, i) => (
                            <li key={i}>
                              <i className="fas fa-star" /> {hl}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {nA.available_status == 0 && (
                    <div className="product-not-stock">
                      <button
                        className="pro-not-avl btn"
                        data-bs-toggle="modal"
                        // data-bs-target="#notstock"
                        data-bs-target={session ? "#notstock" : "#loginModal"}
                        onClick={setSelectedProductId(nA.id)}
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
                  {nA.available_status == 3 && (
                    <div className="product-not-stock">
                      <button
                        className="pro-not-avl btn"
                        data-bs-toggle={session && "modal"}
                        // data-bs-target="#notstock"
                        data-bs-target={!session && "#loginModal"}
                        onClick={() => specialRequest(nA.slug)}
                      >
                        <Image
                          src="/images/requestproduct.png"
                          width={64}
                          height={64}
                          alt="email"
                        />
                      </button>
                    </div>
                  )}
                  {(nA.available_status == 1 || nA.available_status == 2) && (
                    <div className="ad-cart-wrp">
                      <button
                        className="pro-add btn"
                        onClick={() => {
                          addToCart(nA);
                          setRecentlyAddedProduct(nA);
                        }}
                        data-bs-toggle={session && "modal"}
                        // data-bs-target="#notstock"
                        data-bs-target={
                          session ? "#shoppingcart" : "#loginModal"
                        }
                      >
                        <i class="fas fa-cart-arrow-down"></i> Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </ReactOwlCarousel>
        </div>
      </div>
      <LoginModal />
    </>
  );
};

export default NewArrivals;
