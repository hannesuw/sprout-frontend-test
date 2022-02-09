import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../store/actionCreators";
import DetailCard from "../components/DetailCard";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pokemonDetail } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, []);

  return (
    <div className="detail-page">
      <div className="w-11/12 mx-auto">
        {pokemonDetail.hasOwnProperty("forms") && (
          <div>
            <h1 className="font-semibold text-3xl capitalize text-center mb-10">
              {pokemonDetail.forms[0].name}
            </h1>
            <DetailCard
              types={pokemonDetail.types}
              id={id}
              weight={pokemonDetail.weight}
              height={pokemonDetail.height}
              stats={pokemonDetail.stats}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
