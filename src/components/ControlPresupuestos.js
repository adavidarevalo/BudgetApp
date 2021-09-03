import React from "react"
import revisarPresupuesto from "./helpers.js"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import "./styles/ControlPresupuestos.css"

const ControlPresupuestodP = styled.p`
background: rgba(177, 210, 255, 1);
border-radius: 3px;
background: rgba(177, 210, 255, 1);
padding: 10px;
border: 1px solid rgb(126 164 214);
color: #252a3a;
`

function ControlPresupuestod({RestarPresutuesto, Presupuesto}) {
    return(
        <div>
            <ControlPresupuestodP>Presupuesto: <span>${Presupuesto}</span> </ControlPresupuestodP>
            <p className={revisarPresupuesto(Presupuesto, RestarPresutuesto)}>Restante: <span>${RestarPresutuesto}</span> </p>
        </div>
    )
}
ControlPresupuestod.protoTypes = {
    RestarPresutuesto: PropTypes.number.isRequired, 
    Presupuesto: PropTypes.number.isRequired
}
export default ControlPresupuestod;