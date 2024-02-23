import { ReactNode } from "react";
import styled from "styled-components";


const HeaderContainer = styled.header`
    align-items: center;
    background-color: #9195F6;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: flex;
    height: 100px;
    justify-content: center;
    width: 100vw;
`

interface HeaderProps {
    children: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    )
}

export default Header