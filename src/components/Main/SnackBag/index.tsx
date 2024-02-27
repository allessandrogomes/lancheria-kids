import styled from "styled-components"
import { useBag } from "../../../context/BagContext"
import { useEffect, useState } from "react"
import ModalBag from "./ModalBag"

const Container = styled.div`
    align-items: center;
    background-color: #FAFAFA;
    border-top: 1px solid #000;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    font-size: 0.75rem;
    font-weight: bold;
    gap: 5px;
    height: 60px;
    justify-content: space-around;
    max-width: 100%;
    padding: 10px 5px;
    position: fixed;

    button {
        
        border: none;
        border-radius: 20px;
        color: #FAFAFA;
        font-weight: bold;
        padding: 6px 10px;
    }

    .totalOrderAmount {
        color: #808080;
        font-weight: 500;
    }

    .totalOrderPrice {
        color: green;
    }
`

const InfosTotalOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const BtnsTotalOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BtnSeeBag = styled.button`
    background-color: #9195F6;
`

const BtnProceedWithOrder = styled.button`
    background-color: green;
`


const SnackBag = () => {
    
    const [openModalClicked, setOpenModalClicked] = useState<any>();

    const [totalOrderPriceAndAmount, setTotalOrderPriceAndAmount] = useState({
        price: 0,
        amount: 0
    })

    const { bag } = useBag()

    useEffect(() => {
        const sumTotalOrderPriceAndAmount = () => {
            const updatedBag = [...bag]

            const totalPriceAndAmountOfSnacks = {
                price: 0,
                amount: 0
            }
            updatedBag.map(snackOfBag => {
                totalPriceAndAmountOfSnacks.amount += snackOfBag.amount
                totalPriceAndAmountOfSnacks.price += snackOfBag.price * snackOfBag.amount
            })

            setTotalOrderPriceAndAmount(totalPriceAndAmountOfSnacks)
        }

        sumTotalOrderPriceAndAmount()
    }, [bag])

    const totalOrderPriceFormatted = totalOrderPriceAndAmount.price.toFixed(2).replace('.', ',')

    return (
        <Container>
            <InfosTotalOrder>
                <span>Total do pedido</span>
                <div>
                    <span className="totalOrderPrice">R$ {totalOrderPriceFormatted}</span>
                    <span> / </span>
                    <span className="totalOrderAmount">{totalOrderPriceAndAmount.amount} {totalOrderPriceAndAmount.amount === 1 ? 'item' : 'itens'}</span>
                </div>
            </InfosTotalOrder>
            <BtnsTotalOrder>
                <BtnSeeBag onClick={(event) => setOpenModalClicked(event)}>Ver sacola</BtnSeeBag>
                <ModalBag openModalClicked={openModalClicked}/>
                <BtnProceedWithOrder>Prosseguir com pedido</BtnProceedWithOrder>
            </BtnsTotalOrder>
        </Container>
    )
}

export default SnackBag