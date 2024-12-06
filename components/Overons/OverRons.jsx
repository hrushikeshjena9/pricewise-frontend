import Image from 'next/image'
import React from 'react'

const OverRons = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="page-title">
                            <h2><span>Over</span> ons</h2>
                            <h5>Elkaar leren kennen is het nooit te laat voor…</h5>
                        </div>
                        <div className="overons-page">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h3>Onze <span>visie</span></h3>
                                    <p>
                                        Energise company is opgericht mede
                                        dankzij de brede concurrentie strijd.
                                        Elke bedrijf heeft zijn voordelen en
                                        nadelen alleen voor de consument blijft
                                        dat altijd de vraag welke voordeel het
                                        meeste opweegt ten opzichte van de
                                        nadelen.<br /><br />
                                        Daarom hebben wij door middel van
                                        onze unieke vergelijkingsmodules de
                                        oplossing gecreëerd. Om voor ledereen
                                        jong of oud, particulier of ondernemend
                                        inzicht te geven in hun vaste lasten en
                                        zo efficient geld te laten besparen.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <Image width={480} height={230} alt="aa" src="/images/overons.jpg" className="img-fluid" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <Image width={480} height={230} alt="aa" src="/images/onzevisie.jpg" className="img-fluid" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <h3>Onze <span>missie</span></h3>
                                    <p>
                                        Onze taak is dat alle informatie op een
                                        zorgvuldige wijze aan onze gebruikers
                                        worden getoont. Dit is natuurlijk een
                                        hele grote verantwoordlijkheid die wij
                                        met alle plezier op ons nemen.<br /><br />
                                        Wij opereren dan ook volledig
                                        <b>onafhankelijk</b> en <b>transparant</b>. Wij
                                        geven elke samenwerking, dan ook een
                                        eerlijk kans om zichzelf te mogen
                                        onderschijden ten opzichten van de
                                        concurrentie.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h3>Onze <span>verdienmodel</span></h3>
                                    <p>
                                        Uiteraard moet elke bedrijf financieel
                                        gezond blijven.Dit berekenen wij zeker
                                        niet door naar de eindgebruiker, want
                                        onze vergelijkingssite is en blijft geheel
                                        <b>gratis</b> voor gebruik.<br /><br />
                                        Hiervoor hebben wij collectieve
                                        afspraken met onze zakenrelaties. Dit
                                        beinvloed dan ook zeker niet onze
                                        vergelijkingsprijzen. Wij onderhandelen
                                        daarvoor altijd de beste prijzen die
                                        zichtbaar zijn op onze site.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <Image width={480} height={230} alt="aa" src="/images/onzeverdienmodel.jpg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="surprise-sec ptb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-bx title-wh">
                                    <h3>We are surprise,</h3>
                                    <h4>Lets Energise</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="surprise-item">
                                    <Image width={200} height={200} alt="aa" src="/images/money.png" />
                                    <h4>€  <span className="count">33759</span></h4>
                                    <p>Gemiddelde besparing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="surprise-item">
                                    <Image width={200} height={200} alt="aa" src="/images/like.png" />
                                    <h4 className="count">93</h4>
                                    <p>Aanbevelingen</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="surprise-item">
                                    <Image width={200} height={200} alt="aa" src="/images/user2.png" />
                                    <h4 className="stat-number">388.134</h4>
                                    <p>Klanten vergeleken afgelopen week</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="surprise-item">
                                    <Image width={200} height={200} alt="aa" src="/images/deal.png" />
                                    <h4>★ ★ ★ ★ ☆ </h4>
                                    <p>100% independent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default OverRons