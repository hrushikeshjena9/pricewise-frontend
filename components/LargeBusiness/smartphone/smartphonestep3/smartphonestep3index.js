import React from 'react'
import SmartPhoneStep3LeftSide from './smartphonestep3leftside'
import SmartPhoneStep3RightSide from './smartphonestep3rightside'

const SmartPhoneStep3Index = () => {
  return (
    <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
                <SmartPhoneStep3LeftSide />
              </div>
              <div className="col-lg-4">
               <SmartPhoneStep3RightSide />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SmartPhoneStep3Index