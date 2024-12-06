import { useEffect, useState } from "react"
import CommercialSmartphonegeneral from "../../../../components/Commercial/CommercialSmartphone/CommercialSmartphoneStep1/CommercialSmartphonegeneral"
import CommercialProgressbarstep from "../../../../components/Commercial/CommercialSmartphone/CommercialSmartphoneStep2/CommercialProgressbarstep"
import CommercialSmartphonecompareindex from "../../../../components/Commercial/CommercialSmartphone/CommercialSmartphoneStep2/CommercialSmartphonecompareindex"
import CommercialSmartphonestep3index from "../../../../components/Commercial/CommercialSmartphone/CommercialSmartphoneStep3/CommercialSmartphonestep3index"
import CommercialSmartphoneStep4Left from "../../../../components/Commercial/CommercialSmartphone/CommercialSmartphoneStep4/CommercialSmartphoneStep4Left"
import CommercialSmartphoneStep4Right from "../../../../components/Commercial/CommercialSmartphone/CommercialSmartphoneStep4/CommercialSmartphoneStep4Right"

const Index = () => {
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState('0')
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  useEffect(() => {
    if (count == 0) {
      setWidth('35%')
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
        <CommercialSmartphonegeneral setCount={setCount}/>
      }
      {count == 1 &&
        <>
          <CommercialProgressbarstep setCount={setCount} width={width} count={count} />
          <CommercialSmartphonecompareindex />

        </>
      }
      {count == 2 &&
        <>
          <CommercialProgressbarstep setCount={setCount} width={width} count={count} />
          <CommercialSmartphonestep3index />

        </>
      }

      {count == 3 &&
        <>
          <CommercialProgressbarstep setCount={setCount} width={width} count={count} />
          <div className="container mb-4">
          <div className="row">
            <CommercialSmartphoneStep4Left />
            <CommercialSmartphoneStep4Right />
          </div>
        </div>
        </>
      }


    </>
  )
}

export default Index