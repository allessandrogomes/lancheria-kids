import styled from "styled-components"
import SnackInformation, { SnackInformationProps } from "./SnackInformation"
import SnackImage, { SnackImageProps } from "./SnackImage"
import AddRemoveSnackButtons from "./AddRemoveButtons"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const DivSnack = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
`

const Divider = styled.div`
    background-color: black;
    height: 1px;
    opacity: 0.2;
    width: 100%;
`

interface SnackProps extends SnackInformationProps, SnackImageProps { }

const Snack = ({ snackName, additionalSnackInformation, snackPrice, snackImage, snackNameAlt }: SnackProps) => {
    return (
        <Container>
            <Divider />
            <DivSnack>
                <SnackInformation
                    snackName={snackName}
                    additionalSnackInformation={additionalSnackInformation}
                    snackPrice={snackPrice}
                />
                <SnackImage
                    snackImage={snackImage}
                    snackNameAlt={snackNameAlt}
                />
                <AddRemoveSnackButtons />
            </DivSnack>
        </Container>
    )
}

export default Snack