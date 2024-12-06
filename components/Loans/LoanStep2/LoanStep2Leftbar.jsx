import Image from "next/image";
import React, { useState } from "react";
import MailModal from "../../CommonModals/MailModal";

const LoanStep2Leftbar = () => {
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(10);
  const [rangeValue3, setRangeValue3] = useState(1);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleRangeChange2 = (e) => {
    setRangeValue2(parseInt(e.target.value));
  };
  const handleRangeChange3 = (e) => {
    setRangeValue3(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  const handleInputChange2 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  const handleInputChange3 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue3(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <div className="col-lg-4 my-4">
        <div className="yourdetailsbox">
          <h5>Jouw gegevens:</h5>
          <ul className="infodetails">
            <li>
              {" "}
              Vergelijking: <span />
            </li>
            <li>
              {" "}
              Postcode: <span />
            </li>
            <li>
              {" "}
              Huisnummer: <span />
            </li>
            <li>
              {" "}
              Geboortedatum: <span />
            </li>
          </ul>
          <div className="yourdetailedit">
            <div className="row">
              <div className="col-lg-6">
                <a href="javascript:void(0);">
                  <i className="fas fa-cog" /> Wijzig{" "}
                </a>
              </div>
              <div className="col-lg-6 text-end">
                <ul>
                  <li>
                    <i className="fas  fa-user" />
                    <span>1/1</span>
                  </li>
                  <li>
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src="/images/viewpop.png"
                      className="img-fluid"
                    />
                    <span>1/1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="loan-left">
          <div className="row">
            <div className="col-8">
              <div className="row mb-2">
                <div className="col-12 position-relative">
                  <select className="form-select" aria-label="Select">
                    <option disabled selected>
                      Bestedingsdoel
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div className="infcalcubx only-info-absolute">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-check ps-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="bankierVeilig"
                    />
                    <label className="form-check-label" htmlFor="bankierVeilig">
                      {" "}
                      Verloving{" "}
                    </label>
                  </div>
                  <div className="form-check ps-0">
                    <input
                      className="form-check-input  me-2"
                      type="checkbox"
                      defaultValue
                      id="antiDiefstal"
                    />
                    <label className="form-check-label" htmlFor="antiDiefstal">
                      {" "}
                      Vervoersmiddel{" "}
                    </label>
                  </div>
                  <div className="form-check ps-0">
                    <input
                      className="form-check-input  me-2"
                      type="checkbox"
                      defaultValue
                      id="antiDiefstal"
                    />
                    <label className="form-check-label" htmlFor="antiDiefstal">
                      {" "}
                      Vebouwing{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 position-relative">
                  <label className="form-label labeltitle mb-0">Service</label>
                  <div className="infcalcubx only-info-absolute">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                  </div>
                </div>
                <div className="col-sm-12 mt-2">
                  <div className="form-check">
                    <input
                      className="form-check-input  me-2"
                      type="radio"
                      defaultValue
                      id="Windows"
                    />
                    <label className="form-check-label" htmlFor="Windows">
                       Zelfstandig
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  me-2"
                      type="radio"
                      defaultValue
                      id="Windows"
                    />
                    <label className="form-check-label" htmlFor="Windows">
                        Begeleiding
                    </label>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-sm-12 radiobx d-none">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-4">
                      <input type="radio" name="test" id="cbas4" />
                      <label htmlFor="cbas4">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/motivate-2.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Zelfstandig</span>
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-4">
                      <input type="radio" name="test" id="cbas5" />
                      <label htmlFor="cbas5">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/guidance.png"
                          className="img-fluid"
                        />
                        <span className="checkbox-label">Begeleiding</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <label className="form-label labeltitle">
                        Maximaal lenen
                      </label>
                    </div>
                    <div className="col-12 position-relative">
                      <input
                        type="number"
                        className="form-control mb-0"
                        id="numberInput5"
                        min={1}
                        max={10000}
                        value={rangeValue}
                        onChange={handleInputChange}
                      />
                      <div className="infcalcubx hulpNinfo-in-position hulpNinfo-in-res-pos">
                        <ul className="list-unstyled list-flex">
                          <li>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              aria-label="Content Goes Here"
                              data-bs-original-title="Content Goes Here"
                            >
                              <i className="fas fa-2x fa-info-circle" />
                            </a>
                          </li>
                          <li className="hulp-in-relative">
                            <a
                              data-bs-toggle="modal"
                              href="#quantityModalToggle"
                              role="button"
                              className="calculatorwrp"
                            >
                              <i className="fas fa-calculator" />
                              <span>Hulp nodig?</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Model Start */}
                <div
                  className="modal quantityModal fade"
                  id="quantityModalToggle"
                  aria-hidden="true"
                  aria-labelledby="quantityModalToggleLabel"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fas fa-times" />
                        </button>
                        <div className="selectquantity">
                          <div className="quantitybxtitle">
                            <ul>
                              <li>
                                <Image
                                  width={200}
                                  height={200}
                                  alt="aa"
                                  src="/images/serve-dinner.png"
                                />
                              </li>
                              <li>
                                <h2>Selecteer of vul in</h2>
                              </li>
                              <li>
                                <i className="fas fa-2x fa-calculator" />
                              </li>
                            </ul>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className="subtitleqyt">
                                <li>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/dish.png"
                                    className="img-fluid"
                                  />
                                </li>
                                <li>
                                  <h5>Gangen</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 radiobx">
                              <div className="row">
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb11" />
                                  <label htmlFor="cb11">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/soup.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Voorgerecht
                                    </span>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb12" />
                                  <label htmlFor="cb12">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/dish.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Hoofdgerecht
                                    </span>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb13" />
                                  <label htmlFor="cb13">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/ice-cream.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Dessert
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className="subtitleqyt">
                                <li>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/cutlery.png"
                                    className="img-fluid"
                                  />
                                </li>
                                <li>
                                  <h5>Gerechten</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 radiobx">
                              <div className="row">
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb14" />
                                  <label htmlFor="cb14">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/soup.png"
                                      className="img-fluid"
                                    />
                                  </label>
                                  <select
                                    className="form-select"
                                    id="voorgerecht"
                                  >
                                    <option value disabled selected>
                                      voorgerecht
                                    </option>
                                    <option value="optie1">Optie 1</option>
                                    <option value="optie2">Optie 2</option>
                                    <option value="optie3">Optie 3</option>
                                    {/* Add more options as needed */}
                                  </select>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb15" />
                                  <label htmlFor="cb15">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/dish.png"
                                      className="img-fluid"
                                    />
                                  </label>
                                  <select
                                    className="form-select"
                                    id="voorgerecht"
                                  >
                                    <option value disabled selected>
                                      Hoofdgerecht
                                    </option>
                                    <option value="optie1">Optie 1</option>
                                    <option value="optie2">Optie 2</option>
                                    <option value="optie3">Optie 3</option>
                                    {/* Add more options as needed */}
                                  </select>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb16" />
                                  <label htmlFor="cb16">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/ice-cream.png"
                                      className="img-fluid"
                                    />
                                  </label>
                                  <select
                                    className="form-select"
                                    id="voorgerecht"
                                  >
                                    <option value disabled selected>
                                      Dessert
                                    </option>
                                    <option value="optie1">Optie 1</option>
                                    <option value="optie2">Optie 2</option>
                                    <option value="optie3">Optie 3</option>
                                    {/* Add more options as needed */}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className="subtitleqyt">
                                <li>
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/waitress.png"
                                    className="img-fluid"
                                  />
                                </li>
                                <li>
                                  <h5>Service</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 radiobx">
                              <div className="row">
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb17" />
                                  <label htmlFor="cb17">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/waitress.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Tafelbediende
                                    </span>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <input type="radio" name="test" id="cb18" />
                                  <label htmlFor="cb18">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/buffet.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Lopendbuffet
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="popupbtn">
                              <p>
                                Catering budget: <span>€ 3.000</span>
                              </p>
                              <div className="row">
                                <div className="col-12 text-center  ">
                                  <button className="btnps">Opslaan</button>
                                  <a href="#" className="reset">
                                    <i className="fas fa-2x fa-sync-alt" />
                                    <span>Reset</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Model End */}
                <div className="col-12">
                  <input
                    type="range"
                    className="form-range mb-0"
                    id="customRange5"
                    min={1}
                    max={10000}
                    value={rangeValue}
                    onChange={handleRangeChange}
                  />

                  <label htmlFor="customRange5" className="form-label">
                    <div className="cus-num">
                      <span id="rangeValue5">€ 1</span>
                      <span>OF €10000</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12">
                      <label className="form-label labeltitle">
                        Verwachte lening
                      </label>
                    </div>
                    <div className="col-12 position-relative">
                      <input
                        type="number"
                        className="form-control mb-0"
                        id="numberInput5"
                        min={1}
                        max={10000}
                        value={rangeValue2}
                        onChange={handleInputChange2}
                      />
                      <div className="infcalcubx only-info-absolute">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Content Goes Here"
                          data-bs-original-title="Content Goes Here"
                        >
                          <i className="fas fa-2x fa-info-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="range"
                    className="form-range mb-0"
                    id="customRange5"
                    min={1}
                    max={10000}
                    value={rangeValue2}
                    onChange={handleRangeChange2}
                  />
                  <label htmlFor="customRange5" className="form-label">
                    <div className="cus-num">
                      <span id="rangeValue5">€ 1</span>
                      <span>OF €10000</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="yourdetailedit">
                <div className="row">
                  <div className="col-lg-12">
                    <a href="javascript:void(0);">
                      <i className="fas fa-cog" /> Wijzig{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="more-view mb-2">
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-warning"
                >
                  Meer tonen <i className="fas fa-caret-down" />
                </a>
              </div>
              <div className="row">
                <div className="col-12">
                  <label className="form-label labeltitle">Totaal budget</label>
                </div>
                <div className="col-12 position-relative">
                  <input
                    type="number"
                    className="form-control "
                    id="numberInput4"
                    min={1}
                    max={300}
                    value={rangeValue3}
                    onChange={handleInputChange3}
                  />
                  <div className="infcalcubx only-info-absolute">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Content Goes Here"
                      data-bs-original-title="Content Goes Here"
                    >
                      <i className="fas fa-2x fa-info-circle" />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="range"
                    className="form-range"
                    id="customRange4"
                    min={1}
                    max={300}
                    value={rangeValue3}
                    onChange={handleRangeChange3}
                  />
                  <label htmlFor="customRange5" className="form-label">
                    <div className="cus-num">
                      <span id="rangeValue5">€ 1</span>
                      <span>OF €300</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="support">
        <div className="row">
        <div className="col-lg-9 col-11">
          <select className="form-select mb-2" aria-label="Select">
            <option disabled selected>
              Inkomsten bron
            </option>
            <option value="option1">Option 1</option>
            <option value="option1">Option 2</option>
            <option value="option1">Option 3</option>
          </select>
          <div className="form-check ps-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              defaultValue
              id="bankierVeilig"
            />
            <label className="form-check-label" htmlFor="bankierVeilig">
              {" "}
              Onderneming (..){" "}
            </label>
          </div>
          <div className="form-check ps-0">
            <input
              className="form-check-input  me-2"
              type="checkbox"
              defaultValue
              id="antiDiefstal"
            />
            <label className="form-check-label" htmlFor="antiDiefstal">
              {" "}
              Loondienst (.){" "}
            </label>
          </div>

          <select className="form-select mb-2" aria-label="Select">
            <option disabled selected>
              Extra filters
            </option>
            <option value="option1">Option 1</option>
            <option value="option1">Option 2</option>
            <option value="option1">Option 3</option>
          </select>
          <div className="form-check d-flex ps-0">
            <input
              className="form-check-input  me-2"
              type="checkbox"
              defaultValue
              id="klantenscore"
            />
            <label className="form-check-label" htmlFor="klantenscore">
              {" "}
              Klantenscore <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </label>
          </div>
          <div className="form-check d-flex ps-0">
            <input
              className="form-check-input  me-2"
              type="checkbox"
              defaultValue
              id="bankierVeilig"
            />
            <label className="form-check-label" htmlFor="bankierVeilig">
              Tussentijds vrij aflossen (..)
            </label>
          </div>
          </div>
          </div>
          <div className="col-lg-9 col-11">
            <div className="row">
              <div className="col-12">
                <label className="form-label labeltitle">Looptijd</label>
              </div>
              <div className="col-12 position-relative">
                <input
                  type="number"
                  className="form-control "
                  id="numberInput4"
                  min={1}
                  max={300}
                  value={rangeValue3}
                  onChange={handleInputChange3}
                />
                <div className="infcalcubx only-info-absolute">
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    aria-label="Content Goes Here"
                    data-bs-original-title="Content Goes Here"
                  >
                    <i className="fas fa-2x fa-info-circle" />
                  </a>
                </div>
              </div>
              <div className="col-12">
                <input
                  type="range"
                  className="form-range"
                  id="customRange4"
                  min={1}
                  max={300}
                  value={rangeValue3}
                  onChange={handleRangeChange3}
                />
                <label htmlFor="customRange5" className="form-label">
                  <div className="cus-num">
                    <span id="rangeValue5">Variabel</span>
                    <span>20 Jaar</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="emaildeal">
                    <a href="javascript:void(0);">
                        <Image width={200} height={200} alt="aa" src="/images/mail.png" className="img-fluid" /> Mail mijn deals </a>
                </div> */}
        <MailModal />
      </div>
    </>
  );
};

export default LoanStep2Leftbar;
