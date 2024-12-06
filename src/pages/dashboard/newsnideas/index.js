import React from 'react'
import ProfilePhoto from '../../../../components/DashboardPages/ProfilePhoto'
import UpdateBox from '../../../../components/DashboardPages/NewsnIdeas/UpdateBox'
import ChampionsLeague from '../../../../components/DashboardPages/NewsnIdeas/ChampionsLeague'
import SalesLeague from '../../../../components/DashboardPages/NewsnIdeas/SalesLeague'
import Ideasbox from '../../../../components/DashboardPages/NewsnIdeas/Ideasbox'

const Index = () => {
  return (
    <>
      <div className='container mb-4'>
        <div className='row'>
          <ProfilePhoto />
          <div className='col-lg-10'>
            <div className="news-idea-sec">
              <div className="news-box">
                <div className="news-title-bx">
                  <h2>Nieuws</h2>
                </div>
                <div className="news-up-bx">
                  <div className="row">
                    <UpdateBox />
                    <ChampionsLeague />
                  </div>
                </div>
              </div>
              <SalesLeague/>
              <Ideasbox/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index