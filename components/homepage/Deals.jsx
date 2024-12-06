import Image from "next/image";
import React, { useEffect, useState } from "react";
import Countdown from 'react-countdown';


function Deals({ data2 }) {
  const [dealsData, setDealsData] = useState([])
  const targetDate = new Date('2024-05-17 19:02:00');
  useEffect(() => {
    if (data2) setDealsData(data2?.data)
  })
  console.log(data2);
  return (
    <>
      <section className="ptb-50 exclu-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="title-bx title-left">
                <h3>Energise Exclusives</h3>
                <h4>
                  Elke keer weer <span>feest</span>!
                </h4>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="exclu-btn">
                <a href="#" className="btn-three">
                  Energise exclusives
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {dealsData && dealsData.length > 0 &&
              <>
                {dealsData?.map((item, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="excusive-item-bx">
                      <div className="shape-ex">
                        <Image width={200} height={200} alt="aa"
                          src="/images/exclusive.png"/>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: item?.title }}></div>
                      <Image width={200} height={200} alt="aa" src="/images/deal.png"/>
                      <div id="countdown" className="timer">
                      <p className='fw-bold mt-2'>Nog... <i className="far fa-clock"></i></p>
                        <div>
                          <Countdown date={item?.valid_till} renderer={({ days, hours, minutes, seconds }) => (
                            <ul className="fw-bold text-danger">
                              <li><span id="days">{days}  </span>dagen</li>
                              <li><span>{hours}  </span>uur</li>
                              <li><span>{minutes}  </span>min</li>
                              <li><span>{seconds} </span>sec</li>
                            </ul>
                          )} />
                        </div>
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
                      <a href="#" className="price-btn">
                        Bekijk Deals
                      </a>
                    </div>
                  </div>
                ))}
              </>
            }

          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
