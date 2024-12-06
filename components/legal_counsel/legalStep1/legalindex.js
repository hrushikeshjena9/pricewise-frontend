import React, { useState } from "react";
import Legalenergy from "./legalenergy";
import LegalSubject from "./legalsubject";
import Image from "next/image";
import SunAnimation from "../../common/SunAnimation";
import SameHeightDiv from "../../common/SameHeightDiv";
import TooltipInitialise from "../../common/TooltipInitialise";

function LegalIndex({ setCount }) {
  const [extendedForm, setExtendedForm] = useState(0);
  const className = "health-insuran";
  return (
    <>
      <section className="cybersecurity-wrp">
        <SunAnimation className={className} />
        <SameHeightDiv/>
        <TooltipInitialise/>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pb-50">
                <div className="row justify-content-center">
                  <div className="col-lg-6 cyberbxleft">
                    <div className="titlecybersecurity">
                      <h2>
                        {" "}
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/icon2.png"
                        />
                        Rechtsbijstand
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-9">
                        <div className="form-sec">
                          <div className="row">
                            <div className="col-lg-4 col-md-4">
                              <input
                                type="text"
                                className="form-control "
                                id="input1"
                                placeholder="Postcode"
                              />
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <input
                                type="text"
                                className="form-control "
                                id="input2"
                                placeholder="Huisnummer"
                              />
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <input
                                type="text"
                                className="form-control "
                                id="input3"
                                placeholder="Address"
                              />
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <select
                                className="form-select"
                                aria-label="Select"
                              >
                                <option selected>Rechtsbijstand </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <select
                                className="form-select"
                                aria-label="Select"
                              >
                                <option selected>Verzekeraar</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                          <div className="col-lg-3 col-md-3">
                            <label>Geslacht</label>
                          </div>
                          <div className="col-lg-4 col-md-4 radio-icon">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="man"
                              name="geslacht"
                            />
                            <label htmlFor="man">
                              Man <i className="fas fa-2x fa-mars icon" />
                            </label>
                          </div>
                          <div className="col-lg-5 col-md-5 radio-icon">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="vrouw"
                              name="geslacht"
                            />
                            <label htmlFor="vrouw">
                              Vrouw <i className="fas fa-2x fa-venus icon" />
                            </label>
                          </div>
                        </div>

                          <div className="row">
                            <div className="col">
                              <input
                                type="date"
                                id
                                name
                                className="form-control"
                              />
                              <div className="infcalcubx info-pos">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                              <div className="infcalcubx extra-pos">
                                <a href="javascript:void(0);" className="extra">
                                  <i className="fas fa-2x fa-user-plus" />
                                  <span>Extra?</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <label className="form-control mb-2">
                                Gezinssamenstelling
                              </label>
                              <div className="infbx">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-3 col-md-3">
                              <label>Wie?</label>
                            </div>
                            <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="man"
                                name="geslacht"
                              />
                              <label htmlFor="man">
                                Partner{" "}
                                <i className="fal fa-handshake-alt icon" />
                              </label>
                            </div>
                            <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="vrouw"
                                name="geslacht"
                              />
                              <label htmlFor="vrouw">
                                Personeel <i className="fad fa-male icon" />
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <label>Hoeveel?</label>
                            </div>
                            <div className="col-lg-4 col-md-4 radio-icon">
                              <div className="form-num">
                                <input
                                  className="form-control"
                                  type="number"
                                  id="man2"
                                  name="geslacht"
                                />
                                <i className="fas fa-male"></i>
                              </div>


                            </div>
                            <div className="col-lg-5 col-md-5 radio-icon">
                              <div className="form-num">
                                <input
                                  className="form-control"
                                  type="number"
                                  id="man2"
                                  name="geslacht"
                                />
                                <i className="fas fa-male"></i>
                              </div>
                            </div>
                          </div>


                          <div className="row">
                            <div className="col-lg-12">
                              <label className="form-control mb-2">
                                Woning
                              </label>
                              <div className="infbx">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col radiobx">
                              <div className="row">
                                <div className="col-lg-6 col-6">
                                  <input type="radio" name="test" id="gh1" />
                                  <label htmlFor="gh1" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/house-2.png"
                                      className="img-fluid"
                                    />
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Gehuurd"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <span className="checkbox-label">
                                      Gehuurd
                                    </span>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Gehuurd</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-6  col-6">
                                  <input type="radio" name="test" id="gh2" />
                                  <label htmlFor="gh2" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/house-3.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Gekocht
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Gekocht"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Gekocht</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {extendedForm == 0 && (
                            <>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="rangebtn">
                                    <button
                                      className="seenowbtn"
                                      onClick={() => setExtendedForm(1)}
                                    >
                                      Start vergelijken
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {extendedForm == 0 && (
                      <>
                        <a className="cyberprivacylink">
                          <i className="fas fa-2x fa-shield-alt" />
                          <span>Privacy</span>
                        </a>
                      </>
                    )}
                  </div>
                  {extendedForm == 1 && (
                    <>
                      <div className="col-lg-6 pt-4 cyberbxright legal-counsel-right">
                      <TooltipInitialise/>
                        <div className="row">
                          <div className="col-10">
                            <div className="form-sec">
                              <div className="row mb-3">
                                <div className="col-lg-12">
                                  <label className="form-control mb-2">
                                    Aanbevolen dekkingen
                                  </label>
                                  <div className="infbx">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Content Goes Here"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col radiobx">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <input
                                        type="radio"
                                        name="test"
                                        id="cs1"
                                      />
                                      <label htmlFor="cs1" className="tooltip-container">
                                        <Image
                                          width={200}
                                          height={200}
                                          alt="aa"
                                          src="/images/consumer.jpg"
                                          className="img-fluid"
                                        />
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Consument"
                                          className="info-in-risk hide-info-desktop"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <span className="checkbox-label equal-height">
                                          Consument
                                        </span>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Consument</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <input
                                        type="radio"
                                        name="test"
                                        id="cs2"
                                      />
                                      <label htmlFor="cs2" className="tooltip-container">
                                        <Image
                                          width={200}
                                          height={200}
                                          alt="aa"
                                          src="/images/live.jpg"
                                          className="img-fluid"
                                        />
                                         <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Wonen"
                                          className="info-in-risk hide-info-desktop"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <span className="checkbox-label equal-height">
                                          Wonen
                                        </span>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Wonen</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-4  col-md-4 col-6">
                                      <input
                                        type="radio"
                                        name="test"
                                        id="cs3"
                                      />
                                      <label htmlFor="cs3" className="tooltip-container">
                                        <Image
                                          width={200}
                                          height={200}
                                          alt="aa"
                                          src="/images/family.jpg"
                                          className="img-fluid"
                                        />
                                        <span className="checkbox-label equal-height">
                                          Familie
                                        </span>
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Familie"
                                          className="info-in-risk hide-info-desktop"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Familie</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <input
                                        type="radio"
                                        name="test"
                                        id="ge1"
                                      />
                                      <label htmlFor="ge1" className="tooltip-container">
                                        <Image
                                          width={200}
                                          height={200}
                                          alt="aa"
                                          src="/images/trafic-medical.jpg"
                                          className="img-fluid"
                                        />
                                         <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Verkeer & Medisch"
                                          className="info-in-risk hide-info-desktop"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <span className="checkbox-label equal-height">
                                          Verkeer & Medisch
                                        </span>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Verkeer & Medisch</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <input
                                        type="radio"
                                        name="test"
                                        id="ge2"
                                      />
                                      <label htmlFor="ge2" className="tooltip-container">
                                        <Image
                                          width={200}
                                          height={200}
                                          alt="aa"
                                          src="/images/tax-power.jpg"
                                          className="img-fluid"
                                        />
                                         <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Belasting & Vermogen"
                                          className="info-in-risk hide-info-desktop"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <span className="checkbox-label equal-height">
                                          Belasting & Vermogen
                                        </span>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Werk & Inkomen</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                      <input
                                        type="radio"
                                        name="test"
                                        id="ge3"
                                      />
                                      <label htmlFor="ge3" className="tooltip-container">
                                        <Image
                                          width={200}
                                          height={200}
                                          alt="aa"
                                          src="/images/work-income.jpg"
                                          className="img-fluid"
                                        />
                                        <span className="checkbox-label equal-height">
                                          Werk & Inkomen
                                        </span>
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Werk & Inkomen"
                                          className="info-in-risk hide-info-desktop"
                                        >
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Werk & Inkomen</p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row  mb-3">
                                <div className="col">
                                  <select
                                    className="form-select"
                                    aria-label="Select"
                                  >
                                    <option selected>
                                      Aanbevolen verzekeringen
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                  </select>
                                  <div className="infcalcubx info-pos">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Content Goes Here"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                  </div>
                                  <div className="infcalcubx frm-toevoe-position text-center">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#moreviewmodel"
                                    >
                                      <Image
                                        width={50}
                                        height={82}
                                        alt="aa"
                                        src="/images/viewpop.png"
                                        
                                      />
                                      <span>Overzicht?</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="row radiobx mb-3">
                                <div className="col-lg-4 col-4">
                                  <input type="radio" name="test" id="ws1" />
                                  <label htmlFor="ws1" className="tooltip-container" >
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/living.jpg"
                                      className="img-fluid"
                                    />
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Woon"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <span className="checkbox-label">Woon</span>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Woon</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-4">
                                  <input type="radio" name="test" id="ws2" />
                                  <label htmlFor="ws2" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/vehicle-road.jpg"
                                      className="img-fluid"
                                    />
                                     <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Voertuigen"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                       <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <span className="checkbox-label">
                                      Voertuigen
                                    </span>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Voertuigen</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-4">
                                  <input type="radio" name="test" id="ws3" />
                                  <label htmlFor="ws3" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/funeral2.jpg"
                                      className="img-fluid"
                                    />
                                     <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Uitvaart"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <span className="checkbox-label">
                                      Uitvaart
                                    </span>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Uitvaart</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 text-center mb-3">
                                  <a
                                    href="#"
                                    onClick={() => setCount(1)}
                                    className={"btn-one"}
                                  >
                                    Bekijk jouw voordeel
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="privacy-ab mb-4">
                          <a href="javascript:void(0);">
                            <i className="fas fa-2x fa-shield-alt" />
                            <span>Privacy</span>
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="moreviewmodel"
          tabIndex={-1}
          aria-labelledby="moreviewmodelLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id="moreviewmodelLabel"
                >
                  Stap voor stap meer vergelijken
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body addmorepopup">
                <ul className="list-unstyled checkbox-wrapper-16">
                  <li>
                    <div className="row">
                      <div className="col-3">
                        <Image
                          width={90}
                          height={90}
                          alt="asd"
                          src="/images/icon3.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6 text-center">
                        <span>Woonverzekering</span>
                      </div>
                      <div className="col-3 text-end">
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                          />
                          <span className="checkbox-tile">
                            <span className="checkbox-icon">
                              <Image
                                width={128}
                                height={128}
                                alt="asd"
                                src="/images/compairadd.png"
                                className="img-fluid"
                              />
                            </span>
                            <span className="checkbox-label" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-3">
                        <Image
                          width={90}
                          height={90}
                          alt="asd"
                          src="/images/road-2.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6 text-center">
                        <span>Voertuigenverzekering</span>
                      </div>
                      <div className="col-3 text-end">
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                          />
                          <span className="checkbox-tile">
                            <span className="checkbox-icon">
                              <Image
                                width={128}
                                height={128}
                                alt="asd"
                                src="/images/compairadd.png"
                                className="img-fluid"
                              />
                            </span>
                            <span className="checkbox-label" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-3">
                        <Image
                          width={90}
                          height={90}
                          alt="asd"
                          src="/images/grave.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6 text-center">
                        <span>Uitvaartverzekering</span>
                      </div>
                      <div className="col-3 text-end">
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                          />
                          <span className="checkbox-tile">
                            <span className="checkbox-icon">
                              <Image
                                width={128}
                                height={128}
                                alt="asd"
                                src="/images/compairadd.png"
                                className="img-fluid"
                              />
                            </span>
                            <span className="checkbox-label" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="addmorelist">
                      <span>Toevoegen</span>
                      <a href="javascript:void(0);">
                        <i className="fas fa-2x fa-plus-circle" />
                      </a>
                    </div>
                    <div className="infbx">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="popupbtn">
                  <div className="row">
                    <div className="col-4">
                      <a href="#">
                        <Image
                          width={128}
                          height={128}
                          alt="asd"
                          src="/images/monitor.png"
                          className="img-fluid"
                        />
                        <span>Risico Scan</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <button className="btnps">
                        Opslaan
                      </button>
                    </div>
                    <div className="col-4">
                      <a href="#" className="reset">
                        <i className="fas fa-2x fa-sync-alt" />
                        <span>Reset</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Legalenergy />
      <LegalSubject />
    </>
  );
}

export default LegalIndex;
