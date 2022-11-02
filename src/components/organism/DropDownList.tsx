import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useColorModeValue, Flex, Badge } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const DropDownList = ({ data, name }) => {
  const [display, changeDisplay] = useState<boolean>(false);

  const bg = useColorModeValue("orange.50", "gray.700");
  return (
    <Flex direction="column" gap="2">
      <Button
        bg={bg}
        size="sm"
        borderRadius="md"
        rightIcon={display ? <ChevronUpIcon /> : <ChevronDownIcon />}
        w="100%"
        onClick={() => changeDisplay((prev) => !prev)}
      >
        <Box as={"p"} w="100%">
          {name}
        </Box>
      </Button>
      <Box
        display={display ? "flex" : "none"}
        flexDirection="column"
        bg={bg}
        borderRadius="md"
        p="3"
      >
        {data.map(({ ability }) => (
          <p>{ability.name}</p>
        ))}
      </Box>
    </Flex>
  );
};
