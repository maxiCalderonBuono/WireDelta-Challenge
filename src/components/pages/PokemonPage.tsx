import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../interfaces/hook";
import { ToggleColorMode } from "../atoms/ToggleColorMode";
import { SinglePokemon } from "../../interfaces/allPokemonsResponse";
import { DropDownList } from "../organism/DropDownList";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPokemons } from "../../store/slices/pokemon/thunks";
import { Card } from "../organism";

export const PokemonPage = () => {
  const { pokemons, isLoading } = useAppSelector((state) => state.pokemons);

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const bg = useColorModeValue("orange.50", "gray.700");

  const [pokemon] = pokemons.filter(
    (pokemon: SinglePokemon) => pokemon.id === Number(id)
  );

  useEffect(() => {
    if (!pokemon) {
      dispatch(getPokemons());
    }
  }, []);

  return isLoading ? (
    <h1>Cargando....</h1>
  ) : (
    <>
      <Box display="flex" justifyContent="space-between" px="32" mt="10">
        <Link to="/">
          <Button
            size="sm"
            leftIcon={<ArrowLeftIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Back
          </Button>
        </Link>
        <Image
          bg={bg}
          borderRadius="xl"
          src={pokemon.picture}
          alt={`picture of ${pokemon.name}`}
          w="250px"
        />
        <ToggleColorMode />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-center"
        w="100%"
        px="32"
      >
        <Box as={"h1"} fontWeight="bold" textAlign="center">
          {pokemon.name}
        </Box>
        <Flex display="flex" justifyContent="space-between" gap="4">
          <Box as={"p"}>
            Height: <span>{pokemon.height}</span>
          </Box>
          <Box as={"p"}>
            Weight: <span>{pokemon.weight}</span>
          </Box>
          <Box as={"p"}>
            Base experience: <span>{pokemon.base_experience}</span>
          </Box>
          <Box as={"p"}>
            Default: <span>{pokemon.is_default.toString()}</span>
          </Box>
          <Box as={"p"}>
            Order: <span>{pokemon.order}</span>
          </Box>
          <Box>
            Species: <span>{pokemon.species.name}</span>
          </Box>
        </Flex>
        <Flex display="flex" flexDirection="column" gap="3">
          <DropDownList data={pokemon.abilities} name={"Abilities"} />
        </Flex>
      </Box>
      <Flex flexDirection="column" alignItems="center" gap="4">
        <Box as={"h1"}>You might also like</Box>
        <Flex gap="6" w="100%" justifyContent="space-evenly" mb="5">
          {pokemons
            .filter((pokemon) => pokemon.id !== Number(id))
            .slice(0, 3)
            .map((pokemon: SinglePokemon) => (
              <Box key={pokemon.id}>
                <Card pokemon={pokemon} />
              </Box>
            ))}
        </Flex>
      </Flex>
    </>
  );
};
