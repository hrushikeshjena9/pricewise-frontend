import React, { useEffect, useState } from "react";
import { PostData, axiosGet } from "../../../utils/ApiCalls";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/router";

const DoubleMeter = ({ register, errors, houseData, setValue, handleSubmit, setLoading, setCount, setFormData,
  setApiRes, setCheckedItems, showExtended2, setShowExtended2,
  checkedItems, houseType, setHouseType, no_gas, setNoGas, setMeter, meter
}) => {
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
  useEffect(() => {
    if (!gasConsumeVisible) setValue("gas_consume", "");
  }, [gasConsumeVisible]);
  const onSubmit = async (data) => {
    toast.loading("Submitting data, please wait...");
    setFormData(data);
    setLoading(true);
    localStorage.setItem("EnergyUserData", JSON.stringify(data, no_gas));
    localStorage.setItem("EnergyUserDataNoGas", JSON.stringify(no_gas));
    const dataToSend = {
      postal_code: data.postal_code,
      energy_label: data.energy_label,
      no_gas: no_gas,
      meter_type: data.meter_type,
      current_supplier: data.current_supplier,
      house_type: houseType,
      // features: data.energy_label,
      no_of_person: data.no_of_person,
      advantages: {
        gas_consume: data.gas_consume,
        normal_electric_consume: data.normal_electric_consume,
        peak_electric_consume: data.peak_electric_consume,
        feed_in_peak: data.feed_in_peak,
        feed_in_normal: data.feed_in_normal,
      },
      solar_panels: data.solar_panel,
      gas_consumption: data.gas_consumption,
      feed_in_tariff: data.feed_in_tariff,
      power_consumption: Number(data?.normal_electric_consume || 0) + Number(data?.peak_electric_consume || 0),
    };
    try {
      const res = await PostData("energy", "", dataToSend);
      setApiRes(res);
      toast.success(res.message);
      setCount(1);
    } catch (error) {
      console.log(error);
    }
    toast.dismiss();
    setLoading(false);
  };

  useEffect(() => {
    const Supplier = async () => {
      try {
        const res = await axiosGet('suppliers')
        if (res.success === true) {
          setSuppliers(res?.data?.filter(supplierData => supplierData.category == 16) || []);
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
        <div id="div2" className="form-sec">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center">
              <div className="col-lg-4 energie-left">
                <div className="col-lg-12">
                <div className="titlecybersecurity">
                     <h2> <Image width={42} height={42} src="/images/wind-turbine.png" alt="aa" />Energie</h2>
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
                              required: true,
                            })}
                          />
                          {errors.postal_code && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>This field
                              is required
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
                              required: true,
                            })}
                          />
                          {errors.house_no && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>This field
                              is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-group info-bx">
                          <input
                            type="text"
                            className={
                              errors.address
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            placeholder="Address"
                            {...register("address", {
                              required: true,
                            })}
                          />
                          {errors.address && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>This field
                              is required
                            </p>
                          )}
                          <a
                            href="#"
                            className="in-ho"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Content Goes Here"
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
                        min={0}
                        className={
                          errors.no_of_person
                            ? "form-control errorBox"
                            : "form-control"
                        }
                        placeholder={20}
                        {...register("no_of_person", {
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
                  </div>
                  {errors.no_of_person && (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation-triangle"></i>This field is
                      required
                    </p>
                  )}

                  <div className="col-lg-12">
                    <div className="form-group info-bx">
                      <div
                        className="house-type-box"
                        onClick={() => setShow(!show)}
                      >
                        {houseType ? houseType : "select house type"}
                        {show ? (
                          <i className="fas fa-chevron-up"></i>
                        ) : (
                          <i className="fas fa-chevron-down"></i>
                        )}
                      </div>
                      {show && (
                        <div className="form-radio-bx house-type-select-box">
                          {houseData && houseData.length > 0 && (
                            <>
                              {houseData.map((item, i) => (
                                <label
                                  key={i}
                                  className="img-btn"
                                  onClick={() => handleHouseType(item.name)}
                                >
                                  <input type="radio" name="country-flags" />
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
                        </div>
                      )}
                    </div>
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
                        type="text"
                        placeholder={0}
                        className="form-control"
                        {...register("solar_panel")}
                      />
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
                        <option value="">Select supplier</option>
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
                        title="Content Goes Here"
                      >
                        <i className="fas  fa-info-circle" />
                      </a>
                      {errors.current_supplier && (
                        <p className="errorMsg">
                          <i className="fas fa-exclamation-triangle"></i>This field
                          is required
                        </p>
                      )}
                    </div>
                  </div>
                  {!showExtended2 &&
                    <>
                      <div className="col-lg-12 text-center">
                        <button type='submit' className="btn-one">Bekijk jouw voordeel</button>
                      </div>
                      <a className="need-txt" onClick={() => setShowExtended2(!showExtended2)}>
                        Ik weet mijn verbruik
                      </a>
                    </>
                  }
                </div>
              </div>
              {showExtended2 &&
                <div className="col-lg-4 position-relative pt-4 energie-right">
                  <div className="row pb-3">
                  <div className="col-lg-12">
                    <div className="radio-bx">
                      <label className="radio-button-container">Enkele meter
                        <input type="radio" defaultChecked="checked" value={'Single Meter'} name="toggle" id="showDiv1"
                          onClick={() => setMeter(0)}
                          {...register('meter_type')} />
                        <span className="checkmark" />
                      </label>
                      <label className="radio-button-container">Dubbele meter
                        <input type="radio" name="toggle" id="showDiv2" value={'Double Meter'}
                          checked={meter == 1}
                          onClick={() => setMeter(1)}
                          {...register('meter_type')} />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  </div>

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
                          title="Content Goes Here"
                        >
                          <i className="fas  fa-info-circle" />
                        </a>
                      </div>
                    </div>
                    {errors.normal_electric_consume && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i>This field is
                        required
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
                          title="Content Goes Here"
                        >
                          <i className="fas  fa-info-circle" />
                        </a>
                      </div>
                    </div>
                    {errors.peak_electric_consume && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i>This field is
                        required
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
                          <i className="fas fa-exclamation-triangle"></i>This field is
                          required
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
                          title="Content Goes Here"
                        >
                          <i className="fas  fa-info-circle" />
                        </a>
                      </div>
                    </div>
                    {errors.feed_in_normal && (
                      <p className="errorMsg">
                        <i className="fas fa-exclamation-triangle"></i>This field is
                        required
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
                        <i className="fas fa-exclamation-triangle"></i>This field is
                        required
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
                              title="Content Goes Here"
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
                      onClick={() => setShowExtended2(false)}
                    >
                      Hulp nodig bij het schatten?
                    </a>
                  </div>
                  <div className="privacy-ab">
                    <a href="javascript:void(0);">
                      <i className="fas fa-2x fa-shield-alt" />
                      <span>Privacy</span>
                    </a>
                  </div>
                </div>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DoubleMeter;
