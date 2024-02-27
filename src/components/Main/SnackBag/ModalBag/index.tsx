import Modal from 'react-modal'
import OrderModalBag from './OrderModalBag';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ModalBagProps {
    openModalClicked: MouseEvent
}

const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const ModalBag = ({ openModalClicked }: ModalBagProps) => {

    const [modalState, setModalState] = useState<boolean>(false);

    useEffect(() => {
        if (openModalClicked) {
            setModalState(true)
        }
    }, [openModalClicked])

    function closeModal() {
        setModalState(false)
    }

    return (
        <Modal
            isOpen={modalState}
            onRequestClose={closeModal}
        >
            <ContainerModal>
                <h2>Sacola</h2>
                <OrderModalBag />
                <button onClick={closeModal}>Voltar</button>

            </ContainerModal>
        </Modal>
    )
}

export default ModalBag