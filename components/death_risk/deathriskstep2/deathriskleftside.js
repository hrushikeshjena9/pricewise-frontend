import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";
import SameHeightDiv from "../../common/SameHeightDiv";

function DeathRiskLeftSide() {
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(35);
  const [infuForm, setInfuForm] = useState(0);
  const [rangeValue3, setRangeValue3] = useState(35);
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
      <SameHeightDiv/>
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
              <h6 className="type-cov">Soort overlijdensrisicoverzekering</h6>
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
                  Hypotheek
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
                  Nabestaande
                </label>
              </div>
            </div>
          </div>
          <div className="row d-none">
            <div className="col radiobx">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-6">
                  <input type="radio" name="test" id="cb1" />
                  <label htmlFor="cb1">
                    <a className="info-icon" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                       <i className="fas fa-2x fa-info-circle green-cyan" />
                    </a>
                    <Image width={200} height={200} alt="aa" src="/images/house-4.png" className="img-fluid" />
                    <span className="checkbox-label">Hypotheek</span>
                  </label>
                </div>
                <div className="col-lg-4 col-sm-6 col-6">
                  <input type="radio" name="test" id="cb2" />
                  <label htmlFor="cb2">
                  <a className="info-icon" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                       <i className="fas fa-2x fa-info-circle green-cyan" />
                    </a>
                    <Image width={200} height={200} alt="aa" src="/images/family-tree.png" className="img-fluid" />
                    <span className="checkbox-label">Nabestaande</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cov-sp">
          <div className="row">
            <div className="col">
              <h6 className="type-cov">Verzekeringsvorm</h6>
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
                  <input className="form-check-input" type="radio" name="test" id="ge1" value={1} onChange={(e)=>setInfuForm(e.target.value)}/>
                  <label htmlFor="ge1">
                    <span className="checkbox-label equal-height form-check-label">Gelijkblijvend</span>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="test" id="ge2" value={2} onChange={(e)=>setInfuForm(e.target.value)}/>
                  <label htmlFor="ge2">
                    <span className="checkbox-label equal-height form-check-label">Lineair dalend</span>
                  </label>
                </div>
              <div className="form-check">
                  <input  className="form-check-input" type="radio" name="test" id="ge3" value={3} onChange={(e)=>setInfuForm(e.target.value)} />
                  <label htmlFor="ge3">
                    <span className="checkbox-label equal-height form-check-label">Annuïtair dalend</span>
                  </label>
                  {infuForm == 3 && <div className="row">
                    <div className="col">
                      <label className="form-label labeltitle">Rente</label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control "
                        id="numberInput1"
                        min={0}
                        max={10}
                        value={rangeValue}
                        onChange={handleInputChange}
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
                        id="customRange1"
                        min={0}
                        max={10}
                        value={rangeValue}
                        onChange={handleRangeChange}
                      />

                      <div className="cus-num">
                        <span>0%</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>}
               </div>


            </div>
          </div>
          <div className="row d-none">
            <div className="col radiobx">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xl-4">
                  <input type="radio" name="test" id="ge1" value={1} onChange={(e)=>setInfuForm(e.target.value)}/>
                  <label htmlFor="ge1">
                    <Image width={200} height={200} alt="aa" src="/images/constant.jpg" className="img-fluid" />
                    <span className="checkbox-label equal-height">Gelijkblijvend</span>
                  </label>
                </div>
                <div className="col-lg-6 col-md-6 col-xl-4 ">
                  <input type="radio" name="test" id="ge2" value={2} onChange={(e)=>setInfuForm(e.target.value)}/>
                  <label htmlFor="ge2">
                    <Image width={200} height={200} alt="aa"
                      src="/images/linear-decending.jpg"
                      className="img-fluid"
                    />
                    <span className="checkbox-label equal-height">Lineair dalend</span>
                  </label>
                </div>
                <div className="col-lg-12 col-md-12 col-xl-4">
                  <input type="radio" name="test" id="ge3" value={3} onChange={(e)=>setInfuForm(e.target.value)} />
                  <label htmlFor="ge3">
                    <Image width={200} height={200} alt="aa" src="/images/annutair.jpg" className="img-fluid" />
                    <span className="checkbox-label equal-height">Annuïtair dalend</span>
                  </label>
                  {infuForm == 3 && <div className="row">
                    <div className="col">
                      <label className="form-label labeltitle">Rente</label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control "
                        id="numberInput1"
                        min={0}
                        max={10}
                        value={rangeValue}
                        onChange={handleInputChange}
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
                        id="customRange1"
                        min={0}
                        max={10}
                        value={rangeValue}
                        onChange={handleRangeChange}
                      />

                      <div className="cus-num">
                        <span>0%</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cov-sp">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <label className="form-label labeltitle">Looptijd</label>
            </div>
            <div className="col-lg-12 col-md-6 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput2"
                min={35}
                max={250}
                value={rangeValue2}
                onChange={handleInputChange2}
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
                id="customRange2"
                min={35}
                max={250}
                value={rangeValue2}
                onChange={handleRangeChange2}
              />
              <label htmlFor="customRange2" className="form-label">
              <div className="cus-num">
                  <span>1 Jaar</span>
                  <span>48 Jaar</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="cov-sp">
          <div className="row">
            <div className="col-lg-12 col-md-6 position-relative">
              <label className="form-label labeltitle">Totaal Verzekerd bedrag</label>
              <div className="infbx infbx2">
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
            <div className="col-lg-12 col-md-6 position-relative">
              <input
                type="number"
                className="form-control "
                id="numberInput1"
                min={35}
                max={250}
                value={rangeValue3}
                onChange={handleInputChange3}
              />
              <div className="infbx infbx2">
                 <a href="javascript:void(0);" className="extra">
                  <i className="fal fa-2x fa-calculator" />
                  {/* <span>Hulp nodig?</span> */}
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
                value={rangeValue3}
                onChange={handleRangeChange3}
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
      <div className="protectionbx">
        <h5>Extra filters</h5>
      </div>
      <div className="support">
      <div className="form-check">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
            Verpanding polis (..)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
           Voorschot bij terminale ziekte (..)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
             Premie garantie (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input me-2"
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
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
              Afkoopwaarde (..)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="Windows2"
          />
          <label className="form-check-label" htmlFor="Windows2">
              Jaarpremie (..)
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
      <MailModal />
    </>
  );
}

export default DeathRiskLeftSide;
