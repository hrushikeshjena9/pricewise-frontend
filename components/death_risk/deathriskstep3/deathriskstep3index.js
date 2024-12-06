import React from "react";
import DeathRiskStep3RightSide from "./deathriskstep3rightside";
import DeathRiskStep3LeftSide from "./deathriskstep3leftside";

function DeathRiskStep3Index() {
  return (
    <>
      <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
              <DeathRiskStep3LeftSide />
              </div>
              <div className="col-lg-4">
                <DeathRiskStep3RightSide />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeathRiskStep3Index;
