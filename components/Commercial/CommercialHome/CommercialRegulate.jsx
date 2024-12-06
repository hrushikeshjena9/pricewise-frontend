import Image from 'next/image'
import React from 'react'

const CommercialRegulate = () => {
  return (
    <section className="enterprise-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="enterprise-bx">
              <div className="enterprise-cont-bx">
                <h4>Een onderneming vergt veel tijd.</h4>
                <h5>Wij ontlasten de zorgen zodat jij focust op jouw
                  bedrijf</h5>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="enterprise-sm-item">
                    <h5 >Klantgerichtheid</h5>
                    <Image
                      src="/images/championship.png"
                      height={200}
                      width={200}
                      alt="qwe"
                    />
                    <p>97%</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="enterprise-sm-item">
                    <h5>Opgebrachte <br /> besparingen</h5>
                    <Image
                      src="/images/wallet.png"
                      height={200}
                      width={200}
                      alt="qwe"
                    />
                    <p>Stand 387.211</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="enterprise-sm-item">
                    <h5>Passend aanbod</h5>
                    <Image
                      src="/images/navcompass.png"
                      height={200}
                      width={200}
                      alt="qwe"
                    />
                    <p>95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="enter-prise-acc">
              <div className="entr-sc-title">
                <h4>Energise Regelt</h4>
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
                      Aanbod op maat
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit voluptatibus natus quod ab necessitatibus.
                      Accusantium, ut alias.
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
                      (Over) stappenplan
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit laborum commodi placeat modi beatae eveniet iste
                      quisquam eius ratione.
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
                      Unieke deals
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit laborum commodi placeat modi beatae eveniet iste
                      quisquam eius ratione.
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
                      Duidelijkheid
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit laborum commodi placeat modi beatae eveniet iste
                      quisquam eius ratione.
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
                      Service
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit laborum commodi placeat modi beatae eveniet iste
                      quisquam eius ratione.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommercialRegulate