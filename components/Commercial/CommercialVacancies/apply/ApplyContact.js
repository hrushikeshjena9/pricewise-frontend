import React from "react";

const ApplyContactCommercial = ({setCount}) => {
 
  return (
    <>
      <div className="col-lg-4 col-md-6 mx-auto">
        <div className="apply-form">
          <div className="apply-title">
            <h4>Contactgegevens</h4>
          </div>
          <div className="applyform-text">
            <div className="row">
              <div className="col-lg-3">
                <label>Geslacht</label>
              </div>
              <div className="col-lg-auto col-md-auto col-sm-auto app-radio-icon">
                <input
                  className="form-check-input"
                  type="radio"
                  id="man"
                  name="geslacht"
                />
                <label htmlFor="man">Dhr </label>
              </div>
              <div className="col-lg-auto col-md-auto col-sm-auto app-radio-icon">
                <input
                  className="form-check-input"
                  type="radio"
                  id="vrouw"
                  name="geslacht"
                />
                <label htmlFor="vrouw">Mvr</label>
              </div>
              <div className="col-lg-auto col-md-auto col-sm-auto app-radio-icon">
                <input
                  className="form-check-input"
                  type="radio"
                  id="vrouw"
                  name="geslacht"
                />
                <label htmlFor="vrouw">n.v.t</label>
              </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Voornaam</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Achternaam</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Telefoonnummer</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Woonplaats</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
            </div>
            <div className="text-center">
            <button className="btn-one" onClick={() => setCount(1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyContactCommercial;