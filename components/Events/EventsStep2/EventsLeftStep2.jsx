import Image from 'next/image'
import React, { useState } from 'react'
import MailModal from '../../CommonModals/MailModal'

const EventsLeftStep2 = () => {
    const [rangeValue, setRangeValue] = useState(1);
    const [rangeValue2, setRangeValue2] = useState(10);
    const [rangeValue3, setRangeValue3] = useState(1);
    const [rangeValue4, setRangeValue4] = useState(1);
    const [rangeValue5, setRangeValue5] = useState(1);
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
    const handleRangeChange5 = (e) => {
        setRangeValue5(parseInt(e.target.value));
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
    const handleInputChange5 = (e) => {
        let value = parseInt(e.target.value);
        setRangeValue5(value);
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
                            <span className="fw-bold">Evenementen</span>
                        </li>
                        <li>
                            Postcode:
                            <span className="fw-bold" />
                        </li>
                        <li>
                            Huisnummer:
                        </li>
                        <li>
                            Verwachte data:
                            <span className="fw-bold">DD-MM-JJJJ</span>
                        </li>
                        <li>
                            Aantal personen:
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
                                        <i className="far fa-calendar-plus" />
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
                <div className="event-bx">
                    <div className="row">
                        <div className="col-12">
                            <select className="form-select" aria-label="Select">
                                <option selected>Soort evenement</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="form-check text-start">
                                <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    defaultValue
                                    id="klantenscore"
                                />
                                <label className="form-check-label" htmlFor="klantenscore">
                                    Verloving
                                </label>
                            </div>
                            <div className="form-check text-start">
                                <input
                                    className="form-check-input  me-2"
                                    type="radio"
                                    defaultValue
                                    id="Windows"
                                />
                                <label className="form-check-label" htmlFor="Windows">
                                    Babyshower
                                </label>
                            </div>
                            <div className="form-check text-start">
                                <input
                                    className="form-check-input  me-2"
                                    type="radio"
                                    defaultValue
                                    id="Windows"
                                />
                                <label className="form-check-label" htmlFor="Windows">
                                    Bruiloft
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">

                                        <label className="form-label labeltitle d-block"><Image width={200} height={200} alt="aa" src="/images/catering-2.png" /> Catering</label>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label labeltitle">Budget</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="number" className="form-control" id="numberInput6" min={1} max={3000}
                                            value={rangeValue}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div className="col-12">
                                        <input type="range" className="form-range" id="customRange6" min={1} max={3000} value={rangeValue}
                                            onChange={handleRangeChange} />

                                        <label htmlFor="customRange5" className="form-label">
                                            <div className="cus-num">
                                                <span id="rangeValue5">€1</span>
                                                <span>€ 3,000</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="infcalcubx">
                                    <ul className="list-unstyled d-flex">
                                        <li>
                                            <a data-bs-toggle="modal" href="#quantityModalToggle" role="button" className="calculatorwrp">
                                                <i className="fas fa-calculator" />
                                                <span>Hulp nodig?</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label d-block" htmlFor="flexCheckDefault">
                                                    Toevoegen
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Model Start */}
                            <div className="modal quantityModal fade" id="quantityModalToggle" aria-hidden="true" aria-labelledby="quantityModalToggleLabel" tabIndex={-1}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <i className="fas fa-times" />
                                            </button>
                                            <div className="selectquantity">
                                                <div className="quantitybxtitle">
                                                    <ul>
                                                        <li><Image width={200} height={200} alt="aa" src="/images/serve-dinner.png" /></li>
                                                        <li><h2>Selecteer of vul in</h2></li>
                                                        <li><i className="fas fa-2x fa-calculator" /></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/dish.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Gangen</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb11" />
                                                                <label htmlFor="cb11">
                                                                    <Image width={200} height={200} alt="aa" src="/images/soup.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Voorgerecht</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb12" />
                                                                <label htmlFor="cb12">
                                                                    <Image width={200} height={200} alt="aa" src="/images/dish.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Hoofdgerecht</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb13" />
                                                                <label htmlFor="cb13">
                                                                    <Image width={200} height={200} alt="aa" src="/images/ice-cream.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Dessert</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/cutlery.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Gerechten</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb14" />
                                                                <label htmlFor="cb14">
                                                                    <Image width={200} height={200} alt="aa" src="/images/soup.png" className="img-fluid" />
                                                                </label>
                                                                <select className="form-select" id="voorgerecht">
                                                                    <option value disabled selected>voorgerecht</option>
                                                                    <option value="optie1">Optie 1</option>
                                                                    <option value="optie2">Optie 2</option>
                                                                    <option value="optie3">Optie 3</option>
                                                                    {/* Add more options as needed */}
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb15" />
                                                                <label htmlFor="cb15">
                                                                    <Image width={200} height={200} alt="aa" src="/images/dish.png" className="img-fluid" />
                                                                </label>
                                                                <select className="form-select" id="voorgerecht">
                                                                    <option value disabled selected>Hoofdgerecht</option>
                                                                    <option value="optie1">Optie 1</option>
                                                                    <option value="optie2">Optie 2</option>
                                                                    <option value="optie3">Optie 3</option>
                                                                    {/* Add more options as needed */}
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb16" />
                                                                <label htmlFor="cb16">
                                                                    <Image width={200} height={200} alt="aa" src="/images/ice-cream.png" className="img-fluid" />
                                                                </label>
                                                                <select className="form-select" id="voorgerecht">
                                                                    <option value disabled selected>Dessert</option>
                                                                    <option value="optie1">Optie 1</option>
                                                                    <option value="optie2">Optie 2</option>
                                                                    <option value="optie3">Optie 3</option>
                                                                    {/* Add more options as needed */}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/waitress.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Service</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb17" />
                                                                <label htmlFor="cb17">
                                                                    <Image width={200} height={200} alt="aa" src="/images/waitress.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Tafelbediende</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cb18" />
                                                                <label htmlFor="cb18">
                                                                    <Image width={200} height={200} alt="aa" src="/images/buffet.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Lopendbuffet</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="popupbtn">
                                                        <p>Catering budget: <span>€ 3.000</span></p>
                                                        <div className="row">
                                                            <div className="col-12 text-center  ">
                                                                <button className="btnps">Opslaan</button>
                                                                <a href="#" className="reset">
                                                                    <i className="fas fa-2x fa-sync-alt" />
                                                                    <span>Reset</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Model End */}
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">

                                        <label className="form-label labeltitle d-block"><Image width={200} height={200} alt="aa" src="/images/wedding-arch-2.png" /> Versiering/ Stylisten</label>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label labeltitle">Budget</label>
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" id="numberInput6" min={1} max={3000}
                                            value={rangeValue2}
                                            onChange={handleInputChange2} />
                                    </div>
                                    <div className="col-12">
                                        <input type="range" className="form-range" id="customRange6" min={1} max={3000} value={rangeValue2}
                                            onChange={handleRangeChange2} />
                                        <label htmlFor="customRange5" className="form-label">
                                            <div className="cus-num">
                                                <span id="rangeValue5">€1</span>
                                                <span>€ 3,000</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="infcalcubx">
                                    <ul className="list-unstyled d-flex">
                                        <li>
                                            <a data-bs-toggle="modal" href="#decorationModalToggle" role="button" className="calculatorwrp">
                                                <i className="fas fa-calculator" />
                                                <span>Hulp nodig?</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label d-block" htmlFor="flexCheckDefault">
                                                    Toevoegen
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Model Start */}
                            <div className="modal decorationModal fade" id="decorationModalToggle" aria-hidden="true" aria-labelledby="decorationModalToggleLabel" tabIndex={-1}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <i className="fas fa-times" />
                                            </button>
                                            <div className="selectquantity">
                                                <div className="quantitybxtitle">
                                                    <ul>
                                                        <li><Image width={200} height={200} alt="aa" src="/images/decoration.png" /></li>
                                                        <li><h2>Selecteer of vul in</h2></li>
                                                        <li><i className="fas fa-2x fa-calculator" /></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/roomdecoration.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Decoraties</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="checkbox" name="test" id="cbs11" />
                                                                <label htmlFor="cbs11">
                                                                    <Image width={200} height={200} alt="aa" src="/images/weddingsofa.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Bruidsbank</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="checkbox" name="test" id="cbs12" />
                                                                <label htmlFor="cbs12">
                                                                    <Image width={200} height={200} alt="aa" src="/images/tabledecoration.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Tafeldecoratie</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="checkbox" name="test" id="cbs13" />
                                                                <label htmlFor="cbs13">
                                                                    <Image width={200} height={200} alt="aa" src="/images/roomdecoration.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Zaalversiering</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/manicure.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Stylisten</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs14" />
                                                                <label htmlFor="cbs14">
                                                                    <Image width={200} height={200} alt="aa" src="/images/hairstylists.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Haarstylisten</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs15" />
                                                                <label htmlFor="cbs15">
                                                                    <Image width={200} height={200} alt="aa" src="/images/make-upartists.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Visagisten</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs16" />
                                                                <label htmlFor="cbs16">
                                                                    <Image width={200} height={200} alt="aa" src="/images/manicure.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Manicure</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/location.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Service</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs17" />
                                                                <label htmlFor="cbs17">
                                                                    <Image width={200} height={200} alt="aa" src="/images/location.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Op locatie</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs18" />
                                                                <label htmlFor="cbs18">
                                                                    <Image width={200} height={200} alt="aa" src="/images/visitingaddress.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Bezoekadres</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs19" />
                                                                <label htmlFor="cbs19">
                                                                    <Image width={200} height={200} alt="aa" src="/images/gift.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Giftbox</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="popupbtn">
                                                        <p>Catering budget: <span>€ 3.000</span></p>
                                                        <div className="row">
                                                            <div className="col-12 text-center  ">
                                                                <button className="btnps">Opslaan</button>
                                                                <a href="#" className="reset">
                                                                    <i className="fas fa-2x fa-sync-alt" />
                                                                    <span>Reset</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Model End */}
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-label labeltitle"> <Image width={200} height={200} alt="aa" src="/images/music.png" /> Muziek/ Foto-Videograaf</label>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label labeltitle">Budget</label>
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" id="numberInput6" min={1} max={3000}
                                            value={rangeValue3}
                                            onChange={handleInputChange3} />
                                    </div>
                                    <div className="col-12">
                                        <input type="range" className="form-range" id="customRange6" min={1} max={3000} value={rangeValue3}
                                            onChange={handleRangeChange3} />
                                        <label htmlFor="customRange5" className="form-label">
                                            <div className="cus-num">
                                                <span id="rangeValue5">€1</span>
                                                <span>€ 3,000</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="infcalcubx">
                                    <ul className="list-unstyled d-flex">
                                        <li>
                                            <a data-bs-toggle="modal" href="#muziekModalToggle" role="button" className="calculatorwrp">
                                                <i className="fas fa-calculator" />
                                                <span>Hulp nodig?</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label d-block" htmlFor="flexCheckDefault">
                                                    Toevoegen
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Model Start */}
                            <div className="modal muziekModal fade" id="muziekModalToggle" aria-hidden="true" aria-labelledby="muziekToggleLabel" tabIndex={-1}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <i className="fas fa-times" />
                                            </button>
                                            <div className="selectquantity">
                                                <div className="quantitybxtitle">
                                                    <ul>
                                                        <li><Image width={200} height={200} alt="aa" src="/images/decoration.png" /></li>
                                                        <li><h2>Selecteer of vul in</h2></li>
                                                        <li><i className="fas fa-2x fa-calculator" /></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/music.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Muziek</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cba11" />
                                                                <label htmlFor="cba11">
                                                                    <Image width={200} height={200} alt="aa" src="/images/liveband.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Live band</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cba12" />
                                                                <label htmlFor="cba12">
                                                                    <Image width={200} height={200} alt="aa" src="/images/dj.png" className="img-fluid" />
                                                                    <span className="checkbox-label">DJ</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cba13" />
                                                                <label htmlFor="cba13">
                                                                    <Image width={200} height={200} alt="aa" src="/images/djnlive.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Beide</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row my-2">
                                                    <div className="col-lg-6">
                                                        <Image width={200} height={200} alt="aa" src="/images/video-player.png" className="img-fluid" />
                                                        <label className="form-label fw-bold">Voorkeur Genre</label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-select" aria-label="Select">
                                                            <option selected>Genre Select</option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="subtitleqyt">
                                                            <li><Image width={200} height={200} alt="aa" src="/images/poto.png" className="img-fluid" /></li>
                                                            <li>
                                                                <h5>Foto-Videograaf</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 radiobx">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs14" />
                                                                <label htmlFor="cbs14">
                                                                    <Image width={200} height={200} alt="aa" src="/images/poto.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Fotos</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs15" />
                                                                <label htmlFor="cbs15">
                                                                    <Image width={200} height={200} alt="aa" src="/images/filmen.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Filmen</span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4 col-md-4">
                                                                <input type="radio" name="test" id="cbs16" />
                                                                <label htmlFor="cbs16">
                                                                    <Image width={200} height={200} alt="aa" src="/images/videophoto.png" className="img-fluid" />
                                                                    <span className="checkbox-label">Beide</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 text-center mt-2">
                                                        <label className="form-label fw-bold">Tijdsduur</label>
                                                    </div>
                                                    <div className="col">
                                                        <label className="form-label labeltitle" htmlFor="numberInput5">Aantal uren</label>
                                                    </div>
                                                    <div className="col">
                                                        <input type="number" className="form-control" id="numberInput5" min={1} max={3000}
                                                            value={rangeValue4}
                                                            onChange={handleInputChange4} />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="range" className="form-range" id="customRange5" min={1} max={3000} value={rangeValue4}
                                                            onChange={handleRangeChange4} />
                                                        <label htmlFor="customRange5" className="form-label"><span id="rangeValue5">1</span>8uur</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="popupbtn">
                                                        <p>Muziek &amp; Foto-Videograaf budget: <span>€ 3.000</span></p>
                                                        <div className="row">
                                                            <div className="col-12 text-center  ">
                                                                <button className="btnps">Opslaan</button>
                                                                <a href="#" className="reset">
                                                                    <i className="fas fa-2x fa-sync-alt" />
                                                                    <span>Reset</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Model End */}
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">

                                        <label className="form-label labeltitle d-block"><i className="fas fa-2x fa-calculator" /> Budget</label>
                                    </div>
                                    <div className="col-auto">
                                        <label className="form-label labeltitle border-0">Totaal budget</label>
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" id="numberInput6" min={1} max={3000} value={rangeValue5}
                                            onChange={handleInputChange5} />
                                    </div>
                                    <div className="col-12">
                                        <input type="range" className="form-range" id="customRange6" min={1} max={3000} value={rangeValue5}
                                            onChange={handleRangeChange5} />
                                        <label htmlFor="customRange5" className="form-label">
                                            <div className="cus-num">
                                                <span id="rangeValue5">€1</span>
                                                <span>€ 3,000</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="infcalcubx">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a><Image width={200} height={200} alt="aa" src="/images/viewpop.png" /><span>Overzicht?</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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

                <MailModal />
            </div>


        </>
    )
}

export default EventsLeftStep2