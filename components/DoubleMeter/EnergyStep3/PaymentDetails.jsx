import React, { useEffect, useState } from 'react'
import { PostData } from '../../../utils/ApiCalls'
import Image from "next/image";

const PaymentDetails = ({ register, errors, setValue, handleSubmit }) => {
    const [singleProdDetails, setSingleProdDetails] = useState()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('SingleItem'))
        setSingleProdDetails(data ? data : null)
    }, [])
    console.log('signle item', singleProdDetails);
    const onSubmit = async (data) => {
        // const sendData = {
        //     user_id: 1,
        //     postal_code: '6837AM',
        //     user_type: "personal",
        //     category: 2,
        //     sub_category: null,
        //     service_id: 5,
        //     service_type: "App\\Models\\EnergyProduct",
        //     combos: [],
        //     provider_id: 16,
        //     advantages: { "gas_consume": 200, "gas_price": 100, "delivery_cost_gas": 90, "delivery_cost_electric": 90, "normal_electric_price": 0.30071, "peak_electric_price": 0.27001, "normal_electric_consume": 500, "peak_electric_consume": 500, "feed_in_peak": 700, "feed_in_normal": 800, "feed_in_peak_price": 0.13000, "feed_in_normal_price": 0.13000, "network_cost_gas": 175.27000, "network_cost_electric": 400.89999, "no_of_person": 5, "government_levies_gas": 141.09, "government_levies_electric": 141.09, "reduction_of_energy_tax": 631.39 },
        //     shipping_address: [],
        //     billing_address: [],
        //     total_price: 5.098,
        //     discounted_price: 3.456,
        //     discount_prct: 15,
        //     commission_prct: 10,
        //     commission_amt: 0.523,
        //     request_status: 'Under Process',
        //     no_gas: null,
        //     solar_panels: 5,
        //     cashback: 110
        // }
        // console.log(data);
        // try {
        //     const res = PostData('save-user-request', { ...sendData })
        //     console.log(res);
        // } catch (error) {
        //     console.log(error);
        // }
    }
    return (
        <>

            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i className="fas fa-user-check" />
                        Verificatie
                    </h4>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">
                            Verfieer hier jouw bank gegevens en voorkom samen fraude.
                            <span class="text-danger">*</span>
                            <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                aria-label="Content Goes Here"
                                data-bs-custom-class="custom-tooltip"
                                data-bs-original-title="Content Goes Here"
                            >
                                <i className="fas fa-info-circle text-success" />
                            </a>
                        </label>
                        <div className="ac-num">
                            <p>Ik bevestig mijn rekeningnummer</p>
                            <Image width={200} height={200} alt="aa" src="/images/private.png" />
                        </div>
                        <Image className="ms-2" width={34} height={34} alt="aa" src="/images/time-left.png" />

                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="voorwaardenCheckbox"
                                name="accept_term"
                            />
                            <label
                                className="form-check-label ms-2"
                                htmlFor="voorwaardenCheckbox"
                            >
                                Ik accepteer alle <a href="javascript:void(0);" className="ac-con-bx">voorwaarden</a>.
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="actiesCheckbox"
                                name="get_notified"
                            />
                            <label
                                className="form-check-label ms-2"
                                htmlFor="actiesCheckbox"
                            >
                                Ik wil graag op de hoogte blijven van alle acties van
                                Energise Company.
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="opmerking" className="form-label">
                            Ik heb nog een opmerking:
                        </label>
                        <textarea
                            className="form-control w-100"
                            id="opmerking"
                            rows={3}
                            defaultValue={""}
                            placeholder="Type een bericht..."
                            name='verification_message'
                        />
                    </div>
                    <div className="row">
                        <div className="col text-start">
                            <button
                                type="button"
                                className="btn btn-light fw-bold px-3 py-2 rounded-5 border"
                            >
                                Controleer gegevens
                            </button>
                        </div>
                        <div className="col text-end">
                            <button type="button" className="border-0 price-btn">
                                Aanvragen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i className="fas fa-credit-card" />
                        Betaling</h4>
                </div>

                <div className="card-body">

                    <div className="mb-3">
                        <label className="form-label">Kies jouw gewenste betaalmethode.*
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-custom-class="custom-tooltip" data-bs-original-title="Content Goes Here"><i className="fas green-cyan fa-info-circle" /></a>
                        </label>
                        <select className={errors.payment_type ? "form-select errorBox" : "form-select"}
                            {...register('payment_type', { required: true })}>
                            <option value=''>Selecteer een betaalmethode</option>
                            <option value="creditcard">Creditcard</option>
                            <option value="paypal">PayPal</option>
                            <option value="bankoverschrijving">Bankoverschrijving</option>
                        </select>
                        {errors.payment_type && <p className="errorMsg">Selecteer betalingstype</p>}
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="voorwaardenCheckbox"
                                {...register('condition_accepted', { required: true })} />
                            <label className="form-check-label ms-2" htmlFor="voorwaardenCheckbox">Ik accepteer alle voorwaarden.</label>
                        </div>
                        {errors.condition_accepted && <p className="errorMsg">Ga akkoord met de bedrijfsvoorwaarden</p>}
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="actiesCheckbox"
                                {...register('notification',)} />
                            <label className="form-check-label ms-2" htmlFor="actiesCheckbox">Ik wil graag op de hoogte blijven van alle acties van Energise Company.</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="opmerking" className="form-label">Ik heb nog een opmerking:</label>
                        <textarea className="form-control" id="opmerking" rows={3} defaultValue={""}
                            {...register('message',)} />
                    </div>
                    <div className="row">
                        <div className="col text-start">
                            <button type="button" className="btn btn-light fw-bold px-3 py-2 rounded-5 border">Controleer gegevens</button>
                        </div>
                        <div className="col text-end">
                            <button type="submit" className="border-0 price-btn">Aanvragen</button>
                        </div>
                    </div>
                </div>

            </div> */}
        </>
    )
}

export default PaymentDetails