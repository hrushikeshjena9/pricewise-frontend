import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "../../HealthInsurance/HealthInsuranceStep3/PersonalInfo";
import { useForm } from "react-hook-form";
import Verification from "../../HealthInsurance/HealthInsuranceStep3/Verification";
import { PostData } from "../../../utils/ApiCalls";
import { toast } from "sonner";

const HomeInsuranceStep3left = ({ userDetails, authToken }) => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const [showInputRow, setShowInputRow] = useState(false);
  const singleData = useSelector((state) => state.homeInsurance?.homeInsuRanceSingleProd[0])
  console.log("home-data", singleData);
  const formData2 = useSelector((state) => state?.homeInsurance?.homeInsurance[0]);
  const handleRadioChange = (event) => {
    setShowInputRow(event.target.value === "yes");
  };
  const onSubmit = async (data) => {
    toast.loading("Submitting data, please wait...");
    const sendData = {
      user_id: userDetails?.id,
      user_type: "personal",
      service_type: 'App\\Models\\InsuranceProduct',
      category: singleData?.category,
      sub_category: singleData?.sub_category,
      service_id: singleData?.id,
      total_price: singleData?.price,
      shipping_address: formData2?.address,
      postal_code: formData2?.post_code,
      billing_address: formData2?.address,
      discounted_price: 0,
      request_status: singleData?.status,
      contactDetails: {
        first_name: data.first_name,
        last_name: data.last_name,
        landline_number: data.landline_number,
        email: data.email,
        age: data.age,
        account_number: data.account_number,
        sex: data.sex,
        mobile_number: data.mobile_number,
        initials: data.initials,
        prefix: data.postcode,
      },
      insuranceHistory: {
        startDate: {
          living_start: data.living_start,
          living_description: data.living_description
        },
        homeFeature: {
          home_feature_valid: data.home_feature_valid,
          home_feature_description: data.home_feature_description,
        },
        gardenGarage: {
          garden_garage_valid: data.garden_garage_valid,
          garden_garage_description: data.garden_garage_description,
        },
        fireHazard: {
          fire_hazard_valid: data.fire_hazard_valid,
          fire_hazard_description: data.fire_hazard_description,
        },
        homeRenovate: {
          renovate_home: data.renovate_home
        }
      },
      additionalQuestion: {
        injuryDeal: {
          deal_with: data.deal_with,
        },
        injuryDamage: {
          injury_validation: data.injury_validation,
          damage_amount: data.damage_amount,
          injury_damage_description: data.injury_damage_description
        },
        previousInsurance: {
          previous_insurance_validation: data.previous_insurance_validation,
          previous_insurance_description: data.previous_insurance_description
        },
        punishmentOrder: {
          punishment_validation: data.punishment_validation,
          punishment_description: data.punishment_description
        }
      },
      delivery: {
        differ_postal_addrr: data.differ_postal_addrr,
        starting_date: data.starting_date
      },
      verification: {
        payment_method: data.payment_method,
        verification: data.verification,
        get_notified: data.get_notified,
      }
    }
    try {
      const res = await PostData('save-user-request', '', sendData, `Bearer ${authToken}`)
      console.log(res);
      toast.success(res?.message);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    toast.dismiss();
  }
  return (
    <>
      <div className="col-lg-8">
        <div className="compare-toppart mt-2">
          <h2>Stel jouw deal vandaag veilig</h2>
          <div className="secure-wrp">
            <Image width={200} height={200} alt="aa" src="/images/secure.png" className="img-fluid secureimg" />
          </div>
          <p>
            Vul de resterende gegevens in die de aanbieder nodig heeft, zodat
            wij alles vlekkenloos kunnen regelen en jij snel hier van kan
            profiteren.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="profile-details">
            <PersonalInfo
              register={register}
              errors={errors} />
            <div className="card mt-4">
              <div className="card-header">
                <h4 className="mb-0">
                  <i className="fas fa-home" /> Levering
                </h4>
              </div>
              <div className="card-body">
                <form>
                  {/* First Row */}
                  <div className="row mb-3">
                    <div className="col-lg-6 align-items-center">
                      <label className="col-auto col-form-label mb-0 me-3">
                        Wijkt jou postadres af?
                      </label>
                      <div className="d-flex">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="postalAddressDifferent"
                            id="yes"
                            value="yes"
                            onChange={handleRadioChange}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="postalAddressDifferent"
                            id="no"
                            value="no"
                            onChange={handleRadioChange}
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="partnerBirthDate"
                          className="me-3 col-form-label"
                        >
                          Voorkeur startdatum?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="partnerBirthDate"
                          placeholder="DD-MM-JJJJ"
                          {...register('starting_date')}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Second Row for Additional Input Box */}
                  {showInputRow && (
                    <div className="row mb-3" id="additionalInputRow">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="additionalInput"
                          name="additionalInput"
                          placeholder="Bijv 1200AA 112A"
                          {...register('differ_postal_addrr')}
                        />
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                <h4 className="mb-0">
                  <i className="fas fa-info-circle"></i> Aanvullende vragen
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-8">
                    <label>
                      Ga jij zelf in de woning wonen per <b>dd-mm-jjij?</b>
                      <a href="javascript:void(0);" className="text-success ms-1">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      {errors.living_start &&
                        <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                      }

                    </label>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="living_start"
                            id="yes"
                            value="yes"
                            {...register('living_start', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="living_start"
                            id="no"
                            value="no"
                            {...register('living_start')}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                      <div className="col-12 my-2">
                        <textarea className="form-control"
                          {...register('living_description')}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <label>
                      Is jouw woning wind, waterdicht en voorzien van ramen en
                      sloten?
                      <a href="javascript:void(0);" className="text-success ms-1">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      {errors.home_feature_valid &&
                        <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                      }
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('home_feature_valid', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('home_feature_valid')}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                      <div className="col-12 my-2">
                        <textarea className="form-control"
                          {...register('home_feature_description')}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <label>
                      Is in jouw woning, schuur tuinhuis, of garage asbest
                      verwerkt?
                      <a href="javascript:void(0);" className="text-success ms-1">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      {errors.garden_garage_valid &&
                        <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                      }
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('garden_garage_valid', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('garden_garage_valid')}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                      <div className="col-12 my-2">
                        <textarea className="form-control"
                          {...register('garden_garage_description')}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <label>
                      Is er dichtbij jouw woning een brandgevaarlijk bedrijf
                      gevestigd zoals een restaurant, snackbar of benzinepomp?
                      <a href="javascript:void(0);" className="text-success ms-1">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      {errors.fire_hazard_valid &&
                        <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                      }
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('fire_hazard_valid', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('fire_hazard_valid')}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                      <p className="mb-0 mt-2">
                        Wat is de afstand van dit bedrif naar jouw woning?
                      </p>
                      <div className="col-12 mt-3">
                        <select className="form-select" id="keuze"
                          {...register('office_distance')}>
                          <option value="nederland" selected>
                            Maan een keuze
                          </option>
                          {/* Add more options here */}
                        </select>
                        <textarea className="form-control"
                          {...register('fire_hazard_description')}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <label>
                      Ben jij van plan jouw woning ingrijperid te verbouwen?
                      <a href="javascript:void(0);" className="text-success ms-1">
                        <i className="fas fa-info-circle"></i>
                      </a>
                      {errors.renovate_home &&
                        <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                      }
                    </label>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('renovate_home', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('renovate_home')}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="mt-4">Verzekeringsverleden</h4>
                </div>
                <p>
                  <span className="text-danger">
                    Let op! Deze vragen gelden voor jou, jouw gezinsleden of
                    andere personen die onder deze verzekering vallen,
                  </span>
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <p>Heb jij of een belanghebbende ooit te maken gehad met:</p>
                    {errors.deal_with &&
                      <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                    }
                    <ul className="list-style-cr">
                      <li className="fw-medium"> Een schademelding</li>
                      <li className="fw-medium">
                        Weigering bij een aanvraag of opzegging van de
                        Verzekeraar
                      </li>
                      <li className="fw-medium">
                        Veroordeling of strafbeschikking
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('deal_with', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('deal_with', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6">
                    <p className="fw-bold mb-0">Schade*</p>
                    <p>
                      Zijn er in de afgelopen 5 jaar schaden veroorzaak of geleden
                      door gebeurtenissen die gedekt zijn op verzekering(en) die
                      aanvraagt?
                    </p>
                    {errors.injury_validation &&
                      <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                    }
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('injury_validation', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('injury_validation', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <p className="fw-bold">Verzekering*</p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <label className="fw-bold">Woonverzekering</label>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <p className="fw-bold">Schadebedrag per gebeurtenis*</p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <input className="form-control mb-2" type="text"
                      {...register('damage_amount')} />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <p className="fw-bold">Schade oorzaak*</p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <textarea className="form-control"
                      {...register('injury_damage_description')}></textarea>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <p className="fw-bold">Voorgaande verzekeringen*</p>
                    <p>
                      Zijn er in de afgelopen 5 jaar door een
                      verzekeringsmaatschappij enige vorm van verzekering
                      geweigerd of opgezegd, of zijn er beperkende voorwaarden of
                      verhoogde premies aangekondigd, dan wel verplicht gesteld
                      die specifiek en uitsluitend voor dat risico en voor de
                      verzekering golden?
                    </p>
                    {errors.previous_insurance_validation &&
                      <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                    }
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('previous_insurance_validation', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('previous_insurance_description', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-2">
                        <textarea className="form-control" rows={5}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fw-bold">Veroordeling of strafbeschikking</p>
                    <p>
                      Is er in de afgelopen & jaar sprake geweest van een
                      veroordeling (ongeacht de opgelegde straf) of een
                      strafbeschikking of een transactie (beide voor een taakstraf
                      van meer dan 20 uur), of aanraking met justitie ter
                      uitvoering van een opgelegde (straf)maatregel in verband met
                      bovenstaande, of een een uitgebrachle dagvaaring in een
                      lopende procedure, alles ter zake van een misdrijf?
                    </p>
                    {errors.punishment_validation &&
                      <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>
                    }
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="yes"
                            value="yes"
                            {...register('punishment_validation', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Ja
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="abroadIncome"
                            id="no"
                            value="no"
                            {...register('punishment_description', {
                              required: true
                            })}
                          />
                          <label className="form-check-label" htmlFor="no">
                            Nee
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-2">
                        <textarea className="form-control"  rows={6}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Verification
              register={register}
              errors={errors}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeInsuranceStep3left;
