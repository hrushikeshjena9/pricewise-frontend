import { useState } from "react";
import MailModal from "../../../CommonModals/MailModal";
import Image from "next/image";

const SmartPhoneCompareLeftBar = () => {
  return (
    <>
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
                    src="/images/sim.png"
                    className="img-fluid"
                  />
                  <span>1/1</span>
                </li>
                <li>
                  <Image
                    width={64}
                    height={64}
                    alt="aa"
                    src="/images/smartphone-2.png"
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
                  <div className="col-lg-8 mb-2">
                    <div className="discount-bx">
                      <div className="discount-cont">
                        <Image
                          src="/images/smart-tv.png"
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
                {/* <div className="row">
                  <div className="col-lg-8">
                    <div className="discount-bx">
                      <div className="discount-cont">
                        <Image
                          src="/images/smartphone-2.png"
                          width={128}
                          height={128}
                          alt="smart-tv"
                        />
                        <p>Toestelvoorkeur</p>
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
                </div> */}
                <div className="row">
                  <div className="col-lg-8 mb-2">
                    <div className="discount-bx">
                      <div className="discount-cont">
                        <Image
                          src="/images/satellite.png"
                          width={128}
                          height={128}
                          alt="smart-tv"
                        />
                        <p>Netwerk voorkeur</p>
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
                    <label className="form-label labeltitle discount-cont">
                      <Image
                        src="/images/budget.png"
                        width={128}
                        height={128}
                        alt="smart-tv"
                      />
                      Budget
                    </label>
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
                <div className="row">
                  <div className="col-lg-8">
                    <label className="form-label labeltitle discount-cont">
                      <Image
                        src="/images/budget.png"
                        width={128}
                        height={128}
                        alt="smart-tv"
                      />
                      Looptijd
                    </label>
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
                  src="/images/bar-chart.png"
                  width={64}
                  height={64}
                  alt="setting"
                />
                Data bundel
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#smartphone-acc-bx"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-lg-8">
                    <label className="form-label labeltitle discount-cont">
                      <Image
                        src="/images/budget.png"
                        width={128}
                        height={128}
                        alt="smart-tv"
                      />
                      Budget
                    </label>
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
                <div className="row">
                  <div className="col-lg-8">
                    <label className="form-label labeltitle discount-cont">
                      <Image
                        src="/images/budget.png"
                        width={128}
                        height={128}
                        alt="smart-tv"
                      />
                      Looptijd
                    </label>
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
                <div className="row">
                  <div className="bu-mod">
                    <a href="#">Hulp nodig bij het schatten?</a>
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
                  src="/images/5-stars.png"
                  width={64}
                  height={64}
                  alt="setting"
                />
                Service
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#smartphone-acc-bx"
            >
              <div className="accordion-body">
                <div className="service-star">
                  <div className="support">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="klantenscore"
                        defaultValue="true"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="klantenscore"
                      >
                        Klantenscore (..)
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Windows"
                        defaultValue="true"
                      />
                      <label className="form-check-label" htmlFor="Windows">
                        4G netwerk (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Windows2"
                        defaultValue="true"
                      />
                      <label className="form-check-label" htmlFor="Windows2">
                        5G netwerk (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Windows2"
                        defaultValue="true"
                      />
                      <label className="form-check-label" htmlFor="Windows2">
                        Snelheidsverlaging buiten bundel (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Windows2"
                        defaultValue="true"
                      />
                      <label className="form-check-label" htmlFor="Windows2">
                        Nummerbehoud (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Windows2"
                        defaultValue="true"
                      />
                      <label className="form-check-label" htmlFor="Windows2">
                        Data delen (..)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Windows2"
                        defaultValue="true"
                      />
                      <label className="form-check-label" htmlFor="Windows2">
                        Eu voordeel (..)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="protectionbx">
        <div className="entr-sc-title m-0 p-0">
          <h4>Veel gestelde vragen</h4>
        </div>
      </div>
      <div className="enter-prise-acc support" style={{ borderRadius: 0 }}>
        <div className="accordion" id="accordionExample">
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
                Vraag 1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptatibus natus quod ab necessitatibus. Accusantium, ut
                alias.
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
                Vraag 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
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
                Vraag 3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Vraag 4
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Vraag 5
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailModal />
    </>
  );
};

export default SmartPhoneCompareLeftBar;
