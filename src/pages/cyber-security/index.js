import React, { useEffect, useState } from 'react'
import CyberOne from '../../../components/CyberSecurity/CyberOne'
import CyberTwo from '../../../components/CyberSecurity/CyberTwo'
import CyberTwoDeals from '../../../components/CyberSecurity/CyberTwoDeals'
import CyberTwoOnderwerp from '../../../components/CyberSecurity/CyberTwoOnderwerp'
import ActionSection from '../../../components/CyberSecurity/CyberStep2/ActionSection'
import TopSection from '../../../components/CyberSecurity/CyberStep2/TopSection'
import LeftFilter from '../../../components/CyberSecurity/CyberStep2/LeftFilter'
import TabbingPart from '../../../components/CyberSecurity/CyberStep2/TabbingPart'
import ContactDetails from '../../../components/Loans/LoanStep3/ContactDetails'
import Delivery from '../../../components/Loans/LoanStep3/Delivery'
import Payment from '../../../components/Loans/LoanStep3/Payment'
import LoanStep4Rightbar from '../../../components/Loans/LoanStep3/LoanStep4Rightbar'
import Image from 'next/image'
import EnergyStep4Leftbar from '../../../components/DoubleMeter/EnergyStep4/EnergyStep4Leftbar'
import EnergyStep4Rightbar from '../../../components/DoubleMeter/EnergyStep4/EnergyStep4Rightbar'
import CyberStep3Left from '../../../components/CyberSecurity/CyberStep3/CyberStep3Left'
import CyberStep3Right from '../../../components/CyberSecurity/CyberStep3/CyberStep3Right'
import CyberStep4Left from '../../../components/CyberSecurity/CyberStep4/CyberStep4Left'
import CyberStep4Right from '../../../components/CyberSecurity/CyberStep4/CyberStep4Right'

const Index = () => {
    const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [pageNo, setPageNo] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [showStepper, setShowStepper] = useState(false)
    useEffect(() => {
        if (count == 0) {
            setWidth('40%')
            setShowStepper(false)
        } else if (count == 1) {
            setWidth('50%')
            setShowStepper(true)
        } else if (count == 2) {
            setWidth('75%')
            setShowStepper(true)
        } else if (count == 3) {
            setWidth('100%')
            setShowStepper(true)
        } else {
            setWidth(null)
        }
    }, [count])
    return (
        <>
            {showStepper &&
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
                                        >Stap 4: Voltooid <Image src="/images/flags.png" alt="flags" width={25} height={25} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: width }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                        <p className="mb-0"> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {count == 0 &&
                <>
                    <main>
                        <CyberOne setCount={setCount} />
                        <CyberTwoDeals />
                        <CyberTwoOnderwerp />
                    </main>
                </>
            }
            {count == 1 &&
                <>
                    <main>
                        <section>
                            <div className="container">
                                <div className="comparestep">
                                    <TopSection />
                                    <div className="row">
                                        <LeftFilter />
                                        <div className="col-lg-8">
                                            <div className="listofcompanybx">
                                                <ActionSection showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo}
                                                    postsPerPage={postsPerPage}
                                                    pageNo={pageNo}
                                                    setPageNo={setPageNo}
                                                    setPostsPerPage={setPostsPerPage} />
                                                {showMoreInfo &&
                                                    <TabbingPart />
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
                                    <CyberStep3Left />
                                    <CyberStep3Right />
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
                                    <CyberStep4Left />
                                    <CyberStep4Right />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Index