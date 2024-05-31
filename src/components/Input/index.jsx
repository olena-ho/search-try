import React, { useState, useEffect, useRef } from "react";
import "../Dropdown/style.css";

export const Input = ({ placeholder, title, options, onChange }) => {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [checkedOptions, setCheckedOptions] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShow(!show);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setLocation(value);
    onChange(value);
  };

  const handleApply = () => {
    setShow(false);
    onSubmit(location);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <input
        type="text"
        id="location"
        value={location}
        placeholder={placeholder}
        onFocus={toggleDropdown}
        onChange={handleInputChange}
        className="dropdown-button"
      />
      <div className={`dropdown-content ${show ? "show" : ""}`}>
        <button className="apply-button" onClick={handleApply}>
          Add
        </button>
        <button className="apply-button" onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
};