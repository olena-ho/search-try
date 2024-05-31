import snowboarder from "../../../assets/img/homepage-img/snowboarder.jpg";
import geolocation from "../../../assets/img/homepage-img/geolocation.png";
import traveler from "../../../assets/img/homepage-img/traveler.png";
import "./style.css";

export const HomeVisual = () => { 
  return (
    <div className="main-page__visual">
      <img src={snowboarder} alt="snowboarder" className="main-page__image" />  
      <img src={geolocation} alt="pick your location" className="main-page__image main-page__image--s" />  
      <img src={traveler} alt="go on vacation" className="main-page__image" />  
    </div>
  );
}