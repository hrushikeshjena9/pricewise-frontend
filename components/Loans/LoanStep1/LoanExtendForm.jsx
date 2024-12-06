import Image from "next/image";
import React from "react";
import SameHeightDiv from "../../common/SameHeightDiv";
import TooltipInitialise from "../../common/TooltipInitialise";

const LoanExtendForm = ({
  loanSecondStep,
  setLoanSecondStep,
  setShowStepper,
  showStepper,
  setCount,
  rightTab,
}) => {
  const handleNextLoanStep = () => {
    setShowStepper(true);
    setCount(2);
  };

  
  return (
    <>
      <div className="col-lg-6 eventbxright loans-radiopersonal">
        <SameHeightDiv/>
        <TooltipInitialise/>
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-lg-12 position-relative">
                <label className="form-label labeltitle">Soort lening</label>
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
              {rightTab == 1 ? (
                <div className="col-lg-12 radiobx">
                  <div className="row px-2 justify-content-center">
                    <div className="col-lg-4 p-1 col-md-4">
                      <input type="radio" name="test" id="cbas1" />
                      <label htmlFor="cbas1"  className="tooltip-container">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/libra.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">NHG</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="NHG"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">NHG</p>
                        </div>
                      </label>
                    </div>
                    <div className="col-lg-4 p-1 col-md-4">
                      <input type="radio" name="test" id="cbas2" />
                      <label htmlFor="cbas2"  className="tooltip-container">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/bar-graph.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Linear</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Linear"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Linear</p>
                        </div>
                      </label>
                    </div>
                    <div className="col-lg-4 p-1 col-md-4">
                      <input type="radio" name="test" id="cbas3" />
                      <label htmlFor="cbas3" className="tooltip-container">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/bar-graph-2.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Annuity</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Annuity"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Annuity</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-12 radiobx">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                      <input type="radio" name="test" id="cbas1" />
                      <label htmlFor="cbas1">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/assessment.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Persoonlijk</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Persoonlijk"
                          className="info-in-risk "
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <input type="radio" name="test" id="cbas2" />
                      <label htmlFor="cbas2">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/doorlopend.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Doorlopend</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Doorlopend"
                          className="info-in-risk"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-12 position-relative">
                <label className="form-label labeltitle">Service</label>
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
              <div className="col-12 radiobx ">
                <div className="row justify-content-center">
                  <div className="col-sm-6 p-1 col-lg-4 col-md-6">
                    <input type="radio" name="test" id="cbas4" />
                    <label htmlFor="cbas4"  className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/motivate-2.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Zelfstandig</span>
                      <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Zelfstandig</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Zelfstandig"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </label>
                  </div>
                  <div className="col-sm-6 p-1 col-lg-4 col-md-6">
                    <input type="radio" name="test" id="cbas5" />
                    <label htmlFor="cbas5" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/guidance.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Begeleiding</span>
                      <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Begeleiding</p>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 position-relative">
                <label className="form-label labeltitle">
                  Aanbevolen dekkingen
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
              </div>
              <div className="col-lg-12 col-sm-12 radiobx">
                <div className="row px-2">
                  <div className="col-lg-4 p-1 col-md-4">
                    <input type="radio" name="test" id="cbasa1" />
                    <label htmlFor="cbasa1" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/icon3.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Woonverzekering</span>
                      <div className="d-flex justify-content-center">
                        <p className="tooltip-text">Woonverzekering</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Woonverzekering"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </label>
                  </div>
                  <div className="col-lg-4 p-1 col-md-4">
                    <input type="radio" name="test" id="cbasa2" />
                    <label htmlFor="cbasa2" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/lantern.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Overleidensrisico</span>
                      <div className="d-flex justify-content-center">
                        <p className="tooltip-text ">Overleidensrisico</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Overleidensrisico"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </label>
                  </div>
                  <div className="col-lg-4 p-1 col-md-4">
                    <input type="radio" name="test" id="cbasa3" />
                    <label htmlFor="cbasa3" className="tooltip-container">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/icon2.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Rechtsbijstand</span>
                      <div className="d-flex justify-content-center">
                         <p className="tooltip-text">Rechtsbijstand</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Rechtsbijstand"
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
              <div className="col-md-12 col-lg-12 col-sm-12 position-relative">
                <select className="form-select my-2" aria-label="Select">
                  <option selected>Aanbevolen verzekeringen</option>
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
              </div>
              <div className="col-md-12 radiobx">
                <div className="row px-2">
                  <div className="col-lg-4 p-1 col-md-4">
                    <input type="radio" name="test" id="cbssa1" />
                    <label htmlFor="cbssa1" className="tooltip-container">
                      <Image
                        width={180}
                        height={180}
                        alt="aa"
                        src="/images/car-2.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Voertuigen</span>
                      <div className="d-flex justify-content-center">
                       <p className="tooltip-text">Voertuigen</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Voertuigen"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </label>
                  </div>
                  <div className="col-lg-4  p-1 col-md-4">
                    <input type="radio" name="test" id="cbssa2" />
                    <label htmlFor="cbssa2" className="tooltip-container">
                      <Image
                        width={180}
                        height={180}
                        alt="aa"
                        src="/images/warning-2.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Ongevallen</span>
                      <div className="d-flex justify-content-center">
                       <p className="tooltip-text">Begeleiding</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </label>
                  </div>
                  <div className="col-lg-4  p-1 col-md-4">
                    <input type="radio" name="test" id="cbssa3" />
                    <label htmlFor="cbssa3"  className="tooltip-container">
                      <Image
                        width={180}
                        height={180}
                        alt="aa"
                        src="/images/grave.png"
                        className="img-fluid"
                      />
                      <span className="checkbox-label equal-height">Uitvaart</span>
                      <div className="d-flex justify-content-center">
                       <p className="tooltip-text">Uitvaart</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                        className="info-in-risk hide-info-desktop"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Calculate Popup Start */}
            <div
              className="modal decorationModal fade"
              id="decorationModalToggle"
              aria-hidden="true"
              aria-labelledby="decorationModalToggleLabel"
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
                    <div className="selectquantity">
                      <div className="quantitybxtitle">
                        <ul>
                          <li>
                            <h2>Selecteer of vul in</h2>
                          </li>
                          <li>
                            <i className="fas fa-2x fa-calculator" />
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-5">
                                  <label className="form-label labeltitle">
                                    Netto inkomen
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="number"
                                    className="form-control mb-0"
                                    id="numberInput5"
                                    min={1}
                                    defaultValue={1}
                                  />
                                </div>
                                <div className="col-3 ps-0">
                                  <div className="infcalcubx">
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
                                      <li className="ms-2">
                                        <a href="javascript:void(0);">
                                          <i className="fas fa-2x fa-user-plus" />
                                          <span>Extra?</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-10">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                € <span id="rangeValue5">1</span> OF €10000
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-5">
                                  <label className="form-label labeltitle">
                                    Huur/hyptheek
                                  </label>
                                </div>
                                <div className="col-5">
                                  <input
                                    type="number"
                                    className="form-control mb-0"
                                    id="numberInput5"
                                    min={1}
                                    defaultValue={1}
                                  />
                                </div>
                                <div className="col-2">
                                  <div className="infcalcubx">
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
                            <div className="col-10">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                € <span id="rangeValue5">1</span> OF €10000
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-5">
                                  <label className="form-label labeltitle">
                                    Huur/koop contract
                                  </label>
                                </div>
                                <div className="col-5">
                                  <input
                                    type="number"
                                    className="form-control mb-0"
                                    id="numberInput5"
                                    min={1}
                                    defaultValue={1}
                                  />
                                </div>
                                <div className="col-2">
                                  <div className="infcalcubx">
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
                            <div className="col-10">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <span id="rangeValue5">1</span> maanden OF 10000
                                maanden
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-5">
                                  <label className="form-label labeltitle">
                                    Overige leningen
                                  </label>
                                </div>
                                <div className="col-5">
                                  <input
                                    type="number"
                                    className="form-control mb-0"
                                    id="numberInput5"
                                    min={1}
                                    defaultValue={1}
                                  />
                                </div>
                                <div className="col-2 ps-0">
                                  <div className="infcalcubx">
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
                                      <li className="ms-2">
                                        <a href="javascript:void(0);">
                                          <i className="fas fa-2x fa-plus-circle" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-10">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <span id="rangeValue5">1</span>p/m OF 10000 p/m
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-5">
                                  <label className="form-label labeltitle">
                                    Aflossing lening
                                  </label>
                                </div>
                                <div className="col-5">
                                  <input
                                    type="number"
                                    className="form-control mb-0"
                                    id="numberInput5"
                                    min={1}
                                    defaultValue={1}
                                  />
                                </div>
                                <div className="col-2">
                                  <div className="infcalcubx">
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
                            <div className="col-10">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <span id="rangeValue5">1</span>maanden OF 10000
                                maanden
                              </label>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-5">
                                  <label className="form-label labeltitle">
                                    Overige lasten
                                  </label>
                                </div>
                                <div className="col-5">
                                  <input
                                    type="number"
                                    className="form-control mb-0"
                                    id="numberInput5"
                                    min={1}
                                    defaultValue={1}
                                  />
                                </div>
                                <div className="col-2">
                                  <div className="infcalcubx">
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
                            <div className="col-10">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={10000}
                                defaultValue={1}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <span id="rangeValue5">1</span>p/m OF 10000 p/m
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="popupbtn">
                          <p>
                            Maximaal lenen: <span>€ 3.000</span>
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
            {/* Caculater popup end */}
            {/* More View Popup1 */}
            <div
              className="modal fade"
              id="moreviewmodel1"
              tabIndex={-1}
              aria-labelledby="moreviewmodelLabel1"
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
                    ></button>
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
                              src="/images/icon3.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Woonverzekering</span>
                          </div>
                          <div className="col-4 text-end">
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
                          <div className="col-4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/funeral.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Overlijdensrisico</span>
                          </div>
                          <div className="col-4 text-end">
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
                          <div className="col-4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/vehicles.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Voertuigenverzekering</span>
                          </div>
                          <div className="col-4 text-end">
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
                          <div className="col-4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/accidents.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Ongevallenverzekering</span>
                          </div>
                          <div className="col-4 text-end">
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
                          <div className="col-4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/overleidensrisico.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Uitvaartverzekering</span>
                          </div>
                          <div className="col-4 text-end">
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
            {/* More View Popup end */}
            {/* More View Popup */}
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
                    ></button>
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
                              src="/images/icon3.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Woonverzekering</span>
                          </div>
                          <div className="col-4 text-end">
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
                          <div className="col-4">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/funeral.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 text-center">
                            <span>Overlijdensrisico</span>
                          </div>
                          <div className="col-4 text-end">
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
                        <div className="col-4 text-center  ">
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
            {/* More View Popup End */}
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="rangebtn">
                  <button className="seenowbtn" onClick={handleNextLoanStep}>
                    Bekijk jouw voordeel
                  </button>
                  {/* <a onClick={() => setLoanSecondStep(!loanSecondStep)}>Uitgebreid Vergelijken</a> */}
                </div>
                <a href="javascript:void(0);" className="cyberprivacylink">
                  <i className="fas fa-2x fa-shield-alt" />
                  <span>Privacy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanExtendForm;
