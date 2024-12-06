import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { useSession } from "next-auth/react";
import LoginModal from "../common/LoginModal";
import CartModal from "../common/CartModal";
import StaticCartModal from "../common/StaticCartModal";

const TabingProduct = ({
  data,
  wishList,
  addToWishlist,
  addToCart,
  specialRequest,
  sync,
  setSync,
  setMessage,
  message,
  setSelectedProductId,
  setRecentlyAddedProduct,
}) => {
  const { data: session } = useSession();
  const [wishListItems, setWishlistItems] = useState([]);

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
  useEffect(() => {
    const itemIds = wishList.map((w) => w.product_id);
    setWishlistItems(itemIds);
  }, [wishList]);
  return (
    <>
      <StaticCartModal />

      <LoginModal />
      <div className="product-tab">
        <div className="container">
          <div id="listhiddenDiv1" className="tabwrp">
            <ul className="nav nav-tabs" id="myTabs" role="tablist">
              {data &&
                Object.keys(data).map((cat, i) => (
                  <li key={i} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${i == 0 && "active"}`}
                      id={`${cat}`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${cat}-tab`}
                      type="button"
                      role="tab"
                      aria-controls={`${cat}-tab`}
                      aria-selected="true"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
            </ul>
            <div className="tab-content" id="myTabsContent">
              {data &&
                Object.keys(data).map((cat, i) => (
                  <div
                    key={i}
                    className={`tab-pane fade ${i == 0 && "show active"}`}
                    id={`${cat}-tab`}
                    role="tabpanel"
                    aria-labelledby={`${cat}-tab`}
                  >
                    <h4 className="protab-title">
                      Vergelijk&#x2c; <span>Kies</span> & Bespaar
                    </h4>
                    <ReactOwlCarousel className="owl-theme" {...options}>
                      {data[cat].map((product, i) => (
                        <div key={i} className="pro-bx">
                          <div className="bx-top">
                            <Image
                              src={product.banner_image ?? product.no_image}
                              width={285}
                              height={190}
                              alt="product1"
                            />
                            <a
                              className="wish-list"
                              onClick={() => {
                                addToWishlist(product.id);
                              }}
                            >
                              {wishListItems.includes(product.id) ? (
                                <i class="fas fa-heart"></i>
                              ) : (
                                <i class="far fa-heart"></i>
                              )}
                            </a>
                            {product.available_status == 1 && (
                              <i class="bx bxs-circle bx-flashing dot-green blink-dot"></i>
                            )}
                            {product.available_status == 2 && (
                              <i class="bx bxs-circle bx-flashing dot-orange blink-dot"></i>
                            )}
                            {product.available_status == 3 && (
                              <i class="bx bxs-circle bx-flashing dot-gold blink-dot"></i>
                            )}
                            {product.available_status == 0 && (
                              <i class="bx bxs-circle bx-flashing dot-grey blink-dot"></i>
                            )}
                          </div>
                          <Link href={`/shop/${product.slug}`}>
                            <h5 className="pro-title">{product.title}</h5>
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
                                € {product.sell_price}{" "}
                                <span>€ {product.actual_price}</span>
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
                                initialValue={product.rating}
                                size={20}
                                readonly
                                allowFraction
                                fillColor="gold"
                                emptyColor="gray"
                              />
                              <a href="#" className="review-count">
                                Review {product.reviews?.length ?? 0}
                              </a>
                            </div>
                            <div className="col-6">
                              <p className="tags">Bestseller</p>
                              <p className="stock-status">
                                {product.available_status == 1 && "Op voorraad"}
                                {product.available_status == 2 &&
                                  "Beperkt voorraad"}
                                {product.available_status == 3 && "Op aanvraag"}
                                {product.available_status == 0 && "Uitverkocht"}
                              </p>
                            </div>
                          </div>
                          {product.highlights &&
                            product.highlights.length > 0 && (
                              <div className="row highlights">
                                <div className="col-12">
                                  <h5>Highlights</h5>
                                  <ul className="unstyled">
                                    {product.highlights.map((highlight, i) => (
                                      <li key={i}>
                                        <i className="fas fa-star" />{" "}
                                        {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          {product.available_status == 0 && (
                            <div className="product-not-stock">
                              <button
                                className="pro-not-avl btn"
                                data-bs-toggle="modal"
                                data-bs-target="#notstock"
                                onClick={() => setSelectedProductId(product.id)}
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
                          {product.available_status == 3 && (
                            <div className="product-not-stock">
                              <button
                                className="pro-not-avl btn"
                                data-bs-toggle={!session && "modal"}
                                // data-bs-target="#notstock"
                                data-bs-target={!session && "#loginModal"}
                                onClick={() => specialRequest(product.slug)}
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
                          {(product.available_status == 1 ||
                            product.available_status == 2) && (
                            <div className="ad-cart-wrp">
                              <button
                                className="pro-add btn"
                                onClick={() => {
                                  addToCart(product);
                                  setRecentlyAddedProduct(product);
                                }}
                                data-bs-toggle="modal"
                                data-bs-target={
                                  session ? "#shoppingcart" : "#shoppingcart"
                                }
                                //  data-bs-target={
                                //   session ? "#Staticshoppingcart" : "#loginModal"
                                // }
                                // data-bs-target= "#Staticshoppingcart"
                              >
                                <i class="fas fa-cart-arrow-down"></i> Add to
                                Cart
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </ReactOwlCarousel>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabingProduct;
