import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppDispatch } from "./interfaces/hook";
import { AppRouter } from "./router/AppRouter";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
