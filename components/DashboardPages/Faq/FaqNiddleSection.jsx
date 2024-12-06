import React from 'react'

const FaqNiddleSection = () => {
    return (
        <>
            <div className="col-lg-7">
                <div className="faq-wrp">
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Kies een <span>onderwerp?</span></h5>
                            </div>
                            <select className="form-select selectfaqtopic" id="serviceSelect">
                                <option selected>Onderwerp</option>
                                <option value="gas">Gas</option>
                                <option value="internet">Internet</option>
                            </select>
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
                                        <h2 className="accordion-header" id="headinglgfaq1">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq1" aria-expanded="true" aria-controls="collapselgfaq1">
                                                Vraag 1
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq1" className="accordion-collapse collapse" aria-labelledby="headinglgfaq1" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                nec odio. Praesent libero. Sed
                                                cursus ante dapibus diam. Sed nisi.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 2 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq2" aria-expanded="false" aria-controls="collapselgfaq2">
                                                Vraag 2
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq2" className="accordion-collapse collapse" aria-labelledby="headinglgfaq2" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat
                                                mi a tellus consequat imperdiet.
                                                Vestibulum sapien. Proin quam.
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more FAQ items */}
                                    {/* FAQ Item 3 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq3" aria-expanded="false" aria-controls="collapselgfaq3">
                                                Vraag 3
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq3" className="accordion-collapse collapse" aria-labelledby="headinglgfaq3" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
                                                In condimentum facilisis porta. Sed
                                                nec diam eu diam mattis viverra.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 4 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq4">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq4" aria-expanded="false" aria-controls="collapselgfaq4">
                                                Vraag 4
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq4" className="accordion-collapse collapse" aria-labelledby="headinglgfaq4" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                                                euismod in, pharetra a, ultricies
                                                in, diam. Sed arcu.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ content for internet */}
                                <div id="internetFAQ" style={{ display: 'none' }} className="accordion">
                                    {/* Internet FAQ content goes here */}
                                    {/* FAQ Item 5 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq5" aria-expanded="false" aria-controls="collapselgfaq5">
                                                Vraag 5
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq5" className="accordion-collapse collapse" aria-labelledby="headinglgfaq5" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Vestibulum vitae libero vitae neque sodales tincidunt. Mauris
                                                blandit, nulla non tristique auctor,
                                                sapien metus aliquet magna, non aliquet mi odio nec ligula.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 6 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq6">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq6" aria-expanded="false" aria-controls="collapselgfaq6">
                                                Vraag 6
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq6" className="accordion-collapse collapse" aria-labelledby="headinglgfaq6" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                nec odio. Praesent libero. Sed
                                                cursus ante dapibus diam. Sed nisi.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 7 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq7">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq7" aria-expanded="false" aria-controls="collapselgfaq7">
                                                Vraag 7
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq7" className="accordion-collapse collapse" aria-labelledby="headinglgfaq7" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat
                                                mi a tellus consequat imperdiet.
                                                Vestibulum sapien. Proin quam.
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item 8 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headinglgfaq8">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselgfaq8" aria-expanded="false" aria-controls="collapselgfaq8">
                                                Vraag 8
                                            </button>
                                        </h2>
                                        <div id="collapselgfaq8" className="accordion-collapse collapse" aria-labelledby="headinglgfaq8" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
                                                In condimentum facilisis porta. Sed
                                                nec diam eu diam mattis viverra.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faqinput">
                            <div className="container">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">Zie jij jouw vraag <span>niet</span>?</h5>
                                    </div>
                                    <div className="card-body">
                                        <select className="form-select" id="serviceSelect">
                                            <option selected>Selecteer jouw Onderwerp</option>
                                            <option value="gas">Gas</option>
                                            <option value="internet">Internet</option>
                                        </select>
                                        <div className="mb-3">
                                            <textarea className="form-control" id="eTextarea" rows={3} placeholder="Wat is jouw vraag of opmerking?" defaultValue={""} />
                                            <p>Gaat dit om een order? Vergeet jouw ordernummer niet te vermelden
                                                in het bericht.</p>
                                            <p>Wij hanteren eeen beleid om binnen <a href="#">5 werkdagen</a>
                                                jouw vraag te beantwoorden.</p>
                                        </div>
                                        <div className="urgentlink">
                                            <a href="#">Heeft dit spoed?</a>
                                        </div>
                                        <div className="text-center">
                                            <button className="faqsubmitbtn">Verstuur</button>
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

export default FaqNiddleSection