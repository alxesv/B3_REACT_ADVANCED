import './alert.css';
import { useEffect, useRef, useState } from 'react';

type AlertProps = {
    type?: 'primary' | 'secondary' | 'danger' | 'dark';
    message: string;
    autoClose?: boolean;
    onClose?: () => void;
};


function Alert({ type='primary', message, autoClose = false, onClose }: AlertProps) {

    const alertRef = useRef<HTMLDivElement>(null);

    const [progress, setProgress] = useState(0);

    function handleClose() {
        if (alertRef.current) {
            if (onClose) {
                onClose();
            }
        }
    }
    
    function autoCloseAlert() {
        const duration = 4000;
        const interval = 100;
        let elapsed = 0;
        
        const timer = setInterval(() => {
            elapsed += interval;
            setProgress((elapsed / duration) * 100);
            if (elapsed >= duration) {
                clearInterval(timer);
                handleClose();
            }
        }, interval);
    }

    useEffect(() => {
        if (autoClose) {
            autoCloseAlert();
        }
    }, [autoClose]);


    return (
        <div className={`alert ${type}-bg`} ref={alertRef}>
            {message}
            {autoClose ? <div className='alert-progress-bar' data-testid="progress-bar" style={{ width: `${progress}%` }}></div> : null}
            <button className='close-button' onClick={handleClose}>X</button>
        </div>
    );
}

export default Alert;