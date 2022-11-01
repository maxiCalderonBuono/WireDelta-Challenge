import { Controllers } from "../atoms/Controllers";
import { ToggleColorMode } from "../atoms/ToggleColorMode";
import { Flex } from "@chakra-ui/react";

interface SubMenu {
  page: number;
  total: number;
  onLeftClick: () => void;
  onRightClick: () => void;
}

export const SubMenu = (props: SubMenu) => {
  return (
    <Flex justifyContent="center" alignItems="center" px="32" my="4">
      <Controllers {...props} />
      <ToggleColorMode />
    </Flex>
  );
};
