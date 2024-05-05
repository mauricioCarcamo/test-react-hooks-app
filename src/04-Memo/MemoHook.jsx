import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = ( iterations ) => { 
    for (let i = 0; i < iterations; i++) {
        console.log("Let's go!");        
    }

    return `${ iterations } iteraciones realizadas`
 }

export const MemoHook = () => {
  const { counter, decrement, increment, reset } = useCounter(10)
  const [show, setShow] = useState(true)
  const memorizedValue = useMemo( () => heavyStuff( counter ) , [ counter ] )
  
    return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button 
            className="btn btn-primary mb-2" 
            onClick={ () => { increment() } }
        >
            +1
        </button>
        
        <button 
            className="btn btn-primary mb-2" 
            onClick={ () => { setShow( !show ) } }
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
  )
}
