import { useState } from "react"
import AccidentStep1Main from '../../../../components/accident_insurance/accidentstep1/accidentstep1main'
import AccidentComparison from '../../../../components/accident_insurance/accidentstep2/accidentcomparison'


function Index() {
  const [count, setCount] = useState(0)
  return (
    <>
      {count == 0 &&
        <>
          <AccidentStep1Main  setCount={setCount}/>
        </>
      }
      {count == 1 &&
        <>
          <AccidentComparison />
        </>
      }
    </>
  )
}

export default Index