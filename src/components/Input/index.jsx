import React, { useState, useEffect, useRef } from "react";
import "../Dropdown/style.css";
import { countries } from "../../../Api/countries";

export const Input = ({ placeholder, onChange }) => {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userInputValue, setUserInputValue] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowAutocomplete(true);
    setShow(false);
  };

  const handleSelect = (country) => {
    setLocation((prevLocations) => [...prevLocations, country.toLowerCase()]);
    setUserInputValue((prevValues) => [...prevValues, country]);
    setInputValue("");
    setShow(true);
    setShowAutocomplete(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const country = countries.find(c => c.toLowerCase() === inputValue.toLowerCase());
      if (country) {
        handleSelect(country);
      }
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
      setShowAutocomplete(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(inputValue.toLowerCase())
  );

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
      {showAutocomplete && inputValue && (
        <div className="autocomplete-list">
          {filteredCountries.map((country, index) => (
            <div
              key={index}
              className="autocomplete-item"
              onClick={() => handleSelect(country)}
            >
              {country}
            </div>
          ))}
        </div>
      )}
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
        <button className="apply-button" onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
};
