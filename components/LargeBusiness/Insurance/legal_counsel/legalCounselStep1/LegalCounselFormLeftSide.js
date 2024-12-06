import Image from "next/image";
import React, { useState } from "react";
import LegalCounselMultipleBranchModal from "./LegalCounselMultipleBranchModal";

const LegalCounselFormLeftSide = ({
  setCount,
  showCompactContent,
  setShowCompactContent,
  showExtendedContent,
  setShowExtendedContent,
  setShowStepper,
}) => {
  const handleCompactLinkClick = () => {
    setShowCompactContent(true);
    setShowExtendedContent(false);
  };

  const handleExtendedLinkClick = () => {
    setShowCompactContent(false);
    setShowExtendedContent(true);
  };
  const handleSecondStep = () => {
    setCount(1);
    setShowStepper(true);
  };
  const [showMeev, setShowMeev] = useState(false);
  return (
    <>
      <div className="col-lg-6 eventbxleft ">
        <div className="row">
          <div className="col-lg-12">
            <div className="titlecybersecurity">
              <h2>
                <Image
                  width={186}
                  height={190}
                  src="/images/laws.png"
                  alt="aa"
                />
                Rechtsbijstand
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="form-sec cyberbxleft">
              <div className="row">
                <div className="col-sm-4 col-lg-4 col-md-4">
                  <input
                    type="text"
                    className="form-control "
                    id="input1"
                    placeholder="Postcode"
                  />
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4">
                  <input
                    type="text"
                    className="form-control "
                    id="input2"
                    placeholder="Huisnummer"
                  />
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4">
                  <input
                    type="text"
                    className="form-control "
                    id="input3"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <select className="form-select" aria-label="Select">
                    <option selected>Reisverzekering </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6">
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
                <div className="col-12 top-gender-table text-nowrap">
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
                      <label className="form-label labeltitle">
                        Meeverzekeren?
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
                            className="form-check-label text-dark d-block fw-bold"
                          >
                            Toevoegen
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {showMeev && (
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
                              <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="Partner"
                                  name="geslacht"
                                />
                                <label htmlFor="Partner">
                                  Partner{" "}
                                  <i className="fal fa-handshake-alt icon" />
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
                                  Vrouw{" "}
                                  <i className="fas fa-2x fa-venus icon" />
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
                    <div className="col-lg-6 position-relative">
                      <input
                        className="form-control"
                        type="number"
                        placeholder=""
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
                        <a href="javascript:void(0);" className="extra">
                          <i className="fas fa-2x fa-user-plus" />
                          <span>Extra?</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="row">
              <LegalCounselMultipleBranchModal />
              <div className="col-lg-12">
                <div className="rangebtn">
                  {showCompactContent && (
                    <button className="seenowbtn" onClick={handleSecondStep}>
                      Bekijk jouw voordeel
                    </button>
                  )}
                  {!showExtendedContent && (
                    <a
                      href="javascript:void(0);"
                      className="text-warning fw-bold d-block"
                      onClick={handleExtendedLinkClick}
                    >
                      Hulp nodig bij het schatten?
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {!showExtendedContent && (
          <a href="javascript:void(0);" className="cyberprivacylink">
            <i className="fas fa-2x fa-shield-alt" />
            <span>Privacy</span>
          </a>
        )}
      </div>
    </>
  );
};

export default LegalCounselFormLeftSide;
