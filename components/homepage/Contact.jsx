import Image from "next/image";
import React,{useState,useEffect} from "react";
import {axiosGet} from "../../utils/ApiCalls";

function Contact() {
  const [faq,setFaq] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await axiosGet("get-energy-general-faqs");
      setFaq(data.data)
    };
    fetch();
  },[]);
  return (
    <section className="ptb-50 en-pro-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="en-pro-img">
              <Image width={547} height={456} alt="aa"
                src="/images/energy.png"
                
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="en-pr-cont">
              <h5>
                Energise zorgt voor een duidelijke overzicht in jouw
                vastelasten. Hulp nodig bij het <span>overstappen?</span>
              </h5>
              <h6>
                Bekijk de <span>(over)stappenplan</span> of maak een afspraak
                met een van onze besparingsadviseurs.
              </h6>
              <a href="#" className="btn-one">
                Contact
              </a>
            </div>
          </div>
          <div className="col-lg-5 justify-content-end d-flex">
            <div className="en-pr-trans">
              <div className="row align-items-center">
                {/* --------tab starts--------- */}
                <div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Overstappenplan</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Veel gestelde vragen?</button>
                    </li>

                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                          {faq?.stepPlans?.map((value,i) => (
                          <div key={i} className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${i}`} aria-expanded="false" aria-controls={`#flush-collapseOne${i}`}>
                                {value.title}
                              </button>
                            </h2>
                            <div id={`flush-collapseOne${i}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">{value.description}</div>
                            </div>
                          </div>
                          ))}
                          {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Item 2
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Item 3
                              </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third items accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {faq?.generalFaqs?.map((value,i) => (
                          <div key={i} className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapsefour${i}`} aria-expanded="false" aria-controls={`#flush-collapsefour${i}`}>
                                {value.title}
                              </button>
                            </h2>
                            <div id={`flush-collapsefour${i}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">{value.description}</div>
                            </div>
                          </div>
                          ))}
                          {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                                Item 2
                              </button>
                            </h2>
                            <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second items accordion body. Les imagine this being filled with some actual content.</div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                                Item 3
                              </button>
                            </h2>
                            <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third items accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ------------tab ends-------- */}

                {/* <div className="col-lg-6">
                  <div className="en-trans-title">
                    <h5>Overstappenplan</h5>
                  </div>
                  <div className="en-trans-form">
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Step 1</option>
                        <option value>Step 1</option>
                        <option value>Step 1</option>
                        <option value>Step 1</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Step 2</option>
                        <option value>Step 2</option>
                        <option value>Step 2</option>
                        <option value>Step 2</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Step 3</option>
                        <option value>Step 3</option>
                        <option value>Step 3</option>
                        <option value>Step 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Step 4</option>
                        <option value>Step 4</option>
                        <option value>Step 4</option>
                        <option value>Step 4</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Step 5</option>
                        <option value>Step 5</option>
                        <option value>Step 5</option>
                        <option value>Step 5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="en-trans-title">
                    <h5>Veel gestelde vragen?</h5>
                  </div>
                  <div className="en-trans-form">
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Energy</option>
                        <option value>Energy 1</option>
                        <option value>Energy 2</option>
                        <option value>Energy 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>internet &amp; TV </option>
                        <option value>internet &amp; TV 2</option>
                        <option value>internet &amp; TV 3</option>
                        <option value>internet &amp; TV 4</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Smart Phone </option>
                        <option value>Smart Phone 2</option>
                        <option value>Smart Phone 3</option>
                        <option value>Smart Phone 4</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Shop</option>
                        <option value>Shop 2</option>
                        <option value>Shop 3</option>
                        <option value>Shop 4</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select">
                        <option value>Energise Exclusive</option>
                        <option value>Energise Exclusive</option>
                        <option value>Energise Exclusive</option>
                        <option value>Energise Exclusive</option>
                      </select>
                    </div>
                  </div>
                </div> */}
              </div>
              <a href="#" className="btn-three">
                Lees meer...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
