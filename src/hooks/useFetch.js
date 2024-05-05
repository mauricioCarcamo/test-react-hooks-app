import { useEffect, useState } from "react"

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  })

  const getFetch = async () => { 
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/151')
    const data = await resp.json()

    console.log(data);
   }

   useEffect(() => {
    getFetch()
     
   }, [])
   
  
    return {

  }
}
