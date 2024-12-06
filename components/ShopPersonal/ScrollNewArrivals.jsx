import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import UmaCarousel from "@/pages/test";
const NewArrivals = () => { 
  return (
    <>
      <div className="nw-val">
        <div className="container">
          <h4 className="nw-val-ti">New Arrivals</h4>
          <UmaCarousel autoPlay={true}>
            <div className="pro-bx">
              <div className="bx-top">
                <Image
                  src="/images/products/hedphn.jpg"
                  width={285}
                  height={190}
                  alt="product1"
                />
                <dv className="wish-list">
                  <i class="far fa-heart"></i>
                </dv>
                <i class="bx bxs-circle bx-flashing dot-green blink-dot"></i>
              </div>
              <h5 className="pro-title equal-height">
                TCL 49S5 49” 4K Ultra HD
              </h5>
              <p className="v-details">
                incl. VAT and free shipping above €50
                <a href="javascript:void(0);">
                  <i className="fas green-cyan fa-info-circle ms-2"></i>
                </a>
              </p>
              <div className="row">
                <div className="col-6">
                  <h4 className="pro-price">
                    € 199.00 <span>€ 280</span>
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
                  <ul className="list-unstyled ">
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <a href="#" className="review-count">
                    Review 50
                  </a>
                </div>
                <div className="col-6">
                  <p className="tags">Bestseller</p>
                  <p className="stock-status">Op voorraad</p>
                </div>
              </div>
              <div className="row highlights">
                <div className="col-12">
                  <h5>Highlights</h5>
                  <ul className="unstyled">
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ad-cart-wrp">
                <button className="pro-add btn">
                  <i class="fas fa-cart-arrow-down"></i> Add to Cart
                </button>
              </div>
            </div>
            <div className="pro-bx">
              <div className="bx-top">
                <Image
                  src="/images/products/bnoheadphon.jpg"
                  width={285}
                  height={190}
                  alt="product1"
                />
                <dv className="wish-list">
                  <i class="far fa-heart"></i>
                </dv>
                <i class="bx bxs-circle bx-flashing dot-gold blink-dot"></i>
              </div>
              <h5 className="pro-title equal-height">
                Mi 189.34cm (75 inches) 4k
              </h5>
              <p className="v-details">
                incl. VAT and free shipping above €50
                <a href="javascript:void(0);">
                  <i className="fas green-cyan fa-info-circle ms-2"></i>
                </a>
              </p>
              <div className="row">
                <div className="col-6">
                  <h4 className="pro-price">
                    € 199.00 <span>€ 280</span>
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
                  <ul className="list-unstyled ">
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <a href="#" className="review-count">
                    Review 50
                  </a>
                </div>
                <div className="col-6">
                  <p className="tags">Bestseller</p>
                  <p className="stock-status">Uitverkocht</p>
                </div>
              </div>
              <div className="row highlights">
                <div className="col-12">
                  <h5>Highlights</h5>
                  <ul className="unstyled">
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-not-stock">
                <button className="pro-not-avl btn">
                  <Image
                    src="/images/email-2.png"
                    width={64}
                    height={64}
                    alt="email"
                  />
                </button>
              </div>
            </div>
            <div className="pro-bx">
              <div className="bx-top">
                <Image
                  src="/images/products/mobile.png"
                  width={285}
                  height={190}
                  alt="product1"
                />
                <dv className="wish-list">
                  <i class="far fa-heart"></i>
                </dv>
              </div>
              <h5 className="pro-title equal-height">
                Mi 189.34cm (75 inches) 4k
              </h5>
              <p className="v-details">
                incl. VAT and free shipping above €50
                <a href="javascript:void(0);">
                  <i className="fas green-cyan fa-info-circle ms-2"></i>
                </a>
              </p>
              <div className="row">
                <div className="col-6">
                  <h4 className="pro-price">
                    € 199.00 <span>€ 280</span>
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
                  <ul className="list-unstyled ">
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <a href="#" className="review-count">
                    Review 50
                  </a>
                </div>
                <div className="col-6">
                  <p className="tags">Bestseller</p>
                  <p className="stock-status">Uitverkocht</p>
                </div>
              </div>
              <div className="row highlights">
                <div className="col-12">
                  <h5>Highlights</h5>
                  <ul className="unstyled">
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-not-stock">
                <button className="pro-not-avl btn">
                  <Image
                    src="/images/email-2.png"
                    width={64}
                    height={64}
                    alt="email"
                  />
                </button>
              </div>
            </div>
            <div className="pro-bx">
              <div className="bx-top">
                <Image
                  src="/images/products/cat3.png"
                  width={285}
                  height={190}
                  alt="product1"
                />
                <dv className="wish-list">
                  <i class="far fa-heart"></i>
                </dv>
                <i class="bx bxs-circle bx-flashing dot-grey blink-dot"></i>
              </div>
              <h5 className="pro-title equal-height">
                Mi 189.34cm (75 inches) 4k
              </h5>
              <p className="v-details">
                incl. VAT and free shipping above €50
                <a href="javascript:void(0);">
                  <i className="fas green-cyan fa-info-circle ms-2"></i>
                </a>
              </p>
              <div className="row">
                <div className="col-6">
                  <h4 className="pro-price">
                    € 199.00 <span>€ 280</span>
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
                  <ul className="list-unstyled ">
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <a href="#" className="review-count">
                    Review 50
                  </a>
                </div>
                <div className="col-6">
                  <p className="tags">Bestseller</p>
                  <p className="stock-status">Uitverkocht</p>
                </div>
              </div>
              <div className="row highlights">
                <div className="col-12">
                  <h5>Highlights</h5>
                  <ul className="unstyled">
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-not-stock">
                <button className="pro-not-avl btn">
                  <Image
                    src="/images/email-2.png"
                    width={64}
                    height={64}
                    alt="email"
                  />
                </button>
              </div>
            </div>
            <div className="pro-bx">
              <div className="bx-top">
                <Image
                  src="/images/products/fridge.png"
                  width={285}
                  height={190}
                  alt="product1"
                />
                <dv className="wish-list">
                  <i class="far fa-heart"></i>
                </dv>
              </div>
              <h5 className="pro-title equal-height">
                Mi 189.34cm (75 inches) 4k
              </h5>
              <p className="v-details">
                incl. VAT and free shipping above €50
                <a href="javascript:void(0);">
                  <i className="fas green-cyan fa-info-circle ms-2"></i>
                </a>
              </p>
              <div className="row">
                <div className="col-6">
                  <h4 className="pro-price">
                    € 199.00 <span>€ 280</span>
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
                  <ul className="list-unstyled ">
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                    <li className="d-inline">
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <a href="#" className="review-count">
                    Review 50
                  </a>
                </div>
                <div className="col-6">
                  <p className="tags">Bestseller</p>
                  <p className="stock-status">Uitverkocht</p>
                </div>
              </div>
              <div className="row highlights">
                <div className="col-12">
                  <h5>Highlights</h5>
                  <ul className="unstyled">
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                    <li>
                      <i className="fas fa-star" /> Highlights
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-not-stock">
                <button className="pro-not-avl btn">
                  <Image
                    src="/images/email-2.png"
                    width={64}
                    height={64}
                    alt="email"
                  />
                </button>
              </div>
            </div>
          </UmaCarousel>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
