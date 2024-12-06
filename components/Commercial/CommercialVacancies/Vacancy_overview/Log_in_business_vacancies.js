import React from 'react'
import LoginBusinessLeftSideCommercial from './LoginBusinessLeftSide'
import LoginBusinessRightSideCommercial from './LoginBusinessRightSide'

const LogInBusinessVacanciesCommercial = () => {
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
              <LoginBusinessLeftSideCommercial />
            </div>
            <div className="col-lg-6">
              <LoginBusinessRightSideCommercial />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogInBusinessVacanciesCommercial