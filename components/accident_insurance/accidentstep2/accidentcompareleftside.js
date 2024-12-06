import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";

function AccidentCompareLeftSide() {
  const [rangeValue, setRangeValue] = useState(1);
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
                  <Image width={200} height={200} alt="aa" src="/images/viewpop.png" className="img-fluid" />
                  <span>1/1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="protectionbx">
        <h5>Dekking</h5>
      </div>
      <div className="support">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
            Binnenshuis (..)
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
            Buitenshuis (..)
          </label>
        </div>
      </div>
      <div className="cyberbxright steprangeleft">
        <div className="row">
          <div className="col">
            <label className="form-label labeltitle">Verzekerd bedrag</label>
          </div>
          <div className="col">
            <input type="number" className="form-control " id="numberInput1" min={1} max={150}
              value={rangeValue}
              onChange={handleInputChange} />
            <div className="infbx">
              <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                <i className="fas fa-2x fa-info-circle" />
              </a>
            </div>
          </div>
          <div className="col-12">
            <input type="range" className="form-range" id="customRange1" min={1} max={150} value={rangeValue}
              onChange={handleRangeChange} />
            <label htmlFor="customRange1" className="form-label" />
            <div className="cus-num"><span>€1</span><span>€150.000</span></div>
          </div>
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
      </div>


      <div className="protectionbx">
        <h5>Energise Regelt</h5>
      </div>
      <div className="enter-prise-acc support" style={{ borderRadius: 0 }}>
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
                Aanbod op maat
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                voluptatibus natus quod ab necessitatibus. Accusantium, ut
                alias.
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
                Stappenplan
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
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
                Unieke deals
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
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
                Duidelijkheid
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
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
                Service
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                laborum commodi placeat modi beatae eveniet iste quisquam eius
                ratione.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="emaildeal">
        <a href="javascript:void(0);">
          <Image width={200} height={200} alt="aa" src="/images/mail.png" className="img-fluid" /> Mail mijn deals
        </a>
      </div> */}
      <MailModal />
    </>
  );
}

export default AccidentCompareLeftSide;
