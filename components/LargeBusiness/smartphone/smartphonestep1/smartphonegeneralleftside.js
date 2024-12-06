import Image from "next/image";
import React from "react";

const SmartPhoneGeneralLeftSide = ({
  setCount,
  showCompactContent,
  setShowCompactContent,
  showExtendedContent,
  setShowExtendedContent,
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
      <div className="col-lg-6 eventbxleft ">
        <div className="row">
          <div className="col-lg-12">
            <div className="titlecybersecurity mt-0">
              <h2>
                <Image
                  width={186}
                  height={190}
                  src="/images/smartphone.png"
                  alt="aa"
                />
                Smartphone deals
              </h2>
            </div>
          </div>
        </div>
        <div className="form-sec cyberbxleft cyberbxleft2">
          <div className="row">
          <div className="col-11">
          <div className="row">
            <div className="col-lg-6">
              <select className="form-select" aria-label="Select">
                <option selected>Huidige provider </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-lg-6">
              <select className="form-select" aria-label="Select">
                <option selected>Koppelkorting </option>
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
          <div className="row">
            <div className="col">
              <label className="form-label labeltitle">Mobiele data</label>
            </div>
            <div className="col">
              <input type="text" className="form-control " placeholder="1GB" />
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
              <label htmlFor="customRange1" className="form-label">
                <div className="cus-num">
                  <span>€1</span>
                  <span>€2.000.00</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label labeltitle">Bellen/smsen</label>
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
              <label htmlFor="customRange1" className="form-label">
                <div className="cus-num">
                  <span>500 min/sms</span>
                  <span>Onbeperkt</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label labeltitle">Prijsklasse</label>
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
              <label htmlFor="customRange1" className="form-label">
                <div className="cus-num">
                  <span>€1</span>
                  <span>€100</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <select className="form-select" aria-label="Select">
                <option selected>Contract </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-lg-5">
              <select className="form-select" aria-label="Select">
                <option selected>Toestel</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-lg-2">
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
          </div>
          <div className="row">
            <div className="col-lg-5">
              <select className="form-select" aria-label="Select">
                <option selected>Contract </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-lg-5">
              <select className="form-select" aria-label="Select">
                <option selected>Toestel </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-lg-2">
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
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="multiple-user">
              <a href="#" data-bs-toggle="modal" data-bs-target="#smartphone">
                  {" "}
                  <Image width={42} height={42} src="/images/userplusicon.png" alt='aa' />
                  <p className="d-flex"><span className="link-underline-dark text-decoration-underline">Meerdere gebruikers toevoegen.</span>
                  <sup><i class="fas font-14 fa-info-circle"></i> </sup></p>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="rangebtn">
                {showCompactContent && (
                  <button className="seenowbtn" onClick={() => setCount(1)}>Bekijk jouw voordeel</button>
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
        </div>
        {!showExtendedContent && (
          <a href="javascript:void(0);" className="cyberprivacylink">
            <i className="fas fa-2x fa-shield-alt" />
            <span>Privacy</span>
          </a>
        )}
      </div>

      <div
        className="modal fade"
        id="smartphone"
        tabIndex={-1}
        aria-labelledby="smartphoneLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
          <div className="modal-header">
              <div className="row w-100 justify-content-center align-items-center">
                <div className="col text-center">
                  <h5 className="modal-title" id="exampleModalLabel">Meerdere gebruikers <Image src="/images/user3.png" height={100} width={100} alt="user" /> </h5>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
              </div>
            </div>
            <div className="modal-body smart-phone-mod">
              <div className="">
                <p className="text-center">
                  Wijkt dit verbruik af ten opzichten van de andere gebruikers?
                </p>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="a"
                      name="geslacht"
                    />
                    <label htmlFor="Partner" className="pt-3">
                      Ja
                    </label>
                  </div>
                  <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="b"
                      name="geslacht"
                    />
                    <label htmlFor="Kind" className="pt-3">
                      Nee 
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <select className="form-select" aria-label="Select">
                      <option selected>Huidige provider  </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <select className="form-select" aria-label="Select">
                      <option selected>Koppelkorting </option>
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
                <div className="row mt-3">
                  <div className="col">
                    <label className="form-label labeltitle">
                      Mobiele data
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="1GB"
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
                    <label htmlFor="customRange1" className="form-label">
                      <div className="cus-num">
                        <span>€1</span>
                        <span>€2.000.00</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label className="form-label labeltitle">
                    Bellen/smsen
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="1GB"
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
                    <label htmlFor="customRange1" className="form-label">
                      <div className="cus-num">
                        <span>500 min/sms</span>
                        <span>Onbeperkt</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label className="form-label labeltitle">
                    Prijsklasse
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="1GB"
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
                        <span>€100</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-5">
                    <select className="form-select" aria-label="Select">
                      <option selected>Contract </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-lg-5">
                    <select className="form-select" aria-label="Select">
                      <option selected>Toestel</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-lg-2">
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
                </div>
                <div className="row mt-3">
                  <div className="col-lg-5">
                    <select className="form-select" aria-label="Select">
                      <option selected>Contract </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-lg-5">
                    <select className="form-select" aria-label="Select">
                      <option selected>Toestel</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-lg-2">
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
                </div>
                <div className="row mt-3 text-center" >
                  <div className="col-lg-12">
                    <div className="multiple-user">
                      <a
                        href="#"
                       
                      >
                        {" "}
                        <Image width={60} height={60} src="/images/user3.png" alt="aa" />
                        <p>Meerdere gebruikers toevoegen.</p>
                      </a>
                    </div>
                    <a href="#" className="btnps">Opslaan</a>
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

export default SmartPhoneGeneralLeftSide;
