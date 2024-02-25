import styled from "styled-components"

const DivAddRemoveSnackButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
`

const AddRemoveSnackButtons = () => {
    return (
        <DivAddRemoveSnackButtons>
            <button className="buttonAddSnackToBag">+</button>
            <button className="buttonRemoveSnackFromBag">-</button>
        </DivAddRemoveSnackButtons>
    )
}

export default AddRemoveSnackButtons