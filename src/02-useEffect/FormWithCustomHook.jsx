import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    
    const { user, email, password, form, onInputChange, onResetForm } = useForm({
        user: "",
        email: "",
        password: "",
    })

    return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Usuario"
        name="user"
        value={ user }
        onChange={ onInputChange }
      />
      
      <input
        type="email"
        className="form-control mb-2"
        placeholder="Correo"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button className="btn btn-primary" onClick={ onResetForm }>Reset</button>

    </>
  );
}
