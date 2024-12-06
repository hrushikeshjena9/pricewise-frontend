import React from "react";
import FarmhouseStep3leftsideform from "./FarmhouseStep3leftsideform";
import FarmhouseStep3rightside from "./FarmhouseStep3rightside";

function FarmhouseGlassstep3index() {
  return (
    <>
      <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
                <FarmhouseStep3leftsideform />
              </div>
              <div className="col-lg-4">
               <FarmhouseStep3rightside />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FarmhouseGlassstep3index;