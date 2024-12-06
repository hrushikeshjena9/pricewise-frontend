import Image from "next/image";
import React, { useEffect, useState } from "react";
import MailModal from "../../CommonModals/MailModal";
import { useSelector } from "react-redux";

const LeftFilter = ({ apiRes, apiSendData, setCheckedItems, checkedItems }) => {
  const [internetFormData, setInternetFormData] = useState();
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(1);
  const formData = useSelector((state) => state?.internetTv?.internetTv[0]);
  const [noParent, setNoParent] = useState([]);
  const [telephoneOptions, setTelephoneOptions] = useState([]);
  const [television, setTelevision] = useState([]);
  const [internet, setInternet] = useState([]);
  useEffect(() => {
    if (formData) {
      setInternetFormData(formData);
    }
  }, [formData]);
  useEffect(() => {
    setNoParent(apiRes?.filters?.No_Parent ? apiRes?.filters?.No_Parent : []);
    setTelephoneOptions(
      apiRes?.filters?.Telephone ? apiRes?.filters?.Telephone : []
    );
    setTelevision(
      apiRes?.filters?.Television ? apiRes?.filters?.Television : []
    );
    setInternet(apiRes?.filters?.Internet ? apiRes?.filters?.Internet : []);
  }, [apiRes]);
  console.log(noParent);
  const handleFilterValue = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };
  // console.log('formData', formData);
  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleRangeChange2 = (e) => {
    setRangeValue2(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  const handleInputChange2 = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue2(value);
  };
  // ----------range slider logic ends--------------------
  return (
    <>
      <div className="col-lg-4">
        <div className="yourdetailsbox">
          <h5>Jouw gegevens:</h5>
          <ul className="infodetails">
            <li>
              Vergelijking:
              <span>12</span>
            </li>
            <li>
              Postcode:
              <span>{internetFormData?.post_code}</span>
            </li>
            <li>
              Huisnummer:
              <span>{internetFormData?.huis_number}</span>
            </li>
          </ul>
          <div className="yourdetailedit">
            <div className="row">
              <div className="col-lg-6">
                <a href="javascript:void(0);">
                  <i className="fas fa-cog" /> Wijzig
                </a>
              </div>
              <div className="col-lg-6 text-end">
                <ul>
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
        <div className="smartphone-acc">
          <div className="accordion" id="smartphone-acc-bx">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Algemeen
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/renewable-energy.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Koppelkorting</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/smartphone-2.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Koppelkorting</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/vokeru.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Pakket voorkeur</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="discount-select">
                        <select className="form-select">
                          <option>N.V.T</option>
                          <option>N.V.T 1</option>
                          <option>N.V.T 2</option>
                          <option>N.V.T 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="discount-bx">
                        <div className="discount-cont">
                          <Image
                            src="/images/budget.png"
                            width={128}
                            height={128}
                            alt="smart-tv"
                          />
                          <p>Budget</p>
                        </div>
                        <i className="fas fa-info"></i>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="number"
                        className="form-control "
                        id="numberInput3"
                        min={1}
                        max={200}
                        value={rangeValue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="range"
                        className="form-range"
                        id="customRange3"
                        min={1}
                        max={200}
                        value={rangeValue}
                        onChange={handleRangeChange}
                      />
                      <label htmlFor="customRange1" className="form-label">
                        <div className="cus-num">
                          <span>€1</span>
                          <span>€2.000.00</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* <div className="row no-parent-filters">
                    <div className="support">
                      {noParent.length > 0 && (
                        <>
                          {noParent.map((item, i) => (
                            <div className="form-check" key={i}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item?.id}
                                id="Glasvezel"
                                onChange={() => handleFilterValue(item.id)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Glasvezel"
                              >
                                {item?.features}
                              </label>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <Image
                    src="/images/globe2.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Internet
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div className="">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="Glasvezel"
                      />
                      <label className="form-check-label" htmlFor="Glasvezel">
                        Glasvezel (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        ADSL/VDSL (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="Kabel"
                      />
                      <label className="form-check-label" htmlFor="Kabel">
                        Kabel (..)
                      </label>
                    </div>

                    <div className="support">
                      {internet.length > 0 && (
                        <>
                          {internet?.map((item, i) => (
                            <div className="form-check" key={i}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="Glasvezel"
                                value={item?.id}
                                onChange={() => handleFilterValue(item.id)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Glasvezel"
                              >
                                {item?.features}
                              </label>
                            </div>
                          ))}
                        </>
                      )}

                      <div className="row">
                        <div className="col-lg-8">
                          <div className="discount-bx">
                            <div className="discount-cont">
                              <Image
                                src="/images/budget.png"
                                width={128}
                                height={128}
                                alt="smart-tv"
                              />
                              <p>Downloadsnelheid</p>
                            </div>
                            <i className="fas fa-info"></i>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <input
                            type="number"
                            className="form-control "
                            id="numberInput3"
                            min={1}
                            max={200}
                            value={rangeValue}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="range"
                            className="form-range"
                            id="customRange3"
                            min={1}
                            max={200}
                            value={rangeValue}
                            onChange={handleRangeChange}
                          />
                          <label htmlFor="customRange1" className="form-label">
                            <div className="cus-num">
                              <span>1Mb/s</span>
                              <span>1000Mb/s</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Internet Opties
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                        Wifi Booster (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Vast IP adres (..)
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mb-2">
                        <div className="discount-bx">
                          <div className="discount-cont">
                            <Image
                              src="/images/budget.png"
                              width={128}
                              height={128}
                              alt="smart-tv"
                            />
                            <p>TV standaard</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          className="form-control "
                          id="numberInput1"
                          min={1}
                          defaultValue={1}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mb-2">
                        <div className="discount-bx">
                          <div className="discount-cont">
                            <Image
                              src="/images/budget.png"
                              width={128}
                              height={128}
                              alt="smart-tv"
                            />
                            <p>TV Interactief</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          className="form-control "
                          id="numberInput1"
                          min={1}
                          defaultValue={1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <Image
                    src="/images/watching-a-movie-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Extra zenderoverzicht
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                        ESPN Eredivisie (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        ESPN Internationaal (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Ziggo sport totaal (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Film1 (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Kids (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Erotiek (..)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Tv Opties
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    {television.length > 0 && (
                      <>
                        {television?.map((item, i) => (
                          <div className="form-check" key={i}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="pauzeren"
                              value={item?.id}
                              onChange={() => handleFilterValue(item.id)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="pauzeren"
                            >
                              {item?.features}
                            </label>
                          </div>
                        ))}
                      </>
                    )}
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                        Opnemen pauzeren (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Arabisch (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Duits (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Hindi (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Turks (..)
                      </label>
                    </div>

                    <div className="row">
                      <div className="col-lg-8 mb-2">
                        <div className="discount-bx">
                          <div className="discount-cont">
                            <Image
                              src="/images/phone-ringing.png"
                              width={128}
                              height={128}
                              alt="smart-tv"
                            />
                            <p>Vaste telefonie</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="discount-select">
                          <input type="number" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <Image
                    src="/images/settings-3.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Vaste telefonie opties
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                        Nationaal onbeperkt bellen (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Internationaal onbeperkt bellen (..)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <Image
                    src="/images/5-stars.png"
                    width={64}
                    height={64}
                    alt="setting"
                  />
                  Service
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#smartphone-acc-bx"
              >
                <div className="accordion-body">
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="wifibooster"
                      />
                      <label className="form-check-label" htmlFor="wifibooster">
                        Klantenscore (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Monteur (..)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue
                        id="ADSL"
                      />
                      <label className="form-check-label" htmlFor="ADSL">
                        Nummerbehoud (..)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     

        {telephoneOptions && telephoneOptions.length > 0 && (
          <>
            <div className="protectionbx">
              <h5>
                <i className="fas fa-cog"></i> Telephone Options
              </h5>
            </div>
            <div className="support">
              {telephoneOptions.length > 0 && (
                <>
                  {telephoneOptions.map((item, i) => (
                    <div className="form-check" key={i}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="klantenscore"
                        value={item?.id}
                        onChange={() => handleFilterValue(item.id)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="klantenscore"
                      >
                        {item?.features}
                      </label>
                    </div>
                  ))}
                </>
              )}
            </div>
          </>
        )}
        <MailModal />
      </div>
    </>
  );
};

export default LeftFilter;
