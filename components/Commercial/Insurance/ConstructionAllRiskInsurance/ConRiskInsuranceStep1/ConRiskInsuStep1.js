import React, { useState } from "react";
import Image from "next/image";
import ConRiskInsuDealsStep1 from "./ConRiskInsuDealsStep1";
import ConRiskInsuFaqStep1 from "./ConRiskInsuFaqStep1";
import SameHeightDiv from "../../../../common/SameHeightDiv";
import TooltipInitialise from "../../../../common/TooltipInitialise";
import SunAnimation from "../../../../common/SunAnimation";

const ConRiskInsuStep1 = ({ setShowStepper, setCount }) => {
  const className = 'cyber-securi'
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const [showCoInsure, setShowCoInsure] = useState(false)
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  return (
    <>
    <SameHeightDiv/>
      <div className="eventwrp">
      <SunAnimation className={className} />
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
                        src="/images/carbail.png"
                        className="img-fluid"
                      />
                      Construction all risk
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-9">
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
                      <div className="row mt-2">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Constructionalirisk </option>
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
                      <div className="row mt-3">
                        <div className="col-12">
                            <table className="table table-borderless top-gender-table">
                                <tbody>
                                    <tr>
                                      <td>
                                        <label>Geslacht</label>
                                      </td>
                                      <td>
                                      <div className="radio-icon top-man-construction-all-risk-insuranceC">
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
                                      <div className="radio-icon top-vrouw-construction-all-risk-insuranceC">
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
                        <div className="col-lg-12 position-relative">
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
                          <div className="list-unstyled list-style-flex">
                             <a href="javascript:void(0);" className="extra">
                               <i className="fas fa-2x fa-user-plus" />
                               <span>Extra?</span>
                             </a>
                           </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 position-relative">
                          <select className="form-select">
                            <option>Aflopend CAR</option>
                            <option>Aflopend CAR</option>
                            <option>Aflopend CAR</option>
                            <option>Aflopend CAR</option>
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
                        <div className="col-12 position-relative">
                          <select className="form-select">
                            <option>Soort constructie</option>
                            <option>Soort constructie</option>
                            <option>Soort constructie</option>
                            <option>Soort constructie</option>
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
                      <div className="row px-4 radiobx">
                        <div className="col-lg-3 col-md-3 p-0 col-sm-6">
                          <input type="radio" name="test" id="cbd2" />
                          <label htmlFor="cbd2" className="tooltip-container">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/garage-2.png"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Garage</span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Garage</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Garage"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 p-0 col-sm-6">
                          <input type="radio" name="test" id="cbf2" />
                          <label htmlFor="cbf2" className="tooltip-container">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/veranda.png"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Veranda</span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Veranda</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Veranda"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 p-0 col-sm-6">
                          <input type="radio" name="test" id="cbf2" />
                          <label htmlFor="cbf2" className="tooltip-container">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/parkings.png"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Schuur</span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Schuur</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Schuur"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-3 p-0 col-sm-6">
                          <input type="radio" name="test" id="cbf2" />
                          <label htmlFor="cbf2" className="tooltip-container">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/traditional.png"
                              className="img-fluid"
                            />
                            <span className="checkbox-label">Etage</span>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Etage</p>
                            </div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Etage"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 position-relative">
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
                        <div className="col-12">
                            <table className="table table-borderless bottom-gender-table ">
                                <tbody>
                                    <tr>
                                        <td><label>Wie?</label></td>
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
                                              Kind{" "}
                                              <Image
                                                src="/images/kind.png"
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
                                          <div className="radio-icon">
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
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Zorgverzekering </option>
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
                      <div className="col px-4 radiobx">
                        <div className="row justify-content-center mb-4">
                          <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                            <input type="radio" name="test" id="cb21" />
                            <label htmlFor="cb21" className="tooltip-container">
                              <Image
                                width={128}
                                height={128}
                                alt="horeca"
                                src="/images/user-2.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label equal-height">ZZPer (1)</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">ZZPer (1)</p>
                              </div>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="ZZPer (1)"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </label>
                          </div>
                          <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                            <input type="radio" name="test" id="cb22" />
                            <label htmlFor="cb22" className="tooltip-container">
                              <Image
                                width={128}
                                height={128}
                                alt="aa"
                                src="/images/user.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label equal-height">MKB (2-20)</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">MKB (2-20)</p>
                              </div>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="MKB (2-20)"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </label>
                          </div>
                          <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                            <input type="radio" name="test" id="cb22" />
                            <label htmlFor="cb22" className="tooltip-container">
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
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Grootzakelijk</p>
                              </div>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="MKB (2-20)"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showExtendedForm == 0 && (
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <div className="rangebtn">
                          <button
                            className="seenowbtn"
                            onClick={() => setShowExtendedForm(1)}
                            // onClick={handleSecondStep}
                          >
                            Start vergelijking
                          </button>
                          {/* <a >
                            Toch snel vergelijken?
                          </a> */}
                        </div>
                        <a
                          href="javascript:void(0);"
                          className="cyberprivacylink"
                        >
                          <i className="fas fa-2x fa-shield-alt" />
                          <span>Privacy</span>
                        </a>
                      </div>
                    </div>
                  )}

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
                                  <div className="accordion" id="accordionleft">
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
                                            width={200}
                                            height={200}
                                            alt="aa"
                                            src="/images/contruction.png"
                                          />
                                          <span className="d-block">
                                            Bedrijfsmiddelen
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
                                              Nooit. Ik maak hier geen gebruik
                                              van.
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
                                              Alleen voor de (half) jaarlijkse
                                              controle.
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
                                              Alleen voor de (half) jaarlijkse
                                              controle en mondhygiënist.
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
                                              Ik laat wel eens gaatjes vullen
                                              en/of heb een
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
                                                  Verwacht je niet een bezoek te
                                                  brengen aan de tandarts. Neem
                                                  dan hiervoor geen aanvullende
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
                                            width={200}
                                            height={200}
                                            alt="aa"
                                            src="/images/office.png"
                                          />
                                          <span className="d-block">
                                            Gebouwenverzekering
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
                                            Wanneer bezoek je de Fysiotherapeut?
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
                                              Nooit, ik maak hier geen gebruik
                                              van.
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
                                              Ik ga wel eens voor wat klachten
                                              langs gemiddeld 1 tot 6 keer per
                                              jaar.
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
                                              Ik heb vaak ondersteuning nodig
                                              gemiddeld 19 tot 27 keer per jaar.
                                            </label>
                                          </div>
                                          <div className="acc-fot">
                                            <div className="row ">
                                              <div className="col-lg-8">
                                                <p className="mb-0">
                                                  <b>
                                                    Ons persoonlijke advies:
                                                  </b>
                                                  Verwacht je niet een bezoek te
                                                  brengen aan de fysiotherapeut.
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
                                            width={200}
                                            height={200}
                                            alt="aa"
                                            src="/images/employee-2.png"
                                          />
                                          <span className="d-block">
                                            Bedrijfsaansprakelijkheid
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
                                            andere alternatieve geneeswijzen?
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
                                              Nooit. ik maak hier geen gebruik
                                              van.
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
                                              langs. Gemiddeld 1 tot 4 keer per
                                              jaar.
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
                                              Ik breng regelmatig een bezoek.
                                              Gemiddeld 5 tot 8 keer per jaar.
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
                                              Ik heb last van een blessure en/of
                                              chronische aandoening en bezoek 9
                                              tot 12 keer per jaar een
                                              alternatieve geneeswijzen.
                                            </label>
                                          </div>
                                          <div className="acc-fot">
                                            <div className="row ">
                                              <div className="col-lg-8">
                                                <p className="mb-0">
                                                  <b>
                                                    Ons persoonlijke advies:
                                                  </b>
                                                  Verwacht je niet een bezoek te
                                                  brengen aan een alternatieve
                                                  geneeswijzen. Neem dan,
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
                    </div>
                  </div>

                  {/* Model End */}
                </div>

                {/* ------extended form------- */}
                {showExtendedForm == 1 && (
                   <div className="col-lg-6 eventbxright">
                    <TooltipInitialise/>
                   <div className="row">
                     <div className="col-9">
                       <div className="row mt-3">
                         <div className="col-12 position-relative">
                            <div className="br-input">Aanvullende dekking</div>
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
                       <div className="row justify-content-center">
                         <div className="col px-4 radiobx">
                           <div className="row">
                             <div
                               className="col-lg-4  col-4  col-sm-4  p-0  col-md-4"
                             >
                               <input type="radio" name="test" id="ors1" />
                                <label htmlFor="ors1" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="horeca"
                                    src="/images/ordericon.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Aansprakelijkheid
                                  </span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Aansprakelijkheid"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Aansprakelijkheid</p>
                                  </div>
                                </label>
                             </div>
                             <div
                               className="col-lg-4  col-4  col-sm-4  p-0  col-md-4"
                             >
                               <input type="radio" name="test" id="ors2" />
                               <label htmlFor="ors2" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="aa"
                                   src="/images/tools.png"
                                   className="img-fluid"
                                 />
                                 <span className="checkbox-label equal-height">Hulpmateriaal</span>
                                 <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Hulpmateriaal"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Hulpmateriaal</p>
                                  </div>
                               </label>
                             </div>
                             <div className="col-lg-4  col-4  col-sm-4  p-0  col-md-4" >
                               <input type="radio" name="test" id="ors3" />
                               <label htmlFor="ors3" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="horeca"
                                   src="/images/helmet.png"
                                   className="img-fluid"
                                 />
                                 <span className="checkbox-label equal-height">
                                 Werk
                                 </span>
                                 <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Werk"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Werk</p>
                                  </div>
                               </label>
                             </div>
                             <div
                               className="col-lg-4  col-4  col-sm-4  p-0  col-md-4"
                             >
                               <input type="radio" name="test" id="ors4" />
                               <label htmlFor="ors4" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="aa"
                                   src="/images/real-estate.png"
                                   className="img-fluid"
                                 />
                                 <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Bestaande bezit"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Bestaande bezit</p>
                                  </div>
                                 <span className="checkbox-label equal-height">Bestaande bezit</span>
                               </label>
                             </div>
                             <div
                               className="col-lg-4  col-4  col-sm-4  p-0  col-md-4"
                             >
                               <input type="radio" name="test" id="ors4" />
                               <label htmlFor="ors4" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="aa"
                                   src="/images/toolbox.png"
                                   className="img-fluid"
                                 />
                                   <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Persoonlijk bezit"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Persoonlijk bezit</p>
                                  </div>
                                 <span className="checkbox-label equal-height">Persoonlijk bezit</span>
                               </label>
                             </div>
                           </div>
                         </div>
                       </div>

                       <div className="row mt-2">
                         <div className="col-6">
                           <label className="form-label labeltitle">
                           Looptijd
                           </label>
                         </div>
                         <div className="col-6 position-relative">
                           <input
                             type="number"
                             className="form-control"
                             id="numberInput1"
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
                         <div className="col-12">
                           <input
                             type="range"
                             className="form-range"
                             id="customRange1"
                             min={1}
                             max={2}
                             defaultValue={1}
                           />
                           <label
                             htmlFor="customRange1"
                             className="form-label"
                           >
                             <div className="cus-num">
                               <span>€ 0</span>
                               <span>€ 2000.00</span>
                             </div>
                           </label>
                         </div>
                       </div>
                       <div className="row mt-2">
                         <div className="col-6">
                           <label className="form-label labeltitle">
                           Verzekerd bedrag
                           </label>
                         </div>
                         <div className="col-6 position-relative">
                           <input
                             type="number"
                             className="form-control"
                             id="numberInput1"
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
                         <div className="col-12">
                           <input
                             type="range"
                             className="form-range"
                             id="customRange1"
                             min={1}
                             max={2}
                             defaultValue={1}
                           />
                           <label
                             htmlFor="customRange1"
                             className="form-label"
                           >
                             <div className="cus-num">
                               <span>€ 0</span>
                               <span>€ 2000.00</span>
                             </div>
                           </label>
                         </div>
                       </div>
                       <div className="row mt-3">
                         <div className="col-12 position-relative">
                           <select className="form-select">
                             <option>Aanbevolen verzekeringen</option>
                             <option>Aanbevolen verzekeringen</option>
                             <option>Aanbevolen verzekeringen</option>
                             <option>Aanbevolen verzekeringen</option>
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
                           <div className="frm-toevoe-position text-center">
                             <a
                               href="javascript:void(0);"
                               data-bs-toggle="modal"
                               data-bs-target="#moreviewmodel"
                             >
                               <Image
                                 width={50}
                                 height={22}
                                 alt="aa"
                                 src="/images/viewpop.png"
                               />
                               <span>Overzicht?</span>
                             </a>
                           </div>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col px-4 radiobx">
                           <div className="row">
                             <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                               <input type="radio" name="test" id="cb21" />
                               <label htmlFor="cb21" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="horeca"
                                   src="/images/companyassets.png"
                                   className="img-fluid"
                                  />
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
                                  <span className="checkbox-label equal-height">
                                    Bedrijfsmiddelen
                                  </span>
                                </label>
                             </div>
                             <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                               <input type="radio" name="test" id="cb22" />
                               <label htmlFor="cb22" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="aa"
                                    src="/images/office.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">Gebouw</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Gebouw"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Gebouw</p>
                                  </div>
                                </label>
                             </div>
                             <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                               <input type="radio" name="test" id="cb2d2" />
                               <label htmlFor="cb2d2" className="tooltip-container">
                                 <Image
                                   width={128}
                                   height={128}
                                   alt="aa"
                                   src="/images/employee-2.png"
                                   className="img-fluid"
                                 />
                                 <span className="checkbox-label equal-height">
                                   Aansprakelijkheid
                                 </span>
                                 <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Aansprakelijkheid"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Aansprakelijkheid</p>
                                  </div>
                               </label>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="row mt-4">
                         <div className="col-lg-12">
                           <div className="rangebtn">
                             <button
                               className="seenowbtn"
                               onClick={handleSecondStep}
                             >
                               Bekijk jouw voordeel
                             </button>
                             {/* <a onClick={() => setShowExtendedForm(0)}>
                               Uitgebreid Vergelijken
                             </a> */}
                           </div>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConRiskInsuDealsStep1 />
      <ConRiskInsuFaqStep1 />
    </>
  );
};

export default ConRiskInsuStep1;
