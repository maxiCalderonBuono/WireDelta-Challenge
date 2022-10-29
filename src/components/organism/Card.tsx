import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Box
      w="fit-content"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Image
        w="200px"
        src="https://imgs.search.brave.com/ONutAJhVku1BD_5UZJfjEYfyy4bRUYDtFQu7Mq6R3ec/rs:fit:1200:1107:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2lraWRleGNk/bi5uZXQvbXd1cGxv/YWRzL3dpa2lkZXgv/dGh1bWIvNC80My9s/YXRlc3QvMjAxOTA0/MDYxNzA2MjQvQnVs/YmFzYXVyLnBuZy8x/MjAwcHgtQnVsYmFz/YXVyLnBuZw"
      />

      <Box p="6">
        <Box
          display="flex"
          flexDirection="column"
          gap="4"
          justifyContent="center"
          alignItems="baseline"
        >
          <Badge borderRadius="full" px="2" colorScheme="yellow">
            Electric
          </Badge>
          <Box
            mt="1"
            fontWeight="bold"
            as="h1"
            fontSize="20px"
            lineHeight="tight"
            w="100%"
            textAlign="center"
          >
            Bulbasor
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
