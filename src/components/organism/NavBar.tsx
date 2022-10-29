import { Box, Divider, Flex, Select, Spacer } from "@chakra-ui/react";
import { SearchInput } from "../index";

import { getAllPokemons } from "../../helpers/getPokemonData";

export const NavBar = () => {
  const handleShowingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getAllPokemons(e.target.value);
  };

  return (
    <>
      <Flex alignItems="center" gap="8" px="32" my="4">
        <Select
          w="200px"
          size="sm"
          rounded="10"
          onChange={handleShowingChange}
          defaultValue={"20"}
        >
          <option value="10">Show 10 results</option>
          <option value="20">Show 20 results</option>
          <option value="50">Show 50 results</option>
        </Select>
        <Spacer />
        <Box w="350px">
          <SearchInput />
        </Box>
        <Spacer />
        <Select w="200px" size="sm" rounded="10" defaultValue={"option1"}>
          <option value="option1">From A-Z</option>
          <option value="option2">From Z-A</option>
          <option value="option3">By Height</option>
          <option value="option3">By Weight</option>
        </Select>
      </Flex>
      <Divider />
    </>
  );
};
