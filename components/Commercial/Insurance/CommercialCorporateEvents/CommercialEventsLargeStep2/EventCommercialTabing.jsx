import Image from 'next/image'
import React from 'react'

const EventCommercialTabing = () => {
    return (
        <>
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
                            <i className="fas fa-ellipsis-h" />
                            Diensten
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                            <i className="fas fa-user-shield" />
                            Diensten
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
                                        <table className="table table-striped table-bordered">
                                        <h4>Evenement kosten</h4>
                                            <tbody>
                                                <tr>
                                                    <th>Pakket:...</th>
                                                    <td>....</td>
                                                </tr>
                                                <tr>
                                                    <th>Verzorging:</th>
                                                    <td>€</td>
                                                </tr>
                                                <tr>
                                                    <th>Reisduur:</th>
                                                    <td>€</td>
                                                </tr>
                                                <tr>
                                                 <th>Reisgezelschap:</th>
                                                 <td>€</td>
                                                </tr>
                                                <tr>
                                                    <th>Totaal kosten:</th>
                                                    <td><span>€...</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Energise bespaart:</th>
                                                    <td>€... </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <p className="mb-0">Prijzen zijn inclusief 21% BTW</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                            <div className="client-slider owl-carousel">
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png"  />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png"  />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png"  />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png"  />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png" />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png" />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="stp-imgupload">
                                        <Image width={200} height={200} alt="aa" src="/images/placeholder.png"  />
                                        <a className="pl-us" data-bs-toggle="modal" data-bs-target="#imageModal" data-img-src="/images/placeholder.png">
                                            <i className="fas fa-plus" />
                                        </a>
                                    </div>
                                </div>
                                {/* Add more items as needed */}
                            </div>
                            <div className="modal fade" id="imageModal" tabIndex={-1} aria-labelledby="imageModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content img-pop">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="fas fa-times" />
                                        </button>
                                        <div className="modal-body text-center">
                                            <div id="imageCarousel" className="owl-carousel owl-theme">
                                                {/* Images and text areas will be dynamically added here */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-4">
                                    <div className="viwcal-bx">
                                        <h6>Portefolio:</h6>
                                        <p>Bestemming</p>
                                        <ul className="list-unstyled">
                                            <li>Kamers</li>
                                            <li>Restaurant</li>
                                            <li>Entertainment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="viwcal-bx">
                                        <h6>Activiteiten:</h6>
                                        <ul className="list-unstyled">
                                            <li><Image src='/images/faqicon.png' width={26} height={26} alt=''/> Fitness</li>
                                            <li><Image src='/images/faqicon.png' width={26} height={26} alt=''/> Zwembad</li>
                                            <li><Image src='/images/faqicon.png' width={26} height={26} alt=''/> Watersporten</li>
                                            <li><Image src='/images/faqicon.png' width={26} height={26} alt=''/> Tennisbanen</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="viwcal-bx">
                                        <h6>Reisduur::</h6>
                                        <ul className="list-unstyled">
                                            <li>Datum: DD-MM-JJJJ</li>
                                            <li>Vertrek: 12:00 Tot 21:00</li>
                                            <li>Datum: DD-MM-JJJJ</li>
                                            <li>Terugreis: 12:00 Tot 21:00</li>
                                        </ul>
                                    
                                    </div>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                        <div className="tabinsidebx">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                        <th>Diensten</th>
                                        <th>Inbegrepen</th>
                                        <th>Informatie</th>
                                    </tr>
                                        <tr>
                                            <td>Reisgezelschap</td>
                                            <td>..... gasten</td>
                                            <td>.....</td>
                                        </tr>
                                         {/* Only Show In business Trip Start*/}
                                        <tr>
                                            <td>Bestemming</td> 
                                            <td>..... dagen</td>
                                            <td>.....</td>
                                        </tr>
                                            {/* Only Show In business Trip End */}
                                        <tr>
                                            <td>Vervoer</td>
                                            <td>€...</td>
                                            <td>.....</td>
                                        </tr>
                                        <tr>
                                            <td>Overnachtingen</td>
                                            <td>€...</td>
                                            <td>.....</td>
                                        </tr>
                                        <tr>
                                            <td>Reisverzorging</td>
                                            <td>€...</td>
                                            <td>.....</td>
                                        </tr>
                                        <tr>
                                            <td>Evenement</td>
                                            <td>Zakenreis</td>
                                            <td>.....</td>
                                        </tr>
                                    </tbody></table>
                                <a href="javascript:void(0);" className="viwmr">Bekijk meer</a>
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
                                                <th>Dienstverlener</th>
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
                                                    <td>Diensten</td>
                                                </tr>
                                                <tr>
                                                    <td>X</td>
                                                    <td>Incasseren</td>
                                                </tr>
                                                <tr>
                                                    <td>Aanvraag</td>
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
                                    <h4>Aanvraag</h4>
                                    <div className="accordion" id="stepAccordion">
                                        {/* FAQ Item 1 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#stapc1" aria-expanded="true" aria-controls="stapc1"> Stap 1 </button></h2>
                                            <div id="stapc1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Antwoord op vraag 1. </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 2 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc2" aria-expanded="false" aria-controls="stapc2"> Stap 2 </button></h2>
                                            <div id="stapc2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Antwoord op vraag 2. </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 3 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc3" aria-expanded="false" aria-controls="stapc3"> Stap 3 </button></h2>
                                            <div id="stapc3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Antwoord op vraag 3. </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 4 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap4"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc4" aria-expanded="false" aria-controls="stapc4"> Stap 4 </button></h2>
                                            <div id="stapc4" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Antwoord op vraag 4. </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item 5 */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="stap5"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc5" aria-expanded="false" aria-controls="stapc5"> Stap 5 </button></h2>
                                            <div id="stapc5" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#stepAccordion">
                                                <div className="accordion-body"> Antwoord op vraag 5. </div>
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
        </>
    )
}

export default EventCommercialTabing