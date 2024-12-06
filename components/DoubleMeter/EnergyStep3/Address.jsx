import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Address = ({ register, errors, setValue, handleSubmit }) => {
  const [isPostalAddressDifferent, setIsPostalAddressDifferent] = useState(false);

  const handleRadioChange = (e) => {
    setIsPostalAddressDifferent(e.target.value === "yes");
  };

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
            <i className="fas fa-home" /> Adres
          </h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-6">
                <label className="col-form-label mb-0 me-3">
                  Woon of werk je op dit adres?*
                </label>
                <div className="d-flex">
                <div
                    className="card shadow-sm"
                    style={{
                      maxWidth: "300px",
                      padding: "15px",
                      margin: "10px",
                    }}
                  >
                  <div className="form-check me-3">
                    
                    <label className="form-check-label" >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="live_or_work"
                      id="yes"
                      defaultValue="yes"                 
                      
                    />
                    Ja
                    </label>
                  </div>
                  </div>
                  <div
                    className="card shadow-sm"
                    style={{
                      maxWidth: "300px",
                      padding: "15px",
                      margin: "10px",
                    }}
                  >
                    <div className="form-check">
                      <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="live_or_work"
                        id="no"
                        defaultValue="no"
                        
                      />
                        Nee
                      </label>
                    </div>
                  </div>
                </div>
                <label className="col-form-label mb-0 me-3">
                  Wijkt jouw postadres af?*
                </label>
                <div className="d-flex">

                <div
                    className="card shadow-sm"
                    style={{
                      maxWidth: "300px",
                      padding: "15px",
                      margin: "10px",
                    }}
                  >
                  <div className="form-check me-3">
                    <label className="form-check-label" >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isPostalCodeDiffer"
                      id="yes"
                      defaultValue="yes"
                      onChange={handleRadioChange}
                    />
                      Ja
                    </label>
                  </div>   </div>

                  <div
                    className="card shadow-sm"
                    style={{
                      maxWidth: "300px",
                      padding: "15px",
                      margin: "10px",
                    }}
                  >
                  <div className="form-check">
                    <label className="form-check-label" >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isPostalCodeDiffer"
                      id="no"
                      defaultValue="no"
                      onChange={handleRadioChange}
                      
                    />
                      Nee
                    </label>
                  </div>
                </div>
                </div>
                {isPostalAddressDifferent && (
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bijv 1200AA 112A"
                    name="differ_postal"
                  />
                </div>
                )}
              </div>
              <div className="col-md-6">
                <label className="col-form-label mb-0 me-3">
                  Ga je verhuizen?*
                </label>
                <div className="d-flex">
                <div
                    className="card shadow-sm"
                    style={{
                      maxWidth: "300px",
                      padding: "15px",
                      margin: "10px",
                    }}
                  >
                  <div className="form-check me-3">
                    <label className="form-check-label" >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="is_moving"
                      id="yes"
                      defaultValue="yes"
                    />
                      Ja
                    </label>
                  </div>
                  </div>
                  <div
                    className="card shadow-sm"
                    style={{
                      maxWidth: "300px",
                      padding: "15px",
                      margin: "10px",
                    }}
                  >
                  <div className="form-check">
                    <label className="form-check-label" >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="is_moving"
                      id="no"
                      defaultValue="no"
                      
                    />
                      Nee
                    </label>
                  </div>
                </div>
                </div>
                <label htmlFor="additionalInput" className="col-form-label">
                  Voorkeur startdatum?
                </label>
                <div id="additionalInputRow">
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
            </div>
            <div
              className="row mb-3"
              id="additionalInputRow"
              style={{ display: "none" }}
            >
              <label
                htmlFor="additionalInput"
                className="col-sm-6 col-form-label"
              >
                Voer postcode in
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="additionalInput"
                  name="houseNumber"
                  placeholder="Voer postcode in"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Address;
