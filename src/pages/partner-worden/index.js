import React from 'react'
import PartnerForm from '../../../components/PartnerWorden/PartnerForm'
import Image from 'next/image'

const Index = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="page-title">
                            <h2><span>Partner</span> worden</h2>
                            <h5>Samenwerken maakt alles ook samen sterker!</h5>
                        </div>
                    </div></section>
                <section>
                    <div className="listwrp">
                        <div className="container">
                            <div className="list-bx">
                                <div className="row">
                                    <div className="col-lg-6 leftinfo">
                                        <h3>Waarom <span>partner</span> worden?</h3>
                                        <ul className="list-unstyled">
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Aantrekkelijk vergoedingen</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Marketing en promotie materiaal</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Eigen werkplek</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Werkt samen met alle grote merken</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Meer dan 300. 000 bezoekers</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 rightinfo">
                                        <h3>Wat bieden <span>wij</span> aan jouw?</h3>
                                        <ul className="list-unstyled">
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Marketing campagnes</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Partner ondersteuning</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Resultaat</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Ontwikkeling</li>
                                            <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Gratis toegang tot onze netwerk</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partnerwrp">
                        <div className="container">
                            <div className="partnerbox2">
                                <h3>Wie ben <span>jij?</span></h3>
                                <ul>
                                    <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Jij hebt een eigen bedrijf of bent van plan een bedrijf te startten.</li>
                                    <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Jij wilt meer uit jouw onderneming halen d.m.v online marketing.</li>
                                    <li><Image alt='asd' width={36} height={36} src="/images/faqicon.png" />
                                        Jij wilt geen onverwachte hoge kosten voor promotie materiaal, maar een
                                        vaste vergoeding afspreken.
                                    </li>
                                    <li>
                                        <Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Jij hebt een dienst en/of product die je wilt aanbieden.
                                    </li>
                                    <li>
                                        <Image alt='asd' width={36} height={36} src="/images/faqicon.png" /> Jij hebt een eigen website of een bedrijfsplan samengesteld.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <PartnerForm />
                    </div>
                </section>
            </main>

        </>
    )
}

export default Index