import React from 'react'
import AccmoduleLeftSide from './accmoduleleftside'
import AccmoduleRightSide from './accmodulerightside'

function AccidentCompareModuleIndex() {
  return (
    <>
         <section>
            <div className="container">
            <div className="comparestep3">
                <div className="row">
                <div className="col-lg-8">
                    <AccmoduleLeftSide />
                </div>
                <div className="col-lg-4">
                    <AccmoduleRightSide />
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default AccidentCompareModuleIndex