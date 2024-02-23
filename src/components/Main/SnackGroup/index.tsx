import styled from "styled-components"
import { ReactNode } from "react"

const Container = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    min-height: 200px;
    margin: 50px 15px;
    max-width: 100%;
`

const SnackGroupName = styled.span`
    font-size: 1rem;
    font-weight: bold;
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