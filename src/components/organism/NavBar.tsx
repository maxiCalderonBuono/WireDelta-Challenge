import { Box, Divider, Flex, Select, Spacer } from "@chakra-ui/react";
import { SearchInput } from "../index";

export const NavBar = () => {
  return (
    <>
      <Flex alignItems="center" gap="8" px="32" my="4">
        <Select
          placeholder="Showing 10 results"
          w="200px"
          size="sm"
          rounded="10"
        >
          <option value="option1">Show 10 results</option>
          <option value="option2">Show 20 results</option>
          <option value="option3">Show 50 results</option>
        </Select>
        <Spacer />
        <Box w="350px">
          <SearchInput />
        </Box>
        <Spacer />
        <Select placeholder="Sort items" w="200px" size="sm" rounded="10">
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
