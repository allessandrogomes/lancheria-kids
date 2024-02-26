import styled from "styled-components"

const Container = styled.div`
    align-items: center;
    background-color: #FAFAFA;
    border-top: 1px solid #000;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    font-size: 0.875rem;
    font-weight: bold;
    gap: 5px;
    height: 40px;
    justify-content: space-around;
    max-width: 100%;
    padding: 15px;
    position: fixed;

    button {
        background-color: #9195F6;
        border: none;
        border-radius: 20px;
        color: #FAFAFA;
        font-weight: bold;
        padding: 10px 40px;
    }

    .totalQuantityOfItems {
        color: #808080;
        font-weight: 500;
    }

    .divInfoBag {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
`

const SnackBag = () => {
    return (
        <Container>
            <div className="divInfoBag">
                <span>Total do pedido</span>
                <div>
                    <span className="totalOrderPrice">23,75</span>
                    <span> / </span>
                    <span className="totalQuantityOfItems">1 item</span>
                </div>
            </div>
            <button>Ver sacola</button>
        </Container>
    )
}

export default SnackBag