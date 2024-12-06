import { useState } from "react"
import FuneralIndex from "../../../../components/funeral/funeralstep1/funeralindex"
import FuneralCompareIndex from "../../../../components/funeral/funeralstep2/funeralcompareindex"

function Index() {
  const [count, setCount] = useState(0)
  return (
        <>
          {count == 0 &&
            <FuneralIndex setCount={setCount}/>
            
          }
          {count == 1 &&
            <FuneralCompareIndex />
          }
        </>
  )
}

export default Index