import React, { useState } from "react";

const LoginBusinessLeftSidePersonal = () => {

    const [height, setHeight] = useState("100px"); // Initial height
  
    const handleFocus = () => {
      setHeight("400px"); // Height when focused
    };
  
    const handleBlur = () => {
      setHeight("100px"); // Reset height when focus is lost
    };
  return (
    <>
      <div className="vac-left-box">
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
        <div className="vac-textarea text-areasrl">
          <textarea
            rows={10}
            className="form-control"
            placeholder="Beschrijving:"
            style={{ height: height, transition: "height 0.3s ease-in-out" }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="text-center"> <a href="#" className="btn-one mt-3">Reageer</a></div>
      </div>
    </>
  );
};

export default LoginBusinessLeftSidePersonal;
