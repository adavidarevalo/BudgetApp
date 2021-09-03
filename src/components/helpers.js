

function revisarPresupuesto(presupuesto, restante) {
  let style;
  if((presupuesto / 4) > restante){
    style = "red"
  } else if ((presupuesto / 2) > restante){
    style = "yellow"
  } else {
    style = "green"
  }
  return style
}
export default revisarPresupuesto;
