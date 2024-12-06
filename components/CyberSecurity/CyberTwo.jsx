import Image from 'next/image'
import React from 'react'

const CyberTwo = () => {
    return (
        <>
            <section>
                <div className="cybersecurity-wrp">
                    <div className="container">
                        <div className="card border-0 fullcyberpg">
                            <div className="card-body">
                                <div className="titlecybersecurity">
                                    <h2><i className="fas fa-shield-alt" /> Cybersecurity</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 cyberbxleft">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <input type="text" className="form-control " id="input1" placeholder="Postcode" />
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="text" className="form-control " id="input2" placeholder="Huisnummer" />
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="text" className="form-control " id="input3" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <select className="form-select" aria-label="Select">
                                                    <option selected>Cybersecurity</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <select className="form-select" aria-label="Select">
                                                    <option selected>Cybersecurity</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                                <div className="infbx">
                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <label>Geslacht</label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon">
                                                <input className="form-check-input" type="radio" id="man" name="geslacht" />
                                                <label htmlFor="man">Man <i className="fas fa-2x fa-mars icon" /></label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon">
                                                <input className="form-check-input" type="radio" id="vrouw" name="geslacht" />
                                                <label htmlFor="vrouw">Vrouw <i className="fas fa-2x fa-venus icon" /></label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <input type="date" className="form-control" />
                                                <div className="infbx infbx2">
                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                                                    <a href="javascript:void(0);" className="extra"><i className="fas fa-2x fa-user-plus" /> <span>Extra?</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <select className="form-select" aria-label="Select">
                                                    <option selected>Aanbevolen verzekeringenv</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                                <div className="infbx infbx2">
                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                                                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#moreviewmodel"><Image width={35} height={35} src="/images/viewpop.png" alt='aa' /><span>Overzicht?</span></a>
                                                </div>
                                                {/* Modal */}
                                                <div className="modal fade" id="moreviewmodel" tabIndex={-1} aria-labelledby="moreviewmodelLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="moreviewmodelLabel">Stap voor stap meer vergelijken</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                            </div>
                                                            <div className="modal-body addmorepopup">
                                                                <ul className="list-unstyled checkbox-wrapper-16">
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col-4">
                                                                                <Image width={90} height={90} src="/images/icon1.png" className="img-fluid" alt='aa' />
                                                                            </div>
                                                                            <div className="col-4 text-center">
                                                                                <span>Woonverzekering</span>
                                                                            </div>
                                                                            <div className="col-4 text-end">
                                                                                <label className="checkbox-wrapper">
                                                                                    <input type="checkbox" className="checkbox-input" />
                                                                                    <span className="checkbox-tile">
                                                                                        <span className="checkbox-icon">
                                                                                            <Image width={128} height={128} src="/images/compairadd.png" className="img-fluid" alt='aa' />
                                                                                        </span>
                                                                                        <span className="checkbox-label" />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col-4">
                                                                                <Image width={90} height={90} src="/images/icon2.png" className="img-fluid" alt='aa' />
                                                                            </div>
                                                                            <div className="col-4 text-center">
                                                                                <span>Rechtsbijstand</span>
                                                                            </div>
                                                                            <div className="col-4 text-end">
                                                                                <label className="checkbox-wrapper">
                                                                                    <input type="checkbox" className="checkbox-input" />
                                                                                    <span className="checkbox-tile">
                                                                                        <span className="checkbox-icon">
                                                                                            <Image width={128} height={128} src="/images/compairadd.png" className="img-fluid" alt='aa' />
                                                                                        </span>
                                                                                        <span className="checkbox-label" />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col-4">
                                                                                <Image width={90} height={90} src="/images/icon3.png" className="img-fluid" alt='aa' />
                                                                            </div>
                                                                            <div className="col-4 text-center">
                                                                                <span>Leningen</span>
                                                                            </div>
                                                                            <div className="col-4 text-end">
                                                                                <label className="checkbox-wrapper">
                                                                                    <input type="checkbox" className="checkbox-input" />
                                                                                    <span className="checkbox-tile">
                                                                                        <span className="checkbox-icon">
                                                                                            <Image width={128} height={128} src="/images/compairadd.png" className="img-fluid" alt='aa' />
                                                                                        </span>
                                                                                        <span className="checkbox-label" />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="addmorelist">
                                                                            <span>Toevoegen</span>
                                                                            <a href="javascript:void(0);"><i className="fas fa-2x fa-plus-circle" /></a>
                                                                        </div>
                                                                        <div className="infbx">
                                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div className="popupbtn">
                                                                    <div className="row">
                                                                        <div className="col-4">
                                                                            <a href="#">
                                                                                <Image width={64} height={64} src="/images/antivirus.png" className="img-fluid" alt='aa' />
                                                                                <span>Risico Scan</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-4">
                                                                            <button className="btnps">Opslaan</button>
                                                                        </div>
                                                                        <div className="col-4">
                                                                            <a href="#" className="reset">
                                                                                <i className="fas fa-2x fa-sync-alt" />
                                                                                <span>Reset</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col radiobx">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <input type="radio" name="test" id="cb1" />
                                                        <label htmlFor="cb1">
                                                            <Image width={100} height={100} src="/images/home-insurance.png" className="img-fluid" alt='aa' />
                                                            <span className="checkbox-label">Woonverzekering</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="radio" name="test" id="cb2" />
                                                        <label htmlFor="cb2">
                                                            <Image width={100} height={100} src="/images/loan.png" className="img-fluid" alt='aa' />
                                                            <span className="checkbox-label">Rechtsbijstand</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="radio" name="test" id="cb3" />
                                                        <label htmlFor="cb3">
                                                            <Image width={100} height={100} src="/images/legal-document.png" className="img-fluid" alt='aa' />
                                                            <span className="checkbox-label">Leningen</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CyberTwo