import React, { useState } from "react";
import LegalCounselFormRightSide from "./LegalCounselFormRightSide";
import LegalCounselFormLeftSide from "./LegalCounselFormLeftSide";
import LegalCounselEnergy from "./LegalCounselEnergy";
import LegalCounselBottomFaq from "./LegalCounselBottomFaq";
import LegalCounselAovModal from "./legalcounselaovmodal";
import LegalCounselCyberSecurityModal from "./legalcounselcybersecuritymodal";
import LegalCounselDriver from "./legalcounseldriver";
import SunAnimation from "../../../../common/SunAnimation";
const className = 'health-insuran'
const LegalCounselIndex = ({ setCount,setShowStepper }) => {
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
                    <LegalCounselFormLeftSide
                      setCount={setCount}
                      setShowStepper={setShowStepper}
                      showCompactContent={showCompactContent}
                      setShowCompactContent={setShowCompactContent}
                      showExtendedContent={showExtendedContent}
                      setShowExtendedContent={setShowExtendedContent}
                    />
                    <LegalCounselFormRightSide
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
      <LegalCounselEnergy />
      <LegalCounselBottomFaq />


      {/* AOV  Modal */}
      <LegalCounselAovModal />
      {/* Cyber Security Modal */}
      <LegalCounselCyberSecurityModal />
      {/* Driver Modal */}
      <LegalCounselDriver />
    </>
  );
};

export default LegalCounselIndex;
