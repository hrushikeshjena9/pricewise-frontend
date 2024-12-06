import Image from "next/image";
import React from "react";

const LegalCounselFormRightSide = ({
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
    <>
      <div
        className={`pt-4 pe-4 col-lg-6  eventbxright ${
          showExtendedContent ? "d-block" : "d-none"
        }`}
      >
        <div className="row">
          <div className="col-9">
            <div className="row mb-3">
              <div className="col-lg-12 positon-relative">
                <label className="form-control">Aanvullende dekking</label>
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
                <button  className="icn-in-bx btn-clickwt-border tooltip-container">
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
                <button  className="icn-in-bx btn-clickwt-border tooltip-container">
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
                  <div className="col-9">
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
              <div className="col-9 col-sm-7">
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
                    data-bs-target="#glasscomparestep"
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
                  Toch snel vergelijken?
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
      </div>

      <div
        className="modal fade"
        id="glasscomparestep"
        tabIndex={-1}
        aria-labelledby="glasscomparestepLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "700px" }}>
          <div className="modal-content">
            <div>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="glasscomparestepLabel">
                  Stap voor stap meer vergelijken
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div
                className="modal-body addmorepopup"
                style={{ paddingRight: "70px" }}
              >
                <ul className="list-unstyled checkbox-wrapper-16">
                  <li>
                    <div className="row">
                      <div className="col-4">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cyber-security-3.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-4 text-center">
                        <span>Cybersecurity</span>
                      </div>
                      <div className="col-4 text-end">
                        <label className="checkbox-wrapper">
                          <input type="checkbox" className="checkbox-input" />
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
                          src="/images/job-seeking.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-4 text-center">
                        <span>Arbeidsongeschiktheid</span>
                      </div>
                      <div className="col-4 text-end">
                        <label className="checkbox-wrapper">
                          <input type="checkbox" className="checkbox-input" />
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
                          src="/images/driver.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-4 text-center">
                        <span>Bestuurdersaansprakelijkheid</span>
                      </div>
                      <div className="col-4 text-end">
                        <label className="checkbox-wrapper">
                          <input type="checkbox" className="checkbox-input" />
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
                    <div className="infbx infx-com">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                      >
                        <i className="fas fa-2x fa-info-circle" />
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="popupbtn">
                  <div className="row">
                    <div className="col-4">
                      <a href="#">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/antivirus.png"
                          className="img-fluid"
                        />
                        <span>Risico Scan</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <button className="btnps">Opslaan</button>
                    </div>
                    <div className="col-4">
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
    </>
  );
};

export default LegalCounselFormRightSide;
