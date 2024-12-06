import React, { useEffect, useState } from 'react'
import ExclusiveBanner from '../../../../components/EnergiseExclusive/ExclusiveBanner'
import ExclusiveLeftBar from '../../../../components/EnergiseExclusive/ExclusiveLeftBar'
import ExclusiveMidBar from '../../../../components/EnergiseExclusive/ExclusiveMidBar'
import ExclusiveForm from '../../../../components/EnergiseExclusive/ExclusiveForm'
import ProfilePhoto from '../../../../components/DashboardPages/ProfilePhoto'
import { PostData } from '../../../../utils/ApiCalls'

const Index = () => {
    const [authToken, setAuthToken] = useState()
    const [userId, setUserId] = useState()
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userData'))
        const token = (localStorage.getItem("token"));
        setAuthToken(token ? token : '')
        setUserId(userDetails ? userDetails.id : null)
    }, [])
    useEffect(() => {
        const getUserRequest = async () => {
            try {
                const res = await PostData('get-user-request', { user_id: userId }, '', `Bearer ${authToken}`)
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        if(userId) getUserRequest()
    })
    return (
        <>
            <main>
                <ExclusiveBanner />
                <section>
                    <div className="container">
                        <div className="row">
                            {/* <ExclusiveLeftBar /> */}
                            <ProfilePhoto />
                            <ExclusiveMidBar />
                        </div>
                    </div>
                </section>
                <ExclusiveForm />
            </main >
        </>
    )
}

export default Index