import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LargeEnergieStep1Form from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep1/LargeEnergieStep1Form.jsx'
import LargeEnergieStepDeal from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep1/LargeEnergieStepDeal.jsx'
import LargeEnergieStep1Faq from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep1/LargeEnergieStep1Faq.jsx'
import LargeEnergieProgress from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep2/LargeEnergieProgress.jsx'
import LargeEnergieStep2Top from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep2/LargeEnergieStep2Top.jsx'
import LargeEnergieStep2Filter from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep2/LargeEnergieStep2Filter.jsx'
import LargeEnergieStepAction from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep2/LargeEnergieStepAction.jsx'
import LargeEnergieStepTabing from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep2/LargeEnergieStepTabing.jsx'
import LargeEnergieStep3Left from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep3/LargeEnergieStep3Left.jsx'
import LargeEnergieStep3Right from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep3/LargeEnergieStep3Right.jsx'
import LargeEnergieStep4left from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep4/LargeEnergieStep4left.jsx'
import LargeEnergieStep4Right from '../../../../components/LargeBusiness/LargeEnergie/LargeEnergieStep4/LargeEnergieStep4Right.jsx.jsx'



const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showStepper, setShowStepper] = useState(false)
    useEffect(() => {
        if (count == 0) {
            setWidth('25%')
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
                        <LargeEnergieStep1Form
                            showStepper={showStepper}
                            setShowStepper={setShowStepper}
                            setCount={setCount} />
                        <LargeEnergieStepDeal />
                        <LargeEnergieStep1Faq />
                    </main>
                </>
            }
            {setShowStepper && count != 0 &&
                <>
                    <LargeEnergieProgress setCount={setCount} width={width} count={count} />
                    {count == 1 &&
                        <>
                            <main>
                                <section>
                                    <div className="container">
                                        <div className="comparestep">
                                            <LargeEnergieStep2Top />
                                            <div className="row">
                                                <LargeEnergieStep2Filter />
                                                <div className="col-lg-8">
                                                    <div className="listofcompanybx">
                                                        <LargeEnergieStepAction showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                        {showMoreInfo &&
                                                            <LargeEnergieStepTabing />
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
                            <section>
                                <div className="container">
                                    <div className="comparestep3">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <h2>Stel jouw deal vandaag veilig</h2>
                                                <div className="secure-wrp">
                                                    <Image width={200} height={200} alt="aa" src="/images/secure.png" className="img-fluid secureimg" />
                                                </div>
                                                <p>
                                                    Vul de resterende gegevens in die de aanbieder nodig heeft, zodat wij alles vlekkenloos kunnen regelen en jij snel hier van kan profiteren.
                                                </p>
                                            </div>
                                            <LargeEnergieStep3Left/>
                                            <LargeEnergieStep3Right/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    }
                    {count == 3 &&
                        <>

                            <section>
                                <div className="container">
                                    <div className="comparestep3">
                                        <div className="row">
                                            <LargeEnergieStep4left/>
                                            <LargeEnergieStep4Right/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    }
                </>
            }
        </>
    )
}

export default Index