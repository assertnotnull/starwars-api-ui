import { Starship } from "../hooks/types";
import { removeShip } from "../slice/shipslice";
import { useAppDispatch, useAppSelector } from "../store";

export function ShipGrid() {
  const ships = useAppSelector((state) => state.ships);
  const dispatcher = useAppDispatch();

  return (
    <div>
      {ships.map((ship) => (
        <Ship
          key={ship.url}
          ship={ship}
          removeFn={() => dispatcher(removeShip(ship.url))}
        />
      ))}
    </div>
  );
}

function Ship({
  ship,
  removeFn,
}: {
  ship: Starship;
  removeFn: (url: string) => void;
}) {
  return (
    <>
      <h2>{ship.name}</h2>
      <p>{ship.model}</p>
      <p>{ship.manufacturer}</p>
      <p>{ship.cost_in_credits}</p>
      <button type="button" onClick={() => removeFn(ship.url)}>
        Remove ship
      </button>
    </>
  );
}
