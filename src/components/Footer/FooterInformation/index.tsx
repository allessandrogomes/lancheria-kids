import styled from "styled-components"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    span {
        font-size: 0.875rem;
        font-weight: bold;
    }

    div {
        display: flex;
        gap: 10px;

        a {
            text-decoration: none;
            color: #000;
        }
    }
`

const FooterInformation = () => {
    return (
        <Container>
            <span>Desenvolvido por Alessandro Gomes</span>
            <div>
                <a href="https://linkedin.com/in/allessandrogomes" target="_blank"><FaLinkedin size="1.25em" /></a>
                <a href="https://github.com/allessandrogomes" target="_blank"><FaGithub size="1.25em" /></a>
            </div>
        </Container>
    )
}

export default FooterInformation