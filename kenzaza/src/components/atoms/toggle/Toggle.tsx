import './toggle.css'

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  customClass?: string;
  type?: string;
  color?: string;
};

function Toggle(
    { defaultChecked=false, onChange, value, customClass, type = "round", color="primary" }: ToggleProps
) {

  return (
    <label className="toggle">
    <input type="checkbox"  defaultChecked={defaultChecked} onChange={onChange} value={value} />
    <span className={`slider ${type} ${color} ${customClass}`}></span>
    </label>
  );
}

export default Toggle;