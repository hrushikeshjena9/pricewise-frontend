import Image from 'next/image'
import React from 'react'

const IncopacitatedStep0left = ({ setShow, show }) => {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-12">
                    <ul className="step-formholder">
                        <li>
                            <a className={show == 1 ? "active text-warning" : ""}>1</a>
                        </li>
                        <li>
                            <a>2</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='disability-title'>
                
                <h2 className='title-wimg'><Image src='/images/job-seeking.png' alt='job-seeking' width={128} height={128} /> Arbeidsongeschikheid <span className='text-warning'>vragenlijst</span></h2>
                <p className='mt-4'>
                    Verzekeren is gaan voor <b>zekerheid,</b>
                    daar willen jou natuurlijk graag mee helpen, maar dit
                    kunnen wij alleen doen door middel van jouw antwoorden.
                    Vul daarom de <b>vragenlijst</b> in en <b>vergelijk</b> zo jouw <b>passend aanbod!</b>
                </p>
            </div>
            <div className='card'>
                <div className='card-header text-center'>
                    <h4 className='mb-0'>Beroep &amp; werkzaamheden</h4>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label className='form-label'>Welke beroep beoefen jij?</label>
                        </div>
                        <div className='col-lg-6'>
                            <select className='form-select'>
                                <option>Selecteer beroep</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label className='form-label'>Toelichting beroep/ werkzaamheden?</label>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <textarea className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>
                                Wijkt het opgegeven beroep of toelichting op jouw werkzaamheden af van de
                                activiteiten die zijn geregistreerd bij de kamer van Koophandel?
                            </label>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <textarea className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-6'>
                            <label>
                                Administratieve en adviserende werkzaamheden
                            </label>
                        </div>
                        <div className='col-lg-6'>
                            <p className='mb-0'>Verdeling werkzaamheden: <span className='text-warning'>Totaal 100%</span></p>
                            <input className='form-control' type='text' placeholder='...%' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Verkopen/leidinggeven</label>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control' type='text' placeholder='...%' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Fysieke werkzaamheden (handarbeid)</label>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control' type='text' placeholder='...%' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Totaal moet 100% zijn*</label>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control' type='text' placeholder='...%' />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-6'>
                            <label>Hoeveel uur werk jij gemiddeld per week?</label>
                        </div>
                        <div className='col-lg-6'>
                            <p className='mb-0'>Ondernermerschap</p>
                            <input type='text' className='form-control' placeholder='Aantal uur...' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Sinds wanneer beoefen jij jouw beroep uit?</label>
                        </div>
                        <div className='col-lg-6'>
                            <input type='date' className='form-control'/>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Hoeveel jaar ben jij al ondernemer?</label>
                        </div>
                        <div className='col-lg-6'>
                        <input type='text' className='form-control' placeholder='Aantal uur...' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Hoeveel werknemers heb jij in dienst?*</label>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text' className='form-control' placeholder='Aantal werknemers...' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Hoeveel kilometers reis jij per jaar zakelijk met de auto?*</label>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text' className='form-control' placeholder='Kilometers...' />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-6'>
                            <label>
                                Wat is jouw hoogst afgeronden opleiding?*
                            </label>
                        </div>
                        <div className='col-lg-6'>
                            <p className='mb-0'>Opleiding</p>
                            <select className='form-select'>
                                <option selected disabled>Opleiding</option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-6'>
                            <label>Wat is jouw verwachte jaarinkomen van dit jaar?*</label>
                        </div>
                        <div className='col-lg-6'>
                            <p className='mb-0'>Inkomen</p>
                            <input className='form-control' type='text' placeholder='0 %' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>Afgelopen jaar</label>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control' type='text' placeholder='€...' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <label>2 jaar geleden*</label>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control' type='text' placeholder='€...' />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-lg-6'>
                            <p>3 jaar geleden*</p>
                        </div>
                        <div className='col-lg-6'>
                            <input className='form-control' type='text' placeholder='€...' />
                        </div>
                    </div>

                    <div className='row mt-4'>

                    <div className='col-lg-6'>
                        <a href='javascript:void(0);' className='btn-link text-dark fw-bold'>Vorige</a>
                    </div>
                    <div className='col-lg-6 text-lg-end'>
                        <button className='btn price-btn' onClick={() => setShow(2)}>Volgende</button>

                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IncopacitatedStep0left