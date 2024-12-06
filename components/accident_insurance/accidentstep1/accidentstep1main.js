import React, { useState } from "react";
import AccidentsEnergy from "./accidentsenergy";
import AccidentSubject from "./accidentsubject";
import Image from "next/image";
import SunAnimation from "../../common/SunAnimation";
import TooltipInitialise from "../../common/TooltipInitialise";

function AccidentStep1Main({ setCount }) {
  const [showMeev, setShowMeev] = useState(false);
  const [extendedForm, setExtendedForm] = useState(0);
  const className = "accident-insurance";
  const handleNextStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  const [rangeValue, setRangeValue] = useState(35);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <section className="cybersecurity-wrp">
        <SunAnimation className={className} />
        <div className="container">
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
                      src="/images/warning.png"
                    />
                    Ongevallen
                  </h2>
                </div>
                <div className="row">
                  <div className="col-9">
                    <div className="form-sec">
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
                            <option selected>Glasverzekering </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
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
                          <table className="table table-borderless top-gender-table  text-nowrap">
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
                                  <div className="radio-icon">
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
                          <input
                            type="text"
                            placeholder="Woning"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 position-relative">
                          <label className="form-label labeltitle">
                            Meeverzekeren?
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
                            <div className="col-12">
                              <table className="table bottom-gender-table table-borderless">
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
                        </>
                      )}
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
                          <div className="infcalcubx extra-pos">
                            <a href="javascript:void(0);" className="extra">
                              <i className="fas fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {extendedForm == 0 && (
                        <>
                          <div className="row mt-4">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button
                                  className="seenowbtn"
                                  onClick={() => setExtendedForm(1)}
                                >
                                  Start vergelijking
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
            </div>
            {extendedForm == 1 && (
              <div className="col-lg-6 cyberbxright pt-4">
                <TooltipInitialise />
                <div className="row">
                  <div className="col-10">
                    <div className="form-sec">
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="form-label labeltitle">
                            Dekking
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
                          <div className="row justify-content-center">
                            <div className="col-md-4 p-md-0">
                              <input type="radio" name="test" id="cb1" />
                              <label htmlFor="cb1" className="tooltip-container">
                                <Image
                                  width={150}
                                  height={150}
                                  alt="aa"
                                  src="/images/fire.png"
                                  className="img-fluid"
                                />
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Binnenshuis"
                                  className="info-in-risk hide-info-desktop"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <span className="checkbox-label">
                                  Binnenshuis
                                </span>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Binnenshuis</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-md-4 p-md-0">
                              <input type="radio" name="test" id="cb2" />
                              <label htmlFor="cb2" className="tooltip-container">
                                <Image
                                  width={150}
                                  height={150}
                                  alt="aa"
                                  src="/images/traffic-barrier.png"
                                  className="img-fluid"
                                />
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Buitenshuis"
                                  className="info-in-risk hide-info-desktop"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Buitenshuis</p>
                                </div>
                                <span className="checkbox-label">
                                  Buitenshuis
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label className="form-label labeltitle">
                            Verzekerd bedrag
                          </label>
                        </div>
                        <div className="col position-relative">
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
                          <label htmlFor="customRange1" className="form-label">
                            <div className="cus-num">
                              <span>€35.000</span>
                              <span>€250.000</span>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <select className="form-select" aria-label="Select">
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
                      </div>
                      <div className="row radiobx mb-3 px-3">
                        <div className="col-lg-4 p-0">
                          <input type="radio" name="test" id="ws1" />
                          <label htmlFor="ws1" className="tooltip-container" >
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/living.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label text-nowrap">
                              Woon
                            </span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Woon</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Woon"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                        <div className="col-lg-4 p-0">
                          <input type="radio" name="test" id="ws2" />
                          <label htmlFor="ws2" className="tooltip-container">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/vehicle-road.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label text-nowrap">
                              Voertuigen
                            </span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Voertuigen</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Voertuigen"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                        <div className="col-lg-4 p-0">
                          <input type="radio" name="test" id="ws3" />
                          <label htmlFor="ws3" className="tooltip-container">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/funeral2.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label text-nowrap">
                              Uitvaart
                            </span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Uitvaart</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Uitvaart"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <a
                          href="#"
                          onClick={() => setCount(1)}
                          className={"btn-one btn price-btn"}
                        >
                          Bekijk jouw voordeel
                        </a>
                        <br />
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
            )}
          </div>
        </div>
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
                          src="/images/icon3.png"
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
                          src="/images/road-2.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6 text-center">
                        <span>Voertuigenverzekering</span>
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
                          src="/images/grave.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6 text-center">
                        <span>Uitvaartverzekering</span>
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
      </section>

      <AccidentsEnergy />
      <AccidentSubject />
    </>
  );
}

export default AccidentStep1Main;
