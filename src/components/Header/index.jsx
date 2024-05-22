import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cs from './img/cs-lang.png';
import uk from './img/uk-lang.png';
import en from './img/en-lang.png';
import './style.css'; 

export const Header = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('cs');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getCurrentFlag = () => {
    switch (currentLang) {
      case 'cs':
        return cs;
      case 'uk':
        return uk;
      case 'en':
        return en;
      default:
        return cs;
    }
  };

  return (
    <div className="header">
      <div className="language-selector" onClick={toggleDropdown}>
        <img
          src={getCurrentFlag()}
          alt={currentLang}
          className="flag-icon"
        />
        {dropdownOpen && (
          <div className="dropdown">
            {currentLang !== 'cs' && (
              <img
                src={cs}
                alt="Czech"
                className="dropdown-flag"
                onClick={() => changeLanguage('cs')}
              />
            )}
            {currentLang !== 'en' && (
              <img
                src={en}
                alt="English"
                className="dropdown-flag"
                onClick={() => changeLanguage('en')}
              />
            )}
            {currentLang !== 'uk' && (
              <img
                src={uk}
                alt="Ukrainian"
                className="dropdown-flag"
                onClick={() => changeLanguage('uk')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};