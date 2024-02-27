import { useEffect, useState } from "react"
import styled from "styled-components"
import { getSnacks } from "../../../api/getSnacks"
import SnackGroup from "./SnackGroup"
import Snack from "./SnackGroup/Snack"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    max-width: 100%;
`

interface Snack {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface SnackType {
    [key: string]: Snack[];
}

const Snacks = () => {
    const [snacks, setSnacks] = useState<SnackType>({})

    useEffect(() => {
        const fetchDataSnacks = async () => {
            try {
                const response = await getSnacks()
                setSnacks(response)
            
            } catch (error) {
                console.error(error)
            }
        }
        fetchDataSnacks()
    })

    return (
        <Container>
            {Object.keys(snacks).map((snackType, index) => (
                <SnackGroup key={index} snackGroupName={snackType}>
                    {snacks[snackType].map((snack) => (
                        <Snack
                            id={snack.id}
                            key={snack.id}
                            snackName={snack.name}
                            snackDescription={snack.description}
                            snackPrice={snack.price}
                            snackImage={snack.image}
                            snackNameAlt={snack.name}
                        />
                    ))}
                </SnackGroup>
            ))}
        </Container>
    )
}

export default Snacks