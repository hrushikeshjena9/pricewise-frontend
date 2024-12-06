import React from "react";
import Image from "next/image";
import { calculateTimeLeft } from "../../utils/TimeHelper";
const ExclusiveDealsShop = ({ data }) => {
  return (
    <>
      <div className="exclusive-deals-shop">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="exclusive-deals-shop-title">
                <h1>
                  Exclusives <span>Deals</span>
                </h1>
                <p>
                  &#x2036;Elke keer weer <span>feest!</span>
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="text-end">
                <a href="#" className="vw-ol-dl">
                  View All Deals
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {data && data.map((deal, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="exclusiv-bx">
                <div className="ex-deal-nam mt-4" dangerouslySetInnerHTML={{ __html: deal.title }}></div>
                  <div className="exclusiv-imgbx">
                    <Image
                      src={deal.image}
                      width={285}
                      height={190}
                      alt={deal.title}
                    />
                    <div className="exclusiv-tag">
                      <Image
                        src="/images/exclusive.png"
                        width={100}
                        height={80}
                        alt="exclusivetag"
                      />
                    </div>
                  </div>
              
                  <div className="deal-timerbx">
                    <p className='fw-bold mt-2'>Nog... <i className="far fa-clock"></i></p>
                    <ul>
                      <li>
                        {calculateTimeLeft(deal.valid_till).days}
                        <span>dagen</span>
                      </li>
                      <li>
                        {calculateTimeLeft(deal.valid_till).hours}
                        <span>uur</span>
                      </li>
                      <li>
                        {calculateTimeLeft(deal.valid_till).minutes}
                        <span>min</span>
                      </li>
                      <li>
                        {calculateTimeLeft(deal.valid_till).seconds}
                        <span>sec</span>
                      </li>
                    </ul>
                  </div>
                  <div className="icons">
                        <ul>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/excsmall/commerce.png"
                                height={128}
                                width={128}
                                alt="qwe"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/excsmall/smart-tv.png"
                                height={128}
                                width={128}
                                alt="qwe"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/excsmall/windturbine.png"
                                height={128}
                                width={128}
                                alt="qwe"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/excsmall/shieldclock.png"
                                height={128}
                                width={128}
                                alt="qwe"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/excsmall/shopping-cart.png"
                                height={128}
                                width={128}
                                alt="qwe"
                              />
                            </a>
                          </li>

                        </ul>
                      </div>
                  <div className="ad-cart-wrp">
                    <button className="price-btn btn"> View Deals</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveDealsShop;
