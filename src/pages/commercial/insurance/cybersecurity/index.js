import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CyberSecurityCommercialStep1Deal from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep1/CyberSecurityCommercialStep1Deal'
import CyberSecurityCommercialStep1Faq from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep1/CyberSecurityCommercialStep1Faq'
import CyberSecurityStepCommercial1Form from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep1/CyberSecurityStepCommercial1Form'
import CyberSecurityCommercialStep2Top from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep2/CyberSecurityCommercialStep2Top'
import CyberSecurityCommercialStep2Filter from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep2/CyberSecurityCommercialStep2Filter'
import CyberSecurityCommercialStep2allDeals from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep2/CyberSecurityCommercialStep2allDeals'
import CyberSecurityCommercialStep2Tabing from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep2/CyberSecurityCommercialStep2Tabing'
import CyberSecurityCommercialStep3Left from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep3/CyberSecurityCommercialStep3Left'
import CyberSecurityCommercialStep3Right from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep3/CyberSecurityCommercialStep3Right'
import CyberSecurityCommercialStep4Left from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep4/CyberSecurityCommercialStep4Left'
import CyberSecurityCommercialStep4Right from '../../../../../components/Commercial/Insurance/CybersecurityCommercial/CyberSecurityCommercialStep4/CyberSecurityCommercialStep4Right'
const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [show, setShow] = useState(1)
    const [showStepper, setShowStepper] = useState(false)
    useEffect(() => {
        if (count == 0) {
            setWidth('40%')
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
                        <CyberSecurityStepCommercial1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <CyberSecurityCommercialStep1Deal />
                        <CyberSecurityCommercialStep1Faq />

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
                                             <p className='mb-0'> Nog even jouw deal veiligstellen en de rest regelen wij verder...<Image src="/images/hourglass.png" alt="flags" width={24} height={24}/></p>
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
                                                <CyberSecurityCommercialStep2Top />
                                                <div className="row">
                                                    <CyberSecurityCommercialStep2Filter />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <CyberSecurityCommercialStep2allDeals showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <CyberSecurityCommercialStep2Tabing />
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
                                                <CyberSecurityCommercialStep3Left setShow={setShow} show={show} />
                                                <CyberSecurityCommercialStep3Right setShow={setShow} />
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
                                            <CyberSecurityCommercialStep4Left />
                                            <CyberSecurityCommercialStep4Right/>
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