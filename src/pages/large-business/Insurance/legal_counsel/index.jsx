import { useEffect, useState } from "react";
import LegalCounselIndex from "../../../../../components/LargeBusiness/Insurance/legal_counsel/legalCounselStep1/LegalCounselIndex";
import LargeComparisionIndexStep2 from "../../../../../components/LargeBusiness/Insurance/legal_counsel/legalCounselStep2/largecomparisionindexstep2";
import LargeCompareTabbingPart from "../../../../../components/LargeBusiness/Insurance/legal_counsel/legalCounselStep2/largecomparetabbingpart";
import LargeStep3Left from "../../../../../components/LargeBusiness/Insurance/legal_counsel/legalCounselStep3/LargeStep3Left";
import LargeStep3Right from "../../../../../components/LargeBusiness/Insurance/legal_counsel/legalCounselStep3/LargeStep3Right";
import LegalCounselCompareStep4 from "../../../../../components/LargeBusiness/Insurance/legal_counsel/legalCounselStep4/LegalCounselCompareStep4";
import Image from "next/image";

const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showStepper, setShowStepper] = useState(true);
  useEffect(() => {
    if (count == 0) {
      setWidth("25%");
      setShowStepper(false);
    } else if (count == 1) {
      setWidth("50%");
      setShowStepper(true);

    } else if (count == 2) {
      setWidth("75%");
      setShowStepper(true);

    } else if (count == 3) {
      setWidth("100%");
      setShowStepper(true);

    } else {
      setWidth(null);
    }
  }, [count]);
  return (
    <>
      {showStepper && (
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
                      Stap 3: Aanvraag  <i className="fas fa-chevron-right" />
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
      )}
      {count == 0 && (
        <>
          <LegalCounselIndex
            setCount={setCount}
            setShowStepper={setShowStepper}
          />
        </>
      )}

      {count == 1 && (
        <>
          <LargeComparisionIndexStep2
            showMoreInfo={showMoreInfo}
            setShowMoreInfo={setShowMoreInfo}
          />
          {/* {showMoreInfo && <LargeCompareTabbingPart />} */}
        </>
      )}

      {count == 2 && (
        <>
          <div className="container">
            <div className="row">
              <LargeStep3Left />
              <LargeStep3Right />
            </div>
          </div>
        </>
      )}
      {count == 3 && (
        <>
          <LegalCounselCompareStep4 />
        </>
        )}
    </>
  );
};

export default Index;
