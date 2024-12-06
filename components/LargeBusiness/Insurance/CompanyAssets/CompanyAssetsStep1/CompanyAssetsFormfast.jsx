import Image from "next/image";
import React, { useState } from "react";
import AddressChangepopup from "./AddressChangepopup";
import SunAnimation from "../../../../common/SunAnimation";
import SameHeightDiv from "../../../../common/SameHeightDiv";
import TooltipInitialise from "../../../../common/TooltipInitialise";
const CompanyAssetsFormfast = ({ setShowStepper, showStepper, setCount }) => {
  const className = "vehicle-insuran";
  const [showMeev, setShowMeev] = useState(false);
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  return (
    <div>
      <SameHeightDiv />
      <main>
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
                          src="/images/contruction.png"
                          className="img-fluid"
                        />
                        Bedrijfsmiddelen
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
                              <option selected>Bedrijfsmiddelen </option>
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
                          <div className="col-lg-3 col-md-3">
                            <label>Geslacht</label>
                          </div>
                          <div className="col-lg-4 col-md-4 radio-icon">
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
                          <div className="col-lg-5 col-md-5 radio-icon">
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
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 position-relative">
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
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <label className="form-label labeltitle">
                              Woning?
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
                        <div className="row radiobx justify-content-center">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbd2" />
                            <label htmlFor="cbd2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/protection.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label">Gehuurd</span>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gehuurd"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gehuurd</p>
                              </div>
                            </label>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbf2" />
                            <label htmlFor="cbf2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/protection.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label">Gekocht</span>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gekocht"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gekocht</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 position-relative">
                                <label className="form-label labeltitle">
                                  Meeverzekeren?
                                </label>
                                <div className="infcalcubx frm-info-absolute">
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
                          </div>
                        </div>
                        {showMeev && (
                          <>
                            <div className="row mt-3">
                              <div className="col-lg-3 col-md-3">
                                <label>Wie?</label>
                              </div>
                              <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="man"
                                  name="geslacht"
                                />
                                <label htmlFor="man">
                                  Partner{" "}
                                  <i className="fal fa-handshake-alt icon" />
                                </label>
                              </div>
                              <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="vrouw"
                                  name="geslacht"
                                />
                                <label htmlFor="vrouw">
                                  Personeel <i className="fad fa-male icon" />
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-3 col-md-3">
                                <label>Geslacht</label>
                              </div>
                              <div className="col-lg-4 col-md-4 radio-icon">
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
                              <div className="col-lg-5 col-md-5 radio-icon">
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
                              </div>
                            </div>
                          </>
                        )}
                        <div className="row mt-3">
                          <div className="col-lg-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Bedrijfsmiddelen </option>
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
                          <div className="col-lg-6">
                            <label className="fw-medium labeltitle">
                              Bedrijfsgrootte
                            </label>
                          </div>
                          <div className="col-lg-6 position-relative">
                            <div className="male-num">
                              <input type="number" className="form-control" />
                              <i class="fas fa-male"></i>
                            </div>
                            <div className="infcalcubx professionalliability-large-infoin">
                              <a href="javascript:void(0);" className="extra">
                                <i className="fas fa-2x fa-user-plus" />
                                <span>Extra?</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <a
                            href="#exampleModal"
                            className="text-dark btn-link"
                            data-bs-toggle="modal"
                          >
                            <Image
                              src="/images/add-location-point.png"
                              width={24}
                              height={84}
                              alt="location"
                            />
                            Meerdere Vestigingen toevoegen.
                          </a>
                        </div>
                        {/* The modal */}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                              <div className="modal-header text-center">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Meerdere Vestigingen
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>

                              <div className="modal-body">
                                <p className="text-center">
                                  Wijken de gegevens af ten opzichten van de
                                  andere vestigingen?
                                </p>
                                <div className="d-flex justify-content-center">
                                  <div className="form-check me-3">
                                    <input
                                      className="form-check-input me-2"
                                      type="radio"
                                      name="wijken"
                                      id="wijkenJa"
                                      defaultValue="ja"
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="wijkenJa"
                                    >
                                      Ja
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input me-2"
                                      type="radio"
                                      name="wijken"
                                      id="wijkenNee"
                                      defaultValue="nee"
                                    />
                                    <label
                                      className="form-check-label mt-1"
                                      htmlFor="wijkenNee"
                                    >
                                      Nee
                                    </label>
                                  </div>
                                </div>

                                <AddressChangepopup />
                              </div>
                              <div className="text-center mb-4">
                                <button
                                  type="button"
                                  className="price-btn btn"
                                  data-bs-dismiss="modal"
                                >
                                  Toevoegen
                                </button>
                              </div>
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
                            >
                              Start vergelijking
                            </button>
                            {/* <a onClick={() => setShowExtendedForm(1)}>
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
                                                    Verwacht je niet een bezoek
                                                    te brengen aan de tandarts.
                                                    Neem dan hiervoor geen
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
                                                gemiddeld 19 tot 27 keer per
                                                jaar.
                                              </label>
                                            </div>
                                            <div className="acc-fot">
                                              <div className="row ">
                                                <div className="col-lg-8">
                                                  <p className="mb-0">
                                                    <b>
                                                      Ons persoonlijke advies:
                                                    </b>
                                                    Verwacht je niet een bezoek
                                                    te brengen aan de
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
                                                    Verwacht je niet een bezoek
                                                    te brengen aan een
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
                      <TooltipInitialise />
                      <div className="row">
                        <div className="col-9">
                          <div className="row ">
                            <div className="col-lg-12 position-relative">
                              <label className="form-control fw-medium">
                                Aanbevolen dekking
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
                          </div>

                          <div className="row mt-3">
                            <div className="col-lg-4">
                              <div className="r-serv w-100 tooltip-container">
                                <Image
                                  src="/images/inventory.png"
                                  width={80}
                                  height={80}
                                  alt="inventory"
                                />
                                <span className="fw-medium">Inventaris</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Inventaris"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Inventaris</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Verzekerd bedrag
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="number"
                                    className="form-control"
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
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>€ 1</span>
                                      <span>€ 2000.00</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-4">

                              <div className="r-serv w-100 tooltip-container">
                                <Image
                                  src="/images/shopping-cart.png"
                                  width={80}
                                  height={80}
                                  alt="inventory"
                                />
                                <span className="fw-medium">Goederen</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Goederen"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Goederen</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Verzekerd bedrag
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="number"
                                    className="form-control"
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
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>€ 1</span>
                                      <span>€ 2000.00</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-4">
                              <div className="r-serv w-100 tooltip-container">
                                <Image
                                  src="/images/refrigerator-2.png"
                                  width={80}
                                  height={80}
                                  alt="inventory"
                                />
                                <span className="fw-medium">Koelschade</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Koelschade"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Koelschade</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Verzekerd bedrag
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="number"
                                    className="form-control"
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
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>€ 1</span>
                                      <span>€ 2000.00</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div className="col-lg-4">
                              <div className="r-serv w-100 tooltip-container">
                                <Image
                                  src="/images/money.png"
                                  width={80}
                                  height={80}
                                  alt="inventory"
                                />
                                <span className="fw-medium">Kasgeld</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Kasgeld"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Kasgeld</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="row mt-2">
                                <div className="col-8">
                                  <label className="form-label labeltitle">
                                    Verzekerd bedrag
                                  </label>
                                </div>
                                <div className="col-4">
                                  <input
                                    type="number"
                                    className="form-control"
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
                                    max={2000}
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>€ 1</span>
                                      <span>€ 2000.00</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-8">
                              <label className="form-label labeltitle">
                                Verzekerd bedrag
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
                              <div className="frm-toevoe-position text-center">
                                <a
                                  href="javascript:void(0);"
                                  role="button"
                                  className="calculatorwrp"
                                    data-bs-toggle="modal"
                                data-bs-target="#lbcmassets"
                                >
                                  <i className="fas fa-calculator" />
                                  <span>Hulp nodig?</span>
                                </a>
                              </div>
                         
                              {/* popup Start */}

                              <div
                                className="modal fade funeral-sec-mod"
                                id="lbcmassets"
                                tabIndex={-1}
                                aria-labelledby="lbcmassetsLabel"
                                aria-hidden="true">
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
                                    <div className="modal-body">
                                      <div className="funeral-modal-bx">
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <div className="fn-input-info">
                                              <label className="form-control fw-medium">
                                                Wil je inventaris meeverzekeren?
                                              </label>
                                              <i className="fas fa-info"></i>
                                              <div className="row justify-content-center radiobx mt-3">
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test" id="cb1" />
                                                  <label htmlFor="cb1">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/yes.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Ja</span>
                                                  </label>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test" id="cb2" />
                                                  <label htmlFor="cb2">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/no.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Nee</span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="fn-input-info">
                                              <label className="form-control fw-medium">
                                                Wil je goederen meeverzekeren?
                                              </label>
                                              <i className="fas fa-info"></i>
                                              <div className="row justify-content-center radiobx mt-3">
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test2" id="cb3" />
                                                  <label htmlFor="cb3">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/yes.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Ja</span>
                                                  </label>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test2" id="cb4" />
                                                  <label htmlFor="cb4">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/no.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Nee</span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <div className="row mt-2">
                                              <div className="col-12 col-lg-6 col-md-6">
                                                <label className="form-label labeltitle">
                                                  Verzekerd bedrag
                                                </label>
                                              </div>
                                              <div className="col-12 col-lg-6 col-md-6 position-relative">
                                                <input
                                                  type="number"
                                                  className="form-control"
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
                                                  max={2}
                                                  defaultValue={1}
                                                />
                                                <label htmlFor="customRange1" className="form-label">
                                                  <div className="cus-num">
                                                    <span>€0</span>
                                                    <span>€2.000.000</span>
                                                  </div>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="row mt-2">
                                              <div className="col-12 col-lg-6 col-md-6">
                                                <label className="form-label labeltitle">
                                                  Verzekerd bedrag
                                                </label>
                                              </div>
                                              <div className="col-12 col-lg-6 col-md-6 position-relative">
                                                <input
                                                  type="number"
                                                  className="form-control"
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
                                                  max={2}
                                                  defaultValue={1}
                                                />
                                                <label htmlFor="customRange1" className="form-label">
                                                  <div className="cus-num">
                                                    <span>€0</span>
                                                    <span>€2.000.000</span>
                                                  </div>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <div className="fn-input-info">
                                              <label className="form-control fw-medium">
                                                Wil je koelschade meeverzekeren?
                                              </label>
                                              <i className="fas fa-info"></i>
                                              <div className="row justify-content-center radiobx mt-3">
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test" id="cb1" />
                                                  <label htmlFor="cb1">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/yes.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Ja</span>
                                                  </label>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test" id="cb2" />
                                                  <label htmlFor="cb2">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/no.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Nee</span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="fn-input-info">
                                              <label className="form-control fw-medium">
                                                Wil je kasgeld meeverzekeren?
                                              </label>
                                              <i className="fas fa-info"></i>
                                              <div className="row justify-content-center radiobx mt-3">
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test2" id="cb3" />
                                                  <label htmlFor="cb3">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/yes.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Ja</span>
                                                  </label>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                  <input type="radio" name="test2" id="cb4" />
                                                  <label htmlFor="cb4">
                                                    <Image
                                                      width={80}
                                                      height={80}
                                                      alt="aa"
                                                      src="/images/no.jpg"
                                                      className="img-fluid"
                                                    />
                                                    <span className="checkbox-label">Nee</span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="row">
                                          <div className="col-lg-6">
                                            <div className="row mt-2">
                                              <div className="col-12 col-lg-6 col-md-6">
                                                <label className="form-label labeltitle">
                                                  Verzekerd bedrag
                                                </label>
                                              </div>
                                              <div className="col-12 col-lg-6 col-md-6 position-relative">
                                                <input
                                                  type="number"
                                                  className="form-control"
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
                                                  max={2}
                                                  defaultValue={1}
                                                />
                                                <label htmlFor="customRange1" className="form-label">
                                                  <div className="cus-num">
                                                    <span>€0</span>
                                                    <span>€50.000</span>
                                                  </div>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="row mt-2">
                                              <div className="col-12 col-lg-6 col-md-6">
                                                <label className="form-label labeltitle">
                                                  Bruto omzet
                                                </label>
                                              </div>
                                              <div className="col-12 col-lg-6 col-md-6 position-relative">
                                                <input
                                                  type="number"
                                                  className="form-control"
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
                                                  max={2}
                                                  defaultValue={1}
                                                />
                                                <label htmlFor="customRange1" className="form-label">
                                                  <div className="cus-num">
                                                    <span>€0.000</span>
                                                    <span>€25.000</span>
                                                  </div>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="row">
                                          <div className="popupbtn">
                                            <div className="row">
                                              <div className="col-lg-12">
                                                <span>Totaal verzekerd bedrag: € 2.500</span>
                                                <a href="#" className="btnps">
                                                  Opslaan
                                                </a>
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

                              {/* popup End */}
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
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span>€ 1</span>
                                  <span>€ 2000.00</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 position-relative">
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
                              <div className="frm-toevoe-position text-center">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#moreviewmodel"
                                >
                                  <Image
                                    width={60}
                                    height={55}
                                    alt="aa"
                                    src="/images/viewpop.png"
                                  />
                                  <span>Overzicht?</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="row radiobx">
                                <div className="col-lg-4 col-md-4 col-sm-6 ">
                                  <input type="radio" name="test" id="cbdnbo" />
                                  <label htmlFor="cbdnbo" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/breaking.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label equal-height">
                                      Bedrijfsschade
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Bedrijfsschade"
                                      className="info-in-risk hide-info-desktop">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Bedrijfsschade</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                  <input type="radio" name="test" id="cbstal" />
                                  <label htmlFor="cbstal" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/office.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label equal-height">
                                      Gebouw
                                    </span>
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
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                  <input
                                    type="radio"
                                    name="test"
                                    id="cbfanspr"
                                  />
                                  <label htmlFor="cbfanspr" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/employee-2.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label equal-height ">
                                      Aansprakelijkheid
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title=" Aansprakelijkheid"
                                      className="info-in-risk hide-info-desktop">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text"> Aansprakelijkheid</p>
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
                            <a onClick={() => setShowExtendedForm(0)}>
                              Uitgebreid Vergelijken
                            </a>
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyAssetsFormfast;
