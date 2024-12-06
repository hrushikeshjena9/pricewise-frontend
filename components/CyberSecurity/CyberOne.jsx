import Image from "next/image";
import React, { useState } from "react";
import SunAnimation from "../common/SunAnimation";
import SameHeightDiv from "../common/SameHeightDiv";

const CyberOne = ({ setCount }) => {
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const className = "cyber-securi";
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(10);
  const [rangeValue3, setRangeValue3] = useState(1);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleRangeChange2 = (e) => {
    setRangeValue2(parseInt(e.target.value));
  };
  const handleRangeChange3 = (e) => {
    setRangeValue3(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  const handleInputChange2 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  const handleInputChange3 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <SameHeightDiv />
      <main>
        <div className="cybersecurity-wrp">
          <SunAnimation className={className} />
          <div className="container">
            <div className="card border-0">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-7 cyberbxleft">
                    <div className="titlecybersecurity">
                      <h2>
                        {" "}
                        <Image
                          width={42}
                          height={42}
                          src="/images/cyber-security-3.png"
                          alt="aa"
                        />
                        Cybersecurity
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-9">
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
                              <option selected>Cybersecurity</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Cybersecurity</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <div className="infbx cyber-dropinfo">
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
                          <div className="col-lg-3 col-md-3">
                            <label>Geslacht</label>
                          </div>
                          <div className="col-lg-auto col-md-auto col-sm-auto radio-icon">
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
                          <div className="col-lg-auto col-md-auto col-sm-auto radio-icon">
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
                          <div className="col">
                            <select className="form-select" aria-label="Select">
                              <option selected>
                                Aanbevolen verzekeringenv
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

                            {/* Modal */}
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
                                              src="/images/icon1.png"
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
                                              src="/images/icon2.png"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-6 text-center">
                                            <span>Rechtsbijstand</span>
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
                                              src="/images/icon3.png"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-6 text-center">
                                            <span>Leningen</span>
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
                          </div>
                        </div>
                        <div className="row">
                          <div className="col radiobx">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb1" />
                                <label htmlFor="cb1" className="tooltip-container">
                                  <Image
                                    width={100}
                                    height={100}
                                    alt="asd"
                                    src="/images/security-2.png"
                                    className="img-fluid"
                                  />
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Woonverzekering"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <span className="checkbox-label equal-height">
                                    Woonverzekering
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Woonverzekering</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb2" />
                                <label htmlFor="cb2" className="tooltip-container">
                                  <Image
                                    width={100}
                                    height={100}
                                    alt="asd"
                                    src="/images/law-2.png"
                                    className="img-fluid"
                                  />
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Rechtsbijstand"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <span className="checkbox-label equal-height">
                                    Rechtsbijstand
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Rechtsbijstand</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb3" />
                                <label htmlFor="cb3" className="tooltip-container">
                                  <Image
                                    width={100}
                                    height={100}
                                    alt="asd"
                                    src="/images/bank-3.png"
                                    className="img-fluid"
                                  />
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Leningen"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <span className="checkbox-label equal-height">
                                    Leningen
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Leningen</p>
                                  </div>
                                </label>
                              </div>
                              {showExtendedForm == 0 && (
                                <>
                                  <div className="rangebtn">
                                    <button
                                      className="seenowbtn"
                                      onClick={() => setCount(1)}
                                    >
                                      Bekijk jouw voordeel
                                    </button>
                                    <a onClick={() => setShowExtendedForm(1)}>
                                      Uitgebreid vergelijken?
                                    </a>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showExtendedForm == 0 && (
                      <a
                        href="javascript:void(0);"
                        className="cyberprivacylink"
                      >
                        <i className="fas fa-2x fa-shield-alt" />
                        <span>Privacy</span>
                      </a>
                    )}
                  </div>
                  {showExtendedForm == 1 && (
                    <div className="col-lg-5 cyberbxright pt-4">
                      <div className="row">
                        <div className="col-10">
                          <div className="row">
                            <div className="col">
                              <label className="form-label labeltitle">
                                Licentie duur
                              </label>
                            </div>
                            <div className="col">
                              <input
                                type="number"
                                className="form-control "
                                id="numberInput1"
                                min={1}
                                max={2}
                                value={rangeValue}
                                onChange={handleInputChange}
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
                                max={2}
                                value={rangeValue}
                                onChange={handleRangeChange}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>1jaar</span>
                                  <span>2 jaars</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label className="form-label labeltitle">
                                Cloud back-up
                              </label>
                            </div>
                            <div className="col">
                              <input
                                type="number"
                                className="form-control "
                                id="numberInput2"
                                min={10}
                                max={100}
                                value={rangeValue2}
                                onChange={handleInputChange2}
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
                                id="customRange2"
                                min={10}
                                max={100}
                                value={rangeValue2}
                                onChange={handleRangeChange2}
                              />
                              <label
                                htmlFor="customRange2"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>10GB</span>
                                  <span>100GB</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label className="form-label labeltitle">
                                Aantal pc&#x27;s
                              </label>
                            </div>
                            <div className="col">
                              <input
                                type="number"
                                className="form-control "
                                id="numberInput3"
                                min={1}
                                max={20}
                                value={rangeValue3}
                                onChange={handleInputChange3}
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
                                id="customRange3"
                                min={1}
                                max={20}
                                value={rangeValue3}
                                onChange={handleRangeChange3}
                              />
                              <label
                                htmlFor="customRange3"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>1</span>
                                  <span>20 computers</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="rangebtn">
                            <button
                              className="seenowbtn"
                              onClick={() => setCount(1)}
                            >
                              Bekijk jouw voordeel
                            </button>
                            <a onClick={() => setShowExtendedForm(0)}>
                              Toch snel vergelijken?
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="cyberprivacylink"
                      >
                        <i className="fas fa-2x fa-shield-alt" />
                        <span>Privacy</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CyberOne;
