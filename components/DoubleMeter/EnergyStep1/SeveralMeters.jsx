import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { toast } from "sonner";
import { PostData, axiosGet } from "../../../utils/ApiCalls";
import Image from "next/image";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";

const SeveralMeters = ({
  register,
  watch,
  errors,
  setError,
  houseData,
  setValue,
  handleSubmit,
  setCount,
  setLoading,
  setFormData,
  setApiRes,
  houseType,
  setHouseType,
  no_gas,
  setNoGas,
  showExtended,
  setShowExtended,
  setMeter,
  clearErrors,
  meter,
  setOriginalElectricConsume,
  originalElectricConsume,
}) => {
  console.log(showExtended, "showExtended");

  const postal_code = watch("postal_code");
  const house_no = watch("house_no");
  const no_of_person = watch("no_of_person");
  const solar_panel = watch("solar_panel");
  const capacity = watch("capacity");
  const tooltipRef = useRef(null);
  const tooltipInstance = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      const data = {
        no_of_person,
        house_type: houseType,
      };

      if (solar_panel && capacity) {
        data.sola_panels = solar_panel;
        data.panel_capacity = capacity;
      }
      try {
        const res = await PostData("get-consumption-value", data);
        if (res.status == false) {
          setError("no_of_person", {
            type: "manual",
            message: res.message,
          });
        } else {
          clearErrors("no_of_person");
          setValue("normal_electric_consume", res.data.electric);
          console.log(res.data);
          setValue("gas_consumption", res.data.gas);
          setValue("feed_in_tariff", res.data.return);
          setValue("monthly_energy_produce", res.data.monthly_energy_produce);
        }
      } catch (error) {
        setError("no_of_person", {
          type: "manual",
          message: error.response.data.message,
        });
      }
    };
    // if (no_of_person && houseType) fetch();
    if (no_of_person > 5 || (no_of_person && houseType)) {
      fetch();
    }
  }, [no_of_person, houseType, solar_panel, capacity]);
  const [isHouseTypeInteracted, setIsHouseTypeInteracted] = useState(false);
  useEffect(() => {
    if (isHouseTypeInteracted) {
      if (no_of_person <= 5 && !houseType) {
        setError("house_type", {
          type: "manual",
          message: "House Type is required.",
        });
      } else {
        clearErrors("house_type");
      }
    }
  }, [no_of_person, houseType, isHouseTypeInteracted]);
  useEffect(() => {
    if (no_of_person > 5) {
      clearErrors("house_type");
    }
  }, [no_of_person]);

  useEffect(() => {
    if (no_of_person && houseType) {
      setValue("solar_panel", 0);
      setValue("capacity", "");
    }
  }, [no_of_person, houseType]);

  useEffect(() => {
    const solarPanels = watch("solar_panel");

    if (solarPanels >= 0) {
      const calculatedCapacity = solarPanels * 325;

      // Always update the capacity as solar_panel * 325
      setValue("capacity", calculatedCapacity);
    }
  }, [watch("solar_panel")]);

  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isAddressEditable, setIsAddressEditable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [prevPostalCode, setPrevPostalCode] = useState(null);
  const [prevHouseNo, setPrevHouseNo] = useState(null);

  const fetchAddress = async () => {
    if (postal_code && house_no) {
      // if (postal_code !== prevPostalCode || house_no !== prevHouseNo) {
      clearErrors("address");
      setValue("address", "");
      setIsLoading(true);
      try {
        const res = await PostData("verify-house-number", {
          postal_code,
          house_no,
        });
        if (res.status) {
          setValue("address", res.data.address);
          setFailedAttempts(0);
          setIsAddressEditable(false);
        } else {
          setFailedAttempts((prev) => prev + 1);
          setError("address", {
            type: "manual",
            message: "Failed to fetch address",
          });

          if (failedAttempts + 1 >= 3) {
            setShowPopup(true);
            setIsAddressEditable(true);
            clearErrors("address");
          }
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        setError("address", {
          type: "manual",
          message: error.res?.data?.message || "Server error",
        });
      } finally {
        setIsLoading(false);
      }
      //   setPrevPostalCode(postal_code);
      //   setPrevHouseNo(house_no);
      // }
    }
  };

  // useEffect(() => {
  //   const tooltipEl = tooltipRef.current;

  //   if (tooltipEl) {
  //     // Safely dispose of the tooltip if it exists
  //     if (tooltipInstance.current) {
  //       try {
  //         tooltipInstance.current.dispose();
  //       } catch (e) {
  //         console.error("Error disposing of tooltip instance:", e);
  //       } finally {
  //         tooltipInstance.current = null; // Reset the tooltip instance reference
  //       }
  //     }

  //     if (errors.address) {
  //       // Reinitialize the tooltip with the error message
  //       tooltipEl.setAttribute(
  //         "data-bs-original-title",
  //         `<strong>Error:</strong> ${errors.address.message}`
  //       );
  //       tooltipInstance.current = new bootstrap.Tooltip(tooltipEl, {
  //         html: true,
  //         trigger: "manual",
  //       });
  //       tooltipInstance.current.show();
  //     } else {
  //       // Ensure no tooltip is visible when errors are cleared
  //       tooltipEl.setAttribute("data-bs-original-title", ""); // Clear the content
  //     }
  //   }
  // }, [errors.address]);
  // useEffect(() => {
  //   const tooltipEl = tooltipRef.current;

  //   if (tooltipEl) {
  //     // Safely dispose of any existing tooltip instance
  //     if (tooltipInstance.current) {
  //       try {
  //         tooltipInstance.current.dispose();
  //       } catch (e) {
  //         console.error("Error disposing of tooltip instance:", e);
  //       } finally {
  //         tooltipInstance.current = null;
  //       }
  //     }

  //     if (errors.address) {
  //       // Show specific error message for address field
  //       tooltipEl.setAttribute(
  //         "data-bs-original-title",
  //         `<strong>Error:</strong> ${errors.address.message}`
  //       );
  //       tooltipInstance.current = new bootstrap.Tooltip(tooltipEl, {
  //         html: true,
  //         trigger: "manual", // Keep as manual to ensure it shows
  //       });
  //       tooltipInstance.current.show();
  //     } else {
  //       // Set default tooltip message
  //       tooltipEl.setAttribute(
  //         "data-bs-original-title",
  //         "Ter vergelijking hebben wij uw postcode, huisnummer en adres nodig"
  //       );
  //       tooltipInstance.current = new bootstrap.Tooltip(tooltipEl, {
  //         html: true,
  //         trigger: "hover",
  //       });
  //     }
  //   }
  // }, [errors.address]);

  useEffect(() => {
    const tooltipEl = tooltipRef.current;
    
    if (tooltipEl) {
      // Safely dispose of any existing tooltip instance
      if (tooltipInstance.current) {
        try {
          tooltipInstance.current.dispose();
        } catch (e) {
          console.error("Error disposing of tooltip instance:", e);
        } finally {
          tooltipInstance.current = null;
        }
      }
    
      // Ensure error message takes priority
      const errorMessage = errors.address?.message;
      
      const tooltipContent = errorMessage 
        ? `<strong>Error:</strong> ${errorMessage}`
        : "Ter vergelijking hebben wij uw postcode, huisnummer en adres nodig";
  
      tooltipEl.setAttribute(
        "data-bs-original-title", 
        tooltipContent
      );
  
      tooltipInstance.current = new bootstrap.Tooltip(tooltipEl, {
        html: true,
        trigger: errorMessage ? "manual" : "hover",
      });
  
      // If there's an error, explicitly show the tooltip
      if (errorMessage) {
        tooltipInstance.current.show();
      }
    }
  }, [errors.address]);
  useEffect(() => {
    const normalValue = watch("normal_electric_consume");
    if (
      meter === 1 &&
      originalElectricConsume === null &&
      normalValue !== undefined
    ) {
      setOriginalElectricConsume(normalValue);
      const dividedValue = Math.round(normalValue / 2);
      setValue("normal_electric_consume", dividedValue);
      setValue("peak_electric_consume", dividedValue);
    } else if (meter === 0 && originalElectricConsume !== null) {
      setValue("normal_electric_consume", originalElectricConsume);
      setOriginalElectricConsume(null);
    }
  }, [meter, watch("normal_electric_consume")]);

  const [show, setShow] = useState(false);
  const [gasConsumeVisible, setGasConsumeVisible] = useState(true);
  const [suppliers, setSuppliers] = useState([]);
  const router = useRouter();

  const handleCheckboxChange = (event) => {
    setNoGas(event.target.checked ? 1 : null);
    setGasConsumeVisible(!gasConsumeVisible);
  };
  const handleHouseType = (house) => {
    setHouseType(house);
    setShow(false);
  };
  const dropdownAnimation = useSpring({
    maxHeight: show ? "330px" : "0px", // Set maxHeight when open, 0px when closed
    opacity: show ? 4 : 0, // Fade in/out
  });

  useEffect(() => {
    if (!gasConsumeVisible) setValue("gas_consumption", "");
  }, [gasConsumeVisible]);

  const onSubmit = async (data) => {
    if (no_of_person <= 5 && !houseType) {
      setError("house_type", {
        type: "manual",
        message: "House Type is required for less than 5 persons",
      });
      return;
    }
    if (Object.keys(errors).length > 0) {
      toast.error(
        "Submission failed due to validation errors. Please fix the highlighted issues."
      );
      return;
    }

    setFormData(data);
    localStorage.setItem("EnergyUserData", JSON.stringify(data, no_gas));
    localStorage.setItem("EnergyUserDataNoGas", JSON.stringify(no_gas));

    const dataToSend = {
      // postal_code: data.postal_code,
      // house_no: data.house_no,
      energy_label: data.energy_label,
      no_gas: no_gas,
      meter_type: data.meter_type,
      current_supplier: data.current_supplier,
      house_type: houseType,
      no_of_person: data.no_of_person,
      advantages: {
        gas_consumption: data.gas_consumption,
        normal_electric_consume: data.normal_electric_consume,
        feed_in_normal: data.feed_in_normal,
      },
      solar_panels: data.solar_panel,
      gas_consumption: data.gas_consumption,
      monthly_energy_produce: data.monthly_energy_produce,
      feed_in_tariff: data.feed_in_tariff,
      normal_electric_consume: data.normal_electric_consume,
      peak_electric_consume:
        data.meter_type === "Single Meter" ? 0 : data.peak_electric_consume,
    };

    toast.loading("Verifying and Submitting data. Please wait...");
    setLoading(true);

    try {
      const res = await PostData("energy", "", dataToSend);

      if (res.success) {
        toast.success(res.message || "Products retrieved successfully.");
        setCount(1); // Proceed to next step
        setLoading(false);
      } else {
        toast.dismiss();
        toast.error(res.message || "Submission failed due to an error.");

        // Display field-specific errors if available
        if (res.errors) {
          Object.keys(res.errors).forEach((field) => {
            setError(field, {
              type: "manual",
              message: res.errors[field],
            });
            toast.error(`${field}: ${res.errors[field]}`);
          });
        }
      }

      setApiRes(res);
      setLoading(false);
      console.log(dataToSend);
    } catch (error) {
      toast.dismiss();
      toast.error(
        error.response?.data?.message || "Submission failed. Please try again."
      );
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
      toast.dismiss();
    }
  };

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
      <div className="col-lg-12">
        <div className="form-sec" id="div1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center">
              <div className="col-lg-4 energie-left">
                <div className="col-lg-12">
                  <div className="titlecybersecurity">
                    <h2>
                      {" "}
                      <Image
                        width={42}
                        height={42}
                        src="/images/wind-turbine.png"
                        alt="aa"
                      />
                      Energie
                    </h2>
                  </div>
                </div>
                <div className="row sp-right">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className={
                              errors.postal_code
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            placeholder="Postcode"
                            {...register("postal_code", {
                              required: "This field is required",
                            })}
                            onBlur={() => fetchAddress()}
                          />
                          {errors.postal_code && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              {errors.postal_code.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className={
                              errors.house_no
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            placeholder="Housenumber"
                            {...register("house_no", {
                              required: "This field is required",
                            })}
                            onBlur={() => fetchAddress()}
                          />
                          {/* {errors.house_no && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              {errors.house_no.message}
                            </p>
                          )} */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div
                          className="form-group info-bx"
                          style={{ position: "relative" }}
                        >
                          <input
                            type="text"
                            className={
                              errors.address
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            placeholder={isLoading ? "" : "Address"}
                            {...register("address", {
                              required: "This field is required",
                            })}
                            readOnly={!isAddressEditable}
                          />
                          {isLoading && (
                            <div className="loader">
                              <Oval
                                height={20}
                                width={20}
                                color="#e5cb13"
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="gray"
                                zIndex="2"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                                wrapperStyle={{
                                  position: "absolute",
                                  right: "50%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }}
                              />
                            </div>
                          )}
                          {errors.address && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              {/* This field is required */}
                              {errors.address.message}
                            </p>
                          )}
                          {showPopup && (
                            <div
                              style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 1000,
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#fff",
                                  padding: "20px",
                                  borderRadius: "8px",
                                  maxWidth: "400px",
                                  textAlign: "center",
                                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                <p
                                  style={{
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  Bekijk of je informatie correct ingevuld is,
                                  mocht het toch kloppen bekijk de mogelijke
                                  deals en raadpleeg ons voor verdere
                                  informatie.
                                </p>
                                <button
                                  type="button"
                                  onClick={() => setShowPopup(false)} // Close the popup
                                  style={{
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          )}

                          <a
                            href="#"
                            className="in-ho"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            // title={generateAddressTooltip()}
                            ref={tooltipRef}
                          >
                            <i className="far fa-map-marker-alt cl-sky" />{" "}
                            <span>Address</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Aantal personen</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group icon-img info-bx">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/user.png"
                      />
                      <input
                        type="number"
                        min={1}
                        className={
                          errors.no_of_person
                            ? "form-control errorBox"
                            : "form-control"
                        }
                        placeholder={20}
                        {...register("no_of_person", {
                          required: "This field is required",
                          min: {
                            value: 1,
                            message: "Minimum 0 persons allowed",
                          },
                        })}
                      />
                      <a
                        href="#"
                        className="in-ho-info"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Voer nr. in. van personen in uw gezin"
                      >
                        <i className="fas  fa-info-circle" />
                      </a>
                    </div>
                  </div>
                  {errors.no_of_person && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle"></i>
                      {errors.no_of_person.message}
                    </p>
                  )}

                  {/* <div className="col-lg-12">
                                        <div className="form-group info-bx">
                                            <select className={errors.house_type ? "form-select errorBox" : "form-select"}
                                                {...register('house_type', {
                                                    required: true
                                                })}>
                                                <option value="">Sector</option>
                                                <option value="1">Sector 2</option>
                                                <option value="2">Sector 3</option>
                                            </select>
                                            <a href="#" className="in-ho-info" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas  fa-info-circle" /></a>
                                            {errors.house_type && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i>This field is required</p>}
                                        </div>
                                    </div> */}
                  <div className="col-lg-12">
                    <div className="form-group info-bx">
                      <div
                        // className="house-type-box"
                        // className={`house-type-box ${
                        //   errors.house_type ? "errorBox" : ""
                        // }`}
                        className={`house-type-box ${
                          errors.house_type
                            ? "form-control errorBox"
                            : "form-control"
                        }`}
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        {houseType
                          ? (() => {
                              const filteredData = houseData.find(
                                (data) => data.id === houseType
                              );
                              return filteredData
                                ? filteredData.name
                                : "House type not found";
                            })()
                          : "Select house type"}

                        {show ? (
                          <i className="fas fa-chevron-up"></i>
                        ) : (
                          <i className="fas fa-chevron-down"></i>
                        )}
                      </div>
                      {show && (
                        <animated.div
                          style={dropdownAnimation}
                          className="form-radio-bx p-4 house-type-select-box"
                        >
                          {houseData && houseData.length > 0 && (
                            <>
                              {houseData.map((item, i) => (
                                <label
                                  key={i}
                                  className="img-btn"
                                  onClick={() => {
                                    handleHouseType(item.id);
                                    setIsHouseTypeInteracted(true);
                                  }}
                                >
                                  <input
                                    type="radio"
                                    name="house_type"
                                    value={item.id}
                                    {...register("house_type", {
                                      required: "This field is required",
                                    })}
                                  />
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src={item.image}
                                  />
                                  <p>{item.name}</p>
                                </label>
                              ))}
                            </>
                          )}
                        </animated.div>
                      )}
                    </div>
                    {errors.house_type && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i>
                        {errors.house_type.message}
                      </p>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Zonnepanelen :</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group icon-img">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/solar-panel.png"
                      />
                      <input
                        type="number"
                        min="0"
                        placeholder={0}
                        className="form-control"
                        {...register("solar_panel")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Capaciteit :</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group icon-img">
                      <Image
                        width={200}
                        height={200}
                        alt="aa"
                        src="/images/solar-panel.png"
                      />
                      <input
                        type="number"
                        min="0"
                        placeholder={0}
                        className={
                          errors.capacity
                            ? "form-control errorBox"
                            : "form-control"
                        }
                        {...register("capacity", {
                          required: watch("solar_panel")
                            ? "This field is required"
                            : false,
                        })}
                      />
                      {errors.capacity && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i>
                          {errors.capacity.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group info-bx">
                      <select
                        className={
                          errors.current_supplier
                            ? "form-select errorBox"
                            : "form-select"
                        }
                        {...register("current_supplier", {
                          required: true,
                        })}
                      >
                        <option value="" selected disabled>
                          Select supplier
                        </option>
                        {suppliers?.map((supplier, i) => (
                          <option key={i} value={supplier.id}>
                            {supplier.name}
                          </option>
                        ))}
                      </select>
                      <a
                        href="#"
                        className="in-ho-info"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Je hebt nog niet je huidige energieleverancier ingevuld"
                      >
                        <i className="fas  fa-info-circle" />
                      </a>
                      {errors.current_supplier && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i>This
                          field is required
                        </p>
                      )}
                    </div>
                  </div>

                  {!showExtended && (
                    <>
                      <div className="col-lg-12 text-center">
                        <button type="submit" className="btn-one">
                          Bekijk jouw voordeel
                        </button>
                      </div>
                      <a
                        onClick={() => setShowExtended(!showExtended)}
                        className="need-txt"
                      >
                        Ik weet mijn verbruik
                      </a>
                    </>
                  )}
                </div>
              </div>
              {showExtended && (
                <div className="col-lg-4 position-relative pt-4 energie-right">
                  <div className="row pb-3">
                    <div className="col-lg-12">
                      <div className="radio-bx">
                        <label className="radio-button-container">
                          Enkele meter
                          <input
                            type="radio"
                            defaultChecked="checked"
                            value={"Single Meter"}
                            name="toggle"
                            id="showDiv1"
                            onClick={() => setMeter(0)}
                            {...register("meter_type")}
                          />
                          <span className="checkmark" />
                        </label>
                        <label className="radio-button-container">
                          Dubbele meter
                          <input
                            type="radio"
                            name="toggle"
                            id="showDiv2"
                            value={"Double Meter"}
                            onClick={() => setMeter(1)}
                            {...register("meter_type")}
                          />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  {meter == 0 ? (
                    <div className="row sp-right">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Stroomverbruik :</label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group info-bx">
                          <input
                            type="number"
                            placeholder="10000 kWh/p.j."
                            className={
                              errors.normal_electric_consume
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            {...register("normal_electric_consume", {
                              required: true,
                            })}
                          />

                          <a
                            href="#"
                            className="in-ho-info"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title=" Vul in hoeveel stroom je per jaar afneemt van je leverancier"
                          >
                            <i className="fas  fa-info-circle" />
                          </a>
                        </div>
                      </div>
                      {errors.normal_electric_consume && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i>This
                          field is required
                        </p>
                      )}
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="">Energielabel :</label>
                        </div>
                      </div>
                      {/* ---------checkboxes------- */}
                      <div className="col-lg-12 mb-3">
                        <ul className="list-unstyled">
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="a"
                              value={"A"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classAPlusPlus">A</span>
                          </li>
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="b"
                              value={"B"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classAPlus">B</span>
                          </li>
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="c"
                              value={"C"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classA">C</span>
                          </li>
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="d"
                              value={"D"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classB">D</span>
                          </li>
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="e"
                              value={"E"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classC">E</span>
                          </li>
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="f"
                              value={"F"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classD">F</span>
                          </li>
                          <li className="d-flex">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="g"
                              value={"G"}
                              {...register("energy_label", {
                                required: true,
                              })}
                            />
                            <span className="classE">G</span>
                          </li>
                        </ul>
                        {errors.energy_label && (
                          <p className="errorMsg">
                            <i className="fas fa-exclamation-triangle"></i>This
                            field is required
                          </p>
                        )}
                      </div>

                      {/* ----------------------------- */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Teruglevering :</label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group info-bx">
                          <input
                            type="text"
                            placeholder="0 kWh/p.j."
                            className={
                              errors.feed_in_tariff
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            {...register("feed_in_tariff", {
                              required: true,
                            })}
                          />
                          <a
                            href="#"
                            className="in-ho-info"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title=" Vul in hoeveel stroom je per jaar teruglevert aan je leverancier"
                          >
                            <i className="fas  fa-info-circle" />
                          </a>
                        </div>
                      </div>
                      {errors.feed_in_normal && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i>This
                          field is required
                        </p>
                      )}
                      {gasConsumeVisible && (
                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Gasverbruik :</label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group info-bx">
                              <input
                                type="text"
                                placeholder="10000 m3/p.j."
                                className="form-control"
                                {...register("gas_consumption")}
                              />
                              <a
                                href="#"
                                className="in-ho-info"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Als je stads- of blokverwarming hebt, gebruik je meestal geen gas. Je stapt dan alleen over voor stroom. Kies in dat geval voor de optie ‘Gasvrij’"
                              >
                                <i className="fas  fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="col-lg-12">
                        <div className="form-group form-check-pr">
                          <input
                            type="checkbox"
                            id="gas"
                            value={1}
                            checked={no_gas === 1}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="gas">Gasvrij</label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <button type="submit" className="btn-one">
                          Bekijk jouw voordeel
                        </button>
                      </div>
                      <a
                        className="mb-4 need-txt"
                        onClick={() => setShowExtended(false)}
                      >
                        Hulp nodig bij het schatten?
                      </a>
                    </div>
                  ) : (
                    <div className="row sp-right">
                      <div className="row sp-right">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label htmlFor="">Verbruik Normaal :</label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group info-bx">
                            <input
                              type="number"
                              placeholder="7000 kWh/p.j."
                              className={
                                errors.normal_electric_consume
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              {...register("normal_electric_consume", {
                                required: true,
                              })}
                            />
                            <a
                              href="#"
                              className="in-ho-info"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Voer de dubbele meterwaarde in"
                            >
                              <i className="fas  fa-info-circle" />
                            </a>
                          </div>
                        </div>
                        {errors.normal_electric_consume && (
                          <p className="errorMsg">
                            <i className="fas fa-exclamation-triangle"></i>This
                            field is required
                          </p>
                        )}
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label htmlFor="">Verbruik Dal :</label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group info-bx">
                            <input
                              type="number"
                              placeholder="7000 kWh/p.j."
                              className={
                                errors.peak_electric_consume
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              {...register("peak_electric_consume", {
                                required: true,
                              })}
                            />
                            <a
                              href="#"
                              className="in-ho-info"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Voer de dubbele meterwaarde in"
                            >
                              <i className="fas  fa-info-circle" />
                            </a>
                          </div>
                        </div>
                        {errors.peak_electric_consume && (
                          <p className="errorMsg">
                            <i className="fas fa-exclamation-triangle"></i>This
                            field is required
                          </p>
                        )}
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="">Energielabel :</label>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-3">
                          <ul className="list-unstyled">
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="a"
                                value={"A"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classAPlusPlus">A</span>
                            </li>
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="b"
                                value={"B"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classAPlus">B</span>
                            </li>
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="c"
                                value={"C"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classA">C</span>
                            </li>
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="d"
                                value={"D"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classB">D</span>
                            </li>
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="e"
                                value={"E"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classC">E</span>
                            </li>
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="f"
                                value={"F"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classD">F</span>
                            </li>
                            <li className="d-flex">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="g"
                                value={"G"}
                                {...register("energy_label", {
                                  required: true,
                                })}
                              />
                              <span className="classE">G</span>
                            </li>
                          </ul>
                          {errors.energy_label && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label htmlFor="">Teruglevering :</label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group info-bx">
                            <input
                              type="number"
                              placeholder="0 kWh/p.j."
                              className={
                                errors.feed_in_tariff
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              {...register("feed_in_tariff", {
                                required: true,
                              })}
                            />
                            <a
                              href="#"
                              className="in-ho-info"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Vul in hoeveel stroom je per jaar teruglevert aan je leverancier"
                            >
                              <i className="fas  fa-info-circle" />
                            </a>
                          </div>
                        </div>
                        {errors.feed_in_normal && (
                          <p className="errorMsg">
                            <i className="fas fa-exclamation-triangle"></i>This
                            field is required
                          </p>
                        )}
                        {/* <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Teruglevering dal :</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group info-bx">
                        <input
                          type="number"
                          placeholder="0 kWh/p.j. dal"
                          className="form-control"
                          {...register("feed_in_peak", {
                            required: true,
                          })}
                        />
                        <a
                          href="#"
                          className="in-ho-info"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Content Goes Here"
                        >
                          <i className="fas  fa-info-circle" />
                        </a>
                      </div>
                    </div> */}
                        {errors.feed_in_peak && (
                          <p className="errorMsg">
                            <i className="fas fa-exclamation-triangle"></i>This
                            field is required
                          </p>
                        )}
                        {gasConsumeVisible && (
                          <>
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Gasverbruik :</label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group info-bx">
                                <input
                                  type="number"
                                  placeholder="10000 m3/p.j."
                                  className="form-control"
                                  {...register("gas_consumption")}
                                />
                                <a
                                  href="#"
                                  className="in-ho-info"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Als je stads- of blokverwarming hebt, gebruik je meestal geen gas. Je stapt dan alleen over voor stroom. Kies in dat geval voor de optie ‘Gasvrij’"
                                >
                                  <i className="fas  fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="col-lg-12">
                          <div className="form-group form-check-pr">
                            <input
                              type="checkbox"
                              id="gas"
                              value={1}
                              checked={no_gas === 1}
                              onChange={handleCheckboxChange}
                            />
                            <label htmlFor="gas">Gasvrij</label>
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <button type="submit" className="btn-one">
                            Bekijk jouw voordeel
                          </button>
                        </div>
                        <a
                          className="mb-4 need-txt"
                          onClick={() => setShowExtended(false)}
                        >
                          Hulp nodig bij het schatten?
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="privacy-ab">
                    <a href="javascript:void(0);">
                      <i className="fas fa-2x fa-shield-alt" />
                      <span>Privacy</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SeveralMeters;
