import Image from 'next/image'
import React, { useState } from 'react'

import SunAnimation from '../../../../common/SunAnimation'
import BusinesTripCommercialFormright from '../CommercialBusinessTrip/CommercialBusinessTripStep1/BusinesTripCommercialFormright'
import SameHeightDiv from '../../../../common/SameHeightDiv'


const EventCommercialStepFrom = ({ setShowStepper, showStepper, setCount, showCompactContent, setShowCompactContent, setSecondFormPart, secondFormPart }) => {
    const [showExtendedForm, setShowExtendedForm] = useState(0)
    const className = 'event-wrp'
    const handleSecondStep = () => {
        setShowStepper(true)
        setCount(1)
    }

    const handleCompactLinkClick = () => {
        setShowCompactContent(true);
        setShowExtendedContent(false);
    };

    const handleExtendedLinkClick = () => {
        setShowCompactContent(false);
        setShowExtendedContent(true);
    };
    const handelSecondSection = () => {
        setSecondFormPart(!secondFormPart)
    }
    console.log(secondFormPart);

    return (
        <>
            <div className="eventwrp">
                <SunAnimation className={className} />
                <SameHeightDiv />
                <div className="container eventwrp-commercial">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className='col-lg-6 eventbxleft'>
                                    <div className="titlecybersecurity">
                                        <h2 className='m-0'>
                                            <Image src="/images/calendar-2.png" width={128} height={128} alt='internettv' className="img-fluid me-2" />
                                            Evenementen
                                        </h2>
                                    </div>
                                    <div className='row'>
                                        <div className="col-9 mt-4">
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
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <select className="form-select" id="exampleSelect" aria-label="Select an option">
                                                        <option disabled selected>Zaal</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                        <option value="4">Option 4</option>
                                                        <option value="5">Option 5</option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-6 position-relative'>
                                                    <select className="form-select" id="exampleSelect" aria-label="Select an option">
                                                        <option disabled selected>Cateraar</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                        <option value="4">Option 4</option>
                                                        <option value="5">Option 5</option>
                                                    </select>
                                                    <div className="infbx only-info-absolute infbx2">
                                                        <a href="javascript:void(0);" className='text-center' data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here"
                                                            data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle d-block" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-3'>
                                                <div className='col-lg-12 text-center'>
                                                    <lable className='form-label fw-medium labletitle'>Verwachte evenementen datum</lable>
                                                </div>
                                            </div>
                                            <div className='row position-relative'>
                                                <div className='col-lg-12'>
                                                    <input type='date' className='form-control' />
                                                    <div className="infcalcubx infbx only-infoNextra-absolute-glass">
                                                        <ul className="list-unstyle">
                                                            <li>
                                                                <a href="javascript:void(0);" className='text-center' data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                                    <i className="fas fa-2x fa-info-circle d-block" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className='text-center' href='javascript:void(0);'>
                                                                    <Image src='/images/calendar-4.png' alt='calendar' className='img-fluid' width='35' height='35' />
                                                                    <span className='fw-medium d-block'>Extra?</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-12 text-center'>
                                                    <label className='form-label labeltitle'>Feestgrootte</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label className="form-label labeltitle">Aantal Personen</label>
                                                </div>
                                                <div className="col-lg-6 position-relative">
                                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} defaultValue={1} />
                                                    <div className="infbx only-info-absolute infbx2">
                                                        <a href="javascript:void(0);" className='text-center' data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here"
                                                            data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle d-block" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                                    <label htmlFor="customRange1" className="form-label">
                                                        <div className='cus-num'>
                                                            <span>€1</span>
                                                            <span>€200</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <select className="form-select" id="exampleSelect" aria-label="Select an option">
                                                        <option disabled selected>Soort evenement</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                        <option value="4">Option 4</option>
                                                        <option value="5">Option 5</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col px-4 radiobx">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb21" onClick={() => setSecondFormPart(false)} />
                                                            <label htmlFor="cb21" className="tooltip-container">
                                                                <Image src='/images/workshops.png' width={128} height={128} alt='workshops' />
                                                                <span className="checkbox-label equal-height">Workshops</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Workshops"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Workshops</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb22" onClick={() => setSecondFormPart(false)} />
                                                            <label htmlFor="cb22" className="tooltip-container">
                                                                <Image src='/images/vip.png' width={128} height={128} alt='vip' />
                                                                <span className="checkbox-label equal-height">Bedrijfsfeest</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Bedrijfsfeest"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Bedrijfsfeest</p>
                                                                </div>
                                                            </label>
                                                        </div>

                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4" >
                                                            <input type="radio" name="test" id="cb226" onClick={handelSecondSection} />
                                                            <label htmlFor="cb226" className="tooltip-container">
                                                                <Image src='/images/suitcase.png' width={128} height={128} alt='vip' />
                                                                <span className="checkbox-label equal-height">Zakenreis</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Zakenreis"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Zakenreis</p>
                                                                </div>
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-12 text-center'>
                                                    <label className='form-label labeltitle'>Branche</label>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col px-4 radiobx">
                                                    <div className="row">
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb21" />
                                                            <label htmlFor="cb21" className="tooltip-container">
                                                                <Image src="/images/restaurant-2.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Horeca</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Horeca"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Horeca</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb22" />
                                                            <label htmlFor="cb22" className="tooltip-container">
                                                                <Image src="/images/store.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Detailhandel</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Detailhandel"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Detailhandel</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb23" />
                                                            <label htmlFor="cb23" className="tooltip-container">
                                                                <Image src="/images/Industrie.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Industrie</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Industrie"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Industrie</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-3">
                                                            <input type="radio" name="test" id="cb24" />
                                                            <label htmlFor="cb24" className="tooltip-container">
                                                                <Image src="/images/smart-farm.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Agrosector</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Agrosector"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Agrosector</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {showExtendedForm == 0 &&
                                                <div className="row mt-4 mb-4 ">
                                                    <div className="col-lg-12">
                                                        <div className="rangebtn">
                                                            <button className="seenowbtn" onClick={handleSecondStep}>Bekijk jouw voordeel</button>
                                                            <a className="help-estimat" onClick={() => setShowExtendedForm(1)}>Huip nodig bij het schatten?</a>
                                                        </div>
                                                        <a href="javascript:void(0);" className="cyberprivacylink"><i className="fas fa-2x fa-shield-alt" /><span>Privacy</span></a>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>

                                {showExtendedForm == 1 &&
                                    <>
                                        {!secondFormPart &&
                                            <div className='col-lg-6 eventbxright'>

                                                <div className='row'>
                                                    <div className='col-9'>
                                                        <div className="row">
                                                            <div className="col-lg-8 col-7">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <label className="form-label labeltitle">
                                                                            <Image width={200} height={200} alt="aa" src="/images/serve-dinner.png" />Catering
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <label className="form-label labeltitle">Budget</label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="number" className="form-control" id="numberInput6" min={1} defaultValue={1} />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <input type="range" className="form-range" id="customRange6" min={1} max={30000} defaultValue={1} />
                                                                        <label htmlFor="customRange6" className="form-label">
                                                                            <div className='cus-num'>
                                                                                <span>€1</span>
                                                                                <span>€ 3,000</span>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-5">
                                                                <div className="infcalcubx">
                                                                    <ul className="list-unstyled list-flex">
                                                                        <li>
                                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                                                                <i className="fas fa-2x fa-info-circle" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a data-bs-toggle="modal" href="#quantityModalToggle" role="button" className="calculatorwrp">
                                                                                <i className="fas fa-calculator" />
                                                                                <span>Hulp nodig?</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                                <label className="form-check-label d-block" htmlFor="flexCheckDefault">
                                                                                    Toevoegen
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* Model Start */}
                                                            <div className="modal quantityModal fade" id="quantityModalToggle" aria-hidden="true" aria-labelledby="quantityModalToggleLabel" tabIndex={-1}>
                                                                <div className="modal-dialog modal-dialog-centered">
                                                                    <div className="modal-content">
                                                                        <div className="modal-body">
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                                                <i className="fas fa-times" />
                                                                            </button>
                                                                            <div className="selectquantity">
                                                                                <div className="quantitybxtitle">
                                                                                    <ul>
                                                                                        <li><Image width={200} height={200} alt="aa" src="/images/serve-dinner.png" /></li>
                                                                                        <li><h2>Selecteer of vul in</h2></li>
                                                                                        <li><i className="fas fa-2x fa-calculator" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/dish.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Gangen</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb11" />
                                                                                                <label htmlFor="cb11">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/soup.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Voorgerecht</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb12" />
                                                                                                <label htmlFor="cb12">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/dish.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Hoofdgerecht</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb13" />
                                                                                                <label htmlFor="cb13">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/ice-cream.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Dessert</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/cutlery.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Gerechten</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb14" />
                                                                                                <label htmlFor="cb14">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/soup.png" className="img-fluid" />
                                                                                                </label>
                                                                                                <select className="form-select" id="voorgerecht">
                                                                                                    <option value disabled selected>voorgerecht</option>
                                                                                                    <option value="optie1">Optie 1</option>
                                                                                                    <option value="optie2">Optie 2</option>
                                                                                                    <option value="optie3">Optie 3</option>
                                                                                                    {/* Add more options as needed */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb15" />
                                                                                                <label htmlFor="cb15">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/dish.png" className="img-fluid" />
                                                                                                </label>
                                                                                                <select className="form-select" id="voorgerecht">
                                                                                                    <option value disabled selected>Hoofdgerecht</option>
                                                                                                    <option value="optie1">Optie 1</option>
                                                                                                    <option value="optie2">Optie 2</option>
                                                                                                    <option value="optie3">Optie 3</option>
                                                                                                    {/* Add more options as needed */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb16" />
                                                                                                <label htmlFor="cb16">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/ice-cream.png" className="img-fluid" />
                                                                                                </label>
                                                                                                <select className="form-select" id="voorgerecht">
                                                                                                    <option value disabled selected>Dessert</option>
                                                                                                    <option value="optie1">Optie 1</option>
                                                                                                    <option value="optie2">Optie 2</option>
                                                                                                    <option value="optie3">Optie 3</option>
                                                                                                    {/* Add more options as needed */}
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/waitress.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Service</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb17" />
                                                                                                <label htmlFor="cb17">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/waitress.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Tafelbediende</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cb18" />
                                                                                                <label htmlFor="cb18">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/buffet.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Lopendbuffet</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="popupbtn">
                                                                                        <p>Catering budget: <span>€ 3.000</span></p>
                                                                                        <div className="row">
                                                                                            <div className="col-12 text-center  ">
                                                                                                <button className="btnps">Opslaan</button>
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
                                                            {/* Model End */}
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8 col-7">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <label className="form-label labeltitle"><Image width={200} height={200} alt="aa" src="/images/confetti.png" />Decoratie</label>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <label className="form-label labeltitle">Budget</label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="number" className="form-control" id="numberInput6" min={1} defaultValue={1} />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <input type="range" className="form-range" id="customRange6" min={1} max={30000} defaultValue={1} />
                                                                        <label htmlFor="customRange6" className="form-label">
                                                                            <div className='cus-num'>
                                                                                <span>€1</span>
                                                                                <span>€ 3,000</span>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-5">
                                                                <div className="infcalcubx">
                                                                    <ul className="list-unstyled">
                                                                        <li>
                                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                                                                <i className="fas fa-2x fa-info-circle" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a data-bs-toggle="modal" href="#decorationModalToggle" role="button" className="calculatorwrp">
                                                                                <i className="fas fa-calculator" />
                                                                                <span>Hulp nodig?</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                                <label className="form-check-label d-block" htmlFor="flexCheckDefault">
                                                                                    Toevoegen
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* Model Start */}
                                                            <div className="modal decorationModal fade" id="decorationModalToggle" aria-hidden="true" aria-labelledby="decorationModalToggleLabel" tabIndex={-1}>
                                                                <div className="modal-dialog modal-dialog-centered">
                                                                    <div className="modal-content">
                                                                        <div className="modal-body">
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                                                <i className="fas fa-times" />
                                                                            </button>
                                                                            <div className="selectquantity">
                                                                                <div className="quantitybxtitle">
                                                                                    <ul>
                                                                                        <li><Image width={200} height={200} alt="aa" src="/images/decoration.png" /></li>
                                                                                        <li><h2>Selecteer of vul in</h2></li>
                                                                                        <li><i className="fas fa-2x fa-calculator" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/roomdecoration.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Decoraties</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="checkbox" name="test" id="cbs11" />
                                                                                                <label htmlFor="cbs11">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/weddingsofa.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Bruidsbank</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="checkbox" name="test" id="cbs12" />
                                                                                                <label htmlFor="cbs12">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/tabledecoration.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Tafeldecoratie</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="checkbox" name="test" id="cbs13" />
                                                                                                <label htmlFor="cbs13">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/roomdecoration.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Zaalversiering</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/manicure.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Stylisten</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs14" />
                                                                                                <label htmlFor="cbs14">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/hairstylists.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Haarstylisten</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs15" />
                                                                                                <label htmlFor="cbs15">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/make-upartists.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Visagisten</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs16" />
                                                                                                <label htmlFor="cbs16">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/manicure.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Manicure</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/location.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Service</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs17" />
                                                                                                <label htmlFor="cbs17">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/location.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Op locatie</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs18" />
                                                                                                <label htmlFor="cbs18">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/visitingaddress.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Bezoekadres</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs19" />
                                                                                                <label htmlFor="cbs19">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/gift.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Giftbox</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="popupbtn">
                                                                                        <p>Catering budget: <span>€ 3.000</span></p>
                                                                                        <div className="row">
                                                                                            <div className="col-12 text-center  ">
                                                                                                <button className="btnps">Opslaan</button>
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
                                                            {/* Model End */}
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8 col-7">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <label className="form-label labeltitle"><Image width={200} height={200} alt="aa" src="/images/music.png" />Entertainment</label>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <label className="form-label labeltitle">Budget</label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="number" className="form-control" id="numberInput6" min={1} defaultValue={1} />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <input type="range" className="form-range" id="customRange6" min={1} max={30000} defaultValue={1} />
                                                                        <label htmlFor="customRange6" className="form-label">
                                                                            <div className='cus-num'>
                                                                                <span>€1</span>
                                                                                <span>€ 3,000</span>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-5">
                                                                <div className="infcalcubx">
                                                                    <ul className="list-unstyled">
                                                                        <li>
                                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                                                                <i className="fas fa-2x fa-info-circle" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a data-bs-toggle="modal" href="#muziekModalToggle" role="button" className="calculatorwrp">
                                                                                <i className="fas fa-calculator" />
                                                                                <span>Hulp nodig?</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                                <label className="form-check-label d-block" htmlFor="flexCheckDefault">
                                                                                    Toevoegen
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* Model Start */}
                                                            <div className="modal muziekModal fade" id="muziekModalToggle" aria-hidden="true" aria-labelledby="muziekToggleLabel" tabIndex={-1}>
                                                                <div className="modal-dialog modal-dialog-centered">
                                                                    <div className="modal-content">
                                                                        <div className="modal-body">
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                                                <i className="fas fa-times" />
                                                                            </button>
                                                                            <div className="selectquantity">
                                                                                <div className="quantitybxtitle">
                                                                                    <ul>
                                                                                        <li><Image width={200} height={200} alt="aa" src="/images/decoration.png" /></li>
                                                                                        <li><h2>Selecteer of vul in</h2></li>
                                                                                        <li><i className="fas fa-2x fa-calculator" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/music.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Muziek</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cba11" />
                                                                                                <label htmlFor="cba11">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/liveband.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Live band</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cba12" />
                                                                                                <label htmlFor="cba12">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/dj.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">DJ</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cba13" />
                                                                                                <label htmlFor="cba13">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/djnlive.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Beide</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row my-2">
                                                                                    <div className="col-lg-6">
                                                                                        <Image width={52} height={52} alt="aa" src="/images/video-player.png" className="img-fluid" />
                                                                                        <label className="form-label fw-bold">Voorkeur Genre</label>
                                                                                    </div>
                                                                                    <div className="col-lg-6">
                                                                                        <select className="form-select" aria-label="Select">
                                                                                            <option selected>Genre Select</option>
                                                                                            <option value="option1">Option 1</option>
                                                                                            <option value="option2">Option 2</option>
                                                                                            <option value="option3">Option 3</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12">
                                                                                        <ul className="subtitleqyt">
                                                                                            <li><Image width={200} height={200} alt="aa" src="/images/poto.png" className="img-fluid" /></li>
                                                                                            <li>
                                                                                                <h5>Foto-Videograaf</h5>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-12 radiobx">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs14" />
                                                                                                <label htmlFor="cbs14">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/poto.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Fotos</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs15" />
                                                                                                <label htmlFor="cbs15">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/filmen.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Filmen</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="radio" name="test" id="cbs16" />
                                                                                                <label htmlFor="cbs16">
                                                                                                    <Image width={200} height={200} alt="aa" src="/images/videophoto.png" className="img-fluid" />
                                                                                                    <span className="checkbox-label">Beide</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12 text-center mt-2">
                                                                                        <label className="form-label fw-bold">Tijdsduur</label>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <label className="form-label labeltitle" htmlFor="numberInput5">Aantal uren</label>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <input type="number" className="form-control" id="numberInput5" min={1} defaultValue={1} />
                                                                                    </div>
                                                                                    <div className="col-12">
                                                                                        <input type="range" className="form-range" id="customRange5" min={1} max={10000} defaultValue={1} />
                                                                                        <label htmlFor="customRange5" className="form-label"><span id="rangeValue5">1</span> OF 8uur</label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="popupbtn">
                                                                                        <p>Muziek &amp; Foto-Videograaf budget: <span>€ 3.000</span></p>
                                                                                        <div className="row">
                                                                                            <div className="col-12 text-center  ">
                                                                                                <button className="btnps">Opslaan</button>
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
                                                            {/* Model End */}
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8 col-7 position-relative">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <label className="form-label labeltitle"><i className="fas fa-2x fa-calculator" /> Budget</label>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <label className="form-label labeltitle">Totaal budget</label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="number" className="form-control" id="numberInput6" min={1} defaultValue={1} />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <input type="range" className="form-range" id="customRange6" min={1} max={30000} defaultValue={1} />
                                                                        <label htmlFor="customRange6" className="form-label">
                                                                            <div className='cus-num'>
                                                                                <span>€1</span>
                                                                                <span>€ 3,000</span>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="infcalcubx overzicht-info-positionfarmhouse">
                                                                    <ul className="list-unstyled">
                                                                        <li>
                                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                                                                <i className="fas fa-2x fa-info-circle" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#moreviewmodel"><Image width={60} height={60} alt="aa" src="/images/viewpop.png" /><span>Overzicht?</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div
                                                                    className="modal fade"
                                                                    id="moreviewmodel"
                                                                    tabIndex={-1}
                                                                    aria-labelledby="moreviewmodelLabel"
                                                                    aria-hidden="true">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div>
                                                                                <div className="modal-header">
                                                                                    <h1 className="modal-title fs-5" id="moreviewmodelLabel">
                                                                                        Stap voor stap meer vergelijken
                                                                                    </h1>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn-close"
                                                                                        data-bs-dismiss="modal"
                                                                                        aria-label="Close"
                                                                                    />
                                                                                </div>
                                                                                <div className="modal-body addmorepopup">
                                                                                    <ul className="list-unstyled checkbox-wrapper-16">
                                                                                        <li>
                                                                                            <div className="row">
                                                                                                <div className="col-4">
                                                                                                    <Image
                                                                                                        width={200}
                                                                                                        height={200}
                                                                                                        alt="aa"
                                                                                                        src="/images/icon1.png"
                                                                                                        className="img-fluid"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="col-4 text-center">
                                                                                                    <span>Woonverzekering</span>
                                                                                                </div>
                                                                                                <div className="col-4 text-end">
                                                                                                    <label className="checkbox-wrapper">
                                                                                                        <input type="checkbox" className="checkbox-input" />
                                                                                                        <span className="checkbox-tile">
                                                                                                            <span className="checkbox-icon">
                                                                                                                <Image
                                                                                                                    width={200}
                                                                                                                    height={200}
                                                                                                                    alt="aa"
                                                                                                                    src="/images/compairadd.png"
                                                                                                                    className="img-fluid"
                                                                                                                />
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
                                                                                                    <Image
                                                                                                        width={200}
                                                                                                        height={200}
                                                                                                        alt="aa"
                                                                                                        src="/images/icon2.png"
                                                                                                        className="img-fluid"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="col-4 text-center">
                                                                                                    <span>Rechtsbijstand</span>
                                                                                                </div>
                                                                                                <div className="col-4 text-end">
                                                                                                    <label className="checkbox-wrapper">
                                                                                                        <input type="checkbox" className="checkbox-input" />
                                                                                                        <span className="checkbox-tile">
                                                                                                            <span className="checkbox-icon">
                                                                                                                <Image
                                                                                                                    width={200}
                                                                                                                    height={200}
                                                                                                                    alt="aa"
                                                                                                                    src="/images/compairadd.png"
                                                                                                                    className="img-fluid"
                                                                                                                />
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
                                                                                                    <Image
                                                                                                        width={200}
                                                                                                        height={200}
                                                                                                        alt="aa"
                                                                                                        src="/images/icon3.png"
                                                                                                        className="img-fluid"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="col-4 text-center">
                                                                                                    <span>Leningen</span>
                                                                                                </div>
                                                                                                <div className="col-4 text-end">
                                                                                                    <label className="checkbox-wrapper">
                                                                                                        <input type="checkbox" className="checkbox-input" />
                                                                                                        <span className="checkbox-tile">
                                                                                                            <span className="checkbox-icon">
                                                                                                                <Image
                                                                                                                    width={200}
                                                                                                                    height={200}
                                                                                                                    alt="aa"
                                                                                                                    src="/images/compairadd.png"
                                                                                                                    className="img-fluid"
                                                                                                                />
                                                                                                            </span>
                                                                                                            <span className="checkbox-label" />
                                                                                                        </span>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="popupbtn">
                                                                                        <div className="row">
                                                                                            <div className="col-8">
                                                                                                <p className='m-0 mt-2'>Total Budget € 5.000   </p>
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
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="rangebtn">
                                                                    <button className="seenowbtn" onClick={handleSecondStep}>Bekijk jouw voordeel</button>
                                                                    {!showCompactContent && (
                                                                        <a href='javascript:void(0);' className='text-warning fw-bold d-block' onClick={handleCompactLinkClick}>Toch snel vergelijken?</a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                <a href="javascript:void(0);" className="cyberprivacylink"><i className="fas fa-2x fa-shield-alt" /><span>Privacy</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {secondFormPart &&
                                            <BusinesTripCommercialFormright setCount={setCount} />
                                        }
                                    </>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCommercialStepFrom