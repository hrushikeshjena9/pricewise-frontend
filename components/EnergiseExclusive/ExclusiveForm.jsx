import React from 'react'

const ExclusiveForm = () => {
    return (
        <>
            <section className="ex-en-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="title-ex">Wat is <span>Energise Exclusives?</span></h3>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ex-enr-box">
                                        <div className="ex-en-title">
                                            <h4>Onderwerp: ...</h4>
                                            <textarea cols={30} rows={7} placeholder="Text" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ex-enr-box">
                                        <div className="ex-en-title">
                                            <h4>Onderwerp: ...</h4>
                                            <textarea cols={30} rows={7} placeholder="Text" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ex-enr-box">
                                        <div className="ex-en-title">
                                            <h4>Onderwerp: ...</h4>
                                            <textarea cols={30} rows={7} placeholder="Text" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ex-enr-box">
                                        <div className="ex-en-title">
                                            <h4>Onderwerp: ...</h4>
                                            <textarea cols={30} rows={7} placeholder="Text" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ex-enr-box topic-bx">
                                <div className="en-ex-title">
                                    <h4>Kies een <span>onderwerp ?</span></h4>
                                    <select>
                                        <option value>Onderwerp 1</option>
                                    </select>
                                </div>
                                <div className="en-ex-title">
                                    <h4>Kies een <span>onderwerp ?</span></h4>
                                    <div className="topic-txt-area">
                                        <p>Nieuws</p>
                                        <textarea cols={30} rows={4} placeholder="Text" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="compare-bx">
                                <span>3</span>
                                <h4>Jouw vergelijk <span>meer voordeel!</span></h4>
                                <div className="com-pro">
                                    <div className="comp-pro-bx">
                                        <span>€5</span>
                                        <h5>Vergelijk meer, <span>bespaar weer</span></h5>
                                    </div>
                                    <div className="comp-num">
                                        <h4>1</h4>
                                        <h4>5</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="how-work-modal">
                                <h6 data-bs-toggle="modal" data-bs-target="#exampleModal">Hoe werkt het?</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ExclusiveForm