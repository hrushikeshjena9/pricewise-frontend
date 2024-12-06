import React, { useEffect, useState } from 'react'
import InternetTvTelephoneStep1Form from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep1/InternetTvTelephoneStep1Form'
import InternetTvTelephoneStep1Deal from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep1/InternetTvTelephoneStep1Deal'
import InternetTvTelephoneStep1Faq from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep1/InternetTvTelephoneStep1Faq'
import InternetTvTelephoneFilter from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep2/InternetTvTelephoneFilter'
import InternetTvTelephoneTabing from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep2/InternetTvTelephoneTabing'
import InternetTvTelephoneAllDeal from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep2/InternetTvTelephoneAllDeal'
import InternetTvTelephoneStep3Left from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep3/InternetTvTelephoneStep3Left'
import InternetTvTelephoneStep3Right from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep3/InternetTvTelephoneStep3Right'
import InternetTvTelephoneStep3Form1 from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep3/InternetTvTelephoneStep3Form1'
import InternetTvTelephoneStep4left from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep4/InternetTvTelephoneStep4left'
import InternetTvTelephoneStep4Right from '../../../../components/Commercial/InternetTvTelephone/InternetTvTelephoneStep4/InternetTvTelephoneStep4Right'
import Image from 'next/image'
const Index = () => {
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState('0')
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [show, setShow] = useState(1)
  const [showStepper, setShowStepper] = useState(true)
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

          <InternetTvTelephoneStep1Form setShowStepper={setShowStepper} showStepper={showStepper} setCount={setCount} />
          <InternetTvTelephoneStep1Deal />
          <InternetTvTelephoneStep1Faq />

        </>
      }

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
                     <p className='mb-0'> Je bent een stap dichterbij jouw beste keuze...<Image src="/images/hourglass.png" alt="flags" width={24} height={24}/></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {
            count == 1 &&
            <>
              <section>
                <div className="comparestep">
                  <div className="container">
                    <div className='row'>
                      <InternetTvTelephoneFilter />
                      <div className='col-lg-8'>
                        <div className="listofcompanybx">
                          <InternetTvTelephoneAllDeal showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
                          {showMoreInfo &&
                            <InternetTvTelephoneTabing />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </>
          }
          {count == 2 &&

            <>
              <>
                <div className='container my-4'>
                  <div className='row'>
                    {show == 1 &&
                      <>
                        <InternetTvTelephoneStep3Left setShow={setShow} show={show} />
                        <InternetTvTelephoneStep3Right setShow={setShow} />
                      </>
                    }
                    {show == 2 &&
                      <>
                        <InternetTvTelephoneStep3Form1 setShow={setShow} />
                        <InternetTvTelephoneStep3Right setShow={setShow} show={show} />
                      </>
                    }
                  </div>
                </div>
              </>

            </>

          }
          {count == 3 &&
            <>
              <div className='container my-4'>
                <div className='comparestep3'>
                <div className='row'>
                  <InternetTvTelephoneStep4left />
                  <InternetTvTelephoneStep4Right />
                </div>
              </div>
              </div>
            </>
          }
        </>}

    </>

  )
}

export default Index