import React, { useState } from 'react'
const ApplyFunction = ({setCount}) => {
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
  return (
    <>
      <div className="col-lg-4 col-md-6 mx-auto">
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
                  <textarea rows={4} className='form-control' placeholder='Max 50 leestekens'></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Beschrijf jezelf in 1 woord?</label>
                  <input className='form-control' placeholder='Max 25 leestekens' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <button className="btn-back" onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))}>Back</button>
              <button className="btn-one me-3" onClick={() => setCount(prevCount => prevCount + 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyFunction

