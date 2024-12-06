import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import FarmhouseGlassstep3index from '../farmhousestep3/FarmHouseGlassstep3index';
import FarmhousecomparisoncofirmMail from '../farmhousestep4/FarmhouseComparison-Cofirm-mail';
import MailModal from '../../CommonModals/MailModal';
function FarmHouseStep1() {
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  useEffect(() => {
    if (count == 0) {
      setWidth("50%");
    } else if (count == 1) {
      setWidth("75%");
    } else if (count == 2) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);
  return (
    <>
      <main>
        <section>
          <div className="progressbar-bx">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled">
                    <li>
                     Stap 1: Vul de gegevens in{" "}
                      <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      className={count == 0 ? "active" : ""}
                      onClick={() => setCount(0)}
                    >
                      Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      onClick={() => setCount(1)}
                      className={count == 1 ? "active" : ""}
                    >
                      Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                    </li>
                    <li onClick={() => setCount(2)}
                      className={count == 2 ? "active" : ""}>
                      Stap 4: Voltooid <i className="fas fa-flag" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: width }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                   <p className='mb-0'> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24}/></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {count == 0 &&
          <section>
            <div className="container">
              <div className="comparestep">
                <div className="row">
                  <div className="col-lg-4 text-center">
                    <a className="btneng1" href="javascript:void(0);">
                      Energise beste advies (…)
                    </a>
                  </div>
                  <div className="col-lg-4 text-center">
                    <a className="btneng2" href="javascript:void(0);">
                      Energise goedkoopste deals (…)
                    </a>
                  </div>
                  <div className="col-lg-4 text-center">
                    <a className="btneng2" href="javascript:void(0);">
                      Alle gecontracteerde (…)
                    </a>
                  </div>
                </div>
                <div className="steptitle">
                  <div className="row">
                    <div className="col-lg-3">
                      <a href="javascript:void(0);" className="saleicon">
                        <Image width={200} height={200} alt="aa"
                          src="/images/salelcon.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-lg-9">
                      <h2>Vergelijk, Bespaar &amp; Aanvragen maar</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
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
                    <div className="cyberbxright steprangeleft coverage-left-bar">
                      <div className="cov-sp">
                        <div className="row">
                          <div className="col">
                            <h6 className="type-cov">Soort dekking</h6>
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
                          <div className="col radiobx">
                            <div className="row">
                              <div className="col-lg-6">
                                <input type="radio" name="test" id="cb1" />
                                <label htmlFor="cb1" className="tooltip-container">
                                  <Image width={200} height={200} alt="aa"
                                    src="/images/home-insurance.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Gehuurd</span>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Gehuurd"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Gehuurd</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <input type="radio" name="test" id="cb2" />
                                <label htmlFor="cb2">
                                  <Image width={200} height={200} alt="aa"
                                    src="/images/loan.png"
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
                          <div className="col">
                            <h6 className="type-cov">Soort dekking</h6>
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
                          <div className="col radiobx">
                            <div className="row">
                              <div className="col-lg-6">
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
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <Image width={200} height={200} alt="aa"
                                    src="/images/home-control.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">Basis</span>
                                </label>
                              </div>
                              <div className="col-lg-6">
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
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <Image width={200} height={200} alt="aa"
                                    src="/images/natural-disaster.png"
                                    className="img-fluid"
                                  />
                                  <span className="checkbox-label">All risk</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cov-sp2">
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
                              <a href="javascript:void(0);" className="extra">
                                <i className="fal fa-2x fa-calculator" />
                                <span>Hulp nodig?</span>
                              </a>
                            </div>
                          </div>
                          <div className="col-12">
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
                                <span>€35.000</span>
                                <span>€250.000</span>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label className="form-label labeltitle">
                              Cloud back-up
                            </label>
                          </div>
                          <div className="col">
                            <input
                              type="number"
                              className="form-control "
                              id="numberInput2"
                              min={1}
                              defaultValue={10}
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
                              min={1}
                              max={100}
                              defaultValue={10}
                            />
                            <label htmlFor="customRange2" className="form-label">
                              <span id="rangeValue2">10</span>GB OF 100GB
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label className="form-label labeltitle">
                              Aantal pc’s
                            </label>
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
                              <span id="rangeValue3">1</span> OF 20 computers
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="protectionbx">
                      <h5>Aanvullende dekkingen</h5>
                      </div>
                      <div className='support'>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="bankierVeilig"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="bankierVeilig"
                        >
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
                        <label
                          className="form-check-label"
                          htmlFor="antiDiefstal"
                        >
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
                        <label
                          className="form-check-label"
                          htmlFor="klantenscore"
                        >
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
                    <div className='protectionbx'>
                        <h5>Veel gestelde vragen</h5>
                    </div>
                    <div
                      className="enter-prise-acc support"
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
                              elit. Fugit voluptatibus natus quod ab
                              necessitatibus. Accusantium, ut alias.
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
                  </div>
                  <div className="col-lg-8">
                    <div className="listofcompanybx" showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo}>
                      <div className="login-deals-box">
                        <div className="spe-action">
                          <div className="spe-cont">
                            <Image width={200} height={200} alt="aa" src="/images/stopwatch.png" />
                            <h5>Actie:</h5>
                            <p>Geldig tot dd-mm-jj</p>
                          </div>
                          <div className="spe-cont">
                            <Image width={200} height={200} alt="aa" src="/images/sale.png" />
                            <p>Energise korting:</p>
                            <h4>€...</h4>
                            <i className="fas fa-info" />
                          </div>
                          <div className="spe-cont">
                            <Image width={200} height={200} alt="aa" src="/images/hot-sale.png" />
                            <p>Totaal korting:</p>
                            <h4>€...</h4>
                          </div>
                        </div>
                        <div className="spe-action-data">
                          <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-3">
                              <div className="spe-img">
                                <Image width={200} height={200} alt="aa" src="/images/sunbg.png" />
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-3">
                              <div className="spe-cn">
                                <h5>Pakket</h5>
                                <p>*</p>
                                <p>*</p>
                                <p>*</p>
                                <p>*</p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-3">
                              <div className="spe-cn">
                                <i className="fas fa-info" />
                                <h5>Kosten:</h5>
                                <h4>€....</h4>
                                <span>/p.m</span>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-3">
                              <div className="spe-cn">
                                <i className="fas fa-info" />
                                <h5>Bespaar:</h5>
                                <h4>€....</h4>
                                <span>/p.j</span>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12">
                              <div className="spe-cn-star">
                                <i className="fas fa-info" />
                                <h3>Klantenscore: 4/5</h3>
                                <ul className="mb-3">
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="far fa-star" />
                                  </li>
                                </ul>
                                <a href="#" className="price-btn" onClick={() => setCount(2)}>
                                  Aanvragen
                                </a>
                              </div>
                            </div>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-target="listhiddenDiv1"
                            className="btn-act listtoggleDiv"
                            onClick={() => setShowMoreInfo(!showMoreInfo)}
                          >
                            Meer informatie

                            {!showMoreInfo ?
                              <i className="fal fa-plus" />
                              :
                              <i className="fas fa-minus"></i>
                            }
                          </a>
                        </div>
                      </div>
                      {showMoreInfo &&
                        <div id="listhiddenDiv1" className=" tabwrp">
                          <button className="listhideDiv" onClick={() => setShowMoreInfo(!showMoreInfo)}>
                            <i className="fas fa-times" />
                          </button>
                          <ul className="nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="tab1-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab1"
                                type="button"
                                role="tab"
                                aria-controls="tab1"
                                aria-selected="true"
                              >
                                <i className="fas fa-calculator" />
                                Kosten
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="tab2-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab2"
                                type="button"
                                role="tab"
                                aria-controls="tab2"
                                aria-selected="false"
                              >
                                <i className="fas fa-ellipsis-h" />
                                Dekking
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="tab3-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab3"
                                type="button"
                                role="tab"
                                aria-controls="tab3"
                                aria-selected="false"
                              >
                                <i className="fas fa-user-shield" />
                                Verzekeraar
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="tab4-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab4"
                                type="button"
                                role="tab"
                                aria-controls="tab4"
                                aria-selected="false"
                              >
                                <i className="fas fa-spinner" />
                                Aanvraag
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabsContent">
                            <div
                              className="tab-pane fade show active"
                              id="tab1"
                              role="tabpanel"
                              aria-labelledby="tab1-tab"
                            >
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="tabbxleft">
                                    <h4>Cybersecurity</h4>
                                    <div className="table-responsive">
                                      <table className="table table-striped table-bordered">
                                        <tbody>
                                          <tr>
                                            <th scope="row">Pakket:</th>
                                            <td>....</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">Kosten:</th>
                                            <td>€</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">Korting:</th>
                                            <td>.%</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">Totaal kosten:</th>
                                            <td />
                                          </tr>
                                          <tr>
                                            <th scope="row">Energise bespaart:</th>
                                            <td />
                                          </tr>
                                          <tr>
                                            <td colSpan={2}>
                                              <p className="mb-0">
                                                Prijzen zijn inclusief 21% BTW
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="tabbxright">
                                    <h4>Veel gestelde vragen</h4>
                                    <div className="accordion" id="faqAccordion">
                                      {/* FAQ Item 1 */}
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingOne"
                                        >
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                          >
                                            Vraag 1
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingOne"
                                          data-bs-parent="#faqAccordion"
                                        >
                                          <div className="accordion-body">
                                            Antwoord op vraag 1.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 2 */}
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingTwo"
                                        >
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
                                          aria-labelledby="headingTwo"
                                          data-bs-parent="#faqAccordion"
                                        >
                                          <div className="accordion-body">
                                            Antwoord op vraag 2.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 3 */}
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingThree"
                                        >
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
                                          aria-labelledby="headingThree"
                                          data-bs-parent="#faqAccordion"
                                        >
                                          <div className="accordion-body">
                                            Antwoord op vraag 3.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 4 */}
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingFour"
                                        >
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                          >
                                            Vraag 4
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseFour"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingFour"
                                          data-bs-parent="#faqAccordion"
                                        >
                                          <div className="accordion-body">
                                            Antwoord op vraag 4.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 5 */}
                                      <div className="accordion-item">
                                        <h2
                                          className="accordion-header"
                                          id="headingFive"
                                        >
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                          >
                                            Vraag 5
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseFive"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingFive"
                                          data-bs-parent="#faqAccordion"
                                        >
                                          <div className="accordion-body">
                                            Antwoord op vraag 5.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <a href="javascript:void(0);" className="viwmr">
                                      Meer vragen?
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="tab2"
                              role="tabpanel"
                              aria-labelledby="tab2-tab"
                            >
                              <div className="tabinsidebx table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Kenmerken</th>
                                      <th>Inbegrepen</th>
                                      <th>Informatie</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Verzekerd bedrag</td>
                                      <td>€</td>
                                      <td>.....</td>
                                    </tr>
                                    <tr>
                                      <td>Anti diefstal</td>
                                      <td>
                                        <Image width={36} height={36} alt="aa"
                                          src="/images/faqicon.png"
                                          className="img-fluid okicon"
                                        />
                                      </td>
                                      <td>.....</td>
                                    </tr>
                                    <tr>
                                      <td>Opstal</td>
                                      <td>
                                        <Image width={36} height={36} alt="aa"
                                          src="/images/faqicon.png"
                                          className="img-fluid okicon"
                                        />
                                      </td>
                                      <td>.....</td>
                                    </tr>
                                    <tr>
                                      <td>Inboedel</td>
                                      <td>
                                        <Image width={36} height={36} alt="aa"
                                          src="/images/faqicon.png"
                                          className="img-fluid okicon"
                                        />
                                      </td>
                                      <td>.....</td>
                                    </tr>
                                    <tr>
                                      <td>Glasverzekering</td>
                                      <td>
                                        <Image width={36} height={36} alt="aa"
                                          src="/images/faqicon.png"
                                          className="img-fluid okicon"
                                        />
                                      </td>
                                      <td>.....</td>
                                    </tr>
                                    <tr>
                                      <td>Dagelijksopzegbaar</td>
                                      <td>
                                        <Image width={36} height={36} alt="aa"
                                          src="/images/faqicon.png"
                                          className="img-fluid okicon"
                                        />
                                      </td>
                                      <td>.....</td>
                                    </tr>
                                    <tr>
                                      <td>Verzekerd tegen onderverzekering</td>
                                      <td>
                                        <Image width={36} height={36} alt="aa"
                                          src="/images/faqicon.png"
                                          className="img-fluid okicon"
                                        />
                                      </td>
                                      <td>.....</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div>
                                <a
                                  data-bs-toggle="modal"
                                  href="#quantityModalToggle"
                                  role="button"
                                  className="viwmr"
                                >
                                  Bekijk meer
                                </a>
                              </div>
                              {/* modal */}
                              <div
                                className="modal quantityModal fade"
                                id="quantityModalToggle"
                                aria-hidden="true"
                                aria-labelledby="quantityModalToggleLabel"
                                tabIndex={-1}
                              >
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-body">
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i className="fas fa-times" />
                                      </button>
                                      <div className="selectquantity">
                                        <div className="cov-over-title">
                                          <h4>Dekkingsoverzicht</h4>
                                          <Image width={200} height={200} alt="aa" src="/images/shield.png" />
                                        </div>
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th>Kenmerken</th>
                                                <th>Inbegrepen</th>
                                                <th>Informatie</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>Verzekerd bedrag</td>
                                                <td>€</td>
                                                <td>.....</td>
                                              </tr>
                                              <tr>
                                                <td>Anti diefstal</td>
                                                <td>
                                                  <Image width={36} height={36} alt="aa"
                                                    src="/images/faqicon.png"
                                                    className="img-fluid okicon"
                                                  />
                                                </td>
                                                <td>.....</td>
                                              </tr>
                                              <tr>
                                                <td>Opstal</td>
                                                <td>
                                                  <Image width={36} height={36} alt="aa"
                                                    src="/images/faqicon.png"
                                                    className="img-fluid okicon"
                                                  />
                                                </td>
                                                <td>.....</td>
                                              </tr>
                                              <tr>
                                                <td>Inboedel</td>
                                                <td>
                                                  <Image width={36} height={36} alt="aa"
                                                    src="/images/faqicon.png"
                                                    className="img-fluid okicon"
                                                  />
                                                </td>
                                                <td>.....</td>
                                              </tr>
                                              <tr>
                                                <td>Glasverzekering</td>
                                                <td>
                                                  <Image width={36} height={36} alt="aa"
                                                    src="/images/faqicon.png"
                                                    className="img-fluid okicon"
                                                  />
                                                </td>
                                                <td>.....</td>
                                              </tr>
                                              <tr>
                                                <td>Dagelijksopzegbaar</td>
                                                <td>
                                                  <Image width={36} height={36} alt="aa"
                                                    src="/images/faqicon.png"
                                                    className="img-fluid okicon"
                                                  />
                                                </td>
                                                <td>.....</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  Verzekerd tegen onderverzekering
                                                </td>
                                                <td>
                                                  <Image width={36} height={36} alt="aa"
                                                    src="/images/faqicon.png"
                                                    className="img-fluid okicon"
                                                  />
                                                </td>
                                                <td>.....</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="text-center">
                                          <a href="#" className="viwmr">
                                            Dekkingskaart
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="tab3"
                              role="tabpanel"
                              aria-labelledby="tab3-tab"
                            >
                            <div className="tabinsidebx">
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th>Werkwijze:</th>
                                                        <th>Handeling:</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Bereikbaarheid</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Contract</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Details</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='col-lg-6'>
                                            <Image src='/images/hsbcbank.png' width={250} height={100} alt='stopwatch' className="img-fluid" />
                                            <p>Text...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="tab4"
                              role="tabpanel"
                              aria-labelledby="tab4-tab"
                            >
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="tabbxleft">
                                    <h4>Cybersecurity</h4>
                                    <div className="table-responsive">
                                      <table className="table table-striped table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>Energise</th>
                                            <th>Dienstverlener</th>
                                          </tr>
                                          <tr>
                                            <td>Vergelijken</td>
                                            <td>X</td>
                                          </tr>
                                          <tr>
                                            <td>Afhandeling contract</td>
                                            <td>X</td>
                                          </tr>
                                          <tr>
                                            <td>X</td>
                                            <td>Nazorg</td>
                                          </tr>
                                          <tr>
                                            <td>X</td>
                                            <td>Diensten</td>
                                          </tr>
                                          <tr>
                                            <td>X</td>
                                            <td>Incasseren</td>
                                          </tr>
                                          <tr>
                                            <td>Aanpak</td>
                                            <td>X</td>
                                          </tr>
                                          <tr>
                                            <td>Energise exclusives</td>
                                            <td>X</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="tabbxright">
                                    <h4>Veel gestelde vragen</h4>
                                    <div className="accordion" id="stepAccordion">
                                      {/* FAQ Item 1 */}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap1">
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc1"
                                            aria-expanded="true"
                                            aria-controls="stapc1"
                                          >
                                            {" "}
                                            Stap 1{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc1"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingOne"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 1.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 2 */}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap2">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc2"
                                            aria-expanded="false"
                                            aria-controls="stapc2"
                                          >
                                            {" "}
                                            Stap 2{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc2"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingTwo"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 2.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 3 */}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap3">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc3"
                                            aria-expanded="false"
                                            aria-controls="stapc3"
                                          >
                                            {" "}
                                            Stap 3{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc3"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingThree"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 3.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 4 */}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap4">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc4"
                                            aria-expanded="false"
                                            aria-controls="stapc4"
                                          >
                                            {" "}
                                            Stap 4{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc4"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingFour"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 4.
                                          </div>
                                        </div>
                                      </div>
                                      {/* FAQ Item 5 */}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap5">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc5"
                                            aria-expanded="false"
                                            aria-controls="stapc5"
                                          >
                                            {" "}
                                            Stap 5{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc5"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingFive"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 5.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap6">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc6"
                                            aria-expanded="false"
                                            aria-controls="stapc6"
                                          >
                                            {" "}
                                            Stap 6{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc6"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingFive"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 6.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="stap7">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stapc7"
                                            aria-expanded="false"
                                            aria-controls="stapc7"
                                          >
                                            {" "}
                                            Stap 7{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="stapc7"
                                          className="accordion-collapse collapse"
                                          aria-labelledby="headingFive"
                                          data-bs-parent="#stepAccordion"
                                        >
                                          <div className="accordion-body">
                                            {" "}
                                            Antwoord op vraag 7.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    {" "}
                                    <a href="javascript:void(0);" className="viwmr">
                                      Meer vragen?
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 text-center mt-3">
                              <a href="javascript:void(0);" className="btn-one">
                                Aanvragen
                              </a>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
        {count == 1 &&
          <FarmhouseGlassstep3index />
        }
        {count == 2 &&
          <FarmhousecomparisoncofirmMail />
        }
      </main>
    </>
  );
}

export default FarmHouseStep1;
