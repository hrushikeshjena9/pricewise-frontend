import React, { useEffect, useState } from 'react'
import InCapacitatedFormTop from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep1/InCapacitatedFormTop'
import InCapacitatedDeal from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep1/InCapacitatedDeal'
import InCapacitatedfaq from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep1/InCapacitatedfaq'
import InCapacitatedStep2Top from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep2/InCapacitatedStep2Top'
import InCapacitatedStep2Action from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep2/InCapacitatedStep2Action'
import InCapacitatedStep2Tabing from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep2/InCapacitatedStep2Tabing'
import InCapacitatedStep2left from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep2/InCapacitatedStep2left'
import InCapacitatedStep3Right from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep3/InCapacitatedStep3Right'
import InCapacitatedStep3left from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep3/InCapacitatedStep3left'
import InCapacitatedStep4left from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep4/InCapacitatedStep4left'
import InCapacitatedStep4right from '../../../../../components/LargeBusiness/Insurance/InCapacitated/InCapacitatedStep4/InCapacitatedStep4right'
import IncopacitatedStep0Right from '../../../../../components/LargeBusiness/Insurance/InCapacitated/IncopacitatedStep0/IncopacitatedStep0Right'
import IncopacitatedStep0left from '../../../../../components/LargeBusiness/Insurance/InCapacitated/IncopacitatedStep0/IncopacitatedStep0left'

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
                        <InCapacitatedFormTop setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <InCapacitatedDeal />
                        <InCapacitatedfaq />
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
                                        <IncopacitatedStep0left setShow={setShow} show={show} />
                                                    
                                    </>
                                }
                                {show == 2 &&
                                    <>
                                        <IncopacitatedStep0Right setShow={setShow} show={show} />
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
                                                <InCapacitatedStep2Top />
                                                <div className="row">
                                                    <InCapacitatedStep2left />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <InCapacitatedStep2Action showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <InCapacitatedStep2Tabing />
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
                                            <InCapacitatedStep3left setShow={setShow} />
                                            <InCapacitatedStep3Right setShow={setShow} show={show} />
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
                                            <InCapacitatedStep4left />
                                            <InCapacitatedStep4right />
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