import Image from "next/image";
import React from "react";
import MailModal from "../../../CommonModals/MailModal";

const InterTvStep2Left = () => {
  return (
    <>
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
                            src="/images/renewable-energy.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Koppelkorting</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/smartphone-2.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Koppelkorting</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/vokeru.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Pakket voorkeur</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

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
                          <p>Budget</p>
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
                          <span>€1</span>
                          <span>€2.000.00</span>
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
                    src="/images/globe2.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Internet
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div className="">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="Glasvezel"
                      />
                      <label className="form-check-label" htmlFor="Glasvezel">
                        Glasvezel (..)
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
                        ADSL/VDSL (..)
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
                        Kabel (..)
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 mb-2">
                        <div className="discount-bx">
                          <div className="discount-cont">
                            <Image
                              src="/images/renewable-energy.png"
                              width={128}
                              height={128}
                              alt="smart-tv"
                            />
                            <p>Downloadsnelheid</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <div className="discount-select">
                          <select className="form-select">
                            <option>N.V.T</option>
                            <option>N.V.T 1</option>
                            <option>N.V.T 2</option>
                            <option>N.V.T 3</option>
                          </select>
                        </div>
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
                          <span>1Mb/s</span>
                          <span>1000Mb/s</span>
                        </div>
                      </label>
                    </div>
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
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Internet Opties
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                        Wifi Booster (..)
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
                        Vast IP adres (..)
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
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <Image
                    src="/images/watching-a-movie-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Extra zenderoverzicht
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                      ESPN Eredivisie  (..)
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
                      ESPN Internationaal  (..)
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
                      Ziggo sport totaal   (..)
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
                      Film1 (..)
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
                      Kids  (..)
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
                      Erotiek   (..)
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
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Tv Opties
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                      Opnemen pauzeren   (..)
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
                      Arabisch  (..)
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
                      Duits    (..)
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
                      Hindi  (..)
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
                      Turks   (..)
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mb-2">
                        <div className="discount-bx">
                          <div className="discount-cont">
                            <Image
                              src="/images/budget.png"
                              width={128}
                              height={128}
                              alt="smart-tv"
                            />
                            <p>TV standaard</p>
                          </div>
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
                     
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mb-2">
                        <div className="discount-bx">
                          <div className="discount-cont">
                            <Image
                              src="/images/budget.png"
                              width={128}
                              height={128}
                              alt="smart-tv"
                            />
                            <p>TV Interactief</p>
                          </div>
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
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Vaste telefonie opties
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                      Nationaal onbeperkt bellen   (..)
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
                      Internationaal onbeperkt bellen   (..)
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
                      Voip bellen    (..)
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
                      Digitale telefooncentrale (..)
                      </label>
                    </div>
                    <div className="row">
                    <div className="col-lg-8 mb-2">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/phone-ringing.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Vaste telefonie</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
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
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <Image
                    src="/images/5-stars.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Service
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                      Klantenscore  (..)
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
                      Monteur   (..)
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
                      Nummerbehoud    (..)
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
                      Tussentijds aanpassen (..)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <MailModal />
      </div>
    </>
  );
};

export default InterTvStep2Left;
