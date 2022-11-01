import {
  Badge,
  Box,
  Divider,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { colorSchema } from "../../theme";
import { SinglePokemon } from "../../interfaces";
import "animate.css";

interface CardState {
  pokemon: SinglePokemon;
}

export const Card = ({ pokemon }: CardState) => {
  const bg = useColorModeValue("orange.50", "gray.700");

  const { types, abilities } = pokemon;

  return (
    <Box
      as="div"
      _hover={{ transform: "scale(1.5)" }}
      minH="320px"
      w={{ base: "100%", md: "100%", lg: "fit-content" }}
      bg={bg}
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      className="animate__animated animate__pulse"
    >
      <Badge
        ml="1"
        size="xs"
        colorScheme="red"
        borderTopEndRadius="lg"
        borderBottomLeftRadius="lg"
        position="absolute"
        right="0"
        top="0"
      >
        {`# ${pokemon.id}`}
      </Badge>
      <Image
        w="180px"
        src={pokemon.picture}
        alt={`Image for pokemon ${pokemon.name}`}
      />

      <Box p="2">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="baseline"
        >
          <Box display="flex" justifyContent="center" gap="2" w="100%">
            {types.map(({ type }) => (
              <Badge
                borderRadius="full"
                px="2"
                colorScheme={colorSchema[type.name]}
                fontSize="8px"
              >
                {type.name}
              </Badge>
            ))}
          </Box>
          <Box
            mt="1"
            fontWeight="bold"
            as="h1"
            fontSize="16px"
            lineHeight="tight"
            w="100%"
            textAlign="center"
          >
            {pokemon.name}
          </Box>
        </Box>
      </Box>
      <Box fontSize="8px" py="2" px="6" w="100%">
        <Box display="flex" justifyContent="space-between">
          <Box as="p" fontWeight="bold">
            Height
          </Box>
          <Box as="p">{pokemon.height}</Box>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box as="p" fontWeight="bold">
            Weight
          </Box>
          <Box as="p">{pokemon.weight}</Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box as="p" fontWeight="bold">
            Abilities
          </Box>
          <Box display="flex" flexDirection="column" alignItems="end">
            {abilities.map(({ ability }) => (
              <Box as="p">{ability.name}</Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Divider />
      <L as={"a"} textDecoration="none" fontSize="10px" href="/">
        See more details
      </L>
    </Box>
  );
};
