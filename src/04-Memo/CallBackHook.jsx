import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback( 
        () => { setCounter( value => value + 1 ) }, [],
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
