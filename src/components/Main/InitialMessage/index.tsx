import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    margin: 40px 0;
`

const Message = styled.span`
    color: #000;
    display: block;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 auto;
    width: max-content;
`

const InititalMessage = () => {
    return (
        <Div>
            <Message>Faça o seu pedido!</Message>
        </Div>
    )
}

export default InititalMessage