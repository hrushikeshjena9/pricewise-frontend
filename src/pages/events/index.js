import React, { useEffect, useState } from "react";
import EventsFormTop from "../../../components/Events/EventsStep1/EventsFormTop";
import Progress from "../../../components/VehicleInsurance/VehicleInsuranceStep1/Progress";
import EventsDeails from "../../../components/Events/EventsStep1/EventsDeails";
import EventsFaq from "../../../components/Events/EventsStep1/EventsFaq";
import EventsLeftStep2 from "../../../components/Events/EventsStep2/EventsLeftStep2";
import EventsRightStep2 from "../../../components/Events/EventsStep2/EventsRightStep2";
import EventsTabingPart from "../../../components/Events/EventsStep2/EventsTabingPart";
import EventStep3Left from "../../../components/Events/EventsStep3/EventStep3Left";
import EventStep3Right from "../../../components/Events/EventsStep3/EventStep3Right";
import EventsStep4Left from "../../../components/Events/EventsStep4/EventsStep4Left";
import EventsStep4Right from "../../../components/Events/EventsStep4/EventsStep4Right";

const Index = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState("0");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [show, setShow] = useState(1);
  useEffect(() => {
    if (count == 0) {
      setWidth("30%");
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
          <EventsFormTop setCount={setCount} />
          <EventsDeails />
          <EventsFaq />
        </>
      )}
      {count == 1 && (
        <>
          <Progress count={count} setCount={setCount} width={width} />
          <div className="container my-4">
            <div className="row">
              <EventsLeftStep2 />
              <div className="col-lg-8">
                <EventsRightStep2
                  showMoreInfo={showMoreInfo}
                  setShowMoreInfo={setShowMoreInfo}
                />
                {showMoreInfo && <EventsTabingPart />}
              </div>
            </div>
          </div>
        </>
      )}
      {count == 2 && (
        <>
          <Progress count={count} setCount={setCount} width={width} />
          <div className="comparestep3">
            <div className="container my-4">
              <div className="row">
                <EventStep3Left />
                <EventStep3Right />
              </div>
            </div>
          </div>
        </>
      )}
      {count == 3 && (
        <>
          <Progress count={count} setCount={setCount} width={width} />
          <div className="container">
            <div className="comparestep3">
              <div className="row">
                <EventsStep4Left />
                <EventsStep4Right />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
