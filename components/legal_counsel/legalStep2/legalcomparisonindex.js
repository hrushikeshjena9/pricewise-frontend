import React, { useEffect, useState } from "react";
import LegalComparisonAction from './legalcomparisonaction';
import LegalStep3index from '../legalStep3/LegalStep3index';
import LegalComparisonLeftSide from './legalcomparisonleftside';
import Image from "next/image";
import LegalStep4Left from "../legalStep4/LegalStep4Left";
import LegalStep4Right from "../legalStep4/LegalStep4Right";

function LegalComparisonIndex() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  useEffect(() => {
    if (count == 0) {
      setWidth("50%");
    } else if (count == 1) {
      setWidth("75%");
    } else if (count == 2) {
      setWidth("100%");
    } else {
      setWidth(null);
    }
  }, [count]);
  return (
    <>
     <section>
        <div className="progressbar-bx">
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                  <li>
                    Stap 1: Vul de gegevens in{" "}
                    <i className="fas fa-chevron-right" />
                  </li>
                  <li
                    className={count == 0 ? "active" : ""}
                    onClick={() => setCount(0)}
                  >
                    Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                  </li>
                  <li
                    onClick={() => setCount(1)}
                    className={count == 1 ? "active" : ""}
                  >
                    Stap 3: Aanvraag  <i className="fas fa-chevron-right" />
                  </li>
                  <li
                    onClick={() => setCount(2)}
                    className={count == 2 ? "active" : ""}
                  >
                    Stap 4: Voltooid <i className="fas fa-flag" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: width }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                 <p className='mb-0'> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24}/></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {count == 0 && 
        <section>
          <div className="container">
            <div className="comparestep">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <a className="btneng1" href="javascript:void(0);">
                    Energise beste advies (…)
                  </a>
                </div>
                <div className="col-lg-4 text-center">
                  <a className="btneng2" href="javascript:void(0);">
                    Energise goedkoopste deals (…)
                  </a>
                </div>
                <div className="col-lg-4 text-center">
                  <a className="btneng2" href="javascript:void(0);">
                    Alle gecontracteerde (…)
                  </a>
                </div>
              </div>
              <div className="steptitle">
                <div className="row">
                  <div className="col-lg-3">
                    <a href="javascript:void(0);" className="saleicon">
                      <Image width={200} height={200} alt="aa" src="/images/salelcon.png" className="img-fluid" />
                    </a>
                  </div>
                  <div className="col-lg-9">
                    <h2>Vergelijk, Bespaar &amp; Aanvragen maar</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <LegalComparisonLeftSide />
                </div>

                <div className="col-lg-8">
                    <LegalComparisonAction />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      {count == 1 && 
        <>
          <LegalStep3index/>
        </>
      }
      {count == 2 && 
        <>
          <section>
            <div className="container">
              <div className="row">
                <LegalStep4Left />
                <LegalStep4Right />
              </div>
            </div>
          </section>
        </>
      }

    </>
  )
}

export default LegalComparisonIndex