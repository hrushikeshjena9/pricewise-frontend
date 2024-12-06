import React from 'react'

const Ideasbox = () => {
  return (
    <>
    <div className="index-box">
    <div className="row">
        <div className="col-lg-8 mx-auto">
        <div className="index-box-ci">
            <div className="index-title">
            <i className="fas fa-envelope" />
            <h5>Ideeën box</h5>
            <i className="fas fa-envelope" />
            </div>
            <div className="index-cont">
            <p>Heb jij een gave idee, die jij graag terug wilt zien bij ons? Stuur ze in! De beste ideeën, met de meeste draagkracht word beloond in de wall of sales Wil jij deze status? Ontvang bij een succesvolle idee een gratis ticket naar de championsales ligue!</p>
            <div className="row">
                <div className="col-lg-4">
                <div className="index-text-box">
                    <h5>Postbus <span className="cl-orange"> Promoties</span></h5>
                    <textarea name id cols={30} rows={4} placeholder="Type jouw idee..." defaultValue={""} />
                </div>
                </div>
                <div className="col-lg-4">
                <div className="index-text-box">
                    <h5>Postbus <span className="cl-orange">Team</span></h5>
                    <textarea name id cols={30} rows={4} placeholder="Type jouw idee..." defaultValue={""} />
                </div>
                </div>
                <div className="col-lg-4">
                <div className="index-text-box">
                    <h5>Postbus  <span className="cl-orange">Werk</span></h5>
                    <textarea name id cols={30} rows={4} placeholder="Type jouw idee..." defaultValue={""} />
                </div>
                </div>
            </div>
            <div className="btn-index">
                <a href="#" className="btn-two">Verstuur</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Ideasbox