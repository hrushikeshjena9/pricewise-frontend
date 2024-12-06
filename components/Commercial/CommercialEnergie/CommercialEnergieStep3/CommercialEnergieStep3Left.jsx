import Image from "next/image";
import React from "react";
const CommercialEnergieStep3Left = () => {
  return (
    <div className="col-lg-8">
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
              <div className="row">
                <div className="col-md-6">
                  <table className="table table-borderless d-flex mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="name" className="col-form-label">
                            Geslacht
                          </label>
                        </td>
                        <td>
                          <div className="form-check text-nowrap">
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
                        </td>
                        <td>
                          <div className="form-check text-nowrap">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sex"
                              id="female"
                              defaultValue="female"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              <i className="fas fa-venus" /> Vrouw
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <label
                  htmlFor="initials"
                  className="col-md-3 col-sm-6 col-form-label"
                >
                  Voorletters
                </label>
                <div className="col-md-3 col-sm-6 ">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Voornaam
                </label>
                <div className="col-md-3 col-sm-6 ">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Tussenvoegsels
                </label>
                <div className="col-md-3 col-sm-6 ">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Achternaam
                </label>
                <div className="col-md-3 col-sm-6 ">
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
                  className="col-md-3 col-sm-6 col-form-label"
                >
                  Geboortedatum
                </label>
                <div className="col-md-3 col-sm-6 ">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  E-mail
                </label>
                <div className="col-md-3 col-sm-6 ">
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
                  className="col-md-3 col-sm-6 col-form-label"
                >
                  Rekeningnummer
                </label>
                <div className="col-md-3 col-sm-6">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Mobiel
                </label>
                <div className="col-md-3 col-sm-6">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Vaste telefoon
                </label>
                <div className="col-md-3 col-sm-6">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Postcode
                </label>
                <div className="col-md-3 col-sm-6">
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
                  className="col-md-3 col-sm-6  col-form-label"
                >
                  Huisnummer &amp; toevoeging
                </label>
                <div className="col-md-3 col-sm-6">
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
            <h4 className="mb-0">
              <i className="fas fa-home" /> Levering
            </h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <label className="col-form-label mb-0 me-3">
                  Woon of werk je op dit adres?*
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
                <label className="col-form-label mb-0 me-3">
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
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bijv 1200AA 112A"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="col-form-label mb-0 me-3">
                  Ga je verhuizen?*
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
                <label htmlFor="additionalInput" className="col-form-label">
                  Voorkeur startdatum?
                </label>
                <div id="additionalInputRow">
                  <input
                    type="date"
                    className="form-control"
                    id="additionalInput"
                    name="additionalInput"
                    placeholder="Voer postcode in"
                  />
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
                  Ik accepteer alle{" "}
                  <a href="javascript:void(0);" className="ac-con-bx">
                    voorwaarden
                  </a>
                  .
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
                  Ik wil graag op de hoogte blijven van alle acties van Energise
                  Company.
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
  );
};

export default CommercialEnergieStep3Left;
