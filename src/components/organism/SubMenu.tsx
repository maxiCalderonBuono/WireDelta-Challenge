import { Controllers } from "../atoms/Controllers";
import { ToggleColorMode } from "../atoms/ToggleColorMode";
import { Flex } from "@chakra-ui/react";

interface SubMenu {}

export const SubMenu = (props: SubMenu) => {
  return (
    <Flex justifyContent="center" alignItems="center" px="32" my="4">
      <Controllers />
      <ToggleColorMode />
    </Flex>
  );
};
