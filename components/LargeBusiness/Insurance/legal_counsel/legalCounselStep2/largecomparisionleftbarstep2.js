import React from "react";
import Image from "next/image";
import MailModal from "../../../../CommonModals/MailModal";

const LargeComparisionLeftbarStep2 = () => {
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
            <li>Branche</li>
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
                  <i className="fas  fa-map" />
                  <span>1/1</span>
                </li>
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
      <div className="support">
        <h5>Aanvullende dekking</h5>
        
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
          Incassobijstand (..)
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
          Bedrijfsvoering (..)
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
          Arbeidsrecht (..)
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
          Overheid (..)
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
          Vastgoed (..)
          </label>
        </div>
      </div>
      <div className="cyberbxright steprangeleft coverage-left-bar">
       
        
        <div className="cov-sp2">
          
          <div className="row">
            <div className="col-8">
              <label className="form-label labeltitle">Aantal vestigingen</label>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control "
                id="numberInput3"
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
                id="customRange3"
                min={1}
                max={20}
                defaultValue={1}
              />
              <label htmlFor="customRange3" className="form-label">
                <div className="cus-num">
                  <span>1 </span>
                  <span>10 </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="support">
        <h5>Extra filters</h5>
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
          Externe deskundigen (..)
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
          Onbeperkt rechtsbijstand (..)
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
          Verkeerszaken internationaal:  (..)
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
          Niet wettelijk verplicht  (..)
          </label>
        </div>
      </div>
      <div className="enter-prise-acc protectionbx" style={{ borderRadius: 0 }}>
        <div className="entr-sc-title">
          <h4>Veel gestelde vragen</h4>
        </div>
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
                Vraag 2
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
                Vraag 3
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
                Vraag 4
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
                Vraag 5
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

export default LargeComparisionLeftbarStep2;
