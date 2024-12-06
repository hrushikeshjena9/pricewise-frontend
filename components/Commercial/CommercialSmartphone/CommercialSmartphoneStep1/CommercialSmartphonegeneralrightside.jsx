import Image from "next/image";
import React from "react";
import SameHeightDiv from "../../../common/SameHeightDiv";

const CommercialSmartphonegeneralrightside = ({
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
  console.log(showExtendedContent,"showExtendedContent");
  return (
    <div
      className={`pt-4 pe-4 col-lg-6 eventbxright ${showExtendedContent ? "d-block" : "d-none"
        }`}
    >
      <div className="row">
        <div className="col-10">
      <div className="row mb-3">
        <div className="col-lg-12 position-relative">
          <label className="form-control">Dagelijks internet gebruik</label>
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
          <div className="row mb-3">
            <div className="col-lg-6">
              <label className="fw-medium">Navigatie</label>
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
            <div className="col-lg-6">
              <label className="fw-medium">Social media</label>
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <label className="fw-medium">Videobellen</label>
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
            <div className="col-lg-6">
              <label className="fw-medium">Beleggen</label>
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <label className="fw-medium">E-mail</label>
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
            <div className="col-lg-6">
              <label className="fw-medium">Youtube</label>
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <label className="fw-medium">Totaal internet gebruik</label>
            </div>
            <div className="col-lg-6">
              <input type="text" className="form-control" placeholder="0 min" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-12 position-relative">
        <label className="form-control">Bellen/sms&#xb4;en</label>
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
        <div className="col-lg-auto col-md-auto col-sm-auto smrt-radio">
          <input
            className="form-check-input"
            type="radio"
            id="Partner"
            name="geslacht"
          />
          <label htmlFor="Partner">Vaak</label>
        </div>
        <div className="col-lg-auto col-md-auto col-sm-auto smrt-radio">
          <input
            className="form-check-input"
            type="radio"
            id="Kind"
            name="geslacht"
          />
          <label htmlFor="Kind">Regelmatig</label>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-auto col-md-auto col-sm-auto smrt-radio">
          <input
            className="form-check-input"
            type="radio"
            id="Partner"
            name="geslacht2"
          />
          <label htmlFor="Partner">Soms</label>
        </div>
        <div className="col-lg-auto col-md-auto col-sm-auto smrt-radio">
          <input
            className="form-check-input"
            type="radio"
            id="Kind"
            name="geslacht2"
          />
          <label htmlFor="Kind">Incidentieel</label>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <select className="form-select">
            <option>Sector</option>
            <option>Sector 1</option>
            <option>Sector 2</option>
            <option>Sector 3</option>
          </select>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12">
          <div className="row sm-ph-bx radiobx">
            <div className="col-md-3 col-6 col-sm-6 p-0">
              <input type="radio" name="test" id="ws1" />
                  <label htmlFor="ws1" className="tooltip-container">
                    <Image
                      src="/images/catering.jpg"
                      alt="catering"
                      width={186}
                      height={190}
                    />
                    <span className="checkbox-label equal-height">Horeca</span>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Horeca"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Horeca</p>
                    </div>
                  </label>
            </div>
            <div className="col-md-3 col-6 col-sm-6 p-0">
              <input type="radio" name="test" id="ws2" />
              <label htmlFor="ws2" className="tooltip-container">
                <Image
                  src="/images/retail.jpg"
                  alt="retail"
                  width={186}
                  height={190}
                />
                <span className="checkbox-label equal-height">Detailhandel</span>
                <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Detailhandel"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Detailhandel</p>
                    </div>
              </label>
            </div>
            <div className="col-md-3 col-6 col-sm-6 p-0">
              <input type="radio" name="test" id="ws3" />
              <label htmlFor="ws3" className="tooltip-container">
                <Image
                  src="/images/industry.jpg"
                  alt="industry"
                  width={186}
                  height={190}
                />
                <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Industrie"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Industrie</p>
                    </div>
                <span className="checkbox-label equal-height">Industrie</span>
              </label>
            </div>
            <div className="col-md-3 col-6 col-sm-6 p-0">
              <input type="radio" name="test" id="ws4" />
              <label htmlFor="ws4" className="tooltip-container">
                <Image
                  src="/images/agriculture.jpg"
                  alt="agriculture"
                  width={186}
                  height={190}
                />
                <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Agrosector"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Agrosector</p>
                    </div>
                <span className="checkbox-label equal-height">Agrosector</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
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
                Ik weet mijn gebruik.
              </a>
            )}
          </div>
        </div>
        <div className="col-lg-5">
          <a href="javascript:void(0);" className="cyberprivacylink">
            <i className="fas fa-2x fa-shield-alt" />
            <span>Privacy</span>
          </a>
        </div>
      </div>
      <SameHeightDiv dependency={showExtendedContent} />
    </div>

  );
};

export default CommercialSmartphonegeneralrightside;