import Image from "next/image";
import React from "react";

const LiabiilityLeftStep3 = () => {
  return (
    <>
      <div className="col-lg-8 mb-4">
        <div className="comparestep3">
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
            Vul de resterende gegevens in die de aanbieder nodig heeft, zodat
            wij alles vlekkenloos kunnen regelen en jij snel hier van kan
            profiteren.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="mb-0">
              <Image
                width={52}
                height={52}
                alt="aa"
                src="/images/contact.png"
                className="img-fluid secureimg"
              />{" "}
              Contactgegevens
            </h4>
          </div>
          <div className="card-body">
            <form>
              {/* First Row */}
              <div className="row mb-3">
                <label
                  htmlFor="name"
                  className="col-sm-2 col-form-label fw-medium"
                >
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
                <label
                  htmlFor="initials"
                  className="col-sm-3 col-form-label fw-medium"
                >
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
                  className="col-sm-3 fw-medium col-form-label"
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
                  className="col-sm-3 fw-medium col-form-label"
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
                <label
                  htmlFor="surname"
                  className="col-sm-3 fw-medium col-form-label"
                >
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
                <label
                  htmlFor="dob"
                  className="col-sm-3 fw-medium col-form-label"
                >
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
                <label
                  htmlFor="email"
                  className="col-sm-3 fw-medium col-form-label"
                >
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
                  className="col-sm-3 fw-medium col-form-label"
                >
                  Rekeningnummer
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control fw-medium"
                    id="accountNumber"
                    name="accountNumber"
                    placeholder="NL00BANK00000000"
                  />
                </div>
              </div>
              {/* Five Row */}
              <div className="row mb-3">
                <label
                  htmlFor="text"
                  className="col-sm-3 fw-medium col-form-label"
                >
                  Postcode
                </label>
                <div className="col-sm-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Bijv. 1200AA"
                  />
                </div>
                <label
                  htmlFor="accountNumber"
                  className="col-sm-3 fw-medium col-form-label"
                >
                  Nummer &amp; toevoeging
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="accountNumber"
                    name="accountNumber"
                    placeholder="Bijv. 112A"
                  />
                </div>
              </div>
              {/* Six Row */}
              <div className="row mb-3">
                <label
                  htmlFor="text"
                  className="col-sm-3 fw-medium col-form-label"
                >
                  Mobiel
                </label>
                <div className="col-sm-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="06-12345678"
                  />
                </div>
                <label
                  htmlFor="accountNumber"
                  className="col-sm-3 fw-medium col-form-label"
                >
                  Vaste telefoon
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="accountNumber"
                    name="accountNumber"
                    placeholder="Regio-0000000"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-header">
            <h4 className="mb-0">
              <Image
                src="/images/tracking.png"
                height={52}
                width={52}
                alt="tracking"
              />{" "}
              Levering
            </h4>
          </div>
          <div className="card-body">
            <form>
              {/* First Row */}
              <div className="row">
                <div className="col-lg-6 align-items-center">
                  <label className="col-auto fw-medium col-form-label mb-0 me-3">
                    Wijkt jou postadres af?
                  </label>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent"
                        id="yes"
                        defaultValue="yes"
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Ja
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent"
                        id="no"
                        defaultValue="no"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label
                    htmlFor="houseNumber"
                    className="col-auto fw-medium col-form-label"
                  >
                    Voorkeur startdatum?*
                  </label>
                  <input
                    type="date"
                    className="form-control col-auto "
                    id="houseNumber"
                    name="houseNumber"
                  />
                </div>
              </div>
              {/* Second Row for Additional Input Box */}
              <div
                className="row mb-3"
                id="additionalInputRow"
                style={{ display: "block" }}
              >
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="additionalInput"
                    name="additionalInput"
                    placeholder="BIJV 1200AA 112A"
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
                <Image
                  src="/images/interview.png"
                  alt="info"
                  width={52}
                  height={52}
                />
                <span>Aanvullende vragen</span>
                <i className="fas fa-info-circle green-cyan" />
              </h4>
            </div>
          </div>
          <div className="card-body">
            <div className="add-ques-bx">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ad-ques-text">
                    <p>
                      Ga jij zelf in de woning wonen per <b>dd-mm-jjjj?</b>
                    </p>
                    <i className="fa fa-info-circle green-cyan" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent"
                        id="yes"
                        defaultValue="yes"
                        onclick="show1();"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Ja
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent"
                        id="no"
                        defaultValue="no"
                        onclick="show2();"
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                  <div
                    className="row mb-3 mt-3"
                    id="div1"
                    style={{ display: "block" }}
                  >
                    <div className="col-sm-12">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Omschrijving"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-ques-bx">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ad-ques-text">
                    <p>
                      Is jouw woning wind, waterdicht en voorzien van ramen en
                      sloten?*
                    </p>
                    <i className="fa fa-info-circle green-cyan" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent2"
                        id="yes"
                        defaultValue="yes"
                        onclick="show3();"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Ja
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent2"
                        id="no"
                        defaultValue="no"
                        onclick="show4();"
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                  <div
                    className="row mb-3 mt-3"
                    id="div2"
                    style={{ display: "block" }}
                  >
                    <div className="col-sm-12">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Omschrijving"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-ques-bx">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ad-ques-text">
                    <p>
                      Is in jouw woning, schuur, tuinhuis, of garage asbest
                      verwerkt?
                    </p>
                    <i className="fa fa-info-circle green-cyan" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ra1"
                        id="yes"
                        defaultValue="yes"
                        onclick="show5();"
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Ja
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ra1"
                        id="no"
                        defaultValue="no"
                        onclick="show6();"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                  <div
                    className="row mb-3 mt-3"
                    id="div3"
                    style={{ display: "block" }}
                  >
                    <div className="col-sm-12">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Omschrijving"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-ques-bx">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ad-ques-text">
                    <p>
                      Is er dichtbij jouw woning een brandgevaarlijk bedrijf
                      gevestigd zoals een restaurant, snackbar of benzinepomp?*
                    </p>
                    <i className="fa fa-info-circle green-cyan" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ra1"
                        id="yes"
                        defaultValue="yes"
                        onclick="show7();"
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Ja
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ra1"
                        id="no"
                        defaultValue="no"
                        onclick="show8();"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                  <div
                    className="row mb-3 mt-3"
                    id="div4"
                    style={{ display: "block" }}
                  >
                    <div className="col-sm-12">
                      <p>Wat is de afstand van dit bedrijf naar jouw woning?</p>
                      <select className="form-select mb-2">
                        <option value>Maak een keuze</option>
                        <option value>Maak een keuze</option>
                        <option value>Maak een keuze</option>
                        <option value>Maak een keuze</option>
                      </select>
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Omschrijving"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-ques-bx">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ad-ques-text">
                    <p>
                      Ben jij van plan jouw woning ingrijpend te verbouwen?*
                    </p>
                    <i className="fa fa-info-circle green-cyan" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ra1"
                        id="yes"
                        defaultValue="yes"
                        onclick="show9();"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Ja
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ra1"
                        id="no"
                        defaultValue="no"
                        onclick="show10();"
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                  <div
                    className="row mb-3 mt-3"
                    id="div5"
                    style={{ display: "none" }}
                  >
                    <div className="col-sm-12">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Omschrijving"
                        defaultValue={""}
                      />
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
                    Let op! Deze vragen gelden voor jou, jouw gezinsleden of
                    andere personen die onder deze verzekering vallen.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="add-ques-bx">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="ad-ques-text">
                        <p>
                          Heb jij of een belanghebbende ooit te maken gehad
                          met:*
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
                          <label className="form-check-label" htmlFor="yes">
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
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" mb-3 mt-3"
                    id="insudiv1"
                    style={{ display: "block" }}
                  >
                    <div className="hd-text">
                      <ul>
                        <li>
                          <a href="#" className="fw-medium">
                            Een schademelding
                          </a>
                        </li>
                        <li>
                          <a href="#" className="fw-medium">
                            Weigering bij een aanvraag of opzegging van de
                            Verzekeraar
                          </a>
                        </li>
                        <li>
                          <a href="#" className="fw-medium">
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
                        <span>
                          Zijn er in de afgelopen 5 jaar schaden veroorzaak of
                          geleden door gebeurtenissen die gedekt zijn op
                          verzekering(en) die jij aanvraagt?
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
                          <label className="form-check-label" htmlFor="yes">
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
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label className="fw-medium">Verzekering</label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label className="fw-medium">Woonverzekering</label>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label className="fw-medium">
                        Schadebedrag per gebeurtenis*
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        placeholder="€ 0,00"
                        type="text"
                        className="form-control mb-2"
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label className="fw-medium">Schade oorzaak*</label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <textarea
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Oorzaak"
                        defaultValue={""}
                      />
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
                          verzekeringsmaatschappij enige vorm van verzekering
                          geweigerd of opgezegd, of zijn er beperkende
                          voorwaarden of verhoogde premies aangekondigd, dan wel
                          verplicht gesteld die specifiek en uitsluitend voor
                          dat risico en voor de verzekering golden?
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
                          <label className="form-check-label" htmlFor="yes">
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
                          <label className="form-check-label" htmlFor="no">
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
                          Is er in de afgelopen 8 jaar sprake geweest van een
                          veroordeling (ongeacht de opgelegde straf) of een
                          strafbeschikking of een transactie (beide voor een
                          taakstraf van meer dan 20 uur), of aanraking met
                          justitie ter uitvoering van een opgelegde
                          (straf)maatregel in verband met bovenstaande, of een
                          een uitgebrachte dagvaaring in een lopende procedure,
                          alles ter zake van een misdrijf?
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
                          <label className="form-check-label" htmlFor="yes">
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
                          <label className="form-check-label" htmlFor="no">
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
              <Image
                src="/images/verification.png"
                width={52}
                height={52}
                alt="verification"
              />{" "}
              Verificatie
            </h4>
          </div>
          <div className="cerfi-bx">
            <div className="certi-cont-bx">
              <h6>
                Verfieer hier jouw bank gegevens en voorkom samen fraude.{" "}
                <i className="fas fa-info-circle text-success" />
              </h6>

              <div className="ac-num">
                <p>Ik bevestig mijn rekeningnummer</p>
                <Image
                  width={200}
                  height={200}
                  alt="aa"
                  src="/images/private.png"
                />
              </div>
              <Image
                className="ms-2"
                width={34}
                height={34}
                alt="aa"
                src="/images/time-left.png"
              />

                  <div className="mt-3">        
                <div className="mb-3">
                  <div className="form-check p-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="voorwaardenCheckbox"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="voorwaardenCheckbox"
                    >
                      Ik accepteer alle <a href="#" className="ac-con-bx">voorwaarden</a>.
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check p-0">
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
                </div>  
              <div className="ac-con-textarea">
                <label htmlFor>Ik heb nog een opmerking:</label>
                <textarea
                  name
                  id
                  cols={30}
                  rows={4}
                  className="form-control"
                  placeholder="Type een bericht..."
                  defaultValue={""}
                />
              </div>
              <div className="ac-con-btn">
                <a
                  href="#"
                  className="btn btn-light fw-medium px-3 py-2 rounded-5 border"
                >
                  Controleer gegevens
                </a>
                <a href="#" className="btn-two">
                  Aanvragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiabiilityLeftStep3;
