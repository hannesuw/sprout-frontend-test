import { useNavigate } from "react-router-dom";

const Card = ({ name, id }) => {
  const navigate = useNavigate();

  return (
    <div className="col-span-1 border w-full rounded-md shadow-md hover:scale-110 duration-300">
      <div onClick={() => navigate(`/detail/${id}`)} className="cursor-pointer">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
        />
      </div>
      <div class="divider"></div>
      <div>
        <p className="text-center capitalize font-semibold text-lg mb-5">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;
