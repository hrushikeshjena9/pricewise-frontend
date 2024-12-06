import Image from "next/image";
import React, { useState } from "react";

const FuneralLeftSideForm = ({ setExtendedForm, extendedForm }) => {
  const [showCoInsure, setShowCoInsure] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-9">
          <div className="form-sec">
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
                  <option selected>Uitvaartverzekering </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="col-lg-6">
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
                    aria-label="Content Goes Here"
                    data-bs-original-title="Content Goes Here"
                  >
                    <i className="fas fa-2x fa-info-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-nowrap">
                <table className="table top-gender-table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <label>Geslacht</label>
                      </td>
                      <td>
                        <div className="radio-icon top-man">
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
                        <div className="radio-icon top-vrouw-funeral">
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
                <label className="form-control">
                  Heb/had je een chronische ziekten?
                </label>
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
            <div className="row justify-content-center radiobx mt-1">
              <div className="col-lg-4 col-md-4">
                <input type="radio" name="test" id="cb1" />
                <label htmlFor="cb1">
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/yes.jpg"
                    className="img-fluid"
                  />
                  <span className="checkbox-label">Ja</span>
                </label>
              </div>
              <div className="col-lg-4 col-md-4">
                <input type="radio" name="test" id="cb2" />
                <label htmlFor="cb2">
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/no.jpg"
                    className="img-fluid"
                  />
                  <span className="checkbox-label">Nee</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label className="form-control">
                  Zo ja, welke chronische ziekten?
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
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-12">
                <select className="form-select" aria-label="Select">
                  <option selected>Type of kies welke aandoening</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12">
                <label className="form-control">Meeverzekeren</label>
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
                    onClick={() => setShowCoInsure(!showCoInsure)}
                  />
                  <div className="form-check-label d-block fw-bold">
                    <label
                      htmlFor="flexCheckDefault"
                      className="form-check-label d-block fw-bold green-cyan"
                    >
                      Toevoegen
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {showCoInsure && (
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table bottom-gender-table table-borderless text-nowrap">
                      <tbody>
                        <tr>
                          <td>
                            <label>Wie?</label>
                          </td>
                          <td>
                            <div className="radio-icon position-partner rd-df-icon text-nowrap">
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
                            <div className="radio-icon position-kind rd-df-icon text-nowrap">
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
                            <div className="radio-icon rd-df-icon positon-man text-nowrap">
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
                            <div className="radio-icon position-women rd-df-icon text-nowrap">
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
              </>
            )}

            <div className="row">
              <div className="col-lg-6">
                <select className="form-select" aria-label="Select">
                  <option selected>Uitvaartverzekering </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="col-lg-6">
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
                <div className="infcalcubx extra-pos">
                  <a href="javascript:void(0);" className="extra">
                    <i className="fas fa-2x fa-user-plus" />
                    <span>Extra?</span>
                  </a>
                </div>
              </div>
            </div>

            {extendedForm == 0 && (
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="rangebtn">
                    <button className="seenowbtn">Bekijk jouw voordeel</button>
                    <a onClick={() => setExtendedForm(1)}>
                      Uitgebreid vergelijken
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {extendedForm == 0 && (
        <a className="cyberprivacylink">
          <i className="fas fa-2x fa-shield-alt" />
          <span>Privacy</span>
        </a>
      )}
    </>
  );
};

export default FuneralLeftSideForm;
