import React, {useState} from "react"
import ErrorMessages from "./ErrorMessages"
import {v4 as uuid} from "uuid";
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const FormDiv = styled.div`
form{
div{
  width: 90%;
  display: flex;
  justify-content: center;
  button{
    font-size: 1rem;
    letter-spacing: 3px;
    border:none;
    background: #161722;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
  }
}
}
`


function Form({guardarGastos, modificarGasto}) {
    const [form, addForm] = useState({
        name:"",
        value:"",
        id:""
    })
    const [error, modificarError] = useState(false)
    const agregarAlForm= e =>{
        addForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    const enviarInfo = e =>{
        if(form.name ==="" ||form.name === isNaN() ||form.value < 1 ){
            modificarError(true)
            return
        } else {
            modificarError(false)
        }
        addForm({
            ...form,
            id: uuid(),
        })
        guardarGastos(form)
        modificarGasto(true)
        addForm({
          name:"",
          value:"",
          id:""
        })
    }
    return(
        <FormDiv>
          <h2>Ingrese sus Gastos</h2>
          <form>
            {error? <ErrorMessages error="Complete los datos requeridos"/> :null}
            <label>Nombre del gasto</label>
            <br/>
            <input 
            type="text" 
            placeholder="Ej. Tranporte"
            name="name"
            value={form.name}
            onChange={agregarAlForm}
            />
            <br/>
            <label>Cantidad de gasto</label>
            <br/>
            <input 
            type="text" 
            placeholder="Ej. 300"
            name="value"
            value={form.value}
            onChange={agregarAlForm}
            />
            <br/>
            <div>
            <button 
            type="button"
            onClick={enviarInfo}
            >Agregar Gasto</button>
            </div>
          </form>
        </FormDiv>
    )
}
Form.protoTypes = {
    guardarGastos: PropTypes.object.isRequired,
    modificarGasto: PropTypes.bool.isRequired
}
export default Form;