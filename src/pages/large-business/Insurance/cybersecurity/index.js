import React, { useEffect, useState } from 'react'  
import CyberSecurityStep1Form from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep1/CyberSecurityStep1Form'
import CyberSecurityStep1Deal from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep1/CyberSecurityStep1Deal'
import CyberSecurityStep1Faq from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep1/CyberSecurityStep1Faq'
import CyberSecurityStep2Filter from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep2/CyberSecurityStep2Filter'
import CyberSecurityStep2allDeals from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep2/CyberSecurityStep2allDeals'
import CyberSecurityStep3Left from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep3/CyberSecurityStep3Left'
import CyberSecurityStep3Right from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep3/CyberSecurityStep3Right'
import CyberSecurityStep4Left from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep4/CyberSecurityStep4Left'
import CyberSecurityStep4Right from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep4/CyberSecurityStep4Right'
import CyberSecurityStep2Top from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep2/CyberSecurityStep2Top'
import CyberSecurityStep2Tabing from '../../../../../components/LargeBusiness/Insurance/CyberSecurity/CyberSecurityStep2/CyberSecurityStep2Tabing'
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
                        <CyberSecurityStep1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <CyberSecurityStep1Deal />
                        <CyberSecurityStep1Faq />

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
                                                <CyberSecurityStep2Top />
                                                <div className="row">
                                                    <CyberSecurityStep2Filter />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <CyberSecurityStep2allDeals showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <CyberSecurityStep2Tabing />
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
                                                <CyberSecurityStep3Left setShow={setShow} show={show} />
                                                <CyberSecurityStep3Right setShow={setShow} />
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
                                            <CyberSecurityStep4Left />
                                            <CyberSecurityStep4Right/>
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