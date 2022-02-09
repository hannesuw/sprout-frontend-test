// Components
import Card from "../components/Card";

// React
import { useEffect } from "react";
// React Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/actionCreators";
import LoadingCard from "../components/LoadingCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    pokemons,
    pokemonsLoading: loading,
    pokemonsError: error,
  } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="home-page">
      <h1 className="font-semibold text-3xl text-center mb-10">Pokemons</h1>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {!loading &&
            pokemons.map(({ name }, i) => {
              return <Card key={i} name={name} id={i + 1} />;
            })}
          {loading &&
            [...Array(12)].map((e) => {
              return <LoadingCard />;
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
