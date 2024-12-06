import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CredentialDetails = ({
  userDetails,
  register,
  formData,
  errors,
  setValue,
}) => {
  useEffect(() => {
    if (userDetails) {
      setValue("first_name", userDetails?.name);
      setValue("last_name", userDetails?.name);
      setValue("email", userDetails?.email);
      setValue("age", userDetails?.age);
      setValue("mobile_number", userDetails?.mobile);
      setValue("landline_number", userDetails?.landline_no);
    }
  }, [userDetails, setValue]);

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleKeyDown = (event) => {  
    event.preventDefault();  
  };  
    

  return (
    <>
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
              <label htmlFor="sex" className="col-sm-2 col-form-label">
                Geslacht
              </label>
              <div className="col-sm-4 d-flex align-items-center">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="male"
                    value="male"
                    defaultChecked={userDetails?.gender === "male"}
                    {...register("sex", { required: true })}
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
                    value="female"
                    defaultChecked={userDetails?.gender === "female"}
                    {...register("sex", { required: true })}
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
                  className={
                    errors.initials ? "form-control errorBox" : "form-control"
                  }
                  id="initials"
                  name="initials"
                  placeholder="Voorletters"
                  {...register("initials", { required: true })}
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="row mb-3">
              <label htmlFor="first_name" className="col-sm-3 col-form-label">
                Voornaam
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className={
                    errors.first_name ? "form-control errorBox" : "form-control"
                  }
                  id="first_name"
                  name="first_name"
                  placeholder="Bijv. Energise"
                  {...register("first_name", { required: true })}
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
                  className={
                    errors.interjections
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="interjections"
                  name="interjections"
                  placeholder="Bijv. Van der"
                  {...register("interjections", { required: true })}
                />
              </div>
            </div>
            {/* Third Row */}
            <div className="row mb-3">
              <label htmlFor="last_name" className="col-sm-3 col-form-label">
                Achternaam
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className={
                    errors.last_name ? "form-control errorBox" : "form-control"
                  }
                  id="last_name"
                  name="last_name"
                  placeholder="Bijv. Company"
                  {...register("last_name", { required: true })}
                />
              </div>
              <label htmlFor="age" className="col-sm-3 col-form-label">
                Geboortedatum
              </label>
              <div className="col-sm-3">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  className="form-control"
                  name="starting_date"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={100} 
                  onKeyDown={handleKeyDown}  
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
                  className={
                    errors.email ? "form-control errorBox" : "form-control"
                  }
                  id="email"
                  name="email"
                  placeholder="Bijv. Naam@mail.ni"
                  {...register("email", { required: true })}
                />
              </div>
              <label
                htmlFor="account_number"
                className="col-sm-3 col-form-label"
              >
                Rekeningnummer
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className={
                    errors.account_number
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="account_number"
                  name="account_number"
                  placeholder="NLOOBANK00000000"
                  {...register("account_number", { required: true })}
                />
              </div>
            </div>
            {/* Fifth Row */}
            <div className="row mb-3">
              <label
                htmlFor="mobile_number"
                className="col-sm-3 col-form-label"
              >
                Mobiel
              </label>
              <div className="col-sm-3">
                <input
                  type="tel"
                  className={
                    errors.mobile_number
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="mobile_number"
                  name="mobile_number"
                  placeholder="06-12345678"
                  {...register("mobile_number", { required: true })}
                />
              </div>
              <label
                htmlFor="landline_number"
                className="col-sm-3 col-form-label"
              >
                Vaste telefoon
              </label>
              <div className="col-sm-3">
                <input
                  type="tel"
                  className={
                    errors.landline_number
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="landline_number"
                  name="landline_number"
                  placeholder="Regio-0000000"
                  {...register("landline_number", { required: true })}
                />
              </div>
            </div>

            {/* Sixth Row */}
            <div className="row mb-3">
              <label htmlFor="postCode" className="col-sm-3 col-form-label">
                Postcode
              </label>
              <div className="col-sm-3">
                <span
                  className={
                    errors.landline_number
                      ? "form-control errorBox"
                      : "form-control"
                  }
                >
                  {formData ? formData.postal_code : ""}
                </span>
              </div>
              <label htmlFor="houseNumber" className="col-sm-3 col-form-label">
                Huisnummer
              </label>
              <div className="col-sm-3">
                <span
                  className={
                    errors.landline_number
                      ? "form-control errorBox"
                      : "form-control"
                  }
                >
                  {formData ? formData.house_no : ""}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CredentialDetails;
