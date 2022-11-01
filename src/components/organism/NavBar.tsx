import { useAppDispatch, useAppSelector } from "../../interfaces/hook";

import { Box, Divider, Flex, Select, Spacer } from "@chakra-ui/react";
import { SearchInput } from "../index";
import { getPokemons, onFilterOptions } from "../../store/slices/pokemon";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useAppDispatch();

  const defaultOption = localStorage.getItem("filter") || "A-Z";

  const { page } = useAppSelector((state) => state.pokemons);

  const handleShowingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(e.target.value);
    dispatch(getPokemons(page, limit));
  };

  const handleFilterCase = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("filter", target.value);
    dispatch(onFilterOptions(target.value));
  };

  useEffect(() => {
    const filter = localStorage.getItem("filter");
    if (filter) {
      dispatch(onFilterOptions(filter));
    }
  }, []);

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
        <Select
          w="200px"
          size="sm"
          rounded="10"
          defaultValue={defaultOption}
          onChange={handleFilterCase}
        >
          <option value="A-Z">From A-Z</option>
          <option value="Z-A">From Z-A</option>
          <option value="HEIGHT">By Height</option>
          <option value="WEIGHT">By Weight</option>
        </Select>
      </Flex>
      <Divider />
    </>
  );
};
