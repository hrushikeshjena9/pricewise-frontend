import React, { useEffect, useState } from 'react'
import CoporateLiabilityTopForm from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep1/CoporateLiabilityTopForm'
import CoporateLiabilityBottomFaq from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep1/CoporateLiabilityBottomFaq'
import CoporateLiabilityDeals from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep1/CoporateLiabilityDeals'
import CoporateliabilityStep2Left from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep2/CoporateliabilityStep2Left'
import CoporateliabilityStep2Right from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep2/CoporateliabilityStep2Right'
import CoporateLiabilityStep2TabingPart from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep2/CoporateLiabilityStep2TabingPart'
import CoporatelLibilityStep3Left from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateLiabilityStep3/CoporatelLibilityStep3Left'
import CoporateLiabilityTop from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep2/CoporateLiabilityTop'
import CoporateliabilityStep4Left from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep4/CoporateliabilityStep4Left'
import CoporateliabilityStep4Right from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateliabilityStep4/CoporateliabilityStep4Right'
import CoporateLiabilityStep3Right from '../../../../../components/LargeBusiness/Insurance/Corporateliability/CoporateLiabilityStep3/CoporateLiabilityStep3Right'

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
                        <CoporateLiabilityTopForm setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <CoporateLiabilityDeals />
                        <CoporateLiabilityBottomFaq />


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
                                                <CoporateLiabilityTop />
                                                <div className="row">
                                                    <CoporateliabilityStep2Left />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <CoporateliabilityStep2Right showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <CoporateLiabilityStep2TabingPart />
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
                                                <CoporatelLibilityStep3Left setShow={setShow} show={show} />
                                                <CoporateLiabilityStep3Right setShow={setShow} />
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
                                            <CoporateliabilityStep4Left />
                                            <CoporateliabilityStep4Right/>
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