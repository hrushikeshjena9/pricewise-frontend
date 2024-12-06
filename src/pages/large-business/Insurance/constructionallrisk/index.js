import React, { useEffect, useState } from 'react'
import ConstructionAllRiskForm from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep1/ConstructionAllRiskForm'
import ConstructionAllRiskDeals from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep1/ConstructionAllRiskDeals'
import ConstructionAllRiskFaq from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep1/ConstructionAllRiskFaq'
import ConstructionAllRiskTopStep2 from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep2/ConstructionAllRiskTopStep2'
import ConstructionAllRiskStep2Filter from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep2/ConstructionAllRiskStep2Filter'
import ConstructionAllRiskStep2Tabing from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep2/ConstructionAllRiskStep2Tabing'
import ConstructionAllRiskStep4left from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStpe4/ConstructionAllRiskStep4left'
import ConstructionAllRiskStep4Right from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStpe4/ConstructionAllRiskStep4Right'
import ConstructionAllRiskStep2AllDeails from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep2/ConstructionAllRiskStep2AllDeails'
import ConstructionAllRiskStep3Left from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep3/ConstructionAllRiskStep3Left'
import ConstructionAllRiskStep3Right from '../../../../../components/LargeBusiness/Insurance/ConstructionAllRisk/ConstructionAllRiskStep3/ConstructionAllRiskStep3Right'
const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [show, setShow] = useState(1)
    const [showStepper, setShowStepper] = useState(false)
    useEffect(() => {
        if (count == 0) {
            setWidth('25%')
            setShowStepper(false)
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
                    <main>
                        <ConstructionAllRiskForm setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <ConstructionAllRiskDeals />
                        <ConstructionAllRiskFaq />

                    </main>
                </>
            }
            <>
                {showStepper &&
                    <>
                        <section>
                            <div className="progressbar-bx">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <ul className="list-unstyled">
                                                <li onClick={() => setCount(0)}
                                                    className={count == 0 ? "active" : ""}>Stap 1: Vul de gegevens in <i className="fas fa-chevron-right" />
                                                </li>
                                                <li className={count == 1 ? "active" : ""} onClick={() => setCount(1)}>Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                                                </li>
                                                <li onClick={() => setCount(2)}
                                                    className={count == 2 ? "active" : ""}>Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                                                </li>
                                                <li onClick={() => setCount(3)}
                                                    className={count == 3 ? "active" : ""}
                                                >Stap 4: Voltooid <i className="fas fa-flag" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: width }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                              Nog even jouw deal veiligstellen en de rest regelen wij verder...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {count == 1 &&
                            <>
                                <main>
                                    <section>
                                        <div className="container">
                                            <div className="comparestep">
                                                <ConstructionAllRiskTopStep2 />
                                                <div className="row">
                                                    <ConstructionAllRiskStep2Filter />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <ConstructionAllRiskStep2AllDeails showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <ConstructionAllRiskStep2Tabing />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </main>
                            </>
                        }
                        {count == 2 &&
                            <>
                                <div className='container'>
                                <div className='comparestep3'>
                                    <div className='row'>
                                            <ConstructionAllRiskStep3Left setShow={setShow} show={show} />
                                            <ConstructionAllRiskStep3Right setShow={setShow} />
                                    </div>
                                </div>
                            </div>
                            </>
                        }
                        {count == 3 &&
                            <>
                                <div className='container'>
                                    <div className='comparestep3'>
                                        <div className='row'>
                                            <ConstructionAllRiskStep4left />
                                            <ConstructionAllRiskStep4Right/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                }
            </>
        </>
    )
}

export default Index