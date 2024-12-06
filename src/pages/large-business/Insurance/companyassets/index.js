import React, { useEffect, useState } from 'react'
import CompanyAssetsFormfast from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep1/CompanyAssetsFormfast'
import CompanyAssetsDeal from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep1/CompanyAssetsDeal'
import CompanyAssetsfaq from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep1/CompanyAssetsfaq'
import CompanyAssetsTop from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep2/CompanyAssetsTop'
import CompanyAssetsLeftStep2 from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep2/CompanyAssetsLeftStep2'
import CompanyAssetsListDeals from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep2/CompanyAssetsListDeals'
import CompanyAssetsTabing from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep2/CompanyAssetsTabing'
import CompanyAssetsStep3Left from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep3/CompanyAssetsStep3Left'
import CompanyassetsStep3Right from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep3/CompanyassetsStep3Right'
import CompanyassetsStep4left from '../../../../../components/LargeBusiness/Insurance/CompanyAssets/CompanyAssetsStep4/CompanyassetsStep4left'
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
                        <CompanyAssetsFormfast setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
                        <CompanyAssetsDeal />
                        <CompanyAssetsfaq />
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
                                                    <CompanyAssetsLeftStep2 />
                                                    <div className="col-lg-8">
                                                        <div className="listofcompanybx">
                                                            <CompanyAssetsListDeals showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                                                            {showMoreInfo &&
                                                                <CompanyAssetsTabing />
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
                                        <CompanyAssetsStep3Left setShow={setShow} show={show} />
                                        <CompanyassetsStep3Right setShow={setShow} />
                                    </div>
                                </div>
                            </>
                        }
                        {count == 3 &&
                            <>
                                <div className='container'>
                                <div className='comparestep3'>
                                    <div className='row'>
                                        <CompanyassetsStep4left />
                                        <CompanyassetsStep3Right />
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