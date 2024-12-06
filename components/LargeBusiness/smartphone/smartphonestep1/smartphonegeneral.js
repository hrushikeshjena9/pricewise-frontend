import React, { useState } from "react";
import SmartPhoneGeneralLeftSide from "./smartphonegeneralleftside";
import SmartPhoneGeneralRightSide from "./smartphonegeneralrightside";
import SmartPhoneEnergy from "./smartphoneenergy";
import SmartPhoneBottomFaq from "./smartphonebottomfaq";
import SunAnimation from "../../../common/SunAnimation";

const SmartPhoneGeneral = ({ setCount }) => {
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
                    <SmartPhoneGeneralLeftSide
                      setCount={setCount}
                      showCompactContent={showCompactContent}
                      setShowCompactContent={setShowCompactContent}
                      showExtendedContent={showExtendedContent}
                      setShowExtendedContent={setShowExtendedContent}
                    />
                    <SmartPhoneGeneralRightSide
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

      <SmartPhoneEnergy />

      <SmartPhoneBottomFaq />

     
    </>
  );
};

export default SmartPhoneGeneral;
