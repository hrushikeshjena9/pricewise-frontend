import React, { useEffect, useState } from 'react'
import CommercialVehiclesForm from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep1/CommercialVehiclesForm'
import CommercialVehiclestopdeals from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep1/CommercialVehiclestopdeals'
import CommercialVehiclesFaq from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep1/CommercialVehiclesFaq'
import CommercialVehiclesprogress from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep1/CommercialVehiclesprogress'
import CommercialVehiclesTop from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep2/CommercialVehiclesTop'
import CommercialVehiclesallDeals from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep2/CommercialVehiclesallDeals'
import CommercialVehiclesStep2Left from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep2/CommercialVehiclesStep2Left'
import CommercialVehiclesTabing from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep2/CommercialVehiclesTabing'
import CommercialVehiclesStep4Right from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep4/CommercialVehiclesStep4Right'
import CommercialVehiclesStep3left from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep3/CommercialVehiclesStep3left'
import CommercialVehiclesStep3Right from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep3/CommercialVehiclesStep3Right'
import CommercialVehiclesStep4Left from '../../../../../components/LargeBusiness/Insurance/CommercialVehicles/CommercialVehiclesStep4/CommercialVehiclesStep4Left'
import Progress from '../../../../../components/VehicleInsurance/VehicleInsuranceStep1/Progress'

const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [show, setShow] = useState(1)
    useEffect(() => {
        if (count == 0) {
            setWidth('30%')
        } else if (count == 1) {
            setWidth('50%')
        } else if (count == 2) {
            setWidth('75%')
        } else if (count == 3) {
            setWidth('100%')
        } else {
            setWidth(null)
        }
    }, [count])
    return (
        <>

            {count == 0 &&
                <>
                    <CommercialVehiclesForm setCount={setCount} />
                    <CommercialVehiclestopdeals />
                    <CommercialVehiclesFaq />
                     
                </>
            }
            {count == 1 &&
                <>
                    <CommercialVehiclesprogress count={count} setCount={setCount} width={width}/>
                    <div className="container my-4">
                        <div className="row">
                            <CommercialVehiclesTop/>
                            <CommercialVehiclesStep2Left />
                            <div className="col-lg-8">
                                <CommercialVehiclesallDeals showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                {showMoreInfo &&
                                    <CommercialVehiclesTabing />
                                }
                            </div>
                        </div>
                    </div>


                </>
            }
            {count == 2 &&
                <>
                    <Progress count={count} setCount={setCount} width={width} />
                    <div className="container">
                        <div className="comparestep3">
                            <div className="row">
                                <CommercialVehiclesStep3left/>
                                <CommercialVehiclesStep3Right/>
                            </div>
                        </div>
                    </div>

                </>
            }

            {count == 3 &&
                <>
                 <Progress count={count} setCount={setCount} width={width} />
                    <div className="container">
                        <div className="comparestep3">
                            <div className="row">
                                <CommercialVehiclesStep4Left />
                                <CommercialVehiclesStep4Right/>
                            </div>
                        </div>
                    </div>

                </>
                
            }

        </>
    )
}

export default Index