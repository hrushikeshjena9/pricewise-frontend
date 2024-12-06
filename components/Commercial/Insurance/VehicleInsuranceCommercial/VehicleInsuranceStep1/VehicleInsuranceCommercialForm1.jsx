import Image from "next/image";
import React, { useState } from "react";
import SunAnimation from "../../../../common/SunAnimation";
import SameHeightDiv from "../../../../common/SameHeightDiv";

const VehicleInsuranceCommercialForm1 = ({ setCount }) => {
  const className = "vehicle-insuran";
  const [showCompactContent, setShowCompactContent] = useState(true);
  const [showExtendedContent, setShowExtendedContent] = useState(false);
  const [showCoInsure, setShowCoInsure] = useState(false)
  const handleCompactLinkClick = () => {
    setShowCompactContent(true);
    setShowExtendedContent(false);
  };

  const handleExtendedLinkClick = () => {
    setShowCompactContent(false);
    setShowExtendedContent(true);
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
      <div className="eventwrp position-relative">
        <SunAnimation className={className} />
        <SameHeightDiv/>
        <div className="container">
          <div className="card border-0">
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-lg-6 pb-4 eventbxleft">
                  <div className="titlecybersecurity">
                    <h2>
                      <Image
                        alt="aa"
                        width={50}
                        height={29}
                        src="/images/trailer.png"
                      />{" "}
                      Aanhangwagenverzekering
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-8">
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
                            <option selected>Voertuigenverzekering </option>
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
                        <div className="col-12">
                          <table className='table table-borderless top-gender-table'>
                            <tbody>
                              <tr>
                                <td>
                                  <label>Geslacht</label>
                                </td>
                                <td>
                                  <div className="radio-icon c-top-man-vehicleInsuranceC">
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
                                  <div className="radio-icon c-top-vrouw-vehicleInsuranceC">
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
                          <div className="infcalcubx extra-pos">
                            <a href="javascript:void(0);" className="extra">
                              <i className="far fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 position-relative mt-4">
                          <div className="kenteken">
                            <div className="inset">
                              <div className="blue" />
                              <input
                                type="text"
                                placeholder="Kenteken"
                                defaultValue="Kenteken"
                              />
                            </div>
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
                          <div className="frm-toevoe-position text-center for-get">

                          <input
                              className="form-check-input mb-0"
                              type="checkbox"
                              id="flexCheckDefault"
                            />
                            <div className="form-check-label d-block fw-bold ">
                              <label
                                htmlFor="flexCheckDefault"
                                className="form-check-label d-block fw-bold green-cyan"
                              >
                                Vergeten/
                                <br /> niet bekend?
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Merk </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Model</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="date"
                            className="form-control"
                          />
                        </div>
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Brandstof</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="d-flex justify-content-between">
                            <label
                              htmlFor="gewicht"
                              className="form-label me-2 form-control"
                            >
                              Gewicht
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="gewicht"
                              name="gewicht"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option selected>Beveiligingsklasse</option>
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
                            <a href="javascript:void(0);" className="extra">
                              <Image
                                src="/images/addvehicleicon.png"
                                width={120}
                                height={120}
                                alt="aa"
                              />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="row mt-4">
                            <div className="col-12 position-relative">
                              <label className="form-label labeltitle">
                                Meeverzekeren?
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
                              <div className="frm-toevoe-position text-center">
                              <input
                                  className="form-check-input mb-0"
                                  type="checkbox"
                                  id="flexCheckDefault"
                                  onClick={() => setShowCoInsure(!showCoInsure)}
                                />
                                <div className="form-check-label d-block fw-bold">
                                  <label
                                    htmlFor="flexCheckDefault"
                                    className="form-check-label d-block fw-bold green-cyan"
                                  >
                                    Toevoegen
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {showCoInsure &&
                        <>
                      <div className="row">
                        <div className="col-12">
                            <table className="table table-borderless bottom-gender-table">
                              <tbody>
                                <tr>
                              <td>
                                <label>Wie?</label>
                              </td>
                              <td>
                                <div className="radio-icon rd-fnt-icon">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="Partner"
                                    name="geslacht"
                                  />

                                  <label htmlFor="Partner">
                                    Partner{" "}
                                    <Image
                                      src="/images/partnernew.png"
                                      width={41}
                                      height={45}
                                      alt="partnernew"
                                    />
                                  </label>
                                </div>
                              </td>
                              <td>
                                <div className="radio-icon rd-fnt-icon">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="Kind"
                                    name="geslacht"
                                  />
                                  <label htmlFor="Kind">
                                    Personeel
                                    <Image
                                      src="/images/liability2.jpg"
                                      width={41}
                                      height={45}
                                      alt="kind"
                                    />
                                  </label>
                                </div>
                              </td>
                                </tr>
                                <tr>
                              <td>
                                <label>Geslacht</label>
                              </td>
                              <td>
                                <div className="radio-icon rd-fnt-icon">
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
                              </td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 position-relative">
                          <input type="date" id name className="form-control" />
                          <div className="infcalcubx info-pos">
                            <a href="javascript:void(0);" className="extra">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Aanhangwagen </option>
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
                         </>
                      }
                      <div className="row">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Bedrijfsgrootte </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <input
                            type="number"
                            className="form-control"
                            id="gewicht"
                            name="gewicht"
                          />
                          <div className="infcalcubx only-extra-absolute">
                          <a href="javascript:void(0);" className="extra">
                                  <i className="far fa-2x fa-user-plus" />
                                  <span>Extra?</span>
                                </a>
                          </div>
                        </div>
                      </div>
                   
                      <div className="row">
                        <div className="col px-4 radiobx">
                          <div className="row">
                            <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb2e1" />
                              <label htmlFor="cb2e1" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="horeca"
                                  src="/images/user-2.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  ZZP&#x27;er (1)
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="ZZP&#x27;er (1)"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">ZZP&#x27;er (1)</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb2w2" />
                              <label htmlFor="cb2w2" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/user.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  MKB (2-20)
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="MKB (2-20)"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">MKB (2-20)</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb2k2" />
                              <label htmlFor="cb2k2" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/crowd-of-users.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  Grootzakelijk
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Grootzakelijk"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Grootzakelijk</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        {showCompactContent && (
                          <button className="seenowbtn">
                            Bekijk jouw voordeel
                          </button>
                        )}

                        {!showExtendedContent && (
                          <a
                            href="javascript:void(0);"
                            className="text-warning fw-bold d-block"
                            onClick={handleExtendedLinkClick}
                          >
                            Uitgebreid vergelijken?{" "}
                          </a>
                        )}
                      </div>
                      {/* Model Start */}
                      <div className="row">
                        <div className="col">
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
                                  <h1
                                    className="modal-title fs-5"
                                    id="moreviewmodelLabel"
                                  >
                                    Selecteer of vul in
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
                                      <div
                                        className="accordion"
                                        id="accordionleft"
                                      >
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="headingOne"
                                          >
                                            <button
                                              className="accordion-button"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapseOne"
                                              aria-expanded="true"
                                              aria-controls="collapseOne"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/treatment.png"
                                              />
                                              <span className="d-block">
                                                Tandarts
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Wanneer ga je naar de tandarts?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nooit. Ik maak hier geen
                                                  gebruik van.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Alleen voor de (half)
                                                  jaarlijkse controle.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Alleen voor de (half)
                                                  jaarlijkse controle en
                                                  mondhygiënist.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik laat wel eens gaatjes
                                                  vullen en/of heb een
                                                  wortelkanaalbehandeling.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option5"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option5"
                                                >
                                                  Ik heb kronen, bruggen en/of
                                                  inlays nodig.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijke advies:
                                                      </b>{" "}
                                                      Verwacht je niet een
                                                      bezoek te brengen aan de
                                                      tandarts. Neem dan
                                                      hiervoor geen aanvullende
                                                      verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading2"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse2"
                                              aria-expanded="false"
                                              aria-controls="collapse2"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/physical-therapy.png"
                                              />
                                              <span className="d-block">
                                                Fysiotherapie
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading2"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Wanneer bezoek je de
                                                Fysiotherapeut?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nooit, ik maak hier geen
                                                  gebruik van.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Ik ga wel eens voor wat
                                                  klachten langs gemiddeld 1 tot
                                                  6 keer per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Af en toe breng ik een bezoek
                                                  gemiddeld 7 tot 9 keer jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Regelmatig gemiddeld 10 tot 18
                                                  keer per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option5"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option5"
                                                >
                                                  Ik heb vaak ondersteuning
                                                  nodig gemiddeld 19 tot 27 keer
                                                  per jaar.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijke advies:
                                                      </b>
                                                      Verwacht je niet een
                                                      bezoek te brengen aan de
                                                      fysiotherapeut. Neem dan,
                                                      hiervoor geen aanvullende
                                                      verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading3"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse3"
                                              aria-expanded="false"
                                              aria-controls="collapse3"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/choose.png"
                                              />
                                              <span className="d-block">
                                                Alternatief
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading3"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Maak je gebruik van een
                                                chiropractor, accupunturist of
                                                andere alternatieve
                                                geneeswijzen?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nooit. ik maak hier geen
                                                  gebruik van.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Ik ga soms voor wat klachten
                                                  langs. Gemiddeld 1 tot 4 keer
                                                  per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Ik breng regelmatig een
                                                  bezoek. Gemiddeld 5 tot 8 keer
                                                  per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik heb last van een blessure
                                                  en/of chronische aandoening en
                                                  bezoek 9 tot 12 keer per jaar
                                                  een alternatieve geneeswijzen.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijke advies:
                                                      </b>
                                                      Verwacht je niet een
                                                      bezoek te brengen aan een
                                                      alternatieve geneeswijzen.
                                                      Neem dan, hiervoor geen
                                                      aanvullende verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading4"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse4"
                                              aria-expanded="false"
                                              aria-controls="collapse4"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/syringe.png"
                                              />
                                              <span className="d-block">
                                                Medicatie
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading4"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Wanneer heb je nieuwe medicijnen
                                                nodig?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nooit. ik heb geen medicijnen
                                                  nodig.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Af en toe heb ik nieuwe
                                                  medicijnen nodig gemiddeld 1
                                                  tot 5 keer per jaar
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Soms, heb ik een herhaal
                                                  recept nodig gemiddeld 6 tot
                                                  10 keer per jaar.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Vaak, heb ik meerdere herhaal
                                                  recepten nodig gemiddeld 11
                                                  tot 15 keer per jaar.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijk advies:
                                                      </b>
                                                      Verwacht je geen gebruik
                                                      te maken van medicatie.
                                                      Neem dan, hiervoor geen
                                                      aanvullende verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading5"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse5"
                                              aria-expanded="false"
                                              aria-controls="collapse5"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/contact-lens.png"
                                              />
                                              <span className="d-block">
                                                Opticiën
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading5"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Heb je een bril of lenzen?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Geen van beide.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Alleen een bril
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Alleen lenzen
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik heb een bril en/of lenzen
                                                  en mijn sterkte is 6+ of 6-
                                                  en/of hoger.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option4"
                                                >
                                                  Ik heb een bril en/of lenzen,
                                                  en mijn sterkte is lager dan
                                                  6+ of 6-.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijk advies:
                                                      </b>
                                                      Verwacht je geen gebruik
                                                      te maken van een Opticiën.
                                                      Neem dan, hiervoor geen
                                                      aanvullende verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading6"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse6"
                                              aria-expanded="false"
                                              aria-controls="collapse6"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/airplane.png"
                                              />
                                              <span className="d-block">
                                                Buitenland
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading6"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Ga je wel eens op vakantie in
                                                het buitenland?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nee, ik blijf altijd in
                                                  Nederland
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Ja, ik reis alleen binnen
                                                  Europa
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Ja, ik reis over heel de
                                                  wereld
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijk advies:
                                                      </b>
                                                      Verwacht niet te gaan
                                                      reizen naar het
                                                      buitenland. Neem dan,
                                                      hiervoor geen aanvullende
                                                      verzekering.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="heading7"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#collapse7"
                                              aria-expanded="false"
                                              aria-controls="collapse7"
                                            >
                                              <Image
                                                alt="aa"
                                                width={128}
                                                height={128}
                                                src="/images/calculator.png"
                                              />
                                              <span className="d-block">
                                                Eigen risico
                                              </span>
                                            </button>
                                          </h2>
                                          <div
                                            id="collapse7"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading7"
                                            data-bs-parent="#accordionleft"
                                          >
                                            <div className="accordion-body">
                                              <h6>
                                                Verwacht je behandeld te worden
                                                door een medisch specialist?
                                              </h6>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option1"
                                                >
                                                  Nee, ik heb geen behandeling
                                                  in mijn agenda staan en kan de
                                                  gemaakte kosten terug betalen.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option2"
                                                >
                                                  Nee, ik heb geen behandeling
                                                  ingepland, maar ik kan wel wat
                                                  missen voor
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Ja, ik heb wel een behandeling
                                                  ingepland bij het ziekenhuis.
                                                </label>
                                              </div>
                                              <div className="form-check d-inline-block w-100">
                                                <input
                                                  className="form-check-input me-2"
                                                  type="checkbox"
                                                  id="option3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="option3"
                                                >
                                                  Nee, maar ik wil geen risico
                                                  nemen.
                                                </label>
                                              </div>
                                              <div className="acc-fot">
                                                <div className="row ">
                                                  <div className="col-lg-8">
                                                    <p className="mb-0">
                                                      <b>
                                                        Ons persoonlijk advies:
                                                      </b>
                                                      Verwacht je geen kosten te
                                                      maken. Behoud dan als nog
                                                      de standaard eigen risico
                                                      voor onverwachte hoge
                                                      kosten.
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-4 d-flex justify-content-between">
                                                    <button className="price-btn">
                                                      Volgende
                                                    </button>
                                                    <a
                                                      className="reset-btn"
                                                      href="javascript:void();"
                                                    >
                                                      <i className="fas  fa-sync-alt"></i>
                                                      <span>Reset</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li></li>

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
                                        <button className="btnps">
                                          Opslaan
                                        </button>
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

                      {/* Model End */}
                    </div>
                  </div>
                </div>
                <div
                  className={`pt-4 pe-4 col-lg-6 eventbxright ${
                    showExtendedContent ? "d-block" : "d-none"
                  }`}
                >
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <div className="col-12 mb-2 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option selected>Soort dekking</option>
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
                                  <i className="fas fa-2x fa-info-circle"></i>
                                </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col radiobx">
                          <div className="row">
                            <div className="col-lg-4 col-md-4">
                              <input type="radio" name="test" id="cb121" />
                              <label htmlFor="cb121" className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={180}
                                  height={180}
                                  src="/images/wa.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">WA</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="WA"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">WA</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <input type="radio" name="test" id="cb522" />
                              <label htmlFor="cb522" className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={180}
                                  height={180}
                                  src="/images/waplus.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">WA+</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="WA+"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">WA+</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <input type="radio" name="test" id="cb552" />
                              <label htmlFor="cb552" className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={180}
                                  height={180}
                                  src="/images/allriskauto.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">ALL RISK</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="ALL RISK"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">ALL RISK</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6  col-md-6  col-12">
                          <label className="form-label labeltitle">
                            Schadevrije jaren
                          </label>
                        </div>
                        <div className="col-lg-6  col-md-6  col-12 position-relative">
                          <input
                            type="number"
                            className="form-control mb-0"
                            id="numberInput5"
                            min={1}
                            max={99}
                            value={rangeValue}
                            onChange={handleInputChange}
                          />
                          <div className="infcalcubx hulpNinfo-position ">
                            <ul className="list-unstyled list-flex">
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
                                <a
                                  href="javascript:void(0);"
                                  role="button"
                                  className="calculatorwrp"
                                >
                                  <i className="fas fa-calculator" />
                                  <span>Hulp nodig?</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12">
                          <input
                            type="range"
                            className="form-range mb-0"
                            id="customRange5"
                            min={1}
                            max={99}
                            value={rangeValue}
                            onChange={handleRangeChange}
                          />
                          <label htmlFor="customRange1" className="form-label">
                            <div className="cus-num">
                              <span id="rangeValue1">1 jaar</span>
                              <span>99Jaar</span>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <label className="form-label labeltitle">
                            Aantal kilometers
                          </label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 position-relative">
                          <input
                            type="number"
                            className="form-control mb-0"
                            id="numberInput5"
                            min={1}
                            max={500}
                            value={rangeValue2}
                            onChange={handleInputChange2}
                          />
                          <div className="infcalcubx hulpNinfo-position">
                            <ul className="list-unstyled list-flex">
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
                                <a
                                  href="javascript:void(0);"
                                  role="button"
                                  className="calculatorwrp"
                                >
                                  <i className="fas fa-calculator" />
                                  <span>Hulp nodig?</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12">
                          <input
                            type="range"
                            className="form-range mb-0"
                            id="customRange5"
                            min={1}
                            max={500}
                            value={rangeValue2}
                            onChange={handleRangeChange2}
                          />
                          <label htmlFor="customRange1" className="form-label">
                            <div className="cus-num">
                              <span id="rangeValue1">1km</span>
                              <span>500.000 km</span>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option selected>Aanvullende dekking</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                          <div className="infcalcubx overzicht-info-positionfarmhouse">
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
                                  className="text-center"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#moreviewmodel"
                                >
                                  <Image
                                    alt="aa"
                                    width={50}
                                    height={50}
                                    src="/images/viewpop.png"
                                  />
                                  <span>Overzicht?</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="row radiobx">
                            <div className="col-lg-4 col-md-4 col-sm-6 pe-lg-0">
                              <input type="radio" name="test" id="cbdnbo" />
                              <label htmlFor="cbdnbo" className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={50}
                                  height={46}
                                  src="/images/contruction.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
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
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <input type="radio" name="test" id="cbstal" />
                              <label htmlFor="cbstal" className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={50}
                                  height={46}
                                  src="/images/driver-2.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  Betuurders
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Betuurders"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Betuurders</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 ps-0">
                              <input type="radio" name="test" id="cbfanspr" />
                              <label htmlFor="cbfanspr"  className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={50}
                                  height={46}
                                  src="/images/office.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">Gebouwen</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Gebouwen"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Gebouwen</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Model Start */}
                        <div
                          className="modal quantityModal fade"
                          id="quantityModalToggle"
                          aria-hidden="true"
                          aria-labelledby="quantityModalToggleLabel"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
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
                                Your Content Goes Here.
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Model End */}
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="rangebtn">
                            <button
                              className="seenowbtn"
                              onClick={() => setCount(1)}
                            >
                              Bekijk jouw voordeel
                            </button>
                            {!showCompactContent && (
                              <a
                                href="javascript:void(0);"
                                className="text-warning fw-bold d-block"
                                onClick={handleCompactLinkClick}
                              >
                                Toch snel vergelijken?
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleInsuranceCommercialForm1;
