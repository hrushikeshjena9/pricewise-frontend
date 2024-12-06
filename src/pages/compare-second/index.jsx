import React, { useEffect, useState } from 'react'
import CompareFilterLeft from '../../../components/CompareFast/CompareFilterLeft'
import CompareTop from '../../../components/CompareFast/CompareTop'
import CompareRight from '../../../components/CompareSecond/CompareRight'
import CenterDetails from '../../../components/CompareSecond/CenterDetails'
import Image from 'next/image'

const Index = () => {
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState('0')
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [show, setShow] = useState(1)
  useEffect(() => {
      if (count == 0) {
          setWidth('45%')
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


        </>

      }
      {count == 1 &&
        <>


        </>

      }

      {count == 2 &&
        <>


        </>

      }

      {count == 3 &&
        <>


        </>

    }
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
    <div className='container py-4'>
        <div className='row'>

        <CompareTop/>
        <CompareFilterLeft/>
        <CenterDetails/>
        <CompareRight/>
        </div>
    </div>
    </>
  )
}

export default Index