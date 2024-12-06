import React, { useState } from "react";
import Image from "next/image";
const AddressChangepopup = () => {
  const [showMeev, setShowMeev] = useState(false);
  return (
    <>
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
                </div>
              </div>
              <div className="row">
                <div className="col-12 position-relative">
                  <label className="form-label labeltitle">Woning?</label>
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
            </div>
          </div>
        </div>
        <div className="col-lg-6 eventbxright">
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
                    >
                      <i className="fas fa-calculator" />
                      <span>Hulp nodig?</span>
                    </a>
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
                  <label htmlFor="customRange5" className="form-label">
                    <div className="cus-num">
                      <span>€ 1</span>
                      <span>€ 2000.00</span>
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
        </div>
      </div>
    </>
  );
};

export default AddressChangepopup;
