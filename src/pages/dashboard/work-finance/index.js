import React from 'react'
import ProfilePhoto from '../../../../components/DashboardPages/ProfilePhoto';
import FinancesTop from '../../../../components/DashboardPages/WorkFinace/FinancesTop';
import Schedule from '../../../../components/DashboardPages/WorkFinace/Schedule';
import TimeRegistrationFunctioning from '../../../../components/DashboardPages/WorkFinace/TimeRegistrationFunctioning';
import TakingleavePayslip from '../../../../components/DashboardPages/WorkFinace/TakingleavePayslip';

export const Index = () => {
  return (
    <div>
        <div className='container mb-4'>
            <FinancesTop/>
            <div className='row'>
                 <ProfilePhoto/>
                 <div className='col-lg-10'>
                    <Schedule/>
                    <TimeRegistrationFunctioning/>
                    <TakingleavePayslip/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Index;
