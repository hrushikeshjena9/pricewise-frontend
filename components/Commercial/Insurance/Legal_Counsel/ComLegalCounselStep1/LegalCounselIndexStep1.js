import Image from "next/image";
import React, { useState } from "react";
import LegalCounselDealsStep1 from "./LegalCounselDealsStep1";
import LegalCounselFaq from "./LegalCounselFaq";
import SameHeightDiv from "../../../../common/SameHeightDiv";
import TooltipInitialise from "../../../../common/TooltipInitialise";
import SunAnimation from "../../../../common/SunAnimation";

const LegalCounselIndexStep1 = ({
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
    <SameHeightDiv dependency={showExtendedForm}/>
  
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
                        src="/images/laws.png"
                        className="img-fluid"
                      />
                      Rechtsbijstand
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
                            <option selected>Rechtsbijstand</option>
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
                        <div className='col-12'>
                          <table className='table table-borderless top-gender-table'>
                            <tbody>
                              <tr>
                                <td>
                                  <label>Geslacht</label>
                                </td>
                                <td>
                                  <div className="radio-icon top-man-legal-counsel">
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
                                  <div className="radio-icon top-vrouw-legal-counsel">
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
                          <a href="javascript:void(0);" className="extra">
                                <i className="fas fa-2x fa-user-plus" />
                                <span>Extra?</span>
                              </a>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12 position-relative">
                          <div className="br-input">Branche</div>
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

                      <div className="row radiobx justify-content-center px-4">
                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                          <input type="radio" name="test" id="cb21" />
                          <label htmlFor="cb21" className="tooltip-container">
                            <Image
                              width={128}
                              height={128}
                              alt="horeca"
                              src="/images/restaurant-2.png"
                              className="img-fluid"
                            />
                            <span className="checkbox-label equal-height">Horeca</span>
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
                          <input type="radio" name="test" id="cb24" />
                          <label htmlFor="cb24" className="tooltip-container">
                            <Image
                              width={128}
                              height={128}
                              alt="aa"
                              src="/images/store.png"
                              className="img-fluid"
                            />
                            <span className="checkbox-label equal-height">Detailhandel</span>
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
                          <input type="radio" name="test" id="cb21" />
                          <label htmlFor="cb21" className="tooltip-container">
                            <Image
                              width={128}
                              height={128}
                              alt="horeca"
                              src="/images/industry.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label equal-height">Industrie</span>
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
                              src="/images/agriculture.jpg"
                              className="img-fluid"
                            />
                            <span className="checkbox-label equal-height">Agrosector</span>
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

                      <div className="row">
                        <div className="col-lg-12 position-relative">
                          <div className="br-input">Meeverzekeren</div>
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
                                              Partner <i className="fal fa-handshake-alt icon" />
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
                                              Personeel <i className="fad fa-male icon" />
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
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-6">
                            <select className="form-select" aria-label="Select">
                              <option selected>Rechtsbijstand </option>
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
                      </>
                      }
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <select className="form-select" aria-label="Select">
                            <option selected>Bedrijfsgrootte </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                        <div className="col-lg-6 position-relative">
                          <input type="number" className="form-control" />
                          <div className="infcalcubx only-extra-absolute-business-equipment-insurance">
                            <a href="javascript:void(0);" className="extra">
                              <i className="fas fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 px-4">
                          <div className="row radiobx">
                            <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb21" />
                              <label htmlFor="cb21" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="horeca"
                                  src="/images/user-2.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label equal-height">
                                  ZZPer (1)
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title=" ZZPer (1)"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">ZZPer (1)</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/user.png"
                                  className="img-fluid"
                                />
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Content Goes Here"
                                  className="info-in-risk hide-info-desktop">
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                                <span className="checkbox-label  equal-height">
                                  MKB (2-20)
                                </span>
                                <div className="d-flex justify-content-center">
                                  <p className="tooltip-text">MKB (2-20)</p>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22" className="tooltip-container">
                                <Image
                                  width={128}
                                  height={128}
                                  alt="aa"
                                  src="/images/crowd-of-users.png"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label  equal-height">
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
                    </div>
                  </div>

                  {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}
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
                          {/* <a onClick={handleSecondStep}>
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
                              <div className="col-lg-3  col-6  col-sm-3  p-0  col-md-3">
                                <input type="radio" name="test" id="ins1" />
                                <label htmlFor="ins1" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="horeca"
                                    src="/images/money2.jpg"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Incassobijstand
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Incassobijstand</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Content Goes Here"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-3  p-0  col-md-3">
                                <input type="radio" name="test" id="ins2" />
                                <label htmlFor="ins2" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="horeca"
                                    src="/images/connection.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                  Bedrijfsvoering
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Bedrijfsvoering</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Bedrijfsvoering"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-3  p-0  col-md-3">
                                <input type="radio" name="test" id="ins3" />
                                <label htmlFor="ins3" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="horeca"
                                    src="/images/contract-5.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                  Artieidsrecht
                                  </span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Artieidsrecht</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Artieidsrecht"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                              <div className="col-lg-3  col-6  col-sm-3  p-0  col-md-3">
                                <input type="radio" name="test" id="ins4" />
                                <label htmlFor="ins4" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="aa"
                                    src="/images/overheid.jpg"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">Overheid</span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Overheid</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Overheid"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="r-serv">
                              <i className="fas fa-info"></i>
                              <Image
                                src="/images/blueprint.png"
                                width={80}
                                height={80}
                                alt="inventory"
                              />
                              <span className="fw-medium">Vastgoed</span>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="row mt-2">
                              <div className="col-sm-8 col-12 col-md-8 col-lg-8">
                                <label className="form-label labeltitle">
                                Aantal vestigingen
                                </label>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-md-4">
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
                                    <span>€ 0</span>
                                    <span>€ 2000.00</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-6">
                            <label className="form-label labeltitle">
                            Bruto jaaromzet
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
                                    src="/images/cyber-security-3.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                    Cybersecurity
                                  </span>
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
                                </label>
                              </div>
                              <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                <input type="radio" name="test" id="cb22" />
                                <label htmlFor="cb22" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="aa"
                                    src="/images/job-seeking.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">AOV</span>
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
                                </label>
                              </div>
                              <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                <input type="radio" name="test" id="cb2d2" />
                                <label htmlFor="cb2d2" className="tooltip-container">
                                  <Image
                                    width={128}
                                    height={128}
                                    alt="aa"
                                    src="/images/businesses.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label equal-height">
                                  Bestuurders
                                  </span>
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

      {/* Modal Start */}

      <div
        className="modal model-view fade"
        id="moreviewmodel"
        tabIndex={-1}
        aria-labelledby="moreviewmodelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="moreviewmodelLabel">
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
                  <div className="accordion" id="accordionleft">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
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
                            src="/images/contruction.png"
                          />
                          <span className="d-block">Bedrijfsmiddelen</span>
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
                            Maak je gebruik van een chiropractor, accupunturist
                            of andere alternatieve geneeswijzen?
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
                              Nooit. ik maak hier geen gebruik van.
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
                              Ik ga soms voor wat klachten langs. Gemiddeld 1
                              tot 4 keer per jaar.
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
                              Ik breng regelmatig een bezoek. Gemiddeld 5 tot 8
                              keer per jaar.
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
                              Ik heb last van een blessure en/of chronische
                              aandoening en bezoek 9 tot 12 keer per jaar een
                              alternatieve geneeswijzen.
                            </label>
                          </div>
                          <div className="acc-fot">
                            <div className="row ">
                              <div className="col-lg-8">
                                <p className="mb-0">
                                  <b>Ons persoonlijke advies:</b>
                                  Verwacht je niet een bezoek te brengen aan een
                                  alternatieve geneeswijzen. Neem dan, hiervoor
                                  geen aanvullende verzekering.
                                </p>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-between">
                                <button className="price-btn">Volgende</button>
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
                      <h2 className="accordion-header" id="heading4">
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
                            src="/images/window.png"
                          />
                          <span className="d-block">Glasverzekering</span>
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionleft"
                      >
                        <div className="accordion-body">
                          <h6>Wanneer heb je nieuwe medicijnen nodig?</h6>
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
                              Nooit. ik heb geen medicijnen nodig.
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
                              Af en toe heb ik nieuwe medicijnen nodig gemiddeld
                              1 tot 5 keer per jaar
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
                              Soms, heb ik een herhaal recept nodig gemiddeld 6
                              tot 10 keer per jaar.
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
                              Vaak, heb ik meerdere herhaal recepten nodig
                              gemiddeld 11 tot 15 keer per jaar.
                            </label>
                          </div>
                          <div className="acc-fot">
                            <div className="row ">
                              <div className="col-lg-8">
                                <p className="mb-0">
                                  <b>Ons persoonlijk advies:</b>
                                  Verwacht je geen gebruik te maken van
                                  medicatie. Neem dan, hiervoor geen aanvullende
                                  verzekering.
                                </p>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-between">
                                <button className="price-btn">Volgende</button>
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
                      <h2 className="accordion-header" id="heading5">
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
                            src="/images/breaking.png"
                          />
                          <span className="d-block">Bedrijfschade</span>
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
                              Ik heb een bril en/of lenzen en mijn sterkte is 6+
                              of 6- en/of hoger.
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
                              Ik heb een bril en/of lenzen, en mijn sterkte is
                              lager dan 6+ of 6-.
                            </label>
                          </div>
                          <div className="acc-fot">
                            <div className="row ">
                              <div className="col-lg-8">
                                <p className="mb-0">
                                  <b>Ons persoonlijk advies:</b>
                                  Verwacht je geen gebruik te maken van een
                                  Opticiën. Neem dan, hiervoor geen aanvullende
                                  verzekering.
                                </p>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-between">
                                <button className="price-btn">Volgende</button>
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
                      <h2 className="accordion-header" id="heading3">
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
                            src="/images/note.png"
                          />
                          <span className="d-block">Constructionallrisk</span>
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionleft"
                      >
                        <div className="accordion-body">
                          <h6>
                            Maak je gebruik van een chiropractor, accupunturist
                            of andere alternatieve geneeswijzen?
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
                              Nooit. ik maak hier geen gebruik van.
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
                              Ik ga soms voor wat klachten langs. Gemiddeld 1
                              tot 4 keer per jaar.
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
                              Ik breng regelmatig een bezoek. Gemiddeld 5 tot 8
                              keer per jaar.
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
                              Ik heb last van een blessure en/of chronische
                              aandoening en bezoek 9 tot 12 keer per jaar een
                              alternatieve geneeswijzen.
                            </label>
                          </div>
                          <div className="acc-fot">
                            <div className="row ">
                              <div className="col-lg-8">
                                <p className="mb-0">
                                  <b>Ons persoonlijke advies:</b>
                                  Verwacht je niet een bezoek te brengen aan een
                                  alternatieve geneeswijzen. Neem dan, hiervoor
                                  geen aanvullende verzekering.
                                </p>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-between">
                                <button className="price-btn">Volgende</button>
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
                      <h2 className="accordion-header" id="heading4">
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
                            src="/images/education.png"
                          />
                          <span className="d-block">
                            Beroepsaansprakelijkheid
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionleft"
                      >
                        <div className="accordion-body">
                          <h6>Wanneer heb je nieuwe medicijnen nodig?</h6>
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
                              Nooit. ik heb geen medicijnen nodig.
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
                              Af en toe heb ik nieuwe medicijnen nodig gemiddeld
                              1 tot 5 keer per jaar
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
                              Soms, heb ik een herhaal recept nodig gemiddeld 6
                              tot 10 keer per jaar.
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
                              Vaak, heb ik meerdere herhaal recepten nodig
                              gemiddeld 11 tot 15 keer per jaar.
                            </label>
                          </div>
                          <div className="acc-fot">
                            <div className="row ">
                              <div className="col-lg-8">
                                <p className="mb-0">
                                  <b>Ons persoonlijk advies:</b>
                                  Verwacht je geen gebruik te maken van
                                  medicatie. Neem dan, hiervoor geen aanvullende
                                  verzekering.
                                </p>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-between">
                                <button className="price-btn">Volgende</button>
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
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          <Image
                            alt="aa"
                            width={128}
                            height={128}
                            src="/images/laws.png"
                          />
                          <span className="d-block">Rechtsbijstand</span>
                        </button>
                      </h2>
                      <div
                        id="collapse8"
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
                              Ik heb een bril en/of lenzen en mijn sterkte is 6+
                              of 6- en/of hoger.
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
                              Ik heb een bril en/of lenzen, en mijn sterkte is
                              lager dan 6+ of 6-.
                            </label>
                          </div>
                          <div className="acc-fot">
                            <div className="row ">
                              <div className="col-lg-8">
                                <p className="mb-0">
                                  <b>Ons persoonlijk advies:</b>
                                  Verwacht je geen gebruik te maken van een
                                  Opticiën. Neem dan, hiervoor geen aanvullende
                                  verzekering.
                                </p>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-between">
                                <button className="price-btn">Volgende</button>
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

      {/* Modal End */}
      <LegalCounselDealsStep1 />
      <LegalCounselFaq />
    </>
  );
};

export default LegalCounselIndexStep1;
