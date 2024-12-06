import React from "react";
import LegalriskStep3rightside from "./LegalriskStep3rightside";
import LegalriskStep3leftside from "./LegalriskStep3leftside";

const LegalStep3index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
              <LegalriskStep3leftside />
              </div>
              <div className="col-lg-4">
                <LegalriskStep3rightside />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LegalStep3index;
