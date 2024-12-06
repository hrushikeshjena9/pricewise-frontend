import React, { useState, useEffect } from "react";
import { axiosGet } from "../../../utils/ApiCalls";

const EnergyStep4Rightbar = () => {
  const [faq, setfaq] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await axiosGet("get-energy-general-faqs");
      setfaq(data.data);
    };
    fetch();
  }, []);
  return (
    <>
      <div className="col-lg-4">
        <div className="stepright3">
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Veel gestelde vragen
                  </h4>
                </div>
                <div className="accordion" id="accordionExample">
                  {faq?.generalFaqs?.map((value, i) => (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${i}`}
                          aria-expanded="false"
                          aria-controls={`#collapse${i}`}
                        >
                          {value.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {value.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body p-0 shadow">
              <div className="enter-prise-acc">
                <div className="entr-sc-title">
                  <h4>
                    <i className="fas fa-globe" /> Stappenplan
                  </h4>
                </div>
                <div className="accordion" id="accordionover">
                  {faq?.stepPlans?.map((value, i) => (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseOne${i}`}
                          aria-expanded="false"
                          aria-controls={`#collapseOne${i}`}
                        >
                          {value.title}
                        </button>
                      </h2>
                      <div
                        id={`collapseOne${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionover"
                      >
                        <div className="accordion-body">
                          {value.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyStep4Rightbar;
