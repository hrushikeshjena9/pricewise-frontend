import { useState } from "react"
import DeathRiskStep1Main from '../../../../components/death_risk/deathRiskStep1/deathriskstep1main'
import DeathCompareIndex from "../../../../components/death_risk/deathriskstep2/deathcompareindex"

function Index() {
  const [count, setCount] = useState(0)
  return (
        <>
          {count == 0 &&
            <DeathRiskStep1Main setCount={setCount} />
          }
          {count == 1 &&
            <DeathCompareIndex />
          }
        </>
  )
}

export default Index