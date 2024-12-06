import Image from "next/image";
import React, { useState } from "react";
import SunAnimation from "../../../common/SunAnimation";

const FormTop = ({ setShowStepper, showStepper, setCount }) => {
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const className = "internet-tvlarge";
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  return (
    <>
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
                        src="/images/internettv.png"
                        width={131}
                        height={101}
                        alt="internettv"
                        className="img-fluid"
                      />
                      Internet Tv Telefonie
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-10 col-lg-10 col-sm-10">
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
                        <div className="col-lg-4 position-relative">
                          <input
                            type="text"
                            className="form-control "
                            id="input3"
                            placeholder="Address"
                          />
                          <div className="infcalcubx c-energic-adr">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Content Goes Here"
                              data-bs-original-title="Content Goes Here"
                              className="text-center"
                            >
                              <i className="fas fa-2x fa-map-marker-alt d-block"></i>
                              <span className="d-block">Adress</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <label className="form-label labeltitle">
                            Bedrijfsgrootte
                          </label>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <input
                            type="number"
                            className="form-control mb-0"
                            id="numberInput5"
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
                      </div>

                      <div className="row">
                        <div className="col px-4 radiobx">
                          <div className="row justify-content-center">
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb21" />
                              <label htmlFor="cb21">
                                <i className="fas text-success fa-2x fa-user"></i>
                                <span className="checkbox-label">20-100</span>
                              </label>
                            </div>
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22">
                                <i className="fas text-warning fa-2x fa-user"></i>
                                <span className="checkbox-label">
                                  100-&#x221e;
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <label className="form-label labeltitle">
                            Etages
                          </label>
                        </div>
                        <div className="col-4 position-relative">
                          <input className="form-control" type="number" />
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
                        <div className="col-lg-12 position-relative">
                          <select
                            className="form-select"
                            id="exampleSelect"
                            aria-label="Select an option"
                          >
                            <option disabled selected>
                              Sector...
                            </option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                            <option value="5">Option 5</option>
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
                        <div className="col-12 px-4 font-13 radiobx">
                          <div className="row">
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb21" />
                              <label htmlFor="cb21" className="tooltip-container">
                                <Image
                                  src="/images/restaurant-2.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">Horeca</span>
                                <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Horeca</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Horeca"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                              </label>
                            </div>
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22" className="tooltip-container">
                                <Image
                                  src="/images/store.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">
                                  Detailhandel
                                </span>
                                 <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Detailhandel</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Detailhandel"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                              </label>
                            </div>
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb23" />
                              <label htmlFor="cb23" className="tooltip-container">
                                <Image
                                  src="/images/Industrie.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">
                                  Industrie
                                </span>
                                <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Industrie"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Industrie</p>
                                  </div>
                              </label>
                            </div>
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb24" />
                              <label htmlFor="cb24" className="tooltip-container">
                                <Image
                                  src="/images/smart-farm.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">
                                  Agrosector
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Agrosector"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Agrosector</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option disabled selected>
                              Koppelkorting
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
                              aria-label="Content Goes Here"
                              data-bs-original-title="Content Goes Here"
                            >
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 ">
                          <select className="form-select" aria-label="Select">
                            <option disabled selected>
                              Huidige provider
                            </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                      </div>

                      {showExtendedForm == 0 && (
                        <div className="row mt-4 mb-4 ">
                          <div className="col-lg-12">
                            <div className="rangebtn">
                              <button
                                className="seenowbtn"
                                onClick={handleSecondStep}
                              >
                                Bekijk jouw voordeel
                              </button>
                              <a
                                className="help-estimat"
                                onClick={() => setShowExtendedForm(1)}
                              >
                                Ik weet mijn verbruik
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
                    </div>
                  </div>
                </div>
                {showExtendedForm == 1 && (
                  <div className="col-lg-6 eventbxright checkbox-align">
                    <div className="row">
                      <div className="col-12 col-lg-11">
                        <div className="row">
                          <div className="col-10 position-relative">
                            <label className="form-label labeltitle">
                              <i className="fas  fa-globe" /> Internet
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

                        <div className="row">
                          <div className="col-12 pb-2">
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="internetTypeGlasvezel"
                                defaultValue="Glasvezel"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="internetTypeGlasvezel"
                              >
                                Glasvezel
                              </label>
                            </div>
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="internetTypeKabel"
                                defaultValue="Kabel"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="internetTypeKabel"
                              >
                                Kabel
                              </label>
                            </div>
                          </div>
                          <div className="col-12 pb-2">
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="internetTypeADSLVDSL"
                                defaultValue="ADSL/VDSL"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="internetTypeADSLVDSL"
                              >
                                ADSL/VDSL
                              </label>
                            </div>
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="internetTypeWIFIBooster"
                                defaultValue="WIFI Booster"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="internetTypeWIFIBooster"
                              >
                                WIFI Booster
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10">
                            <div className="row">
                              <div className="col-6">
                                <label className="form-label labeltitle">
                                  <i className="fas fa-tv"></i>{" "}
                                  <span>Televisie</span>{" "}
                                </label>
                              </div>
                              <div className="col-6 position-relative">
                                <input
                                  type="number"
                                  className="form-control mb-0"
                                  id="numberInput5"
                                  min={1}
                                  defaultValue={1}
                                />
                                <div className="infcalcubx for-nvt-check">
                                  <ul>
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        aria-label="Content Goes Here"
                                        data-bs-original-title="Content Goes Here"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                    </li>
                                    <li>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          name="options"
                                          id="option1"
                                          defaultValue="option1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="option1"
                                        >
                                          n.v.t
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10 py-2">
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="sport"
                                defaultValue="Glasvezel"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="sport"
                              >
                                Sport
                              </label>
                            </div>
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="films"
                                defaultValue="Kabel"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="films"
                              >
                                Films
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-10 ">
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="kinderen"
                                defaultValue="ADSL/VDSL"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="kinderen"
                              >
                                Kinderen
                              </label>
                            </div>
                            <div className="form-check form-check-inline p-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="internetType"
                                id="erotiek"
                                defaultValue="WIFI Booster"
                              />
                              <label
                                className="form-check-label ps-2 pt-1"
                                htmlFor="erotiek"
                              >
                                Erotiek
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10">
                            <div className="row">
                              <div className="col-6">
                                <label className="form-label labeltitle font-14">
                                  <i className="fas fa-phone-alt"></i> Vaste
                                  telefonie
                                </label>
                              </div>
                              <div className="col-6 position-relative">
                                <input
                                  type="number"
                                  className="form-control mb-0"
                                  id="numberInput5"
                                  min={1}
                                  defaultValue={1}
                                />
                                <div className="infcalcubx for-nvt-check">
                                  <ul>
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        aria-label="Content Goes Here"
                                        data-bs-original-title="Content Goes Here"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                    </li>
                                    <li>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          name="options"
                                          id="option1"
                                          defaultValue="option1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="option1"
                                        >
                                          n.v.t
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-5">
                            <label className="form-label labeltitle">
                              Budget
                            </label>
                          </div>
                          <div className="col-5">
                            <input
                              type="number"
                              className="form-control"
                              id="numberInput1"
                              min={1}
                              defaultValue={1}
                            />
                          </div>
                          <div className="col-10">
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
                                <span id="rangeValue5">€1</span>
                                <span>€200</span>
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
                              <a
                                className="help-estimat"
                                onClick={() => setShowExtendedForm(0)}
                              >
                                Huip nodig bij het schatten?
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
    </>
  );
};

export default FormTop;
