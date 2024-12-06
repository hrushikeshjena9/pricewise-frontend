import Image from "next/image";
import React, { useState } from "react";
import DirectorsLiaInsuStep1deals from "./DirectorsLiaInsuStep1deals";
import DirectorsLiaInsuFaq from "./DirectorsLiaInsuFaq";
import SameHeightDiv from "../../../../common/SameHeightDiv";
import TooltipInitialise from "../../../../common/TooltipInitialise";
import SunAnimation from "../../../../common/SunAnimation";
const DirectorsLiaInsuIndexStep1 = ({
  setShowStepper,
  showStepper,
  setCount,
}) => {
  const className = 'cyber-securi'
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const [showMeev, setShowMeev] = useState(false)
  const handleSecondStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  return (
    <>
      <div className="eventwrp">
        <SameHeightDiv/>
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
                        src="/images/businesses.png"
                        className="img-fluid"
                      />
                      Bestuurdersaansprakelijkheid
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
                      <div className="row">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Bestuurdersaansprakelijk</option>
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

                      <div className="row">
                        <div className="col-12">
                            <table className="table table-borderless top-gender-table">
                                <tbody>
                                    <tr>
                                      <td><label>Geslacht</label></td>
                                      <td>
                                        <div className="radio-icon top-man-directors-liability-insuranceC">
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
                                        <div className="radio-icon top-vrouw-directors-liability-insuranceC">
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
                             <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
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
                              onChange={() => setShowMeev(!showMeev)}  checked={showMeev} 
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
                      {showMeev && 
                      <>
                      <div className="row">
                          <div className="col-12">
                              <table className="table table-borderless bottom-gender-table">
                                <tbody>
                                  <tr>
                                      <td>
                                        <label>Wie?</label>
                                      </td>
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
                                    <div className="radio-icon">
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
                              aria-label="Content Goes Here"
                              data-bs-original-title="Content Goes Here"
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
                            id
                            name
                            className="form-control"
                            placeholder="Bestuurdersaansprakelijk"
                          />
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
                      </>
                        }
                      <div className="row">
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Bedrijfsgrootte"
                          />
                        </div>
                        <div className="col-6">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="row radiobx justify-content-center">
                        <div className="col-lg-4 col-6 col-sm-6 col-md-3">
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
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="ZZPer (1)"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">ZZPer (1)</p>
                            </div>
                          </label>
                        </div>
                        <div className="col-lg-4 col-6 col-sm-6 col-md-3">
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
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="MKB (2-20)"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">MKB (2-20)</p>
                            </div>
                          </label>
                        </div>
                        <div className="col-lg-4 col-6 col-sm-6 col-md-3">
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
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Grootzakelijk"
                              className="info-in-risk hide-info-desktop">
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <div className="d-flex justify-content-center">
                              <p className="tooltip-text">Grootzakelijk</p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}
                  {showExtendedForm == 0 && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="rangebtn">
                          <button
                            className="seenowbtn"
                            // onClick={handleSecondStep}
                            onClick={() => setShowExtendedForm(1)}
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
                </div>
                {/* ------extended form------- */}
                {showExtendedForm == 1 && (
                  <div className="col-lg-6 eventbxright">
                    <TooltipInitialise/>
                    <div className="row">
                      <div className="col-9">
                        <div className="row mt-2">
                          <div className="col-6">
                            <label className="form-label labeltitle">
                              Bezittingen
                            </label>
                          </div>
                          <div className="col-6 position-relative">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="15.000"
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
                            <label
                              htmlFor="customRange1"
                              className="form-label"
                            >
                              <div className="cus-num">
                                <span>€0</span>
                                <span>€500.000</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-6">
                            <label className="form-label labeltitle">
                              Oprichtingsdatum
                            </label>
                          </div>
                          <div className="col-6 position-relative">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="15.000"
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
                            <label
                              htmlFor="customRange1"
                              className="form-label"
                            >
                              <div className="cus-num">
                                <span>€0</span>
                                <span>€500.000</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-6">
                            <label className="form-label labeltitle">
                              Netto omzet
                            </label>
                          </div>
                          <div className="col-6 position-relative">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="30.000"
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
                            <label
                              htmlFor="customRange1"
                              className="form-label"
                            >
                              <div className="cus-num">
                                <span>€0</span>
                                <span>€500.000</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-12 position-relative">
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
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                            <div className="infcalcubx frm-toevoe-position text-center">
                              <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#moreviewmodel">
                                <Image
                                  width={50}
                                  height={22}
                                  alt="aa"
                                  src="/images/viewpop.png"
                                />
                                <span>Overzicht?</span>
                              </a>
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
                                          <div className="col-4">
                                            <Image
                                              width={200}
                                              height={200}
                                              alt="aa"
                                              src="/images/serve-dinner.png"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-4 text-center">
                                            <span>Catering</span>
                                          </div>
                                          <div className="col-4 text-end">
                                            <label className="checkbox-wrapper">
                                              <input
                                                type="checkbox"
                                                className="checkbox-input"
                                              />
                                              <span className="checkbox-tile">
                                                <span className="checkbox-icon">
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
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
                                          <div className="col-4">
                                            <Image
                                              width={200}
                                              height={200}
                                              alt="aa"
                                              src="/images/decoration.png"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-4 text-center">
                                            <span>Versiering/stylisten</span>
                                          </div>
                                          <div className="col-4 text-end">
                                            <label className="checkbox-wrapper">
                                              <input
                                                type="checkbox"
                                                className="checkbox-input"
                                              />
                                              <span className="checkbox-tile">
                                                <span className="checkbox-icon">
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
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
                                          <div className="col-4">
                                            <Image
                                              width={200}
                                              height={200}
                                              alt="aa"
                                              src="/images/music.png"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-4 text-center">
                                            <span>Entertainment</span>
                                          </div>
                                          <div className="col-4 text-end">
                                            <label className="checkbox-wrapper">
                                              <input
                                                type="checkbox"
                                                className="checkbox-input"
                                              />
                                              <span className="checkbox-tile">
                                                <span className="checkbox-icon">
                                                  <Image
                                                    width={200}
                                                    height={200}
                                                    alt="aa"
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
                          </div>
                        </div>

                        <div className="row  mt-3 radiobx">
                          <div className="col-lg-4  col-6  col-sm-6 col-md-4">
                            <input type="radio" name="test" id="bd1" />
                            <label htmlFor="bd1" className="tooltip-container">
                              <Image
                                width={128}
                                height={128}
                                alt="horeca"
                                src="/images/companyassets.png"
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
                          <div className="col-lg-4  col-6  col-sm-6 col-md-4">
                            <input type="radio" name="test" id="bd2" />
                            <label htmlFor="bd2" className="tooltip-container">
                              <Image
                                width={128}
                                height={128}
                                alt="aa"
                                src="/images/office.png"
                                className="img-fluid"
                              />
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gebouw"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <span className="checkbox-label equal-height">Gebouw</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gebouw</p>
                              </div>
                            </label>
                          </div>
                          <div className="col-lg-4  col-6  col-sm-6 col-md-4">
                            <input type="radio" name="test" id="bd3" />
                            <label htmlFor="bd3" className="tooltip-container">
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
      <DirectorsLiaInsuStep1deals />
      <DirectorsLiaInsuFaq />
    </>
  );
};

export default DirectorsLiaInsuIndexStep1;
