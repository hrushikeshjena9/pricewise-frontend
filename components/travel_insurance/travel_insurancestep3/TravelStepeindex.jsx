import React from 'react'
import TravelStepeleft from './TravelStepeleft'
import TravelInsurancestep3Right from './TravelInsurancestep3Right'

const Travelstepeindex = () => {
  return (
    <section>
    <div className="container">
      <div className="comparestep3">
        <div className="row">
          <div className="col-lg-8">
            <TravelStepeleft />
          </div>
          <div className="col-lg-4">
           <TravelInsurancestep3Right />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Travelstepeindex