import React from 'react'
import ProfilePhoto from '../../../../components/DashboardPages/ProfilePhoto'
import FaqNiddleSection from '../../../../components/DashboardPages/Faq/FaqNiddleSection'
import FaqRightBar from '../../../../components/DashboardPages/Faq/FaqRightBar'
import Image from 'next/image'

const index = () => {
    return (
        <>
            <section>
                <div className="mydatawrp">
                    <div className="container">
                        <div className="row">
                            <div className="in-banner">
                                <div className="secure-img">
                                    <Image width={145} height={71} src="/images/secure.jpg" className="secureicon" alt="asd"/>
                                </div>
                                <div className="mydatatitle-bx">
                                    <h3>Mijn <span>Veelgestelde vragen</span> </h3>
                                    <h5>Kloppen jouw gegevens nog? Bekijk ze en vergelijk nog sneller!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <ProfilePhoto />
                        <FaqNiddleSection />
                        <FaqRightBar />
                    </div>
                </div>
            </section>
        </>
    )
}

export default index