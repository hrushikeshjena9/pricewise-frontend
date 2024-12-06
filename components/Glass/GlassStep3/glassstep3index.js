import React from "react";
import Step3leftsideform from "./step3leftsideform";
import Step3rightside from "./step3rightside";

function GlassStep3Index() {
  return (
    <>
      <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
                <Step3leftsideform />
              </div>
              <div className="col-lg-4">
               <Step3rightside />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GlassStep3Index;
