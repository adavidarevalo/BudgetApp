import React, {Fragment} from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
const GastosCardP = styled.p`
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
span{
  background: #3B83BD;
  padding: 8px;
  margin-bottom: 5px;
  background: #161722;
  color:#fff;
}
`
const GastosCardDiv = styled.div`
padding-block: 0px !important;
`

function GastosCard({data}) {
    return(
        <Fragment>
            {data.map(card =>(
              <GastosCardDiv key={card.id}>
                <GastosCardP>{card.name} <span>${card.value}</span></GastosCardP>
              </GastosCardDiv >
              ))}
        </Fragment>
    )   
}
GastosCard.protoTypes = {
    data: PropTypes.string.isRequired
}
export default GastosCard;