import Image from "next/image";
import React, { useEffect, useState } from "react";

const EnergyStep2Tab = ({
  formData,
  showMoreInfo,
  setShowMoreInfo,
  apiRes,
  uniqueId,
  meter,
  item,
  setCount,
}) => {
  console.log("item", item);
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(apiRes.data.feature);
  });
  const handleSingleProduct = (itemData) => {
    localStorage.setItem("SingleItem", JSON.stringify(itemData));
    setCount(2);
  };
  const [currentActiveAccordion, setCurrentActiveAccordion] = useState(null); // State to track which accordion is active

  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null); // Track which accordion is open
  // Renaming 'currentActiveAccordion' to 'activeAccordionId' for clarity
  const [activeAccordionId, setActiveAccordionId] = useState(null); // Track active accordion by its ID

  // Renaming 'toggleAccordion' to 'handleAccordionToggle' for clarity
  const handleAccordionToggle = (id) => {
    // If the clicked accordion is already active, collapse it (set to null), otherwise open it
    setActiveAccordionId((prev) => (prev === id ? null : id));
  };
  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id)); // Toggle the active accordion
  };
  const handleToggle = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? 5 : item.pFaqs.length); // Toggle between 5 and the full list
  };

  const [maxVisibleItems, setMaxVisibleItems] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
    setMaxVisibleItems(isExpanded ? 5 : item.switching_plan.length);
  };

  return (
    <>
      <div id="listhiddenDiv1" className="tabwrp">
        <ul className="nav nav-tabs" id="myTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id={`tab1-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab1${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab1${uniqueId}`}
              aria-selected="true"
            >
              <i className="fas fa-calculator" />
              Kosten
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id={`tab2-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab2${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab2${uniqueId}`}
              aria-selected="false"
            >
              <i className="fas fa-ellipsis-h" />
              Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id={`tab3-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab3${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab3${uniqueId}`}
              aria-selected="false"
            >
              <i className="fas fa-user-shield" />
              Leveranciers
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id={`tab4-tab${uniqueId}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab4${uniqueId}`}
              type="button"
              role="tab"
              aria-controls={`tab4${uniqueId}`}
              aria-selected="false"
            >
              <i className="fas fa-spinner" />
              Aanvraag
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabsContent">
          <div
            className="tab-pane fade show active"
            id={`tab1${uniqueId}`}
            role="tabpanel"
            aria-labelledby={`tab1-tab${uniqueId}`}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="tabbxleft color-new">
                  <div className="table-responsive  table-scroll">
                    <h3 style={{ textAlign: "center" }}>Energie kosten</h3>
                    <h4>Pakket:...</h4>
                    <div>
                      <table className="table table-striped table-responsive table-bordered">
                        <tbody>
                          <tr>
                            <td className="fw-bold">Normaal leveringsprijs:</td>
                            <td>
                              €{item?.power_cost_per_unit}
                              <small> Per kWh</small>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Dal leveringsprijs:</td>
                            <td>
                              {" "}
                              €{item?.power_cost_per_unit}{" "}
                              <small>Per kWh </small>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Gas leveringsprijs:</td>
                            <td>
                              {item?.gas_cost_per_unit}
                              <small>
                                Per m <sup>3</sup>
                              </small>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Overige kosten:</td>
                            <td>{item?.network_cost_gas}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="d-flex  justify-content-between new-h5">
                        <h4 className="new-h5">Totaal:</h4>
                        <h4>€ {item.total.toFixed(2)}p.m.</h4>
                      </div>
                      <table className="table table-responsive table-striped  table-bordered">
                        <tbody>
                          <tr>
                            <td className="fw-bold new-width ">Looptijd:</td>
                            <td>{item.contract_length * 12} Maanden</td>
                          </tr>
                          <tr>
                            <td className="fw-bold new-width">Bespaar p.j:</td>
                            <td>
                              {" "}
                              €
                              {(
                                Number(formData?.monthly_energy_produce) *
                                  Number(item?.power_cost_per_unit) +
                                Number(item?.discount) +
                                Number(item?.tax_reduction)
                              ).toFixed(2)}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p style={{ fontSize: "11px" }}>
                        Total prijs is loc. 21% BTW & overheidsheffingen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {item.pFaqs.length > 0 && (
                <div className="col-lg-6">
                  <div className="tabbxright color-new">
                    <h4 style={{ textAlign: "center" }}>
                      Veel Gestelde Vragen
                    </h4>
                    <div className="accordion" id="faqAccordion">
                      {item.pFaqs.slice(0, visibleCount).map((p, i) => (
                        <div key={i} className="accordion-item">
                          <h2
                            className="accordion-header"
                            id={`heading${p.id}`}
                          >
                            <button
                              className="accordion-button accordion-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${p.id}`} // Corrected dynamic ID for collapse
                              aria-expanded="false" // Initially collapsed
                              aria-controls={`collapse${p.id}`} // Corrected dynamic ID for aria-controls
                            >
                              {p.title}
                            </button>
                          </h2>
                          <div
                            id={`collapse${p.id}`} // Corrected dynamic ID for collapse content
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${p.id}`} // Corrected dynamic ID for aria-labelledby
                            data-bs-parent="#faqAccordion"
                          >
                            <div className="accordion-body">
                              {p.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {item.pFaqs.length > 5 && (
                    <div className="text-center mt-3">
                      <a
                        href="javascript:void(0);"
                        className="viwmr"
                        onClick={handleToggle}
                      >
                        {showAll ? "Minder vragen?" : "Meer vragen?"}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id={`tab2${uniqueId}`}
            role="tabpanel"
            aria-labelledby={`tab2-tab${uniqueId}`}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="tabbxleft">
                  <div className="tabinsidebx  table-responsive table-scroll">
                    <div className="d-flex">
                      <table className="table  table-bordered">
                        <tbody>
                          <tr>
                            <th>Kenmerken</th>
                            <th className="w-3">Inbegrepen</th>
                          </tr>
                          <tr>
                            <td>Looptijd</td>
                            <td>{item.contract_length} Jaren</td>
                          </tr>
                          <tr>
                            <td scope="row">Type meter</td>
                            <td>
                              {meter == 0 ? "Enkele Meter" : "Dubbele meter"}
                            </td>
                          </tr>

                          <tr>
                            <td scope="row">Duurzaamheid</td>
                            <td>
                              {item.pFeatures.type_of_gas.map((tg) => {
                                if (tg == "co2") return "Co2,";
                                if (tg == "partly_green_gas")
                                  return "Partly green,";
                                if (tg == "100_green_gas") return "100% Green,";
                                if (tg == "gas_free") return "Gas free,";
                                else return tg;
                              })}
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">Opzegvergoeding</td>
                            <td>€ 0</td>
                          </tr>
                          <tr>
                            <td scope="row">Opzegtermijn</td>
                            <td>1 maand</td>
                          </tr>

                          <tr>
                            <td scope="row">Korting</td>
                            <td>€{item.discount_amount}</td>
                          </tr>
                          <tr>
                            <td scope="row">Herkomst Energie</td>
                            <td>{item.pFeatures.type_of_current.join(",")}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="w-4">
                        <p className="entr-sc-title-over">Informatie</p>
                        <div className="entr-sc-title-over1">
                          <div
                            className="accordion-container"
                            id="stepAccordion"
                          >
                            {item.switching_plan.map((sp, i) => (
                              <div key={i} className="accordion-item-custom">
                                <h2
                                  className="accordion-header-custom"
                                  id={`stap${i}`}
                                >
                                  <button
                                    className="accordion-button-custom collapsed entr-sc-title-over2"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#stapc${sp.id}`}
                                    aria-expanded="false"
                                    aria-controls={`stapc${sp.id}`}
                                  >
                                    {sp.question}
                                  </button>
                                </h2>
                                <div
                                  id={`stapc${sp.id}`}
                                  className="accordion-collapse-custom entr-sc-title-over3 collapse"
                                  aria-labelledby={`stap${i}`}
                                  data-bs-parent="#stepAccordion"
                                >
                                  <div className="accordion-body-custom">
                                    <p> {sp.answer} </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="">Voorwaarden</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5"></div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id={`tab3${uniqueId}`}
            role="tabpanel"
            aria-labelledby={`tab3-tab${uniqueId}`}
          >
            <div className="tabinsidebx border-r">
              <div className="row">
                <div className="col-lg-6">
                  <table className="table table-responsive table-bordered">
                    <tbody>
                      <tr>
                        <th>Werkwijze:</th>
                        {/* <th>{item?.provider_details?.adjust_installments}</th> */}
                        <th>Handeling:</th>
                      </tr>
                      <tr>
                        <td>Bereikbaarheid</td>
                        <td>
                          {/* {item?.provider_details?.meter_readings} */}
                        </td>
                      </tr>
                      <tr>
                        <td>Contract</td>
                        <td>
                          {/* {item?.provider_details?.payment_options} */}
                        </td>
                      </tr>
                      <tr>
                        <td>Details</td>
                        <td>{/* {item?.provider_details?.rose_scheme} */}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-6">
                  <table>
                    <tr>
                      <td className="text-center">
                        <Image
                          width={160}
                          height={220}
                          alt="aa"
                          src={item.image}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="mt-3 prov-details">
                          <p>{item?.provider_details?.about}</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="text-center mt-5"></div>
          </div>
          <div
            className="tab-pane fade"
            id={`tab4${uniqueId}`}
            role="tabpanel"
            aria-labelledby={`tab4-tab${uniqueId}`}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="tabbxleft color-new1">
                  <div className="tabinsidebx  table-responsive table-scroll">
                    <table className="table table-striped table-bordered">
                      <tbody>
                        <tr>
                          <th>Energise</th>

                          <th>Leverancier</th>
                        </tr>
                        <tr>
                          <td>Vergelijken</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Afhandeling contract</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>X</td>
                          <td>Nazorg</td>
                        </tr>
                        <tr>
                          <td>X</td>
                          <td>Opzegvergoeding</td>
                        </tr>
                        <tr>
                          <td>X</td>
                          <td>Incasseren</td>
                        </tr>
                        <tr>
                          <td>Overstappenplan</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Energise exclusives</td>
                          <td>X</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tabbxright color-new1">
                  <h4 className="mb-4">Overstappenplan</h4>

                  <div className="accordion" id="stepAccordion">
                    {item.switching_plan
                      .slice(0, maxVisibleItems)
                      .map((sp, i) => (
                        <div key={i} className="accordion-item">
                          <h2 className="accordion-header" id={`stap${i}`}>
                            <button
                              className={`accordion-button accordion-btn ${
                                activeAccordionId === sp.id ? "" : "collapsed"
                              }`}
                              type="button"
                              onClick={() => handleAccordionToggle(sp.id)} // Toggle on click
                              aria-expanded={
                                activeAccordionId === sp.id ? "true" : "false"
                              } // Dynamic aria-expanded
                              aria-controls={`stapc${sp.id}`} // Control corresponding content
                            >
                              {sp.question}
                            </button>
                          </h2>

                          <div
                            id={`stapc${sp.id}`}
                            className={`accordion-collapse collapse ${
                              activeAccordionId === sp.id ? "show" : ""
                            }`} // Show the content if active
                            aria-labelledby={`stap${i}`}
                            data-bs-parent="#stepAccordion"
                          >
                            <div className="accordion-body">{sp.answer}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                {item.switching_plan.length > 5 && (
                  <div className="text-center mt-3">
                    <a
                      href="javascript:void(0);"
                      className="viwmr"
                      onClick={toggleVisibility}
                    >
                      {isExpanded ? "Minder vragen?" : "Meer vragen?"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center mt-3">
              <button
                onClick={() => handleSingleProduct(item)}
                className="btn-one btn-move-down"
              >
                Aanvragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyStep2Tab;
