import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PostData, axiosGet } from "../../../utils/ApiCalls";
import SunAnimation from "../../common/SunAnimation";
import { useDispatch } from "react-redux";
import { healthFormData } from "../../../store/slices/healthInsuranceSlice";
import HealthInsuranceCalculationpop1 from "./HealthInsuranceCalculationpop1";
import HealthInsuranceCalculationpop2 from "./HealthInsuranceCalculationpop2";
import TooltipInitialise from "../../common/TooltipInitialise";

export const HealthHomeTop = ({
  setShowStepper,
  setCount,
  setFormData,
  setApiData,
  authToken,
  coveragesType,
  setApiFilters,
  setApiSendData,
  apiSendData,
}) => {
  const className = "health-insuran";
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [extendedForm, setExtendedForm] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState();
  const [coInsure, setCoInsure] = useState(false);
  const [providers, setProviders] = useState();
  const [additionalCoverage, setAdditionalCoverage] = useState([]);
  const [rangeValue, setRangeValue] = useState(1);

  // ----------range slider logic starts------------------
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    setRangeValue(value);
  };
  // ----------range slider logic ends--------------------

  const handleNextStep = async () => {
    try {
      // const res = await PostData('logout', '', '', `Bearer ${authToken}`)
      const res2 = await PostData(
        "get-user-data",
        { user_id: 2 },
        "",
        `Bearer ${authToken}`
      );
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
    setShowStepper(true);
    setCount(1);
  };
  const [postCode, setPostCode] = useState();
  const postalCode = watch("post_code");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setPostCode(postalCode);
    }, 3000);
    return () => clearTimeout(delayDebounceFn);
  }, [postalCode]);
  useEffect(() => {
    const healthInsurance = async () => {
      try {
        const res = await PostData("health-insurance", {
          postal_code: postCode,
        });
        // const res2 = await axiosGet('get-exclusive-deal/3')
        // console.log(res);
        // setApiData(res?.data)
        setApiFilters(res?.filters);
        setProviders(res?.providers);
        setHealthInsurance(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (postCode) healthInsurance();
  }, [postCode]);
  // console.log(healthInsurance);
  const onSubmit = async (data) => {
    // console.log(data);
    setFormData(data);
    setShowStepper(true);
    setCount(1);
    dispatch(healthFormData(data));
    const sendData = {
      features: [75],
      postal_code: data.post_code,
      voluntary_deductible: [0, 10],
      house_no: data.house_no,
      address: data.address,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      coverages: additionalCoverage,
    };
    setApiSendData(sendData);
    try {
      const res = await PostData(
        "health-insurance",
        sendData,
        "",
        `Bearer ${authToken}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedId, setSelectedId] = useState(null);
  const [enteredNumber, setEnteredNumber] = useState(null);

  const handleCoverage = (item) => {
    if (additionalCoverage.includes(item)) {
      setAdditionalCoverage(
        additionalCoverage.filter((itemId) => itemId !== item)
      );
    } else {
      setAdditionalCoverage([...additionalCoverage, item]);
    }
  };
  // console.log(additionalCoverage);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="eventwrp position-relative">
          <SunAnimation className={className} />
          <div className="container">
            <div className="card border-0">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-6 eventbxleft pb-3">
                    <div className="titlecybersecurity">
                      <h2>
                        <Image
                          width={42}
                          height={42}
                          src="/images/first-aid-kit.png"
                          alt="aa"
                        />{" "}
                        Zorgverzekering
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-9">
                        <div className="row">
                          <div className="col-sm-4 col-12">
                            <input
                              type="text"
                              className={
                                errors.post_code
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              id="input1"
                              placeholder="Postcode"
                              {...register("post_code", {
                                required: true,
                              })}
                            />
                          </div>
                          <div className="col-sm-4 col-12">
                            <input
                              type="text"
                              className={
                                errors.house_no
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              id="input2"
                              placeholder="Huisnummer"
                              {...register("house_no", {
                                required: true,
                              })}
                            />
                          </div>
                          <div className="col-sm-4 col-12">
                            <input
                              type="text"
                              className={
                                errors.address
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              id="input3"
                              placeholder="Address"
                              {...register("address", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <select
                              className={
                                errors.health_insurance
                                  ? "form-select errorBox"
                                  : "form-select"
                              }
                              aria-label="Select"
                              {...register("health_insurance", {
                                required: true,
                              })}
                            >
                              <option value="">Zorgverzekering </option>
                              {healthInsurance &&
                                healthInsurance.length > 0 && (
                                  <>
                                    {healthInsurance?.map((item, i) => (
                                      <option value={item?.id} key={i}>
                                        {item.title}
                                      </option>
                                    ))}
                                  </>
                                )}
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6 position-relative">
                            <select
                              className={
                                errors.insurer
                                  ? "form-select errorBox"
                                  : "form-select"
                              }
                              aria-label="Select"
                              {...register("insurer", {
                                required: true,
                              })}
                            >
                              <option value="">Verzekeraar</option>
                              {providers && providers.length > 0 && (
                                <>
                                  {providers?.map((item, i) => (
                                    <option value={item?.id} key={i}>
                                      {item?.name}
                                    </option>
                                  ))}
                                </>
                              )}
                            </select>
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 text-nowrap">
                            <table className="table table-borderless top-gender-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <label>Geslacht</label>
                                  </td>
                                  <td>
                                    <div className="radio-icon top-man-healthinsurance">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="man"
                                        name="geslacht"
                                        {...register("gender", {
                                          required: true,
                                        })}
                                      />
                                      <label htmlFor="man">
                                        Man{" "}
                                        <i className="fas fa-2x fa-mars icon" />
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="radio-icon top-vrouw-healthinsurance">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="vrouw"
                                        name="geslacht"
                                        {...register("gender", {
                                          required: true,
                                        })}
                                      />
                                      <label htmlFor="vrouw">
                                        Vrouw{" "}
                                        <i className="fas fa-2x fa-venus icon" />
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12 position-relative">
                            <input
                              type="date"
                              className={
                                errors.date_of_birth
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              {...register("date_of_birth", {
                                required: true,
                              })}
                            />
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                            <div className="infcalcubx extra-pos">
                              <a href="javascript:void(0);" className="extra">
                                <i className="fas fa-2x fa-user-plus" />
                                <span>Extra?</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 position-relative">
                                <label className="form-label labeltitle">
                                  Meeverzekeren?
                                </label>
                                <div className="infcalcubx info-pos">
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
                                <div className="frm-toevoe-position text-center">
                                  <input
                                    className="form-check-input mb-0"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    onChange={() => setCoInsure(!coInsure)}
                                  />
                                  <div className="form-check-label d-block fw-bold">
                                    <label
                                      htmlFor="flexCheckDefault"
                                      className="form-check-label d-block fw-bold green-cyan"
                                    >
                                      <span className="fw-medium text-dark">
                                        Toevoegen
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {coInsure && (
                          <>
                            <div className="row">
                              <div className="col-lg-12 bottom-gender-table text-nowrap">
                                <table className="table table-borderless ">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <label>Wie?</label>
                                      </td>
                                      <td>
                                        <div className="radio-icon position-partner rd-df-icon text-nowrap">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="Partner"
                                            name="geslacht"
                                          />
                                          <label htmlFor="Partner">
                                            Partner{" "}
                                            <i className="fal fa-handshake-alt icon" />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="radio-icon position-kind-healthinsurance rd-df-icon text-nowrap">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="Kind"
                                            name="geslacht"
                                          />
                                          <label htmlFor="Kind">
                                            Kind{" "}
                                            <i className="fad fa-male icon" />
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <label>Geslacht</label>
                                      </td>
                                      <td>
                                        <div className="radio-icon rd-df-icon positon-man text-nowrap">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="man2"
                                            name="geslacht"
                                          />
                                          <label htmlFor="man2">
                                            Man{" "}
                                            <i className="fas fa-2x fa-mars icon" />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="radio-icon position-women rd-df-icon text-nowrap">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id="vrouw2"
                                            name="geslacht"
                                          />
                                          <label htmlFor="vrouw2">
                                            Vrouw{" "}
                                            <i className="fas fa-2x fa-venus icon" />
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 position-relative">
                                <input
                                  type="date"
                                  id
                                  name
                                  className="form-control"
                                />
                                <div className="infcalcubx info-pos">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Content Goes Here"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <select
                                  className="form-select"
                                  aria-label="Select"
                                >
                                  <option selected>Zorgverzekering </option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                              </div>
                              <div className="col-lg-6 position-relative">
                                <select
                                  className="form-select"
                                  aria-label="Select"
                                >
                                  <option selected>Verzekeraar</option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>
                                </select>
                                <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                            <div className="infcalcubx extra-pos">
                              <a href="javascript:void(0);" className="extra">
                                <i className="fas fa-2x fa-user-plus" />
                                <span>Extra?</span>
                              </a>
                            </div>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="row mt-3">
                          <div className="col-12 position-relative">
                            <label className="form-label labeltitle fw-bold">
                              Soort dekking{" "}
                              <Image
                                width={50}
                                height={50}
                                alt="aa"
                                src="/images/medicins.png"
                              />
                            </label>
                            <div className="infcalcubx info-pos">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            {/* Modal */}
                            <div
                              className="modal fade"
                              id="moreviewmodel"
                              tabIndex={-1}
                              aria-labelledby="moreviewmodelLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="moreviewmodelLabel"
                                    >
                                      Selecteer of vul in
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    />
                                  </div>
                                  <div className="modal-body addmorepopup">
                                    <ul className="list-unstyled checkbox-wrapper-16">
                                      <li>
                                        <div
                                          className="accordion"
                                          id="accordionleft"
                                        >
                                          <div className="accordion-item">
                                            <div
                                              className="accordion-header"
                                              id="headingOne"
                                            >
                                              <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/dentist-2.png"
                                                />
                                                <span className="d-block">
                                                  Tandarts
                                                </span>
                                              </button>
                                            </div>
                                            <div
                                              id="collapseOne"
                                              className="accordion-collapse collapse show"
                                              aria-labelledby="headingOne"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Wanneer ga je naar de
                                                  tandarts?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit. Ik maak hier geen
                                                    gebruik van.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Alleen voor de (half)
                                                    jaarlijkse controle.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Alleen voor de (half)
                                                    jaarlijkse controle en
                                                    mondhygiënist.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Ik laat wel eens gaatjes
                                                    vullen en/of heb een
                                                    wortelkanaalbehandeling.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option5"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option5"
                                                  >
                                                    Ik heb kronen, bruggen en/of
                                                    inlays nodig.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijke
                                                          advies:
                                                        </b>{" "}
                                                        Verwacht je niet een
                                                        bezoek te brengen aan de
                                                        tandarts. Neem dan
                                                        hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading2"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse2"
                                                aria-expanded="false"
                                                aria-controls="collapse2"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/physical-therapy.png"
                                                />
                                                <span className="d-block">
                                                  Fysiotherapie
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse2"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading2"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Wanneer bezoek je de
                                                  Fysiotherapeut?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit, ik maak hier geen
                                                    gebruik van.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Ik ga wel eens voor wat
                                                    klachten langs gemiddeld 1
                                                    tot 6 keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Af en toe breng ik een
                                                    bezoek gemiddeld 7 tot 9
                                                    keer jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Regelmatig gemiddeld 10 tot
                                                    18 keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option5"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option5"
                                                  >
                                                    Ik heb vaak ondersteuning
                                                    nodig gemiddeld 19 tot 27
                                                    keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijke
                                                          advies:
                                                        </b>
                                                        Verwacht je niet een
                                                        bezoek te brengen aan de
                                                        fysiotherapeut. Neem
                                                        dan, hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading3"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse3"
                                                aria-expanded="false"
                                                aria-controls="collapse3"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/alternative-medicine.png"
                                                />
                                                <span className="d-block">
                                                  Alternatief
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse3"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading3"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Maak je gebruik van een
                                                  chiropractor, accupunturist of
                                                  andere alternatieve
                                                  geneeswijzen?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit. ik maak hier geen
                                                    gebruik van.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Ik ga soms voor wat klachten
                                                    langs. Gemiddeld 1 tot 4
                                                    keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Ik breng regelmatig een
                                                    bezoek. Gemiddeld 5 tot 8
                                                    keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Ik heb last van een blessure
                                                    en/of chronische aandoening
                                                    en bezoek 9 tot 12 keer per
                                                    jaar een alternatieve
                                                    geneeswijzen.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijke
                                                          advies:
                                                        </b>
                                                        Verwacht je niet een
                                                        bezoek te brengen aan
                                                        een alternatieve
                                                        geneeswijzen. Neem dan,
                                                        hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading4"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse4"
                                                aria-expanded="false"
                                                aria-controls="collapse4"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/pharmacy.png"
                                                />
                                                <span className="d-block">
                                                  Medicatie
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse4"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading4"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Wanneer heb je nieuwe
                                                  medicijnen nodig?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nooit. ik heb geen
                                                    medicijnen nodig.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Af en toe heb ik nieuwe
                                                    medicijnen nodig gemiddeld 1
                                                    tot 5 keer per jaar
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Soms, heb ik een herhaal
                                                    recept nodig gemiddeld 6 tot
                                                    10 keer per jaar.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Vaak, heb ik meerdere
                                                    herhaal recepten nodig
                                                    gemiddeld 11 tot 15 keer per
                                                    jaar.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijk
                                                          advies:
                                                        </b>
                                                        Verwacht je geen gebruik
                                                        te maken van medicatie.
                                                        Neem dan, hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading5"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse5"
                                                aria-expanded="false"
                                                aria-controls="collapse5"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/glasses.png"
                                                />
                                                <span className="d-block">
                                                  Opticiën
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse5"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading5"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Heb je een bril of lenzen?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Geen van beide.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Alleen een bril
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Alleen lenzen
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Ik heb een bril en/of lenzen
                                                    en mijn sterkte is 6+ of 6-
                                                    en/of hoger.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option4"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option4"
                                                  >
                                                    Ik heb een bril en/of
                                                    lenzen, en mijn sterkte is
                                                    lager dan 6+ of 6-.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijk
                                                          advies:
                                                        </b>
                                                        Verwacht je geen gebruik
                                                        te maken van een
                                                        Opticiën. Neem dan,
                                                        hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading6"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse6"
                                                aria-expanded="false"
                                                aria-controls="collapse6"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/sunbed.png"
                                                />
                                                <span className="d-block">
                                                  Buitenland
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse6"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading6"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Ga je wel eens op vakantie in
                                                  het buitenland?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nee, ik blijf altijd in
                                                    Nederland
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Ja, ik reis alleen binnen
                                                    Europa
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Ja, ik reis over heel de
                                                    wereld
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijk
                                                          advies:
                                                        </b>
                                                        Verwacht niet te gaan
                                                        reizen naar het
                                                        buitenland. Neem dan,
                                                        hiervoor geen
                                                        aanvullende verzekering.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="heading7"
                                            >
                                              <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse7"
                                                aria-expanded="false"
                                                aria-controls="collapse7"
                                              >
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/calculator.png"
                                                />
                                                <span className="d-block">
                                                  Eigen risico
                                                </span>
                                              </button>
                                            </h2>
                                            <div
                                              id="collapse7"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="heading7"
                                              data-bs-parent="#accordionleft"
                                            >
                                              <div className="accordion-body">
                                                <h6>
                                                  Verwacht je behandeld te
                                                  worden door een medisch
                                                  specialist?
                                                </h6>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option1"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option1"
                                                  >
                                                    Nee, ik heb geen behandeling
                                                    in mijn agenda staan en kan
                                                    de gemaakte kosten terug
                                                    betalen.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option2"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option2"
                                                  >
                                                    Nee, ik heb geen behandeling
                                                    ingepland, maar ik kan wel
                                                    wat missen voor
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Ja, ik heb wel een
                                                    behandeling ingepland bij
                                                    het ziekenhuis.
                                                  </label>
                                                </div>
                                                <div className="form-check d-flex w-100">
                                                  <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    id="option3"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    htmlFor="option3"
                                                  >
                                                    Nee, maar ik wil geen risico
                                                    nemen.
                                                  </label>
                                                </div>
                                                <div className="acc-fot">
                                                  <div className="row ">
                                                    <div className="col-lg-8">
                                                      <p className="mb-0">
                                                        <b>
                                                          Ons persoonlijk
                                                          advies:
                                                        </b>
                                                        Verwacht je geen kosten
                                                        te maken. Behoud dan als
                                                        nog de standaard eigen
                                                        risico voor onverwachte
                                                        hoge kosten.
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex justify-content-between">
                                                      <button className="price-btn">
                                                        Volgende
                                                      </button>
                                                      <a
                                                        className="reset-btn"
                                                        href="javascript:void();"
                                                      >
                                                        <i className="fas  fa-sync-alt"></i>
                                                        <span>Reset</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li></li>

                                      <li>
                                        <div className="addmorelist">
                                          <span>Toevoegen</span>
                                          <a href="javascript:void(0);">
                                            <i className="fas fa-2x fa-plus-circle" />
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="popupbtn">
                                      <div className="row">
                                        <div className="col-12 text-center  ">
                                          <button className="btnps">
                                            Opslaan
                                          </button>
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


                        
                        <div className="row">
                          <div className="col radiobx">
                            <div className="row justify-content-center">
                              <div className="col-md-4  col-6">
                                <input type="radio" name="test" id="cb111" />
                                <label htmlFor="cb111" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/contract.png"
                                    className="img-fluid"
                                  />
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Basis"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <span className="checkbox-label">Basis</span>
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Basis</p>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-4  col-6">
                                <input type="radio" name="test" id="cb22" />
                                <label htmlFor="cb22" className="tooltip-container">
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="aa"
                                    src="/images/contract-3.png"
                                    className="img-fluid"
                                  />
                                  <div className="d-flex justify-content-center">
                                    <p className="tooltip-text">Aanvullend</p>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Aanvullend"
                                    className="info-in-risk hide-info-desktop"
                                  >
                                    <i className="fas fa-2x fa-info-circle" />
                                  </a>
                                  <span className="checkbox-label">
                                    Aanvullend
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {extendedForm == 0 && (
                          <div className="row mt-4">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button
                                  className="seenowbtn"
                                  onClick={() => setExtendedForm(1)}
                                  type="submit"
                                >
                                  Start vergelijking
                                </button>
                              </div>
                              <a className="cyberprivacylink">
                                <i className="fas fa-2x fa-shield-alt" />
                                <span>Privacy</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {extendedForm == 1 && (
                    <div className="col-lg-6 eventbxright pb-3">
                      <TooltipInitialise />
                      <div className="row">
                        <div className="col-9">
                          <div className="row">
                            <div className="col-lg-12 position-relative">
                              <label className="form-label labeltitle">
                                Aanvullende dekking
                              </label>
                              <div className="infcalcubx info-pos">
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
                              <div className="frm-toevoe-position text-center">
                                <a
                                  data-bs-toggle="modal"
                                  href="#quantityModalToggle"
                                  role="button"
                                  className="calculatorwrp"
                                >
                                  <i className="fas fa-calculator" />
                                  <span>Hulp nodig?</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="row">
                                <div className="col radiobx">
                                  <div className="row px-2 mb-2">
                                    {coveragesType &&
                                      coveragesType.length > 0 && (
                                        <>
                                          {coveragesType?.map((item, i) => (
                                            <div
                                              className="col-lg-4 p-0 mb-0 col-md-4"
                                              key={i}
                                            >
                                              <input
                                                type="checkbox"
                                                name="cb111"
                                                id={item?.name}
                                                value={item?.id}
                                                onChange={() =>
                                                  handleCoverage(item.id)
                                                }
                                              />
                                              <label htmlFor={item?.name} className="tooltip-container">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src={item?.image}
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  {item?.name}
                                                </span>
                                                <input
                                                  type="number"
                                                  className="form-control"
                                                  // onChange={(e) => handleNumberChange(e, item)}
                                                />
                                                <a
                                                  href="javascript:void(0);"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-html="true"
                                                  title={item?.name}
                                                  className="info-in-risk hide-info-desktop"
                                                >
                                                  <i className="fas fa-2x fa-info-circle" />
                                                </a>
                                                <div className="d-flex justify-content-center">
                                                  <p className="tooltip-text">{item?.name}</p>
                                                </div>
                                              </label>
                                            </div>
                                          ))}
                                        </>
                                      )}
                                    {/* <div className="col-lg-4 col-md-4">
                                      <input type="radio" name="test" id="cb22" />
                                      <label htmlFor="cb22">
                                        <Image width={200} height={200} alt="aa" src="/images/physical-therapy.png" className="img-fluid" />
                                        <span className="checkbox-label">Aanvullend</span>
                                        <input type="number" className="form-control" />
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                      <input type="radio" name="test" id="cb22" />
                                      <label htmlFor="cb22">
                                        <Image width={200} height={200} alt="aa" src="/images/choose.png" className="img-fluid" />
                                        <span className="checkbox-label">Alternatief</span>
                                        <input type="number" className="form-control" />
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                      <input type="radio" name="test" id="cbd112" />
                                      <label htmlFor="cbd112">
                                        <Image width={200} height={200} alt="aa" src="/images/syringe.png" className="img-fluid" />
                                        <span className="checkbox-label">Medicatie</span>
                                        <input type="number" className="form-control" />
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                      <input type="radio" name="test" id="cb222" />
                                      <label htmlFor="cb222">
                                        <Image width={200} height={200} alt="aa" src="/images/contact-lens.png" className="img-fluid" />
                                        <span className="checkbox-label">Opticiën</span>
                                        <input type="number" className="form-control" />
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                      <input type="radio" name="test" id="cb232" />
                                      <label htmlFor="cb232">
                                        <Image width={200} height={200} alt="aa" src="/images/airplane.png" className="img-fluid" />
                                        <span className="checkbox-label">Buitenland</span>
                                        <input type="number" className="form-control" />
                                      </label>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="row">
                                    <div className="col-lg-8 col-12">
                                      <label className="form-label labeltitle">
                                        Totaal extra zorgvergoeding
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-12 position-relative">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                      <div className="infcalcubx info-pos">
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
                                      <div className="frm-toevoe-position text-center">
                                        <a
                                          className="text-center"
                                          href="javascript:void(0);"
                                          data-bs-toggle="modal"
                                          data-bs-target="#moredatacheck"
                                        >
                                          <Image
                                            width={50}
                                            height={50}
                                            alt="aa"
                                            src="/images/viewpop.png"
                                          />
                                          <span>Overzicht?</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Overzicht popup Start */}

                              <div
                                className="modal fade"
                                id="moredatacheck"
                                tabIndex={-1}
                                aria-labelledby="moreviewmodelLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-lg">
                                  <div className="modal-content">
                                    <div className="modal-body addmorepopup">
                                    <div className="pop-up-ttl"><h3>Controleer of pas aan</h3>
                                        <Image
                                          width={100}
                                          height={50}
                                          alt="aa"
                                          src="/images/viewpop.png"
                                        />
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times" />
                                    </button>
                                      <ul className="list-unstyled checkbox-wrapper-16">
                                        <li>
                                          
                                          <div className="row">
                                            <div className="col-4">
                                            <a class="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                              <div className="p-2 ms-3">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/dentist-2.png"
                                                  className="img-fluid"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-4 text-center">
                                              <span>Tandarts</span>
                                            </div>
                                            <div className="col-4 text-end">
                                              <label className="checkbox-wrapper">
                                                <input
                                                  type="checkbox"
                                                  className="checkbox-input"
                                                />
                                                <span className="checkbox-tile">
                                                  <span className="checkbox-icon">
                                                    <Image
                                                      width={200}
                                                      height={200}
                                                      alt="aa"
                                                      src="/images/compairadd.png"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                  <span className="checkbox-label" />
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="row">
                                            <div className="col-4">
                                            <a class="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                              <div className="p-2 ms-3">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/physical-therapy.png"
                                                  className="img-fluid"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-4 text-center">
                                              <span>Fysiotherapie</span>
                                            </div>
                                            <div className="col-4 text-end">
                                              <label className="checkbox-wrapper">
                                                <input
                                                  type="checkbox"
                                                  className="checkbox-input"
                                                />
                                                <span className="checkbox-tile">
                                                  <span className="checkbox-icon">
                                                    <Image
                                                      width={200}
                                                      height={200}
                                                      alt="aa"
                                                      src="/images/compairadd.png"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                  <span className="checkbox-label" />
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="row">
                                            <div className="col-4">
                                            <a class="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                              <div className="p-2 ms-3">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/alternative-medicine.png"
                                                  className="img-fluid"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-4 text-center">
                                              <span>Alternatief</span>
                                            </div>
                                            <div className="col-4 text-end">
                                              <label className="checkbox-wrapper">
                                                <input
                                                  type="checkbox"
                                                  className="checkbox-input"
                                                />
                                                <span className="checkbox-tile">
                                                  <span className="checkbox-icon">
                                                    <Image
                                                      width={200}
                                                      height={200}
                                                      alt="aa"
                                                      src="/images/compairadd.png"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                  <span className="checkbox-label" />
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="row">
                                            <div className="col-4">
                                            <a class="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                              <div className="p-2 ms-3">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/pharmacy.png"
                                                  className="img-fluid"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-4 text-center">
                                              <span>Medicatie</span>
                                            </div>
                                            <div className="col-4 text-end">
                                              <label className="checkbox-wrapper">
                                                <input
                                                  type="checkbox"
                                                  className="checkbox-input"
                                                />
                                                <span className="checkbox-tile">
                                                  <span className="checkbox-icon">
                                                    <Image
                                                      width={200}
                                                      height={200}
                                                      alt="aa"
                                                      src="/images/compairadd.png"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                  <span className="checkbox-label" />
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="row">
                                            <div className="col-4">
                                            <a class="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                              <div className="p-2 ms-3">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/glasses.png"
                                                  className="img-fluid glassicon"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-4 text-center">
                                              <span>Opticiën</span>
                                            </div>
                                            <div className="col-4 text-end">
                                              <label className="checkbox-wrapper">
                                                <input
                                                  type="checkbox"
                                                  className="checkbox-input"
                                                />
                                                <span className="checkbox-tile">
                                                  <span className="checkbox-icon">
                                                    <Image
                                                      width={200}
                                                      height={200}
                                                      alt="aa"
                                                      src="/images/compairadd.png"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                  <span className="checkbox-label" />
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="row">
                                            <div className="col-4">
                                            <a class="popup-info" href="javascript:void(0);"><i class="fas fa-info"></i></a>
                                              <div className="p-2 ms-3">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/sunbed.png"
                                                  className="img-fluid"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-4 text-center">
                                              <span>Buitenland</span>
                                            </div>
                                            <div className="col-4 text-end">
                                              <label className="checkbox-wrapper">
                                                <input
                                                  type="checkbox"
                                                  className="checkbox-input"
                                                />
                                                <span className="checkbox-tile">
                                                  <span className="checkbox-icon">
                                                    <Image
                                                      width={200}
                                                      height={200}
                                                      alt="aa"
                                                      src="/images/compairadd.png"
                                                      className="img-fluid"
                                                    />
                                                  </span>
                                                  <span className="checkbox-label" />
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="popupbtn">
                                        <div className="row">
                                          <div className="col-12 text-center  ">
                                            <button className="btnps">
                                              Opslaan
                                            </button>
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

                              {/* Overzicht Popup End */}

                              <div className="row mt-4">
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-lg-8 col-12">
                                      <label className="form-label labeltitle">
                                        Vrijwillige eigen risico
                                      </label>
                                    </div>
                                    <div className="col-lg-4 col-12 position-relative">
                                      <input
                                        type="number"
                                        className="form-control mb-0"
                                        id="numberInput5"
                                        min={1}
                                        max={5000}
                                        value={rangeValue}
                                        onChange={handleInputChange}
                                      />
                                      <div className="infcalcubx info-pos">
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
                                      <div className="frm-toevoe-position text-center">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#calculationModel"
                                          role="button"
                                          className="calculatorwrp"
                                        >
                                          <i className="fas fa-calculator" />
                                          <span>Hulp nodig?</span>
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
                                    max={5000}
                                    value={rangeValue}
                                    onChange={handleRangeChange}
                                  />
                                  <label
                                    htmlFor="customRange1"
                                    className="form-label"
                                  >
                                    <div className="cus-num">
                                      <span>€1</span>
                                      <span>€5000</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                        
                        <HealthInsuranceCalculationpop2/>

                      <HealthInsuranceCalculationpop1/>

                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="rangebtn">
                            <button className="seenowbtn" type="submit">
                              Bekijk jouw voordeel
                            </button>
                            {/* <a onClick={() => setExtendedForm(0)}>Uitgebreid Vergelijken</a> */}
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="javascript:void(0);"
                            className="cyberprivacylink"
                          >
                            <i className="fas fa-2x fa-shield-alt" />
                            <span>Privacy</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default HealthHomeTop;
