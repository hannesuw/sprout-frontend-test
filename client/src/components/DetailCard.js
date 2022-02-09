import Stat from "./Stat";

const DetailCard = ({ types, id, weight, height, stats }) => {
  return (
    <div className="card lg:card-side card-bordered">
      <figure className="shadow-sm">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        />
      </figure>
      <div className="card-body">
        <div className="card-actions flex justify-center lg:hidden">
          {types.map(({ type }) => {
            if (
              type.name === "grass" ||
              type.name === "bug" ||
              type.name === "poison"
            ) {
              return <button className="btn btn-primary">{type.name}</button>;
            } else if (type.name === "fire") {
              return <button className="btn btn-accent">{type.name}</button>;
            } else if (type.name === "water") {
              return <button className="btn btn-secondary">{type.name}</button>;
            } else {
              return <button className="btn btn-neutral">{type.name}</button>;
            }
          })}
        </div>
        <div>
          <div>
            <p>Hp: {stats[0].base_stat}</p>
            <Stat val={stats[0].base_stat} color="primary" />
          </div>
          <div>
            <p>Attack: {stats[1].base_stat}</p>
            <Stat val={stats[1].base_stat} color="error" />
          </div>
          <div>
            <p>Defense: {stats[2].base_stat}</p>
            <Stat val={stats[2].base_stat} color="info" />
          </div>
          <div>
            <p>Special Attack: {stats[3].base_stat}</p>
            <Stat val={stats[3].base_stat} color="accent" />
          </div>
          <div>
            <p>Special Defense: {stats[4].base_stat}</p>
            <Stat val={stats[4].base_stat} color="secondary" />
          </div>
        </div>
        <div className="card-actions hidden lg:block">
          {types.map(({ type }) => {
            if (
              type.name === "grass" ||
              type.name === "bug" ||
              type.name === "poison"
            ) {
              return (
                <button className="btn btn-primary rounded-full">
                  {type.name}
                </button>
              );
            } else if (type.name === "fire") {
              return (
                <button className="btn btn-accent rounded-full">
                  {type.name}
                </button>
              );
            } else if (type.name === "water") {
              return (
                <button className="btn btn-secondary rounded-full">
                  {type.name}
                </button>
              );
            } else {
              return (
                <button className="btn btn-neutral rounded-full">
                  {type.name}
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
