import './select.css';

type Option = {
    label: string;
    value: string;
    disabled?: boolean;
    };

type SelectProps = {
  label: string;
  options: Option[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  multiple?: boolean;
  defaultValue? : string;
};

function Select(
    { label, options, onChange, multiple=false, defaultValue }: SelectProps
) {

  return (
    <div className="select">
      <label>{label}</label>
      <select onChange={onChange} multiple={multiple} defaultValue={defaultValue}>
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
export type { Option };