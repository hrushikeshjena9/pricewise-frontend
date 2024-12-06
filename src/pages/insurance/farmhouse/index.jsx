import { useState } from "react"
import FarmHouseMain from "../../../../components/farmhouse/farmhousestep1/FarmHousemain"
import FarmHouseStep1 from "../../../../components/farmhouse/farmhousestep1/FarmHouseStep1"

function Index() {
    const [count, setCount] = useState(0)
    return (
        <>

            {count == 0 &&
                <>
                    <FarmHouseMain setCount={setCount} />
                   {/* <LiabilityStep1 setCount={setCount} /> */}
                </>
            }
            {count == 1 &&
                <>
                  <FarmHouseStep1 setCount={setCount} />
                </>
            }
           
        </>
    )
}

export default Index