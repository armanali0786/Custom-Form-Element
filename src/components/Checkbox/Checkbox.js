import { useState } from "react";

const Checkbox = ({ label, name }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (isChecked) {
      console.log(name); // Log the name when the checkbox is checked
    }
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
