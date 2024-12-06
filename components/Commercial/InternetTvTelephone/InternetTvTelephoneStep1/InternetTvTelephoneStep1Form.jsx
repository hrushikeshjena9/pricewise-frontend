import Image from 'next/image'
import React, { useState } from 'react'
import SameHeightDiv from '../../../common/SameHeightDiv'
import SunAnimation from '../../../common/SunAnimation'

const InternetTvTelephoneStep1Form = ({setShowStepper,showStepper,setCount}) => {
     const className = 'cyber-securi'
    const [showExtendedForm, setShowExtendedForm] = useState(0)
    const handleSecondStep = () => {
        setShowStepper(true)
        setCount(1)
    }
    return (
        <>
            <div className="eventwrp">
                <SameHeightDiv/>
                <SunAnimation className={className} />
                <div className="container">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 eventbxleft">
                                    <div className="titlecybersecurity">
                                        <h2>
                                            <Image src="/images/internettv.png" width={131} height={101} alt='internettv' className="img-fluid" />
                                            Internet Tv Telefonie
                                        </h2>
                                    </div>
                                <div className='row'>
                                    <div className='col-9'>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <input type="text" className="form-control " id="input1" placeholder="Postcode" />
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="text" className="form-control " id="input2" placeholder="Huisnummer" />
                                            </div>
                                            <div className="col-lg-4 position-relative">
                                            <input type="text" className="form-control " id="input3" placeholder="Address" />
                                            <div className="infcalcubx c-energic-adr">
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here"
                                                    data-bs-original-title="Content Goes Here" className='text-center'>
                                                    <i className="fas fa-2x fa-map-marker-alt d-block"></i>
                                                    <span className='d-block'>Adress</span>
                                                </a>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label className="form-label labeltitle">Bedrijfsgrootte</label>
                                            </div>
                                            <div className="col-lg-6 position-relative">
                                                <input type="number" className="form-control mb-0" id="numberInput5" min={1} defaultValue={1} />
                                                <div className="infcalcubx info-pos">
                                                    <a href="javascript:void(0);" className='text-center' data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here"
                                                        data-bs-original-title="Content Goes Here">
                                                        <i className="fas fa-2x fa-info-circle d-block" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col px-4 radiobx">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb21" />
                                                            <label htmlFor="cb21" className='tooltip-container' >
                                                                <i className="fas text-success fa-2x fa-user"></i>
                                                                <span className="checkbox-label">ZZP er (1-5)</span>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">ZZP er (1-5)</p>
                                                                </div>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="ZZP er (1-5)"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                            </label>
                                                        </div>
                                                    <div className="col-lg-3  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb22" />
                                                            <label htmlFor="cb22" className='tooltip-container'>
                                                                <i className="fas text-warning fa-2x fa-user"></i>
                                                                <span className="checkbox-label">MKB (1-250)</span>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">MKB (1-250)</p>
                                                                </div>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="MKB (1-250)"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-lg-12 position-relative'>
                                                <select className="form-select" id="exampleSelect" aria-label="Select an option">
                                                    <option disabled selected>Pand/Sector...</option>
                                                    <option value="1">Option 1</option>
                                                    <option value="2">Option 2</option>
                                                    <option value="3">Option 3</option>
                                                    <option value="4">Option 4</option>
                                                    <option value="5">Option 5</option>
                                                </select>
                                                <div className="infcalcubx info-pos">
                                                    <a href="javascript:void(0);" className='text-center'
                                                        data-bs-toggle="tooltip" data-bs-html="true"
                                                        aria-label="Content Goes Here"
                                                        data-bs-original-title="Content Goes Here">
                                                        <i className="fas fa-2x fa-info-circle d-block" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col px-4 radiobx">
                                                <div className="row">
                                                        <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                            <input type="radio" name="test" id="cb21" />
                                                            <label htmlFor="cb21" className='tooltip-container'>
                                                                <Image src="/images/home-office-3.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Bedrijf aan huis</span>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Bedrijf aan huis</p>
                                                                </div>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Bedrijf aan huis"
                                                                    className="info-in-risk hide-info-desktop">
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                            </label>
                                                        </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb22" />
                                                            <label htmlFor="cb22"  className='tooltip-container'>
                                                                <Image src="/images/working.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Flexplek</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Flexplek"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Flexplek</p>
                                                                </div>
                                                            </label>
                                                    </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb24" />
                                                            <label htmlFor="cb24" className='tooltip-container'>
                                                                <Image src="/images/meeting-room.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                                <span className="checkbox-label equal-height">Bedrijfshall</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Bedrijfshall"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Bedrijfshall</p>
                                                                </div>
                                                            </label>
                                                    </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb24" />
                                                        <label htmlFor="cb24" className='tooltip-container'>
                                                            <Image src="/images/office.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                            <span className="checkbox-label equal-height">Kantoorgebouw</span>
                                                            <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Kantoorgebouw"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Kantoorgebouw</p>
                                                                </div>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb24" />
                                                        <label htmlFor="cb24" className='tooltip-container'>
                                                            <Image src="/images/agrosector.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                            <span className="checkbox-label equal-height">Horeca</span>
                                                            <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Horeca"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Horeca</p>
                                                                </div>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb24" />
                                                        <label htmlFor="cb24" className='tooltip-container'>
                                                            <Image src="/images/store.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                            <span className="checkbox-label equal-height">Detailhandel</span>
                                                            <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Detailhandel"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Detailhandel</p>
                                                                </div>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb24" />
                                                        <label htmlFor="cb24" className='tooltip-container'>
                                                            <Image src="/images/industry.jpg" width={128} height={128} alt='internettv' className="img-fluid" />
                                                            <span className="checkbox-label equal-height">Industrie</span>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Industrie"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
                                                                    <i className="fas fa-2x fa-info-circle" />
                                                                </a>
                                                                <div className="d-flex justify-content-center">
                                                                    <p className="tooltip-text">Industrie</p>
                                                                </div>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                                        <input type="radio" name="test" id="cb24" />
                                                        <label htmlFor="cb24" className='tooltip-container'>
                                                            <Image src="/images/smart-farm.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                                            <span className="checkbox-label equal-height">Agrosector</span>
                                                            <a
                                                                    href="javascript:void(0);"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Agrosector"
                                                                    className="info-in-risk hide-info-desktop"
                                                                >
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
                                        <div className="row mt-4">
                                            <div className="col-12 position-relative">
                                                <select className="form-select" aria-label="Select">
                                                    <option disabled selected>Koppelkorting</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                                <div className="infcalcubx info-pos">
                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                        <i className="fas fa-2x fa-info-circle" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <select className="form-select" aria-label="Select">
                                                    <option disabled selected>Huidige provider</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
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
                                {showExtendedForm == 1 &&
                                <div className="col-lg-6 eventbxright checkbox-align">
                                    <div className='row'>
                                        <div className='col-9'>
                                    <div className="row">
                                        <div className="col-12 position-relative">
                                            <label className="form-label labeltitle">
                                                <i className="fas  fa-globe" /> Internet</label>
                                            <div className="infcalcubx info-pos">
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                    <i className="fas fa-2x fa-info-circle" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 pb-2">
                                            <div className="form-check form-check-inline p-0">
                                                <input className="form-check-input" type="radio" name="internetType" id="internetTypeGlasvezel" defaultValue="Glasvezel" />
                                                <label className="form-check-label ps-2 pt-1" htmlFor="internetTypeGlasvezel">Glasvezel</label>
                                            </div>
                                            <div className="form-check form-check-inline p-0">
                                                <input className="form-check-input" type="radio" name="internetType" id="internetTypeKabel" defaultValue="Kabel" />
                                                <label className="form-check-label ps-2 pt-1" htmlFor="internetTypeKabel">Kabel</label>
                                            </div>
                                        </div>
                                        <div className="col-12 pb-2">
                                            <div className="form-check form-check-inline p-0">
                                                <input className="form-check-input" type="radio" name="internetType" id="internetTypeADSLVDSL" defaultValue="ADSL/VDSL" />
                                                <label className="form-check-label ps-2 pt-1" htmlFor="internetTypeADSLVDSL">ADSL/VDSL</label>
                                            </div>
                                            <div className="form-check form-check-inline p-0">
                                                <input className="form-check-input" type="radio" name="internetType" id="internetTypeWIFIBooster" defaultValue="WIFI Booster" />
                                                <label className="form-check-label ps-2 pt-1" htmlFor="internetTypeWIFIBooster">WIFI Booster</label>
                                            </div>
                                        </div>
                                   </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <label className="form-label labeltitle">
                                            <i className="fas fa-tv"></i> Televisie
                                        </label>
                                        </div>
                                        <div className="col-lg-6 position-relative">
                                            <input type="number" className="form-control mb-0" id="numberInput5" min={1} defaultValue={1} />
                                            <div className="infcalcubx for-nvt-check">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input me-2" type="checkbox" name="options" id="option1" defaultValue="option1" />
                                                            <label className="form-check-label" htmlFor="option1">
                                                                n.v.t
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 py-2">
                                                        <div className="form-check form-check-inline p-0">
                                                            <input className="form-check-input" type="radio" name="internetType" id="sport" defaultValue="Glasvezel" />
                                                            <label className="form-check-label ps-2 pt-1" htmlFor="sport">Sport</label>
                                                        </div>
                                                        <div className="form-check form-check-inline p-0">
                                                            <input className="form-check-input" type="radio" name="internetType" id="films" defaultValue="Kabel" />
                                                            <label className="form-check-label ps-2 pt-1" htmlFor="films">Films</label>
                                                        </div>
                                                        <div className="form-check form-check-inline p-0">
                                                            <input className="form-check-input" type="radio" name="internetType" id="kinderen" defaultValue="ADSL/VDSL" />
                                                            <label className="form-check-label ps-2 pt-1" htmlFor="kinderen">Kinderen</label>
                                                        </div>
                                                        <div className="form-check form-check-inline p-0">
                                                            <input className="form-check-input" type="radio" name="internetType" id="erotiek" defaultValue="WIFI Booster" />
                                                            <label className="form-check-label ps-2 pt-1" htmlFor="erotiek">Erotiek</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="row">
                                        <div className="col-lg-6">
                                            <label className="form-label labeltitle">
                                            <i className="fas  fa-phone-alt"> </i> Vaste telefonie</label>
                                        </div>
                                        <div className="col-lg-6 position-relative">
                                            <input type="number" className="form-control mb-0" id="numberInput5" min={1} defaultValue={1} />
                                            <div className="infcalcubx for-nvt-check">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                            <i className="fas fa-2x fa-info-circle" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input me-2" type="checkbox" name="options" id="option1" defaultValue="option1" />
                                                            <label className="form-check-label" htmlFor="option1">
                                                                n.v.t
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6">
                                            <label className="form-label labeltitle">Budget</label>
                                        </div>
                                        <div className="col-6">
                                            <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                        </div>
                                        <div className="col-12">
                                            <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                                            <label htmlFor="customRange1" className="form-label">
                                                <div className="cus-num">
                                                    <span>€1</span>
                                                    <span>€200</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <select className='form-select'>
                                                <option>Voorkeur Provider</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <div className="rangebtn">
                                                <button className="seenowbtn" onClick={handleSecondStep}>Bekijk jouw voordeel</button>
                                                 <a className="help-estimat" onClick={() => setShowExtendedForm(0)}>Toch snel vergelijken?</a>
                                            </div>
                                            <a href="javascript:void(0);" className="cyberprivacylink"><i className="fas fa-2x fa-shield-alt" /><span>Privacy</span></a>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InternetTvTelephoneStep1Form