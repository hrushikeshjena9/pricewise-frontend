import Image from "next/image";
import React from "react";

const SmartphonePersonalrightside = ({
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
      className={`pt-4 pe-4 col-lg-6 smartphone-right eventbxright ${
        showExtendedContent ? "d-block" : "d-none"
      }`}
    >
      <div className="row mb-3">
        <div className="col-11">
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
        <div className="col-11">
          <div className="row mb-3">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">Whatsapp</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">Social media</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">Youtube</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">Games</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">E-mail</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 min"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">Navigatie</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7 col-7">
                  <p className="mb-0">Totaal gebruik</p>
                </div>
                <div className="col-lg-5 col-md-5 col-5">
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
                Ik weet mijn verbruik
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

export default SmartphonePersonalrightside;
