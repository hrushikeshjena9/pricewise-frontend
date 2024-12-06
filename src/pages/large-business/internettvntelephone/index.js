import React, { useEffect, useState } from "react";
import FormTop from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep1/FormTop";
import DealsInternetTV from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep1/DealsInternetTV";
import FaqInternetTv from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep1/FaqInternetTv";
import InterTvStep2Left from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep2/InterTvStep2Left";
import InterTvStep2Right from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep2/InterTvStep2Right";
import TabingPartStep2Intertv from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep2/TabingPartStep2Intertv";
import InternetTvStep3Left from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep3/InternetTvStep3Left";
import InternetTvStep3Right from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep3/InternetTvStep3Right";
import InternetTvStep3LeftForm2 from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep3/InternetTvStep3LeftForm2";
import InternetTvTelephoneLeftStep4 from "../../../../components/LargeBusiness/InternettvnTelephone/InternettvntelephoneStep4/InternetTvTelephoneLeftStep4";
import Image from "next/image";
const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [show, setShow] = useState(1);
  const [showStepper, setShowStepper] = useState(true);
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
      {count == 0 && (
        <>
          <FormTop
            setShowStepper={setShowStepper}
            showStepper={showStepper}
            setCount={setCount}
          />
          <DealsInternetTV />
          <FaqInternetTv />
        </>
      )}

      {showStepper && (
        <>
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

          {count == 1 && (
            <>
              <section>
                <div className="comparestep">
                  <div className="container">
                    <div className="row">
                      <InterTvStep2Left />
                      <div className="col-lg-8">
                        <div className="listofcompanybx">
                          <InterTvStep2Right
                            showMoreInfo={showMoreInfo}
                            setShowMoreInfo={setShowMoreInfo}
                          />
                          {showMoreInfo && <TabingPartStep2Intertv />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
          {count == 2 && (
            <>
              <>
                <div className="container my-4">
                  <div className="row">
                    {show == 1 && (
                      <>
                        <InternetTvStep3Left setShow={setShow} show={show} />
                        <InternetTvStep3Right setShow={setShow} />
                      </>
                    )}
                    {show == 2 && (
                      <>
                        <InternetTvStep3LeftForm2 setShow={setShow} />
                        <InternetTvStep3Right setShow={setShow} show={show} />
                      </>
                    )}
                  </div>
                </div>
              </>
            </>
          )}
          {count == 3 && (
            <>
              <div className="container my-4">
                <div className="comparestep3">
                  <div className="row">
                    <InternetTvTelephoneLeftStep4 />
                    <InternetTvStep3Right />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Index;
