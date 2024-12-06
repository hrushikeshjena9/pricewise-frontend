import Image from "next/image";
import React, { useState } from "react";

const HealthInsuranceStep3left = () => {
  const [showInputRow, setShowInputRow] = useState(false);
  const handleRadioChange = (event) => {
    setShowInputRow(event.target.value === "yes");
  };

  return (
    <>
      <div className="col-lg-8">
        <div className="compare-toppart mt-2">
          <h2>Stel jouw deal vandaag veilig</h2>
          <div className="secure-wrp">
            <Image width={200} height={200} alt="aa" src="/images/secure.png" className="img-fluid secureimg" />
          </div>
          <p>
            Vul de resterende gegevens in die de aanbieder nodig heeft, zodat
            wij alles vlekkenloos kunnen regelen en jij snel hier van kan
            profiteren.
          </p>
        </div>
        <div className="profile-details">
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-envelope" /> Contactgegevens
              </h4>
            </div>
            <div className="card-body">
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
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0 title-wimg">
                <Image width={200} height={200} alt="aa" src="/images/partner.png" className="img-fluid" />
                Aanvullende gegevens
              </h4>
            </div>
            <div className="card-body">
              <p>
                <span>Jouw gegevens</span> Vul de gegevens in die op de paspoort
                staan aangegeven.
              </p>
              <form>
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
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        htmlFor="nationality"
                        className="me-3 col-form-label"
                      >
                        Nationaliteit
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nationality"
                        defaultValue="Nederlandse"
                        readOnly
                      />
                      <a
                        href="javascript:void();"
                        className="edit-nationality"
                        onclick="enableEdit()"
                      >
                        Wijzigen
                      </a>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="firstName"
                        className="me-3 col-form-label"
                      >
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
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName" className="me-3 col-form-label">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Bijv. Company"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="birthDate"
                        className="me-3 col-form-label"
                      >
                        Geboortedatum
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="birthDate"
                        placeholder="DD-MM-JJJJ"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="birthDate"
                        className="me-3 col-form-label"
                      >
                        BSN
                      </label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control"
                          id="birthDate"
                          placeholder="Burgerservicenummer"
                        />
                        <a href="javascript:void(0);" className="ms-2">
                          <i className="fas text-success fa-info-circle"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <span>Partner</span> Vul de gegevens in die op de paspoort
                  staan aangegeven.
                </p>
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
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        htmlFor="nationality"
                        className="me-3 col-form-label"
                      >
                        Nationaliteit
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nationality"
                        defaultValue="Nederlandse"
                        readOnly
                      />
                      <a
                        href="javascript:void();"
                        className="edit-nationality"
                        onclick="enableEdit()"
                      >
                        Wijzigen
                      </a>
                    </div>
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
                  <div className="col-lg-6">
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
                    <div className="form-group">
                      <label
                        htmlFor="birthDate"
                        className="me-3 col-form-label"
                      >
                        BSN
                      </label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control"
                          id="birthDate"
                          placeholder="Burgerservicenummer"
                        />
                        <a href="javascript:void(0);" className="ms-2">
                          <i className="fas text-success fa-info-circle"></i>
                        </a>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="maritalStatus"
                        className="me-3 col-form-label"
                      >
                        Burgelijkestaat
                      </label>
                      <select className="form-select" id="maritalStatus">
                        <option value="unmarried" selected>
                          Ongehuwd
                        </option>
                        <option value="married">Gehuwd</option>
                      </select>
                    </div>
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
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    Vul hier alle vragen in die voor de <span>aanvrager</span>
                    gelden.
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Woon of werk jij in het buitenland of krijg jij inkomen
                        uit het buitenland?
                      </label>
                    </div>
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
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Heb jij een eigen inkomen?
                      </label>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="abroadIncome"
                          id="inkomenyes"
                          value="yes"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inkomenyes"
                        >
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
                          id="inkomenno"
                          value="no"
                        />
                        <label className="form-check-label" htmlFor="inkomenno">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Wat is jouw bron van inkomen?
                      </label>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="abroadIncome"
                          id="inkomenyes"
                          value="yes"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inkomenyes"
                        >
                          Arbeid
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="abroadIncome"
                          id="uitkering"
                          value="no"
                        />
                        <label className="form-check-label" htmlFor="uitkering">
                          Uitkering
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="woonplaats" className="col-form-label">
                        Waar woon jij?
                      </label>
                      <select className="form-select" id="woonplaats">
                        <option value="nederland" selected>
                          Nederland
                        </option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor="werkplaats" className="col-form-label">
                        Waar werk jij?
                      </label>
                      <select className="form-select" id="werkplaats">
                        <option value="nederland" selected>
                          Nederland
                        </option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    Vul hier alle vragen in die voor de <span>aanvrager</span>
                    gelden.
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Woon of werk jij in het buitenland of krijg jij inkomen
                        uit het buitenland?
                      </label>
                    </div>
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
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Heb jij een eigen inkomen?
                      </label>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="abroadIncome"
                          id="inkomenyes"
                          value="yes"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inkomenyes"
                        >
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
                          id="inkomenno"
                          value="no"
                        />
                        <label className="form-check-label" htmlFor="inkomenno">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="abroadIncome" className="col-form-label">
                        Wat is jouw bron van inkomen?
                      </label>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="abroadIncome"
                          id="inkomenyes"
                          value="yes"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inkomenyes"
                        >
                          Arbeid
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="abroadIncome"
                          id="uitkering"
                          value="no"
                        />
                        <label className="form-check-label" htmlFor="uitkering">
                          Uitkering
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="woonplaats" className="col-form-label">
                        Waar woon jij?
                      </label>
                      <select className="form-select" id="woonplaats">
                        <option value="nederland" selected>
                          Nederland
                        </option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor="werkplaats" className="col-form-label">
                        Waar werk jij?
                      </label>
                      <select className="form-select" id="werkplaats">
                        <option value="nederland" selected>
                          Nederland
                        </option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-home" /> Levering
              </h4>
            </div>
            <div className="card-body">
              <form>
                {/* First Row */}
                <div className="row mb-3">
                  <div className="col-lg-6 d-flex align-items-center">
                    <label className="col-auto col-form-label mb-0 me-3">
                      Wijkt jou postadres af?
                    </label>
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="yes1"
                          defaultValue="yes"
                        />
                        <label className="form-check-label" htmlFor="yes1">
                          Ja
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="no1"
                          defaultValue="no"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="no1">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6 d-flex align-items-center">
                    <label className="col-auto col-form-label mb-0 me-3">
                      Overstapservice?*
                    </label>
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="postalAddressDifferent"
                          id="yes"
                          value="yes"
                          onChange={handleRadioChange}
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
                          value="no"
                          onChange={handleRadioChange}
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="no">
                          Nee
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Row for Additional Input Box */}
                {showInputRow && (
                  <div className="row mb-3" id="additionalInputRow">
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
                )}
              </form>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0"></h4>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="acceptConditions"
                      name="acceptConditions"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="acceptConditions"
                    >
                      Ik accepteer alle voorwaarden.*
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="stayInformed"
                      name="stayInformed"
                    />
                    <label className="form-check-label" htmlFor="stayInformed">
                      Ik wil graag op de hoogte blijven van alle acties van
                      Energise Company.
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn button-customize">Aanpassen</button>
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
                <select className="form-select">
                  <option selected disabled>
                    Selecteer een betaalmethode
                  </option>
                  <option value="creditcard">Creditcard</option>
                  <option value="paypal">PayPal</option>
                  <option value="bankoverschrijving">Bankoverschrijving</option>
                </select>
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
                    Ik accepteer alle voorwaarden.
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
  );
};

export default HealthInsuranceStep3left;
