import { Starship } from "./types";

export async function fetchStarShip({
  queryKey,
}: {
  queryKey: string[];
}): Promise<Starship> {
  const id = queryKey[1];
  const res = await fetch(`https://swapi.dev/api/starships/${id}/`);
  return res.json();
}
