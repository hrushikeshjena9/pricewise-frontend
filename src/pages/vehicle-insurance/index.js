import { useEffect, useState } from "react"
import VehicleInsuranceForm1 from "../../../components/VehicleInsurance/VehicleInsuranceStep1/VehicleInsuranceForm1"
import VehicleInsuranceBottomFaq from "../../../components/VehicleInsurance/VehicleInsuranceStep1/VehicleInsuranceBottomFaq"
import VehicleInsuranceDeals from "../../../components/VehicleInsurance/VehicleInsuranceStep1/VehicleInsuranceDeals"
import VehicleInsuranceStep2Header from "../../../components/VehicleInsurance/VehicleInsuranceStep2/VehicleInsuranceStep2Header"
import VehicleInsuranceStep2Left from "../../../components/VehicleInsurance/VehicleInsuranceStep2/VehicleInsuranceStep2Left"
import VehicleInsuranceStep2Right from "../../../components/VehicleInsurance/VehicleInsuranceStep2/VehicleInsuranceStep2Right"
import VehicleInsuranceTabingPart from "../../../components/VehicleInsurance/VehicleInsuranceStep2/VehicleInsuranceTabingPart"
import Progress from "../../../components/VehicleInsurance/VehicleInsuranceStep1/Progress"
import VehicleInsuranceStep3Left from "../../../components/VehicleInsurance/VehicleInsuranceStep3/VehicleInsuranceStep3Left"
import VehicleInsuranceStep3Right from "../../../components/VehicleInsurance/VehicleInsuranceStep3/VehicleInsuranceStep3Right"
import VehicleInsuranceStep4Left from "../../../components/VehicleInsurance/VehicleInsuranceStep4/VehicleInsuranceStep4Left"
import VehicleInsuranceStep4Right from "../../../components/VehicleInsurance/VehicleInsuranceStep4/VehicleInsuranceStep4Right"

const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [show, setShow] = useState(1)
    const [type, setType] = useState('Aanhangwagenverzekering')
    const [authToken, setAuthToken] = useState()
    const [userDetails, setUserDetails] = useState()
    useEffect(() => {
        const token = (localStorage.getItem('token'))
        const userDetails = JSON.parse(localStorage.getItem('userData'))
        setAuthToken(token ? token : '')
        setUserDetails(userDetails ? userDetails : '')
    }, [])
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
                    <VehicleInsuranceForm1 setCount={setCount}
                        type={type}
                        setType={setType}
                        authToken={authToken}
                        userDetails={userDetails}
                    />
                    <VehicleInsuranceDeals
                        type={type}
                    />
                    <VehicleInsuranceBottomFaq
                        type={type}
                    />
                </>
            }
            {count == 1 &&
                <>
                    <Progress count={count} setCount={setCount} width={width} />
                    <div className="container">
                        <div className="row">
                            <VehicleInsuranceStep2Header />
                            <VehicleInsuranceStep2Left />
                            <div className="col-lg-8">
                                <VehicleInsuranceStep2Right showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                {showMoreInfo &&
                                    <VehicleInsuranceTabingPart />
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
                                <VehicleInsuranceStep3Left />
                                <VehicleInsuranceStep3Right />
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
                                <VehicleInsuranceStep4Left />
                                <VehicleInsuranceStep4Right />
                            </div>
                        </div>
                    </div>

                </>

            }

        </>
    )
}

export default Index