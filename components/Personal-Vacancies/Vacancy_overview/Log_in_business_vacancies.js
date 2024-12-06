import React from 'react'
import LoginBusinessLeftSidePersonal from './LoginBusinessLeftSide'
import LoginBusinessRightSidePersonal from './LoginBusinessRightSide'

const LogInBusinessVacanciesPersonal = () => {
  return (
    <>
    <section className="login-top-title-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="log-title">
              <h3>Opweg naar jouw <span>Energise carrière</span></h3>
              <p>Jouw succes begint bij <span>ons</span>!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="filter-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="login-filter">
              <select className="form-select">
                <option>Filter</option>
                <option>Filter 1</option>
                <option>Filter 2</option>
                <option>Filter 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="login-box-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <LoginBusinessLeftSidePersonal />
            </div>
         
            <div className="col-lg-6">
              <LoginBusinessRightSidePersonal />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogInBusinessVacanciesPersonal