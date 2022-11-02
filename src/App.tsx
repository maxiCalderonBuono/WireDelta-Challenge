import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppDispatch } from "./interfaces/hook";
import { AppRouter } from "./router/AppRouter";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const page = localStorage.getItem("next-page");
    const limit = localStorage.getItem("limit");
    if (!page && !limit) {
      dispatch(getPokemons());
    } else {
      dispatch(getPokemons(limit, page));
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
