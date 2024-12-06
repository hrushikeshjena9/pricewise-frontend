import React, { useState } from "react";
import FuneralEnergy from "./funeralenergy";
import FuneralSubject from "./funeralsubject";
import FuneralLeftSideForm from "./funeralleftsideform";
import FuneralRightSideForm from "./funeralrightsideform";
import Image from "next/image";
import SunAnimation from "../../common/SunAnimation";

const FuneralIndex = ({ setCount }) => {
  const [extendedForm, setExtendedForm] = useState(0)
  const className = 'funeral-insuran' 
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
                        <Image width={200} height={200} alt="aa" src="/images/funeral2.jpg" />
                        Uitvaartverzekering
                      </h2>
                    </div>
                    <FuneralLeftSideForm setExtendedForm={setExtendedForm} extendedForm={extendedForm} />
                  </div>
                  {extendedForm == 1 &&
                    <FuneralRightSideForm setCount={setCount} setExtendedForm={setExtendedForm} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FuneralEnergy />
      <FuneralSubject />
    </>
  );
};

export default FuneralIndex;
