import React from 'react'
import CommercialSmartphonestep3leftside from './CommercialSmartphonestep3leftside'
import CommercialSmartphonestep3rightside from './CommercialSmartphonestep3rightside'

const CommercialSmartphonestep3index = () => {
  return (
    <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
                <CommercialSmartphonestep3leftside />
              </div>
              <div className="col-lg-4">
               <CommercialSmartphonestep3rightside />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CommercialSmartphonestep3index
