import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HealthInsuranceTabingPart = ({ uniqueId, item }) => {
    const [shippingCharge, setShippingCharge] = useState(0)
    const [mechanicalCharge, setMechanicalCharge] = useState(0)
    const [connectionCost, setConnectionCost] = useState(0)
    const [addition, setAddition] = useState(0)
    const [coveragesType, setCoveragesType] = useState()
    const [total, setTotal] = useState(0)
    useEffect(() => {
        if (typeof (item?.shipping_cost) == 'number') setShippingCharge(item?.shipping_cost)
        if (typeof (item?.mechanic_charge) == 'number') setMechanicalCharge(item?.mechanic_charge)
        if (typeof (item?.connection_cost) == 'number') setConnectionCost(item?.connection_cost)
    }, [item])
    useEffect(() => {
        setAddition(shippingCharge + mechanicalCharge + connectionCost)
        setCoveragesType(item?.coverages)
    }, [item])
    useEffect(() => {
        if (typeof (item?.price) == 'number') {
            setTotal(addition + item?.price)
        }
    }, [item])
    return (
        <>
            <div className='listofcompanybx'>
                <div id="listhiddenDiv1" className="tabwrp">
                    <button className="listhideDiv">
                        <i className="fas fa-times" />
                    </button>
                    <ul className="nav nav-tabs" id="myTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active"
                                id={`tab1-tab${uniqueId}`} data-bs-toggle="tab" data-bs-target={`#tab1${uniqueId}`}
                                type="button" role="tab" aria-controls={`tab1${uniqueId}`} aria-selected="true">
                                <i className="fas fa-calculator" />
                                Kosten
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link"
                                id={`tab2-tab${uniqueId}`} data-bs-toggle="tab"
                                data-bs-target={`#tab2${uniqueId}`} type="button" role="tab" aria-controls={`tab2${uniqueId}`} aria-selected="false">
                                <i className="fas fa-shield-alt" />
                                Dekking
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link"
                                id={`tab3-tab${uniqueId}`} data-bs-toggle="tab"
                                data-bs-target={`#tab3${uniqueId}`} type="button" role="tab" aria-controls={`tab3${uniqueId}`} aria-selected="false">
                                <i className="fas fa-user-shield" />
                                Diensten
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link"
                                id={`tab4-tab${uniqueId}`} data-bs-toggle="tab"
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
                                            <h4></h4>
                                            <table className="table table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Premie kosten:</th>
                                                        <td>€{item?.price}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Aanvulling:</th>
                                                        <td>€{addition}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Totaal:</th>
                                                        <td>€{total} p.m.</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Looptijd:</th>
                                                        <td>{item?.contract_length} {item?.contract_type}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Bespaar p.j.:</th>
                                                        <td>€{item?.discount}</td>
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
                        <div className="tab-pane fade" id={`tab2${uniqueId}`} role="tabpanel" aria-labelledby={`tab2-tab${uniqueId}`}>
                            <div className="tabinsidebx table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Tandarts</th>
                                            <th>Inbegrepen</th>
                                            <th>Informatie</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {coveragesType && coveragesType.length > 0 &&
                                            <>
                                                {coveragesType?.map((item, i) => (
                                                    <tr key={i}>
                                                        <td>{item?.coverage_details?.name}</td>
                                                        <td><Image width={36} height={36} alt="aa" src='/images/faqicon.png' /></td>
                                                        <td>{item?.coverage_details?.description}</td>
                                                    </tr>
                                                ))}
                                            </>}
                                        
                                        <tr>
                                            <td>Vrijwillige eigen risico</td>
                                            <td>€...</td>
                                            <td>....</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                            <table className="table table-striped table-bordered table-sm">
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
                                                        <td>Diensten</td>
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

export default HealthInsuranceTabingPart;