import Image from 'next/image'
import React from 'react'

const BusinesTripCommercialFormright = ({setCount}) => {
    const handleSecondStep = () => {
        setCount(1)
    }
    return (
        <>
            <div className="col-lg-6 eventbxright">
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
                            <div className="col-3">
                                <label htmlFor="inputPlaats" className="col-form-label"><i className="fas green-cyan fa-2x fa-map-marker-alt"></i> Van:</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" id="inputPlaats" placeholder="plaats" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-3 ">
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
                <div className='row mt-2'>
                    <div className='col-lg-10'>
                        <div className="row">
                            <div className="col px-4 radiobx">
                                <div className="row">
                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                        <input type="radio" name="test" id="cb21" />
                                        <label htmlFor="cb21">
                                            <Image src="/images/airplane-3.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                            <span className="checkbox-label">Vliegtuig</span>
                                        </label>
                                    </div>
                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                        <input type="radio" name="test" id="cb22" />
                                        <label htmlFor="cb22">

                                            <Image src="/images/bus.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                            <span className="checkbox-label">Toerbus</span>
                                        </label>
                                    </div>
                                    <div className="col-lg-4  col-6  col-sm-6  p-0  col-md-4">
                                        <input type="radio" name="test" id="cb25" />
                                        <label htmlFor="cb25">
                                            <Image src="/images/taxi.png" width={128} height={128} alt='internettv' className="img-fluid" />
                                            <span className="checkbox-label">Taxi</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-10 text-center'>
                        <label className='form-label labeltitle'><i className="far fa-2x green-cyan fa-clock"></i> Datum</label>
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
                        <lable className='form-label fw-medium'><i className="fas green-cyan fa-2x fa-calculator"></i> Budget</lable>
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
                            Budget
                        </label>
                    </div>
                    <div className="col-5">
                        <input type="number" className="form-control" id="numberInput1" min={1} defaultValue={1} />
                    </div>
                    <div className="col-10">
                        <input type="range" className="form-range" id="customRange1" min={1} max={2} defaultValue={1} />
                        <label htmlFor="customRange1" className="form-label">
                            <div className='cus-num'>
                            <span>€1</span>
                            <span>€1.500.000</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 text-center mb-2">
                        <a href="#addmorinf" className='text-dark btn-link' data-bs-toggle="modal">
                            <i className="fas green-cyan fa-2x fa-map-marker-alt"></i>
                            Meerdere Vestigingen toevoegen.
                            <sup><i className="fas fa-info"></i></sup>
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
        </>
    )
}

export default BusinesTripCommercialFormright