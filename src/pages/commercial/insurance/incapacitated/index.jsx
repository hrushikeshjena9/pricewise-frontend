import React, { useEffect, useState } from 'react'
import InCapacitatedCommercialFormTop from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep1/InCapacitatedCommercialFormTop'
import InCapacitatedCommercialDeal from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep1/InCapacitatedCommercialDeal'
import InCapacitatedCommercialfaq from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep1/InCapacitatedCommercialfaq'
import IncopacitatedCommercialStep0left from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep5/IncopacitatedCommercialStep0left'
import IncopacitatedCommercialStep0Right from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep5/IncopacitatedCommercialStep0Right'
import InCapacitatedCommercialStep2Top from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep2/InCapacitatedCommercialStep2Top'
import InCapacitatedCommercialStep2Tabing from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep2/InCapacitatedCommercialStep2Tabing'
import InCapacitatedCommercialStep2Action from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep2/InCapacitatedCommercialStep2Action'
import InCapacitatedCommercialStep2left from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep2/InCapacitatedCommercialStep2left'
import InCapacitatedCommercialStep3Right from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep3/InCapacitatedCommercialStep3Right'
import InCapacitatedCommercialStep3left from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep3/InCapacitatedCommercialStep3left'
import InCapacitatedCommercialStep4left from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep4/InCapacitatedCommercialStep4left'
import InCapacitatedCommercialStep4right from '../../../../../components/Commercial/Insurance/Incapacitated/IncapacitatedStep4/InCapacitatedCommercialStep4right'

const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [show, setShow] = useState(1)
    const [showStepper, setShowStepper] = useState(false)
    useEffect(() => {
        if (count == 1) {
            setWidth('40%')
            
        } else if (count == 2) {
            setWidth('50%')
        } else if (count == 3) {
            setWidth('75%')
        } else if (count == 4) {
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
                        <InCapacitatedCommercialFormTop setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <InCapacitatedCommercialDeal />
                        <InCapacitatedCommercialfaq />
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
                                                <li onClick={() => setCount(1)}
                                                    className={count == 1 ? "active" : ""}>Stap 1: Vul de gegevens in <i className="fas fa-chevron-right" />
                                                </li>
                                                <li className={count == 2 ? "active" : ""} onClick={() => setCount(2)}>Stap 2: Vergelijk <i className="fas fa-chevron-right" />
                                                </li>
                                                <li onClick={() => setCount(3)}
                                                    className={count == 3 ? "active" : ""}>Stap 3: Aanvraag <i className="fas fa-chevron-right" />
                                                </li>
                                                <li onClick={() => setCount(4)}
                                                    className={count == 4 ? "active" : ""}
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
                                {show == 1 &&
                                    <>
                                        <IncopacitatedCommercialStep0left setShow={setShow} show={show} />
                                    </>
                                }
                                {show == 2 &&
                                    <>
                                        <IncopacitatedCommercialStep0Right setShow={setShow} show={show} />
                                    </>
                                }
                                
                            </>
                         }

                        {count == 2 &&
                            <>
                                <main>
                                    <section>
                                        <div className="container">
                                            <div className="comparestep">
                                                <InCapacitatedCommercialStep2Top />
                                                <div className="row">
                                                    <InCapacitatedCommercialStep2left />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <InCapacitatedCommercialStep2Action showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <InCapacitatedCommercialStep2Tabing />
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
                        {count == 3 &&
                            <>
                                <div className='container'>
                                    <div className='comparestep3'>
                                        <div className='row'>
                                            <InCapacitatedCommercialStep3left setShow={setShow} />
                                            <InCapacitatedCommercialStep3Right setShow={setShow} show={show} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {count == 4 &&
                            <>
                                <div className='container'>
                                    <div className='comparestep3'>
                                        <div className='row'>
                                            <InCapacitatedCommercialStep4left />
                                            <InCapacitatedCommercialStep4right />
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