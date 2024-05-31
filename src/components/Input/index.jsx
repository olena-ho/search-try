import React, { useState, useEffect, useRef } from "react";
import "../Dropdown/style.css";

export const Input = ({ placeholder, onChange }) => {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userInputValue, setUserInputValue] = useState("");
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setUserInputValue(value);
    onChange(value);
  };

  const handleAdd = () => {
    const trimmedValue = inputValue.trim().toLowerCase();
    if (trimmedValue !== "") {
      setLocation((prevLocations) => [
        ...prevLocations,
        { original: userInputValue.trim(), lowercased: trimmedValue },
      ]);
      setInputValue("");
      setUserInputValue("");
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
  };

  const handleApply = () => {
    setShow(false);
    const inputString = location.map(loc => loc.original).join(", ");
    // Update inputValue with the concatenated string
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
          {location.map((loc, index) => (
            <div key={index} className="added-location-wrapper">
              <button className="added-location">
                {loc.original}
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
