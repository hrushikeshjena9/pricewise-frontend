import Image from "next/image";
import React, { useState } from "react";

const EventsFormTopRight = ({
  showCompactContent,
  setShowCompactContent,
  showExtendedContent,
  setShowExtendedContent,
  setCount,
}) => {
  const [showCatering, setShowCatering] = useState(false);
  const [showDecoration, setShowDecoration] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const handleCompactLinkClick = () => {
    setShowCompactContent(true);
    setShowExtendedContent(false);
  };
  const [rangeValue2, setRangeValue2] = useState(10);
  const [rangeValue3, setRangeValue3] = useState(1);
  const [rangeValue4, setRangeValue4] = useState(1);
  const [rangeValue5, setRangeValue5] = useState(1);
  const [rangeValue6, setRangeValue6] = useState(1);
  // ----------range slider logic starts------------------
  const handleRangeChange2 = (e) => {
    setRangeValue2(parseInt(e.target.value));
  };
  const handleRangeChange3 = (e) => {
    setRangeValue3(parseInt(e.target.value));
  };
  const handleRangeChange4 = (e) => {
    setRangeValue4(parseInt(e.target.value));
  };
  const handleRangeChange5 = (e) => {
    setRangeValue5(parseInt(e.target.value));
  };
  const handleRangeChange6 = (e) => {
    setRangeValue6(parseInt(e.target.value));
  };
  const handleInputChange2 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  const handleInputChange3 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  const handleInputChange4 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue4(value);
  };
  const handleInputChange5 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue5(value);
  };
  const handleInputChange6 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue6(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <div
        className={`pt-4 pe-4 col-lg-6 eventbxright ${showExtendedContent ? "d-block" : "d-none"
          }`}
      >
        <div
          className="row"
          style={{ marginBottom: showCatering ? "0" : "14px" }}
        >
          <div className="col-lg-7 col-7">
            <div className="row">
              <div className="col-12">
                <label className="form-label labeltitle">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/catering-2.png"
                  />
                  Catering
                </label>
              </div>
              {showCatering && (
                <>
                  <div className="col-md-8 col-12">
                    <label className="form-label labeltitle">Budget</label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="numberInput6"
                      min={1}
                      max={3000}
                      value={rangeValue2}
                      onChange={handleInputChange2}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="range"
                      className="form-range"
                      id="customRange6"
                      min={1}
                      max={3000}
                      value={rangeValue2}
                      onChange={handleRangeChange2}
                    />
                    <label htmlFor="customRange6" className="form-label">
                      <div className="cus-num">
                        <span>€1</span>
                        <span>€300.000</span>
                      </div>
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-5 col-5">
            <div className="infcalcubx">
              <ul className="list-unstyled list-flex">
                <li>
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Content Goes Here"
                  >
                    <i className="fas fa-2x fa-info-circle" />
                  </a>
                </li>
                <li>
                  <a
                    data-bs-toggle="modal"
                    href="#quantityModalToggle"
                    role="button"
                    className="calculatorwrp"
                  >
                    <i className="fas fa-calculator" />
                    <span>Hulp nodig?</span>
                  </a>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                      onClick={() => setShowCatering(!showCatering)}
                    />
                    <label
                      className="form-check-label d-block"
                      htmlFor="flexCheckDefault"
                    >
                      Toevoegen
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Model Start */}
          <div
            className="modal quantityModal fade"
            id="quantityModalToggle"
            aria-hidden="true"
            aria-labelledby="quantityModalToggleLabel"
            tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
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
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <div className="selectquantity">
                        <div className="quantitybxtitle">
                          <ul>
                            <li>
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/catering-2.png"
                              />
                            </li>
                            <li>
                              <h2>Selecteer of vul in</h2>
                            </li>
                            <li>
                              <i className="fas fa-2x fa-calculator" />
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <ul className="subtitleqyt">
                              <li>
                                <Image
                                  width={50}
                                  height={50}
                                  alt="aa"
                                  src="/images/food-tray.png"
                                  className="img-fluid"
                                />
                              </li>
                              <li>
                                <h5>Gangen</h5>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 radiobx">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb11" />
                                <label htmlFor="cb11">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/bowl-4.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Voorgerecht
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb12" />
                                <label htmlFor="cb12">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/catering.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Hoofdgerecht
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb13" />
                                <label htmlFor="cb13">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/appetizer.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Dessert
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <ul className="subtitleqyt">
                              <li>
                                <Image
                                  width={50}
                                  height={50}
                                  alt="aa"
                                  src="/images/knife.png"
                                  className="img-fluid"
                                />
                              </li>
                              <li>
                                <h5>Gerechten</h5>
                              </li>
                            </ul>
                            <div className="infcalcubx frm-info-absolute">
                              <a href="javascript:void(0);">
                                <i className="fas fa-2x fa-plus-circle"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-12 radiobx">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb14" />
                                <label htmlFor="cb14">
                                  <a
                                    className="info-icon"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fas fa-2x fa-plus-circle green-cyan" />
                                  </a>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/bowl-4.png"
                                    className="img-fluid"
                                  />
                                </label>
                                <select
                                  className="form-select"
                                  id="voorgerecht"
                                >
                                  <option value disabled selected>
                                    voorgerecht
                                  </option>
                                  <option value="optie1">Optie 1</option>
                                  <option value="optie2">Optie 2</option>
                                  <option value="optie3">Optie 3</option>
                                  {/* Add more options as needed */}
                                </select>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb15" />
                                <label htmlFor="cb15">
                                  <a
                                    className="info-icon"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fas fa-2x fa-plus-circle green-cyan" />
                                  </a>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/catering.png"
                                    className="img-fluid"
                                  />
                                </label>
                                <select
                                  className="form-select"
                                  id="voorgerecht"
                                >
                                  <option value disabled selected>
                                    Hoofdgerecht
                                  </option>
                                  <option value="optie1">Optie 1</option>
                                  <option value="optie2">Optie 2</option>
                                  <option value="optie3">Optie 3</option>
                                  {/* Add more options as needed */}
                                </select>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb16" />
                                <label htmlFor="cb16">
                                  <a
                                    className="info-icon"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fas fa-2x fa-plus-circle green-cyan" />
                                  </a>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/appetizer.png"
                                    className="img-fluid"
                                  />
                                </label>
                                <select
                                  className="form-select"
                                  id="voorgerecht"
                                >
                                  <option value disabled selected>
                                    Dessert
                                  </option>
                                  <option value="optie1">Optie 1</option>
                                  <option value="optie2">Optie 2</option>
                                  <option value="optie3">Optie 3</option>
                                  {/* Add more options as needed */}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <ul className="subtitleqyt">
                              <li>
                                <Image
                                  width={35}
                                  height={35}
                                  alt="aa"
                                  src="/images/settings-3.png"
                                  className="img-fluid"
                                />
                              </li>
                              <li>
                                <h5>Service</h5>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 radiobx">
                            <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb17" />
                                <label htmlFor="cb17">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/waiter.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Tafelbediende
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cb18" />
                                <label htmlFor="cb18">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/wedding.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Lopendbuffet
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="popupbtn">
                            <p>
                              Catering budget: <span>€ 3.000</span>
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
                </div>
              </div>
            </div>
          </div>
          {/* Model End */}
        </div>
        <div
          className="row"
          style={{ marginBottom: showDecoration ? "10" : "14px" }}
        >
          <div className="col-lg-7 col-7">
            <div className="row">
              <div className="col-12">
                <label className="form-label labeltitle">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/wedding-arch-2.png"
                  />
                  Versiering/ Stylisten
                </label>
              </div>
              {showDecoration && (
                <>
                  <div className="col-md-8 col-12">
                    <label className="form-label labeltitle">Budget</label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="numberInput6"
                      min={1}
                      max={3000}
                      value={rangeValue3}
                      onChange={handleInputChange3}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="range"
                      className="form-range"
                      id="customRange6"
                      min={1}
                      max={3000}
                      value={rangeValue3}
                      onChange={handleRangeChange3}
                    />
                    <label htmlFor="customRange6" className="form-label">
                      <div className="cus-num">
                        <span>€1</span>
                        <span>€ 300.000</span>
                      </div>
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-5 col-5">
            <div className="infcalcubx brk-hu-to-in">
              <ul className="list-unstyled list-flex">
                <li>
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Content Goes Here"
                  >
                    <i className="fas fa-2x fa-info-circle" />
                  </a>
                </li>
                <li>
                  <a
                    data-bs-toggle="modal"
                    href="#decorationModalToggle"
                    role="button"
                    className="calculatorwrp"
                  >
                    <i className="fas fa-calculator" />
                    <span>Hulp nodig?</span>
                  </a>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      onClick={() => setShowDecoration(!showDecoration)}
                    />
                    <label
                      className="form-check-label d-block"
                      htmlFor="flexCheckDefault"
                    >
                      Toevoegen
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Model Start */}
          <div
            className="modal decorationModal fade"
            id="decorationModalToggle"
            aria-hidden="true"
            aria-labelledby="decorationModalToggleLabel"
            tabIndex={-1}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
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
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <div className="selectquantity">
                        <div className="quantitybxtitle">
                          <ul>
                            <li>
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/wedding-arch-2.png"
                              />
                            </li>
                            <li>
                              <h2>Selecteer of vul in</h2>
                            </li>
                            <li>
                              <i className="fas fa-2x fa-calculator" />
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <ul className="subtitleqyt">
                              <li>
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/balloons.png"
                                  className="img-fluid"
                                />
                              </li>
                              <li>
                                <h5>Decoraties</h5>
                              </li>
                            </ul>
                            <div className="infcalcubx frm-info-absolute">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html={true}
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                          <div className="col-12 radiobx">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <input type="checkbox" name="test" id="cbs11" />
                                <label htmlFor="cbs11">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/altar.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Bruidsbank
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="checkbox" name="test" id="cbs12" />
                                <label htmlFor="cbs12">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/dinner-table.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Tafeldecoratie
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="checkbox" name="test" id="cbs13" />
                                <label htmlFor="cbs13">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/balloons-2.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Zaalversiering
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <ul className="subtitleqyt">
                              <li>
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/manicure.png"
                                  className="img-fluid"
                                />
                              </li>
                              <li>
                                <h5>Stylisten</h5>
                              </li>
                            </ul>
                            <div className="infcalcubx frm-info-absolute">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html={true}
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                          <div className="col-12 radiobx">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cbs14" />
                                <label htmlFor="cbs14">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/comb.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Haarstylisten
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cbs15" />
                                <label htmlFor="cbs15">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/makeup.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Visagisten
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cbs16" />
                                <label htmlFor="cbs16">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/manicure.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Manicure
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <ul className="subtitleqyt">
                              <li>
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/settings-3.png"
                                  className="img-fluid"
                                />
                              </li>
                              <li>
                                <h5>Service</h5>
                              </li>
                            </ul>
                            <div className="infcalcubx frm-info-absolute">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html={true}
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                          <div className="col-12 radiobx">
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cbs17" />
                                <label htmlFor="cbs17">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/location.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Op locatie
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cbs18" />
                                <label htmlFor="cbs18">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/gps-2.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Bezoekadres
                                  </span>
                                </label>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <input type="radio" name="test" id="cbs19" />
                                <label htmlFor="cbs19">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/gift.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">
                                    Giftbox
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="popupbtn">
                            <p>
                              Decoraties/Stylisten budget <span>€1.000</span>
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
                </div>
              </div>
            </div>
          </div>
          {/* Model End */}
        </div>
        <div
          className="row"
          style={{ marginBottom: showMusic ? "10" : "14px" }}
        >
          <div className="col-lg-7 col-7">
            <div className="row">
              <div className="col-12">
                <label className="form-label labeltitle">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/music.png"
                  />
                  Muziek/ Foto-Videograaf
                </label>
              </div>
              {showMusic && (
                <>
                  <div className="col-md-8 col-12">
                    <label className="form-label labeltitle">Budget</label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="numberInput6"
                      min={1}
                      max={3000}
                      value={rangeValue4}
                      onChange={handleInputChange4}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="range"
                      className="form-range"
                      id="customRange6"
                      min={1}
                      max={3000}
                      value={rangeValue4}
                      onChange={handleRangeChange4}
                    />
                    <label htmlFor="customRange6" className="form-label">
                      <div className="cus-num">
                        <span>€1</span>
                        <span>€300.000</span>
                      </div>
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-5 col-5">
            <div className="infcalcubx">
              <ul className="list-unstyled list-flex">
                <li>
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Content Goes Here"
                  >
                    <i className="fas fa-2x fa-info-circle" />
                  </a>
                </li>
                <li>
                  <a
                    data-bs-toggle="modal"
                    href="#muziekModalToggle"
                    role="button"
                    className="calculatorwrp"
                  >
                    <i className="fas fa-calculator" />
                    <span>Hulp nodig?</span>
                  </a>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      onClick={() => setShowMusic(!showMusic)}
                    />
                    <label
                      className="form-check-label d-block"
                      htmlFor="flexCheckDefault"
                    >
                      Toevoegen
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Model Start */}
          <div
            className="modal muziekModal fade"
            id="muziekModalToggle"
            aria-hidden="true"
            aria-labelledby="muziekToggleLabel"
            tabIndex={-1}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
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
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <div className="row">
                        <div className="col-10">
                          <div className="selectquantity">
                            <div className="quantitybxtitle">
                              <ul>
                                <li>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/decoration.png"
                                  />
                                </li>
                                <li>
                                  <h2>Selecteer of vul in</h2>
                                </li>
                                <li>
                                  <i className="fas fa-2x fa-calculator" />
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-12 position-relative">
                                <ul className="subtitleqyt">
                                  <li>
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/music.png"
                                      className="img-fluid"
                                    />
                                  </li>
                                  <li>
                                    <h5>Muziek</h5>
                                  </li>
                                </ul>
                                <div className="infcalcubx only-info-absolute">
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
                              <div className="col-12 radiobx">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="cba11"
                                    />
                                    <label htmlFor="cba11">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/music-2.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Live band
                                      </span>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="cba12"
                                    />
                                    <label htmlFor="cba12">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/dj-mixer.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">DJ</span>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="cba13"
                                    />
                                    <label htmlFor="cba13">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/beide.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Beide
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row my-2">
                              <div className="col-2">
                                <Image
                                  width={40}
                                  height={50}
                                  alt="aa"
                                  src="/images/play.png"
                                  className="img-fluid"
                                />
                                <label className="form-label fw-bold"></label>
                              </div>
                              <div className="col-10 position-relative">
                                <select
                                  className="form-select"
                                  aria-label="Select"
                                >
                                  <option disabled selected>
                                    Voorkeur Genre
                                  </option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                                <div className="infcalcubx only-info-absolute">
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
                                <ul className="subtitleqyt">
                                  <li>
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/recording.png"
                                      className="img-fluid"
                                    />
                                  </li>
                                  <li>
                                    <h5>Foto-Videograaf</h5>
                                  </li>
                                </ul>
                                <div className="infcalcubx only-info-absolute">
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
                              <div className="col-12 radiobx">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="cbs14"
                                    />
                                    <label htmlFor="cbs14">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/polaroid.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Fotos
                                      </span>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="cbs15"
                                    />
                                    <label htmlFor="cbs15">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/video-camera.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Filmen
                                      </span>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <input
                                      type="radio"
                                      name="test"
                                      id="cbs16"
                                    />
                                    <label htmlFor="cbs16">
                                      <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src="/images/recording.png"
                                        className="img-fluid"
                                      />
                                      <span className="checkbox-label">
                                        Beide
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 text-center  position-relative">
                                <label className="form-label labeltitle fw-bold">
                                  Tijdsduur
                                </label>
                                <div className="infcalcubx only-info-absolute">
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
                              <div className="col">
                                <label
                                  className="form-label labeltitle"
                                  htmlFor="numberInput5"
                                >
                                  Aantal uren
                                </label>
                              </div>
                              <div className="col">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="numberInput5"
                                  min={1}
                                  max={3000}
                                  value={rangeValue5}
                                  onChange={handleInputChange5}
                                />
                              </div>
                              <div className="col-12">
                                <input
                                  type="range"
                                  className="form-range"
                                  id="customRange5"
                                  min={1}
                                  max={3000}
                                  value={rangeValue5}
                                  onChange={handleRangeChange5}
                                />

                                <label
                                  htmlFor="customRange6"
                                  className="form-label"
                                >
                                  <div className="cus-num">
                                    <span>1uur</span>
                                    <span>10uur</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="popupbtn">
                                <p>
                                  Muziek &amp; Foto-Videograaf budget:{" "}
                                  <span>€ 3.000</span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Model End */}
        </div>
        <div className="row">
          <div className="col-lg-7 col-7">
            <div className="row">
              <div className="col-12">
                <label className="form-label labeltitle">
                  <i className="fas fa-2x fa-calculator" /> Budget
                </label>
              </div>
              <div className="col-md-8 col-12">
                <label className="form-label labeltitle">Totaal budget</label>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  id="numberInput6"
                  min={1}
                  max={3000}
                  value={rangeValue6}
                  onChange={handleInputChange6}
                />
              </div>
              <div className="col-12">
                <input
                  type="range"
                  className="form-range"
                  id="customRange6"
                  min={1}
                  max={3000}
                  value={rangeValue6}
                  onChange={handleRangeChange6}
                />
                <label htmlFor="customRange6" className="form-label">
                  <div className="cus-num">
                    <span id="rangeValue6">€1</span>
                    <span>€1.500.000</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-5">
            <div className="infcalcubx justify-content-between overzicht-event-personal">
              <ul className="list-unstyled text-center list-flex">
                <li>
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Content Goes Here"
                  >
                    <i className="fas fa-2x fa-info-circle" />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#moreviewmodel"
                  >
                    <Image
                      width={50}
                      height={50}
                      alt="aa"
                      src="/images/viewpop.png"
                    />
                    <span>Overzicht?</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="rangebtn">
              <button className="seenowbtn" onClick={() => setCount(1)}>
                Bekijk jouw voordeel
              </button>
              {!showCompactContent && (
                <a
                  href="javascript:void(0);"
                  className="text-warning fw-bold d-block"
                  onClick={handleCompactLinkClick}
                >
                  Toch maar snel vergelijken?
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <a href="javascript:void(0);" className="cyberprivacylink">
              <i className="fas fa-2x fa-shield-alt" />
              <span>Privacy</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsFormTopRight;
