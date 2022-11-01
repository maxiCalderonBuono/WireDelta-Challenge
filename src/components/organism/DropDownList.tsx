import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useColorModeValue, Flex, Badge } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const DropDownList = ({ data, name }) => {
  const [display, changeDisplay] = useState<boolean>(false);

  console.log(data);

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
      <Box display={display ? "flex" : "none"}>
        {data.map(({ ability }) => console.log(ability))}
      </Box>
    </Flex>
  );
};
