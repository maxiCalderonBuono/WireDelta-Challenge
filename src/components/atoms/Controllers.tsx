import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useAppDispatch, useAppSelector } from "../../interfaces/hook";
import { useState } from "react";
import { getPokemons } from "../../store/slices/pokemon/thunks";

export const Controllers = () => {
  const bg = useColorModeValue("transparent", "whiteAlpha-200");

  const [page, setPage] = useState<number>(0);

  const dispatch = useAppDispatch();

  const { limit } = useAppSelector((state) => state.pokemons);

  const handlePreviousPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
    dispatch(getPokemons(nextPage, limit));
  };

  const handleNextPage = () => {
    const nextPage = Math.min(page + 1, 24);
    if (nextPage === 24) return;
    setPage(nextPage);
    dispatch(getPokemons(nextPage, limit));
  };

  return (
    <Flex
      gap="4"
      w="100%"
      justifyContent="center"
      fontSize="sm"
      alignItems="center"
    >
      <Button size="xs" gap="2" onClick={handlePreviousPage} bg={bg}>
        <ArrowLeftIcon />
        <span>Previous page</span>
      </Button>
      <Box>
        {page + 1} de {24}
      </Box>
      <Button size="xs" gap="2" onClick={handleNextPage} bg={bg}>
        <span>Next page</span>
        <ArrowRightIcon />
      </Button>
    </Flex>
  );
};
