import { Flex } from "@chakra-ui/react";
import React from "react";

export const Controllers = () => {
  return (
    <Flex gap="4" w="100%" justifyContent="center" fontSize="sm">
      <h3>Previous page</h3>
      <h3>1/2</h3>
      <h3>Next page</h3>
    </Flex>
  );
};
