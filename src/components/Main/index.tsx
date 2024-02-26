import { ReactNode } from "react";
import styled from "styled-components";


const MainContainer = styled.main`
    height: 100%;
    max-width: 100vw;
`

interface MainProps {
    children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default Main