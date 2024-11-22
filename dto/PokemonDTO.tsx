import { EvolutionDTO } from "./EvolutionDTO";
import { ResistanceDTO } from "./ResistanceDTO";
import { StatsDTO } from "./StatsDTO";
import { TypeDTO } from "./TypeDTO";

export interface PokemonDTO {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: StatsDTO;
  apiTypes: TypeDTO[];
  apiGeneration: number;
  apiResistances: ResistanceDTO[];
  resistanceModifyingAbilitiesForApi: any[];
  apiEvolutions: EvolutionDTO[];
  apiPreEvolution: string;
  apiResistancesWithAbilities: any[];
}
