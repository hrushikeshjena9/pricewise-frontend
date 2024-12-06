import React from 'react'
import SmartPhonePersonalstep3leftside from './smartPhonePersonalstep3leftside'
import SmartPhonePersonalstep3rightside from './smartPhonePersonalstep3rightside'

const SmartPhonePersonalstep3index = () => {
  return (
    <section>
        <div className="container">
          <div className="comparestep3">
            <div className="row">
              <div className="col-lg-8">
                <SmartPhonePersonalstep3leftside />
              </div>
              <div className="col-lg-4">
               <SmartPhonePersonalstep3rightside />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SmartPhonePersonalstep3index