import Image from "next/image";
import React from "react";
import SameHeightDiv from "../../../common/SameHeightDiv";

const SmartPhoneGeneralRightSide = ({
  showCompactContent,
  setShowCompactContent,
  showExtendedContent,
  setShowExtendedContent,
  setCount,
}) => {
  const handleCompactLinkClick = () => {
    setShowCompactContent(true);
    setShowExtendedContent(false);
  };

  const handleExtendedLinkClick = () => {
    setShowCompactContent(false);
    setShowExtendedContent(true);
  };
  return (
    <div
      className={`pt-4 pe-4 col-lg-6 eventbxright ${
        showExtendedContent ? "d-block" : "d-none"
      }`}
    >
      <SameHeightDiv />
      <div className="row mb-3">
        <div className="col-11 position-relative">
          <label className="form-control">Dagelijks internet gebruik</label>
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
        <div className="col-11">
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="mb-0">Navigatie</p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="mb-0">Social media</p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="mb-0">Videobellen</p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="mb-0">Beleggen</p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="mb-0">E-mail</p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="mb-0">Youtube</p>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <p>Totaal internet gebruik</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-11">
          <label className="form-control">Bellen/sms&#x27;en</label>
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
        <div className="col-sm-11 table-responsive text-nowrap">
          <table className="table table-borderless ">
            <tr>
              <td>
                <div className="smrt-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Partner"
                    name="geslacht"
                  />
                  <label htmlFor="Partner">Vaak</label>
                </div>
              </td>
              <td>
                <div className="smrt-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Kind"
                    name="geslacht"
                  />
                  <label htmlFor="Kind">Regelmatig</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="smrt-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Partner"
                    name="geslacht2"
                  />
                  <label htmlFor="Partner">Soms</label>
                </div>
              </td>
              <td>
                <div className="smrt-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Kind"
                    name="geslacht2"
                  />
                  <label htmlFor="Kind">Incidentieel</label>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <select className="form-select">
            <option>Sector</option>
            <option>Sector 1</option>
            <option>Sector 2</option>
            <option>Sector 3</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-11 px-4 font-13 radiobx">
        <div className="row">
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb21" />
                              <label htmlFor="cb21" className="tooltip-container">
                                <Image
                                  src="/images/restaurant-2.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">Horeca</span>
                                <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Horeca</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Horeca"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                              </label>
                            </div>
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb22" />
                              <label htmlFor="cb22" className="tooltip-container">
                                <Image
                                  src="/images/store.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">
                                  Detailhandel
                                </span>
                                 <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Detailhandel</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Detailhandel"
                                    className="info-in-risk hide-info-desktop">
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                              </label>
                            </div>
                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                              <input type="radio" name="test" id="cb23" />
                              <label htmlFor="cb23" className="tooltip-container">
                                <Image
                                  src="/images/Industrie.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">
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
                                  src="/images/smart-farm.png"
                                  width={128}
                                  height={128}
                                  alt="internettv"
                                  className="img-fluid"
                                />
                                <span className="checkbox-label">
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
        <div className="col-10">
          <div className="rangebtn">
            <button className="seenowbtn" onClick={() => setCount(1)}>
              Bekijk jouw voordeel
            </button>
            {!showCompactContent && (
              <a
                href="javascript:void(0);"
                className="text-warning fw-bold d-block"
                onClick={handleCompactLinkClick}
              >
                Toch snel vergelijken?
              </a>
            )}
          </div>
        </div>
        <div className="col-2">
          <a href="javascript:void(0);" className="cyberprivacylink">
            <i className="fas fa-2x fa-shield-alt" />
            <span>Privacy</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmartPhoneGeneralRightSide;
