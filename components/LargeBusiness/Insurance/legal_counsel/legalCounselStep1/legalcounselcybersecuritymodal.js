import React from "react";
import Image from "next/image";

const LegalCounselCyberSecurityModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="cybersecurity"
        tabIndex={-1}
        aria-labelledby="cybersecurityModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="cybersecurityModalLabel">
                Cybersecurity Selecteer of vul in
                <Image
                  width={200}
                  height={200}
                  alt="aa"
                  src="/images/cyber-security-3.png"
                  className="img-fluid"
                />
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="modal-body glass-box-modal">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="glass-form-input">
                      <select className="form-select" aria-label="Select">
                        <option selected>Soort dekking </option>
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
                  <div className="col-lg-12">
                    <div className="row mb-3">
                      <div className="col-lg-3">
                        <a href="#" className="icn-in-bx">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/passport.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">Basis</span>
                        </a>
                      </div>
                      <div className="col-lg-3">
                        <a
                          href="#"
                          className="icn-in-bx"
                          data-bs-toggle="modal"
                          data-bs-target="#sports"
                        >
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/passport.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">Aanvullend</span>
                        </a>
                      </div>
                      <div className="col-lg-3">
                        <a href="#" className="icn-in-bx">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/film2.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">Media</span>
                        </a>
                      </div>
                      <div className="col-lg-3">
                        <a href="#" className="icn-in-bx">
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/browser.png"
                            className="img-fluid"
                          />
                          <span className="checkbox-label">PCI-DSS</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="glass-form-input">
                      <div className="row">
                        <div className="col">
                          <label className="form-label labeltitle">
                            Bruto omzet
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
                        <div className="col-12">
                          <input
                            type="range"
                            className="form-range"
                            id="customRange1"
                            min={1}
                            max={20000}
                            defaultValue={1}
                          />
                          <label
                            htmlFor="customRange1"
                            className="form-label"
                            style={{ width: "100%" }}
                          >
                            <div className="cus-num">
                              <span>
                                0 m<sup>3</sup>
                              </span>
                              <span>
                                10.000 m<sup>3</sup>
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="glass-form-input">
                      <div className="row">
                        <div className="col">
                          <label className="form-label labeltitle">
                            Verzekerd bedrag
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
                        <div className="col-12">
                          <input
                            type="range"
                            className="form-range"
                            id="customRange1"
                            min={1}
                            max={20000}
                            defaultValue={1}
                          />
                          <label
                            htmlFor="customRange1"
                            className="form-label"
                            style={{ width: "100%" }}
                          >
                            <div className="cus-num">
                              <span>
                                0 m<sup>3</sup>
                              </span>
                              <span>
                                10.000 m<sup>3</sup>
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="popupbtn">
                      <div className="row">
                        <div
                          className="col-lg-8"
                          style={{ textAlign: "right" }}
                        >
                          <span>Totaal verzekerd bedrag: € 10.000</span>
                          <a href="#" className="btnps">
                            Opslaan
                          </a>
                        </div>
                        <div className="col-lg-4">
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
      </div>
    </>
  );
};

export default LegalCounselCyberSecurityModal;
