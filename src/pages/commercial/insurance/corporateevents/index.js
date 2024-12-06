import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import EventCommercialStepFrom from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep1/EventCommercialStepFrom";
import EventCommercialDeails from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep1/EventCommercialDeails";
import EventCommercialFaq from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep1/EventCommercialFaq";
import EventstCommercialtop from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep2/EventstCommercialtop";
import EventCommercialStep2left from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep2/EventCommercialStep2left";
import EventCommercialAction from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep2/EventCommercialAction";
import EventCommercialTabing from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep2/EventCommercialTabing";
import EventCommercialStep4Right from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep4/EventCommercialStep4Right";
import EventtCommercialStep4left from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep4/EventtCommercialStep4left";
import EventCommercialstep3Right from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep3/EventCommercialstep3Right";
import EventCommercialStep3left from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialEventsLargeStep3/EventCommercialStep3left";
import BusinessTripStep2Left from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialBusinessTrip/CommercialBusinessTripStep2/BusinessTripStep2Left";
import BusinessTripStep3Left from "../../../../../components/Commercial/Insurance/CommercialCorporateEvents/CommercialBusinessTrip/CommercialBusinessTripStep3/BusinessTripStep3Left";
import EventsTabingPart from "../../../../../components/Events/EventsStep2/EventsTabingPart";
const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [show, setShow] = useState(1);
  const [showStepper, setShowStepper] = useState(false);
  const [showCompactContent, setShowCompactContent] = useState(false);
  const [secondFormPart, setSecondFormPart] = useState(false);
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
          <main>
            <EventCommercialStepFrom
              setShowStepper={setShowStepper}
              showStepper={showStepper}
              setCount={setCount}
              showCompactContent={showCompactContent}
              setShowCompactContent={setShowCompactContent}
              secondFormPart={secondFormPart}
              setSecondFormPart={setSecondFormPart}
            />
            <EventCommercialDeails />
            <EventCommercialFaq />
          </main>
        </>
      )}
      <>
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
                          Stap 2: Vergelijk{" "}
                          <i className="fas fa-chevron-right" />
                        </li>
                        <li
                          onClick={() => setCount(2)}
                          className={count == 2 ? "active" : ""}
                        >
                          Stap 3: Aanvraag{" "}
                          <i className="fas fa-chevron-right" />
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
                        Nog even jouw deal veiligstellen en de rest regelen wij
                        verder...
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
                <main>
                  <section>
                    <div className="container">
                      {secondFormPart == false && (
                        <div className="comparestep">
                          <EventstCommercialtop />
                          <div className="row">
                            <EventCommercialStep2left />
                            <div className="col-lg-8">
                              <div className="listofcompanybx">
                                <>
                                  <EventCommercialAction
                                    showMoreInfo={showMoreInfo}
                                    setShowMoreInfo={setShowMoreInfo}
                                  />
                                  {showMoreInfo && <EventsTabingPart />}
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {secondFormPart == true && (
                        <div className="container my-3">
                          <div className="row">
                            <BusinessTripStep2Left />
                            <div className="col-lg-8">
                              <div className="listofcompanybx">
                                <>
                                  <EventCommercialAction
                                    showMoreInfo={showMoreInfo}
                                    setShowMoreInfo={setShowMoreInfo}
                                  />
                                  {showMoreInfo && <EventCommercialTabing />}
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                </main>
              </>
            )}
            {count == 2 && (
              <>
                {secondFormPart == false && (
                  <div className="container">
                    <div className="row">
                      <EventCommercialStep3left setShow={setShow} show={show} />
                      <EventCommercialstep3Right setShow={setShow} />
                    </div>
                  </div>
                )}
                {secondFormPart == true && (
                  <>
                    <div className="container my-4">
                      <div className="row">
                        <BusinessTripStep3Left />
                        <EventCommercialstep3Right setShow={setShow} />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {count == 3 && (
              <>
                <div className="container">
                  <div className="comparestep3">
                    <div className="row">
                      <EventtCommercialStep4left />
                      <EventCommercialStep4Right />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Index;
