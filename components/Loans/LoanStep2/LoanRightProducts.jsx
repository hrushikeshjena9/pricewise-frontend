import Image from 'next/image'
import React, { useState } from 'react'

const LoanRightProducts = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="col-lg-8">
                <div className="listofcompanybx">
                    <div className="login-deals-box">
                        <div className="spe-action">
                            <div className="spe-cont">
                                <Image width={200} height={200} alt="aa" src="/images/stopwatch.png" />
                                <h5>Actie:</h5>
                                <p>Geldig tot dd-mm-jj</p>
                            </div>
                            <div className="spe-cont">
                                <Image width={200} height={200} alt="aa" src="/images/sale.png" />
                                <p>Energise korting:</p>
                                <h4>€...</h4>
                                <i className="fas fa-info" />
                            </div>
                            <div className="spe-cont">
                                <Image width={200} height={200} alt="aa" src="/images/hot-sale.png" />
                                <p>Totaal korting:</p>
                                <h4>€...</h4>
                            </div>
                        </div>
                        <div className="spe-action-data">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-3">
                                    <div className="spe-img">
                                        <Image width={200} height={200} alt="aa" src="/images/sunbg.png" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-3">
                                    <div className="spe-cn">
                                        <h5>Pakket</h5>
                                        <p>*</p>
                                        <p>*</p>
                                        <p>*</p>
                                        <p>*</p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-3">
                                    <div className="spe-cn">
                                        <i className="fas fa-info" />
                                        <h5>Kosten:</h5>
                                        <h4>€....</h4>
                                        <span>/p.m</span>
                                    </div>
                                    <div className="form-check py-2 compare-check-bx">
                                        <input className="form-check-input me-2 compare-checkbox" type="checkbox" id="compareCheckbox1" name="compare1" data-compare-item-id="compare-item1" />
                                        <label className="form-check-label" htmlFor="compareCheckbox1">Vergelijk</label>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-3">
                                    <div className="spe-cn">
                                        <i className="fas fa-info" />
                                        <h5>Bespaar:</h5>
                                        <h4>€....</h4>
                                        <span>/p.j</span>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-12">
                                    <div className="spe-cn-star">
                                        <i className="fas fa-info" />
                                        <h3>Klantenscore: 4/5</h3>
                                        <ul className="mb-3">
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="far fa-star" />
                                            </li>
                                        </ul>
                                        <a href="#" className="price-btn">Aanvragen</a>
                                    </div>
                                </div>
                            </div>
                            <a href="javascript:void(0);" data-target="listhiddenDiv3" className="btn-act listtoggleDiv" onClick={()=>setShow(!show)} >Meer informatie <i className="fal fa-plus" />
                            </a>
                        </div>
                    </div>
                    {show && <div id="listhiddenDiv3" className="tabwrp">
                        <button className="listhideDiv">
                            <i className="fas fa-times" />
                        </button>
                        <ul className="nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                    <i className="fas fa-calculator" /> Kosten </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                    <i className="fas fa-ellipsis-h" /> Details </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                    <i className="fas fa-university" /> Bank </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">
                                    <i className="fas fa-spinner" /> Aanvraag </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabsContent">
                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tabbxleft">
                                            <div className="table-responsive  table-scroll">
                                            <h4>Doorlopend Krediet</h4>
                                                <table className="table table-striped table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>Aflossing:</td>
                                                            <th>€....</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Rente starttarief:</td>
                                                            <th>...%</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Overige kosten:</td>
                                                            <th>€....</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Totaal:</td>
                                                            <th>€... p.m.</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Looptijd:: </td>
                                                            <th>....Maanden</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Bespaar p.j..</td>
                                                            <th>€...</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <a href="#" className="viwmr" data-bs-toggle="modal" data-bs-target="#rentalModal">Rente overzicht</a>
                                        </div>
                                        {/* Bootstrap 5 modal */}
                                        <div className="modal fade rentalModal" id="rentalModal" tabIndex={-1} aria-labelledby="rentalModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                                <div className="modal-content">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times" /></button>
                                                    <div className="modal-body table-responsive text-center">
                                                        <h3 className="modal-title" id="rentalModalLabel">Rente overzicht</h3>
                                                        <p>Annuiteitenhypotheek &amp; Lineair hypotheek</p>
                                                        <p className="small">Shuld-marktwaardeverhouding</p>
                                                        <table className="table table-bordered table-sm">
                                                            <tbody>
                                                                <tr>
                                                                <td>
                                                                    <table className="table-bordered table-sm table-hover table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colSpan={2} className="text-end">NHG</th>
                                                                                <th>
                                                                                    &lt;55%</th>
                                                                                <th>
                                                                                    &lt;60%</th>
                                                                                <th>
                                                                                    &lt;65%</th>
                                                                                <th>
                                                                                    &lt;70%</th>
                                                                                <th>
                                                                                    &lt;75%</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>1 jaar</td>
                                                                                <td>0,90%</td>
                                                                                <td>1%</td>
                                                                                <td>1,03%</td>
                                                                                <td>1,05%</td>
                                                                                <td>1,07%</td>
                                                                                <td>1,11%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>2 jaar</td>
                                                                                <td>0,91%</td>
                                                                                <td>1,01%</td>
                                                                                <td>1,04%</td>
                                                                                <td>1,06%</td>
                                                                                <td>1,08%</td>
                                                                                <td>1,12%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>3 jaar</td>
                                                                                <td>0,93%</td>
                                                                                <td>1,02%</td>
                                                                                <td>1,05%</td>
                                                                                <td>1,07%</td>
                                                                                <td>1,09%</td>
                                                                                <td>1,13%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>5 jaar</td>
                                                                                <td>0,94%</td>
                                                                                <td>1,03%</td>
                                                                                <td>1,06%</td>
                                                                                <td>1,08%</td>
                                                                                <td>1,10%</td>
                                                                                <td>1,14%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>6 jaar</td>
                                                                                <td>0,95%</td>
                                                                                <td>1,04%</td>
                                                                                <td>1,07%</td>
                                                                                <td>1,09%</td>
                                                                                <td>1,11%</td>
                                                                                <td>1,15%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>7 jaar</td>
                                                                                <td>0,96%</td>
                                                                                <td>1,05%</td>
                                                                                <td>1,08%</td>
                                                                                <td>1,10%</td>
                                                                                <td>1,12%</td>
                                                                                <td>1,16%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10 jaar</td>
                                                                                <td>0,94%</td>
                                                                                <td>1,03%</td>
                                                                                <td>1,06%</td>
                                                                                <td>1,08%</td>
                                                                                <td>1,10%</td>
                                                                                <td>1,14%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>12 jaar</td>
                                                                                <td>1,16%</td>
                                                                                <td>1,28%</td>
                                                                                <td>1,31%</td>
                                                                                <td>1,33%</td>
                                                                                <td>1,35%</td>
                                                                                <td>1,39%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>15 jaar</td>
                                                                                <td>1,17%</td>
                                                                                <td>1,33%</td>
                                                                                <td>1,36%</td>
                                                                                <td>1,38%</td>
                                                                                <td>1,40%</td>
                                                                                <td>1,44%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>20 jaar</td>
                                                                                <td>1,31%</td>
                                                                                <td>1,43%</td>
                                                                                <td>1,46%</td>
                                                                                <td>1,48%</td>
                                                                                <td>1,50%</td>
                                                                                <td>1,53%</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td>
                                                                    <table className="table-bordered table-sm table-hover table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colSpan={2} className="text-end">
                                                                                    &lt;80%</th>
                                                                                <th>
                                                                                    &lt;85%</th>
                                                                                <th>
                                                                                    &lt;90%</th>
                                                                                <th>
                                                                                    &lt;95%</th>
                                                                                <th>
                                                                                    &lt;100%</th>
                                                                                <th>&gt;100%</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>1 jaar</td>
                                                                                <td>1,16%</td>
                                                                                <td>1,21%</td>
                                                                                <td>1,26%</td>
                                                                                <td>1,35%</td>
                                                                                <td>1,42%</td>
                                                                                <td>2,15%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>2 jaar</td>
                                                                                <td>1,17%</td>
                                                                                <td>1,22%</td>
                                                                                <td>1,27%</td>
                                                                                <td>1,36%</td>
                                                                                <td>1,43%</td>
                                                                                <td>2,16%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>3 jaar</td>
                                                                                <td>1,18%</td>
                                                                                <td>1,23%</td>
                                                                                <td>1,28%</td>
                                                                                <td>1,37%</td>
                                                                                <td>1,44%</td>
                                                                                <td>2,17%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>5 jaar</td>
                                                                                <td>1,19%</td>
                                                                                <td>1,24%</td>
                                                                                <td>1,29%</td>
                                                                                <td>1,38%</td>
                                                                                <td>1,45%</td>
                                                                                <td>2,18%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>6 jaar</td>
                                                                                <td>1,20%</td>
                                                                                <td>1,25%</td>
                                                                                <td>1,30%</td>
                                                                                <td>1,39%</td>
                                                                                <td>1,46%</td>
                                                                                <td>2,19%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>7 jaar</td>
                                                                                <td>1,21%</td>
                                                                                <td>1,26%</td>
                                                                                <td>1,31%</td>
                                                                                <td>1,40%</td>
                                                                                <td>1,47%</td>
                                                                                <td>2,20%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10 jaar</td>
                                                                                <td>1,22%</td>
                                                                                <td>1,27%</td>
                                                                                <td>1,32%</td>
                                                                                <td>1,41%</td>
                                                                                <td>1,48%</td>
                                                                                <td>2,21%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>12 jaar</td>
                                                                                <td>1,44%</td>
                                                                                <td>1,49%</td>
                                                                                <td>1,54%</td>
                                                                                <td>1,63%</td>
                                                                                <td>1,70%</td>
                                                                                <td>2,43%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>15 jaar</td>
                                                                                <td>1,49%</td>
                                                                                <td>1,54%</td>
                                                                                <td>1,59%</td>
                                                                                <td>1,68%</td>
                                                                                <td>1,75%</td>
                                                                                <td>2,48%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>20 jaar</td>
                                                                                <td>1,59%</td>
                                                                                <td>1,64%</td>
                                                                                <td>1,69%</td>
                                                                                <td>1,78%</td>
                                                                                <td>1,85%</td>
                                                                                <td>2,58%</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody></table>
                                                        <div className="text-center">
                                                            <a href="#" className="viwmr">Verklein rente overzicht</a>
                                                            <a href="#" className="viwmr">Meer rente overzicht</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tabbxright">
                                            <h4>Veel gestelde vragen</h4>
                                            <div className="accordion" id="faqAccordion">
                                                {/* FAQ Item 1 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Vraag 1 </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 1. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 2 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Vraag 2 </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 2. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 3 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Vraag 3 </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 3. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 4 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Vraag 4 </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 4. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 5 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Vraag 5 </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 5. </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0);" className="viwmr">Meer vragen?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                <div className="tabinsidebx table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Pakket</th>
                                                <th>Inbegrepen</th>
                                                <th>Informatie</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Rente starttarief</td>
                                                <td>...%</td>
                                               <td>
                                                <select className='form-select'>
                                                    <option value="1">Data Show 1</option>
                                                    <option value="2">Data Show  2</option>
                                                </select>
                                               </td>
                                            </tr>
                                            <tr>
                                                <td>Tussentijds vrij aflossen</td>
                                                <td>€...</td>
                                                <td>
                                                <select className='form-select'>
                                                    <option value="1">Data Show 1</option>
                                                    <option value="2">Data Show  2</option>
                                                </select>
                                               </td>
                                            </tr>
                                            <tr>
                                                <td>Minimale krediet</td>
                                                <td>€...</td>
                                                <td>
                                                <select className='form-select'>
                                                    <option value="1">Data Show 1</option>
                                                    <option value="2">Data Show  2</option>
                                                </select>
                                               </td>
                                            </tr>
                                            <tr>
                                                <td>Maximale krediet</td>
                                                <td>€...</td>
                                                <td>
                                                <select className='form-select'>
                                                    <option value="1">Data Show 1</option>
                                                    <option value="2">Data Show  2</option>
                                                </select>
                                               </td>
                                            </tr>
                                            <tr>
                                                <td>Start termijn</td>
                                                <td>€...</td>
                                                <td>
                                                <select className='form-select'>
                                                    <option value="1">Data Show 1</option>
                                                    <option value="2">Data Show  2</option>
                                                </select>
                                               </td>
                                            </tr>
                                            <tr>
                                                <td>Huidige looptijd</td>
                                                <td>Bepaalde tijd</td>
                                                <td>
                                                <select className='form-select'>
                                                    <option value="1">Data Show 1</option>
                                                    <option value="2">Data Show  2</option>
                                                </select>
                                               </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                <div className="tabinsidebx">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tabbxleft">
                                                <table className="table">
                                                    <thead>
                                                        <tr><th>Werkwijze:</th>
                                                            <th>Handeling:</th>
                                                        </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Bereikbaarheid</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td>Lening</td>
                                                            <td />
                                                        </tr>
                                                        <tr>
                                                            <td>Details</td>
                                                            <td />
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tabbxright">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <Image width={200} height={200} alt="aa" src="/images/hsbcbank.png" className="img-fluid" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <p>Text</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="viwmr" data-bs-toggle="modal" data-bs-target="#bekijkModal">Bekijk meer</a>
                                    </div>
                                    <div className="modal fade bekijkModal" id="bekijkModal" tabIndex={-1} aria-labelledby="rentalModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered ">
                                            <div className="modal-content">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times" /></button>
                                                <div className="modal-body table-responsive text-start">
                                                    <h3 className="modal-title text-center" id="rentalModalLabel">Rekenvoorbeeld</h3>
                                                    <p className="small">Standaard situatie</p>
                                                    <p>
                                                         Stel dat je een doorlopend krediet bedrag van <b>€10.000</b> neemt. 
                                                         Van dit totaal bedrag neem je <b>€4000</b> op om te kunnen gebruiken.
                                                    </p>
                                                    <p>
                                                        De gebruikelijke percentage voor het termijn bedrag is altijd <b>2% </b>van de totaalsom (In dit geval dus <b>€200</b>). 
                                                        Een deel hiervan is rente. Dit word bepaald door de geldende variabele rente en je opgenomen bedrag.
                                                    </p>
                                                    <p>
                                                        <b>Rente berekening:</b> De huidige rentestand is 8,4%, je hebt €4000 opgenomen om te gaan gebruiken. (8,4% van €4000/12= €28)</p>
                                                        
                                                    <p> 
                                                    <b>Hoe je aflost:</b> De aflossing is de rente min de termijn bedrag. (€200-€28=€172), 
                                                    vervolgens doe je (€4000-172=€3828), Dus nu is je uitstaande schuld nog maar <b>€3828.</b>
                                                    </p>
                                                    <div className='text-center'>
                                                    <a href="javascript:void(0);" className="btn btn-warning" data-bs-dismiss="modal" aria-label="Close">Ik snap het</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tabbxleft">
                                            <div className="table-responsive table-scroll">
                                                <table className="table table-striped table-bordered">
                                                    <tbody>
                                                    <tr>
                                                        <th>Energise</th>
                                                        <th>Bank</th>
                                                    </tr>
                                                        <tr>
                                                            <td>Vergelijken</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Afhandeling contract</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>X</td>
                                                            <td>Nazorg</td>
                                                        </tr>
                                                        <tr>
                                                            <td>X</td>
                                                            <td>Lening</td>
                                                        </tr>
                                                        <tr>
                                                            <td>X</td>
                                                            <td>Incasseren</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Aanpak</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Energise exclusives</td>
                                                            <td>X</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tabbxright">
                                            <h4>Aanvraag</h4>
                                            <div className="accordion" id="stepAccordion">
                                                {/* FAQ Item 1 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="stap1">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#stapc1" aria-expanded="true" aria-controls="stapc1"> Stap 1 </button>
                                                    </h2>
                                                    <div id="stapc1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#stepAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 1. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 2 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="stap2">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc2" aria-expanded="false" aria-controls="stapc2"> Stap 2 </button>
                                                    </h2>
                                                    <div id="stapc2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#stepAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 2. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 3 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="stap3">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc3" aria-expanded="false" aria-controls="stapc3"> Stap 3 </button>
                                                    </h2>
                                                    <div id="stapc3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#stepAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 3. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 4 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="stap4">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc4" aria-expanded="false" aria-controls="stapc4"> Stap 4 </button>
                                                    </h2>
                                                    <div id="stapc4" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#stepAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 4. </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item 5 */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="stap5">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc5" aria-expanded="false" aria-controls="stapc5"> Stap 5 </button>
                                                    </h2>
                                                    <div id="stapc5" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#stepAccordion">
                                                        <div className="accordion-body"> Antwoord op vraag 5. </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0);" className="viwmr">Meer vragen?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 text-center mt-3">
                                    <a href="javascript:void(0);" className="btn-one btn-move-down">
                                        Aanvragen
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default LoanRightProducts