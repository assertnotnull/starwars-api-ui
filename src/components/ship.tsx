import useFetchStarship from "../hooks/useFetchStarship";

export default function Ship({ id }: { id: string }) {
  const { data: ship, isError, isLoading } = useFetchStarship(id);

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
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : null}
    </div>
  );
}
