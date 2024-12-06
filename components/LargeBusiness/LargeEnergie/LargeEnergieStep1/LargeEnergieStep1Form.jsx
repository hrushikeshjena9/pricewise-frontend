import Image from "next/image";
import React, { useState } from "react";
import SameHeightDiv from "../../../common/SameHeightDiv";
import SunAnimation from "../../../common/SunAnimation";

const LargeEnergieStep1Form = ({ setShowStepper, showStepper, setCount }) => {
  const className = 'cyber-securi'

  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
    console.log("hello");
  };
  const [meter, setMeter] = useState(0);
  return (
    <div>
      <SameHeightDiv />
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
                          src="/images/wind-turbine.png"
                          className="img-fluid"
                        />
                        Energie
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-lg-10 col-9">
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
                                className="in-ho-info"
                                title="Content Goes Here"
                              >
                                <i className="fas  fa-map-marker-alt"></i>
                                <span className="small">Address</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Bedrijfsgrootte</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                          <div className="col-lg-6 position-relative">
                            <input type="number" className="form-control" />
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
                          <div className="col px-4 radiobx">
                            <div className="row justify-content-center">
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                                <input type="radio" name="test" id="cb21" />
                                <label htmlFor="cb21" className="tooltip-container">
                                  <i className="fas text-success fa-2x fa-user"></i>
                                  <span className="checkbox-label">
                                    ZZP er (1-5)
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">ZZP er (1-5)</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="ZZP er (1-5)"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                                <input type="radio" name="test" id="cb22" />
                                <label htmlFor="cb22" className="tooltip-container">
                                  <i className="fas text-warning fa-2x fa-user"></i>
                                  <span className="checkbox-label">
                                    MKB (1-250)
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">MKB (1-250)</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="MKB (1-250)"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
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
                                Type meter...
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
                          <div className="col-12 px-4 radiobx">
                            <div className="row">
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                <input type="radio" name="test" id="cb24" />
                                <label htmlFor="cb24" className="tooltip-container">
                                  <Image
                                    src="/images/restaurant-2.png"
                                    width={128}
                                    height={128}
                                    alt="internettv"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Horeca
                                  </span>
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
                                <input type="radio" name="test" id="cb24" />
                                <label htmlFor="cb24" className="tooltip-container">
                                  <Image
                                    src="/images/store.png"
                                    width={128}
                                    height={128}
                                    alt="internettv"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Detailhandel
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Detailhandel"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Detailhandel</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                <input type="radio" name="test" id="cb24" />
                                <label htmlFor="cb24" className="tooltip-container">
                                  <Image
                                    src="/images/industry.jpg"
                                    width={128}
                                    height={128}
                                    alt="internettv"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
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
                                  <span className="checkbox-label equal-height">
                                    Agrosector
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Agrosector</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Agrosector"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name
                                id
                                placeholder="Zonnepanelen"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 icon-img icon-img-lbus">
                            <Image
                              src="/images/solar-panel.png"
                              width={30}
                              height={30}
                              alt="solar"
                            />
                            <input
                              type="text"
                              name
                              id
                              placeholder={0}
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

                        <div className="row">
                          <div className="col-lg-12">
                            <select className="form-select">
                              <option selected disabled>
                                Huidige Leverancier
                              </option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}

                    {showExtendedForm == 0 && (
                      <div className="row mb-4">
                        <div className="col-lg-12">
                          <div className="rangebtn">
                            <a
                              className="text-warning btn-link mb-2"
                              onClick={() => setShowExtendedForm(1)}
                            >
                              Ik weet mijn verbruik
                            </a>
                            <button
                              className="seenowbtn"
                              onClick={handleSecondStep}
                            >
                              Start vergelijking
                            </button>
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
                  {/* ------extended form------- */}
                  {showExtendedForm == 1 && (
                    <div className="col-lg-6 eventbxright">
                      <div className="row">
                        <div className="col-lg-9 col-9">
                          <div className="row">
                            <div className="radio-bx">
                              <label className="radio-button-container">
                                Enkele meter
                                <input
                                  type="radio"
                                  defaultChecked="checked"
                                  name="toggle"
                                  id="showDiv1"
                                  value={0}
                                  onChange={(e) => setMeter(e.target.value)}
                                />
                                <span className="checkmark" />
                              </label>
                              <label className="radio-button-container">
                                Dubbele meter
                                <input
                                  type="radio"
                                  name="toggle"
                                  id="showDiv2"
                                  value={1}
                                  onChange={(e) => setMeter(e.target.value)}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                          <div className="row mt-3">
                            {meter == 0 ? (
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <label className="fw-medium form-control">
                                      Stroomverbruik
                                    </label>
                                  </div>
                                  <div className="col-lg-6 position-relative">
                                    <div className="form-group ">
                                      <input
                                        type="text"
                                        placeholder="7000 kWh/p.j."
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
                                </div>
                              </div>
                            ) : (
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <label className="fw-medium form-control">
                                      Verbruik Normaal
                                    </label>
                                  </div>
                                  <div className="col-lg-6 position-relative">
                                    <div className="form-group ">
                                      <input
                                        type="text"
                                        placeholder="7000 kWh/p.j."
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
                                  <div className="col-lg-6">
                                    <label className="fw-medium form-control">
                                      Verbruik Dal
                                    </label>
                                  </div>
                                  <div className="col-lg-6 position-relative">
                                    <input
                                      type="text"
                                      placeholder="7000 kWh/p.j."
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
                              </div>
                            )}
                            <div className="col-lg-12 position-relative mb-2">
                              <label className="fw-medium form-control">
                                Energielabel
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
                            <div className="col-lg-12">
                              <ul className="list-unstyled">
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classAPlusPlus">A</span>
                                </li>
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classAPlus">B</span>
                                </li>
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classA">C</span>
                                </li>
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classB">D</span>
                                </li>
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classC">E</span>
                                </li>
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classD">F</span>
                                </li>
                                <li className="d-flex">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <span className="classE">G</span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-12">
                              <div className="row mt-2">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Teruglevering"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 position-relative">
                                  <input
                                    type="text"
                                    placeholder="0 kWh/p.j."
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
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Gasverbruik"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 position-relative">
                                  <input
                                    type="text"
                                    placeholder="10000 m3/p.j."
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
                                  <div className="frm-toevoe-position text-center">
                                  <input
                                      className="form-check-input mb-0"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <div className="form-check-label d-block fw-bold ">
                                      <label
                                        htmlFor="flexCheckDefault"
                                        className="form-check-label d-block fw-bold"
                                      >
                                        Gasvrij
                                      </label>
                                    </div>
                                  </div>


                                  {/* <div className="gasvrij-postion-cright text-center">
                                    <input
                                      className="form-check-input mb-0"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <div className="form-check-label d-block fw-bold ">
                                      <label
                                        htmlFor="flexCheckDefault"
                                        className="form-check-label d-block fw-bold"
                                      >
                                        Gasvrij
                                      </label>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
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
                                <a onClick={() => setShowExtendedForm(0)}>
                                  Hulp nodig bij het schatten?
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

export default LargeEnergieStep1Form;
