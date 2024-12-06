import { useEffect, useState } from "react";
import Image from "next/image";
import LegalCounselIndexStep1 from "../../../../../components/Commercial/Insurance/Legal_Counsel/ComLegalCounselStep1/LegalCounselIndexStep1";
import LegalCounseCompareIndexStep2 from "../../../../../components/Commercial/Insurance/Legal_Counsel/ComLegalCounselStep2/LegalCounseCompareIndexStep2";
import LegalCounselCompareStep4 from "../../../../../components/Commercial/Insurance/Legal_Counsel/ComLegalCounselStep4/LegalCounselCompareStep4";
import LegalCounselLeftStep3 from "../../../../../components/Commercial/Insurance/Legal_Counsel/ComLegalCounselStep3/LegalCounselLeftStep3";
import LegalCounselRightStep3 from "../../../../../components/Commercial/Insurance/Legal_Counsel/ComLegalCounselStep3/LegalCounselRightStep3";

const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showStepper, setShowStepper] = useState(false);
  useEffect(() => {
    if (count == 0) {
      setWidth("25%");
      setShowStepper(false);
    } else if (count == 1) {
      setWidth("50%");
    } else if (count == 2) {
      setWidth("75%");
    } else if (count == 3) {
      setWidth("100%");
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
                      Step 1: Fill in the details{" "}
                      <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      className={count == 1 ? "active" : ""}
                      onClick={() => setCount(1)}
                    >
                      Step 2: Compare <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      onClick={() => setCount(2)}
                      className={count == 2 ? "active" : ""}
                    >
                      Step 3: Request <i className="fas fa-chevron-right" />
                    </li>
                    <li
                      onClick={() => setCount(3)}
                      className={count == 3 ? "active" : ""}
                    >
                      Step 4: Completed <i className="fas fa-flag" />
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
                  <p className="mb-0">
                    {" "}
                    Je bent een stap dichterbij jouw beste keuze...
                    <Image
                      src="/images/hourglass.png"
                      alt="flags"
                      width={24}
                      height={24}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {count == 0 && (
        <>
          <LegalCounselIndexStep1
            setCount={setCount}
            setShowStepper={setShowStepper}
          />
        </>
      )}
      {count == 1 && (
        <>
          <LegalCounseCompareIndexStep2 />
        </>
      )}

      {count == 2 && (
        <>
          <div className="container">
            <div className="row">
                <LegalCounselLeftStep3 />
                <LegalCounselRightStep3 />
            </div>
          </div>
        </>
      )}
      {count == 3 && <>
        <LegalCounselCompareStep4 />
      
      </>}
    </>
  );
};

export default Index;
