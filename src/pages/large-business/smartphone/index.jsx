import { useEffect, useState } from "react"
import SmartPhoneGeneral from '../../../../components/LargeBusiness/smartphone/smartphonestep1/smartphonegeneral'
import SmartPhoneCompareIndex from "../../../../components/LargeBusiness/smartphone/smartphonestep2/smartphonecompareindex"
import ProgressBarStep from "../../../../components/LargeBusiness/smartphone/smartphonestep2/progressbarstep"
import ComparisonCofirmMail from "../../../../components/Glass/GlassStep4/comparison-cofirm-mail"
import SmartPhoneStep3Index from "../../../../components/LargeBusiness/smartphone/smartphonestep3/smartphonestep3index"


const Index = () => {
  const [count, setCount] = useState(0)
    const [width, setWidth] = useState('0')
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    useEffect(() => {
        if (count == 0) {
            setWidth('25%')
        } else if (count == 1) {
            setWidth('50%')
        } else if (count == 2) {
            setWidth('75%')
        } else if (count == 3) {
            setWidth('100%')
        } else {
            setWidth(null)
        }
    }, [count])
  return (
   <>
    {count == 0 &&
      <SmartPhoneGeneral setCount={setCount}/>
    }
    {count == 1 &&
      <>
       <ProgressBarStep setCount={setCount} width={width} count={count}/>
        <SmartPhoneCompareIndex showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo}/>
       
      </>
    }
    {count == 2 &&
      <>
       <ProgressBarStep setCount={setCount} width={width} count={count}/>
       <SmartPhoneStep3Index />
       
      </>
    }

    {count == 3 &&
      <>
       <ProgressBarStep setCount={setCount} width={width} count={count}/>
       <ComparisonCofirmMail />
       
      </>
    }
  
    
   </>
  )
}

export default Index