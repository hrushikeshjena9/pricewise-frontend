import React from "react";
import LargeComparisionLeftbarStep2 from "./largecomparisionleftbarstep2";
import LargeCompareActionStep2 from "./largecompareactionstep2";
import Image from "next/image";

const LargeComparisionIndexStep2 = ({setShowMoreInfo,showMoreInfo}) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="comparestep">
            <div className="row">
              <div className="col-lg-4 text-center">
                <a className="btneng1" href="javascript:void(0);">
                  Energise beste advies (…)
                </a>
              </div>
              <div className="col-lg-4 text-center">
                <a className="btneng2" href="javascript:void(0);">
                  Energise goedkoopste deals (…)
                </a>
              </div>
              <div className="col-lg-4 text-center">
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
                <LargeComparisionLeftbarStep2 />
              </div>

              <div className="col-lg-8">
                <LargeCompareActionStep2 setShowMoreInfo={setShowMoreInfo} showMoreInfo={showMoreInfo}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LargeComparisionIndexStep2;
