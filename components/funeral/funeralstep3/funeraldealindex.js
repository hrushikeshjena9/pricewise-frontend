import React from "react";
import FuneralDealLeftSideBar from "./funeraldealleftsidebar";
import FuneralDealRightSideBar from "./funeraldealrightsidebar";

const FuneralDealIndex = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
                <FuneralDealLeftSideBar />
              </div>
              <div className="col-lg-4">
                <FuneralDealRightSideBar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuneralDealIndex;
