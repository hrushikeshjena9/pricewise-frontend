import Image from 'next/image'
import React from 'react'

const InternetTvTelephoneFilter = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="yourdetailsbox">
                    <h5>Jouw gegevens:</h5>
                    <ul className="infodetails">
                        <li>
                            Vergelijking:
                            <span></span>
                        </li>
                        <li>
                            Postcode:
                            <span></span>
                        </li>
                        <li>
                            Huisnummer:
                            <span></span>
                        </li>
                        <li>
                            Bedrijfsgrootte:
                            <span></span>:
                        </li>
                        <li>
                            Branche:
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
                                        <Image src='/images/viewpop.png' width={90} height={82} alt='viwpop' className="img-fluid" />
                                        <span>1/1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='protectionbx'>
                    <h5><i className="fas fa-cog"></i> Algemeen</h5>
                </div>
                <div className="loan-left">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <i className="fas fa-bolt green-cyan me-2"></i>
                                    <p>Koppelkorting</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="discount-select">
                                <select className="form-select">
                                    <option>N.V.T</option>
                                    <option>N.V.T 1</option>
                                    <option>N.V.T 2</option>
                                    <option>N.V.T 3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <Image
                                        src="/images/vokeru.png"
                                        width={128}
                                        height={128}
                                        alt="smart-tv"
                                    />
                                    <p>Pakket voorkeur</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="discount-select">
                                <select className="form-select">
                                    <option>N.V.T</option>
                                    <option>N.V.T 1</option>
                                    <option>N.V.T 2</option>
                                    <option>N.V.T 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <i className="fas fa-cube me-2 green-cyan"></i>
                                    <p>Pakket voorkeur</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="discount-select">
                                <select className="form-select">
                                    <option>N.V.T</option>
                                    <option>N.V.T 1</option>
                                    <option>N.V.T 2</option>
                                    <option>N.V.T 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <i className="fas fa-euro-sign me-2 green-cyan"></i>
                                    <p>Budget</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <input
                                type="number"
                                className="form-control "
                                id="numberInput1"
                                min={1}
                                defaultValue={1}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                min={1}
                                max={20000}
                                defaultValue={1}
                            />
                            <label htmlFor="customRange1" className="form-label">
                                <div className="cus-num">
                                    <span>€1</span>
                                    <span>€200</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-globe"></i> Internet</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Glasvezel" />
                        <label className="form-check-label" htmlFor="Glasvezel">
                            Glasvezel (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="ADSL" />
                        <label className="form-check-label" htmlFor="ADSL">
                            ADSL/VDSL (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Kabel" />
                        <label className="form-check-label" htmlFor="Kabel">
                            Kabel (..)
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-sm-7">
                            <label className="form-label labeltitle"><i className="fas fa-tachometer-alt"></i> Downloadsnelheid</label>
                        </div>
                        <div className="col-lg-4 col-sm-5">
                            <input type="number" className="form-control " id="numberInput3" min={1} defaultValue={1} />
                        </div>
                        <div className="col-12">
                            <input type="range" className="form-range" id="customRange3" min={1} max={20} defaultValue={1} />
                            <label htmlFor="customRange3" className="form-label">
                                <div className='cus-num'>
                                    <span>10Mb/s</span>
                                    <span>1000Mb/s</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-sliders-h"></i> Internet Opties</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="wifibooster" />
                        <label className="form-check-label" htmlFor="wifibooster">
                            Wifi Booster (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="ADSL" />
                        <label className="form-check-label" htmlFor="ADSL">
                            Vast IP adres (..)
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <i className="fas fa-tv green-cyan me-2"></i>
                                    <p>TV standaard</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <input
                                type="number"
                                className="form-control "
                                id="numberInput1"
                                min={1}
                                defaultValue={1}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <i className="fas fa-tv green-cyan me-2"></i>
                                    <p>TV Interactief</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <input
                                type="number"
                                className="form-control "
                                id="numberInput1"
                                min={1}
                                defaultValue={1}
                            />
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-theater-masks"></i> Extra zenderoverzicht</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Eredivisie" />
                        <label className="form-check-label" htmlFor="Eredivisie">
                            ESPN Eredivisie
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Internationaal" />
                        <label className="form-check-label" htmlFor="Internationaal">
                            ESPN Internationaal
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Ziggoporttotaal" />
                        <label className="form-check-label" htmlFor="Ziggoporttotaal">
                            Ziggo sport totaal
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Ziggoporttotaal" />
                        <label className="form-check-label" htmlFor="Ziggoporttotaal">
                            Film1
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Ziggoporttotaal" />
                        <label className="form-check-label" htmlFor="Ziggoporttotaal">
                            Kids()
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Ziggoporttotaal" />
                        <label className="form-check-label" htmlFor="Ziggoporttotaal">
                            Erotiek
                        </label>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-cog"></i> TV Opties</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="pauzeren" />
                        <label className="form-check-label" htmlFor="pauzeren">
                            Opnemen pauzeren
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Arabisch" />
                        <label className="form-check-label" htmlFor="Arabisch">
                            Arabisch
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Duits" />
                        <label className="form-check-label" htmlFor="Duits">
                            Duits
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Hindi" />
                        <label className="form-check-label" htmlFor="Hindi">
                            Hindi
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="Turks" />
                        <label className="form-check-label" htmlFor="Turks">
                            Turks
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="discount-bx">
                                <div className="discount-cont">
                                    <i className="fas fa-phone-volume green-cyan me-2"></i>
                                    <p>Vaste telefonie</p>
                                </div>
                                <i className="fas fa-info green-cyan"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <input
                                type="number"
                                className="form-control "
                                id="numberInput1"
                                min={1}
                                defaultValue={1}
                            />
                        </div>
                    </div>
                </div>
                <div className="protectionbx">
                    <h5><i className="fas fa-cog"></i> Vaste telefonie opties</h5>
                </div>
                <div className="support">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="nationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="nationaalonbeperktbellen">
                            Nationaal onbeperkt bellen
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="internationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="internationaalonbeperktbellen">
                            Internationaal onbeperkt bellen
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="internationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="internationaalonbeperktbellen">
                            Voip bellen (..)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="internationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="internationaalonbeperktbellen">
                            Digitale telefooncentrale (..)
                        </label>
                    </div>
                </div>

                <div className="protectionbx">
                    <h5><i className="fas fa-cog"></i> Service</h5>
                </div>
                <div className="support">
                    <div className="form-check ps-0">
                        <input className="form-check-input" type="checkbox" id="klantenscore" defaultValue="true" />
                        <label className="form-check-label" htmlFor="klantenscore">Klantenscore
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="nationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="nationaalonbeperktbellen">
                            Monteur (...)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="internationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="internationaalonbeperktbellen">
                            Nummerbehoud (...)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue id="internationaalonbeperktbellen" />
                        <label className="form-check-label" htmlFor="internationaalonbeperktbellen">
                            Tussentijds aanpassen
                        </label>
                    </div>
                </div>
                <div className="emaildeal">
                    <a href="javascript:void(0);">
                        <Image src='/images/mail.png' width={64} height={64} alt='mail' className="img-fluid" />
                        Mail mijn deals</a>
                </div>
            </div>
        </>
    )
}

export default InternetTvTelephoneFilter