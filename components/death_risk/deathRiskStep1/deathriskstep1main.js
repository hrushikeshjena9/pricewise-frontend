import React, { useState } from "react";
import DeathRiskEnergy from "./deathriskenergy";
import DeathRiskSubject from "./deathrisksubject";
import Image from "next/image";
import SunAnimation from "../../common/SunAnimation";
import SameHeightDiv from "../../common/SameHeightDiv";
import TooltipInitialise from "../../common/TooltipInitialise";

function DeathRiskStep1Main({ setCount }) {
  const className = "death-risk";
  const [checked, setChecked] = useState(false);
  const [extendedForm, setExtendedForm] = useState(0);
  const [showMeev, setShowMeev] = useState(false);
  const [showIntoxi, setShowIntoxi] = useState(false);
  const handleNextStep = () => {
    setCount(1);
  };
  const [rangeValue, setRangeValue] = useState(35);
  const [rangeValue2, setRangeValue2] = useState(0);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleRangeChange2 = (e) => {
    setRangeValue2(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  const handleInputChange2 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue2(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <SameHeightDiv dependency={extendedForm} />
      <section className="cybersecurity-wrp">
        <SunAnimation className={className} />
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
                          src="/images/lantern.png"
                        />
                        Overlijdensrisico
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
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Select"
                              >
                                <option selected>Glasverzekering </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
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
                          <div className="row">
                            <div className="col-12  text-nowrap">
                              <table className="table table-borderless top-gender-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <label>Geslacht</label>
                                    </td>
                                    <td>
                                      <div className="radio-icon top-man">
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
                                      <div className="radio-icon ">
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
                              <label className="form-label form-control">
                                Soort overlijdensrisicoverzekering
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
                          <div className="row">
                            <div className="col radiobx">
                              <div className="row">
                                <div className="col-lg-6 pe-sm-0">
                                  <input type="radio" name="test" id="ln1" />
                                  <label htmlFor="ln1" className="tooltip-container">
                                    <Image
                                      width={180}
                                      height={180}
                                      alt="aa"
                                      src="/images/house-4.png"
                                      className="img-fluid"
                                    />
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Hypotheek"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <span className="checkbox-label">
                                      Hypotheek
                                    </span>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Hypotheek</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-6 ps-sm-0">
                                  <input type="radio" name="test" id="ln2" />
                                  <label htmlFor="ln2" className="tooltip-container">
                                    <Image
                                      width={180}
                                      height={180}
                                      alt="aa"
                                      src="/images/family-tree.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Nabestaande
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Nabestaande"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Nabestaande</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <label className="form-label labeltitle">
                                Totaal Verzekerd bedrag
                              </label>
                            </div>
                            <div className="col-12">
                              <input
                                type="number"
                                className="form-control "
                                id="numberInput1"
                                min={35}
                                max={250}
                                value={rangeValue}
                                onChange={handleInputChange}
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
                                  data-bs-toggle="modal"
                                  data-bs-target="#glassmain"
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
                                min={35}
                                max={250}
                                value={rangeValue}
                                onChange={handleRangeChange}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€35.000</span>
                                  <span>€250.000</span>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <label className="form-label form-control">
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
                          </div>
                          {showMeev && (
                            <>
                              <div className="row">
                                <div className="col-12 text-nowrap">
                                  <table className="table table-borderless bottom-gender-table">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <label>Wie?</label>
                                        </td>
                                        <td>
                                          <div className="radio-icon position-partner rd-df-icon text-nowrap">
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
                                          <div className="radio-icon position-kind rd-df-icon text-nowrap">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              id="Kind"
                                              name="geslacht"
                                            />
                                            <label htmlFor="Kind">
                                              Kind{" "}
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
                                          <div className="radio-icon rd-df-icon positon-man text-nowrap">
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
                                          <div className="radio-icon position-women rd-df-icon text-nowrap">
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
                                      aria-label="Content Goes Here"
                                      data-bs-original-title="Content Goes Here"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input
                                    type="text"
                                    id
                                    name
                                    className="form-control"
                                    placeholder="Glasverzekering"
                                  />
                                </div>
                                <div className="col-lg-6">
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
                            </>
                          )}
                          {extendedForm == 0 && (
                            <>
                              <div className="row mt-4">
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
                      <a className="cyberprivacylink">
                        <i className="fas fa-2x fa-shield-alt" />
                        <span>Privacy</span>
                      </a>
                    )}
                  </div>
                  {extendedForm == 1 && (
                    <div className="col-lg-6 cyberbxleft cyberbxright py-3">
                      <TooltipInitialise/>
                      <div className="row">
                        <div className="col-10">
                          <div className="form-sec">
                            <div className="row">
                              <div className="col-lg-12">
                                <label className="form-label labeltitle">
                                  Verzekeringsvorm
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
                            <div className="row">
                              <div className="col radiobx">
                                <div className="row">
                                  <div className="col-lg-4 pe-md-0">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="ge1"
                                      onChange={(e) =>
                                        setChecked(e.target.value)
                                      }
                                      value={1}
                                    />
                                    <label htmlFor="ge1" className="tooltip-container">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/constant.jpg"
                                        className="img-fluid"
                                      />
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Gelijkblijvend"
                                        className="info-in-risk hide-info-desktop"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                      <span className="checkbox-label equal-height">
                                        Gelijkblijvend
                                      </span>
                                      <div className="d-flex justify-content-center">
                                        <p className="tooltip-text">Gelijkblijvend</p>
                                      </div>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 p-md-0">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="ge2"
                                      value={2}
                                      onChange={(e) =>
                                        setChecked(e.target.value)
                                      }
                                    />
                                    <label htmlFor="ge2" className="tooltip-container">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/linear-decending.jpg"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label equal-height">
                                        Lineair dalend
                                      </span>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Lineair dalend"
                                        className="info-in-risk hide-info-desktop"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                      <div className="d-flex justify-content-center">
                                        <p className="tooltip-text">Lineair dalend</p>
                                      </div>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 ps-md-0">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="ge3"
                                      onChange={(e) =>
                                        setChecked(e.target.value)
                                      }
                                      value={3}
                                    />
                                    <label htmlFor="ge3" className="tooltip-container">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/annutair.jpg"
                                        className="img-fluid"
                                      />
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Annuïtair dalend"
                                        className="info-in-risk hide-info-desktop"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                      <span className="checkbox-label equal-height">
                                        Annuïtair dalend
                                      </span>
                                      <div className="d-flex justify-content-center">
                                        <p className="tooltip-text">Annuïtair dalend</p>
                                      </div>
                                    </label>
                                    {checked == 3 && (
                                      <div className="row">
                                        <div className="col">
                                          <label className="form-label p-0 labeltitle">
                                            Rente
                                          </label>
                                        </div>
                                        <div className="col">
                                          <input
                                            style={{ padding: "4px 2px" }}
                                            type="number"
                                            className="form-control annuity-declining-qty mb-0"
                                            id="numberInput1"
                                            min={0}
                                            max={10}
                                            value={rangeValue2}
                                            onChange={handleInputChange2}
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
                                        <div className="col-12">
                                          <input
                                            type="range"
                                            className="form-range"
                                            id="customRange1"
                                            min={0}
                                            max={10}
                                            value={rangeValue2}
                                            onChange={handleRangeChange2}
                                          />

                                          <div className="cus-num">
                                            <span>0%</span>
                                            <span>10%</span>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <label className="form-label form-control">
                                  Intoxicaties
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
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={showIntoxi}
                                    onChange={() => setShowIntoxi(!showIntoxi)}
                                    style={{ border: "2px solid #68d7be" }}
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
                            </div>
                            {showIntoxi && (
                              <>
                                <div className="row">
                                  <div className="col-lg-3">
                                    <label>Wat?</label>
                                  </div>
                                  <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      id="Partner"
                                      name="geslacht"
                                    />
                                    <label htmlFor="Partner">
                                      Roken{" "}
                                      <i className="fal fa-smoking cl-sky"></i>
                                    </label>
                                  </div>
                                  <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      id="Kind"
                                      name="geslacht"
                                    />
                                    <label htmlFor="Kind">
                                      Alcohol{" "}
                                      <i className="fas fa-wine-bottle cl-orange"></i>
                                    </label>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-3">
                                    <label>Gestopt?</label>
                                  </div>
                                  <div className="col-lg-9">
                                    <select className="form-select">
                                      <option>Hoelang al of van plan?</option>
                                      <option>Hoelang al of van plan? 1</option>
                                      <option>Hoelang al of van plan? 2</option>
                                      <option>Hoelang al of van plan? 3</option>
                                      <option>Hoelang al of van plan? 4</option>
                                    </select>
                                  </div>
                                </div>
                              </>
                            )}
                            <div className="row">
                              <div className="col-lg-12">
                                {showIntoxi && (
                                  <input
                                    type="text"
                                    className="form-control d-none"
                                    id="input1"
                                    placeholder=""
                                  />
                                )}
                                <label className="form-label labeltitle">
                                  Heb/had je een chronische ziekten?
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
                            <div className="row">
                              <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="Partner"
                                  name="geslacht"
                                />
                                <label htmlFor="Partner">
                                  Ja{" "}
                                  <i className="far fa-check-circle cl-sky"></i>
                                </label>
                              </div>
                              <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="Kind"
                                  name="geslacht"
                                />
                                <label htmlFor="Kind">
                                  Nee{" "}
                                  <i className="far fa-times-circle cl-red"></i>
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <input
                                  type="text"
                                  className="form-control "
                                  id="input1"
                                  placeholder="Zo ja, welke chronische ziekten?"
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
                              <div className="col">
                                <select
                                  className="form-select"
                                  aria-label="Select"
                                >
                                  <option selected>
                                    Type of kies welke aandoening
                                  </option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
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
                                  <a href="javascript:void(0);">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/viewpop.png"
                                    />
                                    <span>Overzicht?</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row radiobx mb-3">
                              <div className="col-lg-4 pe-md-0">
                                <input type="radio" name="test" id="ws1" />
                                <label htmlFor="ws1" className="tooltip-container">
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
                              <div className="col-lg-4 p-md-0">
                                <input type="radio" name="test" id="ws2" />
                                <label htmlFor="ws2" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/vehicle-road.jpg"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Voertuigen
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Voertuigen"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Voertuigen</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-4 ps-md-0">
                                <input type="radio" name="test" id="ws3" />
                                <label htmlFor="ws3" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/warning.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label pt-2">
                                    Ongevallen
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Ongevallen"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Ongevallen</p>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-12 text-center">
                              <a
                                href="#"
                                onClick={() => setCount(1)}
                                className={"btn-one"}
                              >
                                Bekijk jouw voordeel
                              </a>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="privacy-ab mb-2">
                        <a href="javascript:void(0);">
                          <i className="fas fa-2x fa-shield-alt" />
                          <span>Privacy</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DeathRiskEnergy />
      <DeathRiskSubject />

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
              <h1 className="modal-title fs-5" id="liabilstepLabel">
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Leningen?"
                    />
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

                <div className="col-lg-12">
                  <div className="glass-form-input">
                    <div className="row">
                      <div className="col">
                        <label className="form-label labeltitle">
                          Woning(en)
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
                            <span>0</span>
                            <span>1.500.000</span>
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
                        <label className="form-label labeltitle">Auto(s)</label>
                      </div>
                      <div className="col">
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
                  <div className="glass-form-input">
                    <div className="row">
                      <div className="col">
                        <label className="form-label labeltitle">
                          Overige leningen
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
                      <div className="col-lg-8" style={{ textAlign: "right" }}>
                        <span>Totaal verzekerd bedrag:€ 10.000</span>
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
    </>
  );
}

export default DeathRiskStep1Main;
