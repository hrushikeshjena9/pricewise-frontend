import { useEffect, useState } from "react"
import VehicleInsuranceCommercialForm1 from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep1/VehicleInsuranceCommercialForm1"
import VehicleInsuranceCommercialDeals from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep1/VehicleInsuranceCommercialDeals"
import VehicleInsuranceCommercialBottomFaq from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep1/VehicleInsuranceCommercialBottomFaq"
import VehicleInsuranceStep2CommercialHeader from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep2/VehicleInsuranceStep2CommercialHeader"
import VehicleInsuranceCommercialStep2Left from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep2/VehicleInsuranceCommercialStep2Left"
import VehicleInsuranceCommercialStep2Right from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep2/VehicleInsuranceCommercialStep2Right"
import VehicleInsuranceCommercialTabingPart from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep2/VehicleInsuranceCommercialTabingPart"
import VehicleInsuranceCommercialStep3Left from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep3/VehicleInsuranceCommercialStep3Left"
import VehicleInsuranceCommercialStep3Right from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep3/VehicleInsuranceCommercialStep3Right"
import VehicleInsuranceCommercialStep4Left from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep4/VehicleInsuranceCommercialStep4Left"
import VehicleInsuranceCommercialStep4Right from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep4/VehicleInsuranceCommercialStep4Right"
import ProgressCommercial from "../../../../../components/Commercial/Insurance/VehicleInsuranceCommercial/VehicleInsuranceStep1/ProgressCommercial"

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
                    <VehicleInsuranceCommercialForm1 setCount={setCount} />
                    <VehicleInsuranceCommercialDeals />
                    <VehicleInsuranceCommercialBottomFaq />
                     
                </>
            }
            {count == 1 &&
                <>
                    <ProgressCommercial count={count} setCount={setCount} width={width}/>
                    <div className="container">
                        <div className="row">
                            <VehicleInsuranceStep2CommercialHeader />
                            <VehicleInsuranceCommercialStep2Left />
                            <div className="col-lg-8">
                                <VehicleInsuranceCommercialStep2Right showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                {showMoreInfo &&
                                    <VehicleInsuranceCommercialTabingPart />
                                }
                            </div>
                        </div>
                    </div>


                </>
            }
            {count == 2 &&
                <>
                    <ProgressCommercial count={count} setCount={setCount} width={width} />
                    <div className="container">
                        <div className="comparestep3">
                            <div className="row">
                                <VehicleInsuranceCommercialStep3Left />
                                <VehicleInsuranceCommercialStep3Right/>
                            </div>
                        </div>
                    </div>

                </>
            }

            {count == 3 &&
                <>
                 <ProgressCommercial count={count} setCount={setCount} width={width} />
                    <div className="container">
                        <div className="comparestep3">
                            <div className="row">
                                <VehicleInsuranceCommercialStep4Left />
                                <VehicleInsuranceCommercialStep4Right />
                            </div>
                        </div>
                    </div>

                </>
                
            }

        </>
    )
}

export default Index