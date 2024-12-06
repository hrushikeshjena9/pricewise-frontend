import React, { useEffect, useState } from 'react'
import OrderMiddleBar from '../../../../components/OrderOverview/OrderMiddleBar'
import OrderRightbar from '../../../../components/OrderOverview/OrderRightbar'
import ExclusiveLeftBar from '../../../../components/EnergiseExclusive/ExclusiveLeftBar'
import ProfilePhoto from '../../../../components/DashboardPages/ProfilePhoto'
import Image from 'next/image'
import { PostData, axiosGet } from '../../../../utils/ApiCalls'

const Index = () => {
    const [userId, setUserId] = useState()
    const [authToken, setAuthToken] = useState()
    const [energyOrderData, setEnergyOrderData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        const token = (localStorage.getItem('token'))
        setUserId(data ? data.id : '')
        setAuthToken(token ? token : '')
    }, [])
    useEffect(() => {
        const getOrderDetails = async () => {
            setLoading(true)
            try {
                const res = await PostData('get-user-request', { user_id: userId }, '', `Bearer ${authToken}`)
                console.log(res.data[0].advantages.gas_consume);
                setEnergyOrderData(res.data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
        if (authToken) getOrderDetails()
    }, [authToken, userId])
    return (
        <>
            <section>
                <div className="mydatawrp">
                    <div className="container">
                        <div className="row">
                            <div className="in-banner">
                                <div className="secure-img">
                                    <Image width={145} height={71} src="/images/secure.jpg" className="secureicon" alt="asd" />
                                </div>
                                <div className="mydatatitle-bx">
                                    <h3>Mijn <span>Bestellingsoverzicht</span> </h3>
                                    <h5>Al jouw producten en diensten netjes op een rijtje!</h5>
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
                        <OrderMiddleBar energyOrderData={energyOrderData} loading={loading} />
                        <OrderRightbar />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Index