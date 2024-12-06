import React, { useState } from "react";

const LoginBusinessRightSideCommercial = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="vac-right-en">
        <div className="vac-ener">
          <h4>Energise Vacatures</h4>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Functie</label>
              <input
                className="form-control"
                placeholder="Bijv. Sales manager"
                type="text"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Dienstverband</label>
              <input
                className="form-control"
                placeholder="Bijv. Fulltime"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="vac-left-box vac-box-scroll">
          <div className="vac-sp">
          <div className="vac-table">
            <div className="row px-2">
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <span className="num-text">1</span>
                  <ul>
                    <li>Salaris </li>
                    <li>Tot .... </li>
                    <li>per uur </li>
                  </ul>
                  <i className="fal fa-euro-sign"></i>
                </div>
              </div>
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <ul>
                    <li>Functie </li>
                    <li>.... </li>
                    <li>Manager </li>
                  </ul>
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <ul>
                    <li>Locatie </li>
                    <li>.... </li>
                  </ul>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <ul>
                    <li>Dienstverband </li>
                      <li>.... </li>
                    </ul>
                    <i className="fal fa-clock"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="vac-textarea">
              <textarea rows={2} className="form-control"></textarea>
            </div>
            <div className="text-center">
              {" "}
              <a href="#" className="btn-one mt-3">
                Lees meer
              </a>
            </div>
          </div>
          <div className="vac-sp">
          <div className="vac-table">
            <div className="row px-2">
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <span className="num-text">2</span>
                  <ul>
                    <li>Salaris </li>
                    <li>Tot .... </li>
                    <li>per uur </li>
                  </ul>
                  <i className="fal fa-euro-sign"></i>
                </div>
              </div>
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <ul>
                    <li>Functie </li>
                    <li>.... </li>
                    <li>Manager </li>
                  </ul>
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <ul>
                    <li>Locatie </li>
                    <li>.... </li>
                  </ul>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-6  col-sm-3 p-0">
                <div className="vac-box">
                  <ul>
                    <li>Dienstverband </li>
                    <li>.... </li>
                  </ul>
                  <i className="fal fa-clock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="vac-textarea">
            <textarea rows={2} className="form-control"></textarea>
          </div>
          <div className="text-center">
            {" "}
            <a href="#" className="btn-one mt-3">
              Lees meer
            </a>
            </div>
          </div>
          {isVisible && (
            <div className="vac-sp">
              <div className="vac-table">
          <div className="row px-2">
            <div className="col-6  col-sm-3 p-0">
              <div className="vac-box">
                <span className="num-text">3</span>
                <ul>
                  <li>Salaris </li>
                  <li>Tot .... </li>
                  <li>per uur </li>
                </ul>
                <i className="fal fa-euro-sign"></i>
              </div>
            </div>
            <div className="col-6  col-sm-3 p-0">
              <div className="vac-box">
                <ul>
                  <li>Functie </li>
                  <li>.... </li>
                  <li>Manager </li>
                </ul>
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="col-6  col-sm-3 p-0">
              <div className="vac-box">
                <ul>
                  <li>Locatie </li>
                  <li>.... </li>
                </ul>
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="col-6  col-sm-3 p-0">
              <div className="vac-box">
                <ul>
                  <li>Dienstverband </li>
                  <li>.... </li>
                </ul>
                <i className="fal fa-clock"></i>
              </div>
            </div>
          </div>
        </div>
              <div className="vac-textarea">
                <textarea rows={2} className="form-control"></textarea>
              </div>
              <div className="text-center">
                {" "}
                <a href="#" className="btn-one mt-3">
                  Lees meer
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="vac-btn">
          <a href="#" onClick={toggleVisibility} className="btn-one">
            Bekijk meer
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginBusinessRightSideCommercial;
