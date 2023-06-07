import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PokemonContextProvider } from "./context/pokemon.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <CssBaseline />
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </BrowserRouter>
);
