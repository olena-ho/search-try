import { HomeVisual } from "../../components/HomeVisual";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";


export const HomePage = () => {
  return (
    <div className="main-page__container">
      <SearchBar />
      <HomeVisual />
    </div>
  );
};
