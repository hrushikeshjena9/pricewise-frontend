import React, { useEffect, useState } from "react";
import { axiosGet, PostData } from "../../../utils/ApiCalls";
import Image from "next/image";

import { useRouter } from "next/router";
// asd
const StepTwoLeftFilter = ({
  formData,
  apiRes,
  setCheckedItems,
  checkedItems,
  houseType,
  no_gas,
  setApiRes,
  setLoading,
  loading,
  pageNo,
  postsPerPage,
}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [contractLength, setContractLength] = useState(0); 
  const [allFilters, setAllFilters] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [faq, setFaq] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      const data = await axiosGet("get-regulatory-faqs");
      setFaq(data.data);
    };
    fetch();
  }, []);

  const handleFilterValue = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    if (value === "") {
      setCheckedItems((prevState) => ({
        ...prevState,
        type_of_gas: checked ? [] : prevState.type_of_gas, // Reset if unchecked
      }));
      return;
    }

    setCheckedItems((prev) => {
      const updatedItems = {
        ...prev,
        [name]: prev[name] ? [...prev[name]] : [], // Initialize array if not present
      };

      if (checked) {
        if (!updatedItems[name].includes(value)) {
          updatedItems[name].push(value); // Add selected item
        }
      } else {
        updatedItems[name] = updatedItems[name].filter(
          (item) => item !== value
        ); // Remove unselected item
      }

      return updatedItems;
    });
  };

  useEffect(() => {
    const getApiData = async () => {
      setLoading(true);
      try {
        const powerOrigin = checkedItems.power_origin || [];
        const typeOfGas = checkedItems.type_of_gas || [];
        const supplier = checkedItems.supplier || [];
        const res = await PostData("energy", {
          ...formData,
          power_origin: powerOrigin,
          type_of_gas: typeOfGas,
          provider: supplier,
          contract_length: contractLength,
        });
        setApiRes(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    if (
      checkedItems.power_origin ||
      checkedItems.type_of_gas ||
      contractLength === null ||
      checkedItems.supplier ||
      contractLength > 0
    ) {
      getApiData();
    }
  }, [checkedItems, contractLength, pageNo]);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    // setContractLength(value);
    if (value === 0) {
      setContractLength(null);
    } else {
      setContractLength(value);
    }
    document.getElementById("numberInput4").value = value;
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    // setContractLength(value);
    if (value === 0) {
      setContractLength(null);
    } else {
      setContractLength(value);
    }
    document.getElementById("customRange4").value = value;
  };

  useEffect(() => {
    setAllFilters(apiRes?.filters);
  }, [apiRes]);

  useEffect(() => {
    const Supplier = async () => {
      try {
        const res = await axiosGet("suppliers");
        if (res.success === true) {
          setSuppliers(
            res?.data?.filter((supplierData) => supplierData.category == 16) ||
              []
          );
        } else {
          toast.error("Failed to fetch supplier data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    Supplier();
  }, [router]);

  return (
    <>
      <>
        <div className="col-lg-4 energy mt-5">
          <div className="yourdetailsbox">
            <h5>Jouw gegevens:</h5>
            <ul className="infodetails">
              <li>
                Vergelijking:
                <span></span>
              </li>
              <li>
                Postcode:
                <span>{formData ? formData.postal_code : ""}</span>
              </li>
              <li>
                Huisnummer:
                <span>{formData ? formData.house_no : ""}</span>
              </li>
              <li>
                Verbruik stroom:
                <span>
                  {formData
                    ? formData.peak_electric_consume
                      ? +formData.peak_electric_consume +
                        +formData.normal_electric_consume
                      : +formData.normal_electric_consume
                    : ""}
                </span>
              </li>
              <li>
                Verbruik gas:
                <span>{formData ? formData.gas_consumption : ""}</span>
              </li>
              <li>
                Huishouden:
                <span>{formData ? formData.no_of_person : ""}</span>
              </li>
              <li>
                Teruglevering:
                <span>{formData ? formData.feed_in_tariff : ""}</span>
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
          {/* <div className="protectionbx">
                        
                    </div> */}

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
                    <div className="steprangeleft priceadjustbx">
                      <div className="row">
                        <div className="col-12">
                          {allFilters && allFilters.length > 0 && (
                            <>
                              {allFilters[0].No_Parent?.map((item, i) => (
                                <div className="form-check ps-0" key={i}>
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={() => handleFilterValue(item.id)}
                                    // checked={checkedItems.includes(item.id)}
                                    value={item.id}
                                    id={`geen`}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`geen`}
                                  >
                                    {item.features}
                                  </label>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                        <div className="col-lg-8">
                          <div className="form-label labeltitle loopt">
                            Looptjid
                          </div>
                        </div>
                        <div className="col-lg-4 position-relative">
                          <input
                            type="number"
                            name="contract_length"
                            className="form-control"
                            id="numberInput4"
                            min={0}
                            max={5}
                            defaultValue={0}
                            onChange={handleInputChange}
                          />
                          <div className="infbx">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Content Goes Here"
                            >
                              <i className="fas fa-info-circle" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12">
                          <input
                            type="range"
                            name="contract_length"
                            className="form-range"
                            id="customRange4"
                            min={0}
                            max={5}
                            defaultValue={0}
                            onChange={handleSliderChange}
                          />
                          <label htmlFor="customRange5" className="form-label">
                            <div className="cus-num">
                              <span id="rangeValue5">0 Jaar</span>
                              <span>5 Jaar</span>
                            </div>
                          </label>
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
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <Image
                      src="/images/renewable-energy.png"
                      width={64}
                      height={64}
                      alt="setting"
                    />
                    Voorkeur leverancier
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smartphone-acc-bx"
                >
                  <div className="accordion-body">
                    <div className="service-star">
                      <div className="support">
                        {suppliers?.map((supplier, i) => (
                          <div key={i} className="form-check ps-0">
                            <input
                              className="form-check-input"
                              name="supplier"
                              type="checkbox"
                              id={supplier.id}
                              value={supplier.id}
                              checked={
                                checkedItems.supplier
                                  ? checkedItems.supplier.includes(
                                      `${supplier.id}`
                                    )
                                  : false
                              }
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={supplier.id}
                            >
                              {supplier.name}
                            </label>
                          </div>
                        ))}
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
                      src="/images/recycling.png"
                      width={64}
                      height={64}
                      alt="setting"
                    />
                    Duurzaamheid
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smartphone-acc-bx"
                >
                  <div className="accordion-body">
                    <div className="service-star">
                      {[
                        { label: "Geen voorkeur", value: "" },
                        {
                          label: "Groen/grijs",
                          value: "partly_green_gas",
                        },
                        {
                          label: "Groene energie",
                          value: "100_green_gas",
                        },
                        { label: "Gasvrij", value: "gas_free" },
                        {
                          label: "Terugleververgoeding",
                          value: "feed_in_tariff",
                        },
                      ].map((item, index) => (
                        <div
                          className="form-check ps-0"
                          key={index}
                          style={{ marginLeft: "20px" }}
                        >
                          <input
                            className="form-check-input"
                            // type="checkbox"
                            type="radio"
                            name="type_of_gas"
                            value={item.value}
                            checked={
                              checkedItems.type_of_gas?.includes(item.value) ||
                              (item.value === "" &&
                                checkedItems.type_of_gas?.length === 0)
                            }
                            onChange={(e) =>
                              handleCheckboxChange(e, item.value)
                            }
                          />
                          <label className="form-check-label">
                            {item.label}
                          </label>
                        </div>
                      ))}
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
                      src="/images/extra.png"
                      width={64}
                      height={64}
                      alt="setting"
                    />
                    Extra
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smartphone-acc-bx"
                >
                  <div className="accordion-body">
                    <div className="service-star">
                      <div className="form-check ps-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="power_origin"
                        />
                        <label class="form-check-label" for="klantenscore">
                          Klantenscore (..) <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </label>
                      </div>
                      <div className="form-check ps-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="power_origin"
                        />
                        <label className="form-check-label">Boiler: (..)</label>
                      </div>
                      <div className="form-check ps-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="power_origin"
                        />
                        <label className="form-check-label">
                          Vebruiksinzicht app (..)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionover">
            {allFilters && allFilters.length > 0 && (
              <>
                {allFilters.slice(1).map((group, i) => (
                  <React.Fragment key={i}>
                    {Object.entries(group).map(([groupName, items], j) => (
                      <React.Fragment key={groupName}>
                        <div className="accordion-item white-label">
                          <div className="protectionbx">
                            <h5 className="accordion-header">
                              <button
                                className="accordion-button collapsed protectionbx"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseover${i}_${j}`}
                                aria-expanded="false"
                                aria-controls={`collapseover${i}_${j}`}
                              >
                                {groupName}
                              </button>
                            </h5>
                            <div
                              id={`collapseover${i}_${j}`}
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionover"
                            >
                              <div className="accordion-body">
                                {items.map((item, k) => (
                                  <div className="form-check" key={k}>
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onChange={() =>
                                        handleFilterValue(item.id)
                                      }
                                      checked={checkedItems.includes(item.id)}
                                      value={item.id}
                                      id={`geen_${i}_${j}_${k}`}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`geen_${i}_${j}_${k}`}
                                    >
                                      {item.features}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Energise Regelt
                  </h4>
                </div>
                <div className="accordion" id="accordionover">
                  {faq.map((f, i) => (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseover${f.id}`}
                          aria-expanded="false"
                          aria-controls={`collapseover${f.id}`}
                        >
                         
                          {f.title}
                        </button>
                      </h2>
                      <div
                        id={`collapseover${f.id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionover"
                      >
                        <div className="accordion-body">{f.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default StepTwoLeftFilter;
