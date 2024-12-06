import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CommercialEnergieStepDeal from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep1/CommercialEnergieStepDeal'
import CommercialEnergieStep1Form from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep1/CommercialEnergieStep1Form'
import CommercialEnergieStep1Faq from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep1/CommercialEnergieStep1Faq'
import CommercialEnergieStep2Top from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep2/CommercialEnergieStep2Top'
import CommercialEnergieStepAction from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep2/CommercialEnergieStepAction'
import CommercialEnergieStepTabing from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep2/CommercialEnergieStepTabing'
import CommercialEnergieStep2Filter from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep2/CommercialEnergieStep2Filter'
import CommercialEnergieProgress from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep2/CommercialEnergieProgress'
import CommercialEnergieStep3Left from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep3/CommercialEnergieStep3Left'
import CommercialEnergieStep3Right from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep3/CommercialEnergieStep3Right'
import CommercialEnergieStep4Right from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep4/CommercialEnergieStep4Right.jsx'
import CommercialEnergieStep4left from '../../../../components/Commercial/CommercialEnergie/CommercialEnergieStep4/CommercialEnergieStep4left'


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
                        <CommercialEnergieStep1Form
                            showStepper={showStepper}
                            setShowStepper={setShowStepper}
                            setCount={setCount} />
                        <CommercialEnergieStepDeal />
                        <CommercialEnergieStep1Faq />
                    </main>
                </>
            }
            {setShowStepper && count != 0 &&
                <>
                    <CommercialEnergieProgress setCount={setCount} width={width} count={count} />
                    {count == 1 &&
                        <>
                            <main>
                                <section>
                                    <div className="container">
                                        <div className="comparestep">
                                            <CommercialEnergieStep2Top />
                                            <div className="row">
                                                <CommercialEnergieStep2Filter />
                                                <div className="col-lg-8">
                                                    <div className="listofcompanybx">
                                                        <CommercialEnergieStepAction showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                        {showMoreInfo &&
                                                            <CommercialEnergieStepTabing />
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
                                            <CommercialEnergieStep3Left/>
                                            <CommercialEnergieStep3Right/>
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
                                            <CommercialEnergieStep4left/>
                                            <CommercialEnergieStep4Right/>
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