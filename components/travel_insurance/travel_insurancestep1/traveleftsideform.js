import Image from "next/image";
import React from "react";

const TraveLeftSideForm = ({ setExtendedForm, extendedForm }) => {
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
                  <option selected>Reisverzekering </option>
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

            <div className="col-lg-3 col-md-3">
                <label>Geslacht</label>
            </div>
              <div className="col-lg-4 col-md-4 radio-icon">
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
              <div className="col-lg-5 col-md-5 radio-icon">
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
                <label className="form-control">Gezinssamenstelling</label>
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
             <div className="col-lg-3 col-md-3">
              <label>Wie?</label>
             </div>
              <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
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
              <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
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
             <div className="col-lg-3 col-md-3">
                 <label>Hoeveel?</label>
             </div>
              <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
                <div className="form-num">
                  <input
                    className="form-control"
                    type="number"
                    id="man2"
                    name="geslacht"
                  />
                  <i className="fas fa-male"></i>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
                <div className="form-num">
                  <input
                    className="form-control"
                    type="number"
                    id="man2"
                    name="geslacht"
                  />
                  <i className="fas fa-male"></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label className="form-control mb-2">
                  Dekkingsgebied &amp; reisduur?
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

            <div className="row mt-3">
	<div className="col-lg-3 col-md-3">
  <label>Waar?</label>
	</div>
  <div className="col-lg-4 col-md-4 radio-icon rd-fnt-icon">
    <input
      className="form-check-input"
      type="radio"
      id="Partner"
      name="wear"
    />
    <label htmlFor="Partner">
      Europa{" "}
      <Image
        width={200}
        height={200}
        alt="aa"
        src="/images/european-union.png"
      />
    </label>
              </div>
              <div className="col-lg-5 col-md-5 radio-icon rd-fnt-icon">
                <input
                  className="form-check-input"
                  type="radio"
                  id="Kind"
                  name="wear"
                />
                <label htmlFor="Kind">
                  Wereld{" "}
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/globe.png"
                  />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <label>Hoelang?</label>
              </div>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  id="Partner"
                  name="wear"
                  placeholder="60 dagen"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <label className="form-control mb-2">Ingangsdatum reis</label>
              </div>
              <div className="col-lg-6">
                <label className="form-control mb-2">Einddatum reis</label>
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
              <div className="col-lg-6">
                <input type="date" id name className="form-control" />
              </div>
              <div className="col-lg-6">
                <input type="date" id name className="form-control" />
              </div>
            </div>
            {extendedForm == 0 && (
              <>
                <div className="row mt-4">
                  <div className="col-lg-12">
                    <div className="rangebtn">
                      <button
                        className="seenowbtn"
                        onClick={() => setExtendedForm(1)}
                      >
                        Start vergelijking
                      </button>
                    </div>
                  </div>
                </div>
              </>
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

export default TraveLeftSideForm;
