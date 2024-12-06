import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "react-spring";
import { toast } from "sonner";
import { PostData } from "../../utils/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { internetFormData } from "../../store/slices/internetTvSlice";
import SunAnimation from "../common/SunAnimation";
import SameHeightDiv from "../common/SameHeightDiv";

const InternetForm1 = ({
  setShowStepper,
  showStepper,
  setCount,
  houseData,
  setApiRes,
  setApiSendData,
  setLoading,
  data3,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const className = "internet-tv";
  const formData = useSelector((state) => state?.internetTv?.internetTv[0]);

  console.log("formData", formData);
  const dispatch = useDispatch();
  const [showExtendedForm, setShowExtendedForm] = useState(0);
  const [addClass, setAddClass] = useState("");
  const [houseType, setHouseType] = useState(null);
  const [duration, setDuration] = useState(1);
  const [show, setShow] = useState(false);

  const dropdownAnimation = useSpring({
    maxHeight: show ? "330px" : "0px",
    opacity: show ? 4 : 0,
  });
  const [authToken, setAuthToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token ? token : "");
  }, []);
  const onSubmit = async (data) => {
    toast.loading("Submitting data, please wait...");
    console.log(data);
    dispatch(internetFormData(data));

    const sendData = {
      postal_code: [data.post_code],
      current_supplier: data.current_supplier,
      house_no: data.huis_number,
      address: data.address,
      discount: data.discount,
      house_type: houseType.id,
      no_of_person: data.no_of_person,
      no_of_receivers: data.no_of_receivers,
      tv_packages: data.tv_packages,
      network_type: data.network_type,
      television_extensions: data.television_extensions,
      contract_length: duration,
      features: [],
    };
    setApiSendData(sendData);
    setLoading(true);
    try {
      const res = await PostData(
        "internet-tv",
        "",
        sendData,
        `Bearer ${authToken}`
      );
      setApiRes(res ? res : "");
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    setShowStepper(true);
    setCount(1);
    setLoading(false);
    toast.dismiss();
  };
  const handleHouseType = (house) => {
    setHouseType(house);
    setShow(false);
  };

  const handleRangeChange = (e) => {
    setDuration(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (value < 1) {
      value = 1;
    } else if (value > 2) {
      value = 2;
    }
    setDuration(value);
  };
  return (
    <div>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="eventwrp position-relative">
            <SunAnimation className={className} />
            <SameHeightDiv/>
            <div className="container">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 eventbxleft pb-4">
                      <div className="titlecybersecurity">
                        <h2>
                          <Image
                            width={200}
                            height={200}
                            alt="aa"
                            src="/images/internettv.png"
                            className="img-fluid"
                          />
                          Internet Tv Telefonie
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-10 col-md-10 col-10">
                          <div className="row">
                            <div className="col-lg-4 col-md-4">
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
                              {errors.post_code && (
                                <p className="errorMsg">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  Required
                                </p>
                              )}
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <input
                                type="text"
                                className={
                                  errors.huis_number
                                    ? "form-control errorBox"
                                    : "form-control"
                                }
                                id="input2"
                                placeholder="Huisnummer"
                                {...register("huis_number", {
                                  required: true,
                                })}
                              />
                              {errors.huis_number && (
                                <p className="errorMsg">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  Required
                                </p>
                              )}
                            </div>
                            <div className="col-lg-4 col-md-4">
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
                              {errors.address && (
                                <p className="errorMsg">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  Required
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <label className="form-label labeltitle">
                                Aantal personen
                              </label>
                            </div>
                            <div className="col-lg-6 col-md-6 position-relative">
                              <input
                                type="number"
                                className={
                                  errors.no_of_person
                                    ? "form-control mb-0 errorBox"
                                    : "form-control mb-0"
                                }
                                id="numberInput5"
                                min={1}
                                {...register("no_of_person", {
                                  required: true,
                                })}
                              />
                              {errors.no_of_person && (
                                <p className="errorMsg">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  Required
                                </p>
                              )}
                              <div className="infbx only-info-absolute infbx2">
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
                          <div className="col-lg-12 position-relative">
                            <div className="form-group info-bx mt-3">
                              <div
                                className="house-type-box"
                                onClick={() => setShow(!show)}
                              >
                                {houseType ? houseType.name : "select house type"}
                                {show ? (
                                  <i className="fas fa-chevron-up"></i>
                                ) : (
                                  <i className="fas fa-chevron-down"></i>
                                )}
                              </div>
                              {show && (
                                <animated.div
                                  style={dropdownAnimation}
                                  className="form-radio-bx house-type-select-box"
                                >
                                  {houseData && houseData.length > 0 && (
                                    <>
                                      {houseData.map((item, i) => (
                                        <label
                                          key={i}
                                          className="img-btn"
                                          onClick={() =>
                                            handleHouseType(item)
                                          }
                                        >
                                          <input
                                            type="radio"
                                            name="country-flags"
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
                            <div className="infbx only-info-house-type">
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

                        
                          <div className="row radiobx">
                            {houseData && houseData.length > 0 && (
                              <>
                                {houseData?.slice(0, 8).map((item, i) => (
                                  <div key={i} className="col-sm-3 col-6">
                                  <label key={i}  className={`img-btn tooltip-container recom-bx ${ houseType?.name === item.name ? "type-active" : "" }`} onClick={() => handleHouseType(item)}>
                                    <input type="radio" name="country-flags" />
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="aa"
                                        src={item.image}
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
                                      <span className="equal-height">{item?.name}</span>
                                      <div className="d-flex justify-content-center">
                                        <p className="tooltip-text">{item?.name}</p>
                                      </div>
                                    </label>
                                  </div>
                                ))}
                              </>
                            )}
                          </div>

                          <div className="row mt-4">
                            <div className="col-lg-12 position-relative">
                              <select
                                className={
                                  errors.discount
                                    ? "form-select errorBox"
                                    : "form-select"
                                }
                                aria-label="Select"
                                {...register("discount")}
                              >
                                <option value="">Koppelkorting</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </select>
                              {errors.discount && (
                                <p className="errorMsg">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  Required
                                </p>
                              )}
                              <div className="infbx only-info-absolute infbx2">
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
                              <select
                                className={
                                  errors.current_supplier
                                    ? "form-select errorBox"
                                    : "form-select"
                                }
                                aria-label="Select"
                                {...register("current_supplier")}
                              >
                                <option value="">Huidige provider</option>
                                {data3.providers.map((p, i) => (
                                  <option key={i} value={p.id}>
                                    {p?.name}
                                  </option>
                                ))}
                              </select>
                              {errors.current_supplier && (
                                <p className="errorMsg">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  Required
                                </p>
                              )}
                            </div>
                          </div>
                          {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}
                          {showExtendedForm == 0 && (
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="rangebtn">
                                  <button className="seenowbtn" type="submit">
                                    Bekijk jouw voordeel
                                  </button>
                                  <a
                                    href="javascript:void(0);"
                                    onClick={() => setShowExtendedForm(1)}
                                  >
                                    Ik weet mijn verbruik
                                  </a>
                                </div>
                                <a
                                  href="javascript:void(0);"
                                  className="cyberprivacylink"
                                >
                                  <i className="fas fa-2x fa-shield-alt" />
                                  <span>Privacy</span>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* ------extended form------- */}
                    {showExtendedForm == 1 && (
                      <div className="col-lg-6 eventbxright">
                        <div className="row">
                          <div className="col-lg-8 col-md-10 col-10">
                            <div className="row">
                              <div className="col-12 position-relative">
                                <label className="form-label labeltitle">
                                  <i className="fas fa-globe" /> Internet
                                </label>
                                <div className="infcalcubx  only-info-absolute">
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
                              <div className="col-12 pb-2">
                                <table className="table">
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-inline p-0">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="internetType"
                                          id="internetTypeGlasvezel"
                                          value={"Optical Fiber"}
                                          {...register("network_type")}
                                        />
                                        <label
                                          className="form-check-label ps-2 pt-1"
                                          htmlFor="internetTypeGlasvezel"
                                        >
                                          Glasvezel
                                        </label>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="form-check form-check-inline p-0">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="internetType"
                                          id="internetTypeKabel"
                                          value={"Cabel"}
                                          {...register("network_type")}
                                        />
                                        <label
                                          className="form-check-label ps-2 pt-1"
                                          htmlFor="internetTypeKabel"
                                        >
                                          Kabel
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="form-check form-check-inline p-0">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="internetType"
                                          id="internetTypeADSLVDSL"
                                          value={"ADSL/VDSL"}
                                          {...register("network_type")}
                                        />
                                        <label
                                          className="form-check-label ps-2 pt-1"
                                          htmlFor="internetTypeADSLVDSL"
                                        >
                                          ADSL/VDSL
                                        </label>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="form-check form-check-inline p-0">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="internetType"
                                          id="internetTypeWIFIBooster"
                                          value={"WiFI Booster"}
                                          {...register("network_type")}
                                        />
                                        <label
                                          className="form-check-label ps-2 pt-1"
                                          htmlFor="internetTypeWIFIBooster"
                                        >
                                          WIFI Booster
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              <div className="col-12 pb-2"></div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label className="form-label labeltitle">
                                  <i className="fas fa-tv"></i> Televisie
                                </label>
                              </div>
                              <div className="col-lg-6 position-relative">
                                <input
                                  type="number"
                                  className="form-control mb-0"
                                  id="numberInput5"
                                  min={1}
                                  {...register("no_of_receivers")}
                                />
                                <div className="infcalcubx only-infoNnvt-absolute">
                                  <ul>
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
                                    <li>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          name="options"
                                          id="option1"
                                          defaultValue="option1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="option1"
                                        >
                                          n.v.t
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-12">
                                <table className="table table-sm mt-3">
                                  <tr>
                                    {data3.packages.map((p, i) => (
                                      <td key={i}>
                                        <div className="form-check form-check-inline p-0">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="televisionType"
                                            id={p.id}
                                            value={p.id}
                                            {...register("tv_packages")}
                                          />
                                          <label
                                            className="form-check-label ps-2 pt-1"
                                            htmlFor="sport"
                                          >
                                            {p.package_name}
                                          </label>
                                        </div>
                                      </td>
                                    ))}                                    
                                  </tr>                                 
                                </table>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6">
                                <label className="form-label labeltitle">
                                  <i className="fas  fa-phone-alt"></i> Vaste
                                  telefonie
                                </label>
                              </div>
                              <div className="col-lg-6 position-relative">
                                <input
                                  type="number"
                                  className="form-control mb-0"
                                  id="numberInput5"
                                  min={1}
                                  {...register("telephone_extensions")}
                                />
                                <div className="infcalcubx only-infoNnvt-absolute">
                                  <ul>
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
                                    <li>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          name="options"
                                          id="option1"
                                          defaultValue="option1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="option1"
                                        >
                                          n.v.t
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-6">
                                <label className="form-label labeltitle">
                                  Budget
                                </label>
                              </div>
                              <div className="col-6">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="numberInput1"
                                  min={1}
                                  max={2}
                                  value={duration}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="col-12">
                                <input
                                  type="range"
                                  className="form-range"
                                  id="customRange1"
                                  min={1}
                                  max={200}
                                  value={duration}
                                  onChange={handleRangeChange}
                                />
                                <label
                                  htmlFor="customRange1"
                                  className="form-label"
                                >
                                  <div className="cus-num">
                                    <span>€{duration}</span>
                                    <span>€200</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="rangebtn">
                                  <button className="seenowbtn" type="submit">
                                    Bekijk jouw voordeel
                                  </button>
                                  <a
                                    className="mb-4"
                                    onClick={() => setShowExtendedForm(0)}
                                  >
                                    Hulp nodig bij het schatten?
                                  </a>
                                </div>
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
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default InternetForm1;
