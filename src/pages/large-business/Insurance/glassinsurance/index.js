import React, { useEffect, useState } from 'react'  
import GlassInsuranceStep1Form from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep1/GlassInsuranceStep1Form'
import GlassInsuranceDeals from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep1/GlassInsuranceDeals'
import GlassInsuranceFaq from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep1/GlassInsuranceFaq'
import GlassInsuranceTop from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep2/GlassInsuranceTop'
import GlassInsuranceTabing from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep2/GlassInsuranceTabing'
import GlassInsuranceDealsAll from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep2/GlassInsuranceDealsAll'
import GlassInsuranceFilter from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep2/GlassInsuranceFilter'
import GlassInsuranceStep3Left from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep3/GlassInsuranceStep3Left'
import GlassInsuranceStep3Right from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep3/GlassInsuranceStep3Right'
import GlassInsuranceStep4Left from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep4/GlassInsuranceStep4Left'
import GlassInsuranceStep4Right from '../../../../../components/LargeBusiness/Insurance/GlassInsurance/GlassInsuranceStep4/GlassInsuranceStep4Right'

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
                        <GlassInsuranceStep1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <GlassInsuranceDeals />
                        <GlassInsuranceFaq />
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
                                                <GlassInsuranceTop />
                                                <div className="row">
                                                    <GlassInsuranceFilter />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <GlassInsuranceDealsAll showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <GlassInsuranceTabing />
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
                                                <GlassInsuranceStep3Left setShow={setShow} show={show} />
                                                <GlassInsuranceStep3Right setShow={setShow} />
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
                                            <GlassInsuranceStep4Left />
                                            <GlassInsuranceStep4Right/>
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