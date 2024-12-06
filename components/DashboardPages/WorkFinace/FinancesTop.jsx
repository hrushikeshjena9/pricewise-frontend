import Image from 'next/image'
import React from 'react'
export const FinancesTop = () => {
  return (
    <>
    <section>
    <div className="mydatawrp">
        <div className="container">
        <div className="row">
            <div className="in-banner">
            <div className="secure-img">
                <Image width={200} height={200} alt="aa" src="/images/secure.jpg" className="secureicon" />
            </div>
            <div className="mydatatitle-bx">
                <h3>Mijn werk <span>&</span> Financiën</h3>
                <h5>Oost west Energise is the best!</h5>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
 
    </>
  )
}

export default FinancesTop