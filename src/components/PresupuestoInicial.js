import React, { useState } from "react"
import ErrorMessages from "./ErrorMessages"
import ProtoTypes from "prop-types" 
import styled from "@emotion/styled"
import { keyframes } from '@emotion/react'
const fadeInUp = keyframes`
  0% {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
  `
const PresupuestoInicialDiv = styled.div`
padding: 50px 25px;
animation-name: ${fadeInUp};
animation-duration: 1s;
animation-fill-mode: both;
h2{
  color:#fff;
  letter-spacing:3px;
  text-align: center;
}
input{
  border:none;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  outline: none;
  padding-left: 15px;
  &:active,
  &:hover{
    background: #e6e2e2;
  }
}
div{
  width: 100%;
  display: flex;
  justify-content:center;
  button{
  margin: 25px auto;
  font-size: 1rem;
  padding: 7px 25px;
  letter-spacing: 3px;
}
}
button:hover,
button:active{
  transform: scale(1.05);
}
`


function PresupuestoInicial({modificarPresupuesto, modificarResatar, cambiarVentana}) {
    const [sueldo, modificarSueldo] = useState(0)
    const [error, modificarError] = useState(false)
    const definirPresupuesto = e =>{
      modificarSueldo(e.target.value, 2)
    }
    const enviarInfo = e =>{
        if(sueldo === isNaN() || sueldo < 1 ){
            modificarError(true)
            return
        } else {
            modificarError(false)
            modificarPresupuesto(sueldo)
            modificarResatar(sueldo)
            cambiarVentana(false)
            return
        }
    }
    return(
        <PresupuestoInicialDiv>
            <h2>Coloque su Presupuesto</h2>
            <input type="number" onChange={definirPresupuesto} placeholder="Enter your Budget"/>
            {error? <ErrorMessages error="El dato es invalid" />: null}
            <br/>
            <div>
              <button type="button" onClick={enviarInfo}>Start</button>
            </div>
        </PresupuestoInicialDiv>

    )
}
PresupuestoInicial.protoTypes = {
    modificarPresupuesto: ProtoTypes.number.isRequired,
    modificarResatar: ProtoTypes.number.isRequired, 
    cambiarVentana: ProtoTypes.bool.isRequired
}
export default PresupuestoInicial;