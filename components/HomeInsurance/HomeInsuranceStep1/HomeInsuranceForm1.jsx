import Image from "next/image";
import React, { useEffect, useState } from "react";
import SunAnimation from "../../common/SunAnimation";
import { useForm } from "react-hook-form";
import { PostData } from "../../../utils/ApiCalls";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { homeFormData } from "../../../store/slices/homeInsuranceSlice";
import SameHeightDiv from "../../common/SameHeightDiv";
import TooltipInitialise from "../../common/TooltipInitialise";

const HomeInsuranceForm1 = ({
  setShowStepper,
  setCount,
  authToken,
  userDetails,
  setApiRes,
  coverages,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const className = "home-insurance";
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [extendedForm, setExtendedForm] = useState(0);
  const [postCode, setPostCode] = useState();
  const [homeInsurance, setHomeInsurance] = useState([]);
  const [insurer, setInsurer] = useState([]);
  console.log(coverages, "coverages");
  const handleNextStep = () => {
    setShowStepper(true);
    setCount(1);
  };
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(1);
  const [rangeValue3, setRangeValue3] = useState(35000);
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
  const postalCode = watch("postal_code");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setPostCode(postalCode);
    }, 3000);
    return () => clearTimeout(delayDebounceFn);
  }, [postalCode]);
  useEffect(() => {
    const homeInsurance = async () => {
      try {
        const res = await PostData("home-insurance", { postal_code: postCode });
        console.log(res);
        setHomeInsurance(res?.data);
        setInsurer(res?.providers);
        // setCoverages(res?.coverages);
      } catch (error) {
        console.log(error);
      }
    };
    if (postCode) homeInsurance();
  }, [postCode]);
  const onSubmit = async (data) => {
    toast.loading("Submitting data, please wait...");
    console.log(data);
    dispatch(homeFormData(data));
    const sendData = {
      ...data,
      insured_amount: [0, rangeValue],
      theft_amount: [0, rangeValue3],
      voluntary_deductible: [0, rangeValue2],
      postal_code: "6833AM",
    };
    try {
      const res = await PostData(
        "home-insurance",
        "",
        sendData,
        `Bearer ${authToken}`
      );
      setApiRes(res);
      toast.success("Data retrieved successfully");
      setCount(1);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again");
    }
    toast.dismiss();
  };
  return (
    <>
      <SameHeightDiv dependency={coverages} />
      <div className="eventwrp position-relative">
        <SunAnimation className={className} />
        <div className="container">
          <div className="card border-0">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-center">
                  <div className="col-lg-6 eventbxleft pb-3">
                    <div className="titlecybersecurity">
                      <h2>
                        <Image
                          width={42}
                          height={42}
                          src="/images/security-2.png"
                          alt="aa"
                        />{" "}
                        Woonverzekering
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <div className="row">
                          <div className="col-md-4 col-12">
                            <input
                              type="text"
                              className={
                                errors.poatal_code
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              id="input1"
                              placeholder="Postcode"
                              {...register("postal_code", { required: true })}
                            />
                          </div>
                          <div className="col-md-4 col-12">
                            <input
                              type="text"
                              className={
                                errors.house_no
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              id="input2"
                              placeholder="Huisnummer"
                              {...register("house_no", { required: true })}
                            />
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <input
                              type="text"
                              className={
                                errors.address
                                  ? "form-control errorBox"
                                  : "form-control"
                              }
                              id="input3"
                              placeholder="Address"
                              {...register("address", { required: true })}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 ">
                            <select
                              className={
                                errors.address
                                  ? "form-select errorBox"
                                  : "form-select"
                              }
                              aria-label="Select"
                              {...register("health_insurance", {
                                required: true,
                              })}
                            >
                              <option value="">Woonverzekering </option>
                              {homeInsurance && homeInsurance.length > 0 && (
                                <>
                                  {homeInsurance?.map((item, i) => (
                                    <option value={item?.id} key={i}>
                                      {item?.title}
                                    </option>
                                  ))}
                                </>
                              )}
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6  position-relative">
                            <select
                              className={
                                errors.address
                                  ? "form-select errorBox"
                                  : "form-select"
                              }
                              aria-label="Select"
                              {...register("insure", { required: true })}
                            >
                              <option value="">Verzekeraar</option>
                              {insurer && insurer.length > 0 && (
                                <>
                                  {insurer?.map((item, i) => (
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
                                aria-label="Content Goes Here"
                                data-bs-original-title="Content Goes Here"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <table className="table table-borderless top-gender-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <label>Geslacht</label>
                                  </td>
                                  <td>
                                    <div className="radio-icon top-man">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="man"
                                        name="geslacht"
                                        value={"male"}
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
                                    <div className="radio-icon top-vrouw-newv">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id="vrouw"
                                        name="geslacht"
                                        {...register("gender", {
                                          required: true,
                                        })}
                                        value={"female"}
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
                        <div className="row">
                          <div className="col-12">
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
                                <div className="infcalcubx extra-pos">
                                  <a
                                    href="javascript:void(0);"
                                    className="extra"
                                  >
                                    <i className="fas fa-2x fa-user-plus" />
                                    <span>Extra?</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 position-relative">
                                <label className="form-label labeltitle">
                                  Woning?
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
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row radiobx justify-content-center py-3">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input
                              type="radio"
                              name="test"
                              id="cbd2"
                              value={"rented"}
                              {...register("home_type")}
                            />
                            <label htmlFor="cbd2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/protection.png"
                                className="img-fluid"
                              />
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gehuurd"
                                className="info-in-risk hide-info-desktop"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <span className="checkbox-label">Gehuurd</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gehuurd</p>
                              </div>
                            </label>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <input
                              type="radio"
                              name="test"
                              id="cbf2"
                              value={"purchased"}
                              {...register("home_type")}
                            />
                            <label htmlFor="cbf2" className="tooltip-container">
                              <Image
                                width={200}
                                height={200}
                                alt="aa"
                                src="/images/protection.png"
                                className="img-fluid"
                              />
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Gekocht"
                                className="info-in-risk hide-info-desktop"
                              >
                                <i className="fas fa-2x fa-info-circle" />
                              </a>
                              <span className="checkbox-label">Gekocht</span>
                              <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Gekocht</p>
                              </div>
                            </label>
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
                                    onClick={() => setShow(!show)}
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
                        {show && (
                          <>
                            <div className="row">
                              <div className="col-12">
                                <table className="table table-borderless text-nowrap bottom-gender-table">
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
                                        <div className="radio-icon position-kind rd-df-icon text-nowrap">
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
                              <div className="col-12">
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
                                        aria-label="Content Goes Here"
                                        data-bs-original-title="Content Goes Here"
                                      >
                                        <i className="fas fa-2x fa-info-circle" />
                                      </a>
                                    </div>
                                  </div>
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
                                  <a
                                    href="javascript:void(0);"
                                    className="extra"
                                  >
                                    <i className="fas fa-2x fa-user-plus" />
                                    <span>Extra?</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {extendedForm == 0 && (
                          <div className="row mt-4">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button
                                  className="seenowbtn"
                                  onClick={() => setExtendedForm(1)}
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

                        {/* Model Start */}
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
                                      Stap voor stap meer vergelijken
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
                                            <h2
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
                                                  src="/images/armchair.png"
                                                />
                                                <span className="d-block">
                                                  Inboedelverzekering
                                                </span>
                                              </button>
                                            </h2>
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
                                                  src="/images/shield.png"
                                                />
                                                <span className="d-block">
                                                  Opstalverzekering
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
                                                  src="/images/family-3.png"
                                                />
                                                <span className="d-block">
                                                  Aansprakelijkheid
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

                        {/* Model End */}
                      </div>
                    </div>
                  </div>
                  {extendedForm == 1 && (
                    <div className="col-lg-6 eventbxright pb-3">
                      <TooltipInitialise/>
                      <div className="row">
                        <div className="col-8">
                          <div className="row">
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
                                  aria-label="Content Goes Here"
                                  data-bs-original-title="Content Goes Here"
                                >
                                  <i className="fas fa-2x fa-info-circle" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col radiobx">
                              <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-4">
                                  <input
                                    type="radio"
                                    name="test2"
                                    id="cb111"
                                    value={"basis"}
                                    {...register("type_of_coverages")}
                                  />
                                  <label htmlFor="cb111" className="tooltip-container" >
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/homeicon.png"
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

                                    <span className="checkbox-label">
                                      Basis
                                    </span>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text">Basis</p>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <input
                                    type="radio"
                                    name="test2"
                                    id="cb22"
                                    {...register("type_of_coverages")}
                                    value={"allrisk"}
                                  />
                                  <label htmlFor="cb22" className="tooltip-container">
                                    <Image
                                      width={200}
                                      height={200}
                                      alt="aa"
                                      src="/images/homeicon.png"
                                      className="img-fluid"
                                    />
                                    <span className="checkbox-label">
                                      Allrisk
                                    </span>
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Allrisk"
                                      className="info-in-risk hide-info-desktop"
                                    >
                                      <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                    <div className="d-flex justify-content-center">
                                      <p className="tooltip-text"> Allrisk</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                              <label className="form-label labeltitle">
                                Verzekerd bedrag
                              </label>
                            </div>
                            <div className="col-lg-4 position-relative">
                              <input
                                type="number"
                                className="form-control mb-0"
                                id="numberInput5"
                                min={1}
                                max={2000}
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
                                  data-bs-target="#home-insuranc-calculater"
                                  href="javascript:void(0);"
                                  role="button"
                                  className="calculatorwrp"
                                >
                                  <i className="fas fa-calculator" />
                                  <span>Hulp nodig?</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={1}
                                max={2000}
                                value={rangeValue}
                                onChange={handleRangeChange}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span id="rangeValue5">€ 1</span>
                                  <span>€2000</span>
                                </div>
                              </label>
                            </div>
                          </div>

                          {/* Model Start */}
                          <div className="row">
                            <div className="col">
                              {/* Modal */}
                              <div
                                className="modal fade"
                                id="home-insuranc-calculater"
                                tabIndex={-1}
                                aria-labelledby="home-insuranc-calculaterLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-lg">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <div className="row w-100 justify-content-center align-items-center">
                                        <div className="col text-center">
                                          <h5
                                            className="modal-title"
                                            id="exampleModalLabel"
                                          >
                                            Stap voor stap meer vergelijken
                                          </h5>
                                        </div>
                                        <div className="col-auto">
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-body addmorepopup">
                                      <label className="form-control text-center mb-2">
                                        Type woning
                                      </label>
                                      <div className="row">
                                        <div className="col radiobx">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bb111"
                                              />
                                              <label htmlFor="bb111">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/studio.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Studio
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bb211"
                                              />
                                              <label htmlFor="bb211">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/appartment.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Appartement
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="cb22d"
                                              />
                                              <label htmlFor="cb22d">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/house-5.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Rijtjeshuis
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="cb22c"
                                              />
                                              <label htmlFor="cb22c">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/house-9.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Hoekhuis
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col radiobx">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bd111"
                                              />
                                              <label htmlFor="bd111">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/house-5.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  2 onder 1 kap
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bc211"
                                              />
                                              <label htmlFor="bc211">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/house-13.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Herenhuis
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bb22d"
                                              />
                                              <label htmlFor="bb22d">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/villa.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Villa
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="cb22dc"
                                              />
                                              <label htmlFor="cb22dc">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/house-10.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Woonboederij
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6 radiobx">
                                          <label className="form-control text-center mb-2 popup-pading-homeinsurance">
                                            Waaruit bestaat het dak?
                                          </label>
                                          <div className="row justify-content-center">
                                            <div className="col-lg-4  col-md-4 ">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bb111d"
                                              />
                                              <label htmlFor="bb111d">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/roof.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Dakpannen
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-4  col-md-4 ">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bb211f"
                                              />
                                              <label htmlFor="bb211f">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/brickwall.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Leisteen
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-4  col-md-4 ">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="cb22dh"
                                              />
                                              <label htmlFor="cb22dh">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/signpost.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Anders
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 radiobx">
                                          <label className="form-control text-center mb-2">
                                            Uit welke materiaal bestaat jou
                                            buitenmuren?
                                          </label>
                                          <div className="row justify-content-center">
                                            <div className="col-lg-4  col-md-4 ">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bbc111"
                                              />
                                              <label htmlFor="bbc111">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/parquet.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Hout
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-4  col-md-4 ">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="bb211a"
                                              />
                                              <label htmlFor="bb211a">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/brick-wall.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Beton
                                                </span>
                                              </label>
                                            </div>
                                            <div className="col-lg-4  col-md-4 ">
                                              <input
                                                type="radio"
                                                name="test"
                                                id="cb22ddc"
                                              />
                                              <label htmlFor="cb22ddc">
                                                <Image
                                                  width={200}
                                                  height={200}
                                                  alt="aa"
                                                  src="/images/signpost.png"
                                                  className="img-fluid"
                                                />
                                                <span className="checkbox-label">
                                                  Anders
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <div className="row">
                                              <div className="col-lg-8 col-md-4 col-sm-12">
                                                <label className="form-label labeltitle">
                                                  Inhoud woning
                                                </label>
                                              </div>
                                              <div className="col-4 position-relative">
                                                <input
                                                  type="number"
                                                  className="form-control mb-0"
                                                  id="numberInputr"
                                                  min={1}
                                                  max={2000}
                                                  value={rangeValue}
                                                  onChange={handleInputChange}
                                                />
                                              </div>
                                              <div className="col-12">
                                                <input
                                                  type="range"
                                                  className="form-range mb-0"
                                                  id="customRanger"
                                                  min={1}
                                                  max={2000}
                                                  value={rangeValue}
                                                  onChange={handleRangeChange}
                                                />
                                                <label
                                                  htmlFor="customRanger"
                                                  className="form-label"
                                                >
                                                  <div className="cus-num">
                                                    <span id="rangeValue5">
                                                      0m<sup>3</sup>
                                                    </span>
                                                    <span>
                                                      1000m<sup>3</sup>
                                                    </span>
                                                  </div>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <div className="row">
                                              <div className="col-lg-8 col-md-4 col-sm-12">
                                                <label className="form-label labeltitle">
                                                  Inhoud woning
                                                </label>
                                              </div>
                                              <div className="col-4 position-relative">
                                                <input
                                                  type="number"
                                                  className="form-control mb-0"
                                                  id="numberInputr"
                                                  min={1}
                                                  max={2000}
                                                  value={rangeValue}
                                                  onChange={handleInputChange}
                                                />
                                              </div>
                                              <div className="col-12">
                                                <input
                                                  type="range"
                                                  className="form-range mb-0"
                                                  id="customRanger"
                                                  min={1}
                                                  max={2000}
                                                  value={rangeValue}
                                                  onChange={handleRangeChange}
                                                />
                                                <label
                                                  htmlFor="customRanger"
                                                  className="form-label"
                                                >
                                                  <div className="cus-num">
                                                    <span id="rangeValue5">
                                                      €0
                                                    </span>
                                                    <span>10000</span>
                                                  </div>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      <div className="popupbtn">
                                        <p>
                                          Totaal verzekerd bedrag:{" "}
                                          <span>€ 104.576</span>
                                        </p>
                                        <div className="row">
                                          <div className="col-12 text-center">
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

                          {/* Model End */}

                          <div className="row">
                            <div className="col-lg-8  col-sm-12">
                              <label className="form-label labeltitle">
                                Eigen risico
                              </label>
                            </div>
                            <div className="col-lg-4 col-sm-12 position-relative">
                              <input
                                type="number"
                                className="form-control mb-0"
                                id="numberInput5"
                                min={1}
                                max={300}
                                value={rangeValue2}
                                onChange={handleInputChange2}
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
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={0}
                                max={300}
                                value={rangeValue2}
                                onChange={handleRangeChange2}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span id="rangeValue5">€ 0</span>
                                  <span>€300</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-8 col-12">
                              <label className="form-label labeltitle">
                                Diefstal
                              </label>
                            </div>
                            <div className="col-lg-4 col-12 position-relative">
                              <input
                                type="number"
                                className="form-control mb-0"
                                id="numberInput5"
                                min={35000}
                                max={250000}
                                value={rangeValue3}
                                onChange={handleInputChange3}
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
                            </div>
                            <div className="col-12">
                              <input
                                type="range"
                                className="form-range mb-0"
                                id="customRange5"
                                min={35000}
                                max={250000}
                                value={rangeValue3}
                                onChange={handleRangeChange3}
                              />
                              <label
                                htmlFor="customRange5"
                                className="form-label"
                              >
                                <div className="cus-num">
                                  <span id="rangeValue5">€ 35.000</span>
                                  <span>€250.000</span>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 position-relative">
                              <label className="form-label labeltitle">
                                Aanbevolen verzekeringen
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
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#moreviewmodel"
                                >
                                  <Image
                                    width={60}
                                    height={55}
                                    alt="aa"
                                    src="/images/viewpop.png"
                                  />
                                  <span>Overzicht?</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="row radiobx px-2">
                                {coverages && coverages.length > 0 && (
                                  <>
                                    {coverages?.map((item, i) => (
                                      <div
                                        className="col-lg-4 col-md-4 col-sm-6  p-0"
                                        key={i}
                                      >
                                        <input
                                          type="checkbox"
                                          name="test"
                                          id={`cbdnbo${item?.id}`}
                                          value={item?.id}
                                          {...register("coverages")}
                                        />
                                        <label htmlFor={`cbdnbo${item?.id}`} className="tooltip-container">
                                          <Image
                                            width={200}
                                            height={200}
                                            alt="aa"
                                            src={item?.image}
                                            className="img-fluid"
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
                                          <span className="checkbox-label equal-height">
                                            {item?.name}
                                          </span>
                                          <div className="d-flex justify-content-center">
                                            <p className="tooltip-text">{item?.name}</p>
                                          </div>
                                        </label>
                                      </div>
                                    ))}
                                  </>
                                )}
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
                                    Your Content Goes Here.
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Model End */}
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="rangebtn">
                                <button className="seenowbtn" type="submit">
                                  Bekijk jouw voordeel
                                </button>
                                {/* <a onClick={() => setExtendedForm(0)}>Uitgebreid Vergelijken</a> */}
                              </div>
                            </div>
                            <div className="col-lg-5">
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
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInsuranceForm1;
