import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchInput = () => {
  return (
    <InputGroup size="sm">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="Search Teams" rounded="10" />
    </InputGroup>
  );
};
