import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";

function Comparisonleftbar() {
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(0);
  const [rangeValue3, setRangeValue3] = useState(35000);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleRangeChange2 = (e) => {
    setRangeValue2(parseInt(e.target.value));
  };
  const handleRangeChange3 = (e) => {
    setRangeValue3(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  const handleInputChange2 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  const handleInputChange3 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>

      <div className="yourdetailsbox">
        <h5>Jouw gegevens:</h5>
        <ul className="infodetails">
          <li>Postcode:</li>
          <li>Huisnummer:</li>
        </ul>
        <div className="yourdetailedit">
          <div className="row">
            <div className="col-lg-6">
              <a href="javascript:void(0);">
                <i className="fas fa-cog" /> Wijzig
              </a>
            </div>
            <div className="col-lg-6 text-end">
              <ul>
                <li>
                  <i className="fas  fa-user" />
                  <span>1/1</span>
                </li>
                <li>
                  <Image width={200} height={200} alt="aa"
                    src="/images/viewpop.png"
                    className="img-fluid"
                  />
                  <span>1/1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cyberbxright steprangeleft glass-stwo-wrp coverage-left-bar">
        <div className="cov-sp">
          <div className="row">
            <div className="col-10 position-relative">
              <h6 className="type-cov">Soort dekking</h6>
              <div className="infbx info-posiiton-glassstepin">
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
            <div className="col">
              <div className="form-check ps-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue
                  id="klantenscore"
                />
                <label className="form-check-label" htmlFor="klantenscore">
                  Gehuurd
                </label>
              </div>
              <div className="form-check ps-0">
                <input
                  className="form-check-input  me-2"
                  type="checkbox"
                  defaultValue
                  id="Windows"
                />
                <label className="form-check-label" htmlFor="Windows">
                   Gekocht
                </label>
              </div>
            </div>
          </div>
          <div className="row d-none">
            <div className="col radiobx">
              <div className="row">
                <div className="col-lg-5 pe-0 col-5">
                  <input type="radio" name="test" id="cb1" />
                  <label htmlFor="cb1">
                    <Image width={200} height={200} alt="aa"
                      src="/images/house-3.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">Gehuurd</span>
                  </label>
                </div>
                <div className="col-lg-5 ps-0 col-5">
                  <input type="radio" name="test" id="cb2" />
                  <label htmlFor="cb2">
                    <Image width={200} height={200} alt="aa"
                      src="/images/house-2.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">Gekocht</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cov-sp">
          <div className="row">
            <div className="col-10 position-relative">
              <h6 className="type-cov">Soort dekking</h6>
              <div className="infbx info-posiiton-glassstepin">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Content Goes Here"
                  data-bs-original-title="Content Goes Here"
                >
                  <i className="fas fa-2x fa-info-circle " />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  defaultValue
                  id="klantenscore"
                />
                <label className="form-check-label" htmlFor="klantenscore">
                   Basis
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input  me-2"
                  type="radio"
                  defaultValue
                  id="Windows"
                />
                <label className="form-check-label" htmlFor="Windows">
                All risk
                </label>
              </div>
            </div>
          </div>
          <div className="row d-none">
            <div className="col radiobx">
              <div className="row">
                <div className="col-lg-5 pe-0 col-5">
                  <input type="radio" name="test" id="rs1" />
                  <label htmlFor="rs1">
                    <a
                      className="info-icon"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas fa-2x fa-info-circle green-cyan" />
                    </a>
                    <Image width={200} height={200} alt="aa"
                      src="/images/homeicon.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">Basis</span>
                  </label>
                </div>
                <div className="col-lg-5 ps-0 col-5">
                  <input type="radio" name="test" id="rs2" />
                  <label htmlFor="rs2">
                    <a
                      className="info-icon"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas fa-2x fa-info-circle green-cyan" />
                    </a>
                    <Image width={200} height={200} alt="aa"
                      src="/images/shield-3.png"
                      className="img-fluid"
                    />
                    <span className="checkbox-label">All risk</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cov-sp2 mb-0">
          <div className="row">
            <div className="col-12 col-lg-9 col-md-9">
              <label className="form-label labeltitle">
                  Verzekerd bedrag
              </label>
            </div>
            <div className="col-lg-3 col-md-3 col-12 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput1"
                min={1}
                max={2000}
                value={rangeValue}
                onChange={handleInputChange}
              />
              <div className="infbx hulp-nodig-position-glass-stwo">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Content Goes Here"
                  data-bs-original-title="Content Goes Here"
                >
                  <i className="fas fa-2x fa-info-circle" />
                </a>
                <a href="javascript:void(0);" className="extra text-center glass-hulp-adj">
                  <i className="fal fa-2x fa-calculator" />
                  <span className="d-block">Hulp nodig?</span>
                </a>
              </div>
            </div>
            <div className="col-12">
              <input
                type="range"
                className="form-range"
                id="customRange1"
                min={1}
                max={2000000}
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <label htmlFor="customRange1" className="form-label">
                <div className="cus-num">
                  <span>€1</span>
                  <span>€200.000</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-9 col-md-9">
              <label className="form-label labeltitle">
                Eigen risico
              </label>
            </div>
            <div className="col-lg-3 col-md-3 col-12 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput2"
                min={0}
                max={300}
                value={rangeValue2}
                onChange={handleInputChange2}
              />
              <div className="infbx ">
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
                id="customRange2"
                min={0}
                max={300}
                value={rangeValue2}
                onChange={handleRangeChange2}
              />
              <label htmlFor="customRange5" className="form-label">
                <div className="cus-num">
                  <span id="rangeValue5">€0</span>
                  <span>€300</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-9 col-md-9">
              <label className="form-label labeltitle">
                 Diefstal
              </label>
            </div>
            <div className="col-lg-3 col-md-3 col-12 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput3"
                min={1}
                max={20}
                value={rangeValue3}
                onChange={handleInputChange3}
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
                id="customRange3"
                min={35000}
                max={250000}
                value={rangeValue3}
                onChange={handleRangeChange3}
              />
              <label htmlFor="customRange5" className="form-label">
                <div className="cus-num">
                  <span id="rangeValue5">€35.000</span>
                  <span>€250.000</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="protectionbx">
        <h5>Aanvullende dekkingen</h5>
      </div>
      <div className="support">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="bankierVeilig"
          />
          <label className="form-check-label" htmlFor="bankierVeilig">
            Inboedel (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="antiDiefstal"
          />
          <label className="form-check-label" htmlFor="antiDiefstal">
            Opstal (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="privacyProtector"
          />
          <label
            className="form-check-label"
            htmlFor="privacyProtector"
          >
            Aansprakelijkheid (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="kindvriendelijkGebruik"
          />
          <label
            className="form-check-label"
            htmlFor="kindvriendelijkGebruik"
          >
            Glasverzekering (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="veiligInternetten"
          />
          <label
            className="form-check-label"
            htmlFor="veiligInternetten"
          >
            Buitenhuisdekking (..)
          </label>
        </div>
      </div>
      <div className="protectionbx">
        <h5>Extra filters</h5>
      </div>
      <div className="support">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="klantenscore"
          />
          <label className="form-check-label" htmlFor="klantenscore">
            Klantenscore (..)
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
            Dagelijksopzegbaar (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="Windows2"
          />
          <label className="form-check-label" htmlFor="Windows2">
            Garantie tegen onderverzekeren (..)
          </label>
        </div>
      </div>
      <div className="protectionbx">
        <h5>Veel gestelde vragen</h5>
      </div>
      <div className="enter-prise-acc support"
        style={{ borderRadius: 0 }}
      >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Vraag 1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fugit voluptatibus natus quod ab necessitatibus.
                Accusantium, ut alias.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Vraag 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Impedit laborum commodi placeat modi beatae
                eveniet iste quisquam eius ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Vraag 3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Impedit laborum commodi placeat modi beatae
                eveniet iste quisquam eius ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Vraag 4
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Impedit laborum commodi placeat modi beatae
                eveniet iste quisquam eius ratione.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Vraag 5
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Impedit laborum commodi placeat modi beatae
                eveniet iste quisquam eius ratione.
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailModal />

    </>
  );
}

export default Comparisonleftbar;
