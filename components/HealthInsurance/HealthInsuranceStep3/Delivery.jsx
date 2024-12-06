import React, { useState } from 'react'

const Delivery = ({ register, errors }) => {
    const [showInputRow, setShowInputRow] = useState(false);
  const handleRadioChange = (event) => {
    setShowInputRow(event.target.value === "yes");
  };
    return (
        <>
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i className="fas fa-home" /> Levering
                    </h4>
                </div>
                <div className="card-body">
                    <form>
                        {/* First Row */}
                        <div className="row mb-3">
                                <div className='col-12'>
                                    <table className='table d-flex  table-borderless'>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <label className="fw-bold">
                                                    Wijkt jou postadres af?
                                                </label>
                                            </td>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="postalAddressDifferent"
                                                        id="yes1"
                                                        defaultValue="yes"
                                                        {...register('differ_postal_addrr', { required: true })}
                                                    />
                                                    <label className="form-check-label" htmlFor="yes1">
                                                        Ja
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="postalAddressDifferent"
                                                        id="no1"
                                                        defaultValue="no"
                                                        {...register('differ_postal_addrr', { required: true })}
                                                    />
                                                    <label className="form-check-label" htmlFor="no1">
                                                        Nee
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="fw-bold">
                                                    Overstapservice?*
                                                </label>
                                            </td>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="postalAddressDifferent"
                                                        id="yes"
                                                        value="yes"
                                                        onChange={handleRadioChange}

                                                    />
                                                    <label className="form-check-label" htmlFor="yes">
                                                        Ja
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="postalAddressDifferent"
                                                        id="no"
                                                        value="no"
                                                        onChange={handleRadioChange}
                                                        defaultChecked
                                                    />
                                                    <label className="form-check-label" htmlFor="no">
                                                        Nee
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                {/* Second Row for Additional Input Box */}
                                {showInputRow && (
                            <div id="additionalInputRow" className='mt-2'>
                                    <input
                                        type="text"
                                        className={errors.switch_service ? "form-control errorBox" : "form-control"}
                                        id="additionalInput"
                                        name="additionalInput"
                                        placeholder="Bijv 1200AA 112A"
                                        {...register('switch_service', { required: true })}
                                    />
                                </div>
                            )}
                                    {errors.differ_postal_addrr && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                                </div>
                           </div>
                    </form>
                </div>
            </div>
            {/* <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0"></h4>
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="acceptConditions"
                                    name="acceptConditions"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="acceptConditions"
                                >
                                    Ik accepteer alle voorwaarden.*
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="stayInformed"
                                    name="stayInformed"
                                />
                                <label className="form-check-label" htmlFor="stayInformed">
                                    Ik wil graag op de hoogte blijven van alle acties van
                                    Energise Company.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn button-customize">Aanpassen</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Delivery