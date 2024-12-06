import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LvacancPreview = () => {
   // State for the first file input (CV Uploaden)
   const [cvFileName, setCvFileName] = useState('Geen bestand gekozen');

   // State for the second file input (Motivatie Uploaden)
   const [motivationFileName, setMotivationFileName] = useState('Geen bestand gekozen');

   // Handler for the first file input
   const handleCvFileChange = (e) => {
       if (e.target.files.length > 0) {
           setCvFileName(e.target.files[0].name);
       } else {
           setCvFileName('Geen bestand gekozen');
       }
   };

   // Handler for the second file input
   const handleMotivationFileChange = (e) => {
       if (e.target.files.length > 0) {
           setMotivationFileName(e.target.files[0].name);
       } else {
           setMotivationFileName('Geen bestand gekozen');
       }
   };

    const router = useRouter();
    const handleBackClick = () => {
        router.back(); // Navigate back to the previous page
      };
    return (
        <>
            <section className="login-top-title-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="log-title">
                                <h3>
                                    Fantastisch dat <span>jij voor ons kiest</span>
                                </h3>
                                <p>
                                    Jouw succes begint bij <span>ons</span>!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="app-table-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vac-left-box">
                                <div className="vac-table">
                                    <div className="row px-2">
                                        <div className="col-6  col-sm-3 p-0">
                                            <div className="vac-box">
                                                <span className="num-text">1</span>
                                                <ul>
                                                    <li>Salaris </li>
                                                    <li>Tot .... </li>
                                                    <li>per uur </li>
                                                </ul>
                                                <i className="fal fa-euro-sign"></i>
                                            </div>
                                        </div>
                                        <div className="col-6  col-sm-3 p-0">
                                            <div className="vac-box">
                                                <ul>
                                                    <li>Functie </li>
                                                    <li>.... </li>
                                                    <li>Manager </li>
                                                </ul>
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="col-6  col-sm-3 p-0">
                                            <div className="vac-box">
                                                <ul>
                                                    <li>Locatie </li>
                                                    <li>.... </li>
                                                </ul>
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                        </div>
                                        <div className="col-6  col-sm-3 p-0">
                                            <div className="vac-box">
                                                <ul>
                                                    <li>Dienstverband </li>
                                                    <li>.... </li>
                                                </ul>
                                                <i className="fal fa-clock"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="apply-form-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="apply-form">
                                <div className="apply-title">
                                    <h4>Contactgegevens</h4>
                                </div>
                                <div className="applyform-text">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <label>Geslacht</label>
                                        </div>
                                        <div className="col-lg-auto col-md-auto col-sm-auto app-radio-icon">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="man"
                                                name="geslacht"
                                            />
                                            <label htmlFor="man">Dhr </label>
                                        </div>
                                        <div className="col-lg-auto col-md-auto col-sm-auto app-radio-icon">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="vrouw"
                                                name="geslacht"
                                            />
                                            <label htmlFor="vrouw">Mvr</label>
                                        </div>
                                        <div className="col-lg-auto col-md-auto col-sm-auto app-radio-icon">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="vrouw"
                                                name="geslacht"
                                            />
                                            <label htmlFor="vrouw">n.v.t</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Voornaam</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Achternaam</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Telefoonnummer</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>E-mail</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Woonplaats</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="apply-form">
                                <div className="apply-title">
                                    <h4>Functie</h4>
                                </div>
                                <div className="applyform-text">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className='form-group'>
                                                <label className="uploadFile w-100">
                                                    <span>CV Uploaden</span>
                                                    <input
                                                        type="file"
                                                        className="inputfile"
                                                        name="cvFile"
                                                        onChange={handleCvFileChange}
                                                        style={{ display: 'none' }}
                                                        id="cvFileInput"
                                                    />
                                                    <label htmlFor="cvFileInput" className="customFileLabel form-control">
                                                        {cvFileName}
                                                    </label>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className='form-group'>
                                                <label className="uploadFile w-100 mt-3">
                                                    <span>Motivatie Uploaden</span>
                                                    <input
                                                        type="file"
                                                        className="inputfile"
                                                        name="motivationFile"
                                                        onChange={handleMotivationFileChange}
                                                        style={{ display: 'none' }}
                                                        id="motivationFileInput"
                                                    />
                                                    <label htmlFor="motivationFileInput" className="customFileLabel form-control">
                                                        {motivationFileName}
                                                    </label>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Waarom ben jij geschikt?</label>
                                                <textarea rows={6} className='form-control' placeholder='50 leeslakens max'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Beschrijf jezelf in 1 woord?</label>
                                                <input className='form-control' placeholder='25 leestakara mak' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="apply-form">
                                <div className="apply-title">
                                    <h4>Beschikbaarheid</h4>
                                </div>
                                <div className="applyform-text">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Vanaf wanneer kan jij starten?</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Hoeveel uur kan jij werken elke week?</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Studeer jij? zo ja, wat?</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Ben jij flexibel inzetbaar?</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Welke dagen ben jij beschikbaar?</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                    <button className="btn-back" onClick={handleBackClick}>Back</button>
                        <button className="btn-one">Verzenden</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LvacancPreview


