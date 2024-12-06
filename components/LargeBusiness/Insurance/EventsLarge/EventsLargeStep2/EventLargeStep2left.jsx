import Image from 'next/image'
import React from 'react'
import MailModal from '../../../../CommonModals/MailModal'


const EventLargeStep2left = () => {
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
                        <div className='col-12'>
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
                            <label className='form-label fw-medium form-control'>Feestgrootte</label>
                        </div>
                        <div className='col-2'>
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
                        <div className="col-5">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-12">
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            <label htmlFor="customRange3" className="form-label">
                               <div className="cus-num">
                                <span id="rangeValue1">€1</span>
                                <span>€10,000</span>
                            </div>
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label fw-medium'><Image src='/images/catering-3.png' alt='catering' width={54} height={54} /> Catering</label>
                        </div>
                        <div className='col-8'>
                        <div className="infcalcubx form-flex-bx ">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                        <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                </li>
                                <li className='me-2'>
                                    <a data-bs-toggle="modal" href="#decorationModalToggle" role="button" className="calculatorwrp">
                                        <i className="fas fa-calculator" />
                                        <span className='small'>Hulp nodig?</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="text-center">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label d-block fw-bold text-dark small" htmlFor="flexCheckDefault">
                                           Toevoegen
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <label className="form-label labeltitle">Budget</label>
                        </div>
                        <div className="col-5">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-12">
                            <div className='d-block'>
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            </div>
                            <div className=''>
                            <label htmlFor="customRange3" className="form-label">
                                <div className="cus-num">
                                    <span id="rangeValue1">€1</span>
                                    <span>€ 30,000</span>
                                </div>
                             </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label fw-medium'><Image src='/images/confetti.png' alt='catering' width={54} height={54} /> Decoratie</label>
                        </div>
                        <div className='col-8'>
                        <div className="infcalcubx">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                        <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                </li>
                                <li className='me-2'>
                                    <a data-bs-toggle="modal" href="#decorationModalToggle" role="button" className="calculatorwrp">
                                        <i className="fas fa-calculator" />
                                        <span className='small'>Hulp nodig?</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="text-center">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label d-block fw-bold text-dark small" htmlFor="flexCheckDefault">
                                           Toevoegen
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <label className="form-label labeltitle">Budget</label>
                        </div>
                        <div className="col-5">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-12">
                            <div className='d-block'>
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            </div>
                            <div className=''>
                            <label htmlFor="customRange3" className="form-label">
                                <div className="cus-num">
                                    <span id="rangeValue1">€1</span>
                                    <span>€ 30,000</span>
                                </div>
                            </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label fw-medium'><Image src='/images/music-note.png' alt='catering' width={54} height={54} /> Entertainment</label>
                        </div>
                        <div className='col-8'>
                        <div className="infcalcubx">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                        <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                </li>
                                <li className='me-2'>
                                    <a data-bs-toggle="modal" href="#decorationModalToggle" role="button" className="calculatorwrp">
                                        <i className="fas fa-calculator" />
                                        <span className='small'>Hulp nodig?</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="text-center">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label d-block fw-bold text-dark small" htmlFor="flexCheckDefault">
                                           Toevoegen
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <label className="form-label labeltitle">Budget</label>
                        </div>
                        <div className="col-5">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-12">
                            <div className='d-block'>
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            </div>
                            <div className=''>
                                <label htmlFor="customRange3" className="form-label">
                                    <div className="cus-num">
                                        <span id="rangeValue1">€1</span>
                                        <span>€ 30,000</span>
                                    </div>
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <label className='form-label fw-medium'><Image src='/images/calculator.png' alt='catering' width={54} height={54} /> Budget</label>
                        </div>
                        <div className='col-7'>
                        <div className="infcalcubx">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                        <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                </li>
                                <li className='me-2'>
                                    <a  href="javascript:void(0);" role="button" className="calculatorwrp">
                                        <Image src='/images/viewpop.png' width={32} height={32} alt='viewpop'/>
                                        <span className='small'>Overzicht?</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="text-center">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label d-block fw-bold text-dark small" htmlFor="flexCheckDefault">
                                           Toevoegen
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <label className="form-label labeltitle">Totaal budget</label>
                        </div>
                        <div className="col-5">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-12">
                            <div className='d-block'>
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            </div>
                            <div className=''>
                            <label htmlFor="customRange3" className="form-label">
                                <div className="cus-num">
                                        <span id="rangeValue1">€1</span>
                                        <span>€ 30,000</span>
                                    </div>
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
                        <input className="form-check-input" type="checkbox" id="klantenscore" defaultValue="true" />
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

export default EventLargeStep2left