import React from 'react'

const Delivery = () => {
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="mb-0"><i className="fas fa-map-marker-alt" /> Levering</h4>
        </div>
        <div className="card-body">
          <form>
            {/* First Row */}
            <div className="row mb-3">
              <div className="col-lg-6 ">
                <label htmlFor="zip" className="col-auto col-form-label mb-0 me-3">Postcode</label>
                <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode" />
              </div>
              <div className="col-lg-6 ">
                <label htmlFor="houseNumber" className="col-auto col-form-label">Huisnummer &amp; toevoeging</label>
                <input type="text" className="form-control col-auto " id="houseNumber" name="houseNumber" placeholder="Bijv. 112A" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12 ">
                <table className='table table-borderless table-sm d-flex'>
                  <tbody>
                      <tr>
                        <td>
                        <label className="col-form-label">Woon of werk je op dit adres?</label>
                        </td>
                        <td>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="postalAddressDifferent" id="live" defaultValue="yes" />
                            <label className="form-check-label" htmlFor="live">Ja</label>
                          </div>
                        </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="postalAddressDifferent" id="nolive" defaultValue="no" defaultChecked />
                          <label className="form-check-label" htmlFor="nolive">Nee</label>
                        </div>
                      </td>
                      </tr>
                      <tr>
                        <td>
                        <label className="col-form-label">Wijkt jou postadres af?</label>
                        </td>
                        <td>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" defaultValue="yes" />
                            <label className="form-check-label" htmlFor="yes">Ja</label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" defaultValue="no" defaultChecked />
                            <label className="form-check-label" htmlFor="no">Nee</label>
                          </div>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Second Row for Additional Input Box */}
            <div className="row mb-3" id="additionalInputRow" style={{ display: 'none' }}>
              <label htmlFor="additionalInput" className="col-sm-6 col-form-label">Voer postcode in</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="additionalInput" name="additionalInput" placeholder="Voer postcode in" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Delivery