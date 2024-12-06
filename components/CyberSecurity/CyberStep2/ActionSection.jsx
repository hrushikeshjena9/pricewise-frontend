import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import EnergyStep2Tab from "../../DoubleMeter/EnergyStep2/EnergyStep2Tab";
import Image from "next/image";
import ActionCardSkeleton from "../../LoadingSkeletons/ActionCard";
import { useRouter } from "next/router";
import Pagination from "../../DoubleMeter/EnergyStep2/Pagination";
import RightArrow from "../../../public/images/newimg/chevron.png";

const ActionSection = ({
  formData,
  setShowMoreInfo,
  showMoreInfo,
  apiRes,
  loading,
  setCount,
  setPostsPerPage,
  setPageNo,
  pageNo,
  postsPerPage,
  meter,
  a,
  setA,
}) => {
  // console.log(apiRes?.data);
  const [open, setOpen] = useState(false);
  const [compareIdArray1, setCompareIdArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleCheckboxCompare = (item) => {
    setOpen(!open);
    if (!compareIdArray1.some((obj) => obj.id === item.id)) {
      if (compareIdArray1.length < 3) {
        setCompareIdArray([...compareIdArray1, item]);
        setErrorMessage("");
      } else {
        setErrorMessage("You can only compare upto 3 items");
      }
    } else {
      setCompareIdArray(compareIdArray1.filter((obj) => obj.id !== item.id));
    }
  };
  const deleteProduct = (id) => {
    setCompareIdArray(compareIdArray1.filter((obj) => obj.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("CompareIds", JSON.stringify(compareIdArray1));
  }, [compareIdArray1]);
  console.log(compareIdArray1);
  const [activeTab, setActiveTab] = useState(-1);
  const toggleTab = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };
  const handleSingleProduct = (itemData) => {
    localStorage.setItem("SingleItem", JSON.stringify(itemData));
    setCount(2);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    const tooltips = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new bootstrap.Tooltip(tooltipTriggerEl, { html: true });
    });
    return () => {
      tooltips.forEach((tooltip) => tooltip.dispose());
    };
  }, [apiRes]);

  const generateTooltipContent = (item) => {
    const powerOrigin = item?.power_origin
      ? (() => {
          try {
            return JSON.parse(item.power_origin).join(", ");
          } catch (e) {
            console.error("Error parsing power_origin:", e);
            return "Invalid Data";
          }
        })()
      : "No Power Origin Data";

    const typeOfGas = item?.type_of_gas
      ? (() => {
          try {
            return JSON.parse(item.type_of_gas)
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
      {loading ? (
        <>
          <ActionCardSkeleton />
          <ActionCardSkeleton />
          <ActionCardSkeleton />
        </>
      ) : (
        <>
          {apiRes && apiRes.data && apiRes.data.length > 0 ? (
            <>
              {apiRes.data.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="login-deals-box mt-5">
                    <div className="spe-action">
                      <div className="spe-cont">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/stopwatch.png"
                        />
                        <h5>Actie:</h5>
                        <p>Geldig tot {formatDate(item.valid_till)}</p>
                      </div>
                      <div className="spe-cont">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/sale.png"
                        />
                        <p>Energise korting:</p>
                        <h4>€{item?.tax_reduction.toFixed(2)}</h4>
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="spe-cont">
                        <Image
                          width={200}
                          height={200}
                          alt="aa"
                          src="/images/hot-sale.png"
                        />
                        <p>Totaal korting:</p>
                        <h4>
                          €
                          {(
                            Number(item?.tax_reduction) + Number(item?.discount)
                          ).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                    <div className="spe-action-data">
                      <div className="row g-3">
                        <div
                          className="col-xl-3 col-lg-4 col-md-12"
                          style={{ width: "170px" }}
                        >
                          <div className="spe-img">
                            <Image
                              width={200}
                              height={200}
                              alt="aa"
                              src={item?.image}
                            />
                          </div>
                        </div>

                        <div
                          className="col-xl-3 col-lg-4 col-md-12"
                          style={{ width: "190px" }}
                        >
                          <div className="spe-cn ">
                            <a
                              href="#"
                              className="in-ho-info"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              data-bs-placement="bottom"
                              title={generateTooltipContent(item)}
                            >
                              <i className="fas fa-info-circle" />
                            </a>

                            <h4
                              style={{ top: "10px", left: "10px", margin: 0 }}
                            >
                              Pakket:
                            </h4>
                            <div key={i} style={{ fontSize: "16px" }}>
                       
                              {item?.type_of_gas
                                ? JSON.parse(item.type_of_gas).map(
                                    (gas, index) => (
                                      <div key={index}>
                                        <i className="fas fa-check text-success me-2"></i>
                                        <span>
                                          {gas === "co2" && "Co2"}
                                          {gas === "partly_green_gas" &&
                                            "Partly Green"}
                                          {gas === "100_green_gas" &&
                                            "100% Green"}
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
                                  )
                                : ""}
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-xl-3 col-lg-4 col-md-12"
                          style={{ width: "170px" }}
                        >
                          <div className="spe-cn d-flex flex-column justify-content-center align-items-start">
                            <a
                              href="#"
                              className="in-ho-info"
                              data-bs-toggle="tooltip"
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
                              €{item?.total.toFixed(2)}
                            </b>
                            <span
                              className="sp-blk position-absolute"
                              style={{ bottom: "10px", right: "10px" }}
                            >
                              /p.m
                            </span>
                          </div>
                        </div>

                        <div
                          className="col-xl-3 col-lg-4 col-md-3"
                          style={{ width: "170px" }}
                        >
                          <div className="spe-cn d-flex flex-column justify-content-center align-items-start position-relative">
                            <a
                              href="#"
                              className="in-ho-info"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              data-bs-placement="right"
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
                                  Number(item?.power_cost_per_unit) +
                                Number(item?.discount) +
                                Number(item?.tax_reduction)
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

                        <div className="col-xl-2 col-lg-4 col-md-12">
                          <div className="spe-cn-star text-center">
                            {/* <i className="fas fa-info" /> */}
                            <a
                              style={{ cursor: "pointer", color: "gray" }}
                              title="
Deze score weerspiegelt de klanttevredenheid op basis van beoordelingen."
                            >
                              <i className="fas fa-info-circle" />
                            </a>
                            <h3 className="m-0">Klantenscore: 4/5</h3>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="far fa-star" />
                              </li>
                            </ul>
                            <button
                              onClick={() => handleSingleProduct(item)}
                              className="price-btn"
                            >
                              Aanvragen
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-end mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="acceptConditions"
                          id={item.id}
                          value={item.id}
                          onChange={() => handleCheckboxCompare(item)}
                          checked={compareIdArray1.includes(item)}
                          disabled={
                            compareIdArray1.length >= 3 &&
                            !compareIdArray1.some((obj) => obj.id === item.id)
                          }
                        />
                        <label className="form-check-label" htmlFor={item}>
                          Vergelijk
                        </label>
                      </div>
                      {errorMessage && (
                        <div className="text-danger mb-2">{errorMessage}</div>
                      )}
                      <a
                        data-target="listhiddenDiv1"
                        className="btn-act listtoggleDiv nav nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        Meer informatie
                        <i
                          className={`${
                            activeTab === i
                              ? "active fas fa-minus"
                              : "fal fa-plus"
                          }`}
                          onClick={() => toggleTab(i)}
                          id={`v-pills-home-tab${i}`}
                          data-bs-toggle="pill"
                          data-bs-target={`#v-pills-home${i}`}
                          type="button"
                          role="tab"
                          aria-controls={`v-pills-home${i}`}
                          aria-selected={activeTab === i ? "true" : "false"}
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    className={`tab-content-energy`}
                    id={`v-pills-tabContent${i}`}
                  >
                    <div
                      className={`tab-pane fade energy-multi-tab ${
                        activeTab === i ? "active show" : ""
                      }`}
                      id={`v-pills-home${i}`}
                      role="tabpanel"
                      aria-labelledby={`v-pills-home-tab${i}`}
                    >
                      <EnergyStep2Tab
                        setShowMoreInfo={setShowMoreInfo}
                        showMoreInfo={showMoreInfo}
                        apiRes={apiRes}
                        uniqueId={i}
                        meter={meter}
                        item={item}
                        setCount={setCount}
                        formData={formData}
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </>
          ) : (
            <>
              <div className="no-data-box">
                <h4>Geen data gevonden</h4>
              </div>
            </>
          )}
          <Pagination
            apiRes={apiRes}
            postsPerPage={postsPerPage}
            pageNo={pageNo}
            setPageNo={setPageNo}
            setPostsPerPage={setPostsPerPage}
          />
        </>
      )}
      {/* -----modal--------- */}
      <div className="modal-container">
        {compareIdArray1.length > 0 && (
          <div className="compare-container" style={{ display: "block" }}>
            <div className="row px-2">
              {compareIdArray1?.map((item, i) => (
                <div
                  className="compare-item col-lg-3"
                  id="compare-item1"
                  style={{ display: "block" }}
                  key={i}
                >
                  <div className="row">
                    <div className="col-12">
                      <a
                        className="cros-btn"
                        onClick={() => deleteProduct(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fal fa-times"></i>
                      </a>

                      <div className="container-height">
                        <Image
                          width={100}
                          height={100}
                          alt="aa"
                          src={item?.image}
                          className="img-fluid"
                        />
                        <p>{item?.title}</p>
                        <Rating
                          initialValue={3.5}
                          size={20}
                          readonly
                          allowFraction
                          fillColor="gold"
                          emptyColor="gray"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="ms-4 col-lg-2">
                <div className="btn-compair-wrp ">
                  <button
                    className="btn d-flex btn-warning compare-button"
                    onClick={() => setA(!a)}
                  >
                    Compare
                    <Image
                      className="arrow-right"
                      width={30}
                      alt="aa"
                      src={RightArrow}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ActionSection;
