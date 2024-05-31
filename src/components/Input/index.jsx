import React, { useState, useEffect, useRef } from "react";
import "../Dropdown/style.css";

export const Input = ({ placeholder, onChange }) => {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userInputValue, setUserInputValue] = useState([]);
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  const handleAdd = () => {
    const trimmedValue = inputValue.trim().toLowerCase();
    if (trimmedValue !== "") {
      setLocation((prevLocations) => [...prevLocations, trimmedValue]);
      setUserInputValue((prevValues) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAdd();
    }
  };

  const handleRemove = (index) => {
    setLocation((prevLocations) => prevLocations.filter((_, i) => i !== index));
    setUserInputValue((prevValues) => prevValues.filter((_, i) => i !== index));
  };

  const handleApply = () => {
    setShow(false);
    const inputString = userInputValue.join(", ");
    setInputValue(inputString);
    console.log(location);
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
        value={inputValue}
        placeholder={placeholder}
        onFocus={() => setShow(true)}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="dropdown-button"
      />
      <div className={`dropdown-content ${show ? "show" : ""}`}>
        <div className="location-box">
          {userInputValue.map((loc, index) => (
            <div key={index} className="added-location-wrapper">
              <button className="added-location">
                {loc}
                <span
                  className="remove-location"
                  onClick={() => handleRemove(index)}
                >
                  ✖
                </span>
              </button>
            </div>
          ))}
        </div>
        <button className="apply-button" onClick={handleAdd}>
          Add
        </button>
        <button className="apply-button" onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
};
