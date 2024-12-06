import Image from 'next/image';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const LCoporateliabilityStep2Right = ({ setShowMoreInfo, showMoreInfo }) => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0)

    const handleCheckboxChange = () => {
        setOpen(!open);
    };   
    return (
        <>
            <div className="login-deals-box">
                <div className="spe-action">
                    <div className="spe-cont">
                        <Image width={200} height={200} alt="aa" src="/images/stopwatch.png" />
                        <h5>Actie:</h5>
                        <p>Geldig tot dd-mm-jj</p>
                    </div>
                    <div className="spe-cont">
                        <Image width={200} height={200} alt="aa" src="/images/sale.png" />
                        <p>Energise korting:</p>
                        <h4>€...</h4><i className="fas fa-info" />
                    </div>
                    <div className="spe-cont">
                        <Image width={200} height={200} alt="aa" src="/images/hot-sale.png"/>
                        <p>Totaal korting:</p>
                        <h4>€...</h4>
                    </div>
                </div>
                <div className="spe-action-data">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-3">
                            <div className="spe-img">
                                <Image width={200} height={200} alt="aa" src="/images/sunbg.png" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="spe-cn">
                                <h5>Pakket</h5>
                                <p>*</p>
                                <p>*</p>
                                <p>*</p>
                                <p>*</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="spe-cn">
                                <i className="fas fa-info" />
                                <h5>Kosten:</h5>
                                <h4>€....</h4>
                                <span>/p.m</span>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-3">
                            <div className="spe-cn">
                                <i className="fas fa-info" />
                                <h5>Bespaar:</h5>
                                <h4>€....</h4>
                                <span>/p.j</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <div className="spe-cn-star">
                                <i className="fas fa-info" />
                                <h3>Klantenscore: 4/5</h3>
                                <ul className="mb-3">
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="far fa-star" /></li>
                                </ul>
                                <a href="#" className="price-btn">Aanvragen</a>
                            </div>
                        </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-3">
                        <input className="form-check-input" type="checkbox" id="acceptConditions" name="acceptConditions"
                            checked={open}
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="acceptConditions">Vergelijk</label>

                    </div>
                    <a onClick={() => setShowMoreInfo(!showMoreInfo)} data-target="listhiddenDiv1" className="btn-act listtoggleDiv">
                        Meer informatie
                        {!showMoreInfo ?
                            <i className="fal fa-plus" />
                            :
                            <i className="fas fa-minus"></i>
                        }
                    </a>
                </div>
            </div>
            {/* -----modal--------- */}
            {open &&
                <div className="compare-container" style={{ display: 'block' }}>
                    <div className="row px-2">
                        <div className="compare-item col-lg-3" id="compare-item1" style={{ display: 'block' }}>
                            <div className="row">
                                <div className="col-12">
                                    <Image width={200} height={200} alt="aa" src="/images/gaenergy.png" className="img-fluid" />
                                    <p>Company Name</p>
                                    <Rating
                                        initialValue={3.5}
                                        size={20}
                                        readonly
                                        allowFraction
                                        fillColor="gold"
                                        emptyColor="gray"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="compare-item col-lg-3" id="compare-item2" style={{ display: 'block' }}>
                            <div className="row">
                                <div className="col-12">
                                    <Image width={200} height={200} alt="aa" src="/images/coronaenergy.png" className="img-fluid" />
                                    <p>Company Name</p>
                                    <Rating
                                        initialValue={4}
                                        size={20}
                                        readonly
                                        allowFraction
                                        fillColor="gold"
                                        emptyColor="gray"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="compare-item col-lg-3" id="compare-item3" style={{ display: 'block' }}>
                            <div className="row">
                                <div className="col-12">
                                    <Image width={200} height={200} alt="aa" src="/images/endzoneevents.png" className="img-fluid" />
                                    <p>Company Name</p>
                                    <Rating
                                        initialValue={2}
                                        size={20}
                                        readonly
                                        allowFraction
                                        fillColor="gold"
                                        emptyColor="gray"
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="ms-4 col-lg-2">
                            <div className="btn-compair-wrp">
                                <button className="btn btn-warning compare-button">Compare</button>
                            </div>
                        </div>
                    </div>
                    {/* Compare button */}
                </div>
            }
            {/* --------modal ends------------------ */}
        </>
    )
}

export default LCoporateliabilityStep2Right