import React, { useState } from 'react'
import Image from 'next/image'
import BusinessEquInsuCompareTabbingPartStep2 from './BusinessEquInsuCompareTabbingPartStep2';

const BusinessEquInsuCompareActionStep2 = () => {
    const [showMoreInfo,setShowMoreInfo] = useState(false)
  return (
    <>
      <div className="listofcompanybx">
        <div className="login-deals-box">
          <div className="spe-action">
            <div className="spe-cont">
              <Image
                width={200}
                height={200}
                alt="aa"
                src="/images/stopwatch.png"
              />
              <h5>Actie:</h5>
              <p>Geldig tot dd-mm-jj</p>
            </div>
            <div className="spe-cont">
              <Image width={200} height={200} alt="aa" src="/images/sale.png" />
              <p>Energise korting:</p>
              <h4>€...</h4>
              <i className="fas fa-info" />
            </div>
            <div className="spe-cont">
              <Image
                width={200}
                height={200}
                alt="aa"
                src="/images/hot-sale.png"
              />
              <p>Totaal korting:</p>
              <h4>€...</h4>
            </div>
          </div>
          <div className="spe-action-data">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-3">
                <div className="spe-img">
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/sunbg.png"
                  />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-3">
                <div className="spe-cn">
                  <h5>Pakket</h5>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-3">
                <div className="spe-cn">
                  <i className="fas fa-info" />
                  <h5>Kosten:</h5>
                  <h4>€....</h4>
                  <span>/p.m</span>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-3">
                <div className="spe-cn">
                  <i className="fas fa-info" />
                  <h5>Bespaar:</h5>
                  <h4>€....</h4>
                  <span>/p.j</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="spe-cn-star">
                  <i className="fas fa-info" />
                  <h3>Klantenscore: 4/5</h3>
                  <ul className="mb-3">
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
                      <i className="far fa-star" />
                    </li>
                  </ul>
                  <a href="#" className="price-btn">
                    Aanvragen
                  </a>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0);"
              data-target="listhiddenDiv1"
              className="btn-act listtoggleDiv"
              onClick={() => setShowMoreInfo(!showMoreInfo)}
            >
              Meer informatie
              {!showMoreInfo ? (
                <i className="fal fa-plus" />
              ) : (
                <i className="fas fa-minus"></i>
              )}
            </a>
          </div>
        </div>
        {showMoreInfo && 
        <BusinessEquInsuCompareTabbingPartStep2 />
        }
      </div>
    </>
  );
};

export default BusinessEquInsuCompareActionStep2;
