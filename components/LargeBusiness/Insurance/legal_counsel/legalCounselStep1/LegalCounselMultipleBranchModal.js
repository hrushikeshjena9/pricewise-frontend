import React, { useState } from "react";
import Image from "next/image";

const LegalCounselMultipleBranchModal = () => {
  return (
    <>
      <div className="col-12 text-center">
        <a
          href="javasxrpot:void(0);"
          className="text-success"
          data-bs-toggle="modal"
          data-bs-target="#samelocation"
        >
          <Image src='/images/add-location-point.png' height={24} width={24} alt="location" />
          Meerdere Vestigingen toevoegen. <sup className="sup-fonticon"><i className="fas fa-info-circle"></i></sup>
        </a>
        {/* Popup or Modal */}
      </div>
      <div
        className="modal fade"
        id="samelocation"
        tabIndex={-1}
        aria-labelledby="sameModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="row w-100 justify-content-center align-items-center">
                <div className="col text-center">
                  <h5 className="modal-title" id="sameModalLabel">Meerdere Vestigingen</h5>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
              </div>
            </div>
            <div className="modal-body text-center">
              <p className="text-center">
                Wijken de gegevens af ten opzichten van de andere vestigingen?
              </p>
              <div className="row justify-content-center ja-nee">
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="exampleRadio1"
                      defaultValue="option1"
                    />
                    <label className="form-check-label fw-bold" htmlFor="exampleRadio1">
                      Ja
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="exampleRadio2"
                      defaultValue="option2"
                    />
                    <label className="form-check-label  fw-bold" htmlFor="exampleRadio2">
                      Nee
                    </label>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="card border-0">
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-lg-6 eventbxleft ">
                        <div className="row">
                          <div className="col-10">
                            <div className="form-sec cyberbxleft">
                              <div className="row">
                                <div className="col-sm-4">
                                  <input
                                    type="text"
                                    className="form-control "
                                    id="input1"
                                    placeholder="Postcode"
                                  />
                                </div>
                                <div className="col-sm-4">
                                  <input
                                    type="text"
                                    className="form-control "
                                    id="input2"
                                    placeholder="Huisnummer"
                                  />
                                </div>
                                <div className="col-sm-4">
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
                                    <option selected>Reisverzekering </option>
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
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <table className="table table-borderless">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <label>Geslacht</label>
                                        </td>
                                        <td>
                                          <div className="radio-icon top-man-legal-counsel-large">
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
                                          <div className="radio-icon top-vrouw-legal-counsel-large">
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
                                <div className="col">
                                  <input type="date" id name className="form-control" />
                                  <div className="infbx legal-counsel-extraninfo-large">
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <a href="javascript:void(0);" className="text-center"><i className="fas fa-2x fa-user-plus" />
                                      <span>Extra?</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <select className="form-select">
                                    <option>Branche</option>
                                    <option>Branche 2</option>
                                    <option>Branche 3</option>
                                    <option>Branche 4</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col px-4 radiobx">
                                  <div className="row">
                                    <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                      <input type="radio" name="test" id="cb21" />
                                      <label htmlFor="cb21" className="tooltip-container">
                                        <Image
                                          width={128}
                                          height={128}
                                          alt="horeca"
                                          src="/images/horeca.png"
                                          className="img-fluid"
                                        />
                                        <span className="checkbox-label equal-height">
                                          Horeca
                                        </span>
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Horeca"
                                          className="info-in-risk hide-info-desktop">
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Horeca</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                      <input type="radio" name="test" id="cb22" />
                                      <label htmlFor="cb22" className="tooltip-container">
                                        <Image
                                          width={128}
                                          height={128}
                                          alt="aa"
                                          src="/images/detailhandel.png"
                                          className="img-fluid"
                                        />
                                        <span className="checkbox-label equal-height">
                                          Detailhandel
                                        </span>
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Detailhandel"
                                          className="info-in-risk hide-info-desktop">
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Detailhandel</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                      <input type="radio" name="test" id="cb23" />
                                      <label htmlFor="cb23" className="tooltip-container" >
                                        <Image
                                          width={128}
                                          height={128}
                                          alt="aa"
                                          src="/images/Industrie.png"
                                          className="img-fluid"
                                        />
                                        <span className="checkbox-label equal-height">
                                          Industrie
                                        </span>
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Industrie"
                                          className="info-in-risk hide-info-desktop">
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Industrie</p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                      <input type="radio" name="test" id="cb24" />
                                      <label htmlFor="cb24" className="tooltip-container">
                                        <Image
                                          width={128}
                                          height={128}
                                          alt="aa"
                                          src="/images/agrosector.png"
                                          className="img-fluid"
                                        />
                                        <span className="checkbox-label equal-height">
                                          Agrosector
                                        </span>
                                        <a
                                          href="javascript:void(0);"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Agrosector"
                                          className="info-in-risk hide-info-desktop">
                                          <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                        <div className="d-flex justify-content-center">
                                          <p className="tooltip-text">Agrosector</p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-12 position-relative">
                                      <label className="form-label labeltitle">Meeverzekeren?</label>
                                      <div className="infcalcubx loans-toevoe-position">
                                        <ul className="list-unstyled">
                                          <li>
                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                              <i className="fas fa-2x fa-info-circle" />
                                            </a>
                                          </li>
                                          <li>
                                            <div className="text-center toevoegen-positionlegal-counsel">
                                              <input className="form-check-input mb-0" type="checkbox" id="flexCheckDefault"
                                               />
                                              <div className="form-check-label d-block fw-bold">
                                                <label htmlFor="flexCheckDefault" className="form-check-label text-dark d-block fw-bold">Toevoegen</label>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                                  <div className="row">
                                    <div className="col-12">
                                      <table className="table table-borderless">
                                        <tbody>
                                        <tr>
                                          <td>
                                            <label>Wie?</label>
                                          </td>
                                          <td>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
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
                                          </td>
                                          <td>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                id="Kind"
                                                name="geslacht"
                                              />
                                              <label htmlFor="Kind">
                                                Kind <i className="fad fa-male icon" />
                                              </label>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <label>Geslacht</label>
                                          </td>
                                          <td>
                                            <div className="radio-icon rd-fnt-icon">
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
                                          </td>
                                          <td>
                                            <div className="radio-icon rd-fnt-icon">
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
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <input type="date" id name className="form-control" />
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
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control "
                                        id="input1"
                                        placeholder="Rechtsbijstand"
                                      />
                                    </div>
                                    <div className="col-lg-6">
                                      <select className="form-select">
                                        <option>Verzekeraar</option>
                                        <option>Verzekeraar</option>
                                        <option>Verzekeraar</option>
                                        <option>Verzekeraar</option>
                                        <option>Verzekeraar</option>
                                      </select>

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
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control "
                                        id="input1"
                                        placeholder="Bedrijfsgrootte"
                                      />
                                    </div>
                                    <div className="col-lg-6">
                                      <input className="form-control" type="number" placeholder="" />
                                      <div className="infbx only-extra-legal-counsel">
                                        <a href="javascript:void(0);" className="extra ">
                                          <i className="fas fa-2x fa-user-plus" />
                                          <span>Extra?</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 pe-4 col-lg-6  eventbxright">
                        <div className="row">
                          <div className="col-9">
                            <div className="row mb-3">
                              <div className="col-lg-12 positon-relative">
                                <label className="form-control">
                                  Aanvullende dekking
                                </label>
                                <div className="infcalcubx info-in-absolute">
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

                            <div className="row px-3 mb-3 legal-counsel-lefticon">
                              <div className="col-lg-3 p-1">
                                <button className="icn-in-bx btn-clickwt-border tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/money2.jpg"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Incassobijstand</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Incassobijstand"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Incassobijstand</p>
                                  </div>
                                </button>
                              </div>
                              <div className="col-lg-3 p-1">
                                <button
                                  className="icn-in-bx btn-clickwt-border tooltip-container"
                                  data-bs-toggle="modal"
                                  data-bs-target="#sports"
                                >
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/connection.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Bedrijfsvoering</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Bedrijfsvoering"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Bedrijfsvoering</p>
                                  </div>
                                </button>
                              </div>
                              <div className="col-lg-3 p-1">
                                <button className="icn-in-bx btn-clickwt-border tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/contract-5.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Arbeidsrecht</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Arbeidsrecht"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Arbeidsrecht</p>
                                  </div>
                                </button>
                              </div>
                              <div className="col-lg-3 p-1">
                                <button className="icn-in-bx btn-clickwt-border tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/box.jpg"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Overheid</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Overheid"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Overheid</p>
                                  </div>
                                </button>
                              </div>
                            </div>

                            <div className="row mb-3">
                              <div className="col-lg-4">
                                <a href="#" className="icn-in-bx">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/blueprint.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Vastgoed</span>
                                </a>
                              </div>
                              <div className="col-lg-8">
                                <div className="row">
                                  <div className="col-12">
                                    <label className="form-label labeltitle">
                                      Aantal vestigingen
                                    </label>
                                  </div>
                                  <div className="col">
                                    <input
                                      type="number"
                                      className="form-control "
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
                                      max={20000}
                                      defaultValue={1}
                                    />
                                    <label htmlFor="customRange1" className="form-label">
                                      <div className="cus-num">
                                        <span>€1</span>
                                        <span>€2.000.00</span>
                                      </div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col">
                                <label className="form-label labeltitle">Bruto jaaromzet</label>
                              </div>
                              <div className="col">
                                <input
                                  type="number"
                                  className="form-control "
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
                                  max={20000}
                                  defaultValue={1}
                                />
                                <label htmlFor="customRange1" className="form-label">
                                  <div className="cus-num">
                                    <span>€1</span>
                                    <span>€2.000.00</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-12">
                                <select className="form-select" aria-label="Select">
                                  <option>Aanbevolen verzekeringen</option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                                <div className="infbx infbx2">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Content Goes Here"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#glasscomparestep">
                                    <Image width={50} height={82} alt="aa" src="/images/viewpop.png" />
                                    <span>Overzicht?</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3 px-3 legal-counsel-lefticon">
                              <div className="col-lg-4 p-1">
                                <button
                                  className="icn-in-bx btn-clickwt-border tooltip-container"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cybersecurity"
                                >
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/cyber-security-3.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Cybersecurity</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Cybersecurity"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Cybersecurity</p>
                                  </div>
                                </button>
                              </div>
                              <div className="col-lg-4 p-1">
                                <button
                                  className="icn-in-bx btn-clickwt-border tooltip-container"
                                  data-bs-toggle="modal"
                                  data-bs-target="#aov"
                                >
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/job-seeking.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">AOV</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="AOV"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">AOV</p>
                                  </div>
                                </button>
                              </div>
                              <div className="col-lg-4 p-1">
                                <button
                                  className="icn-in-bx btn-clickwt-border tooltip-container"
                                  data-bs-toggle="modal"
                                  data-bs-target="#driver"
                                >
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/driver.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Bestuurders</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Bestuurders"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Bestuurders</p>
                                  </div>
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-4">
              <button className="price-btn btn w-25">Toevoegen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalCounselMultipleBranchModal;
