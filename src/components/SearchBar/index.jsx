import React, { useState } from 'react';
import { Dropdown } from '../Dropdown';
import './style.css';

export const SearchBar = ({ onSearch }) => {
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

  return (
    <div className="search-bar-wrapper">
      <Dropdown
        title="Activities / hobbies"
        options={['Outdoors', 'Art', 'Sport', 'Relax']}
        onChange={(option, checked) => handleFilterChange('activities', option, checked)}
      />
      <Dropdown
        title="Location"
        options={['Czechia', 'Germany', 'Croatia']}
        onChange={(option, checked) => handleFilterChange('location', option, checked)}
      />
      <Dropdown
        title="Comfort"
        options={['Wifi', 'Pool', 'Gym']}
        onChange={(option, checked) => handleFilterChange('comfort', option, checked)}
      />
      <Dropdown
        title="Price"
        options={['$ - Budget', '$$ - Midrange', '$$$ - Luxury']}
        onChange={(option, checked) => handleFilterChange('price', option, checked)}
      />
      <Dropdown
        title="Rating from guests"
        options={['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']}
        onChange={(option, checked) => handleFilterChange('rating', option, checked)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};
