import React from "react";
import Image from "next/image";

const LegalCounselAovModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="aov"
        tabIndex={-1}
        aria-labelledby="aovModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="aovModalLabel">
                Arbeidsongeschikt Selecteer of vul in
                <Image
                  width={200}
                  height={200}
                  alt="aa"
                  src="/images/job-seeking.png"
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
                        <option selected>Langlopende uitkeringsduur </option>
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
                    <div className="glass-form-input">
                      <div className="row">
                        <div className="col">
                          <label className="form-label labeltitle">
                            Brutto omzet
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
                              <span>1900</span>
                              <span>2018</span>
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
                    <div className="glass-form-input">
                      <div className="row">
                        <div className="col">
                          <label className="form-label labeltitle">
                            Zonder uitkering
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
                            Eindleeftijd
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
                          <span>Totaal verzekerd bedrag: € 4.000</span>
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

export default LegalCounselAovModal;
