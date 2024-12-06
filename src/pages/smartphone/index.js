import { useEffect, useState } from "react"
import SmartphonePersonalgeneral from "../../../components/SmartPhone/smartphonestep1/smartphonePersonalgeneral"
import PersonalProgressBarstep from "../../../components/SmartPhone/smartphonestep2/PersonalProgressBarstep"
import SmartphonePersonalCompareindex from "../../../components/SmartPhone/smartphonestep2/smartphonePersonalCompareindex"
import SmartPhonePersonalstep3index from "../../../components/SmartPhone/smartphonestep3/smartPhonePersonalstep3index"
import ComparisonCofirmMail from "../../../components/Glass/GlassStep4/comparison-cofirm-mail"




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
      <SmartphonePersonalgeneral setCount={setCount}/>
    }
    {count == 1 &&
      <>
       <PersonalProgressBarstep setCount={setCount} width={width} count={count}/>
        <SmartphonePersonalCompareindex showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo}/>
       
      </>
    }
    {count == 2 &&
      <>
       <PersonalProgressBarstep setCount={setCount} width={width} count={count}/>
       <SmartPhonePersonalstep3index />
       
      </>
    }

    {count == 3 &&
      <>
       <PersonalProgressBarstep setCount={setCount} width={width} count={count}/>
       <ComparisonCofirmMail />
       
      </>
    }
  
    
   </>
  )
}

export default Index