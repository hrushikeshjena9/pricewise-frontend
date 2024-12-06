import React from 'react'

const PersonalInfo = ({ register, errors }) => {
    return (
        <>
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i className="fas fa-envelope" /> Contactgegevens
                    </h4>
                </div>
                <div className="card-body">

                    {/* First Row */}
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Geslacht</label>
                        <div className="col-sm-4 d-flex align-items-center">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="sex" id="male" defaultValue="Man"

                                    {...register('sex', { required: true })} />
                                <label className="form-check-label" htmlFor="male"><i className="fas fa-mars" /> Man</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sex" id="female" defaultValue="female"

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
                            <input type="text" className={errors.first_name ? "form-control errorBox" : "form-control"} id="first_name" name="first_name" placeholder="Bijv. Energise"

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
                            <input type="number" className={errors.age ? "form-control errorBox" : "form-control"} id="age" name="age" 
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

                </div>
            </div>
        </>
    )
}

export default PersonalInfo