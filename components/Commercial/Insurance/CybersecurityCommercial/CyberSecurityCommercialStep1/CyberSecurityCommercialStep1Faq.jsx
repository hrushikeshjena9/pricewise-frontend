import React from 'react'

const CyberSecurityCommercialStep1Faq = () => {
    return (
        <>
            <section>
                <div className="faq-wrp dealquestion">
                    <div className="page-title">
                        <h2>Alles over onze<span> Cybersecurity </span> Deals</h2>
                    </div>
                    <div className="topicdeal">
                        <h2> <span /></h2>
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">Kies een <span>onderwerp?</span></h5>
                                </div>
                                <select className="form-select selectfaqtopic" id="serviceSelect">
                                    <option selected>Onderwerp</option>
                                    <option value="gas">Option 1</option>
                                    <option value="internet">Option 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="faqbxwrp">
                        <div className="container">
                            <div id="faqBox">
                                {/* FAQ content for gas */}
                                <div id="gasFAQ" style={{ display: 'block' }} className="accordion">
                                    {/* Gas FAQ content goes here */}
                                    {/* FAQ Item 1 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Onderwerp: Lorem ipsum dolor sit amet?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 2 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Onderwerp: Nunc nec neque?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more FAQ items */}
                                    {/* FAQ Item 3 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Onderwerp: Aenean posuere orci?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 4 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Onderwerp: Pellentesque habitant morbi tristique?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ content for internet */}
                                <div id="internetFAQ" style={{ display: 'none' }} className="accordion">
                                    {/* Internet FAQ content goes here */}
                                    {/* FAQ Item 5 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Onderwerp: Fusce risus nisl, viverra et?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Vestibulum vitae libero vitae neque sodales tincidunt. Mauris blandit, nulla non tristique auctor, sapien metus aliquet magna, non aliquet mi odio nec ligula.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 6 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Onderwerp: Vestibulum ante ipsum?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 7 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                Onderwerp: Donec fringilla ligula?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 8 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                Onderwerp: Phasellus viverra nulla?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CyberSecurityCommercialStep1Faq