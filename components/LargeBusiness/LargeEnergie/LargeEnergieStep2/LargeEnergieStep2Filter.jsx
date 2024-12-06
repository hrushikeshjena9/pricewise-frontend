import Image from "next/image";
import React from "react";
import MailModal from "../../../CommonModals/MailModal";
const LargeEnergieStep2Filter = () => {
  return (
    <div className="col-lg-4">
      <div className="yourdetailsbox">
        <h5>Jouw gegevens:</h5>
        <ul className="infodetails">
          <li>Vergelijking:</li>
          <li>Postcode:</li>
          <li>Huisnummer:</li>
          <li>Bedrijfsgrootte:</li>
          <li>Branche:</li>
        </ul>
        <div className="yourdetailedit">
          <div className="row">
            <div className="col-lg-6">
              <a href="javascript:void(0);">
                <i className="fas fa-cog" /> Wijzig
              </a>
            </div>
            <div className="col-lg-6 text-end">
              <ul>
                <li>
                  <Image
                    width={64}
                    height={64}
                    alt="aa"
                    src="/images/address.png"
                    className="img-fluid"
                  />
                  <span>1/1</span>
                </li>
                <li>
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/viewpop.png"
                    className="img-fluid"
                  />
                  <span>1/1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="smartphone-acc">
        <div className="accordion" id="smartphone-acc-bx">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <Image
                  src="/images/settings-3.png"
                  width={64}
                  height={64}
                  alt="setting"
                />
                Algemeen
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#smartphone-acc-bx"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="discount-bx">
                      <div className="discount-cont">
                        <Image
                          src="/images/budget.png"
                          width={128}
                          height={128}
                          alt="smart-tv"
                        />
                        <p>Looptijd</p>
                      </div>
                      <i className="fas fa-info"></i>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="number"
                      className="form-control "
                      id="numberInput1"
                      min={1}
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="range"
                      className="form-range"
                      id="customRange1"
                      min={1}
                      max={20000}
                      defaultValue={1}
                    />
                    <label htmlFor="customRange1" className="form-label">
                      <div className="cus-num">
                        <span>Variabel</span>
                        <span>5 jaar</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <Image
                  src="/images/renewable-energy.png"
                  width={64}
                  height={64}
                  alt="setting"
                />
                Voorkeur leverancier
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#smartphone-acc-bx"
            >
              <div className="accordion-body">
                <div className="discount-bx mb-2">
                  <div className="discount-cont">
                    <Image
                      src="/images/renewable-energy.png"
                      width={128}
                      height={128}
                      alt="smart-tv"
                    />
                    <p>Duurzaamheid</p>
                  </div>
                </div>
                <div className="">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Glasvezel"
                    />
                    <label className="form-check-label" htmlFor="Glasvezel">
                      Geen voorkeur (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="ADSL"
                    />
                    <label className="form-check-label" htmlFor="ADSL">
                      Groene energie (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                      Groen/grijs (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                      Gasvrij (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                      Terugleververgoeding (..)
                    </label>
                  </div>
                </div>

                <div className="discount-bx mb-2">
                  <div className="discount-cont">
                    <Image
                      src="/images/5-stars.png"
                      width={128}
                      height={128}
                      alt="smart-tv"
                    />
                    <p>Service</p>
                  </div>
                </div>
                <div className="">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Glasvezel"
                    />
                    <label className="form-check-label" htmlFor="Glasvezel">
                    Spoed aansluiting (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="ADSL"
                    />
                    <label className="form-check-label" htmlFor="ADSL">
                    Vebruiksinzicht app (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                    Klantenscore (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                    Boiler (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                    Betaaldatum zelf bepalen  (..)
                    </label>
                  </div>
                </div>

                <div className="discount-bx mb-2">
                  <div className="discount-cont">
                    <Image
                      src="/images/extra.png"
                      width={128}
                      height={128}
                      alt="smart-tv"
                    />
                    <p>Extra</p>
                  </div>
                </div>
                <div className="">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Glasvezel"
                    />
                    <label className="form-check-label" htmlFor="Glasvezel">
                    Led lampen (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="ADSL"
                    />
                    <label className="form-check-label" htmlFor="ADSL">
                    Slimmethermostaat (..)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue
                      id="Kabel"
                    />
                    <label className="form-check-label" htmlFor="Kabel">
                    Zonnepanelen (..)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="protectionbx">
        <h5>
          <i className="fas fa-cog"></i> Energise Regelt
        </h5>
      </div>
      <div className="support">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Aanbod op maat
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Aanbod op maat</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Aanvraag
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Aanvraag</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Unieke deals
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Unieke deals</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Duidelijkheid
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Duidelijkheid</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Service
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Service</div>
            </div>
          </div>
        </div>
      </div>

      <MailModal />
    </div>
  );
};

export default LargeEnergieStep2Filter;
