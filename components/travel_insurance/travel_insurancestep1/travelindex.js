import React, { useState } from "react";
import TravelEnergy from "./travelenergy";
import TravelSubject from "./travelsubject";
import TravelRightSideForm from "./travelrightsideform";
import TraveLeftSideForm from "./traveleftsideform";
import Image from "next/image";
import SunAnimation from "../../common/SunAnimation";

function TravelIndex({ setCount }) {
  const className = 'travel-insuran'
  const [extendedForm, setExtendedForm] = useState(0)
  return (
    <>
      <section className="cybersecurity-wrp">
      <SunAnimation className={className} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pb-50">
                <div className="row justify-content-center">
                  
                  <div className="col-lg-6 cyberbxleft">
                    <div className="titlecybersecurity">
                      <h2>
                        {" "}
                        <Image width={200} height={200} alt="aa" src="/images/reserve.png" />
                        Reisverzekering
                      </h2>
                    </div>
                    <TraveLeftSideForm setExtendedForm={setExtendedForm} extendedForm={extendedForm} />
                  </div>
                  {extendedForm == 1 &&
                    <TravelRightSideForm setCount={setCount} setExtendedForm={setExtendedForm} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TravelEnergy />
      <TravelSubject />
    </>
  );
}

export default TravelIndex;
