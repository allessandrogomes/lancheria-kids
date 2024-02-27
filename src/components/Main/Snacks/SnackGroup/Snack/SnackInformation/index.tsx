import styled from "styled-components"

const DivSnackInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const SnackName = styled.span`
    font-size: 0.875rem;
    font-weight: bold;
    max-width: 110px;
`

const Description = styled.span`
    color: #808080;
    font-size: 0.875rem;
    max-width: 110px;
`

const Price = styled.span`
    font-size: 0.875rem;
    font-weight: bold;
`

export interface SnackInformationProps {
    snackName: string
    snackDescription: string
    snackPrice: number
}

const SnackInformation = ({ snackName, snackDescription, snackPrice }: SnackInformationProps) => {

    const formattedPrice = snackPrice.toFixed(2).replace('.', ',')

    return (
        <DivSnackInformation>
            <SnackName>{snackName}</SnackName>
            <Description>{snackDescription}</Description>
            <Price>R$ {formattedPrice}</Price>
        </DivSnackInformation>
    )
}

export default SnackInformation