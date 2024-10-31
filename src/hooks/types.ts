export type Brand<U extends string | number, T> = U & { __brand: T };

export type BrandId = Brand<string, "id">;

export type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: Brand<string, "url">[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type Starship = {
  name: Brand<string, "name">;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: unknown[];
  films: string[];
  created: Date;
  edited: Date;
  url: Brand<string, "url">;
};
