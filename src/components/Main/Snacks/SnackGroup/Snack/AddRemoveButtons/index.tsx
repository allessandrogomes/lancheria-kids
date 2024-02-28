import styled from "styled-components"
import { useBag } from "../../../../../../context/BagContext"
import { useEffect, useState } from "react"

const DivAddRemoveSnackButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
`

interface AddRemoveSnackButtonsProps {
    id: number
    snackName: string
    snackPrice: number
}

const AddRemoveSnackButtons = ({ snackName, snackPrice, id }: AddRemoveSnackButtonsProps) => {

    const snackAndPriceOfTheRespectiveButton = {
        id: id,
        name: snackName,
        price: snackPrice,
        amount: 1
    }

    const { bag, addSnackToBag, removeSnackFromBag } = useBag()

    const [styleRemoveSnackButton, setStyleRemoveSnackButton] = useState('')

    useEffect(() => {
        const hideRemoveSnackButton = () => {
            const snackIndex = bag.snacks.findIndex(item => item.id === snackAndPriceOfTheRespectiveButton.id)

            if (snackIndex === -1) {
                setStyleRemoveSnackButton('none')
            } else {
                setStyleRemoveSnackButton('initial')
            }
        }

        hideRemoveSnackButton()
    }, [bag])

    return (
        <DivAddRemoveSnackButtons>
            <button onClick={() => addSnackToBag(snackAndPriceOfTheRespectiveButton)} className="buttonAddSnackToBag">+</button>
            <button onClick={() => removeSnackFromBag(snackAndPriceOfTheRespectiveButton)} className="buttonRemoveSnackFromBag" style={{ display: `${styleRemoveSnackButton}` }}>-</button>
        </DivAddRemoveSnackButtons>
    )
}

export default AddRemoveSnackButtons