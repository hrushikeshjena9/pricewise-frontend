import Image from 'next/image'
import React from 'react'

const BusinessTripStep3Left = () => {
    return (
        <>
            <div className="col-lg-8">
                <div className="compare-toppart mt-2">
                    <h2>Stel jouw deal vandaag veilig 2one</h2>
                    <div className="secure-wrp">
                        <Image width={200} height={200} alt="aa" src="/images/secure.png" className="img-fluid secureimg" />
                    </div>
                    <p>
                        Vul de resterende gegevens in die de aanbieder nodig heeft, zodat
                        wij alles vlekkenloos kunnen regelen en jij snel hier van kan
                        profiteren.
                    </p>
                </div>
                <div className="card mt-4">
                    <div className='card-header'>
                        <h4 className="mb-0"> <Image src='/images/archives.png' width={80} height={80} alt="archives" />
                            Bedrijfsgegevens</h4>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="bedrijfsnaam" className="form-label">Bedrijfsnaam</label>
                                        <input type="text" className="form-control" id="bedrijfsnaam" placeholder="Bijv. Energise company" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="vestiging" className="form-label">KVK Nummer</label>
                                        <input type="text" className="form-control" id="vestiging" placeholder="Bijv. adres" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="kvknummer" className="form-label">Vestiging</label>
                                        <input type="text" className="form-control" id="kvknummer" placeholder="Bijv. 681237" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="functie" className="form-label">Functie</label>
                                        <input type="text" className="form-control" id="functie" placeholder="Bijv. Algemeen directeur" />
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header">
                        <h4 className="mb-0"><Image src='/images/contact.png' width={60} height={60} alt="contact" className="me-2" />
                        Gegevens hoofdboeker</h4>
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
                                    <input type="text" className="form-control" id="accountNumber" name="accountNumber" placeholder="NLOOBANK00000000" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-3 col-form-label">Postcode</label>
                                <div className="col-sm-3">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Bijv: 1200AA" />
                                </div>
                                <label htmlFor="accountNumber" className="col-sm-3 col-form-label">Nummer &amp; toevoeging</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" id="accountNumber" name="accountNumber" placeholder="Biv. 112A" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-3 col-form-label">Mobiel</label>
                                <div className="col-sm-3">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="06-12345678" />
                                </div>
                                <label htmlFor="accountNumber" className="col-sm-3 col-form-label">Vaste telefoon</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" id="accountNumber" name="accountNumber" placeholder="Vaste telefoon" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='card mt-4'>
                    <div className="card-header">
                        <h4 className="mb-0"><Image src='/images/information-desk.png' width={64} height={64} alt="archives" /> Reisgegevens</h4>
                    </div>
                    <div className="card-body">
                        <h5><span className='fw-medium text-warning'>Volwassen 1:</span> Vul de gegevens in die op de paspoort staan aangegeven.</h5>

                        <div className="form-group d-flex align-items-center">
                            <label htmlFor="gender" className="me-3 col-form-label">Geslacht</label>
                            <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="sex" id="male" defaultValue="Man" />
                                <label className="form-check-label" htmlFor="male"><i className="fas fa-mars" /> Man</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sex" id="female" defaultValue="female" />
                                <label className="form-check-label" htmlFor="female"><i className="fas fa-venus" /> Vrouw</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="nationality" className="me-3 col-form-label">Nationaliteit</label>
                                    <input type="text" className="form-control" id="nationality" defaultValue="Nederlandse" readOnly />
                                    <a href="javascript:void();" className="edit-nationality" onclick="enableEdit()">Wijzigen</a>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="lastName" className="me-3 col-form-label">Achternaam</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Bijv. Company" />
                                </div>
                        
                            </div>
                            </div>
                            <div className='row'>
                            <div className="col-lg-6">
                            <div className="form-group">
                                    <label htmlFor="firstName" className="me-3 col-form-label">Voornaam</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Bijv. Energise" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="birthDate" className="me-3 col-form-label">Geboortedatum</label>
                                    <input type="date" className="form-control" id="birthDate" placeholder="DD-MM-JJJJ" />
                                </div>
                            </div>
                        </div>
                        <h5><span className='fw-medium text-warning'>Volwassen 2:</span> Vul de gegevens in die op de paspoort staan aangegeven.</h5>
                       
                        <div className="form-group d-flex align-items-center">
                            <label htmlFor="gender" className="me-3 col-form-label">Geslacht</label>
                            <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="sex" id="male" defaultValue="Man" />
                                <label className="form-check-label" htmlFor="male"><i className="fas fa-mars" /> Man</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sex" id="female" defaultValue="female" />
                                <label className="form-check-label" htmlFor="female"><i className="fas fa-venus" /> Vrouw</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="nationality" className="me-3 col-form-label">Nationaliteit</label>
                                    <input type="text" className="form-control" id="nationality" defaultValue="Nederlandse" readOnly />
                                    <a href="javascript:void();" className="edit-nationality" onclick="enableEdit()">Wijzigen</a>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="partnerBirthDate" className="me-3 col-form-label">Voornaam</label>
                                    <input type="text" className="form-control" id="partnerBirthDate" placeholder="Bijv. Energise" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="partnerBirthDate" className="me-3 col-form-label">Achternaam</label>
                                    <input type="text" className="form-control" id="partnerBirthDate" placeholder="Bijv. Company" />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="partnerBirthDate" className="me-3 col-form-label">Geboortedatum</label>
                                    <input type="text" className="form-control" id="partnerBirthDate" placeholder="DD-MM-JJJJ" />
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-12 text-center'>
                                <h4>Contactpersoon bij calimiteiten</h4>
                            </div>
                            <div className='col-lg-6'>
                                <label className="form-lable">Voornaam</label>
                                <input type='text' className='form-control' placeholder='Bijv. Energise' />
                            </div>
                            <div className='col-lg-6'>
                                <label className="form-lable">Telefoonnummer</label>
                                <input type='text' className='form-control' placeholder='06-12345678' />
                            </div>
                        </div>


                    </div>

                </div>


                <div className="card mt-4">
                    <div className="card-header">
                        <h4 className="mb-0">
                            <i className="fas text-warning fa-2x fa-shield-alt" />
                            Verificatie</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Kies jouw gewenste betaalmethode.* <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-custom-class="custom-tooltip" data-bs-original-title="Content Goes Here">
                                <i className="fas text-success fa-info-circle" /></a>
                            </label>
                            <select className="form-select">
                                <option selected disabled>Selecteer een betaalmethode</option>
                                <option value="creditcard">Creditcard</option>
                                <option value="paypal">PayPal</option>
                                <option value="bankoverschrijving">Bankoverschrijving</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="voorwaardenCheckbox" />
                                <label className="form-check-label ms-2" htmlFor="voorwaardenCheckbox">Ik accepteer alle voorwaarden.</label>
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
                                <button type="button" className="border-0 price-btn">Aanvragen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessTripStep3Left