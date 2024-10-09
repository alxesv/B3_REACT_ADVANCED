import React from 'react';
import './button.css';

type ButtonType = 'primary' | 'secondary' | 'danger' | 'icon';
type ButtonState = 'active' | 'disabled' | 'loading';

interface ButtonProps {
    type: ButtonType;
    state?: ButtonState;
    onClick?: () => void;
    children?: React.ReactNode;
    cssClass?: string;
    onClickCopy?: () => void;
    textToCopy?: string;
}

const Button: React.FC<ButtonProps> = ({ type, state, onClick, children, cssClass, onClickCopy, textToCopy }) => {
    const getClassNames = () => {
        return `button ${type} ${cssClass} ${state}`;
    };
    const handleClick = () => {
        if (onClick) onClick();
        if (onClickCopy || textToCopy) {
            copyToClipboard();
            if (onClickCopy) onClickCopy();
        }
    };
    const copyToClipboard = () => {
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
        }
    };
    return (
        <button className={getClassNames()} onClick={handleClick} disabled={state === 'disabled'}>
            {state === 'loading' ? 'Loading...' : children}
        </button>
    );
};

export default Button;