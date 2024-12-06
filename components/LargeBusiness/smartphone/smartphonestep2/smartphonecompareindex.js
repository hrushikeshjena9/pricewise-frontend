import React from "react";
import SmartPhoneCompareLeftBar from "./smartphonecompareleftbar";
import SmartPhoneCompareAction from "./smartphonecompareaction";
import Image from 'next/image';

const SmartPhoneCompareIndex = ({setShowMoreInfo, showMoreInfo}) => {
  return (
    <section>
      <div className="container">
        <div className="comparestep">
          <div className="row">
            <div className="col-lg-4 col-md-4 text-center">
              <a className="btneng1" href="javascript:void(0);">
                Energise beste advies (…)
              </a>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <a className="btneng2" href="javascript:void(0);">
                Energise goedkoopste deals (…)
              </a>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <a className="btneng2" href="javascript:void(0);">
                Alle gecontracteerde (…)
              </a>
            </div>
          </div>
          <div className="steptitle">
            <div className="row">
              <div className="col-lg-3">
                <a href="javascript:void(0);" className="saleicon">
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/salelcon.png"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-9">
                <h2>Vergelijk, Bespaar &amp; Aanvragen maar</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <SmartPhoneCompareLeftBar />
            </div>

            <div className="col-lg-8">
              <SmartPhoneCompareAction setShowMoreInfo={setShowMoreInfo} showMoreInfo={showMoreInfo}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartPhoneCompareIndex;
