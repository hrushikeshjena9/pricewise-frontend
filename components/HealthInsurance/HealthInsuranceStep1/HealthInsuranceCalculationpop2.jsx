import Image from 'next/image'
import React from 'react'

const HealthInsuranceCalculationpop2 = () => {
  return (
    <>
        
          {/* Model Start */}
          <div
                              className="modal calculationModel fade"
                              id="calculationModel"
                              aria-hidden="true"
                              aria-labelledby="calculationModelLabel"
                              tabIndex={-1}
                            >
                              <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                  <div className="modal-body addmorepopup">
                                    <div className="pop-up-ttl">
                                      <h3>Selecteer of vul in</h3>
                                      <i class="fas fa-calculator green-cyan fa-2x"></i>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <i className="fas fa-times" />
                                    </button>
                                      <ul className="list-unstyled checkbox-wrapper-16">
                                        <li>
                                          <div
                                            className="accordion"
                                            id="accordionleft"
                                          >
                                            
                                            
                                         
                                            
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="heading5"
                                              >
                                                 <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                                <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapse5"
                                                  aria-expanded="false"
                                                  aria-controls="collapse5"
                                                >
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
                                                    src="/images/glasses.png"
                                                  />
                                                  <span className="d-block">
                                                    Opticiën
                                                  </span>
                                                </button>
                                              </div>
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
                                                  <div className="form-check d-flex w-100">
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
                                                  <div className="form-check d-flex w-100">
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
                                                  <div className="form-check d-flex w-100">
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
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option4"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option4"
                                                    >
                                                      Ik heb een bril en/of
                                                      lenzen en mijn sterkte is
                                                      6+ of 6- en/of hoger.
                                                    </label>
                                                  </div>
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option4"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option4"
                                                    >
                                                      Ik heb een bril en/of
                                                      lenzen, en mijn sterkte is
                                                      lager dan 6+ of 6-.
                                                    </label>
                                                  </div>
                                                  <div className="acc-fot">
                                                    <div className="row ">
                                                      <div className="col-lg-8">
                                                        <p className="mb-0">
                                                          <b>
                                                            Ons persoonlijk
                                                            advies:
                                                          </b>
                                                          Verwacht je geen
                                                          gebruik te maken van
                                                          een Opticiën. Neem
                                                          dan, hiervoor geen
                                                          aanvullende
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
                                              <div
                                                className="accordion-header"
                                                id="heading6"
                                              >
                                                 <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                                <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapse6"
                                                  aria-expanded="false"
                                                  aria-controls="collapse6"
                                                >
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
                                                    src="/images/sunbed.png"
                                                  />
                                                  <span className="d-block">
                                                    Buitenland
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                id="collapse6"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading6"
                                                data-bs-parent="#accordionleft"
                                              >
                                                <div className="accordion-body">
                                                  <h6>
                                                    Ga je wel eens op vakantie
                                                    in het buitenland?
                                                  </h6>
                                                  <div className="form-check d-flex w-100">
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
                                                  <div className="form-check d-flex w-100">
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
                                                  <div className="form-check d-flex w-100">
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
                                                            Ons persoonlijk
                                                            advies:
                                                          </b>
                                                          Verwacht niet te gaan
                                                          reizen naar het
                                                          buitenland. Neem dan,
                                                          hiervoor geen
                                                          aanvullende
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
                                              <div
                                                className="accordion-header"
                                                id="heading7"
                                              >
                                                 <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                                <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapse7"
                                                  aria-expanded="false"
                                                  aria-controls="collapse7"
                                                >
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
                                                    src="/images/calculator.png"
                                                  />
                                                  <span className="d-block">
                                                    Eigen risico
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                id="collapse7"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading7"
                                                data-bs-parent="#accordionleft"
                                              >
                                                <div className="accordion-body">
                                                  <h6>
                                                    Verwacht je behandeld te
                                                    worden door een medisch
                                                    specialist?
                                                  </h6>
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option1"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option1"
                                                    >
                                                      Nee, ik heb geen
                                                      behandeling in mijn agenda
                                                      staan en kan de gemaakte
                                                      kosten terug betalen.
                                                    </label>
                                                  </div>
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option2"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option2"
                                                    >
                                                      Nee, ik heb geen
                                                      behandeling ingepland,
                                                      maar ik kan wel wat missen
                                                      voor
                                                    </label>
                                                  </div>
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option3"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option3"
                                                    >
                                                      Ja, ik heb wel een
                                                      behandeling ingepland bij
                                                      het ziekenhuis.
                                                    </label>
                                                  </div>
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option3"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option3"
                                                    >
                                                      Nee, maar ik wil geen
                                                      risico nemen.
                                                    </label>
                                                  </div>
                                                  <div className="acc-fot">
                                                    <div className="row ">
                                                      <div className="col-lg-8">
                                                        <p className="mb-0">
                                                          <b>
                                                            Ons persoonlijk
                                                            advies:
                                                          </b>
                                                          Verwacht je geen
                                                          kosten te maken.
                                                          Behoud dan als nog de
                                                          standaard eigen risico
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
                            {/* Model End */}
    
    </>
  )
}

export default HealthInsuranceCalculationpop2