import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  
    const [form, setForm] = useState({
        user: 'Mau', 
        email: 'mau@gmail.com',
    })

    const { user, email } = form

    const onInputChange = ({ target }) => {
      const { name, value } = target
      setForm({
        ...form,
        [ name ]: value
      })
    }

    return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Username"
        name="user"
        value={ user }
        onChange={ onInputChange }

      />

      {
        user === "strider" && <Message />
      }
      
      <input
        type="email"
        className="form-control"
        placeholder="Correo"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

    </>
  );
};
