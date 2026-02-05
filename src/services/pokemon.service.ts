import { PokemonDetailsError, PokemonListError } from "@/domain/errors/pokemonError";
import { PokemonDetails, PokemonList } from "@/models/pokemon";


const BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL;

export const PokemonService = {

    async getPokemonList(limit: number, offset: number): Promise<PokemonList> {
        try {
            const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

            if (!response.ok) {
                throw new PokemonListError(`Error fetching Pokemon list: ${response.status}`);
            }

            return response.json();

        } catch (error) {
            throw new PokemonListError('Failed to load Pokemon list', error);
        }
    },

    async getPokemonDetails(name: string): Promise<PokemonDetails> {
        try {
            const response = await fetch(`${BASE_URL}/pokemon/${name}`);

            if (!response.ok) {
                throw new PokemonDetailsError(`Error fetching Pokemon details for ${name}: ${response.status}`);
            }

            return response.json();

        } catch (error) {
            throw new PokemonDetailsError('Failed to load Pokemon details', error);
        }

    },
};
