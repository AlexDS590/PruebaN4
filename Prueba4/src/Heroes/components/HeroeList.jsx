import { getheroesportipo } from "../helpers/getheroesportipo";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ tipo }) => {
  const heroes = getheroesportipo(tipo);

  return (
    <>
      <h1 className="titu-listado-de-heroes">Lista de Heroes</h1>
      <div className="container p-2">
        <div className="row">
          {heroes.map((aux) => (
            <div className="col-md-4 mb-4" key={aux.id}>
              <HeroeCard {...aux} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
