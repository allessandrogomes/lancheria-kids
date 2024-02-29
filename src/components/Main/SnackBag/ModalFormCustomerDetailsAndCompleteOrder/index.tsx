import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import FormCustomerDetailsAndCompleteOrder from '../FormCustomerDetailsAndCompleteOrder';
import { IoMdCloseCircle } from "react-icons/io";


Modal.setAppElement('#root');

const ModalFormCustomerDetailsAndCompleteOrder = ({ btnProceedWithOrderClicked }: any) => {

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (btnProceedWithOrderClicked) {
            handleOpen()
        }
    }, [btnProceedWithOrderClicked])

    function handleOpen() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <IoMdCloseCircle
                onClick={closeModal}
                size="1.5rem"
                style={{ position: 'fixed', right: '15px', top: '10px' }}
            />
            <FormCustomerDetailsAndCompleteOrder />
        </Modal>
    )
}

export default ModalFormCustomerDetailsAndCompleteOrder