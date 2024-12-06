import Image from 'next/image'
import React from 'react'

const FormPopup = () => {
    return (
        <>
            <div className="modal fade" id="addresschange" tabIndex={-1} aria-labelledby="addresschangeLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row w-100 justify-content-center align-items-center">
                                <div className="col text-center">
                                    <h5 className="modal-title" id="exampleModalLabel">Meerdere Vestigingen</h5>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p className='text-center d-block'>Wijken de gegevens af ten opzichten van de andere vestigingen?</p>
                            <div className='text-center'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="wijken" id="wijkenJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="wijkenJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="wijken" id="wijkenNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="wijkenNee">Nee</label>
                                </div>
                            </div>

                            <div className="row">
                                    <div className="col-lg-6 eventbxleft">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control " id="input1" placeholder="Postcode" />
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control " id="input2" placeholder="Huisnummer" />
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control " id="input3" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <select className="form-select" aria-label="Select">
                                                    <option selected>Cybersecurity</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4">
                                                <select className="form-select" aria-label="Select">
                                                    <option selected>Verzekeraar </option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="infbx">
                                                    <a href="javascript:void(0);"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Content Goes Here">
                                                        <i className="fas fa-2x fa-info-circle" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3">
                                                <label>Geslacht</label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="man"
                                                    name="geslacht"
                                                />
                                                <label htmlFor="man">
                                                    Man <i className="fas fa-2x fa-mars icon" />
                                                </label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="vrouw"
                                                    name="geslacht"
                                                />
                                                <label htmlFor="vrouw">
                                                    Vrouw <i className="fas fa-2x fa-venus icon" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className='col-lg-3 ps-0'>
                                                <div className="infcalcubx">
                                                    <a
                                                        href="javascript:void(0);"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Content Goes Here"
                                                    >
                                                        <i className="fas fa-2x fa-info-circle" />
                                                    </a>
                                                    <a href="javascript:void(0);" className="extra">
                                                        <i className="fas fa-2x fa-user-plus" />
                                                        <span>Extra?</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    id="input1"
                                                    placeholder="Meeverzekeren"
                                                />
                                            </div>
                                            <div className='col-lg-3'>
                                                <div className="infbx infbx2">
                                                    <a
                                                        href="javascript:void(0);"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        className='me-3'
                                                        title="Content Goes Here"
                                                    >
                                                        <i className="fas fa-2x fa-info-circle" />
                                                    </a>
                                                    <a href="javascript:void(0);" className="extra">
                                                        <i className="far fa-2x fa-check-square" />
                                                        <span>Toevoegen</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <label>Wie?</label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="Partner"
                                                    name="geslacht"
                                                />

                                                <label htmlFor="Partner">
                                                    Partner <i className="fal fa-handshake-alt icon" />
                                                </label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="Kind"
                                                    name="geslacht"
                                                />
                                                <label htmlFor="Kind">
                                                    Personeel <i className="fad fa-male icon" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <label>Geslacht</label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="man2"
                                                    name="geslacht"
                                                />
                                                <label htmlFor="man2">
                                                    Man <i className="fas fa-2x fa-mars icon" />
                                                </label>
                                            </div>
                                            <div className="col-lg-auto col-md-auto col-sm-auto radio-icon rd-fnt-icon">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="vrouw2"
                                                    name="geslacht"
                                                />
                                                <label htmlFor="vrouw2">
                                                    Vrouw <i className="fas fa-2x fa-venus icon" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className='col-lg-2'>
                                                <div className="infbx">
                                                    <a
                                                        href="javascript:void(0);"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Content Goes Here"
                                                    >
                                                        <i className="fas fa-2x fa-info-circle" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <label className='form-lable fw-medium'>Cybersecurity</label>
                        
                                            </div>
                                            <div className="col-lg-5">
                                                <select className="form-select" aria-label="Select">
                                                    <option selected>Verzekeraar</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-2'>
                                                <div className="infbx infbx2">
                                                    <a
                                                        href="javascript:void(0);"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-html="true"
                                                        title="Content Goes Here"
                                                    >
                                                        <i className="fas fa-2x fa-info-circle" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-5">
                                            <label className='form-lable fw-medium'>Bedrijfsgrootte</label>
                                            </div>
                                            <div className="col-4">
                                                <input type='number' className='form-control' />
                                            </div>
                                            <div className="col-2">
                                                <div className="infbx infbx2">
                                                    <a href="javascript:void(0);" className="extra">
                                                        <i className="fas fa-2x fa-user-plus" />
                                                        <span>Extra?</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                        <a href="" className='text-success text-center mb-4 d-block'>
                                            <i className="fas fa-map-marker-alt"></i>
                                            Meerdere Vestigingen toevoegen.
                                         </a>
                                        
                                        </div>
                                        {/* <a href="javascritp:void();" className="help-estimat">Huip nodig bij het schatten?</a> */}
                          
                                    </div>
                                    {/* ------extended form------- */}
                 
                                        <div className="col-lg-6 eventbxright">
                                            <div className='row'>
                                                    <div className='col-lg-9'>
                                                       <input type='text' placeholder='Aanvullende dekking' className='form-control'/>
                                                    </div>
                                                    <div className='col-2'>
                                                    <div className="infbx infcalcubx infbx2">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col px-4 radiobx">
                                                    <div className="row">
                                                        <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb21" />
                                                            <label htmlFor="cb21">
                                                                <Image width={128} height={128} alt="horeca" src="/images/film2.png" className="img-fluid" />
                                                                <span className="checkbox-label">Media</span>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-4 col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb22" />
                                                            <label htmlFor="cb22">
                                                                <Image width={128} height={128} alt="aa" src="/images/browser.png" className="img-fluid" />
                                                                <span className="checkbox-label">PCI-DSS</span>
                                                            </label>
                                                        </div>
                                       
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-2">
                                                
                                                <div className="col-4">
                                                    <label className="form-label labeltitle">Bruto omzet</label>
                                                </div>
                                                <div className="col-5">
                                                    <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                                </div>
                                                <div className='col-2'>
                                                    <div className="infbx infcalcubx infbx2">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                    <label htmlFor="customRange1" className="form-label">
                                                        € <span id="rangeValue1">30.000</span> €1.250.000
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-5">
                                                    <label className="form-label labeltitle">Verzekerd bedrag</label>
                                                </div>
                                                <div className="col-4">
                                                    <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                                </div>
                                                <div className='col-3'>
                                                    <div className="infbx infcalcubx infbx2">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                    <label htmlFor="customRange1" className="form-label">
                                                        <span id="rangeValue1">€1</span> € 50.000
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <div className="row mt-3">
                                                <div className="col-9">
                                                    <select className="form-select" aria-label="Select">
                                                        <option disabled selected>Aanbevolen verzekeringen</option>
                                                        <option value="option1">Option 1</option>
                                                        <option value="option2">Option 2</option>
                                                        <option value="option3">Option 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-2">
                                                    <div className="infbx infcalcubx infbx2">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#moreviewmodel">
                                                            <Image width={50} height={82} alt="aa" src="/images/viewpop.png" />
                                                            <span>Overzicht?</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col px-4 radiobx">
                                                    <div className="row">
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb21" />
                                                            <label htmlFor="cb21">
                                                                <Image width={128} height={128} alt="horeca" src="/images/companyassets.png" className="img-fluid" />
                                                                <span className="checkbox-label">Bedrijfsmiddelen</span>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb22" />
                                                            <label htmlFor="cb22">
                                                                <Image width={128} height={128} alt="aa" src="/images/voteicon.png" className="img-fluid" />
                                                                <span className="checkbox-label">Glas</span>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb2d2" />
                                                            <label htmlFor="cb2d2">
                                                                <Image width={128} height={128} alt="aa" src="/images/corporateliability.png" className="img-fluid" />
                                                                <span className="checkbox-label">Aansprakelijkheid</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                               
                                </div>


                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn price-btn" data-bs-dismiss="modal">Toevoegen</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormPopup