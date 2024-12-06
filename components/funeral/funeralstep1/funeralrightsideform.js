import Image from "next/image";
import React, { useState } from "react";
import TooltipInitialise from "../../common/TooltipInitialise";

const FuneralRightSideForm = ({ setCount, setExtendedForm }) => {
  const [rangeValue, setRangeValue] = useState(35);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <div className="col-lg-6 cyberbxleft cyberbxright py-3 ">
        <TooltipInitialise/>
        <div className="row">
          <div className="col-10 mt-4">
            <div className="form-sec">
              <div className="row">
                <div className="col-lg-12">
                  <label className="form-control">Uitvaart</label>
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
              <div className="row funeral-bx">
                <div className="col radiobx">
                  <div className="row">

                    <div className="col-lg-4">

                      <button  className="icn-in-bx btn-clickwt-border tooltip-container">
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/burial.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Begravenis</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Begravenis"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Begravenis</p>
                        </div>

                      </button>
                    </div>

                    <div className="col-lg-4">
                      <button

                        className="icn-in-bx btn-clickwt-border tooltip-container"
                        data-bs-toggle="modal"
                        data-bs-target="#sports"
                      >
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/cremation.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Crematie</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Crematie"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Crematie</p>
                        </div>
                      </button>
                    </div>
                    <div className="col-lg-4">
                      <button className="icn-in-bx btn-clickwt-border tooltip-container">
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/no-idea.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Geen idee</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Geen idee"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Geen idee</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <label className="form-control">Geloofsovertuiging</label>
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
              <div className="row religion-box">
                <div className="col radiobx">
                  <div className="row">
                    <div className="col-lg-3">
                      <button className="icn-in-bx btn-clickwt-border tooltip-container">
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/islam.jpg"
                          className="img-fluid"
                        />
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Islam"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>

                        <span className="checkbox-label">Islam</span>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Islam</p>
                        </div>
                      </button>
                    </div>
                    <div className="col-lg-3">
                      <button href="#" className="icn-in-bx btn-clickwt-border tooltip-container">
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/judaism.jpg"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Jodendom</span>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Jodendom"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Jodendom</p>
                        </div>
                      </button>
                    </div>
                    <div className="col-lg-3">
                      <button href="#" className="icn-in-bx btn-clickwt-border tooltip-container">
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/cristian.jpg"
                          className="img-fluid"
                        />
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Christendom"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Christendom</p>
                        </div>
                        <span className="checkbox-label">Christendom</span>
                      </button>
                    </div>
                    <div className="col-lg-3">
                      <button href="#" className="icn-in-bx btn-clickwt-border tooltip-container">
                        <Image
                          width={74}
                          height={76}
                          alt="asd"
                          src="/images/no-idea.jpg"
                          className="img-fluid"
                        />
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Anders"
                          className="info-in-risk hide-info-desktop"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                        <span className="checkbox-label">Anders</span>
                        <div className="d-flex justify-content-center">
                          <p className="tooltip-text">Anders</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <label className="form-control">Intoxaties</label>
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
              <div className="row mt-2">
                <div className="col-lg-3 mt-1">
                  <label>Wat?</label>
                </div>
                <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Partner"
                    name="geslacht"
                  />
                  <label htmlFor="Partner">
                    Roken <i className="fal fa-smoking cl-sky"></i>
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
                    Alcohol <i className="fas fa-wine-bottle cl-orange"></i>
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <label className="form-label labeltitle">
                    Totaal Verzekerd bedrag
                  </label>
                </div>
                <div className="col-4">
                  <input
                    type="number"
                    className="form-control "
                    id="numberInput1"
                    min={35}
                    max={250}
                    value={rangeValue}
                    onChange={handleInputChange}
                  />
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
                      className="calculatorwrp extra"
                      data-bs-toggle="modal"
                      data-bs-target="#sports"
                    >
                      <i className="fas fa-calculator  green-cyan"></i>
                      <span className=" green-cyan">Hulp nodig?</span>
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    min={35}
                    max={250}
                    value={rangeValue}
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="customRange1" className="form-label">
                    <div className="cus-num">
                      <span>€35.000</span>
                      <span>€250.000</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="rangebtn">
                  <button className="seenowbtn" onClick={() => setCount(1)}>
                    Bekijk jouw voordeel
                  </button>
                  <a onClick={() => setExtendedForm(0)}>
                    Toch snel vergelijken?
                  </a>
                </div>
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
      {/* Icon Box Modal Study  */}
      <div
        className="modal fade funeral-sec-mod"
        id="sports"
        tabIndex={-1}
        aria-labelledby="sportsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="liabilstepLabel">
                Selecteer of vul in
              </h1>
              <i className="fal fa-2x fa-calculator"></i>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="funeral-modal-bx">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Hoeveel personen denk je dat er verwacht wordt op jouw begravenis?"
                      />
                      <i className="fas fa-info"></i>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Geen idee
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="row">
                      <div className="col">
                        <label className="form-label labeltitle">
                          Totaal Verzekerd bedrag
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
                            <span>€35.000</span>
                            <span>€250.000</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-5">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je in Nederland begraven worden?"
                      />
                      <div className="yes-no-btn">
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/yes.jpg"
                          />
                        </a>
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/no.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je een uitvaartstoet?"
                      />
                      <div className="yes-no-btn">
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/yes.jpg"
                          />
                        </a>
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/no.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="fn-input-info">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="fn-input-info mb-3">
                      <input
                        className="form-control"
                        placeholder="Welke land, plaats of gemeente?"
                      />
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je een particulier graf?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="yes-no-btn">
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/yes.jpg"
                          />
                        </a>
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/no.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je gehuurde voertuigen?"
                      />
                      <div className="yes-no-btn">
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/yes.jpg"
                          />
                        </a>
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/no.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="fn-input-info">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je een gekerft grafsteen?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="yes-no-btn">
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/yes.jpg"
                          />
                        </a>
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/no.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="fn-input-info">
                      <input
                        className="form-control"
                        placeholder="Wil je transport op locatie ?"
                      />
                      <i className="fas fa-info"></i>
                      <div className="yes-no-btn">
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/yes.jpg"
                          />
                        </a>
                        <a href="#" className="rd-yes">
                          <Image
                            width={74}
                            height={76}
                            alt="asd"
                            src="/images/no.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="fn-input-info">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="popupbtn">
                    <div className="row">
                      <div className="col-lg-12">
                        <span>Totaal verzekerd bedrag: € 9.245</span>
                        <a href="#" className="btnps">
                          Opslaan
                        </a>
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
    </>
  );
};

export default FuneralRightSideForm;
