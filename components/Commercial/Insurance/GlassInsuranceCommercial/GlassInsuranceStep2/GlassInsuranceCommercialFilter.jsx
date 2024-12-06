import Image from 'next/image'
import React from 'react'
import MailModal from '../../../../CommonModals/MailModal'


const GlassInsuranceCommercialFilter = () => {
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
                            Geboortedatum:
                            <span />
                        </li>
                        <li>
                            Bedrijfsgrootte:
                            <span />
                        </li>
                        <li>
                          Pand:
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
                                        <Image width={200} height={200} alt="ad" src="/images/add-location-point.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                    <li>
                                        <Image width={200} height={200} alt="aa" src="/images/user-2.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                    <li>
                                        <Image width={200} height={200} alt="ac" src="/images/viewpop.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='support'>
                    <div className='row'>
                        <div className='col-8'>
                           <div className="row mt-2">
                                <div className="col-11">
                                    <label className="form-label labeltitle">Aantal ramen</label>
                                </div>
                                <div className="col-11 position-relative">
                                 <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                 <div className="infcalcubx info-in-absolute">
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                        <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                </div>
                                </div>
                                <div className="col-11">
                                    <input type="range" className="form-range" id="customRange1" min={1} max={2000} defaultValue={1} />
                                    <label htmlFor="customRange1" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue1">€1</span>
                                            <span>€ 2000.00</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-11">
                                    <label className="form-label labeltitle">Afmeting ramen</label>
                                </div>
                                <div className="col-11 position-relative">
                                    <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                <div className="infcalcubx info-in-absolute">
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                        <i className="fas fa-2x fa-info-circle" />
                                    </a>
                                </div>
                                </div>
                                <div className="col-11">
                                    <input type="range" className="form-range" id="customRange1" min={1} max={2000} defaultValue={1} />
                                    <label htmlFor="customRange1" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue1">0 m<sup>2</sup></span>
                                            <span>100 m<sup>2</sup></span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-11">
                                    <label className="form-label labeltitle">Herbouwwaarde </label>
                                </div>
                                <div className="col-11 position-relative">
                                    <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                                <div className="infcalcubx hulpNinfo-in-position-glassinsurance glass-hulp-responsive">
                                    <ul className='list-unstyled list-flex'>
                                        <li>
                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                <i className="fas fa-2x fa-info-circle" />
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="modal" href="#decorationModalToggle" role="button" className="calculatorwrp">
                                                <i className="fas fa-calculator"></i>
                                                <span>Hulp nodig?</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-11">
                                    <input type="range" className="form-range" id="customRange1" min={1} max={2000} defaultValue={1} />
                                    <label htmlFor="customRange1" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue1">€1</span>
                                            <span>€10&#x2c;000&#x2c;000</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7 pe-0 mb-3 col-7">
                            <select className="form-select" aria-label="Select">
                                <option selected>Aanbevolen verzekeringen</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className='row'>
                        <div className='col-lg-10 mb-3'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" defaultValue id="nationaalonbeperktbellen" />
                                <label className="form-check-label" htmlFor="nationaalonbeperktbellen">
                                    Bedrijfsschade: (..)
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" defaultValue id="nationaalonbeperktbellen" />
                                <label className="form-check-label" htmlFor="nationaalonbeperktbellen">
                                    Gebouwverzekering: (..)
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" defaultValue id="nationaalonbeperktbellen" />
                                <label className="form-check-label" htmlFor="nationaalonbeperktbellen">
                                    Bedrijfsaansprakelijkheid: (..)
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="protectionbx">
                        <h5><i className="fas fa-cog"></i> Extra filters</h5>
                    </div>
                    <div className="support">
                        <div className="form-check ps-0">
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
                    <div className="protectionbx">
                    <h5><i className="fas fa-cog"></i> Energise Regelt</h5>
            </div>
            <div className="support">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Aanbod op maat
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Aanbod op maat
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Aanvraag
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Aanvraag
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Unieke deals
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Unieke deals
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Duidelijkheid
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Duidelijkheid
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Service
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Service
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <MailModal />
            </div>

        </>
    )
}

export default GlassInsuranceCommercialFilter
