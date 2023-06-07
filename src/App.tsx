import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Pokemon from "./pages/pokemon";
import Pokedex from "./pages/Pokedex ";
import PokeApi from './pages/pokedex'

function App() {
  return (
    <>
      <div>
        <PokeApi />
      </div>
    </>
  );
}

export default App;
