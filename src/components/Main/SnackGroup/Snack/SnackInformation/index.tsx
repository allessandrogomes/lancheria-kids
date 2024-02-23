import styled from "styled-components"

const DivSnackInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const SnackName = styled.span`
    font-size: 0.875rem;
    font-weight: bold;
`

const AdditionalInformation = styled.span`
    color: #808080;
    font-size: 0.875rem;
`

const Price = styled.span`
    font-size: 0.875rem;
    font-weight: bold;
`

export interface SnackInformationProps {
    snackName: string
    additionalSnackInformation: string
    snackPrice: number
}

const SnackInformation = ({ snackName, additionalSnackInformation, snackPrice }: SnackInformationProps) => {
    return (
        <DivSnackInformation>
            <SnackName>{snackName}</SnackName>
            <AdditionalInformation>{additionalSnackInformation}</AdditionalInformation>
            <Price>R$ {snackPrice}</Price>
        </DivSnackInformation>
    )
}

export default SnackInformation