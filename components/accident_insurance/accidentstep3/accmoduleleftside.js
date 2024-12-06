import Image from "next/image";
import React from "react";

function AccmoduleLeftSide() {
  return (
    <>
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
        Vul de resterende gegevens in die de aanbieder nodig heeft, zodat wij
        alles vlekkenloos kunnen regelen en jij snel hier van kan profiteren.
      </p>
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fas fa-envelope" /> Contactgegevens
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
                  placeholder="Voorletters"
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="row mb-3">
              <label htmlFor="firstname" className="col-sm-3 col-form-label">
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
                  placeholder="NL00BANK00000000"
                />
              </div>
            </div>
            {/* Five Row */}
            <div className="row mb-3">
              <label htmlFor="text" className="col-sm-3 col-form-label">
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
                className="col-sm-3 col-form-label"
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
              <label htmlFor="text" className="col-sm-3 col-form-label">
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
                className="col-sm-3 col-form-label"
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
            <i className="fas fa-map-marker-alt" /> Levering
          </h4>
        </div>
        <div className="card-body">
          <form>
            {/* First Row */}
            <div className="row">
              <div className="col-lg-6">
                <label className="col-auto col-form-label mb-0 me-3">
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
              <div className="col-lg-6 mb-3">
                <label
                  htmlFor="houseNumber"
                  className="col-auto col-form-label"
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
                  placeholder="Bijv 1200AA 112A"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fas fa-info-circle"></i> Aanvullende vragen
          </h4>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h4 className="mt-4">Verzekeringsverleden</h4>
          </div>
          <p>
            <span className="text-danger">
              Let op! Deze vragen gelden voor jou, jouw gezinsleden of andere
              personen die ander deze verzekering vallen.
            </span>
          </p>
          <div className="row">
            <div className="col-lg-6">
              <p>Heb jij of een belanghebbende ooit te maken gehad met:</p>
              <ul className="list-style-cr">
                <li className="fw-medium"> Een schademelding</li>
                <li className="fw-medium">
                   Weigering bij een aanvraag of opzegging van de
                  Verzekeraar
                </li>
                <li className="fw-medium">
                   Veroordeling of strafbeschikking
                </li>
              </ul>
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

          <div className="row mt-3">
            <div className="col-lg-6">
              <p className="fw-bold mb-0">Schade*</p>
              <p className="small fw-normal">
                Zijn er in de afgelopen 5 jaar schaden veroorzaak of geleden
                door gebeurtenissen die gedekt zijn op verzekering(en) die jij
                aanvraagt?
              </p>
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
          <div className="row mb-3">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label className="fw-bold my-2">Verzekering*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label className="fw-bold my-2">Ongevallenverzekering</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label className="fw-bold">Schadebedrag per gebeurtenis*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <input className="form-control mb-2" type="text" placeholder="€ 0&#x2c;00" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label className="fw-bold">Schade oorzaak*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <textarea
                className="form-control"
                rows={8}
                placeholder="Oorzaak"
              ></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <p className="fw-bold">Voorgaande verzekeringen*</p>
              <p className="fw-normal text-grey small">
                Zijn er in de afgelopen 5 jaar door een verzekeringsmaatschappij
                enige vorm van verzekering geweigerd of opgezegd, of zijn er
                beperkende voorwaarden of verhoogde premies aangekondigd, dan
                wel verplicht gesteld die specifiek en uitsluitend voor dat
                risico en voor de verzekering golden?
              </p>
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
                <div className="col-lg-12 mt-3">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Reden"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p className="fw-bold">Veroordeling of strafbeschikking</p>
              <p className="fw-normal text-grey small">
                Is er in de afgelopen & jaar sprake geweest van een veroordeling
                (ongeacht de opgelegde straf) of een strafbeschikking of een
                transactie (beide voor een taakstraf van meer dan 20 uur), of
                aanraking met justitie ter uitvoering van een opgelegde
                (straf)maatregel in verband met bovenstaande, of een een
                uitgebrachle dagvaaring in een lopende procedure, alles ter zake
                van een misdrijf?
              </p>
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
                <div className="col-lg-12 mt-3">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Reden"
                  ></textarea>
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
                  <p>Ik bevesting mijn rekeningnummer</p>
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
              </div>
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
    </>
  );
}

export default AccmoduleLeftSide;
