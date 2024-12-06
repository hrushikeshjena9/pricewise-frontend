import React, { useEffect, useState } from 'react'
import DirectorsLiabilityStep1Form from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep1/DirectorsLiabilityStep1Form'
import DirectorsLiabilityStep1Deals from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep1/DirectorsLiabilityStep1Deals'
import DirectorsLiabilityStep1Faq from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep1/DirectorsLiabilityStep1Faq'
import DirectorsLiabilityStep2Top from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep2/DirectorsLiabilityStep2Top'
import DirectorsLiabilityStep2Filter from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep2/DirectorsLiabilityStep2Filter'
import DirectorsLiabilityStep2Tabing from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep2/DirectorsLiabilityStep2Tabing'
import DirectorsLiabilityStep2Deails from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep2/DirectorsLiabilityStep2Deails'
import DirectorsLiabilityStep3Left from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep3/DirectorsLiabilityStep3Left'
import DirectorsLiabilityStep3Right from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep3/DirectorsLiabilityStep3Right'
import DirectorsLiability4 from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep4/DirectorsLiabilityStep4Left'
import DirectorsLiabilityStep4Right from '../../../../../components/LargeBusiness/Insurance/DirectorsLiability/DirectorsLiabilityStep4/DirectorsLiabilityStep4Right'


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
                        <DirectorsLiabilityStep1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <DirectorsLiabilityStep1Deals />
                        <DirectorsLiabilityStep1Faq />

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
                                                <DirectorsLiabilityStep2Top />
                                                <div className="row">
                                                    <DirectorsLiabilityStep2Filter />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <DirectorsLiabilityStep2Deails showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <DirectorsLiabilityStep2Tabing />
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
                                                <DirectorsLiabilityStep3Left setShow={setShow} show={show} />
                                                <DirectorsLiabilityStep3Right setShow={setShow} />
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
                                            <DirectorsLiability4 />
                                            <DirectorsLiabilityStep4Right/>
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