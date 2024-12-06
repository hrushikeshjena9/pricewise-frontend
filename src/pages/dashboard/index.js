import React, { useEffect, useState } from 'react'
import ProfilePhoto from '../../../components/DashboardPages/ProfilePhoto'
import PersonalInfo from '../../../components/DashboardPages/PersonalInfo'
import Rightbar from '../../../components/DashboardPages/Rightbar'
import { useSession } from 'next-auth/react'
import { PostData } from '../../../utils/ApiCalls'

const Index = () => {
    const session = useSession()
    const [userDetails, setUserDetails] = useState()
    const [authToken, setAuthToken] = useState()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        const token = (localStorage.getItem('token'))
        setUserDetails(data ? data : '')
        setAuthToken(token ? token : '')
    }, [])
    console.log(authToken);
    useEffect(() => {
        console.log(123123);
        const getUserData = async () => {
            try {
                const res = await PostData('get-user-data', { user_id: 2 }, '', `Bearer ${authToken}`)
            } catch (error) {
                console.log(error);
            }
        }
        if (authToken) {
            getUserData()
        }
    }, [authToken])
    return (
        <>
            <section>
                <div className="mydatawrp">
                    <div className="container">
                        <div className="mydatatitle-bx">
                            <h3>Mijn <span>Energise</span> Gegevens</h3>
                            <h5>Kloppen jouw gegevens nog? Controleer of pas ze aan!</h5>
                        </div>
                        <div className="row">
                            <ProfilePhoto userDetails={userDetails} />
                            <PersonalInfo userDetails={userDetails} />
                            <Rightbar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index;

// export async function getServerSideProps(context) {
//     const session = await getServerSession(context.req, context.res)

//     if (!session) {
//       return { redirect: { destination: "/login" } }
//     }

//     return{
//         props: {}
//     }
//   }