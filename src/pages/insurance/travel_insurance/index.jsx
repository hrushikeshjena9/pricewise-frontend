import { useState } from "react"
import TravelIndex from "../../../../components/travel_insurance/travel_insurancestep1/travelindex"
import TravelComparisonIndex from "../../../../components/travel_insurance/travel_insurancestep2/travelcomparisonindex"

function Index() {
    const [count, setCount] = useState(0)
  return (
    <>
        {count == 0 &&
        <>
            <TravelIndex setCount={setCount}/>
        </>
        }
        {count == 1 &&
            <>
            <TravelComparisonIndex />
            </>
            
        }
    </>
  )
}

export default Index