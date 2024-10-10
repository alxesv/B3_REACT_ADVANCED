import exp from 'constants';
import './modal.css';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../atoms/button/Button';

type ModalProps = {
    children: React.ReactNode;
    onClose?: () => void;
    isOpen: boolean;
    cssClass?: string;
};

function Modal({ children, onClose, isOpen, cssClass='' }: ModalProps) {

    const [modalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDivElement>(null);


    const overlay = useRef(document.createElement('div'));
    overlay.current.className = 'overlay';

    overlay.current.onclick = (e) => {
        e.preventDefault();
        handleClose();
    }

    useEffect(() => {
        setModalOpen(isOpen);
        if (isOpen) {
            document.body.appendChild(overlay.current as Node);
        }
    }, [isOpen]);

    const handleClose = () => {
        setModalOpen(false);
        document.body.removeChild(overlay.current as Node);
        if (onClose) {
            onClose();
        }
    }
    
    return (
        <div className={`modal ${cssClass}`} style={{display: modalOpen ? 'block' : 'none'}} ref={modalRef}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <Button type='icon' cssClass='modal-close-button' onClick={handleClose}>
                        <i className="fa fa-window-close"></i>
                    </Button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;