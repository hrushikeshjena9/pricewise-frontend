import Image from "next/image";
import React from "react";
import SunAnimation from "../../../../components/common/SunAnimation";

function Index() {
  const className = "internet-tvlarge";
  return (
    <>
      <div className="container-fluid eventwrp">
        <SunAnimation className={className} />
        <div className="card cus-order-form">
          <div className="card-body">
            <h5 className="text-center mb-4  fw-medium">
              Special Request Product Order Form
            </h5>
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-auto col-md-auto col-sm-12 pro-img-sm">
                        <div className="position-relative p-2">
                          <Image
                            src="/images/products/product2.png"
                            width={200}
                            height={200}
                            alt="product"
                          />
                          <i class="bx bxs-circle bx-flashing dot-gold blink-dot"></i>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md8 col-sm-12">
                        <h6 className="green-cyan small fw-bold">
                          Titanium Special Blue India 1st BIS (IS 16240 :2023)
                          CM/L8100159306 8 L RO + UV + UF + TDS + ALK + Copper
                          Water Purifier (Special Blue)
                        </h6>
                        <div className="row">
                          <div className="col-8">
                            <p class="sku-id">SKU: NVB7SDVX20</p>
                            <p className="v-details mb-0">
                              incl. VAT and free shipping above €50
                              <a href="javascript:void(0);">
                                <i className="fas green-cyan fa-info-circle ms-2"></i>
                              </a>
                            </p>
                          </div>
                          <div className="col-4">
                            <p className="tags">Bestseller</p>
                            <p className="stock-status mb-0">Uitverkocht</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 col-md-4">
                            <h4 className="pro-price mb-0">
                              € 199.00 <span>€ 280</span>
                            </h4>
                            <div className="pro-reivew">
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
                          </div>
                          <div className="col-md-8 col-6">
                            <div className="row highlights">
                              <div className="col-12">
                                <h5 className="mb-0">Highlights</h5>
                                <ul className="d-md-flex gap-2">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="customerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="customerName"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      min={1}
                      placeholder="Enter the quantity"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="form-label">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Postcode, huisnummer en toevoeging"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="additionalInfo" className="form-label">
                      Terugbelverzoek
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="dateTimeInput"
                      name="datetime"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="additionalInfo" className="form-label">
                      Aanvullende informatie
                    </label>
                    <textarea
                      className="form-control"
                      id="additionalInfo"
                      rows={3}
                      placeholder="Geef je verzoek zo kort en duidelijk mogelijk aan."
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="mb-3 form-check ps-0">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the terms and conditions
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-one">
                    Verzoek indienen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
