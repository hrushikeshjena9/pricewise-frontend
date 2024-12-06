import Image from "next/image";
import React,{useState,useEffect} from "react";
import {axiosGet} from "../../utils/ApiCalls";

const Regulate = () => {
  const [faq,setFaq] = useState([]);
  useEffect(()=> {
    const fetch = async () => {
      const data = await axiosGet("get-regulatory-faqs");
      setFaq(data.data);
    };
    fetch();
  },[]);
  return (
    <section className="enterprise-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="enterprise-bx">
              <div className="enterprise-cont-bx">
                <h4>Energise streeft naar een overzichtelijke toekomst</h4>
                <h5>Onze oplossingen zijn jouw keuzes.</h5>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="enterprise-sm-item">
                    <h5 className="equal-height">Klantgerichtheid</h5>
                    <Image width={200} height={200} alt="aa"
                      src="/images/championship.png"
                      
                    />
                    <p>97%</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="enterprise-sm-item">
                    <h5 className="equal-height">Opgebrachte <br/> besparingen</h5>
                    <Image width={200} height={200} alt="aa"
                      src="/images/wallet.png"
                     
                    />
                    <p>Stand 387.211</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="enterprise-sm-item">
                    <h5 className="equal-height">Passend aanbod</h5>
                    <Image width={200} height={200} alt="aa"
                      src="/images/compass-3.png"
                      
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
                {faq.map((item,i) => (
                <div key={i} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseover${item.id}`}
                      aria-expanded="false"
                      aria-controls={`collapseover${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id= {`collapseover${item.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                     {item.description}
                    </div>
                  </div>
                </div>
                ))}
                {/* <div className="accordion-item">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Regulate;
