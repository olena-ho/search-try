import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../Dropdown';
import './style.css';

export const SearchBar = ({ onSearch }) => {
  const { t, i18n } = useTranslation();
const [tttt] = useTranslation(["details"]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [filters, setFilters] = useState({
    activities: [],
    location: [],
    comfort: [],
    price: [],
    rating: []
  });

  const handleFilterChange = (category, option, checked) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[category] = [...newFilters[category], option];
      } else {
        newFilters[category] = newFilters[category].filter(item => item !== option);
      }
      return newFilters;
    });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const foundHotels = ["EquitanaHotelResort", "HotelKouty"];

  return (
    <div className="search-bar-wrapper">
<div>
  {foundHotels.map((hotel) => {
    <div>
      <p>{hotel}</p>
      <p>{tttt(`${hotel}.description`)}</p>
    </div>
  })}
</div>
      <Dropdown
        title={t('activitiesP')}
        options={['Outdoors', 'Art', 'Sport', 'Relax']}
        onChange={(option, checked) => handleFilterChange('activities', option, checked)}
      />
      <Dropdown
        title={t('locationP')}
        options={['Czechia', 'Germany', 'Croatia']}
        onChange={(option, checked) => handleFilterChange('location', option, checked)}
      />
      <Dropdown
        title={t('comfortP')}
        options={['Wifi', 'Pool', 'Gym']}
        onChange={(option, checked) => handleFilterChange('comfort', option, checked)}
      />
      <Dropdown
        title={t('priceP')}
        options={['$ - Budget', '$$ - Midrange', '$$$ - Luxury']}
        onChange={(option, checked) => handleFilterChange('price', option, checked)}
      />
      <Dropdown
        title={t('ratingP')}
        options={['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']}
        onChange={(option, checked) => handleFilterChange('rating', option, checked)}
      />
      <button className="search-button" onClick={handleSearch}>{t('searchB')}</button>
    </div>
  );
};
