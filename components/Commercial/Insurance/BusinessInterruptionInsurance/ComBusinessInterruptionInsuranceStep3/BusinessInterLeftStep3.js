import Image from 'next/image'
import React from 'react'

const BusinessInterLeftStep3 = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="compare-toppart mt-2">
          <h2>Stel jouw deal vandaag veilig</h2>
          <div className="secure-wrp">
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/secure.png"
              className="img-fluid secureimg"
            />
          </div>
          <p>
            Vul de resterende gegevens in die de aanbieder nodig heeft zodat
            wij alles vlekkenloos kunnen regelen en jij snel hier van kan
            profiteren.
          </p>
        </div>
        <div className="profile-details">
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <Image src="/images/archives.png" width={50} height={50} alt="aa" />{" "}
                Bedrijfsgegevens
              </h4>
            </div>
            <div className="card-body">
              <form>
                {/* First Row */}

                {/* Second Row */}
                <div className="row mb-3">
                  <label
                    htmlFor="firstname"
                    className="col-sm-3 col-form-label"
                  >
                    Bedrijfsnaam
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Bijv. Energise company"
                    />
                  </div>
                  <label
                    htmlFor="interjections"
                    className="col-sm-3 col-form-label"
                  >
                    KVK Nummer
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="interjections"
                      name="interjections"
                      placeholder="Bijv. 681237"
                    />
                  </div>
                </div>
                {/* Third Row */}
                <div className="row mb-3">
                  <label htmlFor="surname" className="col-sm-3 col-form-label">
                    Vestiging
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      name="surname"
                      placeholder="Bijv. adres"
                    />
                  </div>
                  <label htmlFor="dob" className="col-sm-3 col-form-label">
                    Functie
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      placeholder="Bijv. Algemeen directeur"
                      className="form-control"
                      id="dob"
                      name="dob"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <Image src='/images/contact.png' alt='contact' width={32} height={32}/> Contactgegevens
              </h4>
            </div>
            <div className="card-body">
              <form>
                {/* First Row */}
                <div className="row mb-3">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    Geslacht
                  </label>
                  <div className="col-sm-4 d-flex align-items-center">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sex"
                        id="male"
                        defaultValue="Man"
                      />
                      <label className="form-check-label" htmlFor="male">
                        <i className="fas fa-mars" /> Man
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sex"
                        id="female"
                        defaultValue="female"
                      />
                      <label className="form-check-label" htmlFor="female">
                        <i className="fas fa-venus" /> Vrouw
                      </label>
                    </div>
                  </div>
                  <label htmlFor="initials" className="col-sm-3 col-form-label">
                    Voorletters
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="initials"
                      name="initials"
                      placeholder="E"
                    />
                  </div>
                </div>
                {/* Second Row */}
                <div className="row mb-3">
                  <label
                    htmlFor="firstname"
                    className="col-sm-3 col-form-label"
                  >
                    Voornaam
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Bijv. Energise"
                    />
                  </div>
                  <label
                    htmlFor="interjections"
                    className="col-sm-3 col-form-label"
                  >
                    Tussenvoegsels
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="interjections"
                      name="interjections"
                      placeholder="Bijv. Van der"
                    />
                  </div>
                </div>
                {/* Third Row */}
                <div className="row mb-3">
                  <label htmlFor="surname" className="col-sm-3 col-form-label">
                    Achternaam
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      name="surname"
                      placeholder="Biv. Company"
                    />
                  </div>
                  <label htmlFor="dob" className="col-sm-3 col-form-label">
                    Geboortedatum
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      name="dob"
                    />
                  </div>
                </div>
                {/* Fourth Row */}
                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-3 col-form-label">
                    E-mail
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Bijv. Naam@mail.ni"
                    />
                  </div>
                  <label
                    htmlFor="accountNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Rekeningnummer
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      name="accountNumber"
                      placeholder="NLOOBANK00000000"
                    />
                  </div>
                </div>
                {/* Fifth Row */}
                <div className="row mb-3">
                  <label
                    htmlFor="mobileNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Postcode
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="06-12345678"
                    />
                  </div>
                  <label
                    htmlFor="landlineNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Nummer &amp; toevoeging
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="landlineNumber"
                      name="landlineNumber"
                      placeholder="Regio-0000000"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="mobileNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Mobiel
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="06-12345678"
                    />
                  </div>
                  <label
                    htmlFor="landlineNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Vaste telefoon
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="landlineNumber"
                      name="landlineNumber"
                      placeholder="Regio-0000000"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
            <div className="additional-ques-box-title">
                <h4 className="mb-0">
                    <Image width={54} height={54} alt="aa" src="/images/interview.png" className="img-fluid" />
                    Aanvullende vragen <i className="fas fa-info-circle" /></h4>
                </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className='row'>
                      <div className="col-lg-6 position-relative">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Voldoet het gebouw waarin het bedrijf gevestigd is samen met de naastgelegen gebouwen aan de
                        volgende voorwaarden:*
                        </label>
                        <a className='aanvullende-text-info' href='#'><i className="fas fa-info-circle green-cyan" /></a>
                        <ul className='list-unstyled aanvullende-top-list small'>
                          <li>Het gebouw is van steen gebouwd</li>
                          <li>Het gebouw heeft een harde dakbedekking met dakbeschot (geen riet)</li>
                          <li>De onderhoudstoestand van het gebouw is goed</li>
                          <li>Het gebouw is niet (gedeeltelijk) leegstaand</li>
                        </ul>
                      </div>
                    <div className='col-lg-6'>
                    <div className="row">
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="yes"
                              value="yes"
                            />
                            <label className="form-check-label" htmlFor="yes">
                              Ja
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="no"
                              value="no"
                            />
                            <label className="form-check-label" htmlFor="no">
                              Nee
                            </label>
                          </div>
                        </div>
                      </div>
                      <textarea className='form-control' placeholder='Reden' rows={5}></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Wordt het gebouw uitsluitend gebruikt voor eigen activiteiten*
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="yes"
                              value="yes"
                            />
                            <label className="form-check-label" htmlFor="yes">
                              Ja
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="no"
                              value="no"
                            />
                            <label className="form-check-label" htmlFor="no">
                              Nee
                            </label>
                          </div>
                        </div>
                      </div>
                      <textarea className='form-control mt-2' placeholder='Reden' rows={5}></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2">
                  <div className="row ">
                    <div className="col-lg-6">
                      <label htmlFor="abroadIncome" className="col-form-label">
                       Is het gebouw beveiligd door een alarminstallatie?*
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="yes"
                              value="yes"
                            />
                            <label className="form-check-label" htmlFor="yes">
                              Ja
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="no"
                              value="no"
                            />
                            <label className="form-check-label" htmlFor="no">
                              Nee
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2">
                  <div className="row ">
                    <div className="col-lg-6">
                      <label htmlFor="abroadIncome" className="col-form-label">
                      Is hiervoor een door het CCV erkend Borg-bedrijf opleveringsbewijs afgegeven?*
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="yes"
                              value="yes"
                            />
                            <label className="form-check-label" htmlFor="yes">
                              Ja
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="abroadIncome"
                              id="no"
                              value="no"
                            />
                            <label className="form-check-label" htmlFor="no">
                              Nee
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="insurance-sec">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="insu-title">
                          <h4>Verzekeringsverleden</h4>
                          <p className="text-danger">
                          Let op! Deze vragen gelden voor alle belanghebbende van een aandeel van 33.3% of meer 
                          binnen een BV of vereniging. Als de aandeelhouders zelf een rechtspersoon is gelden de vragen ook voor 
                          de statutaire directeur(en) of bestuurder(s) daarvan.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="add-ques-bx">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="ad-ques-text">
                                <p>
                                  Heb jij of een belanghebbende ooit te maken
                                  gehad met:*
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex form-flex">
                                <div className="form-check me-3">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins1"
                                    id="yes"
                                    defaultValue="yes"
                                    onclick="insu1();"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="yes"
                                  >
                                    Ja
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins1"
                                    id="no"
                                    defaultValue="no"
                                    onclick="insu2();"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="no"
                                  >
                                    Nee
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6">
                            <div className="hd-text">
                              <ul>
                                <li>
                                  <a href="#">Een schademelding</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Weigering bij een aanvraag of opzegging van
                                    de Verzekeraar
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Veroordeling of strafbeschikking
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="add-ques-bx">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="ad-ques-text">
                                <p>Schade</p>
                                <span  className='mb-2'>
                                  Zijn er in de afgelopen 5 jaar schaden
                                  veroorzaak of geleden door gebeurtenissen die
                                  gedekt zijn op verzekering(en) die jij
                                  aanvraagt?
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex form-flex">
                                <div className="form-check me-3">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins2"
                                    id="yes"
                                    defaultValue="yes"
                                    onclick="insu3();"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="yes"
                                  >
                                    Ja
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins2"
                                    id="no"
                                    defaultValue="no"
                                    onclick="insu4();"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="no"
                                  >
                                    Nee
                                  </label>
                                </div>
                              </div>   
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                            <label className='mb-2 fw-bold'>Verzekering*</label>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                            <label className=' fw-bold'>
                            Bedrijfsschadeverzekering
                            </label>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                            <label className='mb-2  fw-bold'>Schadebedrag per gebeurtenis*</label>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                            <div id="insudiv2" style={{ display: "block" }}>
                              <input placeholder='€ 0' type='text' className='form-control mb-2'/>
                            </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                            <label  className='mb-2  fw-bold'>Schade oorzaak*</label>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                            <textarea cols={30}  rows={4}  className="form-control"  placeholder="Oorzaak"  defaultValue={""} />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>

                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="add-ques-bx">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="ad-ques-text">
                                <p>Voorgaande verzekeringen*</p>
                                <span>
                                  Zijn er in de afgelopen 5 jaar door een
                                  verzekeringsmaatschappij enige vorm van
                                  verzekering geweigerd of opgezegd of zijn er
                                  beperkende voorwaarden of verhoogde premies
                                  aangekondigd dan wel verplicht gesteld die
                                  specifiek en uitsluitend voor dat risico en
                                  voor de verzekering golden?
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex form-flex">
                                <div className="form-check me-3">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins3"
                                    id="yes"
                                    defaultValue="yes"
                                    onclick="insu5();"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="yes"
                                  >
                                    Ja
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins3"
                                    id="no"
                                    defaultValue="no"
                                    onclick="insu6();"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="no"
                                  >
                                    Nee
                                  </label>
                                </div>
                              </div>
                              <div
                                className=" mb-3 mt-3"
                                id="insudiv3"
                                style={{ display: "block" }}
                              >
                                <textarea
                                  name
                                  id
                                  cols={30}
                                  rows={4}
                                  className="form-control"
                                  placeholder="Reden"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="add-ques-bx">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="ad-ques-text">
                                <p>Veroordeling of strafbeschikking*</p>
                                <span>
                                  Is er in de afgelopen 8 jaar sprake geweest
                                  van een veroordeling (ongeacht de opgelegde
                                  straf) of een strafbeschikking of een
                                  transactie (beide voor een taakstraf van meer
                                  dan 20 uur) of aanraking met justitie ter
                                  uitvoering van een opgelegde (straf)maatregel
                                  in verband met bovenstaande of een een
                                  uitgebrachte dagvaaring in een lopende
                                  procedure alles ter zake van een misdrijf?
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex form-flex">
                                <div className="form-check me-3">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins4"
                                    id="yes"
                                    defaultValue="yes"
                                    onclick="insu7();"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="yes"
                                  >
                                    Ja
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="ins4"
                                    id="no"
                                    defaultValue="no"
                                    onclick="insu8();"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="no"
                                  >
                                    Nee
                                  </label>
                                </div>
                              </div>
                              <div
                                className=" mb-3 mt-3"
                                id="insudiv4"
                                style={{ display: "block" }}
                              >
                                <textarea
                                  name
                                  id
                                  cols={30}
                                  rows={4}
                                  className="form-control"
                                  placeholder="Reden"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-user-check" />
                Verificatie
              </h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">
                  Verfieer hier jouw bank gegevens en voorkom samen fraude.
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    aria-label="Content Goes Here"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-original-title="Content Goes Here"
                                >
                                    <i className="fas fa-info-circle text-success" />
                                </a>
                            </label>
                            <div className="ac-num">
                                <p>Ik bevestig mijn rekeningnummer</p>
                                <Image width={200} height={200} alt="aa" src="/images/private.png" />
                            </div>
                            <Image className="ms-2" width={34} height={34} alt="aa" src="/images/time-left.png" />

                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="voorwaardenCheckbox"
                                />
                                <label
                                    className="form-check-label ms-2"
                                    htmlFor="voorwaardenCheckbox"
                                >
                                    Ik accepteer alle <a href='#' className='ac-con-bx'>voorwaarden</a>.
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="actiesCheckbox"
                                />
                                <label
                                    className="form-check-label ms-2"
                                    htmlFor="actiesCheckbox"
                                >
                                    Ik wil graag op de hoogte blijven van alle acties van
                                    Energise Company.
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="opmerking" className="form-label">
                                Ik heb nog een opmerking:
                            </label>
                            <textarea
                                className="form-control w-100"
                                id="opmerking"
                                rows={3}
                                defaultValue={""}
                                placeholder="Type een bericht..."
                            />
                        </div>
                        <div className="row">
                            <div className="col text-start">
                                <button
                                    type="button"
                                    className="btn btn-light fw-bold px-3 py-2 rounded-5 border"
                                >
                                    Controleer gegevens
                                </button>
                            </div>
                            <div className="col text-end">
                                <button type="button" className="border-0 price-btn">
                                    Aanvragen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  )
}

export default BusinessInterLeftStep3
