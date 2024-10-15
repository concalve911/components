import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import PlanetList from "./components/PlanetList.js";
import StarShips from "./components/StarShips.js";

export default () => {
  return (
    <div>
      <div className="container">
        <Header></Header>
        <CharacterList></CharacterList>
        <PlanetList></PlanetList>
        <StarShips></StarShips>
        <footer>(c) 2024</footer>
      </div>
    </div>
  );
};
