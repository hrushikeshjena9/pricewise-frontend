import Image from "next/image";
import React from "react";
import TooltipInitialise from "../../common/TooltipInitialise";

const TravelRightSideForm = ({ setCount, setExtendedForm }) => {
  return (
    <>
      <div className="col-lg-6 cyberbxleft pt-4 cyberbxright">
        <TooltipInitialise/>
        <div className="row">
          <div className="col-10">
            <div className="form-sec">
              <div className="row">
                <div className="col-lg-12">
                  <label className="form-control">
                    Aanvullende verzekeringen
                  </label>
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
                    <a
                      href="javascript:void(0);"
                      role="button"
                      className="calculatorwrp"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fas fa-calculator  green-cyan"></i>
                      <span className=" green-cyan">Hulp nodig?</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col radiobx travel-insurance-bx">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <button className="icn-in-bx tooltip-container btn-clickwt-border">
                      <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title=" Zakenreizen"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/business-travel.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zakenreizen</span>
                        <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Zakenreizen</p>
                    </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button className="icn-in-bx tooltip-container btn-clickwt-border"
                        data-bs-toggle="modal"
                        data-bs-target="#sports"
                      >
                         <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title=" Sportreizen"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/sports-travel.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Sportreizen</span>
                        <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Sportreizen</p>
                    </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button className="icn-in-bx tooltip-container btn-clickwt-border">
                      <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title=" Annulerings  verzekering"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cancelation-insurance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Annulerings <br /> verzekering
                        </span>
                        <div className="d-flex justify-content-center">
                      <p className="tooltip-text"> Annulerings  verzekering</p>
                    </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button className="icn-in-bx tooltip-container btn-clickwt-border">
                      <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Zorgkosten"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/heathcare-cost.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zorgkosten</span>
                        <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Zorgkosten</p>
                    </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button className="icn-in-bx tooltip-container btn-clickwt-border">
                      <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Voertuighulp"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/vehicle-assitance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Voertuighulp</span>
                        <div className="d-flex justify-content-center">
                      <p className="tooltip-text"> Voertuighulp</p>
                    </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button
                        className="icn-in-bx tooltip-container btn-clickwt-border"
                        data-bs-toggle="modal"
                        data-bs-target="#study"
                      >
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Studie/stage"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/study.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Studie/stage</span>
                        <div className="d-flex justify-content-center">
                      <p className="tooltip-text"> Studie/stage</p>
                    </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button className="icn-in-bx tooltip-container btn-clickwt-border">
                      <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Invalide & Overlijden"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/invalid-die.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Invalide & <br />
                          Overlijden
                        </span>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text"> Invalide & Overlijden</p>
                        </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button
                        className="icn-in-bx tooltip-container btn-clickwt-border"
                        data-bs-toggle="modal"
                        data-bs-target="#iconbxcash"
                      >
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Contant geld"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cash.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Contant geld</span>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text"> Contant geld</p>
                        </div>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <button
                        className="icn-in-bx tooltip-container btn-clickwt-border"
                        data-bs-toggle="modal"
                        data-bs-target="#icnbx1"
                      >
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Bagage"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/baggage.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Bagage</span>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text"> Bagage</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <select className="form-select" aria-label="Select">
                    <option selected>Aanbevolen verzekeringen</option>
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
                  <div className="frm-toevoe-position text-center">
                    <a
                      href="javascript:void(0);"
                     
                    >
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/viewpop.png"
                      />
                      <span>Overzicht?</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row radiobx mb-3">
                <div className="col-lg-4 pe-md-0">
                  <input type="radio" name="test" id="ws1" />
                  <label htmlFor="ws1" className="tooltip-container">
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/living.jpg"
                      className="img-fluid"
                    />
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Woon"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <span className="checkbox-label">Woon</span>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Woon</p>
                    </div>
                  </label>
                </div>
                <div className="col-lg-4 p-md-0">
                  <input type="radio" name="test" id="ws2" />
                  <label htmlFor="ws2" className="tooltip-container">
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/vehicle-road.jpg"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">
                      Voertuigen
                    </span>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Voertuigen"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Voertuigen</p>
                    </div>
                  </label>
                </div>
                <div className="col-lg-4 ps-md-0">
                  <input type="radio" name="test" id="ws3" />
                  <label htmlFor="ws3" className="tooltip-container">
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/warning.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label pt-2">
                      Ongevallen
                    </span>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Ongevallen"
                      className="info-in-risk hide-info-desktop"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                    <div className="d-flex justify-content-center">
                      <p className="tooltip-text">Ongevallen</p>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <a href="#" onClick={() => setCount(1)} className={"btn-one"}>
                  Bekijk jouw voordeel
                </a>
                <br />
                {/* <a className='fw-medium text-dark minimize-form mt-4 d-block' onClick={() => setExtendedForm(0)}>Uitgebreid Vergelijken</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="privacy-ab mb-4">
          <a href="javascript:void(0);">
            <i className="fas fa-2x fa-shield-alt" />
            <span>Privacy</span>
          </a>
        </div>
      </div>

      {/* Icon Box Modal baggage  */}
      <div
        className="modal fade"
        id="icnbx1"
        tabIndex={-1}
        aria-labelledby="icnbx1Label"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body glass-box-modal">
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  <h1 className="modal-title fs-5" id="liabilstepLabel">
                    Selecteer en vul in
                  </h1>
                </div>
                <div className="col-auto">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/baggage.jpg"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close close-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="row">
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
                            <span>€1.000</span>
                            <span>€25.000</span>
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
                          Eigen risico
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
                            <span>€0</span>
                            <span>€300</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 radiobx">
                  <h4 className="text-center mb-3">Aanbevolen</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cancelation-insurance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Annulerings <br /> verzekering
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/heathcare-cost.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zorgkosten</span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/vehicle-assitance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Voertuighulp</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4 ">
                  <div className="popupbtn">
                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
                      </div>
                    </div>
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

      {/* Icon Box Modal cash  */}
      <div
        className="modal fade"
        id="iconbxcash"
        tabIndex={-1}
        aria-labelledby="iconbxcashLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body glass-box-modal">
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  <h1 className="modal-title fs-5" id="liabilstepLabel">
                    Selecteer en vul in
                  </h1>
                </div>
                <div className="col-auto">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/cash.jpg"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close close-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="row">
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
                            <span>€250</span>
                            <span>€500</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radiobx">
                  <h4 className="text-center mb-3">Aanbevolen</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cancelation-insurance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Annulerings <br /> verzekering
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/heathcare-cost.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zorgkosten</span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/vehicle-assitance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Voertuighulp</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="popupbtn">
                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
                      </div>
                    </div>
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

      {/* Icon Box Modal Sports  */}
      <div
        className="modal fade"
        id="sports"
        tabIndex={-1}
        aria-labelledby="sportsLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body glass-box-modal">
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  <h1 className="modal-title fs-5" id="liabilstepLabel">
                    Selecteer
                  </h1>
                </div>
                <div className="col-auto">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/sports-travel.jpg"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close close-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/dan-sports.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Gevaarlijke sporten
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/winter.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Wintersport</span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/underwater-sports.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Onderwatersport</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radiobx">
                  <h4 className="text-center mb-3">Aanbevolen</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cancelation-insurance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Annulerings <br /> verzekering
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/heathcare-cost.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zorgkosten</span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/vehicle-assitance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Voertuighulp</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="popupbtn justify-contentent-ceonter">
                    <div className="row">
                      <div className="col-lg-12">
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
                      </div>
                    </div>
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

      {/* Icon Box Modal Study  */}
      <div
        className="modal fade"
        id="study"
        tabIndex={-1}
        aria-labelledby="sportsLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body glass-box-modal">
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  <h1 className="modal-title fs-5" id="liabilstepLabel">
                    Selecteer js keuze
                  </h1>
                </div>
                <div className="col-auto">
                  <Image
                    width={50}
                    height={50}
                    alt="aa"
                    src="/images/study.jpg"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close close-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="row justify-content-center">
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/study.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Stage</span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/study2.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Studie</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radiobx">
                  <h4 className="text-center mb-3">Aanbevolen</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/cancelation-insurance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">
                          Annulerings <br /> verzekering
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/heathcare-cost.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zorgkosten</span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#" className="icn-in-bx">
                        <a className="info-icon" href="javascript:void(0);">
                          <i className="fas fa-2x fa-info-circle  green-cyan" />
                        </a>
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/vehicle-assitance.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Voertuighulp</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="popupbtn justify-content-center">
                    <div className="row">
                      <div className="col-lg-12">
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
                      </div>
                    </div>
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

      {/* Calculator Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="glasscomparestepLabel">
                Controleer of pas aan
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body addmorepopup">
              <ul className="list-unstyled checkbox-wrapper-16">
                <li>
                  <div className="row">
                    <div className="col-4">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/business-travel.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Zakenreizen</span>
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
                        src="/images/sports-travel.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Sportreizen</span>
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
                        src="/images/cancelation-insurance.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Annuleringsverzekering</span>
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
                        src="/images/heathcare-cost.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Zorgkosten</span>
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
                        src="/images/vechicle.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Voertuighulp</span>
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
                        src="/images/books.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <span>Studie / Stage</span>
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
                    {/* <a href='javascript:void(0);' className='text-warning fw-bold d-block' >Uitgebreid vergelijken</a> */}
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
    </>
  );
};

export default TravelRightSideForm;
