// import Image from 'next/image'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const HomeInsuranceTabingPart = ({ apiRes, uniqueId, item }) => {
    const [faqs, setFaqs] = useState()
    const [coverages, setCoverages] = useState()
    useEffect(() => {
        setFaqs(apiRes?.FAQs)
        setCoverages(apiRes?.coverages)
    }, [])
    return (
        <>

            <div className='listofcompanybx'>
                <div id="listhiddenDiv1" className="tabwrp">
                    <button className="listhideDiv">
                        <i className="fas fa-times" />
                    </button>
                    <ul className="nav nav-tabs" id="myTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id={`tab1-tab${uniqueId}`} data-bs-toggle="tab" data-bs-target={`#tab1${uniqueId}`}
                                type="button" role="tab" aria-controls={`tab1${uniqueId}`} aria-selected="true">
                                <i className="fas fa-calculator" />
                                Kosten
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id={`tab2-tab${uniqueId}`} data-bs-toggle="tab"
                                data-bs-target={`#tab2${uniqueId}`} type="button" role="tab" aria-controls={`tab2${uniqueId}`} aria-selected="false">
                                <i className="fas fa-shield-alt"></i>
                                Dekking
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id={`tab3-tab${uniqueId}`} data-bs-toggle="tab"
                                data-bs-target={`#tab3${uniqueId}`} type="button" role="tab" aria-controls={`tab3${uniqueId}`} aria-selected="false">
                                <i className="fas fa-user-shield" />
                                Verzekeraar
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id={`tab4-tab${uniqueId}`} data-bs-toggle="tab"
                                data-bs-target={`#tab4${uniqueId}`} type="button" role="tab" aria-controls={`tab4${uniqueId}`} aria-selected="false">
                                <i className="fas fa-spinner" />
                                Aanvraag
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabsContent">
                        <div className="tab-pane fade show active" id={`tab1${uniqueId}`} role="tabpanel" aria-labelledby={`tab1-tab${uniqueId}`}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="tabbxleft">
                                        <div className="table-responsive">
                                            <h4>Kostenoverzicht</h4>
                                            <table className="table table-striped table-bordered">
                                                <tbody>
                                                    {coverages && coverages.length > 0 &&
                                                        <>
                                                            {coverages?.map((item, i) => (
                                                                <tr key={i}>
                                                                    <th scope="row">{item?.coverage_details?.name}:</th>
                                                                    <td>€{item?.coverage_amount}</td>
                                                                </tr>
                                                            ))}
                                                        </>}
                                                    {/* <tr>
                                                        <th scope="row">Opstal:</th>
                                                        <td>€...</td>
                                                    </tr> */}
                                                    <tr>
                                                        <th scope="row">Overige kosten:</th>
                                                        <td>€{item?.other_cost}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Eenmalige kosten:
                                                        </th>
                                                        <td>€...</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="fw-bold">Totaal:</span></td>
                                                        <td><span className="fw-bold">€... p.m.</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Bespaar p.j.:</b></td>
                                                        <td><b>€...</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Looptijd:</td>
                                                        <td></td>
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
                                            {faqs && faqs.length > 0 &&
                                                <>
                                                    {faqs?.map((item, i) => (
                                                        <div className="accordion-item" key={item?.id}>
                                                            <h2 className="accordion-header" id={`heading${item?.id}`}>
                                                                <button
                                                                    className="accordion-button"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#collapse${item?.id}`}
                                                                    aria-expanded="false"
                                                                    aria-controls={`collapse${item?.id}`}
                                                                >
                                                                    {item?.title}
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`collapse${item?.id}`}
                                                                className="accordion-collapse collapse"
                                                                aria-labelledby={`heading${item?.id}`}
                                                                data-bs-parent="#faqAccordion"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div dangerouslySetInnerHTML={{ __html: item?.description }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>}
                                            {/* FAQ Item 2 */}
                                            {/* <div className="accordion-item">
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
                                            </div> */}

                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="javascript:void(0);" className="viwmr">Meer vragen?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id={`tab2${uniqueId}`} role="tabpanel" aria-labelledby={`tab2-tab${uniqueId}`}>
                            <div className="tabinsidebx table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Kenmerken</th>
                                            <th>Inbegrepen</th>
                                            <th>Informatie</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Verzekerd bedrag</td>
                                            <td>€...</td>
                                            <td>....</td>
                                        </tr>
                                        {coverages && coverages.length > 0 &&
                                            <>
                                                {coverages?.map((item, i) => (
                                                    <tr key={i}>
                                                        <td>{item?.coverage_details?.name}</td>
                                                        <td><Image width={36} height={36} alt="aa" src='/images/faqicon.png' /></td>
                                                        <td>{item?.coverage_details?.description}</td>
                                                    </tr>
                                                ))}
                                            </>}
                                        
                                    </tbody>
                                </table>
                                <div className="text-start">
                                    <a href="javascript:void(0);" className="viwmr">Bekijk meer</a>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id={`tab3${uniqueId}`} role="tabpanel" aria-labelledby={`tab3-tab${uniqueId}`}>
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
                                        <Image width={200} height={200} alt="aa" src='/images/swintoninsurance.png' className='img-fluid' />
                                        <p>Text....</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id={`tab4${uniqueId}`} role="tabpanel" aria-labelledby={`tab4-tab${uniqueId}`}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="tabbxleft">
                                        <div className="table-responsive">
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
                                                        <td>Stappenplan</td>
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
                                        <h4>Stappenplan</h4>
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
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="stap6"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stapc6" aria-expanded="false" aria-controls="stapc6"> Stap 6 </button></h2>
                                                <div id="stapc6" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#stepAccordion">
                                                    <div className="accordion-body"> Antwoord op vraag 6. </div>
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

export default HomeInsuranceTabingPart