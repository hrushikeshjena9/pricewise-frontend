import React, { useState } from "react";
import SmartphonePersonalleftside from "./smartphonePersonalleftside";
import SmartphonePersonalrightside from "./smartphonePersonalrightside";
import SmartphonPersonaleenergy from "./smartphonPersonaleenergy";
import SmartphonePersonalbottomfaq from "./smartphonePersonalbottomfaq";
import SunAnimation from "../../common/SunAnimation";

const SmartphonePersonalgeneral = ({ setCount }) => {
  const [showCompactContent, setShowCompactContent] = useState(true);
  const [showExtendedContent, setShowExtendedContent] = useState(false);
  const className = 'internet-tvlarge'
  return (
    <>
      <section>
        <div className="eventwrp cybersecurity-wrp">
        <SunAnimation className={className} />
          <div className="container">
            <div className="eventbxholder">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <SmartphonePersonalleftside
                      setCount={setCount}
                      showCompactContent={showCompactContent}
                      setShowCompactContent={setShowCompactContent}
                      showExtendedContent={showExtendedContent}
                      setShowExtendedContent={setShowExtendedContent}
                    />
                    <SmartphonePersonalrightside
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

      <SmartphonPersonaleenergy />

      <SmartphonePersonalbottomfaq />

     
    </>
  );
};

export default SmartphonePersonalgeneral;