import React from 'react'
import CommercialBanner from '../../../components/Commercial/CommercialHome/CommercialBanner'
import CommercialDealbox from '../../../components/Commercial/CommercialHome/CommercialDealbox'
import CommercialServices from '../../../components/Commercial/CommercialHome/CommercialServices'
import CommercialStats from '../../../components/Commercial/CommercialHome/CommercialStats'
import CommercialLdeals from '../../../components/Commercial/CommercialHome/CommercialLdeals'
import CommercialRegulate from '../../../components/Commercial/CommercialHome/CommercialRegulate'
import CommercialContact from '../../../components/Commercial/CommercialHome/CommercialContact'
import CommercialReview from '../../../components/Commercial/CommercialHome/CommercialReview'
const Index = () => {
  return (
     <div>
      <CommercialBanner/>
      <CommercialServices/>
      <CommercialStats/>
      <CommercialLdeals/>
      <CommercialRegulate/>
      <CommercialContact/>
      <CommercialReview/>
     </div>
  )
}

export default Index