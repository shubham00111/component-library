interface DropdownProps {
  options: string[];
  onChange: (s: string) => void;
}

const Dropdown = ({ options, onChange }: DropdownProps) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
