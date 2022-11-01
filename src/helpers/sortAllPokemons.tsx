export const sortAllPokemons = (pokemons, search, filter) => {
  switch (filter) {
    case "A-Z":
      return pokemons
        .filter((pokemon) => pokemon.name.includes(search.toUpperCase()))
        .sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

    case "Z-A":
      return pokemons
        .filter((pokemon) => pokemon.name.includes(search.toUpperCase()))
        .sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });

    case "WEIGHT":
      return pokemons
        .filter((pokemon) => pokemon.name.includes(search.toUpperCase()))
        .sort((a, b) => a.weight - b.weight);

    case "HEIGHT":
      return pokemons
        .filter((pokemon) => pokemon.name.includes(search.toUpperCase()))
        .sort((a, b) => a.height - b.height);

    default:
      return pokemons.filter((pokemon) =>
        pokemon.name.includes(search.toUpperCase())
      );
  }
};
