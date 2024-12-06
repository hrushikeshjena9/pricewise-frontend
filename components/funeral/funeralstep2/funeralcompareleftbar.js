import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";

const FuneralCompareLeftBar = () => {
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
                  <Image width={200} height={200} alt="aa" src="/images/viewpop.png" className="img-fluid" />
                  <span>1/1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cyberbxright steprangeleft coverage-left-bar">
        <div className="cov-sp">
          <div className="row">
            <div className="col">
              <h6 className="type-cov">Uitvaart</h6>
              <div className="infbx">
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
          <div className="row mb-2">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  defaultValue
                  id="klantenscore"
                />
                <label className="form-check-label" htmlFor="klantenscore">
                  Begravenis
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
                 Crematie
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
                 Geen idee
                </label>
              </div>
            </div>
          </div>
          <div className="com-bx-icon mb-3 d-none">
            <a href="#" className="icn-in-bx">
            <a className="info-icon" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
              <i className="fas fa-2x fa-info-circle green-cyan">
              </i>
            </a>
              <Image width={200} height={200} alt="aa" src="/images/burial.jpg" className="img-fluid" />
              <span className="checkbox-label">Begravenis</span>
            </a>

            <a
              href="#"
              className="icn-in-bx"
              data-bs-toggle="modal"
              data-bs-target="#sports"
            >
              <a className="info-icon" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                <i className="fas fa-2x fa-info-circle green-cyan">
                </i>
              </a>
              <Image width={200} height={200} alt="aa" src="/images/cremation.jpg" className="img-fluid" />
              <span className="checkbox-label">Crematie</span>
            </a>

            <a href="#" className="icn-in-bx">
            <a className="info-icon" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
              <i className="fas fa-2x fa-info-circle green-cyan">
              </i>
            </a>
              <Image width={200} height={200} alt="aa" src="/images/no-idea.jpg" className="img-fluid" />
              <span className="checkbox-label">Geen idee</span>
            </a>

          </div>

          <div className="row">
            <div className="col">
              <h6 className="type-cov">Geloofsovertuiging?</h6>
              <div className="infbx">
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
              <div className="form-check">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  defaultValue
                  id="klantenscore"
                />
                <label className="form-check-label" htmlFor="klantenscore">
                  Islam 
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
                  Jodendom
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
                 Christendom
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
                  Anders
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 d-none">
            <div className="col-12 radiobx">
              <div className="com-bx-icon">
                <div className="row">
                  <div className="col-6 pe-0 mb-0">
                    <input type="radio" name="test" id="cbd1" />
                    <label htmlFor="cbd1">
                      <Image width={200} height={200} alt="aa" src="/images/islam.jpg" className="img-fluid" />
                      <span className="checkbox-label">Islam</span>
                    </label>
                  </div>
                  <div className="col-6 ps-0  mb-0">
                  <input type="radio" name="test" id="cbd1f" />
                    <label htmlFor="cbd1f">
                      <Image width={200} height={200} alt="aa" src="/images/judaism.jpg" className="img-fluid" />
                      <span className="checkbox-label">Jodendom</span>
                    </label>
                  </div>
                  <div className="col-6 pe-0">
                    <input type="radio" name="test" id="cbdf1f" />
                    <label htmlFor="cbdf1f">
                      <Image width={200} height={200} alt="aa" src="/images/cristian.jpg" className="img-fluid" />
                      <span className="checkbox-label">Christendom</span>
                    </label>
                  </div>
                  <div className="col-6 ps-0">
                    <input type="radio" name="test" id="cbdf1df" />
                    <label htmlFor="cbdf1df">
                      <Image width={200} height={200} alt="aa" src="/images/no-idea.jpg" className="img-fluid" />
                      <span className="checkbox-label">Anders</span>
                    </label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      

        
      </div>
      <div className="protectionbx">
        <h5>Voorwaarde</h5>
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
            Uitvaart zelf regelen  (..)
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
            Uitvaart laten regelen  (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="privacyProtector"
          />
          <label className="form-check-label" htmlFor="privacyProtector">
            Vrij te besteden bedrag  (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="kindvriendelijkGebruik"
          />
          <label className="form-check-label" htmlFor="kindvriendelijkGebruik">
            Indexeren  (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="veiligInternetten"
          />
          <label className="form-check-label" htmlFor="veiligInternetten">
            Gratis kindverzekering (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="veiligInternetten"
          />
          <label className="form-check-label" htmlFor="veiligInternetten">
           Wereldwijd gedekt (..)
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
              Vrije keuze uitvaarverzorger (..)
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
               Diensten (..)
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
              Geld (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="klantenscore"
          />
          <label className="form-check-label" htmlFor="klantenscore">
            Klantenscore: (..)
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
            id="Windows2"
          />
          <label className="form-check-label" htmlFor="Windows2">
          Betalen tot overlijden (..)
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
          Betalen tot 65 jaar (..)
          </label>
        </div>
        <div className="form-check mt-3">
          <div className="row">
            <div className="col-7">
              <label className="form-label labeltitle">Verzekerd bedrag</label>
            </div>
            <div className="col-7 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput1"
                min={1}
                defaultValue={1}
              />
              <div className="infcalcubx hulpNinfo-position">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Content Goes Here"
                  data-bs-original-title="Content Goes Here"
                >
                  <i className="fas fa-2x fa-info-circle" />
                </a>
                <a href="javascript:void(0);" className="extra">
                  <i className="fal fa-2x fa-calculator" />
                  <span>Hulp nodig?</span>
                </a>
              </div>
            </div>
            <div className="col-7">
              <input
                type="range"
                className="form-range"
                id="customRange1"
                min={1}
                max={2}
                defaultValue={1}
              />
              <label htmlFor="customRange1" className="form-label">
                <div className="cus-num">
                  <span>€1</span>
                  <span>€20.000</span>
                </div>
              </label>
            </div>
          </div>
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
      <MailModal />
    </>
  );
};

export default FuneralCompareLeftBar;
