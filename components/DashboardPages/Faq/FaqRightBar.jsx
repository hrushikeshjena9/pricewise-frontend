import Image from 'next/image'
import React from 'react'

const FaqRightBar = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="rightprofile">
                    <div className="enter-prise-acc mb-4">
                        <div className="entr-sc-title">
                            <h4>Overstappenplan</h4>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Stap 1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                        voluptatibus natus quod ab necessitatibus. Accusantium, ut alias.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Stap 2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum
                                        commodi placeat modi beatae eveniet iste quisquam eius ratione.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Stap 3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum
                                        commodi placeat modi beatae eveniet iste quisquam eius ratione.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                        Stap 4
                                    </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum
                                        commodi placeat modi beatae eveniet iste quisquam eius ratione.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        Stap 5
                                    </button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum
                                        commodi placeat modi beatae eveniet iste quisquam eius ratione.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="enter-prise-acc">
                        <div className="entr-sc-title">
                            <h4>Energise Regelt</h4>
                        </div>
                        <div className="accordion" id="faqAccordion1">
                            {/* FAQ Item 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                        <Image width={22} height={22} src="/images/faqicon.png" alt='aa' /> Aanbod op maat
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
                                        <Image width={22} height={22} src="/images/faqicon.png" alt='aa'/> Aanvraag
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
                                        <Image width={22} height={22} src="/images/faqicon.png" alt='aa' /> Unieke deals
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
                                        <Image width={22} height={22} src="/images/faqicon.png" alt='aa' /> Duidelijkheid
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
                                        <Image width={22} height={22} src="/images/faqicon.png" alt='aa' /> Service
                                    </button>
                                </h2>
                                <div id="collapseFive1" className="accordion-collapse collapse" aria-labelledby="headingFive1" data-bs-parent="#faqAccordion1">
                                    <div className="accordion-body">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-bx">
                        <span>3</span>
                        <h4>Jouw vergelijk <span>meer voordeel!</span></h4>
                        <div className="com-pro">
                            <div className="comp-pro-bx">
                                <span>€5</span>
                                <h5>Vergelijk meer, <span>bespaar weer</span></h5>
                            </div>
                            <div className="comp-num">
                                <h4>1</h4>
                                <h4>5</h4>
                            </div>
                        </div>
                    </div>
                    <div className="how-work-modal">
                        <h6 data-bs-toggle="modal" data-bs-target="#exampleModal">Hoe werkt het?</h6>
                    </div>
                    <div className="container">
                        <div className="socialwrp">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="socialright">
                                        <div className="card">
                                            <div className="card-header">
                                                <h2 className="mb-0 py-3">Klantenservice</h2>
                                            </div>
                                            <div className="card-body">
                                                <h6>Social media</h6>
                                                <p><span>Volg</span> ons op:</p>
                                                <ul className="list-unstyled social-icons">
                                                    <li>
                                                        <a href="#">
                                                            <Image width={34} height={34} src="/images/snapchat.png" alt="Snapchat" />
                                                            <span>Snapchat</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Image width={34} height={34} src="/images/facebook.png" alt="Facebook" />
                                                            <span>Facebook</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Image width={34} height={34} src="/images/Instagram.png" alt="Instagram" />
                                                            <span>Instagram</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h6>Contact</h6>
                                                <p><span>Bereik</span> ons op ma t/m vrij van 9 tot 18:00</p>
                                                <ul className="list-unstyled social-icons">
                                                    <li>
                                                        <a href="#">
                                                            <Image width={34} height={34} src="/images/whatappicon.png" alt="asd"/>
                                                            <span>Whatsapp</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Image width={34} height={34} src="/images/email.png" alt="asd"/>
                                                            <span>Email</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Image width={34} height={34} src="/images/callicon.png" alt="asd"/>
                                                            <span>Telefoon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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

export default FaqRightBar