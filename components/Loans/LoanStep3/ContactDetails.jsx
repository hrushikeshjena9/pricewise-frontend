import React from 'react'

const ContactDetails = () => {
    return (
        <>
            <div className="card">
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
                                    <input className="form-check-input" type="radio" name="sex" id="male" defaultValue="Man" />
                                    <label className="form-check-label" htmlFor="male"><i className="fas fa-mars" /> Man</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="sex" id="female" defaultValue="female" />
                                    <label className="form-check-label" htmlFor="female"><i className="fas fa-venus" /> Vrouw</label>
                                </div>
                            </div>
                            <label htmlFor="initials" className="col-sm-3 col-form-label">Voorletters</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="initials" name="initials" placeholder="Voorletters" />
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="row mb-3">
                            <label htmlFor="firstname" className="col-sm-3 col-form-label">Voornaam</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="Bijv. Energise" />
                            </div>
                            <label htmlFor="interjections" className="col-sm-3 col-form-label">Tussenvoegsels</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="interjections" name="interjections" placeholder="Bijv. Van der" />
                            </div>
                        </div>
                        {/* Third Row */}
                        <div className="row mb-3">
                            <label htmlFor="surname" className="col-sm-3 col-form-label">Achternaam</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="surname" name="surname" placeholder="Biv. Company" />
                            </div>
                            <label htmlFor="dob" className="col-sm-3 col-form-label">Geboortedatum</label>
                            <div className="col-sm-3">
                                <input type="date" className="form-control" id="dob" name="dob" />
                            </div>
                        </div>
                        {/* Fourth Row */}
                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-3 col-form-label">E-mail</label>
                            <div className="col-sm-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Bijv. Naam@mail.ni" />
                            </div>
                            <label htmlFor="accountNumber" className="col-sm-3 col-form-label">Rekeningnummer</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="accountNumber" name="accountNumber" placeholder="NL00BANK00000000" />
                            </div>
                        </div>
                        {/* Fourth Row */}
                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-3 col-form-label">Mobiel</label>
                            <div className="col-sm-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder="06-12345678" />
                            </div>
                            <label htmlFor="accountNumber" className="col-sm-3 col-form-label">Vaste telefoon</label>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="accountNumber" name="accountNumber" placeholder="Regio-0000000" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactDetails