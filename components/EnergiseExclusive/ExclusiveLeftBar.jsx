import Image from 'next/image'
import React, { useState } from 'react'

const ExclusiveLeftBar = () => {

    return (
        <>
            <div className="col-lg-2  leftmenuprofile">
                <div className="profimg">
                    <div className="profilebox1">
                        <Image width={200} height={200} alt="aa" src="/images/profile1.png"  />
                    </div>
                    <a className="modify1"><i className="fas fa-cog" /> Wijzig</a>
                </div>
                <ul className="menuprofile">
                    <li><a><i className="fas fa-caret-right" /> Energise Exclusives</a>
                    </li>
                    <li className="active"><a><i className="fas fa-caret-right" />
                        Bestellinasoverzicht</a></li>
                    <li><a><i className="fas fa-caret-right" /> Mijn gegevens</a></li>
                    <li><a><i className="fas fa-caret-right" /> Veel gestelde
                        vragen</a></li>
                </ul>
                <div className="pro-menu-drop">
                    <nav>
                        <ul>
                            <li className="sub-menu"><a>Alle bestellingen<div className="fa fa-caret-down right" /></a>
                                    <ul>
                                        <li><a href="#">Title Here1</a></li>
                                        <li><a href="#">Title Here1</a></li>
                                        <li><a href="#">Title Here1</a></li>
                                    </ul>
                            </li>
                            <li className="sub-menu"><a>Categorie<div className="fa fa-caret-down right" /></a>
                                    <ul>
                                        <li><a href="#">Title Here2</a></li>
                                        <li><a href="#">Title Here2</a></li>
                                        <li><a href="#">Title Here2</a></li>
                                    </ul>
                            </li>
                            <li className="sub-menu"><a>Extra filters<div className="fa fa-caret-down right" /></a>
                                    <ul>
                                        <li><a href="#">Title Here3</a></li>
                                        <li><a href="#">Title Here3</a></li>
                                        <li><a href="#">Title Here3</a></li>
                                    </ul>
                            </li>
                            <li className="sub-menu"><a>Diensten<div className="fa fa-caret-down right" /></a>
                                    <ul>
                                        <li><a href="#">Title Here4</a></li>
                                        <li><a href="#">Title Here4</a></li>
                                        <li><a href="#">Title Here4</a></li>
                                    </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default ExclusiveLeftBar