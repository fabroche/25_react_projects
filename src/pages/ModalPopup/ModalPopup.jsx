import React, {useRef, useState} from 'react';
import './ModalPopup.css';
import Modal from "./components/Modal.jsx";

function ModalPopup() {

    const [isShowModalPopup, setIsShowModalPopup] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const modalRef = useRef(null);

    function onOpenModal() {
        setIsShowModalPopup(true);
        setIsAnimating(true);
    }

    function onCloseModal() {

        setIsAnimating(false);

        setTimeout(() => {
            setIsShowModalPopup(false)
        }, 300);
    }

    return (
        <>
            <h1>Modal Popup</h1>
            <button
                className={`button-open-modal ${isShowModalPopup ? 'active' : ''}`}
                onClick={onOpenModal}
            >Click Me
            </button>
            {
                isShowModalPopup && <Modal
                    onCloseModal={onCloseModal}
                    modalRef={modalRef}
                    isAnimating={isAnimating}
                />
            }
        </>
    );
}

export default ModalPopup;