import Image from "next/image";
import React from "react";
import SameHeightDiv from "../../../../common/SameHeightDiv";

const BuildingInsuranceFormPopup = () => {
    
  return (
    <>
      <SameHeightDiv />
      <div
        className="modal fade"
        id="addresschange"
        tabIndex={-1}
        aria-labelledby="addresschangeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="row w-100 justify-content-center align-items-center">
                <div className="col text-center">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Meerdere Vestigingen
                  </h5>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>
            </div>

            <div className="modal-body">
              <p className="text-center d-block">
                Wijken de gegevens af ten opzichten van de andere vestigingen?
              </p>
              <div className="text-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="wijken"
                    id="wijkenJa"
                    defaultValue="ja"
                  />
                  <label className="form-check-label" htmlFor="wijkenJa">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="wijken"
                    id="wijkenNee"
                    defaultValue="nee"
                  />
                  <label className="form-check-label" htmlFor="wijkenNee">
                    Nee
                  </label>
                </div>
              </div>
              <div className="row">
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
                            <option selected>Gebouwenverzekering</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option selected>Verzekeraar </option>
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
                            <a href="javascript:void(0);" className="extra">
                              <i className="fas fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 text-center position-relative">
                          <label className="form-control labeltitle fw-medium">
                            Pand
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
                      <div className="row mt-2">
                        <div className="col px-4 radiobx">
                          <div className="row justify-content-center">
                            <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb21" />
                              <label htmlFor="cb21" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="horeca"
                                  src="/images/house-2.png"
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
                            <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/house-3.png"
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
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 position-relative">
                          <label className="form-control">Meeverzekeren</label>
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
                      <div className="row">
                        <div className="col-lg-3 col-md-3">
                          <label>Wie?</label>
                        </div>
                        <div className="col-lg-4 col-md-4 radio-icon rd-fnt-icon">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="Partner"
                            name="geslacht"
                          />

                          <label htmlFor="Partner">
                            Partner <i className="fal fa-handshake-alt icon" />
                          </label>
                        </div>
                        <div className="col-lg-5 col-md-5 radio-icon rd-fnt-icon">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="Kind"
                            name="geslacht"
                          />
                          <label htmlFor="Kind">
                            Personeel <i className="fad fa-male icon" />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-3">
                          <label>Geslacht</label>
                        </div>
                        <div className="col-lg-4 col-md-4 radio-icon rd-fnt-icon">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="man2"
                            name="geslacht"
                          />
                          <label htmlFor="man2">
                            Man <i className="fas fa-2x fa-mars icon" />
                          </label>
                        </div>
                        <div className="col-lg-5 col-md-5 radio-icon rd-fnt-icon">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="vrouw2"
                            name="geslacht"
                          />
                          <label htmlFor="vrouw2">
                            Vrouw <i className="fas fa-2x fa-venus icon" />
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
                      <div className="row">
                        <div className="col-lg-6 mt-3 text-start">
                          <label className="form-control form-lable fw-medium">
                            Gebouwverzekering
                          </label>
                        </div>
                        <div className="col-lg-6 mt-3 position-relative">
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
                        <div className="col-12 col-lg-6 mt-3 text-start">
                          <label className="form-control form-lable fw-medium">
                            Bedrijfsgrootte
                          </label>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 position-relative">
                          <input type="number" className="form-control" />
                          <div className="infcalcubx professionalliability-large-infoin">
                            <a href="javascript:void(0);" className="extra">
                              <i className="fas fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="multiple-user">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#smartphone">
                          {" "}
                          <Image
                            src="/images/add-location-point.png"
                            width={24}
                            height={24}
                            alt="location"
                          />
                          <p className="d-flex"><span className="link-underline-dark text-decoration-underline">Meerdere gebruikers toevoegen.</span>
                        <sup><i class="fas font-14 fa-info-circle"></i> </sup></p>
                        </a>
                      </div>
                      {/* <div className="text-center">
                        <a
                          href="#"
                          className="text-success text-center mb-4 d-block"
                        >
                          <i className="fas fa-map-marker-alt"></i>
                          Meerdere Vestigingen toevoegen.
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* ------extended form------- */}

                <div className="col-lg-6 eventbxright">
                  <div className="row">
                    <div className="col-9">
                      <div className="row">
                        <div className="col-lg-12 position-relative">
                          <input
                            type="text"
                            placeholder="Soort dekking"
                            className="form-control"
                          />
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
                      <div className="row mt-2">
                        <div className="col px-4 radiobx">
                        <div className="row justify-content-center">
                                <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                  <input type="radio" name="test" id="cb21" />
                                  <label htmlFor="cb21" className="tooltip-container">
                                    <Image
                                      width={128}
                                      height={128}
                                      alt="horeca"
                                      src="/images/homeicon.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Basis
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Basis"
                                      className="info-in-risk hide-info-desktop">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Basis</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                                  <input type="radio" name="test" id="cb22" />
                                  <label htmlFor="cb22" className="tooltip-container">
                                    <Image
                                      width={128}
                                      height={128}
                                      alt="aa"
                                      src="/images/homeicon.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Allrisk
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Allrisk"
                                      className="info-in-risk hide-info-desktop">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Allrisk</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-8">
                          <label className="form-label labeltitle">
                            Verzekerd bedrag
                          </label>
                        </div>
                        <div className="col-4 position-relative">
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
                          <div className="infcalcubx frm-toevoe-position text-center">
                            <a
                              href="javascript:void(0);"
                              className="calculatorwrp"
                            >
                              <i className="fas fa-calculator" />
                              <span>Hulp nodig?</span>
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
                          <label for="customRange1" className="form-label">
                            <div className="cus-num">
                              <span>€35.000</span>
                              <span>€1.250.000</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-6">
                          <label className="form-label labeltitle">
                            Eigen risico
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
                              aria-label="Content Goes Here"
                              data-bs-original-title="Content Goes Here"
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
                          <label for="customRange1" className="form-label">
                            <div className="cus-num">
                              <span>€1</span>
                              <span>€300</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option disabled selected>
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
                       <div className="row radiobx">
                            <div className="col-lg-4  col-6  col-sm-6  col-md-4">
                              <label
                                data-bs-toggle="modal"
                                data-bs-target="#lbcmassets"
                                className="tooltip-container"
                              >
                                <Image
                                  width={128}
                                  height={128}
                                  alt="horeca"
                                  src="/images/companyassets.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
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
                            <div className="col-lg-4  col-6  col-sm-6  col-md-4">
                              <label
                                data-bs-toggle="modal"
                                data-bs-target="#lbglass"
                                className="tooltip-container"
                              >
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/voteicon.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
                                  Glas
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Glas"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Glas</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4  col-6  col-sm-6  col-md-4">
                              <label
                                data-bs-toggle="modal"
                                data-bs-target="#lbliability"
                                className="tooltip-container"
                              >
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/corporateliability.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
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
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn price-btn"
                data-bs-dismiss="modal"
              >
                Toevoegen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingInsuranceFormPopup;
