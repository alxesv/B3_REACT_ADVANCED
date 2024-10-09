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
}

const Button: React.FC<ButtonProps> = ({ type, state, onClick, children, cssClass }) => {
    const getClassNames = () => {
        return `button ${type} ${cssClass} ${state}`;
    };
    return (
        <button className={getClassNames()} onClick={onClick} disabled={state === 'disabled'}>
            {state === 'loading' ? 'Loading...' : children}
        </button>
    );
};

export default Button;