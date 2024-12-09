import React, { useState, useEffect } from "react";
import CompareCardSkeleton from "../LoadingSkeletons/CompareCardSeleton";

const CompareFilterRight = ({
  obtainComparedData,
  formData,
  isLoading,
  setIds,
  ids,
  setReFetch,
  reFetch,
  setCount,
  setA,
}) => {
  const [isLandscapeSmallScreen, setIsLandscapeSmallScreen] = useState(false);

  const handleSingleProduct = (itemData) => {
    localStorage.setItem("SingleItem", JSON.stringify(itemData));
    setCount(2);
    setA(false);
  };

  const deleteProduct = (itemId) => {
    if (ids.includes(itemId)) {
      setIds(ids.filter((id) => id !== itemId));
    }
    setReFetch(!reFetch);
  };

  const checkOrientation = () => {
    const isLandscape =
      window.matchMedia("(orientation: landscape)").matches &&
      window.innerWidth <= 768;
    setIsLandscapeSmallScreen(isLandscape);
  };

  useEffect(() => {
    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <div
      className="col-lg-9"
      style={{
        maxHeight: isLandscapeSmallScreen ? "516px" : "none",
        overflowY: "auto",
        overflowX: "hidden",
        transform: isLandscapeSmallScreen ? "rotate(90deg)" : "none",
      }}
    >
      <div className="comparelist-title text-center">
        <h2 style={isLandscapeSmallScreen ? { fontSize: "1.5rem" } : {}}>
          Vergelijk &amp; Bespaar
        </h2>
      </div>
      {!isLoading ? (
        <div className="d-flex justify-content-around">
          {obtainComparedData && obtainComparedData.length > 0 ? (
            obtainComparedData.map((item, i) => (
              <div className="" key={i}>
                <div
                  className="compare-card-bx"
                  style={
                    isLandscapeSmallScreen
                      ? { padding: "5px", fontSize: "0.9rem" }
                      : {}
                  }
                >
                  <div className="compare-card-cont">
                    <a
                      className="cros-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteProduct(item.id)}
                    >
                      <i className="fal fa-times"></i>
                    </a>
                    <h3>Price: €{item?.total.toFixed(2)}</h3>
                    <h5>Geldig tot {item?.valid_till}</h5>
                    <div className="shape-img">
                      <img
                        src="/images/temporary-offer.png"
                        alt="Temporary Offer"
                      />
                    </div>
                  </div>
                  <div className="compare-card-img-bx">
                    <span className="count-number">{i + 1}</span>
                    <div className="cm-img">
                      <img
                        src={item?.image || "/images/placeholder.png"}
                        alt="Product"
                        style={isLandscapeSmallScreen ? { width: "80%" } : {}}
                      />
                      <a href="#">
                        <i className="fal fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="compare-card-cont-text">
                    <ul>
                      <li>
                        <div className="cm-text-field  Pakket-h"
                        >
                          <h5>Pakket:</h5>
                          <p>
                            <i className="fas fa-check text-success me-2"></i>
                            {item?.power_origin
                              ? JSON.parse(item.power_origin).join(", ")
                              : ""}
                            {item?.type_of_gas
                              ? JSON.parse(item.type_of_gas).map(
                                  (gas, index) => (
                                    <div key={index}>
                                      <i className="fas fa-check text-success me-2"></i>
                                      <span>{gas}</span>
                                    </div>
                                  )
                                )
                              : ""}
                          </p>
                        </div>
                      </li>
                      <li>
                        <h5>Kosten:</h5>
                        <p>€{item?.total.toFixed(2)} / p.m</p>
                      </li>
                      <li>
                        <h5>Bespaar:</h5>
                        <p>
                          €
                          {(
                            Number(formData?.monthly_energy_produce) *
                              Number(item?.power_cost_per_unit) +
                            Number(item?.discount) +
                            Number(item?.tax_reduction)
                          ).toFixed(2)}
                        </p>
                      </li>
                      <li>
                        <h5>Totaal korting:</h5>
                        <p>
                          €
                          {(
                            Number(item?.discount) + Number(item?.tax_reduction)
                          ).toFixed(2)}
                        </p>
                      </li>
                      <li>
                        <h5>Energise korting:</h5>
                        <p>€{item?.tax_reduction.toFixed(2)}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="cm-button">
                    <button
                      className="btn-one"
                      onClick={() => handleSingleProduct(item)}
                      style={
                        isLandscapeSmallScreen
                          ? { padding: "5px 10px", fontSize: "0.8rem" }
                          : {}
                      }
                    >
                      Aanvragen
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "45px" }}>
              <h4>No data found</h4>
            </div>
          )}
        </div>
      ) : (
        <div className="row">
          {[...Array(4)].map((_, i) => (
            <div className="col-lg-3" key={i}>
              <CompareCardSkeleton />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompareFilterRight;

