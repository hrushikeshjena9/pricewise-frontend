import Image from 'next/image'
import React from 'react'

export const TakingleavePayslip = () => {
    return (
        <>

            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='title-wimg'><Image width={200} height={200} alt="aa" src='/images/takingleave.png'/>Verlofopname</h4>
                        </div>
                        <div className='card-body'>
                           
                        <div className='row'>
                            <div className='col-lg-6'>
                            <p>Wil je langdurig verlofopnemen?</p>
                            <p>Doe dit dan minimaal 2 <a href='#' className='text-danger'>maanden</a> van te voren.</p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="reason" className="form-label">Waarom wil jij verlof opnemen?</label>
                                    <input type="text" className="form-control" id="reason" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="startDate" className="form-label">Van</label>
                                        <input type="date" className="form-control" id="startDate" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="endDate" className="form-label">Tot</label>
                                        <input type="date" className="form-control" id="endDate" />
                                    </div>
                                </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Heb jij vervanging geregeld?</label>
                                            <div className="d-flex">
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" value="yes" />
                                                    <label className="form-check-label" htmlFor="yes">Ja</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" value="no" defaultChecked />
                                                    <label className="form-check-label" htmlFor="no">Nee</label>
                                                </div>
                                            </div>
                                        </div>
                                <div className="mb-3">
                                    <label htmlFor="employee" className="form-label">Wie</label>
                                    <select className="form-select" id="employee">
                                        <option>Selecteer medewerker</option>
                                        {/* Add employee options here */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="function" className="form-label">Functie</label>
                                    <input type="text" className="form-control" id="function" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="replacementStartDate" className="form-label">Van</label>
                                        <input type="date" className="form-control" id="replacementStartDate" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="replacementEndDate" className="form-label">Tot</label>
                                        <input type="date" className="form-control" id="replacementEndDate" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="replacementNeeded" className="form-label">Heb jij nog een vervanger nodig?</label>
                           
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="replacement" className="form-label">Wie</label>
                                    <select className="form-select" id="replacement">
                                        <option>Selecteer vervanger</option>
                                        {/* Add replacement options here */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="replacementFunction" className="form-label">Functie</label>
                                    <input type="text" className="form-control" id="replacementFunction" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="replacementStartDate2" className="form-label">Van</label>
                                        <input type="date" className="form-control" id="replacementStartDate2" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="replacementEndDate2" className="form-label">Tot</label>
                                        <input type="date" className="form-control" id="replacementEndDate2" />
                                    </div>
                                </div>
                                <button type="submit" className="btn price-btn">Aanvragen</button>
                            </form> 

                            </div>
                            <div className='col-lg-6'>
                            <p>Wil je kortdurend verlofopnemen of vervanging regelen?</p>
                            <p>Kortdurend verlof: minimaal 1 <a href='#' className='text-danger'>maanden</a> van te voren.</p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="reason" className="form-label">Waarom wil jij verlof opnemen?</label>
                                    <input type="text" className="form-control" id="reason" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="startDate" className="form-label">Van</label>
                                        <input type="date" className="form-control" id="startDate" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="endDate" className="form-label">Tot</label>
                                        <input type="date" className="form-control" id="endDate" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Heb jij nog een vervanger nodig?</label>
                                            <div className="d-flex">
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" value="yes" />
                                                    <label className="form-check-label" htmlFor="yes">Ja</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" value="no" defaultChecked />
                                                    <label className="form-check-label" htmlFor="no">Nee</label>
                                                </div>
                                            </div>
                                        </div>
                                <div className="mb-3">
                                    <label htmlFor="employee" className="form-label">Wie</label>
                                    <select className="form-select" id="employee">
                                        <option>Selecteer medewerker</option>
                                        {/* Add employee options here */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="function" className="form-label">Functie</label>
                                    <input type="text" className="form-control" id="function" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="replacementStartDate" className="form-label">Van</label>
                                        <input type="date" className="form-control" id="replacementStartDate" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="replacementEndDate" className="form-label">Tot</label>
                                        <input type="date" className="form-control" id="replacementEndDate" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="replacementNeeded" className="form-label">Heb jij nog een vervanger nodig?</label>
                           
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="replacement" className="form-label">Wie</label>
                                    <select className="form-select" id="replacement">
                                        <option>Selecteer vervanger</option>
                                        {/* Add replacement options here */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="replacementFunction" className="form-label">Functie</label>
                                    <input type="text" className="form-control" id="replacementFunction" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="replacementStartDate2" className="form-label">Van</label>
                                        <input type="date" className="form-control" id="replacementStartDate2" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="replacementEndDate2" className="form-label">Tot</label>
                                        <input type="date" className="form-control" id="replacementEndDate2" />
                                    </div>
                                </div>
                                <button type="submit" className="btn price-btn">Aanvragen</button>
                            </form> 

                            </div>
                        </div>
                        </div>

                    </div>

                </div>
                <div className='col-lg-12 mt-4'>
                    <div className='card'>
                    <div className='card-header'>
                            <h4 className='title-wimg'><Image width={200} height={200} alt="aa" src='/images/payslip.png'/>Loonstrook</h4>
                        </div>
                        <div className="card-body">
                            <p>Al jouw maandelijkse uitbetalingen van 20<span className='text-warning'>21</span>/20<span className='text-warning'>22</span></p>
                            <div className="row align-items-center">
                                <div className="col">
                                    <label htmlFor="fromDate" className="form-label">Van</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="fromDate" placeholder="dd-mm-" />
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="toDate" className="form-label">Tot</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="toDate" placeholder="dd-mm-" />
                                        <button type="button" className="btn btn-warning">Zoeken</button>
                                    </div>
                                </div>
                            </div>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>dd-mm 1</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                        <td>dd-mm 2</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                 </tr>
                                 <tr>
                                        <td>dd-mm 3</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                        <td>dd-mm 4</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                 </tr>
                                 <tr>
                                        <td>dd-mm 5</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                        <td>dd-mm 6</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                 </tr>
                                 <tr>
                                        <td>dd-mm 7</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                        <td>dd-mm 8</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                 </tr>
                                 <tr>
                                        <td>dd-mm 9</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                        <td>dd-mm 10</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                 </tr>
                                 <tr>
                                        <td>dd-mm 11</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                        <td>dd-mm 12</td>
                                        <td><a className='text-warning' href='javascript:void(0);'>Download</a></td>
                                 </tr>
                                </tbody>    
                            </table>
                            <p>Jouw Jaarrekeningen van van 20<span className='text-warning'>21</span>/20<span className='text-warning'>22</span></p>
                            <div className="row align-items-center">
                                <div className="col">
                                    <label htmlFor="fromDate" className="form-label">Van</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="fromDate" placeholder="dd-mm-" />
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="toDate" className="form-label">Tot</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="toDate" placeholder="dd-mm-" />
                                        <button type="button" className="btn btn-warning">Zoeken</button>
                                    </div>
                                </div>
                            </div>
                            <p>JJJJ 1 <a className='text-warning' href='javascript:void(0);'>Download</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TakingleavePayslip