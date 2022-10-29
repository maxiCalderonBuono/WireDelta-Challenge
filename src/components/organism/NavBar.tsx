import { Box, Divider, Flex, Select, Spacer } from "@chakra-ui/react";
import { SearchInput } from "../index";

export const NavBar = () => {
  return (
    <>
      <Flex alignItems="center" gap="8" px="32" my="4">
        <Select w="200px" size="sm" rounded="10" />
        <Spacer />
        <Box w="350px">
          <SearchInput />
        </Box>
        <Spacer />
        <Select w="200px" size="sm" rounded="10" />
      </Flex>
      <Divider />
    </>
  );
};
