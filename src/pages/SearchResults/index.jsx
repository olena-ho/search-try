import React from "react";
import { useTranslation } from "react-i18next";
import { SearchBar } from "../../components/SearchBar";
import Map from "../../components/Map";
import "./style.css";

export const SearchResults = () => {
const [tttt] = useTranslation(["details"]);

  const foundHotels = ["EquitanaHotelResort", "HotelKouty"]; 
  
  return (
    <>
      <SearchBar />
      <div className="search-results-container">
        <div className="filters-applied">Filters Applied</div>
        <div className="search-cards">
          {foundHotels.map((hotel) => {
            return (
              <div key={hotel}>
                <p>{hotel}</p>
                <p>{tttt(`${hotel}.description`)}</p>
              </div>
            );
          })}
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </>
  );
};
