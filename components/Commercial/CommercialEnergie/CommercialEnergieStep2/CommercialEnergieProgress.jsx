import Image from "next/image";
import React from "react";

const CommercialEnergieProgress = ({setCount,count,width}) => {
  return (
    <section>
      <div className="progressbar-bx">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-unstyled">
                <li
                  onClick={() => setCount(0)}
                  className={count == 0 ? "active" : ""}
                >
                  Stap 1: Vul de gegevens in{" "}
                  <i className="fas fa-chevron-right" />
                </li>
                <li
                  className={count == 1 ? "active" : ""}
                  onClick={() => setCount(1)}
                >
                  Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                </li>
                <li
                  onClick={() => setCount(2)}
                  className={count == 2 ? "active" : ""}
                >
                  Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                </li>
                <li
                  onClick={() => setCount(3)}
                  className={count == 3 ? "active" : ""}
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
  );
};

export default CommercialEnergieProgress;