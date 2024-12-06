import Image from "next/image";
import React, { useState } from "react";
import BuildingInsuranceFormPopup from "./BuildingInsuranceFormPopup";
import SunAnimation from "../../../../common/SunAnimation";
import SameHeightDiv from "../../../../common/SameHeightDiv";

const BuildingInsuranceStep1Form = ({
  setShowStepper,
  showStepper,
  setCount,
}) => {
  const [showMeev, setShowMeev] = useState(false);
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  const className = "home-insurance";
  return (
    <div>
      <SameHeightDiv dependency={showExtendedForm} />
      <main>
        <div className="eventwrp">
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
                          src="/images/office.png"
                          className="img-fluid"
                        />
                        Gebouwenverzekering
                      </h2>
                    </div>
                    <div className="row">
                      <div className=" col-9">
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
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Gebouwenverzekering</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6 position-relative">
                            <select className="form-select" aria-label="Select">
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

                        <div className="row">
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
                          <div className="col-lg-12 position-relative">
                            <input type="date" className="form-control" />
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
                          <div className="col-lg-12 text-center position-relative">
                            <label className="form-label fw-medium labeltitle">
                              Pand
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
                          </div>
                          <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-2">
                          <div className="col px-4 radiobx">
                            <div className="row justify-content-center">
                              <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                <input type="radio" name="test" id="cb21" />
                                <label htmlFor="cb21" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="horeca"
                                    src="/images/house-2.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Gehuurd
                                  </span>
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
                              <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                                <input type="radio" name="test" id="cb22"/>
                                <label htmlFor="cb22" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
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
                                    className="info-in-risk hide-info-desktop">
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
                        <div className="row">
                          <div className="col-lg-12 position-relative">
                            <label className="form-control labeltitle">
                              Meeverzekeren
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
                                onChange={() => setShowMeev(!showMeev)}
                                checked={showMeev}
                                className="form-check-input mb-0"
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <div className="form-check-label d-block fw-bold">
                                <label
                                  htmlFor="flexCheckDefault"
                                  className="form-check-label d-block fw-bold green-cyan"
                                >
                                  <span className="fw-medium text-dark">
                                    Toevoegen
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3"></div>
                        </div>
                        {showMeev && (
                          <>
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
                                  Vrouw{" "}
                                  <i className="fas fa-2x fa-venus icon" />
                                </label>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 position-relative">
                                <input type="date" className="form-control" />
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
                          </>
                        )}

                        <div className="row">
                          <div className="col-lg-6 col-md-6 mt-2">
                            <label className="form-lable labeltitle">
                              Gebouwverzekering
                            </label>
                          </div>
                          <div className="col-lg-6 col-md-6 mt-2 position-relative">
                            <select
                              className="form-select "
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
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 mt-2">
                            <label className="form-lable labeltitle">
                              Bedrijfsgrootte
                            </label>
                          </div>
                          <div className="col-lg-6 col-md-6 mt-2 position-relative">
                            <div className="male-num">
                              <input type="number" className="form-control" />
                              <i class="fas fa-male"></i>
                            </div>
                            <div className="infcalcubx professionalliability-large-infoin">
                              <a href="javascript:void(0);" className="extra">
                                <i className="fas fa-2x fa-user-plus" />
                                <span>Extra?</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="multiple-user">
                        <a
                          href="#addresschange"
                          className="text-success text-centerd-block"
                          data-bs-toggle="modal"
                        >
                          {" "}
                          <Image
                            src="/images/add-location-point.png"
                            width={24}
                            height={24}
                            alt="location"
                          />
                          <p className="d-flex">
                            <span className="link-underline-dark text-decoration-underline">
                              Meerdere gebruikers toevoegen.
                            </span>
                            <sup>
                              <i
                                class="fas font-14 fa-info-circle"
                                style={{ color: "#68d7be" }}
                              ></i>{" "}
                            </sup>
                          </p>
                        </a>
                      </div>
                      {showExtendedForm == 0 && (
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="rangebtn">
                              <button
                                className="seenowbtn"
                                onClick={() => setShowExtendedForm(1)}
                              >
                                Start vergelijking
                              </button>
                              {/* <a onClick={() => setShowExtendedForm(1)}>
                                  Toch snel vergelijken?
                                </a> */}
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
                      </div>
                      <BuildingInsuranceFormPopup />
                      {/* <div className="text-center">
                        <a
                          href="#addresschange"
                          className="text-success text-centerd-block"
                          data-bs-toggle="modal"
                        >
                          <Image
                            src="/images/add-location-point.png"
                            width={24}
                            height={24}
                            alt="location"
                          />
                          Meerdere Vestigingen toevoegen.
                        </a>
                        <BuildingInsuranceFormPopup />
                      </div> */}
                      {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}
                    
                    </div>
                  </div>
                  {/* ------extended form------- */}
                  {showExtendedForm == 1 && (
                    <div className="col-lg-6 eventbxright">
                      <div className="row">
                        <div className="col-9">
                          <div className="row">
                            <div className="col-lg-12 position-relative">
                              <label className="form-control">
                                Soort dekking
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
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col px-4 radiobx">
                              <div className="row justify-content-center">
                                <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                  <input type="radio" name="test" id="cb21" />
                                  <label htmlFor="cb21" className="tooltip-container">
                                    <Image
                                      width={128}
                                      height={128}
                                      alt="horeca"
                                      src="/images/homeicon.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Basis
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Basis"
                                      className="info-in-risk hide-info-desktop">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Basis</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                                  <input type="radio" name="test" id="cb22" />
                                  <label htmlFor="cb22" className="tooltip-container">
                                    <Image
                                      width={128}
                                      height={128}
                                      alt="aa"
                                      src="/images/homeicon.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Allrisk
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Allrisk"
                                      className="info-in-risk hide-info-desktop">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Allrisk</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-12 col-lg-6 col-md-6">
                              <label className="form-label labeltitle">
                                Verzekerd bedrag
                              </label>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 position-relative">
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
                                  href="javascript:void(0);"
                                  className="calculatorwrp"
                                >
                                  <i className="fas fa-calculator" />
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
                                max={2}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€30.000</span>
                                  <span>€1.250.000</span>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div className="row mt-2">
                            <div className="col-12 col-lg-6">
                              <label className="form-label labeltitle">
                                Eigen risico
                              </label>
                            </div>
                            <div className="col-12 col-lg-6 position-relative">
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
                                max={2}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€1</span>
                                  <span>€300</span>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div className="col-12 position-relative">
                              <select
                                className="form-select"
                                aria-label="Select"
                              >
                                <option disabled selected>
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

                          <div className="row radiobx">
                            <div className="col-lg-4  col-6  col-sm-6  col-md-4">
                              <label
                                data-bs-toggle="modal"
                                data-bs-target="#lbcmassets"
                                className="tooltip-container"
                              >
                                <Image
                                  width={128}
                                  height={128}
                                  alt="horeca"
                                  src="/images/companyassets.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
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
                            <div className="col-lg-4  col-6  col-sm-6  col-md-4">
                              <label
                                data-bs-toggle="modal"
                                data-bs-target="#lbglass"
                                className="tooltip-container"
                              >
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/voteicon.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
                                  Glas
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Glas"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Glas</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4  col-6  col-sm-6  col-md-4">
                              <label
                                data-bs-toggle="modal"
                                data-bs-target="#lbliability"
                                className="tooltip-container"
                              >
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/corporateliability.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
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
                          <div className="row mt-4">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button
                                  className="seenowbtn"
                                  onClick={handleSecondStep}
                                >
                                  Bekijk jouw voordeel
                                </button>
                                {/* <a onClick={() => setShowExtendedForm(0)}>
                                  Uitgebreid Vergelijken
                                </a> */}
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
              <h1 className="modal-title fs-5" id="moreviewmodelLabel">
                Stap voor stap meer vergelijken
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="modal-body addmorepopup"
              style={{ paddingRight: "15px" }}
            >
              <ul className="list-unstyled checkbox-wrapper-16">
                <li>
                  <div className="row">
                    <div className="col-4">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/contruction.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Bedrijfsmiddelen</span>
                    </div>
                    <div className="col-4 text-end">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
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
                    <div className="col-4">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/window.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Glasverzekering</span>
                    </div>
                    <div className="col-4 text-end">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
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
                    <div className="col-4">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/employee-2.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Bedrijfsaansprakelijkheid</span>
                    </div>
                    <div className="col-4 text-end">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
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
                </li>
              </ul>
              <div className="popupbtn">
                <div className="row">
                  <div className="col-12 text-center  ">
                    <button className="btnps">Opslaan</button>
                    <a href="#" className="reset">
                      <i className="fas fa-2x fa-sync-alt" />
                      <span>Reset</span>
                    </a>
                    <a href="#" className="scan-ris">
                      <Image width={40} height={40} src="/images/monitor.png" alt="monitor" />
                      <span>Risico scan</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --modal ends-- */}

      <div
        className="modal fade funeral-sec-mod"
        id="lbliability"
        tabIndex={-1}
        aria-labelledby="lbliabilityLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="liabilstepLabel">
                Bedrijfsaansprakelijkheid Selecteer of vul in
              </h1>
              <Image
                width={128}
                height={128}
                alt="horeca"
                src="/images/corporateliability.png"
                className="img-fluid"
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="funeral-modal-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Lever of maak je producten?"
                      />
                      <i className="fas fa-info"></i>

                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test" id="cb1" />
                          <label htmlFor="cb1">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test" id="cb2" />
                          <label htmlFor="cb2">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Lever je producten aan industrie?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test2" id="cb3" />
                          <label htmlFor="cb3">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test2" id="cb4" />
                          <label htmlFor="cb4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je schade aan spullen verzekeren?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test3" id="cb5" />
                          <label htmlFor="cb5">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test3" id="cb6" />
                          <label htmlFor="cb6">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Werk je met milieugevaarlijke stoffen?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test4" id="cb7" />
                          <label htmlFor="cb7">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test4" id="cb8" />
                          <label htmlFor="cb8">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Verzekerd bedrag
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€0</span>
                            <span>€50.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Bruto omzet
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€30.000</span>
                            <span>€1.250.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="popupbtn">
                    <div className="row">
                      <div className="col-lg-12">
                        <span>Totaal verzekerd bedrag: € 9.245</span>
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
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

      <div
        className="modal fade funeral-sec-mod"
        id="lbcmassets"
        tabIndex={-1}
        aria-labelledby="lbcmassetsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="liabilstepLabel">
                Bedrijfsmiddelen Selecteer of vul in
              </h1>
              <Image
                width={128}
                height={128}
                alt="horeca"
                src="/images/companyassets.png"
                className="img-fluid"
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="funeral-modal-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je inventaris meeverzekeren? "
                      />
                      <i className="fas fa-info"></i>

                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test" id="cb1" />
                          <label htmlFor="cb1">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test" id="cb2" />
                          <label htmlFor="cb2">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je goederen meeverzekeren?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test2" id="cb3" />
                          <label htmlFor="cb3">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test2" id="cb4" />
                          <label htmlFor="cb4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Verzekerd bedrag
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€0</span>
                            <span>€2.000.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Verzekerd bedrag
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€0</span>
                            <span>€2.000.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je koelschade meeverzekeren? "
                      />
                      <i className="fas fa-info"></i>
                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test3" id="cb5" />
                          <label htmlFor="cb5">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test3" id="cb6" />
                          <label htmlFor="cb6">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je kasgeld meeverzekeren?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="row justify-content-center radiobx mt-3">
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test4" id="cb7" />
                          <label htmlFor="cb7">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/yes.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Ja</span>
                          </label>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <input type="radio" name="test4" id="cb8" />
                          <label htmlFor="cb8">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/no.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Nee</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Verzekerd bedrag
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€0</span>
                            <span>€50.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Verzekerd bedrag
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>€0</span>
                            <span>€25.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="popupbtn">
                    <div className="row">
                      <div className="col-lg-12">
                        <span>Totaal verzekerd bedrag: € 0</span>
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
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

      <div
        className="modal fade funeral-sec-mod"
        id="lbglass"
        tabIndex={-1}
        aria-labelledby="lbglassLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="liabilstepLabel">
                Selecteer of vul in
              </h1>
              <Image
                width={128}
                height={128}
                alt="horeca"
                src="/images/voteicon.png"
                className="img-fluid"
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="funeral-modal-bx">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Aantal ramen
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>0</span>
                            <span>100</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Afmeting ramen
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>
                              0 m<sup>2</sup>
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
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Bouwjaar
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>1900</span>
                            <span>2018</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt-2">
                      <div className="col-12 col-lg-6 col-md-6">
                        <label className="form-label labeltitle">
                          Inhoud gebouw
                        </label>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 position-relative">
                        <input
                          type="number"
                          className="form-control"
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
                          max={2}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange1" className="form-label">
                          <div className="cus-num">
                            <span>
                              0 m<sup>2</sup>
                            </span>
                            <span>
                              10.000 m<sup>2</sup>
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="popupbtn">
                    <div className="row">
                      <div className="col-lg-12">
                        <span>Herbouwwaarde: € 304.096</span>
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
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
    </div>
  );
};

export default BuildingInsuranceStep1Form;
