import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import MailModal from '../../CommonModals/MailModal';

const HomeInsuranceStep2Left = ({ apiRes, checkedItems, setCheckedItems }) => {
    const [noFilters, setNoFilters] = useState([])
    const [coverages, setCoverages] = useState()
    const [rangeValue, setRangeValue] = useState(1);
    const [rangeValue2, setRangeValue2] = useState(10);
    const [rangeValue3, setRangeValue3] = useState(1);
    useEffect(() => {
        if (apiRes?.filters?.length > 0) {
            setNoFilters(apiRes?.filters[0]?.No_Parent)
            setCoverages(apiRes?.coverages)
        }
    }, [])
    // console.log(noFilters);
    const handleFilterValue = (itemId) => {
        if (checkedItems.includes(itemId)) {
            setCheckedItems(checkedItems.filter((id) => id !== itemId));
        } else {
            setCheckedItems([...checkedItems, itemId]);
        }
    };
    // ----------range slider logic starts------------------
    const handleRangeChange = (e) => {
        setRangeValue(parseInt(e.target.value));
    };
    const handleRangeChange2 = (e) => {
        setRangeValue2(parseInt(e.target.value));
    };
    const handleRangeChange3 = (e) => {
        setRangeValue3(parseInt(e.target.value));
    };
    const handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue(value);
    };
    const handleInputChange2 = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue3(value);
    };
    const handleInputChange3 = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue3(value);
    };
    // ----------range slider logic ends--------------------
    return (
        <>
            <div className="col-lg-4">

                <div className="yourdetailsbox">
                    <h5>Jouw gegevens:</h5>
                    <ul className="infodetails">
                        <li>
                            Postcode:
                            <span></span>
                        </li>
                        <li>
                            Huisnummer:
                            <span></span>
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
                    <div className='row'>
                        <div className='col-7'>
                            <div className="row">
                                <div className="col-12 position-relative">
                                    <label className="form-label labeltitle">Soort dekking </label>
                                    <div className="infcalcubx info-in-absolute">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here">
                                            <i className="fas fa-2x fa-info-circle"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check ps-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue
                                            id="klantenscore"
                                        />
                                        <label className="form-check-label" htmlFor="klantenscore">
                                            Gehuurd
                                        </label>
                                    </div>
                                    <div className="form-check ps-0">
                                        <input
                                            className="form-check-input  me-2"
                                            type="checkbox"
                                            defaultValue
                                            id="Windows"
                                        />
                                        <label className="form-check-label" htmlFor="Windows">
                                            Gekocht
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-none">
                                <div className="col radiobx">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-4">
                                            <input type="radio" name="test" id="cb111" />
                                            <label htmlFor="cb111">
                                                <Image width={200} height={200} alt="aa" src="/images/protection.png" className="img-fluid" />
                                                <span className="checkbox-label">Gehuurd</span>
                                            </label>
                                        </div>
                                        <div className="col-lg-6 col-md-4">
                                            <input type="radio" name="test" id="cb22" />
                                            <label htmlFor="cb22">
                                                <Image width={200} height={200} alt="aa" src="/images/protection.png" className="img-fluid" />
                                                <span className="checkbox-label">Gekocht</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 position-relative">
                                    <label className="form-label labeltitle">Soort dekking </label>
                                    <div className="infcalcubx info-in-absolute">
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
                                            All risk
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-none">
                                <div className="col radiobx">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="radio" name="test" id="cb111" />
                                            <label htmlFor="cb111">
                                                <Image width={200} height={200} alt="aa" src="/images/homeicon.png" className="img-fluid" />
                                                <span className="checkbox-label">Basis</span>
                                            </label>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="radio" name="test" id="cb22" />
                                            <label htmlFor="cb22">
                                                <Image width={200} height={200} alt="aa" src="/images/homeicon.png" className="img-fluid" />
                                                <span className="checkbox-label">Allrisk</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="form-label labeltitle">Verzekerd bedrag</label>
                                </div>
                                <div className="col-12 position-relative">
                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} max={2000}
                                        value={rangeValue}
                                        onChange={handleInputChange} />
                                    <div className="infcalcubx hulpNinfo-in-position">
                                        <ul className="list-unstyled list-flex">
                                            <li>
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                                    <i className="fas fa-2x fa-info-circle" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" role="button" className="calculatorwrp">
                                                    <i className="fas fa-calculator" />
                                                    <span>Hulp nodig?</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <input type="range" className="form-range mb-0" id="customRange5" min={1} max={2000} value={rangeValue}
                                        onChange={handleRangeChange} />
                                    <label htmlFor="customRange5" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue5">€ 1</span>
                                            <span>OF €2000</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <label className="form-label labeltitle">Eigen risico</label>
                                </div>
                                <div className="col-12 position-relative">
                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} max={300}
                                        value={rangeValue2}
                                        onChange={handleInputChange2} />
                                    <div className="infcalcubx info-in-absolute">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                            <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <input type="range" className="form-range mb-0" id="customRange5" min={1} max={300} value={rangeValue2}
                                        onChange={handleRangeChange2} />
                                    <label htmlFor="customRange5" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue5">€ 1</span>
                                            <span>OF €300</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label labeltitle">Diefstal</label>
                                </div>
                                <div className="col-12 position-relative">
                                    <input type="number" className="form-control mb-0" id="numberInput5" min={1} max={250}
                                        value={rangeValue3}
                                        onChange={handleInputChange3} />
                                    <div className="infcalcubx info-in-absolute">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Content Goes Here" data-bs-original-title="Content Goes Here">
                                            <i className="fas fa-2x fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <input type="range" className="form-range mb-0" id="customRange5" min={1} max={250} value={rangeValue3}
                                        onChange={handleRangeChange3} />
                                    <label htmlFor="customRange5" className="form-label">
                                        <div className="cus-num">
                                            <span id="rangeValue5">€ 1</span>
                                            <span>OF €250</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-sliders-h"></i> Aanvullende dekkingen</h5>
                </div>
                <div className="support">
                    {coverages && coverages.length > 0 &&
                        <>
                            {coverages?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input className="form-check-input" type="checkbox" value={item?.id} id="ADSL"
                                        onChange={() => handleFilterValue(item.id)} />
                                    <label className="form-check-label" htmlFor="ADSL">
                                        {item?.name} (..)
                                    </label>
                                </div>
                            ))}
                        </>
                    }
                </div>
                <div className="protectionbx">
                    <h5>Extra filters</h5>
                </div>
                <div className="support">
                    {noFilters && noFilters.length > 0 &&
                        <>
                            {noFilters?.map((item, i) => (
                                <div className="form-check" key={i}>
                                    <input className="form-check-input" type="checkbox" id="" value={item?.id}
                                        onChange={() => handleFilterValue(item.id)} />
                                    <label className="form-check-label" htmlFor="">
                                        {item?.features} (..)
                                    </label>
                                </div>
                            ))}
                        </>}

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

export default HomeInsuranceStep2Left