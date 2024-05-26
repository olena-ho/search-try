import { SearchBar } from '../../components/SearchBar';
import Map from '../../components/Map';
import './style.css';


export const HomePage = () => {
  return (

    <>
    <SearchBar />
   <div className="home-page">
    <div className="left-content">
    </div>
    <div className="map-container">
      <Map/>
    </div>
  </div>
  </>
  )
};

