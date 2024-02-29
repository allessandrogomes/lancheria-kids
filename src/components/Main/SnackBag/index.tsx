import styled from "styled-components"
import { useBag } from "../../../context/BagContext"
import { useState } from "react"
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

export const BtnProceedWithOrder = styled.button`
    background-color: green;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    padding: 6px 10px;
    color: #FAFAFA;
    font-size: 0.75rem;
`


const SnackBag = () => {

    const { bag } = useBag()

    const [btnOpenBagClicked, setBtnOpenBagClicked] = useState<any>()

    return (
        <Container>
            <InfosTotalOrder>
                <span>Total do pedido</span>
                <div>
                    <span className="totalOrderPrice">R$ {bag.totalPriceSnacks.toFixed(2).replace('.', ',')}</span>
                    <span> / </span>
                    <span className="totalOrderAmount">{bag.totalAmountSnacks} {bag.totalAmountSnacks === 1 ? 'item' : 'itens'}</span>
                </div>
            </InfosTotalOrder>
            <BtnsTotalOrder>
                <BtnSeeBag onClick={(event) => setBtnOpenBagClicked(event)}>Ver sacola</BtnSeeBag>
                <ModalBag btnOpenBagClicked={btnOpenBagClicked}/>
                <BtnProceedWithOrder onClick={(event) => setBtnOpenBagClicked(event)}>Prosseguir com pedido</BtnProceedWithOrder>
            </BtnsTotalOrder>
        </Container>
    )
}

export default SnackBag