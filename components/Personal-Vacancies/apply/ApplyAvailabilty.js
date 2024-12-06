import { useRouter } from 'next/router';
import React from 'react';


const ApplyAvailabiltyPersonal = ({ setCount }) => {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push('/vacancy-personal/priview'); 
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 mx-auto">
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
            <div className='d-flex justify-content-between'>
              <button className="btn-back me-2" onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))}>Back</button>
              <button className="btn-one" onClick={handleClick}>Preview</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyAvailabiltyPersonal