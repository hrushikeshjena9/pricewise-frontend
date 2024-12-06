import Image from 'next/image'
import React, { useState } from 'react'

const ConstructionAllRiskFrontAdressPopup = () => {
    const [showMeev, setShowMeev] = useState(false)
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
                                        <div className='row'>
                                            <div className='col-9'>
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
                                                            <option selected>Constructionallrisk</option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6 position-relative">
                                                        <select className="form-select" aria-label="Select">
                                                            <option selected>Verzekeraar </option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                        <div className="infcalcubx  info-pos">
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

                                                <div className="row mt-3">
                                                    <div className="col-lg-3 col-md-3">
                                                        <label>Geslacht</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 radio-icon">
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
                                                    <div className="col-lg-5 col-md-5 radio-icon">
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
                                                    <div className="col-lg-12 position-relative">
                                                        <input type="date" className="form-control" />
                                                        <div className="infcalcubx   info-pos">
                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true"  title="Content Goes Here">
                                                                <i className="fas fa-2x fa-info-circle" />
                                                            </a>
                                                       </div>    
                                                       <div className="infcalcubx  extra-pos">
                                                            <a href="javascript:void(0);" className="extra">
                                                                <i className="fas fa-2x fa-user-plus" />
                                                                <span>Extra?</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className='col-12 position-relative'>
                                                        <select className='form-select'>
                                                            <option>Aflopend CAR</option>
                                                            <option>Doorlopende CAR</option>
                                                        </select>
                                                        <div className="infcalcubx  info-pos">
                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                                <i className="fas fa-2x fa-info-circle" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className='col-12 position-relative'>
                                                        <select className='form-select'>
                                                            <option>Soort constructie</option>
                                                            <option>Select</option>
                                                        </select>
                                                        <div className="infcalcubx  info-pos">
                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                                <i className="fas fa-2x fa-info-circle" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col px-4 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                                <input type="radio" name="test" id="cb21" />
                                                                <label htmlFor="cb21" className="tooltip-container">
                                                                    <Image width={128} height={128} alt="horeca" src="/images/garage-2.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Garage</span>
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-html="true"
                                                                        title="Garage"
                                                                        className="info-in-risk hide-info-desktop">
                                                                        <i className="fas fa-2x fa-info-circle" />
                                                                    </a>
                                                                    <div className="d-flex justify-content-center">
                                                                        <p className="tooltip-text">Garage</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                                <input type="radio" name="test" id="cb22" />
                                                                <label htmlFor="cb22" className="tooltip-container" >
                                                                    <Image width={128} height={128} alt="aa" src="/images/veranda.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Veranda</span>
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-html="true"
                                                                        title="Veranda"
                                                                        className="info-in-risk hide-info-desktop">
                                                                        <i className="fas fa-2x fa-info-circle" />
                                                                    </a>
                                                                    <div className="d-flex justify-content-center">
                                                                        <p className="tooltip-text">Veranda</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                                <input type="radio" name="test" id="cb2d2" />
                                                                <label htmlFor="cb2d2"  className="tooltip-container">
                                                                    <Image width={128} height={128} alt="aa" src="/images/parkings.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Schuur</span>
                                                                    <a
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-html="true"
                                                                        title="Schuur"
                                                                        className="info-in-risk hide-info-desktop">
                                                                        <i className="fas fa-2x fa-info-circle" />
                                                                    </a>
                                                                    <div className="d-flex justify-content-center">
                                                                        <p className="tooltip-text">Schuur</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                                <input type="radio" name="test" id="cb2d2" />
                                                                 <label htmlFor="cb2d2" className="tooltip-container">
                                                                <Image width={128} height={128} alt="aa" src="/images/traditional.png" className="img-fluid" />
                                                                <span className="checkbox-label">Etage</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Etage"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Etage</p>
                                                                </div>
                                                            </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-12 position-relative">
                                                        <label className='form-control'>
                                                            Meeverzekeren
                                                        </label>
                                                        <div className="infcalcubx frm-info-absolute new-class">
                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" 
                                                            data-bs-html="true" title="Content Goes Here">
                                                                <i className="fas fa-2x fa-info-circle new-class" />
                                                            </a>
                                                        </div>
                                                        <div className="frm-toevoe-position text-center new-class">
                                                            <input className="form-check-input mb-0 new-class" type="checkbox" id="flexCheckDefault" 
                                                            onChange={() => setShowMeev(!showMeev)}  checked={showMeev}
                                                            />
                                                            <div className="form-check-label d-block fw-bold new-class">
                                                                <label htmlFor="flexCheckDefault" className="form-check-label d-block fw-bold green-cyan new-class">Toevoegen</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showMeev &&  
                                                <>
                                                <div className="row mt-3">
                                                    <div className="col-lg-3 col-md-3">
                                                        <label>Wie?</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 radio-icon d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="man"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="man">
                                                            Partner{" "}
                                                            <i className="fal fa-handshake-alt icon" />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 radio-icon d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="vrouw"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="vrouw">
                                                            Personeel <i className="fad fa-male icon" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3">
                                                        <label>Geslacht</label>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 radio-icon">
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
                                                    <div className="col-lg-5 col-md-5 radio-icon">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="vrouw"
                                                            name="geslacht"
                                                        />
                                                        <label htmlFor="vrouw">
                                                            Vrouw{" "}
                                                            <i className="fas fa-2x fa-venus icon" />
                                                        </label>
                                                    </div>
                                                </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 position-relative">
                                                            <input type="date" className="form-control" />
                                                            <div className="infcalcubx  info-pos">
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
                                                        <div className="col-lg-6">
                                                            <label className='form-lable fw-medium'>Constructionallrisk</label>
                                                        </div>
                                                        <div className="col-lg-6 position-relative">
                                                            <select className="form-select" aria-label="Select">
                                                                <option selected>Verzekeraar</option>
                                                                <option value="option1">Option 1</option>
                                                                <option value="option2">Option 2</option>
                                                                <option value="option3">Option 3</option>
                                                            </select>
                                                            <div className="infcalcubx  info-pos">
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
                                                        <div className="col-6">
                                                            <label className='form-lable fw-medium'>Bedrijfsgrootte</label>
                                                        </div>
                                                        <div className="col-6 position-relative">
                                                            <input type='number' className='form-control' />
                                                            <div className="infcalcubx only-extra-absolute-business-equipment-insurance">
                                                                <a href="javascript:void(0);" className="extra  text-center">
                                                                    <i className="fas fa-2x fa-user-plus" />
                                                                    <span className='d-block fw-bold' >Extra?</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                                 }
                                                <div className='text-center mt-3'>
                                                    <a href="#addresschange" className='text-success text-center mb-4 d-block' data-bs-toggle="modal">
                                                        <Image src='/images/add-location-point.png' width='30' height='30' alt='location' />
                                                        Meerdere Vestigingen toevoegen. <sup className="sup-fonticon"><i className="fas green-cyan fa-info-circle" /></sup>

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                          
                                    </div>
                        
                                        <div className="col-lg-6 eventbxright">
                                            <div className='row'>
                                                <div className='col-9'>
                                                    <div className='row'>
                                                        <div className="col-12 position-relative">
                                                            <input type='text' className='form-control' placeholder='Aanvullende dekking' />
                                                            <div className="infcalcubx only-info-absolute">
                                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col px-4 radiobx">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-sm-6 p-0">
                                                                    <input type="radio" name="test" id="cb21" />
                                                                    <label htmlFor="cb21">
                                                                        <Image width={128} height={128} alt="horeca" src="/images/ordericon.png" className="img-fluid" />
                                                                        <span className="checkbox-label equal-height">Aansprakelijkheid</span>
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-html="true"
                                                                            title="Aansprakelijkheid"
                                                                            className="info-in-risk hide-info-desktop">
                                                                            <i className="fas fa-2x fa-info-circle" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center">
                                                                            <p className="tooltip-text">Aansprakelijkheid</p>
                                                                        </div>
                                                                    </label>
                                                                  </div>
                                                                <div className="col-lg-4 col-sm-6 p-0">
                                                                    <input type="radio" name="test" id="cb21" />
                                                                    <label htmlFor="cb21" className="tooltip-container">
                                                                        <Image width={128} height={128} alt="horeca" src="/images/tools.png" className="img-fluid" />
                                                                        <span className="checkbox-label equal-height">Hulpmateriaal</span>
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-html="true"
                                                                            title="Hulpmateriaal"
                                                                            className="info-in-risk hide-info-desktop">
                                                                            <i className="fas fa-2x fa-info-circle" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center">
                                                                            <p className="tooltip-text">Hulpmateriaal</p>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6 p-0">
                                                                    <input type="radio" name="test" id="cb22" />
                                                                    <label htmlFor="cb22" className="tooltip-container">
                                                                        <Image width={128} height={128} alt="aa" src="/images/helmet.png" className="img-fluid" />
                                                                        <span className="checkbox-label equal-height">Werk</span>
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-html="true"
                                                                            title="Werk"
                                                                            className="info-in-risk hide-info-desktop">
                                                                            <i className="fas fa-2x fa-info-circle" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center">
                                                                            <p className="tooltip-text">Werk</p>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='row justify-content-center'>
                                                                <div className="col-lg-4 col-sm-6 p-0">
                                                                    <input type="radio" name="test" id="cb2d2" />
                                                                    <label htmlFor="cb2d2" className="tooltip-container">
                                                                        <Image width={128} height={128} alt="aa" src="/images/real-estate.png" className="img-fluid" />
                                                                        <span className="checkbox-label">Bestaande bezit</span>
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-html="true"
                                                                            title="Bestaande bezit"
                                                                            className="info-in-risk hide-info-desktop">
                                                                            <i className="fas fa-2x fa-info-circle" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center">
                                                                            <p className="tooltip-text">Bestaande bezit</p>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6 p-0">
                                                                    <input type="radio" name="test" id="cb2d2" />
                                                                    <label htmlFor="cb2d2" className="tooltip-container">
                                                                        <Image width={128} height={128} alt="aa" src="/images/toolbox.png" className="img-fluid" />
                                                                        <span className="checkbox-label">Persoonlijk bezit</span>
                                                                        <a
                                                                            href="javascript:void(0);"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-html="true"
                                                                            title="Persoonlijk bezit"
                                                                            className="info-in-risk hide-info-desktop">
                                                                            <i className="fas fa-2x fa-info-circle" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center">
                                                                            <p className="tooltip-text">Persoonlijk bezit</p>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-2">
                                                        <div className="col-6">
                                                            <label className="form-label labeltitle">Projectduur</label>
                                                        </div>
                                                        <div className="col-6 position-relative">
                                                            <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                                            <div className="infcalcubx only-info-absolute">
                                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                            <label htmlFor="customRange1" className="form-label">
                                                                <div className="cus-num">
                                                                    <span>1 maand</span>
                                                                    <span>12 maanden</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-6">
                                                            <label className="form-label labeltitle">Verzekerd bedrag</label>
                                                        </div>
                                                        <div className="col-6 position-relative">
                                                            <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                                            <div className="infcalcubx only-info-absolute">
                                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                            <label htmlFor="customRange1" className="form-label">
                                                                <div className="cus-num">
                                                                    <span>€0</span>
                                                                    <span>€500.000</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-12 position-relative">
                                                            <select className="form-select" aria-label="Select">
                                                                <option disabled selected>Aanbevolen verzekeringen</option>
                                                                <option value="option1">Option 1</option>
                                                                <option value="option2">Option 2</option>
                                                                <option value="option3">Option 3</option>
                                                            </select>
                                                            <div className="infbx infcalcubx infbx2 overzicht-info-positionfarmhouse">
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
                                                        <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb21" />
                                                            <label htmlFor="cb21" className="tooltip-container">
                                                                <Image
                                                                    width={128}
                                                                    height={128}
                                                                    alt="horeca"
                                                                    src="/images/companyassets.png"
                                                                    className="img-fluid"
                                                                />
                                                                <span className="checkbox-label equal-height">
                                                                    Bedrijfsmiddelen
                                                                </span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Bedrijfsmiddelen"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Bedrijfsmiddelen</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb22" />
                                                            <label htmlFor="cb22" className="tooltip-container">
                                                                <Image
                                                                    width={128}
                                                                    height={128}
                                                                    alt="aa"
                                                                    src="/images/voteicon.png"
                                                                    className="img-fluid"
                                                                />
                                                                <span className="checkbox-label equal-height">
                                                                    Glas
                                                                </span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Glas"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Glas</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb2d2" />
                                                            <label htmlFor="cb2d2" className="tooltip-container">
                                                                <Image
                                                                    width={128}
                                                                    height={128}
                                                                    alt="aa"
                                                                    src="/images/businessdamage.png"
                                                                    className="img-fluid"
                                                                />
                                                                <span className="checkbox-label equal-height">
                                                                    Aansprakelijk
                                                                </span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Aansprakelijk"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Aansprakelijk</p>
                                                                </div>
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
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn price-btn" data-bs-dismiss="modal">Toevoegen</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConstructionAllRiskFrontAdressPopup