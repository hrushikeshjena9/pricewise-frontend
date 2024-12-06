import Image from 'next/image'
import React from 'react'

const Verification = ({ register, errors }) => {
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
                        <select className= {errors.payment_method ? "form-select  errorBox" : "form-select d-none"}
                            {...register('payment_method', { required: true })}>
                            <option value="">
                                Selecteer een betaalmethode
                            </option>
                            <option value="creditcard">Creditcard</option>
                            <option value="paypal">PayPal</option>
                            <option value="bankoverschrijving">Bankoverschrijving</option>
                        </select>
                        <div className="ac-num">
                            <p>Selecteer een betaalmethode</p>
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
                                {...register('verification', { required: true })}
                            />
                            <label
                                className="form-check-label ms-2"
                                htmlFor="voorwaardenCheckbox"
                            >
                                 Ik accepteer alle <a href="#" className="ac-con-bx">voorwaarden</a>.
                            </label>
                        </div>
                        {errors.verification && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="actiesCheckbox"
                                {...register('get_notified')}
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
                            {...register('message')}
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
                            <button type="submit" className="border-0 price-btn">
                                Aanvragen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification