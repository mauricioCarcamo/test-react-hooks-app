import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback( 
        (step) => { setCounter( value => value + step ) }, [],
    )

    useEffect(() => {
      console.log("Efecto increment father");
    }, [incrementFather])

    return (
        <>
            <h1>Counter: { counter }</h1>
            <hr />
            
            <ShowIncrement increment={ incrementFather }/>
        </>
  )
}
