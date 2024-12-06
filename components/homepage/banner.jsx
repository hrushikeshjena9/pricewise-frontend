import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import Link from "next/link";
import Dealbox from "./dealbox";
import SunAnimation from "../common/SunAnimation";
function Banner({ data }) {
  return (
    <section>
      <div
        className="banner-item"
        style={{ backgroundImage: "url(/images/banner.jpg)" }}
      >
        <SunAnimation />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="banner-item-cont">
                <h4>Energie Vergelijken?</h4>
                <h5>Bekijk de beste prijzen</h5>
                <Link href="/double-meter" className="btn-two">
                  <i className="fal fa-arrow-right" /> Vergelijken
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <Dealbox data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
