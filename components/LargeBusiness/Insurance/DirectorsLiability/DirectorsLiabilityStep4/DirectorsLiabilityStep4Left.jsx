import Image from 'next/image'
import React from 'react'

const DirectorsLiability4 = () => {
  return (
     <>
                    <div className="col-lg-8">
                <div className="lsttitle">
                    <h2><span>Jij weet,</span> wat jij wilt!</h2>
                    <div className="secure-wrp">
                        <Image width={200} height={200} alt="aa" src="/images/secure.png" className="img-fluid secureimg" />
                    </div>
                    <h4>
                        Bekijk jouw uitzonderlijk deal &amp; vergelijk nog meer
                    </h4>
                </div>
                <div className="col-lg-12 lstleftbox">
                    <div className="card">
                        <div className="card-body">
                            <h4>Veel plezier!</h4>
                            <p>
                                Bedankt voor jouw bestelling <b>(naam)</b>. Jij kan er voorlopig weer tegen aan!<br /><br />
                                Wij hebben jouw gegevens verwerkt met een unieke bestellingsnummer (............). Jouw op maat gemaakte deal is verzonden naar <b>(email)</b>. Het kan soms voorkomen, dat jouw deal toch nog in de spam terecht is gekomen.<br /><br />
                                Mocht jij nog vragen hebben? Neem gerust <a href="#">contact</a> met ons op of bekijk de <a href="#">veel gestelde vragen.</a> Wij wensen jou namens onze team heel veel plezier.<br /><br />
                                Tip: Wist je dat Energise Company <a href="#">vergelijk meer</a> korting geeft? Maak snel een <a href="#">account</a> aan en ontvang stapelgekken korting!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
     </>
  )
}

export default DirectorsLiability4