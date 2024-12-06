import Image from 'next/image'
import React from 'react'
import TooltipInitialise from '../../../../../common/TooltipInitialise'

const BusinesTripFormright = ({setCount}) => {
    const handleSecondStep = () => {
        setCount(1)
    }
    return (
        <>
            <div className="col-lg-6 eventbxright">
                <TooltipInitialise/>
                <div className='row'>
                    <div className='col-9'>
                <div className="row mt-4">
                    <div className="col-12 position-relative ">
                        <input className='form-control' type='text' placeholder='Bestemming' />
                        <div className="infcalcubx only-info-absolute">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-6">
                        <label htmlFor="inputPlaats" className="col-form-label form-control">
                            <Image src='/images/add-location-point.png' width={26} height={26} alt='location' />
                            Van:
                         </label>
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" id="inputPlaats" placeholder="plaats" />
                    </div>
                </div>
                <div className='row'>
                     <div className='col-6'>
                     <label htmlFor="inputPlaats" className="col-form-label form-control">
                        <Image src='/images/add-location-point.png' width={26} height={26} alt='location' />
                        Naar:</label>
                    </div>
                    <div className='col-6'>
                      <input type="text" className="form-control" id="inputPlaats" placeholder="plaats" />
                    </div>  
                </div>
                <div className='row'>
                    <div className='col-lg-12 position-relative'>
                        <select className="form-select" id="exampleSelect" aria-label="Select an option">
                            <option disabled selected>Vervoer</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                            <option value="5">Option 5</option>
                        </select>
                        <div className="infcalcubx only-info-absolute">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row px-4 radiobx">
                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                        <input type="radio" name="test" id="cb21" />
                        <label htmlFor="cb21" className="tooltip-container">
                            <Image src="/images/airplane-3.png" width={128} height={128} alt='internettv' className="img-fluid" />
                            <span className="checkbox-label">Vliegtuig</span>
                            <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Vliegtuig"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Vliegtuig</p>
                            </div>
                        </label>
                    </div>
                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                        <input type="radio" name="test" id="cb22" />
                        <label htmlFor="cb22" className="tooltip-container">
                            <Image src="/images/bus.png" width={128} height={128} alt='internettv' className="img-fluid" />
                            <span className="checkbox-label">Toerbus</span>
                            <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Toerbus"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Toerbus</p>
                            </div>
                        </label>
                    </div>
                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                        <input type="radio" name="test" id="cb25" />
                        <label htmlFor="cb25" className="tooltip-container">
                            <Image src="/images/taxi.png" width={128} height={128} alt='internettv' className="img-fluid" />
                            <span className="checkbox-label">Taxi</span>
                            <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Taxi"
                                className="info-in-risk hide-info-desktop">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                            <div className="d-flex justify-content-center">
                                <p className="tooltip-text">Taxi</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-12 text-center position-relative'>
                        <label className='form-label form-control'>
                            <Image src='/images/future-2.png' width={28} height={28} alt='future'/>
                               Datum
                        </label>
                        <div className="infcalcubx only-info-absolute">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-12'>
                        <div className="row mt-2">
                            <div className="col-6">
                                <label htmlFor="d" className="col-form-label form-control">Van:</label>
                            </div>
                            <div className="col-6">
                                <input type="date" className="form-control" id="d" />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col-6">
                                <label htmlFor="d" className="col-form-label form-control">Tot:</label>
                            </div>
                            <div className="col-6">
                                <input type="date" className="form-control" id="d" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-2'>
                    <div className='col-lg-12 text-center position-relative'>
                        <lable className='form-label fw-medium form-control'>
                            <i className="fas green-cyan fa-calculator"></i> Budget
                        </lable>
                        <div className="infcalcubx only-info-absolute">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                <i className="fas fa-2x fa-info-circle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <label className="form-label labeltitle">
                            Budget
                        </label>
                    </div>
                    <div className="col-6">
                        <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                    </div>
                    <div className="col-12">
                        <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                        <label for="customRange1" className="form-label">
                            <div className="cus-num">
                                <span id="rangeValue1">€1</span>
                                <span>€1.500.000</span>
                            </div>
                        </label>
                      </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 text-center mb-2">
                        <a href="#addmorinf" className='text-dark btn-link' data-bs-toggle="modal">
                            <Image src='/images/add-location-point.png' width={28} height={28} alt='location' />
                            Meerdere Vestigingen toevoegen.
                            <sup className="sup-fonticon"><i class="fas fa-info-circle green-cyan"></i></sup>
                        </a>
                        <div className="rangebtn">
                            <button className="seenowbtn" onClick={handleSecondStep}>Bekijk jouw voordeel</button>
                            <a className="help-estimat" onClick={() => setShowExtendedForm(0)}>BusinesTripFormright</a>
                        </div>
                        <a href="javascript:void(0);" className="cyberprivacylink"><i className="fas fa-2x fa-shield-alt" /><span>Privacy</span></a>
                    </div>
                </div>      

                <div className="modal fade" id="addmorinf" tabIndex={-1} aria-labelledby="addmorinfModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addmorinfModalLabel">Meerdere Vestigingen toevoegen</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* Modal body content goes here */}                                            
                                <p>Content of the modal...</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sluiten</button>
                                <button type="button" className="btn btn-primary">Toevoegen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default BusinesTripFormright