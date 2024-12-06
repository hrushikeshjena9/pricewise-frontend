import Image from "next/image";
import React from "react";

function DeathRiskStep3LeftSide() {
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
                  placeholder="E"
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
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/agreement.png"
              className="img-fluid"
            />
            Aanvullende gegevens
          </h4>
        </div>
        <div className="card-body">
          <p>
            <span>Jouw gegevens</span> Vul de gegevens in die op de paspoort
            staan aangegeven.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group d-flex align-items-center">
                <label htmlFor="gender" className="me-3 col-form-label">
                  Geslacht
                </label>
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
              <div className="row">
                <div className="col-12">
                <div className="form-group">
                <label htmlFor="firstName" className="me-3 col-form-label">
                  Voornaam
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Bijv. Energise"
                />
              </div>
                </div>
                <div className="col-lg-12">
              <div className="form-group">
                <label
                  htmlFor="partnerBirthDate"
                  className="me-3 col-form-label"
                >
                  Achternaam
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="partnerBirthDate"
                  placeholder="Bijv. Company"
                />
              </div>
            </div>
                <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="birthDate" className="me-3 col-form-label">
                  Geboortedatum
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthDate"
                  placeholder="DD-MM-JJJJ"
                />
              </div>
            </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="nationality" className="me-3 col-form-label">
                  Nationaliteit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nationality"
                  defaultValue="Nederlandse"
                  readOnly
                />
                <a href="javascript:void();" className="edit-nationality">
                  Wijzigen
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p>
                <span>Partner</span> Vul de gegevens in die op de paspoort staan
                aangegeven.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="form-group d-flex align-items-center">
                <label htmlFor="gender" className="me-3 col-form-label">
                  Geslacht
                </label>
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
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label
                      htmlFor="partnerBirthDate"
                      className="me-3 col-form-label"
                    >
                      Voornaam
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="partnerBirthDate"
                      placeholder="Bijv. Energise"
                    />
                  </div>
                </div>
                <div className="col-12">
                <div className="form-group">
                <label
                  htmlFor="partnerBirthDate"
                  className="me-3 col-form-label"
                >
                  Achternaam
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="partnerBirthDate"
                  placeholder="Bijv. Company"
                />
              </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label
                      htmlFor="partnerBirthDate"
                      className="me-3 col-form-label"
                    >
                      Geboortedatum
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="partnerBirthDate"
                      placeholder="DD-MM-JJJJ"
                    />
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="nationality" className="me-3 col-form-label">
                  Nationaliteit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nationality"
                  defaultValue="Nederlandse"
                  readOnly
                />
                <a href="javascript:void();" className="edit-nationality">
                  Wijzigen
                </a>
              </div>
            </div>
            <hr/>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="maritalStatus" className="me-3 col-form-label">
                  Burgelijkestaat
                </label>
                <select className="form-select" id="maritalStatus">
                  <option value="unmarried" selected>
                    Selecteer..
                  </option>
                  <option value="married">Gehuwd</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <div className="additional-ques-box-title">
            <h4 className="mb-0">
              <Image
                width={200}
                height={200}
                alt="aa"
                src="/images/interview.png"
                className="img-fluid"
              />
              Aanvullende vragen <i className="fas fa-info-circle" />
            </h4>
          </div>
        </div>
        <div className="card-body">
          <div className="add-ques-bx">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <p>
                  Wat is het bestedingsdoel waarvoor jij jouw
                  overlijdenrisicoverzekering wilt afsluiten?
                  <a href="#" className="info-txt ">
                    <i className="fas fa-info-circle text-success ms-2" />
                  </a>
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <select className="form-select">
                      <option>Hypotheek</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p>Wordt deze overlijdensrisicoverzekering verpand?</p>
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
                    />
                    <label className="form-check-label" htmlFor="no">
                      Nee
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p>Bij welke hypotheekverstrekker wordt het ondergebracht?</p>
              </div>
              <div className="col-lg-6">
                <select className="form-select">
                  <option>Selecteer</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className="col-lg-6">
                <p>In welke plaats is de hypotheekverstrekker gevestigd?</p>
              </div>
              <div className="col-lg-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-6">
                <p>Sluit je bij Energise Company cok een hypotheek af</p>
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
                    />
                    <label className="form-check-label" htmlFor="no">
                      Nee
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p>Wanneer heb je dit afgesloten?</p>
              </div>
              <div className="col-lg-6">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <p>
                  Vul hier alle vragen in die voor de <span>aanvrager</span>{" "}
                  gelden.
                </p>
                <p>
                  Ben jij door een verzekeraar ooit geweigerd of heb jij ooit
                  een premieverhoging gehad voor een verzekering waar medische
                  acceptatie voor nodig was?
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent"
                        id="yes"
                        defaultValue="yes"
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
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                </p>
                <label className="fw-bold">Welke verzekeraar?</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Verzekeraar"
                />
                <label className="fw-bold mt-2">
                  Wanneer is dit voorgevallen?
                </label>
                <input type="date" className="form-control" />
                <textarea
                  rows={4}
                  className="form-control mt-1"
                  placeholder="Oorzaak"
                ></textarea>
                <p className="mb-0 mt-3">
                  Heb jij in de afgelopen 3 jaar een of meerdere
                  overlijdensrisicoverzekeringen afgesloten of verhoogd, die nog
                  na 01-12-2021 blijven doorlopen?
                </p>
                <div className="d-flex form-flex mt-md-25">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="postalAddressDifferent"
                      id="yes"
                      defaultValue="yes"
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
                    />
                    <label className="form-check-label" htmlFor="no">
                      Nee
                    </label>
                  </div>
                </div>
                <label className="fw-medium mt-2">
                  Om hoeveel verzekeringen gaat het?
                </label>
                <input type="number" className="form-control" />
                <label className="fw-medium mt-2">
                  In welke jaar is dit afgesloten/gewijzigd?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="JJJJ"
                />
                <label className="fw-medium mt-2">
                  Verzekerd bedrag bij overlijden?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="€...."
                />
              </div>
              <div className="col-lg-6">
                <p>
                  Vul hier alle vragen in die voor jouw <span>partner</span>{" "}
                  gelden.
                </p>
                <p>
                  Is jouw partner door een verzekeraar ooit geweigerd of heeft
                  hij/zij ooit een premieverhoging gehad voor een verzekering
                  waar medische acceptatie voor nodig was?
                  <div className="d-flex form-flex">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postalAddressDifferent"
                        id="yes"
                        defaultValue="yes"
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
                      />
                      <label className="form-check-label" htmlFor="no">
                        Nee
                      </label>
                    </div>
                  </div>
                </p>
                <label className="fw-bold">Welke verzekeraar?</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Verzekeraar"
                />
                <label className="fw-bold mt-2">
                  Wanneer is dit voorgevallen?
                </label>
                <input type="date" className="form-control" />
                <textarea
                  rows={4}
                  className="form-control mt-1"
                  placeholder="Oorzaak"
                ></textarea>
                <p className="mb-0 mt-3">
                  Heeft jouw partner in de afgelopen 3 jaar een of meerdere
                  overlijdensrisicoverzekeringen afgesloten of verhoogd, die nog
                  na 01-12-2021 blijven doorlopen?
                </p>
                <div className="d-flex form-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="postalAddressDifferent"
                      id="yes"
                      defaultValue="yes"
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
                    />
                    <label className="form-check-label" htmlFor="no">
                      Nee
                    </label>
                  </div>
                </div>
                <label className="fw-medium mt-2">
                  Om hoeveel verzekeringen gaat het?
                </label>
                <input type="number" className="form-control" />
                <label className="fw-medium mt-2">
                  In welke jaar is dit afgesloten/gewijzigd?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="JJJJ"
                />
                <label className="fw-medium mt-2">
                  Verzekerd bedrag bij overlijden?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="€...."
                />
              </div>
            </div>
          </div>
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
              <div className="col-lg-6 d-flex align-items-center">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-medium">Wijkt jou postadres af?</label>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="yes"
                          defaultValue="yes"
                        />
                        <label className="form-check-label mt-1" htmlFor="yes">
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
                        <label className="form-check-label mt-1" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <label htmlFor="houseNumber" className="col-form-label">
                  Voorkeur startdatum?*
                </label>
                <input
                  type="date"
                  className="form-control "
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
            <i className="fas fa-shield-check" /> Verificatie
          </h4>
        </div>
        <div className="cerfi-bx">
          <div className="certi-cont-bx">
            <div className="mb-3">
            <h6>
              Verfieer hier jouw bank gegevens en voorkom samen fraude.
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
                  Ik accepteer alle{" "}
                  <a href="#" className="ac-con-bx">
                    voorwaarden
                  </a>
                  .
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
                  Ik wil graag op de hoogte blijven van alle acties van Energise
                  Company.
                </label>
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
                className="btn btn-light fw-bold px-3 py-2 rounded-5 border"
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
    </>
  );
}

export default DeathRiskStep3LeftSide;
