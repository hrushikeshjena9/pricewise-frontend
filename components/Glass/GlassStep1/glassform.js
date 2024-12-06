import Image from "next/image";
import React, { useState } from "react";
import SunAnimation from "../../common/SunAnimation";
import SameHeightDiv from "../../common/SameHeightDiv";
import TooltipInitialise from "../../common/TooltipInitialise";

function Glassform({ setCount }) {
  const className = "glass-insuran";
  const [showCoInsure, setShowCoInsure] = useState(false);
  const [extendedForm, setExtendedForm] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);
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
      <SameHeightDiv dependency={extendedForm} />
      <section className="cybersecurity-wrp">
        <SunAnimation className={className} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className="row justify-content-center">
                  <div className="col-lg-6 cyberbxleft">
                    <div>
                      <div className="titlecybersecurity">
                        <h2>
                          {" "}
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/window.png"
                          />
                          Glasverzekering
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
                              <div className="col-lg-6 col-md-6">
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
                                    aria-label="Content Goes Here"
                                    data-bs-original-title="Content Goes Here"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <table className="table table-borderless top-gender-table ">
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
                                        <div className="radio-icon top-vrouw">
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
                            <div className="row mb-3">
                              <div className="col">
                                <label className="form-control">Woning</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col radiobx">
                                <div className="row">
                                  <div className="col-lg-6 col-6">
                                    <input type="radio" name="test" id="cb1" />
                                    <label htmlFor="cb1" className="tooltip-container">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/home-control.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Gehuurd
                                      </span>
                                      <div className="d-flex justify-content-center">
                                        <p className="tooltip-text">Gehuurd</p>
                                      </div>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Gehuurd"
                                        className="info-in-risk hide-info-desktop"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                    </label>
                                  </div>
                                  <div className="col-lg-6 col-6">
                                    <input type="radio" name="test" id="cb2" />
                                    <label htmlFor="cb2" className="tooltip-container">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/home-insurance.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Gekocht
                                      </span>
                                      <div className="d-flex justify-content-center">
                                        <p className="tooltip-text">Gekocht</p>
                                      </div>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Gekocht"
                                        className="info-in-risk hide-info-desktop"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 mb-2 position-relative">
                                <label className="form-control">
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
                                    className="form-check-input mb-0"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    onClick={() =>
                                      setShowCoInsure(!showCoInsure)
                                    }
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
                            {showCoInsure && (
                              <>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <table className="table table-borderless text-nowrap bottom-gender-table ">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <label>Wie?</label>dfsdf
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
                              <div className="row mt-4">
                                <div className="col-lg-12">
                                  <div className="rangebtn">
                                    {/* <button className="seenowbtn" onClick={() => setCount(1)}>Bekijk jouw voordeel</button> */}
                                    <button
                                      className="seenowbtn"
                                      onClick={() => setExtendedForm(1)}
                                    >
                                      Start vergelijken
                                    </button>
                                    {/* <a className='fw-medium text-dark mt-0' onClick={() => setExtendedForm(1)}>Toch snel vergelijken?</a> */}
                                  </div>
                                  {/* <a className="cyberprivacylink"><i className="fas fa-2x fa-shield-alt" /><span>Privacy</span></a> */}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {extendedForm == 1 && (
                    <div className="col-lg-6 cyberbxleft">
                      <TooltipInitialise/>
                      <div className="mt-4 py-3">
                        <div className="row">
                          <div className="col-9">
                            <div className="form-sec">
                              <div className="row">
                                <div className="col">
                                  <label className="form-label labeltitle">
                                    Aantal ramen
                                  </label>
                                </div>
                                <div className="col">
                                  <input
                                    type="number"
                                    className="form-control "
                                    id="numberInput1"
                                    min={1}
                                    max={2000}
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
                                    min={0}
                                    max={100}
                                    value={rangeValue}
                                    onChange={handleRangeChange}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>0</span>
                                      <span>100</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <label className="form-label labeltitle">
                                    Afmeting ramen
                                  </label>
                                </div>
                                <div className="col">
                                  <input
                                    type="number"
                                    className="form-control "
                                    id="numberInput1"
                                    min={1}
                                    max={300}
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
                                    min={0}
                                    max={100}
                                    value={rangeValue2}
                                    onChange={handleRangeChange2}
                                  />
                                  <label
                                    htmlFor="customRange2"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>
                                        0m<sup>2</sup>
                                      </span>
                                      <span>
                                        100m<sup>2</sup>
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <label className="form-label labeltitle">
                                    Herbouwwaarde
                                  </label>
                                </div>
                                <div className="col">
                                  <input
                                    type="number"
                                    className="form-control "
                                    id="numberInput1"
                                    min={35}
                                    max={250}
                                    value={rangeValue3}
                                    onChange={handleInputChange3}
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
                                    min={1}
                                    max={10000000}
                                    value={rangeValue3}
                                    onChange={handleRangeChange3}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>€1</span>
                                      <span>€10.000.000</span>
                                    </div>
                                  </label>
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
                                      aria-label="Content Goes Here"
                                      data-bs-original-title="Content Goes Here"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                  </div>
                                  <div className="frm-toevoe-position text-center">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#glasscomparestep"
                                    >
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
                              <div className="row radiobx mb-3 px-3">
                                <div className="col-lg-4 col-6 p-lg-0">
                                  <input type="radio" name="test" id="ws1" />
                                  <label htmlFor="ws1" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/living.jpg"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label equal-height">
                                      Woonverzekering
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Woonverzekering"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Woonverzekering</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-6 p-lg-0">
                                  <input type="radio" name="test" id="ws2" />
                                  <label htmlFor="ws2" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
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
                                <div className="col-lg-4 p-lg-0">
                                  <input type="radio" name="test" id="ws3" />
                                  <label htmlFor="ws3" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
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
                                {/* <a className='fw-medium text-dark minimize-form' onClick={() => setExtendedForm(0)}>Uitgebreid Vergelijken</a> */}
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="row w-100 justify-content-center align-items-center">
                <div className="col text-center">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Selecteer of vul in
                  </h5>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>
            </div>
            <div className="modal-body glass-box-modal">
              <div className="row">
                <div className="col-lg-12">
                  <div className="glass-form-input">
                    <select className="form-select" aria-label="Select">
                      <option selected>Glassoorten</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
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
                        <input type="radio" name="test" id="gls1" />
                        <label htmlFor="gls1">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/window-4.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">Enkel glas</span>
                        </label>
                      </div>
                      <div className="col-lg-4">
                        <input type="radio" name="test" id="gls2" />
                        <label htmlFor="gls2">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/window-2.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">Dubbelglas</span>
                        </label>
                      </div>
                      <div className="col-lg-4">
                        <input type="radio" name="test" id="gls3" />
                        <label htmlFor="gls3">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/window-3.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">Triple glas</span>
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
                      <div className="col-lg-8" style={{ textAlign: "right" }}>
                        <span>Herbouwwaarde: € 304.096</span>
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

      <div
        className="modal fade"
        id="glasscomparestep"
        tabIndex={-1}
        aria-labelledby="glasscomparestepLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="glasscomparestepLabel">
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
                      <div className="col-4">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/icon1.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-4 text-center">
                        <span>Woonverzekering</span>
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
                          src="/images/icon2.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-4 text-center">
                        <span>Rechtsbijstand</span>
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
                          src="/images/icon3.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-4 text-center">
                        <span>Leningen</span>
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
                    <div className="infbx infx-com">
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
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/antivirus.png"
                          className="img-fluid"
                        />
                        <span>Risico Scan</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <button className="btnps">Opslaan</button>
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
    </>
  );
}

export default Glassform;
