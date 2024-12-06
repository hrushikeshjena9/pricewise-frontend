import React from "react";
import Image from "next/image";

const LegalCounselDriver = () => {
  return (
    <>
      <div
        className="modal fade"
        id="driver"
        tabIndex={-1}
        aria-labelledby="driverModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "800px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="driverModalLabel">
                Bestuurdersaansprakelijkheid Selecteer of vul in
                <Image
                  width={200}
                  height={200}
                  alt="aa"
                  src="/images/driver.png"
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
                      <div className="row">
                        <div className="col">
                          <label className="form-label labeltitle">
                            Bezittingen
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
                            Oprichtingsdatum
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
                            Netto omzet
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
                    <div className="driver-rightbx">
                      <div className="row">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            id
                            name
                            className="form-control"
                            placeholder="Meeverzekeren?"
                          />
                          <div className="driver-right">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Content Goes Here"
                            >
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <a href="javascript:void(0);" className="extra">
                              <i className="far fa-2x fa-check-square" />
                              <span>Toevoegen</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3">
                          <label>Wie?</label>
                        </div>
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
                      </div>
                      <div className="row">
                        <div className="col-lg-3">
                          <label>Geslacht</label>
                        </div>
                        <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
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
                        <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
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
                      </div>
                      <div className="row">
                        <div className="col">
                          <input type="date" id name className="form-control" />
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

                          <div
                            className="driver-right"
                            style={{ right: "-51px" }}
                          >
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
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                          <div
                            className="driver-right"
                            style={{ right: "-51px" }}
                          >
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Content Goes Here"
                            >
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                            {/* <a href="javascript:void(0);" className="extra ">
                              <i className="fas fa-2x fa-user-plus" />
                              <span>Extra?</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="user-bx">
                            <Image
                              width={128}
                              height={128}
                              alt="aa"
                              src="/images/user.png"
                              className="img-fluid"
                            />
                            <span>ZZPer (1)</span>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="user-bx">
                            <Image
                              width={128}
                              height={128}
                              alt="aa"
                              src="/images/user-2.png"
                              className="img-fluid"
                            />
                            <span>MKB (2-20)</span>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="user-bx">
                            <Image
                              width={128}
                              height={128}
                              alt="aa"
                              src="/images/crowd-of-users.png"
                              className="img-fluid"
                            />
                            <span>Grootzakelijk</span>
                          </div>
                          <div className="driver-right" style={{right: '-51px'}}>
  <a href="javascript:void(0);" className="extra ">
    <i className="fas fa-2x fa-user-plus" />
    <span>Extra?</span>
  </a>
</div>

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
                          <span>Totaal verzekerd bedrag: € 500.000</span>
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

export default LegalCounselDriver;
