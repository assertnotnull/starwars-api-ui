import { useQuery } from "@tanstack/react-query";
import { Movie } from "./types";

export default function useMovie() {
  const result = useQuery({
    queryKey: ["movie", 1],
    queryFn: async (): Promise<Movie> => {
      const res = await fetch(`https://swapi.dev/api/films/1/`);
      return res.json();
    },
  });
  return result;
}
