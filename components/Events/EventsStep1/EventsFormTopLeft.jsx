import Image from "next/image";
import React, { useState } from "react";

const EventsFormTopLeft = ({
  showCompactContent,
  setShowCompactContent,
  showExtendedContent,
  setShowExtendedContent,
}) => {
  const handleCompactLinkClick = () => {
    setShowCompactContent(true);
    setShowExtendedContent(false);
  };

  const handleExtendedLinkClick = () => {
    setShowCompactContent(false);
    setShowExtendedContent(true);
  };
  const [rangeValue, setRangeValue] = useState(1);
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  return (
    <>
      <div className="col-lg-6 eventbxleft">
        <div className="titlecybersecurity">
          <h2>
            {" "}
            <Image width={42} height={42} src="/images/party.png" alt="aa" />
            Evenementen
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-7 col-7">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <input
                  type="text"
                  className="form-control "
                  id="input1"
                  placeholder="Postcode"
                />
              </div>
              <div className="col-md-4 col-12">
                <input
                  type="text"
                  className="form-control "
                  id="input2"
                  placeholder="Huisnummer"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <input
                  type="text"
                  className="form-control "
                  id="input3"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <select className="form-select" aria-label="Select">
                  <option selected>Zaal</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="col-12 col-md-6 position-relative">
                <select className="form-select" aria-label="Select">
                  <option selected>Cateraar</option>
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
              <div className="col-lg-12">
                <label className="form-label labeltitle">
                  Verwachte evenementen datum
                </label>
              </div>
              <div className="col-12 position-relative">
                <input type="date" id name className="form-control" />
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
                <div className="infcalcubx extra-pos-plus">
                  <a href="javascript:void(0);" className="extra">
                    <Image
                      src="/images/calendar-4.png"
                      alt="calendar"
                      width={64}
                      height={64}
                    />
                    <span>Extra?</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 position-relative">
                <label className="form-label labeltitle">Feestgrootte</label>
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
              <div className="col-12  col-lg-6 ">
                <label className="form-label labeltitle" htmlFor="numberInput5">
                  Aantal personen
                </label>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  id="numberInput5"
                  min={1}
                  max={10000}
                  value={rangeValue}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="range"
                  className="form-range"
                  id="customRange5"
                  min={1}
                  max={10000}
                  value={rangeValue}
                  onChange={handleRangeChange}
                />
                <label htmlFor="customRange5" className="form-label">
                  <div className="cus-num">
                    <span>1</span>
                    <span>10000</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <select className="form-select" aria-label="Select">
                  <option selected>Soort evenement</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
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
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/serve-dinner.png"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-6 text-center">
                                <span>Catering</span>
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
                              <div className="col-3">
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/decoration.png"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-6 text-center">
                                <span>Versiering/stylisten</span>
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
                              <div className="col-3">
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/music.png"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-6 text-center">
                                <span>Entertainment</span>
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
              </div>
            </div>
            <div className="row">
              <div className="col radiobx">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <input type="radio" name="test" id="cb1" />
                    <label htmlFor="cb1" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/proposal.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label">Verloving</span>
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
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <input type="radio" name="test" id="cb2" />
                    <label htmlFor="cb2" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/baby-shower.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label">Babyshower</span>
                      <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Babyshower</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Babyshower"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
 
                    </label>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <input type="radio" name="test" id="cb3" />
                    <label htmlFor="cb3" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/rings.png"
                        className="img-fluid"
                      />
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Bruiloft"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                      <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Bruiloft</p>
                      </div>
                      <span className="checkbox-label">Bruiloft</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <select className="form-select" aria-label="Select">
                  <option selected>Thema s</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col radiobx">
                <ul>
                  <li>
                    <input type="radio" name="test" id="cb6" />
                    <label htmlFor="cb6">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/netherland.jpg"
                      />
                      <span className="checkbox-label">netherland</span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="test" id="cb7" />
                    <label htmlFor="cb7">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/turkey.jpg"
                      />
                      <span className="checkbox-label">turkey</span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="test" id="cb8" />
                    <label htmlFor="cb8">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/morocco.jpg"
                      />
                      <span className="checkbox-label">morocco</span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="test" id="cb9" />
                    <label htmlFor="cb9">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/Suriname.jpg"
                      />
                      <span className="checkbox-label">Suriname</span>
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="test" id="cb10" />
                    <label htmlFor="cb10">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/afghanistan.jpg"
                      />
                      <span className="checkbox-label">afghanistan</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-12">
                <div className="rangebtn">
                  {showCompactContent && (
                    <button className="seenowbtn">Bekijk jouw voordeel</button>
                  )}
                  {!showExtendedContent && (
                    <a
                      href="javascript:void(0);"
                      className="text-warning fw-bold d-block"
                      onClick={handleExtendedLinkClick}
                    >
                      Uitgebreid vergelijken?
                    </a>
                  )}
                </div>
              </div>
              {!showExtendedContent && (
                <div className="col-lg-5">
                  <a href="javascript:void(0);" className="cyberprivacylink">
                    <i className="fas fa-2x fa-shield-alt" />
                    <span>Privacy</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsFormTopLeft;
