import styled from "styled-components"
import { ReactNode } from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 30px 0;
    max-width: 100%;
`

const SnackGroupName = styled.span`
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
`

interface SnackGroupProps {
    snackGroupName: string
    children: ReactNode
}

const SnackGroup = ({ snackGroupName, children }: SnackGroupProps) => {
    return (
        <Container>
            <SnackGroupName>{snackGroupName}</SnackGroupName>
            {children}
        </Container>
    )
}

export default SnackGroup