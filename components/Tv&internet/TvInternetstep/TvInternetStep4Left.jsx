import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PostData } from '../../../utils/ApiCalls';
import { useSelector } from 'react-redux';

const InternetTvstep4 = ({ setShow, show, userDetails }) => {
    const { register, handleSubmit, watch, setValue, formState: { errors }, } = useForm()
    const singleData = useSelector((state) => state?.internetTv?.internetSingleProd[0])
    const [singleInternetData, setSingleInternetData] = useState()
    useEffect(() => {
        if (userDetails) {
            setValue('first_name', userDetails?.name), setValue('last_name', userDetails?.name), setValue('email', userDetails?.email),
                setValue('age', userDetails?.age), setValue('mobile_number', userDetails?.mobile), setValue('landline_number', userDetails?.landline_no)
        }
    }, [userDetails]);
    const [authToken, setAuthToken] = useState()
    useEffect(() => {
        const token = (localStorage.getItem('token'))
        setAuthToken(token ? token : '')
    }, [])
    useEffect(() => {
        if (singleData) {
            setSingleInternetData(singleData)
        }
    }, [singleData])
    // console.log(singleInternetData);
    const onSubmit = async (data) => {
        const sendData = {
            user_id: 1,
            postal_code: data.post_code,
            user_type: "personal",
            category: singleInternetData?.category,
            sub_category: null,
            service_id: 3,
            service_type: "App\\Models\\TvInternetProduct",
            combos: singleInternetData?.combos,
            provider_id: singleInternetData?.provider,
            advantages: {
                price: singleInternetData?.price,
                discounted_price: singleInternetData?.discounted_price,
                discounted_till: singleInternetData?.discounted_till,
                contract_length: singleInternetData?.contract_length,
                connection_cost: singleInternetData?.connection_cost,
                shipping_cost: singleInternetData?.shipping_cost,
                discount: singleInternetData?.discount,
                one_off_costs: {
                    shipping_cost: 15,
                    connection_cost: 20
                },
                monthly_cost: {
                    package_cost: 40
                }
            },
            shipping_address: {
                post_code: data.post_code,
                house_no: data.house_no
            },
            billing_address: {},
            price: singleInternetData?.price,
            discounted_price: singleInternetData?.discounted_price,
            total_price: 396,
            one_off_cost_total: 16,
            monthly_cost_total:16,
            discount: singleInternetData?.discount,
            commission_prct: 10,
            commission_amt: singleInternetData?.commission,
            request_status: "Under Process",
            cashback: 100
        }
        try {
            const res = await PostData('save-user-request', '', sendData, `Bearer ${authToken}`)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="col-lg-8">
                <a className='prev-internet-step-btn' onClick={() => setShow(1)}><i className="fas fa-long-arrow-alt-left"></i> previous</a>
                <div className='row'>
                    <div className='col-12'>
                        <ul className='step-formholder'>
                            <li><a className="text-warning">2</a></li>
                            <li><a>2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="profile-details">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="mb-0"><i className="fas fa-envelope" /> Contactgegevens</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* First Row */}
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-2 col-form-label">Geslacht</label>
                                        <div className="col-sm-4 d-flex align-items-center">
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="radio" name="sex" id="male" defaultValue="Man"
                                                    defaultChecked={userDetails?.gender == 'male'}
                                                    {...register('sex', { required: true })} />
                                                <label className="form-check-label" htmlFor="male"><i className="fas fa-mars" /> Man</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="sex" id="female" defaultValue="female"
                                                    defaultChecked={userDetails?.gender == 'female'}
                                                    {...register('sex', { required: true })} />
                                                <label className="form-check-label" htmlFor="female"><i className="fas fa-venus" /> Vrouw</label>
                                            </div>
                                        </div>
                                        <label htmlFor="initials" className="col-sm-3 col-form-label">Voorletters</label>
                                        <div className="col-sm-3">
                                            <input type="text" className={errors.initials ? "form-control errorBox" : "form-control"}
                                                id="initials" name="initials" placeholder="Voorletters"
                                                {...register('initials', { required: true })} />
                                        </div>
                                    </div>
                                    {/* Second Row */}
                                    <div className="row mb-3">
                                        <label htmlFor="firstname" className="col-sm-3 col-form-label">Voornaam</label>
                                        <div className="col-sm-3">
                                            <input type="text" className={errors.firstName ? "form-control errorBox" : "form-control"} id="first_name" name="first_name" placeholder="Bijv. Energise"

                                                {...register('first_name', { required: true })} />
                                        </div>
                                        <label htmlFor="interjections" className="col-sm-3 col-form-label">Tussenvoegsels</label>
                                        <div className="col-sm-3">
                                            <input type="text" className={errors.postcode ? "form-control errorBox" : "form-control"} id="interjections" name="interjections" placeholder="Bijv. Van der"
                                                {...register('postcode', { required: true })} />
                                        </div>
                                    </div>
                                    {/* Third Row */}
                                    <div className="row mb-3">
                                        <label htmlFor="last_name" className="col-sm-3 col-form-label">Achternaam</label>
                                        <div className="col-sm-3">
                                            <input type="text" className={errors.last_name ? "form-control errorBox" : "form-control"} id="last_name" name="last_name" placeholder="Biv. Company"

                                                {...register('last_name', { required: true })} />
                                        </div>
                                        <label htmlFor="dob" className="col-sm-3 col-form-label">Leeftijd</label>
                                        <div className="col-sm-3">
                                            <input type="number" className={errors.age ? "form-control errorBox" : "form-control"} id="age" name="age" defaultValue={userDetails?.age}
                                                {...register('age', { required: true })} />
                                        </div>
                                    </div>
                                    {/* Fourth Row */}
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="col-sm-3 col-form-label">E-mail</label>
                                        <div className="col-sm-3">
                                            <input type="email" className={errors.email ? "form-control errorBox" : "form-control"} id="email" name="email" placeholder="Bijv. Naam@mail.ni"
                                                // defaultValue={userDetails?.email}
                                                {...register('email', { required: true })} />
                                        </div>
                                        <label htmlFor="accountNumber" className="col-sm-3 col-form-label">Rekeningnummer</label>
                                        <div className="col-sm-3">
                                            <input type="text" className={errors.account_number ? "form-control errorBox" : "form-control"} id="account_number" name="account_number" placeholder="NLOOBANK00000000"
                                                {...register('account_number', { required: true })} />
                                        </div>
                                    </div>
                                    {/* Fifth Row */}
                                    <div className="row mb-3">
                                        <label htmlFor="mobileNumber" className="col-sm-3 col-form-label">Mobiel</label>
                                        <div className="col-sm-3">
                                            <input type="tel" className={errors.mobile_number ? "form-control errorBox" : "form-control"} id="mobile_number" name="mobile_number" placeholder="06-12345678"
                                                // defaultValue={userDetails?.mobile}
                                                {...register('mobile_number', { required: true })} />
                                        </div>
                                        <label htmlFor="landlineNumber" className="col-sm-3 col-form-label">Vaste telefoon</label>
                                        <div className="col-sm-3">
                                            <input type="tel" className={errors.landline_number ? "form-control errorBox" : "form-control"} id="landline_number" name="landline_number" placeholder="Regio-0000000"
                                                {...register('landline_number', { required: true })} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="mb-0"><i className="fas fa-home" /> Levering</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* First Row */}
                                    <div className="row">
                                        <div className="col-lg-6 d-flex align-items-center">
                                            <label htmlFor="zip" className="col-auto col-form-label mb-0 me-3">Postcode</label>
                                            <input type="text" className={errors.post_code ? "form-control errorBox" : "form-control"}
                                                id="zip" placeholder="Postcode"
                                                {...register('post_code', {
                                                    required: true
                                                })} />
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center housenubinput">
                                            <label htmlFor="houseNumber" className="col-auto col-form-label">Huisnummer &amp; toevoeging</label>
                                            <input type="text" className={errors.house_number ? "form-control errorBox col-auto" : "form-control col-auto"}
                                                id="houseNumber" placeholder="Bijv. 112A"
                                                {...register('house_number', {
                                                    required: true
                                                })} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-6 d-flex align-items-center">
                                            <label className="col-auto col-form-label mb-0 me-3">Gaat dit om een verhuizing?* </label>
                                            <div className="d-flex">
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" defaultValue="yes" />
                                                    <label className="form-check-label" htmlFor="yes">Ja</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" defaultValue="no" defaultChecked />
                                                    <label className="form-check-label" htmlFor="no">Nee</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-6 d-flex align-items-center">
                                            <label className="col-auto col-form-label mb-0 me-3">Wil je een monteur voor de installatie?*</label>
                                            <div className="d-flex">
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" defaultValue="yes" />
                                                    <label className="form-check-label" htmlFor="yes">Ja</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" defaultValue="no" defaultChecked />
                                                    <label className="form-check-label" htmlFor="no">Nee</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-6 d-flex align-items-center">
                                            <label className="col-auto col-form-label mb-0 me-3">Wijkt jouw postadres af?</label>
                                            <div className="d-flex">
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" defaultValue="yes" />
                                                    <label className="form-check-label" htmlFor="yes">Ja</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" defaultValue="no" defaultChecked />
                                                    <label className="form-check-label" htmlFor="no">Nee</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Second Row for Additional Input Box */}
                                    <div className="row mb-3" id="additionalInputRow">
                                        <label htmlFor="additionalInput" className="col-sm-6 col-form-label">Voer postcode in</label>
                                        <div className="col-sm-6">
                                            <input type="text" className={errors.zip_code ? "form-control errorBox" : "form-control"}
                                                id="additionalInput" placeholder="Voer postcode in"
                                                {...register('zip_code', {
                                                    required: true
                                                })} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-6 d-flex align-items-center mb-4">
                                            <label className="col-auto col-form-label mb-0 me-3">Voorkeur installatiedatum?</label>
                                            <input type='date' className={errors.installation_date ? "form-control errorBox" : "form-control"}
                                                {...register('installation_date', {
                                                    required: true
                                                })} />
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6 d-flex align-items-center">
                                                <label className="col-auto col-form-label mb-0 me-3">Ik wil mijn nummerbehouden</label>
                                                <input type='text' className='form-control'
                                                    {...register('alternate_number')} />
                                            </div>
                                            <div className='col-12'>
                                                <a href='javascript:void(0);' className='text-warning' ><i className="fas fa-plus"></i> Extra lijn</a>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="mb-0">
                                    <i className="fas fa-credit-card" />
                                    Verificatie</h4>
                            </div>
                            <div className="card-body">
                                <div className="mb-3 ">
                                    <label className="form-label">Verfieer hier jouw bank gegevens en voorkom samen fraude.*
                                        <a href="javascript:void(0);" className='text-success' data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-custom-className="custom-tooltip" data-bs-original-title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                                    </label>
                                    <select className={errors.payment_method ? "form-select errorBox" : "form-select"}
                                        {...register('payment_method', {
                                            required: true
                                        })}>
                                        <option value="">Selecteer een betaalmethode</option>
                                        <option value="creditcard">Creditcard</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="bankoverschrijving">Bankoverschrijving</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="voorwaardenCheckbox"
                                            {...register('temr_cond', {
                                                required: true
                                            })} />
                                        <label className="form-check-label ms-2" htmlFor="voorwaardenCheckbox">Ik accepteer alle voorwaarden.</label>
                                        {errors.temr_cond && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i>This field is required</p>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="actiesCheckbox" />
                                        <label className="form-check-label ms-2" htmlFor="actiesCheckbox">Ik wil graag op de hoogte blijven van alle acties van Energise Company.</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="opmerking" className="form-label">Ik heb nog een opmerking:</label>
                                    <textarea className="form-control" id="opmerking" rows={3} defaultValue={""} />
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InternetTvstep4