import Image from 'next/image'
import React from 'react'

function LegalComparisonLeftSide() {
  return (
    <>
         <div className="yourdetailsbox">
        <h5>Jouw gegevens:</h5>
        <ul className="infodetails">
          <li>Vergelijking:</li>
          <li>Postcode:</li>
          <li>Huisnummer:</li>
          <li>Geboortedatum:</li>
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
              <h6 className="type-cov">Woning</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check">
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
              <div className="form-check">
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
                <div className="col-lg-6 col-6">
                  <input type="radio" name="test" id="cb1" />
                  <label htmlFor="cb1">
                    <Image width={200} height={200} alt="aa" src="/images/house-2.png" className="img-fluid" />
                    <span className="checkbox-label">Gehuurd</span>
                  </label>
                </div>
                <div className="col-lg-6  col-6">
                  <input type="radio" name="test" id="cb2" />
                  <label htmlFor="cb2">
                    <Image width={200} height={200} alt="aa" src="/images/house-3.png" className="img-fluid" />
                    <span className="checkbox-label">Gekocht</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='protectionbx'>
         <h5>Aanbevolen dekkingen</h5>
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
          Consument (..)
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
          Wonen (..)
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
          Familie (..)
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
          Verkeer & medisch (..)
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
          Belasting & vermogen (..)
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
          Werk (..)
          </label>
        </div>
      </div>
      <div className='protectionbx'>
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
          Geen wachtijd (..)
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
          Dagelijks opzegbaar (..)
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
          Geen poliskosten (..)
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
            Klantenscore (..)
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </label>
        </div>
      </div>
      <div className='protectionbx'>
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
              > Aanvraag
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
      <div className="emaildeal">
        <a href="javascript:void(0);">
          <Image width={50} height={50} alt="aa" src="/images/mail.png" className="img-fluid" /> Mail mijn deals
        </a>
      </div>
    </>
  )
}

export default LegalComparisonLeftSide