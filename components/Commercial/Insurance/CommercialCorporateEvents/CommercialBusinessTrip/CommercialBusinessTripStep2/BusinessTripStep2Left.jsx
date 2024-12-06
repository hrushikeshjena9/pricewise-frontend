import Image from 'next/image'
import React from 'react'
import MailModal from '../../../../../CommonModals/MailModal'

const BusinessTripStep2Left = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="yourdetailsbox">
                    <h5>Jouw gegevens:</h5>
                    <ul className="infodetails">
                        <li>
                            Vergelijking:
                            <span></span>
                        </li>
                        <li>
                            Postcode:
                            <span />
                        </li>
                        <li>
                            Huisnummer:
                            <span />
                        </li>
                        <li>
                            Verwachte datum:
                            <span></span>
                        </li>
                        <li>
                            Feestgrootte:
                            <span></span>
                        </li>
                        <li>
                             Branche:
                            <span></span>
                        </li>
                    </ul>
                    <div className="yourdetailedit">
                        <div className="row">
                            <div className="col-lg-6">
                                <a href="javascript:void(0);"><i className="fas fa-cog" /> Wijzig</a>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Image width={200} height={200} alt="aa" src="/images/add-location-point.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                    <li>
                                        <Image width={200} height={200} alt="aa" src="/images/calendar-4.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                    <li>
                                        <Image width={200} height={200} alt="aa" src="/images/viewpop.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='support'>
                    <div className='row mb-1'>
                        <div className='col-10'>
                            <select className="form-select">
                                <option selected>Soort evenement</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="radio" defaultValue id="Glasvezel" />
                                <label className="form-check-label" htmlFor="Glasvezel">
                                    Workshop (..)
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="radio" defaultValue id="Glasvezel" />
                                <label className="form-check-label" htmlFor="Glasvezel">
                                    Bedrijfsfeest (..)
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="radio" defaultValue id="Glasvezel" />
                                <label className="form-check-label" htmlFor="Glasvezel">
                                    Zakenreis (..)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='support'>
                    <div className='row'>
                        <div className='col-10 text-center'>
                            <label className='form-label labeltitle fw-medium'>Feestgrootte</label>
                        </div>
                        <div className='col-lg-2'>
                            <div className="infbx infbx2">
                                <a href="javascript:void(0);" className='text-center' data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here"
                                    data-bs-original-title="Content Goes Here">
                                    <i className="fas fa-2x green-cyan fa-info-circle d-block" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='support'>
                    <div className="row">
                        <div className="col-7">
                            <label className="form-label labeltitle"> Aantal personen</label>
                        </div>
                        <div className="col-3">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-10">
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            <label htmlFor="customRange3" className="form-label"><span id="rangeValue3">€ 1</span> OF € 10,000</label>
                        </div>
                    </div>
                    




                    <div className="row mt-4">
                    <div className="col-10">
                        <input className='form-control' type='text' placeholder='Bestemming' />
                    </div>
                    <div className="col-2">
                        <div className="infbx infcalcubx infbx2">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-10'>
                        <div className="row">
                            <div className="col-auto">
                                <label htmlFor="inputPlaats" className="col-form-label"><i className="fas green-cyan fa-2x fa-map-marker-alt"></i> Van:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" id="inputPlaats" placeholder="plaats" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-auto ">
                                <label htmlFor="inputPlaats" className="col-form-label"><i className="fas green-cyan fa-2x fa-map-marker-alt"></i> Naar:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" id="inputPlaats" placeholder="plaats" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-10'>
                        <select className="form-select" id="exampleSelect" aria-label="Select an option">
                            <option disabled selected>Vervoer</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                            <option value="5">Option 5</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <div className="infcalcubx">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='support'>
                    <div className='row mt-2'>
                        <div className='col-lg-10'>
                            <div className="row">
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="d" defaultValue="true" />
                                    <label className="form-check-label" htmlFor="d">Vliegtuig (..)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="d" defaultValue="true" />
                                    <label className="form-check-label" htmlFor="d">Toerbus (..)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="d" defaultValue="true" />
                                    <label className="form-check-label" htmlFor="d">Taxi (..)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="row">
                    <div className='col-lg-10 text-center'>
                        <label className='form-label labeltitle'><i className="far green-cyan fa-clock"></i> Datum</label>
                    </div>
                    <div className='col-lg-2'>
                        <div className="infcalcubx">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className='col-lg-10'>
                        <div className="row mt-2">
                            <div className="col-2 ">
                                <label htmlFor="d" className="col-form-label">Van:</label>
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" id="d" />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col-2 ">
                                <label htmlFor="d" className="col-form-label">Tot:</label>
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" id="d" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-2'>
                    <div className='col-lg-10 text-center'>
                        <lable className='form-label labeltitle d-inline-block'><i className="fas green-cyan  fa-calculator"></i> Budget</lable>
                    </div>
                    <div className='col-lg-2'>
                        <div className="infcalcubx">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="row mt-2">
                    <div className="col-5">
                        <label className="form-label labeltitle">
                        Totaal budget
                        </label>
                    </div>
                    <div className="col-5">
                        <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                    </div>
                    <div className="col-10">
                        <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                        <label htmlFor="customRange1" className="form-label">
                            <span id="rangeValue1">1 €</span> OF 1.500.000 €
                        </label>
                    </div>
                </div>
                </div>

                <div className='support'>
                    <div className='row mb-1'>
                        <div className='col-10'>
                            <select className="form-select">
                                <option selected>Reisverzorging</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <div className="form-check mt-3">
                                <input className="form-check-input me-2" type="checkbox" defaultValue id="Glasvezel" />
                                <label className="form-check-label" htmlFor="Glasvezel">
                                    All inclusief: (..)
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input me-2" type="checkbox" defaultValue id="Glasvezel" />
                                <label className="form-check-label" htmlFor="Glasvezel">
                                      Logies: (..)
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input me-2" type="checkbox" defaultValue id="Glasvezel" />
                                <label className="form-check-label" htmlFor="Glasvezel">
                                     Halfpensioen: (..)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
          
                <div className="protectionbx">
                    <h5><i className="fas fa-sliders-h"></i> Extra filters</h5>
                </div>
                <div className="support">

                <div className="form-check">
                        <input className="form-check-input me-2" type="checkbox" id="klantenscore" defaultValue="true" />
                        <label className="form-check-label" htmlFor="klantenscore">Klantenscore
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                        </label>
                    </div>
                </div>
                <MailModal />

            </div>
        </>
    )
}

export default BusinessTripStep2Left