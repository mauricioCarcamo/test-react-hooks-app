import { useState } from "react"

export const useForm = ( initialValue = {} ) => {
    
    const [form, setForm] = useState( initialValue )

    const onInputChange = ({ target }) => {
      const { name, value, password } = target
      setForm({
        ...form,
        [ name ]: value
      })
    }

    const onResetForm = () => { 
        setForm( initialValue )
     }

    return {
        ...form,
        form,
        onInputChange,
        onResetForm,
    }
}
