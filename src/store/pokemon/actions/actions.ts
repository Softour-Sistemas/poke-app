import { Pokemon, PokemonDetails } from "@/models/pokemon";
import { PokemonService } from "@/services/pokemon.service";
import { state } from "../state/state";

type StateType = ReturnType<typeof state>;

async function loadPokemonSprite(pokemon: Pokemon): Promise<Pokemon & { image: string }> {
    const result = await PokemonService.getPokemonDetails(pokemon.name);
    return {
        ...pokemon,
        image: result.sprites.front_default
    };
}

export const actions = {
    async loadPokemons(this: StateType & any, init: number, limit: number) {
        try {
            const { results } = await PokemonService.getPokemonList(init, limit);
            const detailed = await Promise.all(results.map(loadPokemonSprite));
            this.setPokemons(detailed);
        } catch (error) {
            console.error("Error loading pokemons:", error);
            return [];
        }
    },

    setPokemons(this: StateType, results: (Pokemon & { image: string })[]) {
        this.pokemons = results;
    },

    async loadPokemonDetails(this: StateType & any, name: string) {
        try {
            const result = await PokemonService.getPokemonDetails(name);
            this.setPokemonDetails(result);
        } catch (error) {
            console.error("Error loading pokemon details:", error);
            return null;
        }
    },

    setPokemonDetails(this: StateType, details: PokemonDetails) {
        this.selectedPokemon = details;
    }
};
