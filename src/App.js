import React, {  useState, useEffect} from "react"
import PresupuestoInicial from "./components/PresupuestoInicial"
import Form from "./components/Form"
import GastosCard from "./components/GastosCard"
import ControlPresupuestos from "./components/ControlPresupuestos"
import styled from "@emotion/styled"
import { keyframes } from '@emotion/react'
const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`
const fadeInDown = keyframes`
0% {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
`

const AppDiv = styled.div`
background: #161722;
margin: 0px;
width: 100%;
min-height: 100vh;
display: grid;
grid-template-rows: 200px 1fr;
header{
  max-height: 189px;
  background-image: url("https://raw.githubusercontent.com/MahmoudOmiesh/Todo-App/main/images/bg-desktop-dark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  animation-name: ${fadeInDown};
  animation-duration: 1s;
  animation-fill-mode: both;
  h1{
    margin:0px;
    font-size: 2rem;
    color:#fff;
    letter-spacing: 3px;
  }
  svg{
    width: 50px;
    margin-left: 20px;
  }
}
main{
  display: flex;
  justify-content:center;
  margin-bottom: 30px;
}
@media (max-width: 900px){
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    input{
      width: 80%;
    }
  }
}
`

const AppBudgetDiv = styled.div`
width: 100%;
max-width: 800px;
margin-top: 5vh;
div{
  display: flex;
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 1);
  padding: 25px;
  border-radius: 5px;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: both;
  div{
    display:block;
    h2{
      text-align: center;
      font-weight: 500;
      color: #4c4256;
    }
    form{
      display: block;
      label{
          font-size: .8rem;
          font-weight: 500;
      }
      input{
        width: 90%;
        height: 25px;
        padding-left: 10px;
        margin-top: 5px;
        margin-bottom: 20px;
        outline: none;
        &:hover,
        &:active{
          background: #e6e2e2;
        }
      }
    }
  }
}
@media (max-width: 900px){
  div{
    flex-wrap: wrap;
    padding: 0px;
    max-width: 100%;
    div{
      padding: 0px;
      form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
          width: 80%;
        }
      }
      div{
        width: 80%;
        padding: 0px;
        margin: 0 auto;
        p{
            width: 80%;
            margin: 25px auto;
        }
      }
    }
  }
}
`

function App() {
  const [Presupuesto, modificarPresupuesto] = useState(0)
  const [RestarPresutuesto, modificarResatar] = useState(0)
  const [ventana, cambiarVentana] = useState(true)
  const [Gastos, addGastos] = useState([])
  const [gastos, guardarGastos] = useState({})
  const [crearGasto, modificarGasto] = useState(false)


  useEffect(() => {
    if(crearGasto){
      addGastos([
      ...Gastos,
      gastos
    ])

    const PresupuestoRestante = RestarPresutuesto - gastos.value
    modificarResatar(PresupuestoRestante)
    modificarGasto(false)
    }
  }, [gastos])
  return (
    <AppDiv>
      <header>
        <h1>Gasto Semanal</h1>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bill-alt" class="svg-inline--fa fa-money-bill-alt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M352 288h-16v-88c0-4.42-3.58-8-8-8h-13.58c-4.74 0-9.37 1.4-13.31 4.03l-15.33 10.22a7.994 7.994 0 0 0-2.22 11.09l8.88 13.31a7.994 7.994 0 0 0 11.09 2.22l.47-.31V288h-16c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h64c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 192c-53.02 0-96-50.15-96-112 0-61.86 42.98-112 96-112s96 50.14 96 112c0 61.87-43 112-96 112zm272 32h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"></path></svg>
      </header>
      <main>
              {ventana? (
        <PresupuestoInicial 
        modificarPresupuesto={modificarPresupuesto}
        modificarResatar={modificarResatar}
        cambiarVentana={cambiarVentana}
         />
      ):(
        <AppBudgetDiv>
          <div>
         <Form 
         guardarGastos={guardarGastos}
         modificarGasto={modificarGasto}
         />
         <div>
           <h2>Listado</h2>
           <GastosCard data={Gastos}/>
           <ControlPresupuestos 
           Presupuesto={Presupuesto}
           RestarPresutuesto={RestarPresutuesto}
           />
         </div>
         </div>
       </AppBudgetDiv>
      )}
      </main>
    </AppDiv>
  );
}

export default App;
