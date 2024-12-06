import Image from 'next/image'
import React from 'react'

const IncopacitatedCommercialStep0Right = ({setShow, show}) => {
  return (
    <>
      <div className='container my-4'>
      <div className='row'>
                    <div className='col-12'>
                    <ul className='step-formholder'>
                            <li><a className="text-warning">2</a></li>
                            <li><a>2</a></li>
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
      <div className='row'>
        <div className='col-lg-8'>
         
          <div className='card mb-2'>
            <div className='card-header'>
            <h5 className="mb-0">Kennis &amp; ervaring</h5>
            </div>
            <div className='card-body'>
            <h6>Ervaringsvragen:</h6>
              <p>Heb jij ervaring met het online afsluiten van een AOV?*</p>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                    Nog nooit.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                    Ik heb al eerder een AOV zelfstandig online afgesloten.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption3" defaultValue="Ik heb al eens eerder een AOV met een adviseur online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption3">
                    Ik heb al eens eerder een AOV met een adviseur online afgesloten.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption4" defaultValue="Ik heb al eens eerder een AOV afgesloten, alleen nog nooit online." />
                  <label className="form-check-label" htmlFor="aovOption4">
                    Ik heb al eens eerder een AOV afgesloten, alleen nog nooit online.
                  </label>
                </div>
            </div>
          </div>
          <div className='card mb-2'>
            <div className='card-body'>
              <p>Heb jij hulp gehad bij het kiezen van jouw huidige product keuze?*</p>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                     Nee, ik heb geen ondersteuning nodig.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                    Ja, van een financieel adviseur.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption3" defaultValue="Ik heb al eens eerder een AOV met een adviseur online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption3">
                   Ja, iemand die al eens eerder een AOV heeft afgesloten.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption4" defaultValue="Ik heb al eens eerder een AOV afgesloten, alleen nog nooit online." />
                  <label className="form-check-label" htmlFor="aovOption4">
                    Ja, van een bekenden.
                  </label>
                </div>
            </div>
          </div>
          <div className='card mb-2'>
            <div className='card-body'>
              <p>Hoe heb jij de looptijd van de uitkering uitgekozen?*</p>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                   Ik heb na mijn huidige financiële positie gekeken dat bij mij past.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                      Mijn gevoel gaf aan welke looptijd het beste aansluit bij mij.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption3" defaultValue="Ik heb al eens eerder een AOV met een adviseur online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption3">
                      Geen idee
                  </label>
                </div>
            </div>
          </div>
          <div className='card mb-2'>
              <div className='card-body'>
              <p>Weet jij wat de financiële gevolgen zijn als jij arbeidsongeschik raakt?*</p>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ja, ik weet exact wat mijn uitgaves zijn die ik nodig heb.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                  Ja, ik weet deels wat het nodig heb
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption3" defaultValue="Ik heb al eens eerder een AOV met een adviseur online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption3">
                  Geen idee.
                  </label>
                </div>
              </div>
          </div>
          <div className='card mb-2'>
              <div className='card-body'>
              <p>Hoe heb jij het verzekerde bedrag gekozen?*</p>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ik heb na mijn huidige financiële positie gekeken dat bij mij past.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                  Ik heb het maximale bedrag gekozen.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption3" defaultValue="Ik heb al eens eerder een AOV met een adviseur online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption3">
                  Mijn gevoel gaf aan welke verzekerde bedrag bij mij past.
                  </label>
                </div>
              </div>
          </div>
          <div className='card mb-2'>
              <div className='card-body'>
              <p>Heb jij de productinformatie gelezen op onze website?*</p>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ja, ik vond dit duidelijk en ik begrijp het.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                  Ja, alleen ik vond het niet duidelijk.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption3" defaultValue="Ik heb al eens eerder een AOV met een adviseur online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption3">
                  Nee, ik het niet gelezen.
                  </label>
                </div>
              </div>
          </div>
          <div className='card mb-2'>
              <div className='card-body'>
              <p>Heb jij behoefte aan advies, dan kunnen wij contact opnemen met jou?*</p>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Nee, voor mij is alles duidelijk ik dan dit zelfstandig.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption2" defaultValue="Ik heb al eerder een AOV zelfstandig online afgesloten." />
                  <label className="form-check-label" htmlFor="aovOption2">
                  Ja, ik wil graag dat een adviseur mij belt hierover.
                  </label>
                </div>
                <div className="form-check d-flex mt-4">
                  <input type='text' placeholder='Telefoonnummer...'/>
                </div>
              </div>

          </div>
          <h6>Kennisvragen:</h6>
          <div className='card mb-2'>
              <div className='card-body'>
                  <p>Naar wat wordt gekeken bij een arbeidsongeschikheidverzekering?*</p>
                  <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                     Mijn opleiding en ervaring.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                     Alle werkzaamheden die ik nog wel kan doen.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                       Mijn beroepswerkzaamheden.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                       Geen idee.
                  </label>
                </div>
              </div>
          </div>
          <div className='card mb-2'>
              <div className='card-body'>
                  <p>Welke stelling klopt?</p>
                  <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                      De premie van de AOV is niet aftrekbaar in box 1. De uikering is belast.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                     De premie van de AOV is aftrekbaar in box 1. De uitkering is niet belast.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                      De premie van de AOV is aftrekbaar in box 1. De uitkering is belast
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                      De premie van de AOV is niet aftrekbaar in box 1. De uitkering is niet belast.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                     Geen idee.
                  </label>
                </div>
              </div>
          </div>
          <div className='card mb-2'>
              <div className='card-body'>
                <p>Wat moet jij doen als jij een bericht van de verzekering krijgt 
                  dat jij gebruik kunt maken van het verhogingsrecht?</p>
                  <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ik mag het verzekerd bedrag met een vastgesteld percentage zonder
gezondsheidsverklaring.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ik mag het verzekerd bedrag eenmalig onbeperkt verhogen zonder aanvullende keuring
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ik mag de eindleeftijd verhogen tot de maximale eindleefdtijd.
                  </label>
                </div>
                <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                   Geen idee
                  </label>
                </div>
              </div>
          </div>
          <div className='card mb-2'>
            <div className='card-body'>
            <p>Wat betekent het als jij kiest voor een verzekering met combitarief?*</p>
            <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                    Jij betaalt een stijgend tarief op basis van leeftijd en later wordt het een
                    gelijkblijvend tarief.
                  </label>
              </div>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Jij betaalt over de gehele looptijd van de verzekering dezelfde premie.
                  </label>
              </div>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Jij betaalt de eerste 5 jaar een lager tarief en daarna een hoger gelijkblijvend tarief
                  </label>
              </div>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                      Geen idee.
                  </label>
              </div>
            </div>
            </div>
            <div className='card mb-2'>
            <div className='card-body'>
            <p>Mag de verzekeraar het verzekerd bedrag bijstellen wanneer jij arbeidsongeschik raakt?*</p>
            <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ja, alleen dat hangt af de reden van mijn arbeidsongeschiktheid
                  </label>
              </div>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ja, wanneer blijkt dat er in de voorafgaande periode minder is verdiend
stellen zij het bedrag bij
                  </label>
              </div>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Nee, het verzekerd bedrag wordt niet bijgesteld.
                  </label>
              </div>
              <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ik weet het niet
                  </label>
              </div>
            </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                  <p>Wat betekend het als de verzekeraar jou een maximale eindleeftijd van 60 jaar bied?</p>
                  <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  De looptijd van de verzekering is beperkt tot 60 jaar. Een eventuele uitkering stopt als jij 60 jaar wordt
                  </label>
                   </div>
                   <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  De verzekering kan afgesloten worden tot 60 jarige leeftijd en biedt dekking tot 67 jaar
                  </label>
                   </div>
                   <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Jij betaalt premie tot 60-jarige leeftijd en de verzekering geeft dekking tot 67 jaar
                  </label>
                   </div>
                   <div className="form-check d-flex ">
                  <input className="form-check-input me-1" type="radio" name="aovOptions" id="aovOption1" defaultValue="Nog nooit." />
                  <label className="form-check-label" htmlFor="aovOption1">
                  Ik weet het niet.
                  </label>
                   </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <a href='javascript:void(0);' className='btn btn-link mt-4 text-dark fw-bold'>Vorige</a>
                  </div>
                  <div className='col-lg-6 text-lg-end'>
                      <button className='price-btn btn'>Volgende</button>
                  </div>
                </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4 mb-2'>
           <div className='card'>
                <div className='card-header'>
                    <h5 className='mb-0'>Jouw AOV profiel</h5>
                </div>
              <div className='card-body'>
                <ul className='list-unstyled'>
                  <li>Geboortedatum: <span>DD-MM-JJJJ</span></li>
                  <li>Beroep:<span>...</span></li>
                  <li>Zonder uitkering: <span>maanden</span></li>
                  <li>Uitkeringsduur:  <span>maanden</span></li>
                  <li>Eindleeftijd: <span> ... Jaar</span></li>
                </ul>
              <p className='text-warning'>Verzekerd bedrag: € ....</p>
              <table className='table table-borderless'>
                <tbody>
                  <tr>
                    <td>Netto premie:*</td>
                    <td className='fw-bold'>€..... per maand</td>
                  </tr>
                  <tr>
                    <td>bruto premie:</td>
                    <td className='fw-bold'>
                    €..... per maand
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>* Verwachte premie op basis van jouw inkomen</p>
              </div>
            </div>  
        </div>
      </div>
      </div>
    </>
  )
}

export default IncopacitatedCommercialStep0Right