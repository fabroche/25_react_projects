import React, {useEffect} from 'react';
import './Modal.css'

function Modal({id, header, body, footer, onCloseModal, modalRef,isAnimating}) {

    function onPressEnter(e) {
        if (e.key === 'Enter') {
            onCloseModal()
        }
    }

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.querySelector('.modal__close-icon').focus();
        }
    }, []);

    return (
        <div
            id={id || 'modal'}
            className={`modal ${isAnimating ? 'open' : 'close'}`}
        >
            <div className={`modal-content ${isAnimating ? 'open' : 'close'}`} ref={modalRef}>
                <div className="modal-content__header">
                    <span
                        className="modal__close-icon"
                        onClick={onCloseModal}
                        onKeyDown={onPressEnter}
                        tabIndex="0"
                        role="button"
                        aria-label="Cerrar modal"
                    >&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div>
                <div className="modal-content__body">
                    {
                        body || (
                            <div>
                                <p>This is our Modal Body</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis ea eaque eum id
                                    impedit magnam, minima repudiandae soluta temporibus? Assumenda atque commodi, dolore
                                    explicabo illum labore nesciunt sint voluptatibus!</p>
                            </div>
                        )
                    }
                </div>
                <div className="modal-content__footer">
                    {
                        footer || <h3>This is our footer</h3>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;