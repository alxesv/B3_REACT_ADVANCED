import './radio.css';

type RadioProps = {
    label: string;
    name: string;
    value: string;
    defaultChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    color?: string;
    };

function Radio(
    { label, name, value, defaultChecked=false, onChange, color="primary" }: RadioProps
) {
    
        return (
            <div className="radio">
                <input type="radio" className={color} name={name} value={value} defaultChecked={defaultChecked} onChange={onChange} />
                <label>{label}</label>
            </div>
        );
    }

export default Radio;