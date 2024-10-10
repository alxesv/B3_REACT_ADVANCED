import React from 'react';
import './input.css';

type InputProps = {
  label?: string;
  placeholder?: string;
  type: 'text' | 'password' | 'email' | 'tel' | 'date';
  onChange?: () => void;
  value?: string;
  disabled?: boolean;
  width?: number;
  height?: number;
  radius?: number;
  padding?: number;
  background?: string;
  color?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  type, height = 2, radius = 30, width = 18, label, placeholder,
  onChange, value, disabled=false, padding=2, background='', color='dark-color', required=false
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} className={'input ' + background + ' ' + color} placeholder={placeholder}
        onChange={onChange} value={value} disabled={disabled}
        style={{width: `${width}rem`, height: `${height}rem`, borderRadius: `${radius}px`,
        padding: `${padding}rem`}} required={required} />
    </div>

  );
}

export default Input;
