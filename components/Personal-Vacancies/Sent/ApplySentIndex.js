import React from "react";

const ApplySentIndePersonal = () => {
  return (
    <>
      <section className="login-top-title-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="log-title">
                <h3>
                  Wij hopen jouw <span>te ontmoeten</span>
                </h3>
                <p>Jouw ontwikkeling, is onze toekomst</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8 sent-cont-bx">
              <div className="sent-cont">
                <h4>Spannend!</h4>
                <p>
                  Bedankt voor jouw interesse (naam). Wij nemen zo spoedig
                  mogelijk contact met jouw op! <br />
                  Wij hebben jouw gegevens verwerkt en verzonden naar (email).
                  Het kan soms voorkomen, dat jouw bevestiging toch nog in de
                  spam terecht is gekomen. <br />
                  Mocht jij nog vragen hebben? Neem gerust{" "}
                  <a href="#">contact</a> met ons op of bekijk de{" "}
                  <a href="#">veel gestelde vragen</a>. Wij wensen jou namens
                  onze team heel veel succes. Wist je dat... Energise Company
                  over flexplekken beschikt?
                </p>
                <a href="javascript:void(0);" className="cyberprivacylink">
                  <i className="fas fa-2x fa-shield-alt"></i>
                  <span>Privacy</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 sent-card-bx">
              <div className="card mt-4">
                <div className="card-body p-0 shadow">
                  <div className="enter-prise-acc">
                    <div className="entr-sc-title">
                      <h4>
                        <i className="fas fa-globe" /> Veel gestelde vragen
                      </h4>
                    </div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Vraag 1
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit voluptatibus natus quod ab
                            necessitatibus. Accusantium, ut alias.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Vraag 2
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit laborum commodi placeat modi beatae
                            eveniet iste quisquam eius ratione.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Vraag 3
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit laborum commodi placeat modi beatae
                            eveniet iste quisquam eius ratione.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            Vraag 4
                          </button>
                        </h2>
                        <div
                          id="collapsefour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit laborum commodi placeat modi beatae
                            eveniet iste quisquam eius ratione.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefive"
                            aria-expanded="false"
                            aria-controls="collapsefive"
                          >
                            Vraag 5
                          </button>
                        </h2>
                        <div
                          id="collapsefive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit laborum commodi placeat modi beatae
                            eveniet iste quisquam eius ratione.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3 text-center">
                <a href="#" className="btn-one">Verzenden</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplySentIndePersonal;
