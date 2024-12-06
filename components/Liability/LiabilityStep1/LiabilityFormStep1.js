import Image from "next/image";
import React, { useState } from "react";
import LiabilityDealsStep1 from "./LiabilityDealsStep1";
import LiabilityFaqStep1 from "./LiabilityFaqStep1";
import SunAnimation from "../../common/SunAnimation";
import TooltipInitialise from "../../common/TooltipInitialise";

const LiabilityFormStep1 = ({ 
  setShowStepper,
  showStepper,
  setCount,
}) => {
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  const className = "house-hold";
  const [extendedForm, setExtendedForm] = useState(0);
  const [showCoInsure, setShowCoInsure] = useState(false)
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(1);
  const [rangeValue3, setRangeValue3] = useState(35);
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
  return (
    <>
      <section className="eventwrp">
        <SunAnimation className={className} />
        <TooltipInitialise/>
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
                        src="/images/family-3.png"
                      />
                      Aansprakelijkheid
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-9 col-9">
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
                      <div className="row">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Aansprakelijkheid</option>
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
                            <div className="list-unstyled list-style-flex">
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
                      </div>
                      <div className="row">
                        <div className='col-12  text-nowrap'>
                          <table className='table table-borderless top-gender-table'>
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
                                      Man <i className="fas fa-2x fa-mars icon" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="radio-icon">
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
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col position-relative">
                          <input type="date" className="form-control" />
                          <div className="infcalcubx info-pos">
                            <a href="javascript:void(0);"
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
                        <div className="col position-relative">
                          <div className="br-input">
                          Woning
                          </div>
                          <div className="infcalcubx info-pos">
                            <div className="list-unstyled list-style-flex">
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
                      </div>
                      <div className="row">
                        <div className="col radiobx">
                          <div className="row justify-content-center">
                            <div className="col-lg-5 col-5 pe-0">
                              <input type="radio" name="test" id="cb1" />
                              <label htmlFor="cb1" className="tooltip-container">
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
                                <span className="checkbox-label">Gehuurd</span>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Gehuurd</p>
                                </div>

                              </label>
                            </div>
                            <div className="col-lg-5 ps-0 col-5">
                              <input type="radio" name="test" id="cb2" />
                              <label htmlFor="cb2" className="tooltip-container">
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/house-3.png"
                                  className="img-fluid"
                                />
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Gekocht"
                                  className="info-in-risk hide-info-desktop"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <span className="checkbox-label">Gekocht</span>
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
                          <div className="br-input">
                          Meeverzekeren
                          </div>
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
                            <div className="frm-toevoe-position text-center">
                            <input onClick={() => setShowCoInsure(!showCoInsure)} 
                              className="form-check-input mb-0"
                              type="checkbox"
                              id="flexCheckDefault"
                            />
                            <div className="form-check-label d-block fw-bold ">
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
                      {showCoInsure &&
                      <>
                      <div className="row">
                        <div className="col-lg-12 text-nowrap">
                          <table className='table table-borderless bottom-gender-table '>
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
                                      Partner <i className="fal fa-handshake-alt icon" />
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
                                      Kind <i className="fad fa-male icon" />
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
                                      Man <i className="fas fa-2x fa-mars icon" />
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
                                      Vrouw <i className="fas fa-2x fa-venus icon" />
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col position-relative">
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
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            id
                            name
                            className="form-control"
                            placeholder="Aansprakelijkheid"
                          />
                        </div>
                        <div className="col-lg-6 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option selected>Verzekeraar</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                          <div className="infcalcubx info-pos">
                            <a href="javascript:void(0);"
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
                      </>
                      }
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
                          <a className="cyberprivacylink">
                            <i className="fas fa-2x fa-shield-alt" />
                            <span>Privacy</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {extendedForm == 1 && (
                  <div className="pt-4 pe-4 col-lg-6 eventbxright">
                    <div className="row">
                      <div className="col-9">
                        <div className="row">
                          <div className="col position-relative">
                            <div className="br-input">Soort dekking</div>
                            <div className="infcalcubx info-pos">
                              <div className="list-unstyled list-style-flex">
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
                        </div>
                        <div className="row">
                          <div className="col radiobx">
                            <div className="row justify-content-center">
                              <div className="col-lg-6 pe-0 col-5">
                                <input type="radio" name="test" id="shd1" />
                                <label htmlFor="shd1" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/shield-4.png"
                                    className="img-fluid"
                                  />
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Basis</p>
                                  </div>
                                  <span className="checkbox-label">
                                    Basis
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Basis"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                              <div className="col-lg-6 ps-0 col-5">
                                <input type="radio" name="test" id="shd2" />
                                <label htmlFor="shd2" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/shield-3.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    All risk
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Begeleiding</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="All risk"
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
                          <div className="col col-12 col-sm-8">
                            <label className="form-label labeltitle">
                              Verzekerd bedrag
                            </label>
                          </div>
                          <div className="col-sm-4 col-12 position-relative">
                            <input
                              type="number"
                              className="form-control "
                              id="numberInput1"
                              min={1}
                              max={2000}
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
                            <a href="javascript:void(0);" role="button" className="calculatorwrp">
                                  <i className="fas fa-calculator  green-cyan"></i>
                                  <span className=" green-cyan">Hulp nodig?</span>
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
                              value={rangeValue}
                              onChange={handleRangeChange}
                            />
                            <label
                              htmlFor="customRange1"
                              className="form-label"
                            >
                              <div className="cus-num">
                                <span>€1</span>
                                <span>€2.000.00</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12 col-sm-8">
                            <label className="form-label labeltitle">
                              Eigen risico
                            </label>
                          </div>
                          <div className="col-sm-4 col-12 position-relative">
                            <input
                              type="number"
                              className="form-control "
                              id="numberInput1"
                              min={1}
                              max={300}
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
                              id="customRange2"
                              min={1}
                              max={300}
                              value={rangeValue2}
                              onChange={handleRangeChange2}
                            />
                            <label
                              htmlFor="customRange2"
                              className="form-label"
                            >
                              <div className="cus-num">
                                <span>€1</span>
                                <span>€300</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col col-12 col-sm-8">
                            <label className="form-label labeltitle">
                              Diefstal
                            </label>
                          </div>
                          <div className="col-sm-4 col-12  position-relative">
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
                              min={35}
                              max={250}
                              value={rangeValue3}
                              onChange={handleRangeChange3}
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
                          <div className="col position-relative">
                            <div className="br-input">
                            Aanbevolen verzekeringen
                            </div>
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
                          <div className="col-lg-4">
                            <input type="radio" name="test" id="ws1" />
                            <label htmlFor="ws1" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/security-2.png"
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
                          <div className="col-lg-4">
                            <input type="radio" name="test" id="ws2" />
                            <label htmlFor="ws2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/shield.png"
                                className="img-fluid"
                              />
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Opstal"
                                className="info-in-risk hide-info-desktop"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <span className="checkbox-label">Opstal</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Opstal</p>
                              </div>
                            </label>
                          </div>
                          <div className="col-lg-4">
                            <input type="radio" name="test" id="ws3" />
                            <label htmlFor="ws3"  className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/armchair.png"
                                className="img-fluid"
                              />
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Inboedel"
                                className="info-in-risk hide-info-desktop"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <span className="checkbox-label">Inboedel</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Inboedel</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <a
                            href="#"
                            onClick={handleSecondStep}
                            className={"btn-one seenowbtn"}
                          >
                            Bekijk jouw voordeel
                          </a>
                          <br />
                          {/* <a
                            className="fw-bold text-dark minimize-form"
                            onClick={() => setExtendedForm(0)}
                          >
                            Uitgebreid Vergelijken
                          </a> */}
                        </div>
                        <div className="privacy-ab">
                          <a href="javascript:void(0);">
                            <i className="fas fa-2x fa-shield-alt" />
                            <span>Privacy</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LiabilityDealsStep1 />
      <LiabilityFaqStep1 />

    

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
            <div className="modal-body addmorepopup">
              <ul className="list-unstyled checkbox-wrapper-16">
                <li>
                  <div className="row">
                    <div className="col-4">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                        className="info-in-risk"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/security-2.png"
                        className="img-fluid modal-lf-img"
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
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                        className="info-in-risk"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/shield.png"
                        className="img-fluid modal-lf-img"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Opstalverzekering</span>
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
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                        className="info-in-risk"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/family-3.png"
                        className="img-fluid modal-lf-img"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Aansprakelijkheid</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --modal ends-- */}
    </>
  );
};

export default LiabilityFormStep1;
