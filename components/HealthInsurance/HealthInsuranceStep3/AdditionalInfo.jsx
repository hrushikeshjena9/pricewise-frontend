import Image from "next/image";
import React from "react";

const AdditionalInfo = ({ register, errors }) => {
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0 title-wimg">
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/partner.png"
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

          <div className="form-group d-flex align-items-center">
            <label htmlFor="gender" className="me-3 col-form-label">
              Geslacht
            </label>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="sex_1"
                id="male"
                defaultValue="Man"
                {...register("self_gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="male">
                <i className="fas fa-mars" /> Man
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sex_1"
                id="female"
                defaultValue="female"
                {...register("self_gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="female">
                <i className="fas fa-venus" /> Vrouw
              </label>
            </div>
          </div>

          <div className="row">
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
                <a
                  href="javascript:void();"
                  className="edit-nationality"
                  onclick="enableEdit()"
                >
                  Wijzigen
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="firstName" className="me-3 col-form-label">
                  Voornaam
                </label>
                <input
                  type="text"
                  className={
                    errors.self_firstname
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="firstName"
                  placeholder="Bijv. Energise"
                  {...register("self_firstname", { required: true })}
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
                  className={
                    errors.self_lastname
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="lastName"
                  placeholder="Bijv. Company"
                  {...register("self_lastname", { required: true })}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="birthDate" className="me-3 col-form-label">
                  BSN
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className={
                      errors.self_bsn ? "form-control errorBox" : "form-control"
                    }
                    id="birthDate"
                    placeholder="Burgerservicenummer"
                    {...register("self_bsn", { required: true })}
                  />
                  <a href="javascript:void(0);" className="ms-2">
                    <i className="fas text-success fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="birthDate" className="me-3 col-form-label">
                  Geboortedatum
                </label>
                <input
                  type="date"
                  className={
                    errors.self_DOB ? "form-control errorBox" : "form-control"
                  }
                  id="birthDate"
                  placeholder="DD-MM-JJJJ"
                  {...register("self_DOB", { required: true })}
                />
              </div>
            </div>
          </div>
          <p>
            <span>Partner</span> Vul de gegevens in die op de paspoort staan
            aangegeven.
          </p>
          <div className="form-group d-flex align-items-center">
            <label htmlFor="gender" className="me-3 col-form-label">
              Geslacht
            </label>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="sex_2"
                id="male"
                defaultValue="Man"
                {...register("partner_gender")}
              />
              <label className="form-check-label" htmlFor="male">
                <i className="fas fa-mars" /> Man
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sex_2"
                id="female"
                defaultValue="female"
                {...register("partner_gender")}
              />
              <label className="form-check-label" htmlFor="female">
                <i className="fas fa-venus" /> Vrouw
              </label>
            </div>
          </div>
          <div className="row">
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
                  {...register("partner_nationality")}
                />
                <a
                  href="javascript:void();"
                  className="edit-nationality"
                  onclick="enableEdit()"
                >
                  Wijzigen
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="partnerBirthDate"
                  className="me-3 col-form-label"
                >
                  Geboortedatum
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="partnerBirthDate"
                  placeholder="DD-MM-JJJJ"
                  {...register("partner_DOB")}
                />
              </div>
            </div>
            <div className="col-lg-6">
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
                  {...register("partner_firstname")}
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
                  {...register("partner_lastname")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="birthDate" className="me-3 col-form-label">
                  BSN
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    id="birthDate"
                    placeholder="Burgerservicenummer"
                    {...register("partner_bsn")}
                  />
                  <a href="javascript:void(0);" className="ms-2">
                    <i className="fas text-success fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="maritalStatus" className="me-3 col-form-label">
                  Burgelijkestaat
                </label>
                <select
                  className="form-select"
                  id="maritalStatus"
                  {...register("partner_marital_status")}
                >
                  <option value="unmarried">Ongehuwd</option>
                  <option value="married">Gehuwd</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
