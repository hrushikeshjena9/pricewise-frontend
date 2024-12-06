import Image from 'next/image'
import React from 'react'

const CommercialServices = () => {
  return (
    <section className="srevice-sec ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-bx">
              <h3 className='text-warning fw-medium'>Voor elke dienst</h3>
              <h4>De beste prijzen</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service-item shadow-cyan">
              <Image
                src="/images/energywind.png"
                height={200}
                width={200}
                alt="qwe"
              />
              <h4>Energie besparen</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service-item shadow-cyan">
              <Image
                src="/images/tvinternet.png"
                height={200}
                width={200}
                alt="qwe"
              />
              <h4>Internet &amp; Tv voordeel</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service-item shadow-cyan">
              <Image
                src="/images/smartphone.png"
                height={200}
                width={200}
                alt="qwe"
              />
              <h4>Smartphone deals</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommercialServices