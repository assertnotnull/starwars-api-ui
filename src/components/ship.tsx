import useFetchStarship from "../hooks/useFetchStarship";
import { addShip } from "../slice/shipslice";
import { useAppDispatch } from "../store";

export default function Ship({ id }: { id: string }) {
  const { data: ship, isError, isLoading } = useFetchStarship(id);
  const dispatch = useAppDispatch();

  return (
    <div>
      {ship ? (
        <div>
          <h2>Ship</h2>
          <div>
            <h3>{ship.name}</h3>
            <p>{ship.model}</p>
            <p>{ship.manufacturer}</p>
            <p>{ship.cost_in_credits}</p>
          </div>
          <button type="button" onClick={() => dispatch(addShip(ship))}>
            Add to store
          </button>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : null}
    </div>
  );
}
