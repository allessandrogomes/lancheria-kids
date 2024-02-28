import styled from "styled-components"
import { useBag } from "../../../../../context/BagContext"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const SnackOrder = styled.div`
    font-size: 0.75rem;
    display: flex;
    gap: 10px;
`

const Name = styled.span`
    max-width: 100px;
`

const Amount = styled.span`
    color: brown;
`

const Price = styled.span`
    color: green;
`

const TotalPrice = styled.span`
    margin-top: 30px;
    font-weight: bold;
    color: green;
    text-align: center;
`

const OrderModalBag = () => {

    const { bag } = useBag()

    return (
        <Container>
            {bag.snacks.map((snackOfBag, index) => (
                <SnackOrder key={index}>
                    <Amount>{snackOfBag.amount}x</Amount>
                    <Name>{snackOfBag.name}</Name>
                    <Price>R$ {(snackOfBag.price*snackOfBag.amount).toFixed(2).replace('.', ',')}</Price>
                </SnackOrder>
            ))}
            <TotalPrice>Total: R$ {bag.totalPriceSnacks.toFixed(2).replace('.', ',')}</TotalPrice>
        </Container>
    )
}

export default OrderModalBag