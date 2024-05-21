import React, { useState } from 'react';
import './style.css';

export const Dropdown = ({ title, options, onChange }) => {
  const [show, setShow] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState({});

  const toggleDropdown = () => setShow(!show);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedOptions(prev => ({ ...prev, [name]: checked }));
    onChange(name, checked);
  };

  const handleApply = () => {
    setShow(false);
  };

  return (
    <div className="dropdown-wrapper">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title} &#9662;
      </button>
      <div className={`dropdown-content ${show ? 'show' : ''}`}>
        {options.map(option => (
          <label className="checkbox-label" key={option}>
            <input
              type="checkbox"
              name={option}
              checked={checkedOptions[option] || false}
              onChange={handleCheckboxChange}
            />
            {option}
            </label>
        ))}
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};
