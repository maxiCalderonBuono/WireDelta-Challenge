import { useEffect } from "react";
import { NavBar, SubMenu } from "./components";
import { getPokemons } from "./helpers/getPokemons";

function App() {
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <NavBar />
      <SubMenu />
    </>
  );
}

export default App;
