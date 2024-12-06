import React, { useEffect, useState } from 'react'
import ProfessionalLiabilityForm from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep1/ProfessionalLiabilityForm'
import ProfessionalLiabilityStep1Deals from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep1/ProfessionalLiabilityStep1Deals'
import ProfessionalLiabilityFaQ from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep1/ProfessionalLiabilityFaQ'
import ProfessionalLiabilityStep2Top from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep2/ProfessionalLiabilityStep2Top'
import ProfessionalLiabilityStep2Tabing from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep2/ProfessionalLiabilityStep2Tabing'
import ProfessionalLiabilityDealsList from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep2/ProfessionalLiabilityDealsList'
import ProfessionalLiabilityStep2Filter from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep2/ProfessionalLiabilityStep2Filter'
import ProfessionalLiabilityStep3Left from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep3/ProfessionalLiabilityStep3Left'
import ProfessionalLiabilityStep3Right from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep3/ProfessionalLiabilityStep3Right'
import ProfessionalLiabilityStep4Left from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep4/ProfessionalLiabilityStep4Left'
import ProfessionalLiabilityStep4Right from '../../../../../components/LargeBusiness/Insurance/ProfessionalLiability/ProfessionalLiabilityStep4/ProfessionalLiabilityStep4Right'
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
                        <ProfessionalLiabilityForm setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <ProfessionalLiabilityStep1Deals />
                        <ProfessionalLiabilityFaQ />
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
                                                <ProfessionalLiabilityStep2Top />
                                                <div className="row">
                                                    <ProfessionalLiabilityStep2Filter />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <ProfessionalLiabilityDealsList showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <ProfessionalLiabilityStep2Tabing />
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
                                        <ProfessionalLiabilityStep3Left setShow={setShow} show={show} />
                                        <ProfessionalLiabilityStep3Right setShow={setShow} />
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
                                            <ProfessionalLiabilityStep4Left />
                                            <ProfessionalLiabilityStep4Right/>
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