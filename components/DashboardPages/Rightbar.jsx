import Image from 'next/image'
import React from 'react'

const Rightbar = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="rightprofile">
                    <h5 className="mb-4">Veel gestelde vragen</h5>
                    <div className="accordion" id="faqAccordion1">
                        {/* FAQ Item 1 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Vraag 1
                                </button>
                            </h2>
                            <div id="collapseOne1" className="accordion-collapse collapse" aria-labelledby="headingOne1" data-bs-parent="#faqAccordion1">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula ut arcu fermentum ultricies.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Vraag 2
                                </button>
                            </h2>
                            <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#faqAccordion1">
                                <div className="accordion-body">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Vraag 3
                                </button>
                            </h2>
                            <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#faqAccordion1">
                                <div className="accordion-body">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 4 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Vraag 4
                                </button>
                            </h2>
                            <div id="collapseFour1" className="accordion-collapse collapse" aria-labelledby="headingFour1" data-bs-parent="#faqAccordion1">
                                <div className="accordion-body">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 5 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Vraag 5
                                </button>
                            </h2>
                            <div id="collapseFive1" className="accordion-collapse collapse" aria-labelledby="headingFive1" data-bs-parent="#faqAccordion1">
                                <div className="accordion-body">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="mb-4 mt-4"><span>Energise Regelt</span></h5>
                    <div className="accordion" id="faqAccordion2">
                        {/* FAQ Item 1: Tailor-made offers */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Aanbod op maat
                                </button>
                            </h2>
                            <div id="collapseOne2" className="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#faqAccordion2">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula ut arcu fermentum ultricies.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 2: Request */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" />  Aanvraag
                                </button>
                            </h2>
                            <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#faqAccordion2">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula ut arcu fermentum ultricies.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 3: Unique deals */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Unieke deals
                                </button>
                            </h2>
                            <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree2" data-bs-parent="#faqAccordion2">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula ut arcu fermentum ultricies.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 4: Clarity */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" />  Duidelijkheid
                                </button>
                            </h2>
                            <div id="collapseFour2" className="accordion-collapse collapse" aria-labelledby="headingFour2" data-bs-parent="#faqAccordion2">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula ut arcu fermentum ultricies.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 5: Service */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2">
                                    <Image width={22} height={22} alt='asd' src="/images/faqicon.png" /> Service
                                </button>
                            </h2>
                            <div id="collapseFive2" className="accordion-collapse collapse" aria-labelledby="headingFive2" data-bs-parent="#faqAccordion2">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula ut arcu fermentum ultricies.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightbar