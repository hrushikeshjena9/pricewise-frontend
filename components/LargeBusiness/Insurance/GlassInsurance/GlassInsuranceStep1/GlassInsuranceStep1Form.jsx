import Image from "next/image";
import React, { useState } from "react";
import GlassInsuranceFormpopup from "./GlassInsuranceFormpopup";
import SunAnimation from "../../../../common/SunAnimation";
import SameHeightDiv from "../../../../common/SameHeightDiv";
import TooltipInitialise from "../../../../common/TooltipInitialise";
const GlassInsuranceStep1Form = ({ setShowStepper, showStepper, setCount }) => {
  const [showMeev, setShowMeev] = useState(false);
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const className = "glass-insuran";
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  return (
    <div>
      <main>
        <div className="eventwrp">
          <SameHeightDiv />
          <SunAnimation className={className} />
          <div className="container">
            <div className="card border-0">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-6 eventbxleft">
                    <div className="titlecybersecurity">
                      <h2>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/window.png"
                          className="img-fluid"
                        />
                        Glasverzekering
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-9">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-lg-4">
                                <input
                                  type="text"
                                  className="form-control "
                                  id="input1"
                                  placeholder="Postcode"
                                />
                              </div>
                              <div className="col-lg-4">
                                <input
                                  type="text"
                                  className="form-control "
                                  id="input2"
                                  placeholder="Huisnummer"
                                />
                              </div>
                              <div className="col-lg-4">
                                <input
                                  type="text"
                                  className="form-control "
                                  id="input3"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-lg-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Glasverzekering </option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                          <div className="col-lg-6 position-relative">
                            <select className="form-select" aria-label="Select">
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
                        <div className="row">
                          <div className="col-12 text-nowrap">
                            <table className="table table-borderless top-gender-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <label>Geslacht</label>
                                  </td>
                                  <td>
                                    <div className="radio-icon top-man-incapacitated-large">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="man"
                                        name="geslacht"
                                      />
                                      <label htmlFor="man">
                                        Man{" "}
                                        <i className="fas fa-2x fa-mars icon" />
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="radio-icon top-vrouw-incapacitated-large">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="vrouw"
                                        name="geslacht"
                                      />
                                      <label htmlFor="vrouw">
                                        Vrouw{" "}
                                        <i className="fas fa-2x fa-venus icon" />
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 position-relative">
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
                                  <a
                                    href="javascript:void(0);"
                                    className="extra"
                                  >
                                    <i className="fas fa-2x fa-user-plus" />
                                    <span>Extra?</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <label className="form-label labeltitle">
                              Pand
                            </label>
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
                        <div className="row radiobx justify-content-center">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbd2" />
                            <label htmlFor="cbd2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/house-2.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label">Gehuurd</span>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gehuurd"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gehuurd</p>
                              </div>
                            </label>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbf2" />
                            <label htmlFor="cbf2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/house-3.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label">Gekocht</span>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gekocht"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gekocht</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <label className="form-label labeltitle">
                              Meeverzekeren?
                            </label>
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                            <div className="frm-toevoe-position text-center">
                            <input
                                      className="form-check-input mb-0"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                      onChange={() => setShowMeev(!showMeev)}
                                      checked={showMeev}
                                    />
                                    <div className="form-check-label d-block fw-bold">
                                      <label
                                        htmlFor="flexCheckDefault"
                                        className="form-check-label d-block fw-bold"
                                      >
                                        Toevoegen
                                      </label>
                                    </div>
                            </div>
                           
                          </div>
                        </div>
                        {showMeev && (
                          <>
                            <div className="row">
                              <div className="col-12 bottom-gender-table text-nowrap">
                                <table className="table table-borderless">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <label>Wie?</label>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="Partner"
                                            name="geslacht"
                                          />

                                          <label htmlFor="Partner">
                                            Partner{" "}
                                            <i className="fal fa-handshake-alt icon" />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="Kind"
                                            name="geslacht"
                                          />
                                          <label htmlFor="Kind">
                                            Personeel{" "}
                                            <i className="fad fa-male icon" />
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <label>Geslacht</label>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="man2"
                                            name="geslacht"
                                          />
                                          <label htmlFor="man2">
                                            Man{" "}
                                            <i className="fas fa-2x fa-mars icon" />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-fnt-icon">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="vrouw2"
                                            name="geslacht"
                                          />
                                          <label htmlFor="vrouw2">
                                            Vrouw{" "}
                                            <i className="fas fa-2x fa-venus icon" />
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 position-relatve">
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
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-lg-6">
                                <label className="form-label">
                                  Glasverzekering
                                </label>
                              </div>
                              <div className="col-lg-6 position-relative">
                                <select
                                  className="form-select"
                                  aria-label="Select"
                                >
                                  <option selected>Verzekeraar </option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                                <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-lg-6">
                                <label className="form-label">
                                  Bedrijfsgrootte
                                </label>
                              </div>
                              <div className="col-lg-6 position-relative">
                                <input className="form-control" type="number" />
                                <div className="infcalcubx only-extra-absolute">
                                  <ul className="list-unstyled">
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        className="extra"
                                      >
                                        <i className="far fa-2x fa-user-plus" />
                                        <span>Extra?</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="text-center">
                          <a
                            href="#addresschange"
                            className="text-dark btn-link"
                            data-bs-toggle="modal"
                          >
                            <Image
                              src="/images/add-location-point.png"
                              width={24}
                              height={24}
                              alt="location"
                            />
                            Meerdere Vestigingen toevoegen.{" "}
                            <sup class="sup-fonticon">
                              <i class="fas green-cyan fa-info-circle"></i>
                            </sup>
                          </a>
                        </div>
                        {/* The modal */}
                        <GlassInsuranceFormpopup />

                        {showExtendedForm == 0 && (
                          <div className="row mt-4">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button
                                  className="seenowbtn"
                                  onClick={handleSecondStep}
                                >
                                  Bekijk jouw voordeel
                                </button>
                                <a onClick={() => setShowExtendedForm(1)}>
                                  Toch snel vergelijken?
                                </a>
                              </div>
                              <a
                                href="javascript:void(0);"
                                className="cyberprivacylink"
                              >
                                <i className="fas fa-2x fa-shield-alt" />
                                <span>Privacy</span>
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Model Start */}
                        <div className="row">
                          <div className="col">
                            {/* Modal */}
                            <div
                              className="modal fade"
                              id="moreviewmodel"
                              tabIndex={-1}
                              aria-labelledby="moreviewmodelLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="moreviewmodelLabel"
                                    >
                                      Selecteer of vul in
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
                                        <div
                                          className="accordion"
                                          id="accordionleft"
                                        >
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="headingOne"
                                            >
                                              <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/contruction.png"
                                                />
                                                <span className="d-block">
                                                  Bedrijfsmiddelen
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapseOne"
                                              className="accordion-collapse collapse show"
                                              aria-labelledby="headingOne"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Wanneer ga je naar de
                                                  tandarts?
                                                </h6>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit. Ik maak hier geen
                                                    gebruik van.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Alleen voor de (half)
                                                    jaarlijkse controle.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Alleen voor de (half)
                                                    jaarlijkse controle en
                                                    mondhygiënist.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Ik laat wel eens gaatjes
                                                    vullen en/of heb een
                                                    wortelkanaalbehandeling.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option5"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option5"
                                                  >
                                                    Ik heb kronen, bruggen en/of
                                                    inlays nodig.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijke
                                                          advies:
                                                        </b>{" "}
                                                        Verwacht je niet een
                                                        bezoek te brengen aan de
                                                        tandarts. Neem dan
                                                        hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading2"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse2"
                                                aria-expanded="false"
                                                aria-controls="collapse2"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/office.png"
                                                />
                                                <span className="d-block">
                                                  Gebouwenverzekering
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse2"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading2"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Wanneer bezoek je de
                                                  Fysiotherapeut?
                                                </h6>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit, ik maak hier geen
                                                    gebruik van.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Ik ga wel eens voor wat
                                                    klachten langs gemiddeld 1
                                                    tot 6 keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Af en toe breng ik een
                                                    bezoek gemiddeld 7 tot 9
                                                    keer jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Regelmatig gemiddeld 10 tot
                                                    18 keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option5"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option5"
                                                  >
                                                    Ik heb vaak ondersteuning
                                                    nodig gemiddeld 19 tot 27
                                                    keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijke
                                                          advies:
                                                        </b>
                                                        Verwacht je niet een
                                                        bezoek te brengen aan de
                                                        fysiotherapeut. Neem
                                                        dan, hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading3"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse3"
                                                aria-expanded="false"
                                                aria-controls="collapse3"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/employee-2.png"
                                                />
                                                <span className="d-block">
                                                  Bedrijfsaansprakelijkheid
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse3"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading3"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Maak je gebruik van een
                                                  chiropractor, accupunturist of
                                                  andere alternatieve
                                                  geneeswijzen?
                                                </h6>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit. ik maak hier geen
                                                    gebruik van.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Ik ga soms voor wat klachten
                                                    langs. Gemiddeld 1 tot 4
                                                    keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Ik breng regelmatig een
                                                    bezoek. Gemiddeld 5 tot 8
                                                    keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-inline-block w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Ik heb last van een blessure
                                                    en/of chronische aandoening
                                                    en bezoek 9 tot 12 keer per
                                                    jaar een alternatieve
                                                    geneeswijzen.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijke
                                                          advies:
                                                        </b>
                                                        Verwacht je niet een
                                                        bezoek te brengen aan
                                                        een alternatieve
                                                        geneeswijzen. Neem dan,
                                                        hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li></li>

                                      <li>
                                        <div className="addmorelist">
                                          <span>Toevoegen</span>
                                          <a href="javascript:void(0);">
                                            <i className="fas fa-2x fa-plus-circle" />
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="popupbtn">
                                      <div className="row">
                                        <div className="col-12 text-center  ">
                                          <button className="btnps">
                                            Opslaan
                                          </button>
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
                          </div>
                        </div>

                        {/* Model End */}
                      </div>
                    </div>
                  </div>

                  {/* ------extended form------- */}
                  {showExtendedForm == 1 && (
                    <div className="col-lg-6 eventbxright">
                      <TooltipInitialise/>
                      <div className="row">
                        <div className="col-9">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Aantal ramen
                                  </label>
                                </div>
                                <div className="col-4 position-relative">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="numberInput1"
                                    min={1}
                                    defaultValue={1}
                                  />
                                  <div className="infcalcubx info-pos">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      aria-label="Content Goes Here"
                                      data-bs-original-title="Content Goes Here"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                    min={1}
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span id="rangeValue1">0</span>
                                      <span>100.000</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Afmeting ramen
                                  </label>
                                </div>
                                <div className="col-4 position-relative">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="numberInput1"
                                    min={1}
                                    defaultValue={1}
                                  />
                                  <div className="infcalcubx info-pos">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      aria-label="Content Goes Here"
                                      data-bs-original-title="Content Goes Here"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                    min={1}
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span id="rangeValue1">
                                        1 m<sup>2</sup>
                                      </span>
                                      <span>
                                        100 m<sup>2</sup>
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Herbouwwaarde
                                  </label>
                                </div>
                                <div className="col-4 position-relative">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="numberInput1"
                                    min={1}
                                    defaultValue={1}
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
                              <div className="infcalcubx frm-toevoe-position text-center">
                              <a
                                      data-bs-toggle="modal"
                                      href="#glassmain"
                                      role="button"
                                      className="calculatorwrp"
                                    >
                                      <i className="fas fa-calculator"></i>
                                      <span>Hulp nodig?</span>
                                    </a>
                              </div>
                                 
                                </div>
                                <div className="col-12">
                                  <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                    min={1}
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span id="rangeValue1">€1</span>
                                      <span>€1000.00</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="glassmain"
                            tabIndex={-1}
                            aria-labelledby="glassmainLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="liabilstepLabel"
                                  >
                                    Selecteer of vul in
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body glass-box-modal">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="glass-form-input">
                                        <select
                                          className="form-select"
                                          aria-label="Select"
                                        >
                                          <option selected>
                                            Aanbevolen verzekeringen
                                          </option>
                                          <option value="option1">
                                            Option 1
                                          </option>
                                          <option value="option2">
                                            Option 2
                                          </option>
                                          <option value="option3">
                                            Option 3
                                          </option>
                                        </select>
                                        <div className="infbx infbx2">
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
                                    <div className="col-lg-12 radiobx">
                                      <div className="glass-form-input">
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <input
                                              type="radio"
                                              name="test"
                                              id="gls1"
                                            />
                                            <label htmlFor="gls1">
                                              <Image
                                                width={200}
                                                height={200}
                                                alt="aa"
                                                src="/images/window-4.png"
                                                className="img-fluid"
                                              />
                                              <span className="checkbox-label">
                                                Enkel glas
                                              </span>
                                            </label>
                                          </div>
                                          <div className="col-lg-4">
                                            <input
                                              type="radio"
                                              name="test"
                                              id="gls2"
                                            />
                                            <label htmlFor="gls2">
                                              <Image
                                                width={200}
                                                height={200}
                                                alt="aa"
                                                src="/images/window-6.png"
                                                className="img-fluid"
                                              />
                                              <span className="checkbox-label">
                                                Dubbelglas
                                              </span>
                                            </label>
                                          </div>
                                          <div className="col-lg-4">
                                            <input
                                              type="radio"
                                              name="test"
                                              id="gls3"
                                            />
                                            <label htmlFor="gls3">
                                              <Image
                                                width={200}
                                                height={200}
                                                alt="aa"
                                                src="/images/window-5.png"
                                                className="img-fluid"
                                              />
                                              <span className="checkbox-label">
                                                Triple glas
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="glass-form-input">
                                        <div className="row">
                                          <div className="col">
                                            <label className="form-label labeltitle">
                                              Bouwjaar
                                            </label>
                                          </div>
                                          <div className="col">
                                            <input
                                              type="number"
                                              className="form-control "
                                              id="numberInput1"
                                              min={1}
                                              defaultValue={1}
                                            />
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
                                          <div className="col-12">
                                            <input
                                              type="range"
                                              className="form-range"
                                              id="customRange1"
                                              min={1}
                                              max={20000}
                                              defaultValue={1}
                                            />
                                            <label
                                              htmlFor="customRange1"
                                              className="form-label"
                                              style={{ width: "100%" }}
                                            >
                                              <div className="cus-num">
                                                <span>1900</span>
                                                <span>2018</span>
                                              </div>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="glass-form-input">
                                        <div className="row">
                                          <div className="col">
                                            <label className="form-label labeltitle">
                                              Inhoud gebouw
                                            </label>
                                          </div>
                                          <div className="col">
                                            <input
                                              type="number"
                                              className="form-control "
                                              id="numberInput1"
                                              min={1}
                                              defaultValue={1}
                                            />
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
                                          <div className="col-12">
                                            <input
                                              type="range"
                                              className="form-range"
                                              id="customRange1"
                                              min={1}
                                              max={20000}
                                              defaultValue={1}
                                            />
                                            <label
                                              htmlFor="customRange1"
                                              className="form-label"
                                              style={{ width: "100%" }}
                                            >
                                              <div className="cus-num">
                                                <span>
                                                  0 m<sup>3</sup>
                                                </span>
                                                <span>
                                                  10.000 m<sup>3</sup>
                                                </span>
                                              </div>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="popupbtn">
                                        <div className="row">
                                          <div
                                            className="col-lg-8"
                                            style={{ textAlign: "right" }}
                                          >
                                            <span>
                                              Herbouwwaarde: € 304.096
                                            </span>
                                            <a href="#" className="btnps">
                                              Opslaan
                                            </a>
                                          </div>
                                          <div className="col-lg-4">
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
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12 position-relative">
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
                                        width={60}
                                        height={55}
                                        alt="aa"
                                        src="/images/viewpop.png"
                                      />
                                      <span>Overzicht?</span>
                                    </a>
                              </div>
                             
                            </div>
                            <div className="row radiobx justfy-content-center px-4">
                              <div className="col-lg-4 p-0 col-md-4 col-sm-6">
                                <input type="radio" name="test" id="cbdnbo" />
                                <label htmlFor="cbdnbo" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/contruction.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Bedrijfsmiddelen
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Bedrijfsmiddelen"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Bedrijfsmiddelen</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-4 p-0 col-md-4 col-sm-6">
                                <input type="radio" name="test" id="cbstal" />
                                <label htmlFor="cbstal" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/office.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Gebouw
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Gebouw"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Gebouw</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-4 p-0 col-md-4 col-sm-6">
                                <input type="radio" name="test" id="cbfanspr" />
                                <label htmlFor="cbfanspr" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/employee-2.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Aansprakelijkheid
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Aansprakelijkheid"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Aansprakelijkheid</p>
                                  </div>
                                </label>
                              </div>
                            </div>
                            {/* Model Start */}
                            <div
                              className="modal quantityModal fade"
                              id="quantityModalToggle"
                              aria-hidden="true"
                              aria-labelledby="quantityModalToggleLabel"
                              tabIndex={-1}
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <i className="fas fa-times" />
                                    </button>
                                    Your Content Goes Here.
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Model End */}
                          </div>

                          <div className="row mt-4">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button
                                  className="seenowbtn"
                                  onClick={handleSecondStep}
                                >
                                  Bekijk jouw voordeel
                                </button>
                                <a onClick={() => setShowExtendedForm(0)}>
                                  Uitgebreid Vergelijken
                                </a>
                              </div>
                              <a
                                href="javascript:void(0);"
                                className="cyberprivacylink"
                              >
                                <i className="fas fa-2x fa-shield-alt" />
                                <span>Privacy</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlassInsuranceStep1Form;
