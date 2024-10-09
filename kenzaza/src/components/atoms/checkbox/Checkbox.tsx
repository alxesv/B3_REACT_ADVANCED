import './checkbox.css';

type CheckBoxProps = {
  label: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckBox(
    { label, defaultChecked=false, onChange=()=>{} }: CheckBoxProps
) {

  return (
    <div className="checkbox">
    <input type="checkbox"  defaultChecked={defaultChecked} onChange={onChange} />
    <label>{label}</label>
    </div>
    
  );
}

export default CheckBox;