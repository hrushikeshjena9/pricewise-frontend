import Image from "next/image";
import React, { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12 position-relative">
          <h3>Stel jouw deal vandaag veilig</h3>
          <p>
            Vul de resterende gegevens in die de aanbieder nodig heeft, zodat
            wij alles vlekkenloos kunnen regelen en jij snel hier van kan
            profiteren.
          </p>
          <Image
            src="/images/secure.png"
            width={80}
            height={80}
            alt="secure"
            className="protect-img"
          />
          <h4 className="mb-0">Betaalmethode</h4>
          <p>In de laatste stap vul je jouw betaalgegevens in..</p>
        </div>
        <div className="col-12 col-lg-8">
          <div className="payment-option active">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                name="payment"
                id="ideal"
                defaultChecked
                className="form-check-input"
              />
              <label htmlFor="ideal" className="form-label mb-0">
                iDeal
              </label>
            </div>
            <div className="flex-grow-1">
              <select className="form-select payment-select">
                <option>Nationale Nederlanden</option>
                <option>Rabobank</option>
                <option>ING</option>
              </select>
            </div>
            <div>
              <Image
                src="/images/ideal.png"
                width={80}
                height={40}
                alt="iDeal Logo"
                className="payment-logo"
              />
            </div>
          </div>
          <div className="payment-option">
            <div className="d-flex align-items-center ">
              <input
                type="radio"
                name="payment"
                id="paypal"
                className="form-check-input"
              />
              <label htmlFor="paypal" className="form-label mb-0">
                PayPal
              </label>
            </div>
            <div>
              <i className="fab fa-paypal fa-2x text-primary" />
            </div>
          </div>
          <div className="payment-option">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                name="payment"
                id="klarna"
                className="form-check-input"
              />
              <label htmlFor="klarna" className="form-label mb-0">
                Achteraf betalen via Klarna (binnen 30 dagen)
              </label>
            </div>
            <div>
              <Image
                width={80}
                height={30}
                src="/images/klarna.png"
                alt="Klarna Logo"
                className="payment-logo"
              />
            </div>
          </div>
          <div className="payment-option">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                name="payment"
                id="creditcard"
                className="form-check-input"
              />
              <label htmlFor="creditcard" className="form-label mb-0">
                Creditcard
              </label>
            </div>
            <div>
              <i className="fab fa-cc-visa fa-2x text-primary" />
              <i className="fab fa-cc-mastercard fa-2x text-danger" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="total-price-bx">
            <h5 className="mb-0 fw-bold">Samenvatting</h5>
            <p className="small">
              Bestellingen vanaf €50 worden gratis bezorgd.
            </p>
            <hr />
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <div
                  className="accordion-button" style={{backgroundColor:"transparent"}}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="col-6">
                    <p className="fw-bold m-0">Subtotaal</p>
                  </div>
                  <div className="col-6 text-end">
                    <p className="fw-bold m-0 me-4">€ 1018</p>
                  </div>
                </div>

                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                    <div className="col-6">
                      <p className="d-flex m-0">
                        Verzendkosten
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Content Goes Here"
                        >
                          <i className="fas green-cyan fa-info-circle ms-2"></i>
                        </a>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="m-0">Gratis</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <hr />
            <div className="row">
              <div className="col-6">
                <p className="fw-bold">
                  Totaal <span className="fw-normal d-block">incl. BTW</span>
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold">€ 1018</p>
              </div>
            </div>
            <div className="text-center mb-3">
              <button className="pro-add btn text-black w-100 ">Afrekenen</button>
            </div>
            <div className="kortingscodes-section">
              {/* Header Section */}
              <div className="kortingscodes-header">
                <div className="d-flex gap-2 align-items-baseline justify-content-between">
                  <div>
                  <i class="fas fa-gifts green-cyan me-2"></i>
                  <span onClick={toggleForm}>Kortingscodes</span>
                  </div>
                  <i
                    className={`fas ${
                      isOpen ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                    onClick={toggleForm}
                  />
                </div>
                <small className="text-muted ps-4">(niet verplicht)</small>
                <div></div>
              </div>

              {/* Form Section */}
              {isOpen && (
                <div>
                  <div className="kortingscodes-info kor-info">
                    <i className="fas fa-info-circle green-cyan me-1" />
                    <span>
                      Kortingscodes zijn niet geldig op actieproducten.
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Voer je code in"
                  />
                  <button className="pro-add btn mt-2 w-100 text-black">Toepassen</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
