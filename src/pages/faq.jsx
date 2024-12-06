import Image from "next/image";
import React from "react";

function Faq() {
  return (
    <section>
      <div className="container">
        <div className="page-title">
          <h2>
            <span>Veelgestelde</span> vragen
          </h2>
          <h5>
            Alle belangrijke <span>vragen</span> &amp;<span>antwoorden</span>{" "}
            vind jij hier
          </h5>
        </div>
      </div>
      <div className="faq-wrp">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                Kies een <span>onderwerp?</span>
              </h5>
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
              <div
                id="gasFAQ"
                style={{ display: "block" }}
                className="accordion"
              >
                {/* Gas FAQ content goes here */}
                {/* FAQ Item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Question 1: Lorem ipsum dolor sit amet?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Question 2: Nunc nec neque?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
                      feugiat mi a tellus consequat imperdiet. Vestibulum
                      sapien. Proin quam.
                    </div>
                  </div>
                </div>
                {/* Add more FAQ items */}
                {/* FAQ Item 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Question 3: Aenean posuere orci?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Vivamus luctus urna sed urna ultricies ac tempor dui
                      sagittis. In condimentum facilisis porta. Sed nec diam eu
                      diam mattis viverra.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Question 4: Pellentesque habitant morbi tristique?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Morbi in sem quis dui placerat ornare. Pellentesque odio
                      nisi, euismod in, pharetra a, ultricies in, diam. Sed
                      arcu.
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ content for internet */}
              <div
                id="internetFAQ"
                style={{ display: "none" }}
                className="accordion"
              >
                {/* Internet FAQ content goes here */}
                {/* FAQ Item 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Question 5: Fusce risus nisl, viverra et?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Vestibulum vitae libero vitae neque sodales tincidunt.
                      Mauris blandit, nulla non tristique auctor, sapien metus
                      aliquet magna, non aliquet mi odio nec ligula.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 6 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Question 6: Vestibulum ante ipsum?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 7 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Question 7: Donec fringilla ligula?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc
                      feugiat mi a tellus consequat imperdiet. Vestibulum
                      sapien. Proin quam.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 8 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      Question 8: Phasellus viverra nulla?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Vivamus luctus urna sed urna ultricies ac tempor dui
                      sagittis. In condimentum facilisis porta. Sed nec diam eu
                      diam mattis viverra.
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
                  <h5 className="mb-0">
                    Zie jij jouw vraag <span>niet</span>?
                  </h5>
                </div>
                <div className="card-body">
                  <select className="form-select" id="serviceSelect">
                    <option selected>Selecteer jouw Onderwerp</option>
                    <option value="gas">Gas</option>
                    <option value="internet">Internet</option>
                  </select>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="eTextarea"
                      rows={3}
                      placeholder="Wat is jouw vraag of opmerking?"
                      defaultValue={""}
                    />
                    <p>
                      Gaat dit om een order? Vergeet jouw ordernummer niet te
                      vermelden in het bericht.
                    </p>
                    <p>
                      Wij hanteren eeen beleid om binnen{" "}
                      <a href="#">5 werkdagen</a> jouw vraag te beantwoorden.
                    </p>
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
          <div className="container">
            <div className="socialwrp">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="leftstep">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="mb-0 py-3">(Over)stappenplan</h2>
                      </div>
                      <div className="card-body">
                        <div className="accordion">
                          {/* FAQ Item 1 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="step1">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsestepOne"
                                aria-expanded="true"
                                aria-controls="collapsestepOne"
                              >
                                Stap 1
                              </button>
                            </h2>
                            <div
                              id="collapsestepOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </div>
                            </div>
                          </div>
                          {/* FAQ Item 2 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="step2">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsestepTwo"
                                aria-expanded="false"
                                aria-controls="collapsestepTwo"
                              >
                                Stap 2
                              </button>
                            </h2>
                            <div
                              id="collapsestepTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="accordion-body">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="step3">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsestep3"
                                aria-expanded="false"
                                aria-controls="collapsestep3"
                              >
                                Stap 3
                              </button>
                            </h2>
                            <div
                              id="collapsestep3"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="accordion-body">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="step4">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsestep4"
                                aria-expanded="false"
                                aria-controls="collapsestep4"
                              >
                                Stap 4
                              </button>
                            </h2>
                            <div
                              id="collapsestep4"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="accordion-body">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="step5">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsestep5"
                                aria-expanded="false"
                                aria-controls="collapsestep5"
                              >
                                Stap 5
                              </button>
                            </h2>
                            <div
                              id="collapsestep5"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="accordion-body">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </div>
                            </div>
                          </div>
                          {/* Add more FAQ items as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="socialright">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="mb-0 py-3">Klantenservice</h2>
                      </div>
                      <div className="card-body">
                        <h6>Social media</h6>
                        <p>
                          <span>Volg</span> ons op:
                        </p>
                        <ul className="list-unstyled social-icons">
                          <li>
                            <a href="#">
                              <Image
                                src="/images/snapchat.png"
                                alt="Snapchat"
                                height={34}
                                width={33}
                              />
                              <span>Snapchat</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/facebook.png"
                                alt="Facebook"
                                height={34}
                                width={33}
                              />
                              <span>Facebook</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/Instagram.png"
                                height={34}
                                width={33}
                                alt="qwe"
                              />
                              <span>Instagram</span>
                            </a>
                          </li>
                        </ul>
                        <h6>Contact</h6>
                        <p>
                          <span>Bereik</span> ons op ma t/m vrij van 9 tot 18:00
                        </p>
                        <ul className="list-unstyled social-icons">
                          <li>
                            <a href="#">
                              <Image
                                src="/images/whatappicon.png"
                                height={34}
                                width={33}
                                alt="qwe"
                              />
                              <span>Whatsapp</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/email.png"
                                height={34}
                                width={33}
                                alt="qwe"
                              />
                              <span>Email</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Image
                                src="/images/callicon.png"
                                height={34}
                                width={33}
                                alt="qwe"
                              />
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
    </section>
  );
}

export default Faq;
