import Image from "next/image";
import React from "react";

function Stats() {
  return (
    <section className="surprise-sec ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center surprise-text">
              <h4>We are Surprise, Lets Energise</h4> 
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="surprise-item">
            <div className="sub-bxicon sub-bxicon-green">
             <i className="fas fa-money-bill"></i>
            </div>
              <h4>
                € <span className="count">{"337,59"}</span>
              </h4>
              <p>gemiddelde besparing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="surprise-item">
              <div className="sub-bxicon sub-bxicon-yellow">
                  <i className="far fa-thumbs-up"></i> 
              </div>
              <h4 className="count">{"9,3"}</h4>
              <p>aanbevelingen</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="surprise-item">
              <div className="sub-bxicon sub-bxicon-green">
                 <i className="fas fa-user-friends"></i>
              </div>
              <h4 className="stat-number">388.134</h4>
              <p>Klanten vergeleken afgelopen week</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="surprise-item">
            <div className="sub-bxicon sub-bxicon-green">
                 <i className="far fa-handshake"></i>
              </div>
              <ul className="start-inline">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
              </ul>
              <p>100% independent</p>s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
