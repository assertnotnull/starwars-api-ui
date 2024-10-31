import { useQueryClient } from "@tanstack/react-query";
import { fetchStarShip } from "../hooks/fetchFuncs";
import useMovie from "../hooks/useMovie";

export default function Movie({
  setSelectedShip,
}: {
  setSelectedShip: (url: string) => void;
}) {
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useMovie();
  const prefetch = (id: string) =>
    queryClient.prefetchQuery({
      queryKey: ["starship", id],
      queryFn: fetchStarShip,
    });

  function getId(url: string) {
    return url.substring(32, url.length - 1);
  }

  return (
    <div>
      <h1>Movie</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.opening_crawl}</p>
          <ul>
            {data.starships.map((shipUrl: string) => {
              return (
                <button
                  onClick={() => {
                    setSelectedShip(getId(shipUrl));
                  }}
                  onMouseDown={() => prefetch(getId(shipUrl))}
                >
                  {shipUrl}
                </button>
              );
            })}
          </ul>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : null}
    </div>
  );
}
