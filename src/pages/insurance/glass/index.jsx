import { useState } from "react"
import GlassIndex from '../../../../components/Glass/GlassStep1/glassindex'
import ComparisonIndex from '../../../../components/Glass/GlassStep2/comparisonindex'

function Index() {
  const [count, setCount] = useState(0)
  // hello
  return (
    <>

    {count == 0 &&
        <>
          <GlassIndex setCount={setCount}/>
        </>
    }
    {count == 1 &&
        <>
          <ComparisonIndex />
        </>
    }
</>

  )
}

export default Index