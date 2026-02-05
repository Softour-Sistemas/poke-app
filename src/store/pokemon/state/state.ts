import { Pokemon, PokemonDetails } from "@/models/pokemon";

export const state = () => ({
    pokemons: [] as (Pokemon & { image?: string })[],
    isLoading: false,
    selectedPokemon: null as PokemonDetails | null,
});
