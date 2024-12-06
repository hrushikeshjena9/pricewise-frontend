import React, { useState } from "react";
import Image from "next/image";
import SunAnimation from "../../../../common/SunAnimation";
const CommercialVehiclpopup = () => {
  const [showMeev, setShowMeev] = useState(false);
  return (
    <>
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-lg-6 eventbxleft">
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
                    <div className="row">
                      <div className="col-lg-6">
                        <select className="form-select" aria-label="Select">
                          <option selected>Bedrijfsautoverzekering </option>
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
                      <div className="col-12 position-relative">
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
                    <div className="row mt-4">
                      <div className="col-12 position-relative">
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
                        <div className="frm-toevoe-position text-center">
                          <input
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
                                Vergeten/
                                <br /> niet bekend?
                              </span>
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
                          placeholder=""
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
                            className="form-label labeltitle me-2"
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
                              width={200}
                              height={200}
                              alt="aa"
                              src="/images/car-4.png"
                              className="img-fluid"
                            />
                            <span>Extra?</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
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
                            onChange={() => setShowMeev(!showMeev)}
                            checked={showMeev}
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
                          Partner <i className="fal fa-handshake-alt icon" />
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
                          Vrouw <i className="fas fa-2x fa-venus icon" />
                        </label>
                      </div>
                    </div>
                    <div className="row mt-4">
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
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-8">
                        <label className="fw-medium labeltitle">
                          Bedrijfsautoverzekering
                        </label>
                      </div>
                      <div className="col-lg-4 position-relative">
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
                      <div className="col-lg-8">
                        <label className="fw-medium labeltitle">
                          Bedrijfsgrootte
                        </label>
                      </div>
                      <div className="col-lg-4 position-relative">
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
                    </>
                      )}
                      <div className="text-center my-3">
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
                            <div className="row w-100 justify-content-center align-items-center">
                              <div className="col text-center">
                                <h5 className="modal-title" id="exampleModalLabel">Meerdere Vestigingen</h5>
                              </div>
                              <div className="col-auto">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                              </div>
                            </div>
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
                                            Af en toe heb ik nieuwe medicijnen
                                            nodig gemiddeld 1 tot 5 keer per
                                            jaar
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
                                            Soms, heb ik een herhaal recept
                                            nodig gemiddeld 6 tot 10 keer per
                                            jaar.
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
                                            recepten nodig gemiddeld 11 tot 15
                                            keer per jaar.
                                          </label>
                                        </div>
                                        <div className="acc-fot">
                                          <div className="row ">
                                            <div className="col-lg-8">
                                              <p className="mb-0">
                                                <b>Ons persoonlijk advies:</b>
                                                Verwacht je geen gebruik te
                                                maken van medicatie. Neem dan,
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
                                        <h6>Heb je een bril of lenzen?</h6>
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
                                            Ik heb een bril en/of lenzen en
                                            mijn sterkte is 6+ of 6- en/of
                                            hoger.
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
                                            Ik heb een bril en/of lenzen, en
                                            mijn sterkte is lager dan 6+ of
                                            6-.
                                          </label>
                                        </div>
                                        <div className="acc-fot">
                                          <div className="row ">
                                            <div className="col-lg-8">
                                              <p className="mb-0">
                                                <b>Ons persoonlijk advies:</b>
                                                Verwacht je geen gebruik te
                                                maken van een Opticiën. Neem
                                                dan, hiervoor geen aanvullende
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
                                          Ga je wel eens op vakantie in het
                                          buitenland?
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
                                            Nee, ik blijf altijd in Nederland
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
                                            Ja, ik reis alleen binnen Europa
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
                                            Ja, ik reis over heel de wereld
                                          </label>
                                        </div>
                                        <div className="acc-fot">
                                          <div className="row ">
                                            <div className="col-lg-8">
                                              <p className="mb-0">
                                                <b>Ons persoonlijk advies:</b>
                                                Verwacht niet te gaan reizen
                                                naar het buitenland. Neem dan,
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
                                          Verwacht je behandeld te worden door
                                          een medisch specialist?
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
                                            Nee, ik heb geen behandeling in
                                            mijn agenda staan en kan de
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
                                                <b>Ons persoonlijk advies:</b>
                                                Verwacht je geen kosten te
                                                maken. Behoud dan als nog de
                                                standaard eigen risico voor
                                                onverwachte hoge kosten.
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
              
              <div className="pt-4 pe-4 col-lg-6 eventbxright">
                <div className="row">
                  <div className="col-9">
                    <div className="row">
                      <div className="col-12 mb-2 position-relative">
                        <select className="form-select" aria-label="Select">
                          <option selected>Soort dekking</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                        <div className="infcalcubx info-pos info-pos-largeextra">
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
                                  width={50}
                                  height={525}
                                  src="/images/wa.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">WA</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="WA"
                                  className="info-in-risk hide-info-desktop"
                                >
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
                                  width={50}
                                  height={52}
                                  src="/images/waplus.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">WA+</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="WA+"
                                  className="info-in-risk hide-info-desktop"
                                >
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
                                  width={50}
                                  height={52}
                                  src="/images/allriskauto.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">ALL RISK</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="ZZPer (1)"
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
                      <div className="col-8">
                        <label className="form-label labeltitle">
                          Schadevrije jaren
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
                          max={10000}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange3" className="form-label">
                          <div className="cus-num">
                            <span>1 jaar</span>
                            <span>99Jaar</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <label className="form-label labeltitle">
                          Aantal kilometers
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
                          max={10000}
                          defaultValue={1}
                        />
                        <label htmlFor="customRange3" className="form-label">
                          <div className="cus-num">
                            <span>1km</span>
                            <span>500.000 km</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 position-relative">
                        <select className="form-select" aria-label="Select">
                          <option selected>Aanbevolen verzekeringen</option>
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
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#moreviewmodel"
                              >
                                <Image
                                  alt="aa"
                                  width={90}
                                  height={82}
                                  src="/images/viewpop.png"
                                />
                                <span>Overzicht?</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 px-4">
                      <div className="row radiobx">
                            <div className="col-lg-4 col-md-4 col-sm-6 p-0">
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
                            <div className="col-lg-4 col-md-4 col-sm-6 p-0">
                              <input type="radio" name="test" id="cbstal" />
                              <label htmlFor="cbstal" className="tooltip-container">
                                <Image
                                  alt="aa"
                                  width={50}
                                  height={46}
                                  src="/images/businesses.png"
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
                            <div className="col-lg-4 col-md-4 col-sm-6 p-0">
                              <input type="radio" name="test" id="cbfanspr" />
                              <label htmlFor="cbfanspr" className="tooltip-container">
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

export default CommercialVehiclpopup;