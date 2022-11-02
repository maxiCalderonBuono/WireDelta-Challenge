import { Grid, Box } from "@chakra-ui/react";
import { Card } from "../organism/Card";
import { Skeleton } from "../organism/Skeleton";
import { SinglePokemon } from "../../interfaces";
import { useAppSelector } from "../../interfaces/hook";
import { sortAllPokemons } from "../../helpers/sortAllPokemons";

import "animate.css";

export const CardList = () => {
  const { pokemons, isLoading, searchValue, filter } = useAppSelector(
    (state) => state.pokemons
  );

  return isLoading ? (
    <Skeleton />
  ) : (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={6}
      className="animate__animated animate__fadeIn"
      px={{ base: "10", md: "20", lg: "32" }}
    >
      {sortAllPokemons(pokemons, searchValue, filter).map(
        (pokemon: SinglePokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        )
      )}
    </Grid>
  );
};
