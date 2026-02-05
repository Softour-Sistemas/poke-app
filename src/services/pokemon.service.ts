import { PokemonDetails, PokemonList } from "@/models/pokemon";


const BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL;

export const PokemonService = {

    async getPokemonList(limit: number, offset: number): Promise<PokemonList> {

        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
            throw new Error('Error fetching Pokemon list');
        }

        return response.json();
    },

    async getPokemonDetails(name: string): Promise<PokemonDetails> {

        const response = await fetch(`${BASE_URL}/pokemon/${name}`);

        if (!response.ok) {
            throw new Error('Error fetching Pokemon details');
        }

        return response.json();

    },
};
