import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OrderCardSkeleton from '../LoadingSkeletons/OrderCardSkeleton'

const OrderMiddleBar = ({ energyOrderData, loading }) => {
    return (
        <>
            <div className="col-lg-7">
                <div className="product-details order-overview">
                    <div className="product-box-tb">
                        <div className="pr-bx-tb-title">
                            {/* <Image width={200} height={200} alt="aa" src="/images/box.png"  /> */}
                            <h4>Producten</h4>
                        </div>
                        {!loading ?
                            <>
                                {energyOrderData && energyOrderData.length > 0 &&
                                    <>
                                        {energyOrderData.map((item, i) => (
                                            <div className="pr-bx-tbl-data" key={i}>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Bestelling 1</th>
                                                            <td dangerouslySetInnerHTML={{ __html: item?.service?.description }}>
                                                            </td>
                                                            <th>Totaal prijs</th>
                                                            <td>€ {item?.total_price}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Bezorg adres</th>
                                                            <td>{item?.shipping_address?.house_no},
                                                                {item?.shipping_address?.house_no} </td>
                                                            <th>Verwachte levering</th>
                                                            <td>{item?.service?.avg_delivery_time} days</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Factuurnummer</th>
                                                            <td>{item?.order_no}</td>
                                                            <th>Status</th>
                                                            <td>{item?.request_status}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Contractsduur</th>
                                                            <td>{item?.service.contract_length}</td>
                                                        </tr>
                                                        <tr>
                                                            <td />
                                                            <td />
                                                            <td><Link href={`/dashboard/order-overview/invoice/${item.id}`}>Download factuur</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        ))}
                                    </>
                                }
                            </>
                            :
                            <>
                                <OrderCardSkeleton />
                            </>
                        }

                    </div>
                    <div className="product-box-tb">
                        <div className="pr-bx-tb-title">
                            {/* <Image width={200} height={200} alt="aa" src="/images/vehicle.png" /> */}
                            <h4>Diensten</h4>
                        </div>
                        <div className="pr-bx-tbl-data">
                            <table>
                                <tbody><tr>
                                    <th>Service 1</th>
                                    <td>Beschrijving</td>
                                    <td>Prijs</td>
                                    <td>€...</td>
                                </tr>
                                    <tr>
                                        <th>Leveringsadres</th>
                                        <td>Volledige adres</td>
                                        <td>(Verwachte) levering </td>
                                        <td>DD-MM-JJJJ</td>
                                    </tr>
                                    <tr>
                                        <th>Afnemer</th>
                                        <td>Naam bedrijf</td>
                                        <td>Contractsduur</td>
                                        <td>DD-MM-JJJJ</td>
                                    </tr>
                                    <tr>
                                        <th>Factuurnummer</th>
                                        <td>123456789</td>
                                        <td>Status</td>
                                        <td>Verwerkt</td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td><a href="#">Download factuur</a></td>
                                        <td />
                                        <td />
                                    </tr>
                                </tbody></table>
                        </div>
                        <div className="pr-bx-tbl-data">
                            <table>
                                <tbody><tr>
                                    <th>Service 2</th>
                                    <td>Beschrijving</td>
                                    <td>Prijs</td>
                                    <td>€...</td>
                                </tr>
                                    <tr>
                                        <th>Leveringsadres</th>
                                        <td>Volledige adres</td>
                                        <td>(Verwachte) levering </td>
                                        <td>DD-MM-JJJJ</td>
                                    </tr>
                                    <tr>
                                        <th>Afnemer</th>
                                        <td>Naam bedrijf</td>
                                        <td>Contractsduur</td>
                                        <td>DD-MM-JJJJ</td>
                                    </tr>
                                    <tr>
                                        <th>Factuurnummer</th>
                                        <td>123456789</td>
                                        <td>Status</td>
                                        <td>Verwerkt</td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td><a href="#">Download factuur</a></td>
                                        <td />
                                        <td />
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>
                    <div className="product-box-tb sp-btnm">
                        <div className="speci-box">
                            {/* <Image width={200} height={200} alt="aa" src="/images/giftbox.png"  /> */}
                            <h4>Speciaal voor jouw</h4>
                        </div>
                        <div className="spe-action">
                            <div className="spe-cont">
                                <Image width={200} height={200} alt="aa" src="/images/stopwatch.png" />
                                <h5>Actie:</h5>
                                <p>Geldig tot dd-mm-jj</p>
                            </div>
                            <div className="spe-cont">
                                <Image width={200} height={200} alt="aa" src="/images/sale.png" />
                                <p>Energise korting:</p>
                                <h4>€...</h4><i className="fas fa-info" />
                            </div>
                            <div className="spe-cont">
                                <Image width={200} height={200} alt="aa" src="/images/hot-sale.png" />
                                <p>Totaal korting:</p>
                                <h4>€...</h4>
                            </div>
                        </div>
                        <div className="spe-action-data">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-3">
                                    <div className="spe-img">
                                        <Image width={200} height={200} alt="aa" src="/images/sunbg.png" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-3">
                                    <div className="spe-cn">
                                        <h5>Pakket</h5>
                                        <p>*</p>
                                        <p>*</p>
                                        <p>*</p>
                                        <p>*</p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-3">
                                    <div className="spe-cn">
                                        <i className="fas fa-info" />
                                        <h5>Kosten:</h5>
                                        <h4>€....</h4>
                                        <span>/p.m</span>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-3">
                                    <div className="spe-cn">
                                        <i className="fas fa-info" />
                                        <h5>Bespaar:</h5>
                                        <h4>€....</h4>
                                        <span>/p.j</span>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-12">
                                    <div className="spe-cn-star">
                                        <i className="fas fa-info" />
                                        <h3>Klantenscore: 4/5</h3>
                                        <ul className="mb-3">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="far fa-star" /></li>
                                        </ul>
                                        <a href="#" className="price-btn">Aanvragen</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn-act">Meer informatie <i className="fal fa-plus" /></a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default OrderMiddleBar