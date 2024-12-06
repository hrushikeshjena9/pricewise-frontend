import { useState } from "react"
import LegalIndex from '../../../../components/legal_counsel/legalStep1/legalindex'
import LegalComparisonIndex from "../../../../components/legal_counsel/legalStep2/legalcomparisonindex"
function Index() {
  const [count, setCount] = useState(0)
  return (
    <>

    {count == 0 &&
        <>
          <LegalIndex setCount={setCount}/>
        </>
    }
    {count == 1 &&
        <>
          <LegalComparisonIndex />
        </>
        
    }
    </>
  )
}

export default Index
