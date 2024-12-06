import Image from "next/image";
import React, { useState } from "react";
import SameHeightDiv from "../../../../common/SameHeightDiv";

const BusinessDamageFormPopup = () => {
  const [showMeev, setShowMeev] = useState(false);
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
                            className="form-control"
                            id="input1"
                            placeholder="Postcode"
                          />
                        </div>
                        <div className="col-lg-4">
                          <input
                            type="text"
                            className="form-control"
                            id="input2"
                            placeholder="Huisnummer"
                          />
                        </div>
                        <div className="col-lg-4">
                          <input
                            type="text"
                            className="form-control"
                            id="input3"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Bedrijfsschade </option>
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
                              <i className="fas fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 position-relative">
                          <label className="form-label labeltitle">Pand</label>
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
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbf2" />
                            <label htmlFor="cbf2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
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
                            <div className="col-lg-4 col-md-4  radio-icon d-flex align-items-center">
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
                            <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
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
                              <div className="infcalcubx frm-info-absolute">
                                <div className="list-unstyled list-style-flex">
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
                        </>
                      )}

                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <label className="form-label form-control">
                            Bedrijfsschade
                          </label>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <select className="form-select" aria-label="Select">
                            <option selected>Verzekeraar </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                          <div className="infcalcubx info-pos">
                            <a href="javascript:void(0);" className="extra">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <label className="form-label form-control">
                            Bedrijfsgrootte
                          </label>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <input className="form-control" type="number" />
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
                          href="#addresschange"
                          className="text-dark btn-link"
                          data-bs-toggle="modal"
                        >
                          <Image
                            src="/images/add-location-point.png"
                            width={28}
                            height={28}
                            alt="location"
                          />
                          Meerdere Vestigingen toevoegen.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------extended form------- */}
                  <div className="col-lg-6 eventbxright">
                    <div className="row">
                      <div className="col-9">
                        <div className="row">
                          <div className="col-lg-12 position-relative">
                            <select className="form-select" aria-label="Select">
                              <option selected>Wat wil je verzekeren?</option>
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
                        <div className="row radiobx justify-content-center mt-4">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <input type="radio" name="test" id="cbdnbo" />
                              <label htmlFor="cbdnbo" className="tooltip-container">
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/drill.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  Herstelkosten
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Herstelkosten"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Herstelkosten</p>
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
                                  src="/images/euro-coin-2.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">Extra</span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Extra"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">Extra</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        <div className="row mt-2">
                          <div className="col-8">
                            <label className="form-label labeltitle">
                              Netto omzet
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
                            <label for="customRange1" className="form-label">
                              <div className="cus-num">
                                <span id="rangeValue1">€1</span>
                                <span>€2000</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-8">
                            <label className="form-label labeltitle">
                              Uitkeringstermijn
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
                            <label for="customRange1" className="form-label">
                              <div className="cus-num">
                                <span id="rangeValue1">1 jaar</span>
                                <span>2 jaar</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 position-relative">
                            <label className="form-label labeltitle">
                              Reconstructiekosten meeverzekeren?
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
                          </div>
                        </div>

                        <div className="row radiobx justify-content-center mt-4">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbdnbob" />
                            <label htmlFor="cbdnbob">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/ja.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label">Ja</span>
                            </label>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input type="radio" name="test" id="cbstacl" />
                            <label htmlFor="cbstacl">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/nee.png"
                                className="img-fluid"
                              />
                              <span className="checkbox-label">Nee</span>
                            </label>
                          </div>
                        </div>
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
                            <label for="customRange1" className="form-label">
                              <div className="cus-num">
                                <span id="rangeValue1">€ 0</span>
                                <span>€ 500.00</span>
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

export default BusinessDamageFormPopup;
