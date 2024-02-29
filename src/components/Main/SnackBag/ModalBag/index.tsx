import Modal from 'react-modal'
import OrderModalBag from './OrderModalBag';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BtnProceedWithOrder } from '..';
import ModalFormCustomerDetailsAndCompleteOrder from '../ModalFormCustomerDetailsAndCompleteOrder';

const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

Modal.setAppElement('#root');


const ModalBag = ({ btnOpenBagClicked }: any) => {

    const [modalIsOpen, setIsOpen] = useState(false)

    const [btnProceedWithOrderClicked, setBtnProceedWithOrderClicked] = useState<any>()

    useEffect(() => {
        if (btnOpenBagClicked) {
            setIsOpen(true)
            setBtnProceedWithOrderClicked(false)
        }
    }, [btnOpenBagClicked])

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <ContainerModal>
                <h2>Sacola</h2>
                <OrderModalBag />
                <button onClick={closeModal}>Voltar</button>
                <BtnProceedWithOrder onClick={(event) => setBtnProceedWithOrderClicked(event)}>Prosseguir com o pedido</BtnProceedWithOrder>
                <ModalFormCustomerDetailsAndCompleteOrder btnProceedWithOrderClicked={btnProceedWithOrderClicked}/>
            </ContainerModal>
        </Modal>
    )
}

export default ModalBag