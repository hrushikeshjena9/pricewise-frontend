import React, { useState } from "react";
import CommercialSmartphonegeneralleftside from "./CommercialSmartphonegeneralleftside";
import CommercialSmartphonegeneralrightside from "./CommercialSmartphonegeneralrightside";
import CommercialSmartphoneenergy from "./CommercialSmartphoneenergy";
import CommercialSmartphonebottomfaq from "./CommercialSmartphonebottomfaq";
import SunAnimation from "../../../common/SunAnimation";

const CommercialSmartphonegeneral = ({ setCount }) => {
   const className = 'cyber-securi'
  const [showCompactContent, setShowCompactContent] = useState(true);
  const [showExtendedContent, setShowExtendedContent] = useState(false);
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
                    <CommercialSmartphonegeneralleftside
                      setCount={setCount}
                      showCompactContent={showCompactContent}
                      setShowCompactContent={setShowCompactContent}
                      showExtendedContent={showExtendedContent}
                      setShowExtendedContent={setShowExtendedContent}
                    />
                    <CommercialSmartphonegeneralrightside
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

      <CommercialSmartphoneenergy />

      <CommercialSmartphonebottomfaq />

     
    </>
  );
};

export default CommercialSmartphonegeneral;
