import Image from 'next/image'
import React from 'react'

export const TimeRegistrationFunctioning = () => {
    return (
        <>
        <div className='row'>
        <div className='col-lg-12'>
        <div className='card mt-4'>
                <div className='card-header'>
                    <h4 className="title-wimg"><Image width={200} height={200} alt="aa" src="/images/timeregistration.png" /> Urenregistratie</h4>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-5 table-responsive'>
                            <table className='table time-registration-tableleft text-nowrap table-bordered'>
                                <tbody>
                                    <tr>
                                        <td>Jouw gewerkte tijden: </td>
                                        <td>mm-jjjj</td>
                                    </tr>
                                    <tr>
                                        <td>Week 1</td>
                                        <td>Aantal uur & ...min</td>
                                    </tr>
                                    <tr>
                                        <td>Week 2</td>
                                        <td>Aantal uur & ...min</td>
                                    </tr>
                                    <tr>
                                        <td>Week 3</td>
                                        <td>Aantal uur & ...min</td>
                                    </tr>
                                    <tr>
                                        <td>Week 4</td>
                                        <td>Aantal uur & ...min</td>
                                    </tr>
                                    <tr>
                                        <td>dd-mm-jjjj</td>
                                        <td>Aantal uur & ...min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-lg-7 text-center table-responsive'>

                            <p>Registreer jouw werktijden. <span className='text-warning' >Geef dit optijd door!</span></p>
                            <table className='table table-bordered table-sm text-nowrap'>
    <thead className='text-center'>
        <tr>
            <th colSpan={4}>Voorkeur werktijden</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <table className='table time-registration-table table-borderless table-sm align-middle'>
                    <tbody>
                        <tr><th>&nbsp;</th></tr>
                        <tr><th>Ma</th></tr>
                        <tr><th>Di</th></tr>
                        <tr><th>Wo</th></tr>
                        <tr><th>Do</th></tr>
                        <tr><th>Vrij</th></tr>
                        <tr><th>Za</th></tr>
                        <tr><th>Zo</th></tr>
                    </tbody>
                </table>
            </td>
            {['Ochtend 8:00-13:00', 'Middag 13:00-17:30', 'Avond 17:30-21:30'].map((period, periodIdx) => (
                <td key={periodIdx}>
                    <table className='table table-borderless table-sm align-middle'>
                        <tbody>
                            <tr><td><p className='mb-0'><span className={`text-${periodIdx === 0 ? 'warning' : periodIdx === 1 ? 'warning' : 'primary'}`}>{period.split(' ')[0]}</span> {period.split(' ')[1]}</p></td></tr>
                            {['Ma', 'Di', 'Wo', 'Do', 'Vrij', 'Za', 'Zo'].map((day, dayIdx) => (
                                <tr key={`${periodIdx}-${dayIdx}`}>
                                    <td>
                                        <div className="d-flex">
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="radio" name={`${periodIdx}-${day}`} id={`${periodIdx}-yes-${day}`} value="yes" />
                                                <label className="form-check-label" htmlFor={`${periodIdx}-yes-${day}`}>Ja</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={`${periodIdx}-${day}`} id={`${periodIdx}-no-${day}`} value="no" defaultChecked />
                                                <label className="form-check-label" htmlFor={`${periodIdx}-no-${day}`}>Nee</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </td>
            ))}
        </tr>
    </tbody>
</table>

                            <button type="button" className="border-0 price-btn">Doorgeven</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-12'>
           <div className='card mt-4'>
           <div className="card-header">
                 <h4 className="title-wimg"><Image width={200} height={200} alt="aa" src="/images/line-chart.png"/> Functionering</h4>
            </div>
                <div className='card-body table-responsive'>
                    <table className='table table-borderless text-nowrap'>
                        <tbody>
                            <tr>
                                <td><p><b>Naam:</b><span>...</span></p></td>
                                <td><p><b>Dienstverband:</b><span>...</span></p></td>
                                <td><p><b>Functie:</b><span>...</span></p></td>
                            </tr>
                            <tr>
                                <td><p><b>Rang:</b><span>...</span></p></td>
                                <td><p><b>In dienst:</b><span>dd-mm-jjjj</span></p></td>
                                <td><p><b>Beschikbaar:</b><span>uur</span></p></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <th>
                                    Datum:
                                </th>
                                <td>
                                    <span className='text-warning d-block'>Dag</span>
                                    dd/mm/jjjj
                                </td>
                                <td>
                                    <span className='text-warning d-block'>Week</span>
                                    dd/mm/jjjj
                                </td>
                                <td>
                                    <span className='text-warning d-block'>Maand</span>
                                </td>
                                <td>
                                    <span className='text-sucesss d-block'>Team</span>
                                    dd/mm/jjjj
                                </td>
                            </tr>
                            <tr>
                                <th>Target:</th>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                            <th>Resultaat:</th>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            </tr>
                        </tbody>
                            </table>
                            <div className='row'>
                                <div className='col-6'>
                                    <table className='table table-borderless'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className='mb-0'> Gesprek verslag: dd-mm-jjjj </p>
                                                    <a href='javascript:void(0);' className='text-warning'>Download</a>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                <p  className='mb-0'>Evalutie gesprek: dd-mm-jjjj</p>
                                                    <a href='javascript:void(0);' className='text-warning'>Download</a>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    Voortgang:
                                                    <p className='mb-0'><span className='text-warning'>Positief/</span>negatief</p>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                        <div className='col-6'>
                        <table className='table table-borderless text-nowrap'>
                        <tbody>
                            <tr>
                                <td>
                                    <p className='fw-bold'>Verbeterpunten:</p>
                                    <ul className='list-unstyled'>
                                        <li>Punt 1:...</li>
                                        <li>Punt 2:...</li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                <p className='fw-bold'>Plus punten:</p>
                                    <ul className='list-unstyled'>
                                        <li>Punt 1:...</li>
                                        <li>Punt 2:...</li>
                                    </ul>
                                </td>
                            </tr>
                           </tbody>
                             </table>

                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </div>
        </>
    )
}

export default TimeRegistrationFunctioning