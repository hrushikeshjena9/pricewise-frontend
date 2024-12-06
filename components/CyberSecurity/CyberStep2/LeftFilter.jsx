import Image from 'next/image'
import React, { useState } from 'react'
import MailModal from '../../CommonModals/MailModal'

const LeftFilter = () => {
    const [rangeValue, setRangeValue] = useState(1);
    const [rangeValue2, setRangeValue2] = useState(10);
    const [rangeValue3, setRangeValue3] = useState(1);
    const [rangeValue4, setRangeValue4] = useState(1);
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
    const handleRangeChange4 = (e) => {
        setRangeValue4(parseInt(e.target.value));
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
    const handleInputChange4 = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue4(value);
    };
    // ----------range slider logic ends--------------------
    return (
        <>
            <div className="col-lg-4">
                <div className="yourdetailsbox">
                    <h5>Jouw gegevens:</h5>
                    <ul className="infodetails">
                        <li>
                            Vergelijking:
                            <span>Cybersecurity</span>
                        </li>
                        <li>
                            Zip:
                            <span />
                        </li>
                        <li>
                            Huisnummer:
                            <span />
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
                                        <i className="fas  fa-user" />
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
                <div className="cyberbxright steprangeleft">
                    <div className="row">
                        <div className="col">
                            <label className="form-label labeltitle">Licentie duur</label>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control " id="numberInput1" min={1} max={2}
                                value={rangeValue}
                                onChange={handleInputChange} />
                            <div className="infbx">
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                            </div>
                        </div>
                        <div className="col-12">
                            <input type="range" className="form-range" id="customRange1" min={1} max={2}
                                value={rangeValue}
                                onChange={handleRangeChange} />
                            <label htmlFor="customRange5" className="form-label">
                                <div className="cus-num">
                                    <span id="rangeValue5">1 jaar</span>
                                    <span>OF 2Jaar</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label labeltitle">Cloud back-up</label>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control " id="numberInput2" min={10} max={100}
                                value={rangeValue2}
                                onChange={handleInputChange2} />
                            <div className="infbx">
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                            </div>
                        </div>
                        <div className="col-12">
                            <input type="range" className="form-range" id="customRange2" min={10} max={100} value={rangeValue2}
                                onChange={handleRangeChange2} />
                            <label htmlFor="customRange5" className="form-label">
                                <div className="cus-num">
                                    <span id="rangeValue5">10 GB</span>
                                    <span>OF 100GB</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label labeltitle">Aantal pc’s</label>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control " id="numberInput3" min={1} max={20}
                                value={rangeValue3}
                                onChange={handleInputChange3} />
                            <div className="infbx">
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                            </div>
                        </div>
                        <div className="col-12">
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} value={rangeValue3}
                                onChange={handleRangeChange3} />

                            <label htmlFor="customRange5" className="form-label">
                                <div className="cus-num">
                                    <span id="rangeValue5">1</span>
                                    <span>OF 20 computers</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="yourdetailedit">
                        <div className="row">
                            <div className="col-lg-12">
                                <a href="javascript:void(0);"><i className="fas fa-cog" /> Wijzig</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="steprangeleft priceadjustbx">
                    <div className="row">
                        <div className="col">
                            <label className="form-label labeltitle">Totaal budget</label>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control " id="numberInput4" min={1} max={300}
                                value={rangeValue4}
                                onChange={handleInputChange4} />
                            <div className="infbx">
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-html="true" title="Content Goes Here"><i className="fas fa-2x fa-info-circle" /></a>
                            </div>
                        </div>
                        <div className="col-12">
                            <input type="range" className="form-range" id="customRange4" min={1} max={300} value={rangeValue4}
                                onChange={handleRangeChange4} />
                            <label htmlFor="customRange5" className="form-label">
                                <div className="cus-num">
                                    <span id="rangeValue5">€ 1</span>
                                    <span>OF 300€</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5>Bescherming</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="bankierVeilig" />
                        <label className="form-check-label" htmlFor="bankierVeilig">
                            Bankier veilig (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="antiDiefstal" />
                        <label className="form-check-label" htmlFor="antiDiefstal">
                            Anti diefstal (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="privacyProtector" />
                        <label className="form-check-label" htmlFor="privacyProtector">
                            Privacy protector (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="kindvriendelijkGebruik" />
                        <label className="form-check-label" htmlFor="kindvriendelijkGebruik">
                            Kindvriendelijk gebruik (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="veiligInternetten" />
                        <label className="form-check-label" htmlFor="veiligInternetten">
                            Veilig internetten (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="klantenscore" />
                        <label className="form-check-label" htmlFor="klantenscore">
                            Klantenscore
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                        </label>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5>Ondersteuning</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="mac" />
                        <label className="form-check-label" htmlFor="mac">
                            Mac (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="Windows" />
                        <label className="form-check-label" htmlFor="Windows">
                            Windows (..)
                        </label>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5>Smartphone besturing</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="android" />
                        <label className="form-check-label" htmlFor="android">
                            Android (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="apple" />
                        <label className="form-check-label" htmlFor="apple">
                            Apple (..)
                        </label>
                    </div>
                </div>
                <MailModal />
            </div>
        </>
    )
}

export default LeftFilter