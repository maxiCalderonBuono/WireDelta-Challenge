import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Controllers, NavBar, SubMenu } from "./components";
import { CardList } from "./components/template/CardList";

import { Box } from "@chakra-ui/react";

import { SinglePokemon } from "./interfaces/allPokemonsResponse";

import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppDispatch } from "./interfaces/hook";

function App() {
  const [page, setPage] = useState<number>(0);
  const [pagination, setPagination] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [show, setShow] = useState<number>(20);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  // const filteredPokemons = (): SinglePokemon[] => {
  //   if (search.length === 0) {
  //     return pokemons.slice(pagination, pagination + show);
  //   }

  //   const filtered = pokemons.filter((pokemon) =>
  //     pokemon.name.includes(search.toUpperCase())
  //   );

  //   return filtered.slice(pagination, pagination + show);
  // };

  // const total = filteredPokemons().length;

  // const handleShowItems = (option: number): void => {
  //   setShow(option);
  // };

  // const handleSearchValue = (item: string): void => {
  //   setSearch(item);
  // };

  return (
    <>
      <NavBar
      // show={handleShowItems}
      // searchValue={handleSearchValue}
      // search={search}
      />
      <SubMenu
      // onLeftClick={handlePreviousPage}
      // // onRightClick={handleNextPage}
      // page={page}
      // total={total}
      />
      <CardList />
      <Box py="10">
        <Controllers
        // onLeftClick={handlePreviousPage}
        // onRightClick={handleNextPage}
        // page={page}
        // total={total}
        />
      </Box>
    </>
  );
}

export default App;
