import Image from 'next/image'
import React from 'react'

const HealthInsuranceCalculationpop1 = () => {
  return (
    <>
    
          {/* Model Start */}
          <div
                              className="modal quantityModal fade"
                              id="quantityModalToggle"
                              aria-hidden="true"
                              aria-labelledby="quantityModalToggleLabel"
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
                                                id="headingOne"
                                              >
                                                <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                                <button
                                                 className="accordion-button collapsed"
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
                                                    src="/images/dentist-2.png"
                                                  />
                                                  <span className="d-block">
                                                    Tandarts
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionleft"
                                              >
                                                <div className="accordion-body">
                                                  <h6>
                                                    Wanneer ga je naar de
                                                    tandarts?
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
                                                      Nooit. Ik maak hier geen
                                                      gebruik van.
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
                                                      Alleen voor de (half)
                                                      jaarlijkse controle.
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
                                                      Alleen voor de (half)
                                                      jaarlijkse controle en
                                                      mondhygiënist.
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
                                                      Ik laat wel eens gaatjes
                                                      vullen en/of heb een
                                                      wortelkanaalbehandeling.
                                                    </label>
                                                  </div>
                                                  <div className="form-check d-flex w-100">
                                                    <input
                                                      className="form-check-input me-2"
                                                      type="checkbox"
                                                      id="option5"
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="option5"
                                                    >
                                                      Ik heb kronen, bruggen
                                                      en/of inlays nodig.
                                                    </label>
                                                  </div>
                                                  <div className="acc-fot">
                                                    <div className="row ">
                                                      <div className="col-lg-8">
                                                        <p className="mb-0">
                                                          <b>
                                                            Ons persoonlijke
                                                            advies:
                                                          </b>{" "}
                                                          Verwacht je niet een
                                                          bezoek te brengen aan
                                                          de tandarts. Neem dan
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
                                                id="heading2"
                                              >
                                                 <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
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
                                                    src="/images/physical-therapy.png"
                                                  />
                                                  <span className="d-block">
                                                    Fysiotherapie
                                                  </span>
                                                </button>
                                              </div>
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
                                                      Nooit, ik maak hier geen
                                                      gebruik van.
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
                                                      Ik ga wel eens voor wat
                                                      klachten langs gemiddeld 1
                                                      tot 6 keer per jaar.
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
                                                      Af en toe breng ik een
                                                      bezoek gemiddeld 7 tot 9
                                                      keer jaar.
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
                                                      Regelmatig gemiddeld 10
                                                      tot 18 keer per jaar.
                                                    </label>
                                                  </div>
                                                  <div className="form-check d-flex w-100">
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
                                                      nodig gemiddeld 19 tot 27
                                                      keer per jaar.
                                                    </label>
                                                  </div>
                                                  <div className="acc-fot">
                                                    <div className="row ">
                                                      <div className="col-lg-8">
                                                        <p className="mb-0">
                                                          <b>
                                                            Ons persoonlijke
                                                            advies:
                                                          </b>
                                                          Verwacht je niet een
                                                          bezoek te brengen aan
                                                          de fysiotherapeut.
                                                          Neem dan, hiervoor
                                                          geen aanvullende
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
                                                id="heading3"
                                              >
                                                 <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
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
                                                    src="/images/alternative-medicine.png"
                                                  />
                                                  <span className="d-block">
                                                    Alternatief
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                id="collapse3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading3"
                                                data-bs-parent="#accordionleft"
                                              >
                                                <div className="accordion-body">
                                                  <h6>
                                                    Maak je gebruik van een
                                                    chiropractor, accupunturist
                                                    of andere alternatieve
                                                    geneeswijzen?
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
                                                      Nooit. ik maak hier geen
                                                      gebruik van.
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
                                                      Ik ga soms voor wat
                                                      klachten langs. Gemiddeld
                                                      1 tot 4 keer per jaar.
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
                                                      Ik breng regelmatig een
                                                      bezoek. Gemiddeld 5 tot 8
                                                      keer per jaar.
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
                                                      Ik heb last van een
                                                      blessure en/of chronische
                                                      aandoening en bezoek 9 tot
                                                      12 keer per jaar een
                                                      alternatieve geneeswijzen.
                                                    </label>
                                                  </div>
                                                  <div className="acc-fot">
                                                    <div className="row ">
                                                      <div className="col-lg-8">
                                                        <p className="mb-0">
                                                          <b>
                                                            Ons persoonlijke
                                                            advies:
                                                          </b>
                                                          Verwacht je niet een
                                                          bezoek te brengen aan
                                                          een alternatieve
                                                          geneeswijzen. Neem
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
                                                id="heading4"
                                              >
                                                 <a className="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                                <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapse4"
                                                  aria-expanded="false"
                                                  aria-controls="collapse4"
                                                >
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
                                                    src="/images/pharmacy.png"
                                                  />
                                                  <span className="d-block">
                                                    Medicatie
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                id="collapse4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading4"
                                                data-bs-parent="#accordionleft"
                                              >
                                                <div className="accordion-body">
                                                  <h6>
                                                    Wanneer heb je nieuwe
                                                    medicijnen nodig?
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
                                                      Nooit. ik heb geen
                                                      medicijnen nodig.
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
                                                      Af en toe heb ik nieuwe
                                                      medicijnen nodig gemiddeld
                                                      1 tot 5 keer per jaar
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
                                                      Soms, heb ik een herhaal
                                                      recept nodig gemiddeld 6
                                                      tot 10 keer per jaar.
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
                                                      Vaak, heb ik meerdere
                                                      herhaal recepten nodig
                                                      gemiddeld 11 tot 15 keer
                                                      per jaar.
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
                                                          medicatie. Neem dan,
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

export default HealthInsuranceCalculationpop1