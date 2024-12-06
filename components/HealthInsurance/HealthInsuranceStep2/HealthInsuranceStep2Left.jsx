import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import MailModal from '../../CommonModals/MailModal';
import SameHeightDiv from '../../common/SameHeightDiv';

const HealthInsuranceStep2Left = ({ formData, apiFilters, checkedItems, setCheckedItems, coveragesType }) => {
    console.log(formData);
    const [rangeValue, setRangeValue] = useState(1);
    const [NoParentFilter, setNoParentFilter] = useState()
    useEffect(() => {
        if (apiFilters && apiFilters.length > 0) setNoParentFilter(apiFilters[0].No_Parent)
    })
    // ----------range slider logic starts------------------
    const handleRangeChange = (e) => {
        setRangeValue(parseInt(e.target.value));
    };
    const handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue(value);
    };
    // ----------range slider logic ends--------------------
    const handleFilterValue = (itemId) => {
        if (checkedItems.includes(itemId)) {
            setCheckedItems(checkedItems.filter((id) => id !== itemId));
        } else {
            setCheckedItems([...checkedItems, itemId]);
        }
    };
    return (
        <>

        <SameHeightDiv dependency={coveragesType}/>
            <div className="col-lg-4">
                <div className="yourdetailsbox">
                    <h5>Jouw gegevens:</h5>
                    <ul className="infodetails">
                        <li>
                            Postcode:
                            <span>{formData?.post_code}</span>
                        </li>
                        <li>
                            Huisnummer:
                            <span>{formData?.house_no}</span>
                        </li>
                    </ul>
                    <div className="yourdetailedit">
                        <div className="row">
                            <div className="col-lg-6">
                                <a href="javascript:void(0);"><i className="fas fa-cog" /> Wijzig</a>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <i className="fas fa-user"></i>
                                        <span>1/1</span>
                                    </li>
                                    <li>
                                        <Image width={200} height={200} alt="aa" src="/images/viewpop.png" className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="health-insuranceleft">

                    <div className="row">
                        <div className="col-9 p-1 position-relative">
                            <label className="form-label labeltitle">Soort dekking <Image width={50} height={50} alt="aa" src='/images/medicins.png' /></label>
                            <div className="infcalcubx info-pos">
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                    <i className="fas fa-2x fa-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    defaultValue
                                    id="klantenscore"
                                />
                                <label className="form-check-label" htmlFor="klantenscore">
                                    Basis
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input  me-2"
                                    type="radio"
                                    defaultValue
                                    id="Windows"
                                />
                                <label className="form-check-label" htmlFor="Windows">
                                      Aanvullend
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row d-none">
                        <div className="col-9 radiobx">
                            <div className="row">
                                <div className="col-6 p-1">
                                    <input type="radio" name="test" id="cb111" />
                                    <label htmlFor="cb111 ">
                                        <Image width={200} height={200} alt="aa" src="/images/patient.png" className="img-fluid" />
                                        <span className="equal-height checkbox-label">Basis</span>
                                    </label>
                                </div>
                                <div className="col-6 p-1">
                                    <input type="radio" name="test" id="cb22" />
                                    <label htmlFor="cb22 ">
                                        <Image width={200} height={200} alt="aa" src="/images/hospitalisation.png" className="img-fluid" />
                                        <span className="equal-height checkbox-label">Aanvullend</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-12 position-relative">
                                <label className="form-label labeltitle">Aanvullende dekking</label>
                                    <div className='infcalcubx info-pos'>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                            <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                    </div>
                                    <div className='cal-in-single'>
                                        <a href="javascript:void(0);" role="button" className="calculatorwrp green-cyan">
                                            <i className="fas fa-calculator" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9 ">
                            <div className="row px-2">
                                {coveragesType && coveragesType.length > 0 &&
                                    <>
                                        <div className="col-12 mb-1 p-1" >
                                            {coveragesType?.map((item, i) => (

                                                <div className='form-check d-flex mb-2' key={i}>
                                                    <input type="checkbox" name="test" id={item.name} className='form-check-input me-2' />
                                                    <label htmlFor={item.name} className='form-check-label'>
                                                        {/* <Image width={200} height={200} alt="aa" src={item?.image} className="img-fluid" /> */}
                                                        <span className="checkbox-label equal-height">{item?.name}</span>
                                                        <input type='number' className='form-control' />
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9 position-relative">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label labeltitle">Aanvullende vergoeding</label>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className='infcalcubx info-pos'>
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                    <i className="fas fa-2x fa-info-circle" />
                                </a>
                            </div>
                            <div className='eye-folder-in-single'>
                                <a href="javascript:void(0);" data-bs-toggle="modal" className='text-center' data-bs-target="#moreviewmodel">
                                    <Image width={50} height={50} alt="aa" src="/images/viewpop.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label labeltitle">Vrijwillige eigen risico</label>
                                </div>
                                <div className="col-12 position-relative">
                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} max={5000} value={rangeValue} onChange={handleInputChange} />
                                    <div className='infcalcubx info-pos'>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                            <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                    </div>
                                    <div className='cal-in-single'>
                                        <a href="javascript:void(0);" role="button" className="calculatorwrp green-cyan">
                                            <i className="fas fa-calculator" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <input type="range" className="form-range mb-0" id="customRange5" min={1} max={5000} value={rangeValue}
                                onChange={handleRangeChange} />
                            <label htmlFor="customRange5" className="form-label">
                            <div class="cus-num">
                                <span>€0</span>
                                <span>€ 50.000</span>
                            </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-sliders-h"></i> Extra filters</h5>
                </div>
                <div className="support">
                    {NoParentFilter && NoParentFilter.length > 0 &&
                        <>
                            {NoParentFilter?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input className="form-check-input" type="checkbox" id="ADSL"
                                        value={item?.id}
                                        onChange={() => handleFilterValue(item.id)} />
                                    <label className="form-check-label" htmlFor="ADSL">
                                        {item.features} (..)
                                    </label>
                                </div>
                            ))}
                        </>}

                </div>
                <div className="protectionbx">
                    <h5>Energise Regelt</h5>
                </div>
                <div className="support">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Aanbod op maat
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Aanbod op maat
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Aanvraag
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Aanvraag
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Unieke deals
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Unieke deals
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Duidelijkheid
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Duidelijkheid
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Service
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Content for Service
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <MailModal />
            </div>
        </>
    )
}

export default HealthInsuranceStep2Left