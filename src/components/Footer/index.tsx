import { ReactNode } from "react"
import styled from "styled-components"

const ContainerFooter = styled.footer`
    align-items: center;
    background-color: #9195F6;
    display: flex;
    height: 100px;
    justify-content: center;
    max-width: 100vw;
    padding-bottom: 81px;
    width: 100vw;
`

const Footer = ({children}: {children: ReactNode}) => {
    return (
        <ContainerFooter>{children}</ContainerFooter>
    )
}

export default Footer