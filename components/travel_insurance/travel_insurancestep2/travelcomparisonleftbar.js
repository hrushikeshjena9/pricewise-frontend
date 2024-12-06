import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";

function TravelComparisonLeftBar() {
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
      <div className="cyberbxright steprangeleft coverage-left-bar">
        <div className="cov-sp">
          <div className="row">
            <div className="col">
              <h6 className="type-cov">Dekkingsgebied & reisduur?</h6>
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
          <div className="row mb-3">
            <div className="col-lg-2">
              <label>Waar?</label>
            </div>
            <div className="col-lg-5 rd-fnt-icon">
              <input
                className="form-check-input"
                type="radio"
                id="Partner"
                name="wear"
              />
              <label htmlFor="Partner">
                Europa <Image width={200} height={200} alt="aa" src="/images/european-union.png" />
              </label>
            </div>
            <div className="col-lg-5 rd-fnt-icon">
              <input
                className="form-check-input"
                type="radio"
                id="Kind"
                name="wear"
              />
              <label htmlFor="Kind">
                Wereld <Image width={200} height={200} alt="aa" src="/images/globe.png" />
              </label>
            </div>
          </div>
          <div className="row mb-3">
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
            <div className="col-lg-12  mb-3">
              <label className="form-control">
                Ingangsdatum reis
              </label>
            </div>
            <div className="col-lg-12  mb-3">
              <input type="date" id name className="form-control" />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-12  mb-3 position-relative">
            <label className="form-control ">
               Einddatum reis
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
            <div className="col-lg-12  mb-3">
              <input type="date" id name className="form-control" />
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
            id="bankierVeilig"
          />
          <label className="form-check-label" htmlFor="bankierVeilig">
             Doorlopende reis (..)
          </label>
        </div>
          <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="bankierVeilig"
          />
          <label className="form-check-label" htmlFor="bankierVeilig">
              Korlopende reis(..)
          </label>
        </div>
      </div>

      <div className="protectionbx">
        <h5>Aanvullende verzekering</h5>
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
          Zakenreizen (..)
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
          Sportreizen (..)
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
          Zorgkosten(..)
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
          Voertuighulp (..)
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
          Studie/stage(..)
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
             Invalide &amp; overlijden (..)
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
          Contant geld (..)
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
               Bagage (..)
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
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
              Dagelijks opzegbaar (..)
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
        <div className="row">
            <div className="col">
              <label className="form-label labeltitle">Eigen risico</label>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control "
                id="numberInput1"
                min={35}
                max={250}
                value={rangeValue}
                onChange={handleInputChange}
              />

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
                  <span>€0</span>
                  <span>€300</span>
                </div>
              </label>
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
               Aanvraag
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
}

export default TravelComparisonLeftBar;
