import Image from 'next/image'
import React from 'react'

const ExclusiveBanner = () => {
    return (
        <>
            <section>
                <div className="mydatawrp">
                    <div className="container">
                        <div className="row">
                            <div className="in-banner">
                                <div className="secure-img">
                                    <Image width={200} height={200} alt="aa" src="/images/secure.jpg" className="secureicon"  />
                                </div>
                                <div className="mydatatitle-bx">
                                    <h3>Mijn <span>Energise Exclusives</span> </h3>
                                    <h5>Exclusieve deals voor <span className="cl-orange">Exclusieve leden!</span></h5>
                                    <p><span className="cl-red">Let op!</span> Beperkt voorraad, <span className="cl-red">OP=OP</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ExclusiveBanner