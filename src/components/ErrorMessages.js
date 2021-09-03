import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
const ErrorMessagesP = styled.p`
background: red;
text-align: center;
padding: 15px;
color: #fff;
font-size: 1rem;
font-weight: 500;
letter-spacing: 2px;
width: 86%;
`


function ErrorMessages({error}) {
    return(
        <ErrorMessagesP>{error}</ErrorMessagesP>
    )
}
ErrorMessages.propTypes = {
    error: PropTypes.string.isRequired
}
export default ErrorMessages;