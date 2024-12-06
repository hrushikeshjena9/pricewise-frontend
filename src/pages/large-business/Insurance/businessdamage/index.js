import React, { useEffect, useState } from 'react'
import BusinessDamageStep1Form from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep1/BusinessDamageStep1Form'
import BusinessDamageFaq from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep1/BusinessDamageFaq'
import BusinessDamageDeal from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep1/BusinessDamageDeal'
import BusinessDamageStep2Right from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep2/BusinessDamageStep2Right'
import BusinessDamageStep2Left from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep2/BusinessDamageStep2Left'
import BusinessDamageTabing from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep2/BusinessDamageTabing'
import BusinessDamageStep4Left from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep4/BusinessDamageStep4Left'
import BusinessDamageStep3Right from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep3/BusinessDamageStep3Right'
import BusinessDamageStep3left from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep3/BusinessDamageStep3left'
import CompanyAssetsTop from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep2/CompanyAssetsTop'
import BusinessDamageStep4Right from '../../../../../components/LargeBusiness/Insurance/BusinessDamage/BusinessDamageStep4/BusinessDamageStep4Right'
import Image from 'next/image'

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
                        <BusinessDamageStep1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <BusinessDamageDeal />
                        <BusinessDamageFaq />
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
                                                    className={count == 2 ? "active" : ""}>Stap 3: Aanvraag  <i className="fas fa-chevron-right" />
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
                                             <p className='mb-0'> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24}/></p>
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
                                                <CompanyAssetsTop />
                                                <div className="row">
                                                    <BusinessDamageStep2Left />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <BusinessDamageStep2Right showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <BusinessDamageTabing />
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
                                <div className='container my-4'>
                                    <div className='row'>
                                        <BusinessDamageStep3left setShow={setShow} show={show} />
                                        <BusinessDamageStep3Right setShow={setShow} />
                                    </div>
                                </div>
                            </>
                        }
                        {count == 3 &&
                            <>
                                <div className='container'>
                                <div className='comparestep3'>
                                    <div className='row'>
                                        <BusinessDamageStep4Left />
                                        <BusinessDamageStep4Right />
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