import Image from "next/image";
import React, { useEffect, useState } from "react";
import { axiosGet } from "../../../utils/ApiCalls";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Tooltip} from "bootstrap";

const EnergyStep3Rightbar = ({
  formData,
  setTotalGasElectricCost,
  apiRes,
  setMeter,
  meter,
}) => {
  const [show, setShow] = useState(false);
  const [singleProdDetails, setSingleProdDetails] = useState();
  const [totalElectricCost, setTotalElectricCost] = useState(0);
  const [totalGasCost, setTotalGasCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [energyFormData, setEnergyFormData] = useState();
  const [feedInCost, setFeedInCost] = useState(0);
  const [addReturnVal, setAddReturnVal] = useState(0);
  const [energyFormDataGas, setEnergyFormDataGas] = useState();
  const [normalElectricCost, setNormalElectricCost] = useState(0);
  const [offPeakElectricCost, setOffPeakElectricCost] = useState(0);
  const [activeTab, setActiveTab] = useState("Current");

  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("SingleItem"));
    const userEnergyFormData = JSON.parse(
      localStorage.getItem("EnergyUserData")
    );
    const userEnergyFormDataNoGas = JSON.parse(
      localStorage.getItem("EnergyUserDataNoGas")
    );
    setSingleProdDetails(data ? data : null);
    console.log("userEnergyFormData", userEnergyFormData);
    setEnergyFormData(userEnergyFormData ? userEnergyFormData : null);
    setEnergyFormDataGas(
      userEnergyFormDataNoGas ? userEnergyFormDataNoGas : null
    );
  }, []);
  useEffect(() => {
    const fetch = async () => {
      const data = await axiosGet("get-energy-general-faqs");
      setFaq(data.data);
    };
    fetch();
  }, []);

  useEffect(() => {
    setAddReturnVal(
      parseInt(energyFormData?.feed_in_normal) +
        parseInt(energyFormData?.off_peak_return)
    );

    if (addReturnVal && addReturnVal < 50) {
      setFeedInCost(0);
    } else if (addReturnVal && addReturnVal < 500) {
      setFeedInCost(110);
    } else if (addReturnVal && addReturnVal < 1000) {
      setFeedInCost(170);
    } else if (addReturnVal && addReturnVal < 1500) {
      setFeedInCost(220);
    } else if (addReturnVal && addReturnVal < 2000) {
      setFeedInCost(260);
    }
  }, [energyFormData, singleProdDetails, addReturnVal]);

  useEffect(() => {
    if (totalElectricCost && totalGasCost && energyFormDataGas !== 1) {
      setTotalPrice(totalElectricCost + totalGasCost);
    } else {
      setTotalPrice(totalElectricCost);
    }
  }, [totalElectricCost, totalGasCost, energyFormDataGas]);
  useEffect(() => {
    setTotalGasElectricCost(totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    console.log("Meter value changed:", meter);

    if (meter === 0) {
      // Normal Electric Cost is calculated normally
      const normalCost = energyFormData?.normal_electric_consume
        ? energyFormData.normal_electric_consume *
          (energyFormData.normal_electric_rate || 1)
        : 0;

      const finalNormalCost =
        normalCost * Number(singleProdDetails?.power_cost_per_unit || 0);

      setNormalElectricCost(finalNormalCost);
      setOffPeakElectricCost(0);
    } else if (meter === 1) {
      const dividedValue =
        energyFormData?.normal_electric_consume > 0
          ? energyFormData.normal_electric_consume *
            (energyFormData.normal_electric_rate || 1)
          : 0;

      const divided =
        energyFormData?.peak_electric_consume > 0
          ? energyFormData.peak_electric_consume *
            (energyFormData.normal_electric_rate || 1)
          : 0;
      const finalNormalCost1 =
        dividedValue * Number(singleProdDetails?.power_cost_per_unit || 0);
      const finalOffPeakCost =
        divided * Number(singleProdDetails?.power_cost_per_unit || 0);
      setNormalElectricCost(finalNormalCost1);
      setOffPeakElectricCost(finalOffPeakCost);
    }
  }, [meter, energyFormData]);
  console.log("Energy Form Data:", energyFormData);
  console.log("Single Product Details:", singleProdDetails);
  const validTill = singleProdDetails?.valid_till;

  const formatDate = (dateString) => {
    if (!dateString) return "Invalid Date";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formattedDate = formatDate(validTill);
  useEffect(() => {
    const total =
      Number(normalElectricCost || 0) +
      Number(offPeakElectricCost || 0) +
      Number(singleProdDetails?.tax_electric || 0) +
      Number(singleProdDetails?.ode_electric || 0) +
      Number(singleProdDetails?.fixed_delivery || 0) +
      Number(singleProdDetails?.grid_manage || 0);
    // Number(singleProdDetails?.vat_amount || 0) ;

    setTotalElectricCost(total);
  }, [
    normalElectricCost,
    offPeakElectricCost,
    singleProdDetails?.tax_electric,
    singleProdDetails?.ode_electric,
    singleProdDetails?.fixed_delivery,
    singleProdDetails?.grid_manage,
    // singleProdDetails?.vat_amount,
  ]);
  // useEffect(() => {
  //   const tooltipTriggerList = Array.from(
  //     document.querySelectorAll('[data-bs-toggle="tooltip"]')
  //   );

  //   tooltipTriggerList.forEach((tooltipTriggerEl) => {
  //     const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
  //       html: true,
  //     });

  //     tooltipTriggerEl.addEventListener("shown.bs.tooltip", () => {
  //       // const tooltipElement = document.querySelector(".tooltip-inner");
  //       // if (tooltipElement) {
  //       //   tooltipElement.style.backgroundColor = "#ffffff";
  //       //   tooltipElement.style.color = "#000000";
  //       //   tooltipElement.style.border = "1px solid #000000";
  //       //   tooltipElement.style.fontSize = "14px";
  //       // }
  //     });

  //     tooltipTriggerEl.setAttribute(
  //       "data-bs-original-title",
  //       generateTooltipContent()
  //     );
  //     tooltip.update();
  //   });
  // }, [singleProdDetails]);
  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
  
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      const key = tooltipTriggerEl.getAttribute("data-key");
  
      let content = "";
      if (key === "pakket") {
        content = generateTooltipContent();
      } else if (key === "kosten") {
        content = "Dit zijn uw gemiddelde maandelijkse kosten";
      } else if (key === "bespaar") {
        content = "Dit is het geschatte besparingsbedrag, berekend per jaar";
      }
  
      const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
        html: true,
        title: content,
      });
  
      tooltipTriggerEl.setAttribute("data-bs-original-title", content);
      tooltip.update();
    });
  }, [singleProdDetails]);
  
  const generateTooltipContent = () => {
    const powerOrigin = singleProdDetails?.power_origin
      ? (() => {
          try {
            return JSON.parse(singleProdDetails.power_origin).join(", ");
          } catch (e) {
            console.error("Error parsing power_origin:", e);
            return "Invalid Data";
          }
        })()
      : "No Power Origin Data";

    const typeOfGas = singleProdDetails?.type_of_gas
      ? (() => {
          try {
            return JSON.parse(singleProdDetails.type_of_gas)
              .map((gas) => {
                if (gas === "co2") return "CO2";
                if (gas === "partly_green_gas") return "Partly Green";
                if (gas === "100_green_gas") return "100% Green";
                if (gas === "gas_free") return "Gas Free";
                return gas;
              })
              .join(", ");
          } catch (e) {
            console.error("Error parsing type_of_gas:", e);
            return "Invalid Data";
          }
        })()
      : "No Gas Type Data";

    return `<strong>Power Origin:</strong> ${powerOrigin}<br/><strong>Type of Gas:</strong> ${typeOfGas}`;
  };

  return (
    <>
      <div className="col-lg-4">
        <div className="stepright3">
          <div className="actionbx">
            <Image
              width={200}
              height={200}
              alt="aa"
              src="/images/stopwatch.png"
              className="actionicon stopwatch"
            />
            <h3>Actie:</h3>
            <h6>Geldig tot {formattedDate}</h6>
            <div className="actionbody">
              <div className="row">
                <div className="col-lg-6">
                  <div className="spe-img">
                    <Image
                      width={200}
                      height={200}
                      alt="aa"
                      src={singleProdDetails?.image}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn">
                    <a
                      href="#"
                      className="in-ho-info"
                      data-bs-toggle="tooltip"
                      data-key="pakket"
                      data-bs-html="true"
                      // title="Gas Free"
                               data-bs-placement="bottom"
                      title={generateTooltipContent()}
                    >
                      <i className="fas fa-info-circle" />
                    </a>
                    <h4>Pakket :</h4>

                

                    {singleProdDetails?.type_of_gas &&
                      JSON.parse(singleProdDetails.type_of_gas).map(
                        (gas, index) => (
                          <div key={index}>
                            <i className="fas fa-check text-success me-2"></i>
                            <span>
                              {gas === "co2" && "CO2"}
                              {gas === "partly_green_gas" && "Partly Green"}
                              {gas === "100_green_gas" && "100% Green"}
                              {gas === "gas_free" && "Gas Free"}
                              {![
                                "co2",
                                "partly_green_gas",
                                "100_green_gas",
                                "gas_free",
                              ].includes(gas) && gas}
                            </span>
                          </div>
                        )
                      )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn  d-flex flex-column justify-content-center align-items-start position-relative">
                    <a
                      href="#"
                      className="in-ho-info"
                      data-bs-toggle="tooltip"
                      data-key="kosten"
                      data-bs-html="true"
                     data-bs-placement="right"
                      title="Dit zijn uw gemiddelde maandelijkse kosten"
                    >
                      <i className="fas fa-info-circle" />
                    </a>
                    <h4
                      className="position-absolute"
                      style={{ top: "10px", left: "10px", margin: 0 }}
                    >
                      Kosten:
                    </h4>
                    <b
                      className="d-flex align-items-center justify-content-start"
                      style={{ fontSize: "1.5rem" }}
                    >
                      €{singleProdDetails?.total?.toFixed(2)}
                    </b>
                    <span
                      className="sp-blk position-absolute"
                      style={{ bottom: "10px", right: "10px" }}
                    >
                      /p.m
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spe-cn  d-flex flex-column justify-content-center align-items-start position-relative">
                    <a
                      href="#"
                      className="in-ho-info"
                      data-bs-toggle="tooltip"
                      data-key="bespaar"
                      data-bs-html="true"
              data-bs-placement="bottom"
                      title="Dit is het geschatte besparingsbedrag, berekend per jaar"
                    >
                      <i className="fas fa-info-circle" />
                    </a>
                    <h4
                      className="position-absolute"
                      style={{ top: "10px", left: "10px", margin: 0 }}
                    >
                      Bespaar:
                    </h4>
                    <b
                      className="d-flex align-items-center justify-content-start"
                      style={{ fontSize: "1.5rem" }}
                    >
                      €
                      {(
                        Number(formData?.monthly_energy_produce) *
                          Number(singleProdDetails?.power_cost_per_unit) +
                        Number(singleProdDetails?.discount) +
                        Number(singleProdDetails?.tax_reduction)
                      ).toFixed(2)}
                    </b>
                    <span
                      className="sp-blk position-absolute"
                      style={{ bottom: "10px", right: "10px" }}
                    >
                      /p.j
                    </span>
                  </div>
                </div>
              </div>
              <table className="table mb-2">
                <tbody>
                  <tr>
                    <td>Energise korting:</td>
                    <td>€{singleProdDetails?.saving_amount?.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Totaal pakket kosten:</td>
                    <td style={{ position: "relative" }}>
                      €{singleProdDetails?.total?.toFixed(2)}
                      {show ? (
                        <i
                          className="fas fa-chevron-up"
                          onClick={() => setShow(!show)}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-chevron-down"
                          onClick={() => setShow(!show)}
                        ></i>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              {show && (
                <div
                  style={{ position: "relative" }}
                  className="cost-break-details"
                >
                  <div>
                    <ul
                      className="d-flex justify-content-around mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="" role="presentation">
                        <button
                          // className={`border-0 price-btn ${
                          //   activeTab === "Current" ? "active" : ""
                          // }`}
                          className="border-0 price-btn active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                          // onClick={() => setActiveTab("Current")}
                        >
                          Stroom
                        </button>
                      </li>
                      <li className="" role="presentation">
                        <button
                          // className={`border-0 price-btn ${
                          //   activeTab === "Gas" ? "active" : ""
                          // }`}
                          className="border-0  price-btn"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                          // onClick={() => setActiveTab("Gas")}
                        >
                          Gas
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex={0}
                      >
                        <div className="current-breakdown sub-total mb-3">
                          <div
                            className="yourdetailsbox"
                            style={{ backgroundColor: "unset", padding: "5px" }}
                          >
                            <ul className="infodetails">
                              <li>
                                Normaal kosten:
                                <span>
                                  €{normalElectricCost.toFixed(2)}
                                  {/* €{(normalElectricCost * Number(singleProdDetails?.power_cost_per_unit || 0)).toFixed(2)} */}
                                  {/* €{(normalElectricCost * Number(formData?.power_cost_per_unit || 0)).toFixed(2)} */}
                                </span>
                                <br />
                                <small>
                                  {" "}
                                  (
                                  {energyFormData?.normal_electric_consume ||
                                    0}{" "}
                                  kWh x €
                                  {Number(
                                    singleProdDetails?.power_cost_per_unit || 0
                                  ).toFixed(2)}
                                  /kWh)
                                </small>
                              </li>
                              <li>
                                Dal verbruik:
                                <span>
                                  €{offPeakElectricCost.toFixed(2)}
                                  {/* €{(offPeakElectricCost + Number(singleProdDetails?.power_cost_per_unit || 0)).toFixed(2)} */}
                                </span>
                                <br />
                                <small>
                                  {" "}
                                  ({energyFormData?.peak_electric_consume ||
                                    0}{" "}
                                  kWh x €
                                  {Number(
                                    singleProdDetails?.power_cost_per_unit || 0
                                  ).toFixed(2)}
                                  /kWh)
                                </small>
                              </li>

                              <li>
                                Energiebelasting op elektriciteit:
                                <span>
                                  €{" "}
                                  {Number(
                                    singleProdDetails?.tax_electric || 0
                                  ).toFixed(2)}
                                </span>
                              </li>
                              <li>
                                ODE-belasting op elektriciteit:
                                <span>
                                  €{" "}
                                  {Number(
                                    singleProdDetails?.ode_electric || 0
                                  ).toFixed(2)}
                                </span>
                              </li>
                              <li>
                                Vaste leveringskosten:
                                <span>
                                  €{" "}
                                  {Number(
                                    singleProdDetails?.fixed_delivery || 0
                                  ).toFixed(2)}
                                </span>
                              </li>

                              <li>
                                Kosten voor netbeheer:
                                <span>
                                  €{" "}
                                  {Number(
                                    singleProdDetails?.grid_manage || 0
                                  ).toFixed(2)}
                                </span>
                              </li>
                              {/* <li>
                                Totaal vóór VAT:
                                <span>
                                  € {Number(singleProdDetails?.vat_amount || 0).toFixed(2)}{" "}
                                </span>
                              </li> */}
                              <li>
                                Btw ({singleProdDetails?.vat} %):
                                <span>€ {singleProdDetails?.vat_amount}</span>
                              </li>
                            </ul>
                            <div className="yourdetailedit">
                              <div className="row">
                                <div className="col-lg-6">
                                  <a>Elektrisch Subtotaal</a>
                                </div>
                                <div className="col-lg-6 text-end">
                                  <ul>
                                    <li>
                                      <span>
                                        €
                                        {totalElectricCost
                                          ? Number(totalElectricCost).toFixed(2)
                                          : "0.00"}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex={0}
                      >
                        <div className="gas-breakdown sub-total mb-3">
                          {energyFormDataGas !== 1 ? (
                            <div
                              className="yourdetailsbox"
                              style={{
                                backgroundColor: "unset",
                                padding: "5px",
                              }}
                            >
                              <ul className="infodetails">
                                <li>
                                  {/* Gasverbruik: */}
                                  Gas kosten:
                                  <span>
                                    €
                                    {(
                                      Number(
                                        energyFormData?.gas_consumption || 0
                                      ) *
                                      Number(
                                        singleProdDetails?.gas_cost_per_unit ||
                                          0
                                      )
                                    ).toFixed(2)}{" "}
                                  </span>
                                  <br />
                                  <small>
                                    {" "}
                                    (
                                    {Number(
                                      energyFormData?.gas_consumption || 0
                                    )}{" "}
                                    m³ x €
                                    {Number(
                                      singleProdDetails?.gas_cost_per_unit || 0
                                    ).toFixed(2)}
                                    /m³)
                                  </small>
                                </li>
                                {/* <li>
                                  Gastarief:
                                  <span>€ {Number(singleProdDetails?.gas_cost || 0).toFixed(2)}</span>
                                </li> */}
                                <li>
                                  ODE-belasting op gas:
                                  <span>
                                    €{" "}
                                    {Number(
                                      singleProdDetails?.ode_gas || 0
                                    ).toFixed(2)}
                                  </span>
                                </li>
                                <li>
                                  Energiebelasting op gas:
                                  <span>
                                    €{" "}
                                    {Number(
                                      singleProdDetails?.tax_gas || 0
                                    ).toFixed(2)}
                                  </span>
                                </li>
                                <li>
                                  Btw ({singleProdDetails?.vat} %):
                                  <span>€ {singleProdDetails?.vat_amount}</span>
                                </li>
                              </ul>
                              <div className="yourdetailedit">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <a>Subtotaal gas</a>
                                  </div>
                                  <div className="col-lg-6 text-end">
                                    <ul>
                                      <li>
                                        <span>
                                          €{" "}
                                          {(
                                            (energyFormData?.gas_consumption ||
                                              0) *
                                              Number(
                                                singleProdDetails?.gas_cost_per_unit ||
                                                  0
                                              ) +
                                            Number(
                                              singleProdDetails?.ode_gas || 0
                                            ) +
                                            Number(
                                              singleProdDetails?.tax_gas || 0
                                            )
                                          ).toFixed(2)}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <span className="text-center">No data found</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ------------------------ */}
                  <div className="sub-total d-flex justify-content-between align-items-center mb-2">
                    <b>Subtotal(Electric + Gas)</b>
                    <span>
                      {/* {singleProdDetails?.sub_total} */}
                      {/* {totalPrice ? totalPrice.toFixed(4) : ""} */}€
                      {singleProdDetails?.total?.toFixed(2)}
                    </span>
                  </div>
                  <div className="sub-total">
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Cashback</p>
                      <p>{singleProdDetails?.saving_amount.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <b>Total per year</b>
                      <span>
                        {singleProdDetails?.yearly_after_discount_total.toFixed(
                          2
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="actionfooter">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/sale.png"
                        className="actionicon"
                      />
                      Energise korting:
                    </td>
                    <td>
                      <span>
                        €{singleProdDetails?.tax_reduction.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/hot-sale.png"
                        className="actionicon"
                      />
                      Totaal korting:
                    </td>
                    <td>
                      <span>
                        €
                        {(
                          Number(singleProdDetails?.discount) +
                          Number(singleProdDetails?.tax_reduction)
                        ).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Veel gestelde vragen
                  </h4>
                </div>
                <div className="accordion" id="accordionExample">
                  {faq?.generalFaqs?.map((gf, i) => (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${i}`}
                          aria-expanded="false"
                          aria-controls={`#collapse${i}`}
                        >
                          {gf.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{gf.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Stappenplan
                  </h4>
                </div>
                <div className="accordion" id="accordionover">
                  {faq?.stepPlans?.map((stepMom, i) => (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseover${i}`}
                          aria-expanded="false"
                          aria-controls={`collapseover${i}`}
                        >
                          {stepMom.title}
                        </button>
                      </h2>
                      <div
                        id={`collapseover${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionover"
                      >
                        <div className="accordion-body">
                          {stepMom.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyStep3Rightbar;
