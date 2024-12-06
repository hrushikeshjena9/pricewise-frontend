import React from "react";
import Image from "next/image";
import MailModal from "../../../../CommonModals/MailModal";

const BuildingInsuComparisionLeftbarStep2 = () => {
  return (
    <>
      <div className="yourdetailsbox">
        <h5>Jouw gegevens:</h5>
        <ul className="infodetails">
          <li>Vergelijking</li>
          <li>Postcode:</li>
          <li>Huisnummer:</li>
          <li>Geboortedatum</li>
          <li>Bedrijfsgrootte</li>
          <li>Pand</li>
        </ul>
        <div className="yourdetailedit">
          <div className="row">
            <div className="col-lg-6">
              <a href="javascript:void(0);">
                <i className="fas fa-cog" /> Wijzig
              </a>
            </div>
            <div className="col-lg-6 wiz-bz">
              <ul>
                <li>
                  <i className="fas  fa-user" />
                  <span>1/1</span>
                </li>
                <li>
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
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

      <div className="steprangeleft coverage-left-bar">
        <div className="protectionbx">
          <h5>
            <i className="fas fa-cog"></i> Dekking
          </h5>
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
              Basis (..)
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
              Allrisk (..)
            </label>
          </div>
        </div>

        <div className="cov-sp2">
          <div className="row mt-4">
            <div className="col-10">
              <label className="form-label labeltitle">Verzekerd bedrag</label>
            </div>
            <div className="col-10 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput2"
                min={1}
                defaultValue={10}
              />
              <div className="infcalcubx frm-info-absolute">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Content Goes Here"
                >
                  <i className="fas fa-2x fa-info-circle" />
                </a>
              </div>
              <div className="frm-toevoe-position text-center">
                <a
                  href="javascript:void(0);"
                  role="button"
                  className="calculatorwrp"
                >
                  <i className="fas fa-calculator"></i>
                  <span>Hulp nodig?</span>
                </a>
              </div>
            </div>
            <div className="col-10">
              <input
                type="range"
                className="form-range"
                id="customRange2"
                min={1}
                max={100}
                defaultValue={10}
              />
              <label htmlFor="customRange2" className="form-label">
                <div className="cus-num">
                  <span>€100.00</span>
                  <span>€2.000.00</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col col-10">
              <label className="form-label labeltitle">Eigen risico</label>
            </div>
            <div className="col col-10">
              <input
                type="number"
                className="form-control "
                id="numberInput1"
                min={1}
                defaultValue={1}
              />
              <div className="infcalcubx frm-info-absolute ">
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
            <div className="col-10">
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
                  <span>€0</span>
                  <span>€300</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    
        <div className="protectionbx">
          <h5>
            <i className="fas fa-cog"></i> Aanbevolen verzekeringen
          </h5>
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
            Bedrijfschade (..)
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
            Glasverzekering (..)
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
            Bedrijfsaansprakelijkheid (..)
            </label>
          </div>
        </div>
        <div className="protectionbx">
          <h5>
            <i className="fas fa-cog"></i> Extra filters
          </h5>
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
      <div className="support">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Aanbod op maat
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Aanbod op maat</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Aanvraag
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Aanvraag</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
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
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Unieke deals</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Duidelijkheid
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Duidelijkheid</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Service
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content for Service</div>
            </div>
          </div>
        </div>
      </div>
      <MailModal />
    </>
  );
};

export default BuildingInsuComparisionLeftbarStep2;
