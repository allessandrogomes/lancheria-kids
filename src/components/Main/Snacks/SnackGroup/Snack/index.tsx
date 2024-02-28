import styled from "styled-components"
import SnackInformation, { SnackInformationProps } from "./SnackInformation"
import SnackImage, { SnackImageProps } from "./SnackImage"
import AddRemoveSnackButtons from "./AddRemoveButtons"
import { useBag } from "../../../../../context/BagContext"
import { useEffect, useState } from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const DivSnack = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
`

const Divider = styled.div`
    background-color: black;
    height: 1px;
    opacity: 0.2;
    width: 100%;
`

const AddedAmountOfSnack = styled.span`
    font-weight: bold;
    color: red;
`

interface SnackProps extends SnackInformationProps, SnackImageProps {
    id: number
}

const Snack = ({ snackName, snackDescription, snackPrice, snackImage, snackNameAlt, id }: SnackProps) => {
    const [amountOfSnack, setAmountOfSnack] = useState<number>(0)

    const { bag } = useBag()

    useEffect(() => {
        const updateAmountOfSnack = () => {
            const snackIndex = bag.snacks.findIndex(snackOfBag => snackOfBag.id === id)

            if (snackIndex !== -1) {
                const updatedBag = [...bag.snacks]
                setAmountOfSnack(updatedBag[snackIndex].amount)
            } else {
                setAmountOfSnack(0)
            }
        }

        updateAmountOfSnack()
    }, [bag])

    return (
        <Container>
            <Divider />
            <DivSnack>
                <SnackInformation
                    snackName={snackName}
                    snackDescription={snackDescription}
                    snackPrice={snackPrice}
                />
                <SnackImage
                    snackImage={snackImage}
                    snackNameAlt={snackNameAlt}
                />
                <AddRemoveSnackButtons
                    snackName={snackName}
                    snackPrice={snackPrice}
                    id={id}
                />
                <AddedAmountOfSnack>{amountOfSnack}</AddedAmountOfSnack>
            </DivSnack>
        </Container>
    )
}

export default Snack