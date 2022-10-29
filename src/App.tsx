import { useEffect, useState } from "react";
import { NavBar, SubMenu } from "./components";
import { CardList } from "./components/template/CardList";
import { getAllPokemons } from "./helpers/getPokemonData";

function App() {
  const [initialPokemons, setInitialPokemons] = useState<[]>([]);

  useEffect(() => {
    getAllPokemons().then(setInitialPokemons);
  }, []);

  return (
    <>
      <NavBar />
      <SubMenu />
      <CardList pokemons={initialPokemons} />
    </>
  );
}

export default App;
