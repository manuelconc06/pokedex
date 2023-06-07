import React from "react";
import errorPokemon from "../../assets/img/errorPokemon.jpg";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import "./PokedexScreen.css";

function PokedexScreen(data: {
  pokemons: any;
  loading: boolean;
  encounters: string[];
}) {
  // Si hay un error en la petición a la API, devuelve este componente.
  if (data.pokemons === null && !data.loading) {
    return (
      <div className="pokedex-screen">
        <img
          src={errorPokemon}
          alt="Hubo un error buscando tu pokemon"
          className="pokedex-no-screen"
        />
      </div>
    );
  }

  // Si ya se paso la validación del error...
  return (
    <Container className="scroll pokedex-screen">
      {data.loading && (
        <div className="spinner-style">
          {" "}
          <CircularProgress />
        </div>
      )}
      {!data.loading && !data.pokemons ? (
        // Si no se encuentra pokemon o si esta cargando
        <img
          src={errorPokemon}
          alt="Aún no hay ningun pokemon"
          className="pokedex-no-screen"
        /> // Si se encuentra data entonces devuelve la inf pokemon
      ) : (
        <>
          {!data.loading && data.pokemons && (
            <Grid container style={{ overflowX: "auto" }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <h2 className="pokemon-name">{data.pokemons.name}</h2>
                <Grid container>
                  <Grid className="grid-pad" item xs={6} sm={6} md={6} lg={6}>
                    <img
                      className="pokemon-img"
                      src={data.pokemons.sprites.front_default}
                      alt={data.pokemons.name}
                    />
                    <img
                      className="pokemon-img"
                      src={data.pokemons.sprites.back_default}
                      alt={data.pokemons.name}
                    />
                    <div className="margin-text">
                      <strong>Habilidades:</strong>
                      {data.pokemons?.abilities.map(
                        (abilitie: any, index: number) => (
                          <div key={index}>{abilitie.ability.name}</div>
                        )
                      )}
                    </div>
                    <div className="margin-text">
                      <strong>Estadísticas:</strong>
                      {data.pokemons?.stats.map((stats: any, index: number) => (
                        <div key={index}>
                          <strong>{stats.stat.name}: </strong>
                          {stats.base_stat}
                        </div>
                      ))}
                    </div>
                    <div className="margin-text">
                      <strong> Area:</strong>
                      {data.encounters?.map((local: any, index: number) => (
                        <div key={index}>{local.location_area.name}</div>
                      ))}
                    </div>
                  </Grid>

                  <Grid className="grid-pad-two"item xs={6} sm={6} md={6} lg={6}>
                    <div className="margin-text">
                      <strong>Altura:</strong> {data.pokemons?.height}
                    </div>
                    <div className="margin-text">
                      <strong>Anchura:</strong> {data.pokemons?.weight}
                    </div>
                    <div className="margin-text">
                      <strong>Tipo:</strong>
                      {data.pokemons?.types.map((type: any, index: number) => (
                        <div key={index}>{type.type.name}</div>
                      ))}
                    </div>
                    <div className="margin-text">
                      <strong> Movimientos:</strong>
                      {data.pokemons?.moves.map((mov: any, index: number) => (
                        <div key={index}>{mov.move.name}</div>
                      ))}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}

export default PokedexScreen;
