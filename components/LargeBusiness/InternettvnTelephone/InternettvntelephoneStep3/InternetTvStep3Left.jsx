import Image from "next/image";
import React, { useState } from "react";
const InternetTvStep3Left = ({ setShow, show }) => {
  const [meter, setMeter] = useState(0);
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          <div className="col-12">
            <ul className="step-formholder">
              <li>
                <a className={show == 1 ? "active text-warning" : ""}>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="compare-toppart mt-2">
          <h2>Stel jouw deal vandaag veilig</h2>
          <div className="secure-wrp">
            <Image
              src="/images/secure.png"
              width={273}
              height={134}
              alt="stopwatch"
              className="img-fluid secureimg"
            />
          </div>
          <p>Bekijk alle extra optie, zodat je niks mist in jouw pakket!</p>
          <p>
            <b>Tip:</b> Alle opties die maandelijks zijn aanpasbaar, dat is het
            proberen waard.
          </p>
        </div>
        <div className="profile-details Internettv-wrp">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-wifi"></i> Internet opties
              </h4>
            </div>
            <div className="card-body table-responsive">
              <table className="table add-internet-table">
                <tr>
                  <td align="center">
                    <p className="small-title">Huren</p>
                    <i className="fas fa-2x fa-network-wired"></i>
                  </td>
                  <td>
                    <p>Kosten</p>
                    <p>(€.. pm)</p>
                  </td>
                  <td>
                    <p>
                      <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a href="javascript:void(0);">Wifi versterker huren</a>
                      </li>
                      <li>Tot ... mb/s</li>
                      <li>G Netwerk</li>
                    </ul>
                  </td>
                  <td>
                    <div className="row p-0 m-0">
                      <div className="col-12 p-0">
                        <label className="form-label">Aantal</label>
                      </div>
                    </div>

                    <input type="number" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p className="small-title2">Kopen</p>
                    <i className="fas fa-2x fa-network-wired"></i>
                  </td>
                  <td>
                    <p>Kosten</p>
                    <p>
                      (€.. )<br /> eenmalig
                    </p>
                  </td>
                  <td>
                    <p>
                      <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a href="javascript:void(0);">ssss</a>
                      </li>
                      <li>Tot ... mb/s</li>
                      <li>G Netwerk</li>
                    </ul>
                  </td>
                  <td>
                    <div className="row p-0 m-0">
                      <div className="col-12 p-0">
                        <label className="form-label">Aantal</label>
                      </div>
                    </div>

                    <input type="number" className="form-control" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-tv"></i> Tv opties
              </h4>
            </div>
            <div className="card-body table-responsive">
              <div className="row">
                <div className="col-12">
                  <label className="form-label">
                    Wil je extra entertainment?
                  </label>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio1"
                      defaultValue="option1"
                      onClick={() => setMeter(0)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio1"
                    >
                      Ja
                    </label>
                  </div>
                  <div className="form-check form-check-inline-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio2"
                      defaultValue="option2"
                      onClick={() => setMeter(1)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio2"
                    >
                      Nee
                    </label>
                  </div>
                </div>
              </div>

              {meter == 0 ? (
                <>
                  <table className="table table-alacarte" width="100%">
                    <tr>
                      <td align="center">
                        <Image
                          src="/images/espncom.png"
                          width={217}
                          height={141}
                          alt="espncom"
                          className="img-fluid"
                        />
                      </td>
                      <td>
                        <p>Kosten</p>
                        <p>(€..pm ) eenmalig</p>
                      </td>
                      <td>
                        <div className="info-box">
                          <p>
                            <i className="fas fa-info"></i>{" "}
                            <b>Pakket overzicht</b>
                          </p>
                          <ul className="list-unstyled">
                            <li>
                              <a href="javascript:void(0);">
                                Alle 4 ESPN kanalen
                              </a>
                            </li>
                            <li>WTA tennis, MLB NFL & NHL</li>
                            <li>Eredivisie live & internationaal voetbal</li>
                          </ul>
                          <div className="col-12 p-0">
                            <a
                              href="Javscript:void(0):"
                              className="text-warning add-tv"
                            >
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <Image
                          src="/images/ziggosport.png"
                          width={217}
                          height={141}
                          alt="ziggosport"
                          className="img-fluid"
                        />
                      </td>
                      <td>
                        <p>Kosten</p>
                        <p>(€..pm ) eenmalig</p>
                      </td>
                      <td>
                        <div className="info-box">
                          <p>
                            <i className="fas fa-info"></i>{" "}
                            <b>Pakket overzicht</b>
                          </p>
                          <ul className="list-unstyled">
                            <li>
                              <a href="javascript:void(0);">
                                7 kanalen vol met sport plezier
                              </a>
                            </li>
                            <li>Formule 1 racen & golf</li>
                            <li>
                              De 3 grootste voetbal competities ter wereld
                            </li>
                          </ul>
                          <div className="col-12 p-0">
                            <a
                              href="Javscript:void(0):"
                              className="text-warning add-tv"
                            >
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <Image
                          src="/images/film.png"
                          width={217}
                          height={141}
                          alt="film"
                          className="img-fluid"
                        />
                      </td>
                      <td>
                        <p>Kosten</p>
                        <p>(€..pm ) eenmalig</p>
                      </td>
                      <td>
                        <div className="info-box">
                          <p>
                            <i className="fas fa-info"></i>{" "}
                            <b>Pakket overzicht</b>
                          </p>
                          <ul className="list-unstyled">
                            <li>
                              <a href="javascript:void(0);">
                                Alle 4 ESPN kanalen
                              </a>
                            </li>
                            <li>Eredivisie live & internationaal voetbal.</li>
                            <li>
                              <b>WTA tennis, MLB NFL & NHL</b>
                            </li>
                          </ul>
                          <div className="col-12 p-0">
                            <a
                              href="Javscript:void(0):"
                              className="text-warning add-tv"
                            >
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                  <a
                    href="javascript:void(0):"
                    className="text-dark"
                    style={{ textDecoration: "underline" }}
                  >
                    Meer opties
                  </a>
                </>
              ) : (
                <></>
              )}

              <div className="row">
                <div className="col-12">
                  <label className="form-label">
                    Wil je meerdere Tv aansluitingen?
                  </label>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio7"
                      defaultValue="option1"
                      onClick={() => setMeter(0)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio7"
                    >
                      Ja
                    </label>
                  </div>
                  <div className="form-check form-check-inline-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="radio5"
                      defaultValue="option2"
                      onClick={() => setMeter(1)}
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="radio5"
                    >
                      Nee
                    </label>
                  </div>
                </div>
              </div>

              {meter == 0 ? (
                <>
                  <table className="table add-internet-table">
                    <tr>
                      <td align="center">
                        <Image
                          src="/images/playicon.png"
                          width={128}
                          height={80}
                          alt="playicon"
                          className="img-fluid"
                        />
                        <h6>Interactief</h6>
                      </td>
                      <td>
                        <p>Kosten</p>
                        <p>(€.. pm)</p>
                      </td>
                      <td>
                        <p>
                          <i className="fas fa-info"></i>{" "}
                          <b>Pakket overzicht</b>
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <a href="javascript:void(0);">
                              Progammas opnemen & pauzeren
                            </a>
                          </li>
                          <li>... progammas te gelijk opnemen</li>
                          <li>Terugkijken ... dagen</li>
                        </ul>
                      </td>
                      <td>
                        <div className="row p-0 m-0">
                          <div className="col-12 p-0">
                            <label className="form-label">Aantal</label>
                          </div>
                        </div>

                        <input type="number" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <Image
                          src="/images/tvicon.png"
                          width={111}
                          height={90}
                          alt="playicon"
                          className="img-fluid"
                        />
                        <h6>Standaard</h6>
                      </td>
                      <td>
                        <p>Kosten</p>
                        <p>(€.. pm)</p>
                      </td>
                      <td>
                        <p>
                          <i className="fas fa-info"></i>{" "}
                          <b>Pakket overzicht</b>
                        </p>
                        <ul className="list-unstyled">
                          <li>
                            <a href="javascript:void(0);">Media box</a>
                          </li>
                          <li>Online tv kijken via app</li>
                          <li>TV Zenders</li>
                        </ul>
                      </td>
                      <td>
                        <div className="row p-0 m-0">
                          <div className="col-12 p-0">
                            <label className="form-label">Aantal</label>
                          </div>
                        </div>

                        <input type="number" className="form-control" />
                      </td>
                    </tr>
                  </table>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-phone-volume"></i> Telefoon opties
              </h4>
            </div>
            <div className="card-body table-responsive">
              <table className="table add-internet-table">
                <tr>
                  <td align="center">
                    <Image
                      src="/images/netherland.jpg"
                      width={380}
                      height={250}
                      alt="netherland"
                      className="img-fluid"
                    />
                    <h6>Onbeperkt</h6>
                  </td>
                  <td>
                    <p>Kosten</p>
                    <p>(€.. pm)</p>
                  </td>
                  <td>
                    <p>
                      <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a href="javascript:void(0);">
                          Onbeperkt bellen in nederland
                        </a>
                      </li>
                      <li>Naar vast & mobiel</li>
                      <li>Maandelijks aanpasbaar</li>
                    </ul>
                  </td>
                  <td>
                    <div className="row p-0 m-0">
                      <div className="col-12 p-0">
                        <label className="form-label">Aantal</label>
                      </div>
                    </div>

                    <input type="number" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <Image
                      src="/images/webicon.png"
                      width={132}
                      height={123}
                      alt="webicon"
                      className="img-fluid"
                    />
                    <h6>Onbeperkt</h6>
                  </td>
                  <td>
                    <p>Kosten</p>
                    <p>(€.. pm)</p>
                  </td>
                  <td>
                    <p>
                      <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a href="javascript:void(0);">
                          Internationaal bellen in... tanden
                        </a>
                      </li>
                      <li>Naar vast & mobiel</li>
                      <li>Maandelijks aanpasbaar</li>
                    </ul>
                  </td>
                  <td>
                    <div className="row p-0 m-0">
                      <div className="col-12 p-0">
                        <label className="form-label">Aantal</label>
                      </div>
                    </div>

                    <input type="number" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <Image
                      src="/images/voip.png"
                      width={109}
                      height={95}
                      alt="webicon"
                      className="img-fluid"
                    />
                    <h6>Onbeperkt</h6>
                  </td>
                  <td>
                    <p>Kosten</p>
                    <p>(€.. pm)</p>
                  </td>
                  <td>
                    <p>
                      <i className="fas fa-info"></i> <b>Pakket overzicht</b>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a href="javascript:void(0);">Bellen over internet</a>
                      </li>
                      <li>... min</li>
                      <li>Apparaten</li>
                    </ul>
                  </td>
                  <td>
                    <div className="row p-0 m-0">
                      <div className="col-12 p-0">
                        <label className="form-label">Aantal</label>
                      </div>
                    </div>

                    <input type="number" className="form-control" />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="btn button-customize" onClick={() => setShow(2)}>
              Volgende
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternetTvStep3Left;
