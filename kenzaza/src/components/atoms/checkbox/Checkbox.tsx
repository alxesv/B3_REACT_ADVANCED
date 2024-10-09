import './checkbox.css';

type CheckBoxProps = {
  label: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

function CheckBox(
    { label, defaultChecked=false, onChange, value }: CheckBoxProps
) {

  return (
    <div className="checkbox">
    <input type="checkbox"  defaultChecked={defaultChecked} onChange={onChange} value={value} />
    <label>{label}</label>
    </div>
    
  );
}

export default CheckBox;