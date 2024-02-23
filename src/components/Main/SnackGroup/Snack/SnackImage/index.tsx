import styled from "styled-components"

const DivSnackImage = styled.div`
    height: 60px;
    width: 80px;

    img {
        border-radius: 5px;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`

export interface SnackImageProps {
    snackImage: string
    snackNameAlt: string
}

const SnackImage = ({ snackImage, snackNameAlt }: SnackImageProps) => {
    return (
        <DivSnackImage>
            <img src={snackImage} alt={snackNameAlt} />
        </DivSnackImage>
    )
}

export default SnackImage