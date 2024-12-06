import Image from 'next/image'
import React from 'react'

const MortgageInfo = () => {
    return (
        <>
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0">
                        <Image width={200} height={200} alt="aa" src="/images/key.png" className="img-fluid" />
                        Hypotheekgegevens</h4>
                </div>
                <div className="card-body">
                    <p><span>Jouw gegevens</span> Vul de gegevens in die op de paspoort staan aangegeven.</p>
                    <form>
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
                        <div className="row">
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
                        <p><span>Partner</span> Vul de gegevens in die op de paspoort staan aangegeven.</p>
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
                                    <label htmlFor="partnerBirthDate" className="me-3 col-form-label">Achternaam</label>
                                    <input type="text" className="form-control" id="partnerBirthDate" placeholder="Bijv. Company" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="partnerBirthDate" className="me-3 col-form-label">Voornaam</label>
                                    <input type="text" className="form-control" id="partnerBirthDate" placeholder="Bijv. Energise" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="partnerBirthDate" className="me-3 col-form-label">Geboortedatum</label>
                                    <input type="text" className="form-control" id="partnerBirthDate" placeholder="DD-MM-JJJJ" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="maritalStatus" className="me-3 col-form-label">Burgelijkestaat</label>
                                    <select className="form-select" id="maritalStatus">
                                        <option value="unmarried" selected>
                                            Ongehuwd
                                        </option>
                                        <option value="married">
                                            Gehuwd
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MortgageInfo