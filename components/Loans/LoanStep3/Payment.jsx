import Image from 'next/image'
import React from 'react'

const Payment = () => {
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fas fa-credit-card" /> Betaling</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">
              Kies jouw gewenste betaalmethode.*
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                aria-label="Content Goes Here"
                data-bs-custom-class="custom-tooltip"
                data-bs-original-title="Content Goes Here"
              > 
                <i className="fas  fa-info-circle green-cyan" />
              </a>
            </label>
            <div className="ac-num">
              <p>Selecteer een betaalmethode</p>
              <Image width={200} height={200} alt="aa" src="/images/private.png" />
            </div>
            <Image className="ms-2" width={34} height={34} alt="aa" src="/images/time-left.png" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="voorwaardenCheckbox" />
              <label className="form-check-label ms-2" htmlFor="voorwaardenCheckbox">
                 Ik accepteer alle <a href="#" className="ac-con-bx">voorwaarden</a>.
              </label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="actiesCheckbox" />
              <label className="form-check-label ms-2" htmlFor="actiesCheckbox">Ik wil graag op de hoogte blijven van alle acties van Energise Company.</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="opmerking" className="form-label">Ik heb nog een opmerking:</label>
            <textarea className="form-control" id="opmerking" rows={3} defaultValue={""} />
          </div>
          <div className="row">
            <div className="col text-start">
              <button type="button" className="btn btn-light fw-bold px-3 py-2 rounded-5 border">Controleer gegevens</button>
            </div>
            <div className="col text-end">
              <button type="button" className="border-0 price-btn">Aanvragen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment