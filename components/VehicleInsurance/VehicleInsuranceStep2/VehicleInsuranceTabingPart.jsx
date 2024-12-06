import Image from 'next/image'
import React from 'react'

const VehicleInsuranceTabingPart = () => {
  return (
    <>

<div className='listofcompanybx'>
        <div id="listhiddenDiv1" className="tabwrp">
                <button className="listhideDiv">
                    <i className="fas fa-times" />
                </button>
                <ul className="nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            <i className="fas fa-calculator" />
                            Kosten
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                         <i className="fas fa-shield-alt"></i>
                            Dekking
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                            <i className="fas fa-user-shield" />
                            Verzekeraar
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">
                            <i className="fas fa-spinner" />
                            Aanvraag
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabsContent">
                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tabbxleft">
                                    <div className="table-responsive table-scroll">
                                        <h4>All RISK (Volledig casco)</h4>
                                        <table className="table table-striped table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Premie kosten:</th>
                                                    <td>€...</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Aanvulling:</th>
                                                    <td>€...</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Eenmalige kosten:</th>
                                                    <td>€...</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Eigen risico:
                                                    </th> 
                                                    <td>€...</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="fw-bold">Totaal:</span></td>
                                                    <td><span className="fw-bold">€... p.m.</span></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Looptijd:</b></td>
                                                    <td><b>...Maanden</b></td>
                                                </tr>
                                                <tr>
                                                    <td>Bespaar p.j.:</td>
                                                    <td>€...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className='small'>Prijzen zijn inc. 21% Assurantie belasting</p>
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
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Vraag 1
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    Antwoord op vraag 1.
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 2 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Vraag 2
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    Antwoord op vraag 2.
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 3 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Vraag 3
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    Antwoord op vraag 3.
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 4 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Vraag 4
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    Antwoord op vraag 4.
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 5 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Vraag 5
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    Antwoord op vraag 5.
                                                </div>
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
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th colSpan={3} className='text-center'><Image width={84} height={103} className='img-fluid' src='/images/taskc.png' alt='aabb'/> <h3> Checklist ALL RISK</h3></th>
                                    </tr>
                                </thead>
                                  <tbody>
                                      <tr>
                                        <td><Image width={83} height={53} alt='asd' src='/images/carcara.png' /></td>
                                          <td>Schade bij een andere voertuig</td>
                                          <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                      </tr>
                                      <tr>
                                          <td><Image width={83} height={53} alt='asd' src='/images/car2.png' /></td>
                                          <td>Hulp bij pech</td>
                                          <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                          
                                      </tr>
                                      <tr>
                                         <td><Image width={82} height={53} alt='asd' src='/images/car3.png' /></td>
                                          <td>Vandalisme & diefstal</td>
                                          <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                      </tr>
                                      <tr>
                                        <td><Image width={82} height={53} alt='asd' src='/images/car4.png' /></td>
                                        <td>Ruitschade</td>
                                        <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                      </tr>
                                      <tr>
                                         <td><Image width={82} height={53} alt='asd' src='/images/car5.png' /></td>
                                          <td>Storm &amp; bliksem</td>
                                          <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                      </tr>
                                      <tr>
                                          <td><Image width={82} height={53} alt='asd' src='/images/car6.png' /></td>
                                          <td>Brand amp; explosie</td>
                                          <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                      </tr>
                                      <tr>
                                         <td><Image width={82} height={53} alt='asd' src='/images/car7.png' /></td>
                                          <td>Eigen schuld</td>
                                          <td><Image width={36} height={36} alt='asd' src='/images/faqicon.png' /></td>
                                      </tr>
                                  </tbody>
                              </table>
                            <div className="text-start">
                                <a href="javascript:void(0);" className="viwmr">Bekijk meer</a>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                        <div className="tabinsidebx">
                           <div className='row'>
                                <div className='col-6'>
                                    <table className='table table-bordered'>
                                        <tbody>
                                            <tr>
                                                <th>Werkwijze:</th>
                                                <th>Handeling:</th>
                                            </tr>
                                            <tr>
                                                <td>Bereikbaarheid</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Polis</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Details</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                 <div className='col-6'>
                                    <Image width={217} height={141} alt='aa' src='/images/swintoninsurance.png' className='img-fluid'/>
                                    <p>Text....</p>
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
                                            <tbody><tr>
                                                <th>Energise</th>
                                                <th>Verzeleraar</th>
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
                                                    <td>Schade afhandeling</td>
                                                </tr>
                                                <tr>
                                                    <td>X</td>
                                                    <td>Incasseren</td> 
                                                </tr>
                                                <tr>
                                                    <td>Overstappenplan</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td>Energise exclusives</td>
                                                    <td>X</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabbxright">
                                    <h4>Overstappenplan</h4>
                                    <div className="accordion" id="stepAccordion">
                                        {/* FAQ Item 1 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#stapc1" aria-expanded="true" aria-controls="stapc1"> Stap 1 </button></h2>
                                            <div id="stapc1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Stap 1 </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 2 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc2" aria-expanded="false" aria-controls="stapc2"> Stap 2 </button></h2>
                                            <div id="stapc2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Stap 2 </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 3 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc3" aria-expanded="false" aria-controls="stapc3"> Stap 3 </button></h2>
                                            <div id="stapc3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Stap 3 </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 4 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap4"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc4" aria-expanded="false" aria-controls="stapc4"> Stap 4 </button></h2>
                                            <div id="stapc4" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Stap 4 </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 5 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap5"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc5" aria-expanded="false" aria-controls="stapc5"> Stap 5 </button></h2>
                                            <div id="stapc5" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Stap 5 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center"> <a href="javascript:void(0);" className="viwmr">Heb je nog vragen?</a> </div>
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
            </div>
         </div>
            </>
  )
}

export default VehicleInsuranceTabingPart