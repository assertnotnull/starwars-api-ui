import { useQuery } from "@tanstack/react-query";
import { fetchStarShip } from "./fetchFuncs";

export default function useFetchStarship(id: string) {
  const result = useQuery({
    queryKey: ["starship", id],
    queryFn: fetchStarShip,
  });
  return result;
}
