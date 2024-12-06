import Image from "next/image";
import React, { useState } from "react";

const LoansForm = ({
  loanSecondStep,
  setLoanSecondStep,
  setShowStepper,
  showStepper,
  setCount,
  setRightTab,
}) => {
  const [showMeev, setShowMeev] = useState(false);
  const handleNextLoanStep = () => {
    setShowStepper(true);
    setCount(2);
  };
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(10);
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
    setRangeValue3(value);
  };

  // ----------range slider logic ends--------------------
  return (
    <>
      <div className="col-lg-6 eventbxleft loans-radiopersonal">
        <div className="titlecybersecurity">
          <h2>
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/loan2.png"
              className="img-fluid"
            />
            Leningen
          </h2>
        </div>
        <div>
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
                    <option selected>Huidige bank</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 position-relative">
                  <select className="form-select" aria-label="Select">
                    <option selected>Voorkeur bank</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div className="infcalcubx frm-info-absolute">
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
                  <table className="table table-borderless text-nowrap top-gender-table">
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
                              name="man1"
                            />
                            <label htmlFor="man">
                              Man <i className="fas fa-2x fa-mars icon" />
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="radio-icon top-vrouw">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="vrouw"
                              name="man1"
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
                <div className="col-12 position-relative">
                  <input type="date" id name className="form-control" />
                  <div className="infcalcubx frm-info-absolute">
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
                <div className="col-12 position-relative">
                  <select className="form-select" aria-label="Select">
                    <option disabled selected>
                      Bestedingsdoel
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div className="infcalcubx frm-info-absolute">
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
                <div className="col radiobx">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <button className="btn-click"

                        onClick={() => setRightTab(1)}
                      >
                        <input type="radio" name="test" id="cb1" />
                        <label htmlFor="cb1" className="tooltip-container">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/for-sale.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label text-dark">
                            Verloving
                          </span>
                          <div className="d-flex justify-content-center">
                            <p className="tooltip-text">Verloving</p>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Verloving"
                            className="info-in-risk hide-info-desktop"
                          >
                            <i className="fas fa-2x fa-info-circle" />
                          </a>
                        </label>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <button className="btn-click"

                        onClick={() => setRightTab(2)}
                      >
                        <input type="radio" name="test" id="cb2" />
                        <label htmlFor="cb2" className="tooltip-container">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/tourist.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label text-dark">
                            Vervoersmiddel
                          </span>
                          <div className="d-flex justify-content-center">
                            <p className="tooltip-text">Vervoersmiddel</p>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Vervoersmiddel"
                            className="info-in-risk hide-info-desktop"
                          >
                            <i className="fas fa-2x fa-info-circle" />
                          </a>
                        </label>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <button
                        className="btn-click"
                        onClick={() => setRightTab(2)}
                      >
                        <input type="radio" name="test" id="cb3" />
                        <label htmlFor="cb3" className="tooltip-container">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/document.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label text-dark">
                            Vebouwing
                          </span>
                          <div className="d-flex justify-content-center">
                            <p className="tooltip-text">Vebouwing</p>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Vebouwing"
                            className="info-in-risk hide-info-desktop"
                          >
                            <i className="fas fa-2x fa-info-circle" />
                          </a>
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-4 col-sm-8 col-12">
                  <label className="form-label labeltitle">
                    Maximaal lenen
                  </label>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-12 position-relative">
                  <input
                    type="number"
                    className="form-control mb-0"
                    id="numberInput5"
                    min={1}
                    max={10000}
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
                      data-bs-target="#loan-calculator"
                    >
                      <i className="fas fa-calculator" />
                      <span>Hulp nodig?</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="loan-calculator"
                tabIndex={-1}
                aria-labelledby="loan-calculatorlabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="row w-100 justify-content-center align-items-center">
                        <div className="col text-center">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Selecteer of vul in
                          </h5>
                        </div>
                        <div
                          href="javascript:void(0);"
                          className="calculatorwrp col-auto"
                        >
                          <i className="fas fa-calculator" />
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
                    <div className="modal-body addmorepopup">
                      <div className="row">
                        <div className="col-10">
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label labeltitle">
                                    Netto inkomen
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
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span></span>
                                  <span>€10000</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label labeltitle">
                                    Huur/hyptheek
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
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€0 p/m</span>
                                  <span>€ 8.500 p/m</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label labeltitle">
                                    Huur/koop contract
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
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>0 maanden</span>
                                  <span>360 maanden</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label labeltitle">
                                    Overige leningen
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
                                  <div className="infcalcubx frm-infoNextra-absolute">
                                    <ul className="list-unstyled">
                                      <li className="bg-transparent">
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
                                      <li className="bg-transparent">
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          aria-label="Content Goes Here"
                                          data-bs-original-title="Content Goes Here"
                                        >
                                          <i className="fas fa-2x fa-plus-circle" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€0 p/m</span>
                                  <span>€5.000 p/m</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label labeltitle">
                                    Aflossing lening
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
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>0 maanden</span>
                                  <span>360 maanden</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label labeltitle">
                                    Overige lasten
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
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange1"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€0 p/m</span>
                                  <span>€ 5000 p/m</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="popupbtn">
                        <p>
                          Maximaal lenen: <span>€ 9.000 per jaar</span>
                        </p>
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

              <div className="row">
                <div className="col-12">
                  <input
                    type="range"
                    className="form-range mb-0"
                    id="customRange5"
                    min={1}
                    max={10000}
                    defaultValue={1}
                  />

                  <label htmlFor="customRange1" className="form-label">
                    <div className="cus-num">
                      <span>€5.000</span>
                      <span>€2.000.000</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-8">
                      <label className="form-label labeltitle">
                        Verwachte lening
                      </label>
                    </div>
                    <div className="col-4 position-relative">
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
                          title="Content Goes Here"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="range"
                    className="form-range mb-0"
                    id="customRange5"
                    min={1}
                    max={10000}
                    defaultValue={1}
                  />
                  <label htmlFor="customRange1" className="form-label">
                    <div className="cus-num">
                      <span>€5.000</span>
                      <span>€2.000.000</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12 text-lg-center position-relative">
                  <label className="form-label labeltitle">Samen lenen?</label>
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
                    <input
                      onChange={() => setShowMeev(!showMeev)}
                      checked={showMeev}
                      className="form-check-input mb-0"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-dark fw-medium  d-block"
                      htmlFor="flexCheckDefault"
                    >
                      Toevoegen
                    </label>
                  </div>
                </div>
              </div>
              {showMeev && (
                <>
                  <div className="row">
                    <div className="col-lg-12 ">
                      <table className="table table-borderless text-nowrap bottom-gender-table">
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
                                  name="pr1"
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
                                  name="pr1"
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
                                  name="man2"
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
                                  name="man2"
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
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 position-relative">
                          <input type="date" id name className="form-control" />
                          <div className="infcalcubx frm-info-absolute">
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
                  <div className="row">
                    <div className="col-lg-6">
                      <select className="form-select" aria-label="Select">
                        <option selected>Huidige bank</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div className="col-lg-6 position-relative">
                      <select className="form-select" aria-label="Select">
                        <option selected>Voorkeur bank</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <div className="infcalcubx frm-info-absolute">
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
              {!loanSecondStep && (
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <div className="rangebtn">
                      <button
                        className="seenowbtn"
                        onClick={() => setLoanSecondStep(!loanSecondStep)}
                      >
                        Start Vergelijking
                      </button>
                      {/* <a onClick={handleNextLoanStep}>
                        Toch snel vergelijken?
                      </a> */}
                    </div>
                    <a className="cyberprivacylink">
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
    </>
  );
};

export default LoansForm;
