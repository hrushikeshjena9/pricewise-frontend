import React from "react";
import Image from "next/image";

const InternetTvStep3LeftForm2 = ({ setShow, show }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          <div className="col-12">
            <ul className="step-formholder">
              <li>
                <a className="text-warning">2</a>
              </li>
              <li>
                <a>2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-details">
          <div className="card mt-4">
            <div className="card-header">
              <h4 className="mb-0">
                <i className="fas fa-building"></i> Bedrijfsgegevens
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="bedrijfsnaam" className="form-label">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bedrijfsnaam"
                        placeholder="Bijv. Energise company"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="vestiging" className="form-label">
                        Vestiging
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="vestiging"
                        placeholder="Bijv. adres"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="kvknummer" className="form-label">
                        KVK Nummer
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="kvknummer"
                        placeholder="Bijv. 681237"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="functie" className="form-label">
                        Functie
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="functie"
                        placeholder="Bijv. Algemeen directeur"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mt-4">
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
                <div className="row mb-3">
                  <label
                    htmlFor="mobileNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Postcode
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode"
                    />
                  </div>
                  <label
                    htmlFor="landlineNumber"
                    className="col-sm-3 col-form-label"
                  >
                    Huisnummer &amp; toevoeging
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bijv. 112A"
                    />
                  </div>
                </div>
              </form>
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
                  <div className="col-lg-6">
                    <label className="col-auto col-form-label mb-0 me-3">
                      Gaat dit om een verhuizing?*{" "}
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
                  <div className="col-lg-6 ">
                    <label className="col-auto col-form-label mb-0 me-3">
                      Wil je een monteur voor de installatie?*
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
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="col-auto col-form-label mb-0 me-3">
                      Wijkt jouw postadres af?
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
                    <label className="col-auto col-form-label mb-0 me-3">
                      Voorkeur installatiedatum?
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                {/* Second Row for Additional Input Box */}
                {/* <div className="row mb-3" id="additionalInputRow">
                                    <label htmlFor="additionalInput" className="col-sm-6 col-form-label">Voer postcode in</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="additionalInput" name="additionalInput" placeholder="Voer postcode in" />
                                    </div>
                                </div> */}
                <div className="row mb-3">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bijv 1200AA 112A"
                    />
                    <a href="javascript:void(0);" className="text-warning">
                      <i className="fas fa-plus"></i> Extra vestiging
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <label className="col-auto col-form-label mb-0 me-3">
                      Ik wil mijn nummerbehouden
                    </label>
                    <div className="row">
                      <div className="col-lg-7">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Regio-00000000"
                        />
                      </div>
                      <div className="col-lg-5">
                        <a href="javascript:void(0);" className="text-warning">
                          <i className="fas fa-plus"></i> Extra lijn
                        </a>
                      </div>
                    </div>
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
            <h6>Verfieer hier jouw bank gegevens en voorkom samen fraude.</h6>
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
              <a href="#" className="btn btn-light fw-bold px-3 py-2 rounded-5 border">
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
      </div>
    </>
  );
};

export default InternetTvStep3LeftForm2;
