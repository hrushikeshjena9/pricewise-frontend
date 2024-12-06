import React, { useState } from "react";
import EventsFormTopLeft from "./EventsFormTopLeft";
import EventsFormTopRight from "./EventsFormTopRight";
import SunAnimation from "../../common/SunAnimation";

const EventsFormTop = ({ setCount }) => {
  const className = 'event-wrp'
  const [showCompactContent, setShowCompactContent] = useState(true);
  const [showExtendedContent, setShowExtendedContent] = useState(false);
  return (
    <section>
      <div className="eventwrp">
        <SunAnimation className={className} />
        <div className="container">
          <div className="eventbxholder">
            <div className="card border-0">
              <div className="card-body">
                <div className="row justify-content-center">
                  <EventsFormTopLeft
                    showCompactContent={showCompactContent}
                    setShowCompactContent={setShowCompactContent}
                    showExtendedContent={showExtendedContent}
                    setShowExtendedContent={setShowExtendedContent}
                  /> <EventsFormTopRight
                    setCount={setCount}
                    showCompactContent={showCompactContent}
                    setShowCompactContent={setShowCompactContent}
                    showExtendedContent={showExtendedContent}
                    setShowExtendedContent={setShowExtendedContent}
                  />


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFormTop;
