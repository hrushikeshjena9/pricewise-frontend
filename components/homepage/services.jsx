import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <section className="srevice-sec ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-bx">
              <h3>Voor elke dienst</h3>
              <h4>De beste prijzen</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <Link href='/double-meter'>
              <div className="service-item">
                <Image width={200} height={200} alt="aa"
                  src="/images/wind-turbine.png" />
                <h4>Energie besparen</h4>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4">
            <Link href='/internet-tv'>
              <div className="service-item">
                <Image width={200} height={200} alt="aa"
                  src="/images/smart-tv.png"

                />
                <h4>Internet &amp; Tv voordeel</h4>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service-item">
              <Image width={200} height={200} alt="aa"
                src="/images/mobile.png"

              />
              <h4>Smartphone deals</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
