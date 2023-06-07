import { useState, useContext  } from "react";
import "./pokedexForm.css";
import {PokemonContext} from '../../context/pokemon.js'
import { Box, Button, Grid, TextField } from "@material-ui/core";

function PokemonForm() {
  const {dataPokemons}= useContext(PokemonContext);
  const [pokemon, setPokemon] = useState("");
  const [errorInput, setErrorInput] = useState({
    error: false,
    message: "",
  });

  const agregar = (event: any) => {
    event.preventDefault();
    if (pokemon.trim() === "") {
      setErrorInput({
        error: true,
        message: "El campo es requerido no puede quedar vacio",
      });
    } else {
      setErrorInput({
        error: false,
        message: "",
      });
      dataPokemons(pokemon.toLowerCase());
    }
   
  };

  return (
    <>
      <Box component="form" onSubmit={agregar}>
        <Grid container style={{ marginTop: "7px" }}>
          <Grid
            style={{ marginTop: "6px" }}
            item
            xs={10}
            sm={10}
            md={10}
            lg={10}
          >
            <TextField
              className="pokemon-input"
              type="text"
              name="pokemon"
              value={pokemon}
              placeholder="Busca tu pokemon"
              onChange={(e) => setPokemon(e.target.value)}
              autoComplete="off"
              required
              fullWidth
              InputProps={{ disableUnderline: true }}
              error={errorInput.error}
              helperText={errorInput.message}
            />
          </Grid>
          <Grid style={{ marginTop: "3px" }} item xs={2} sm={2} md={2} lg={2}>
            <Button
              type="submit"
              variant="text"
              className="pokemon-btn"
            ></Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PokemonForm;
