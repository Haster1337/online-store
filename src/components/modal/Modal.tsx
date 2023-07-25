import React from 'react';

interface ModalProps {
    active: boolean,
    setActive: Function,
    children: React.ReactNode
}

const Modal:React.FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;