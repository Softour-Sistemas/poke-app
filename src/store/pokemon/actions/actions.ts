import { Pokemon, PokemonDetails } from "@/models/pokemon";
import { PokemonService } from "@/services/pokemon.service";    
import { state } from "../state/state";

type StateType = ReturnType<typeof state>;

export const actions = {
    async loadPokemons(this: StateType & any, init: number, limit: number) {
        try {
            const {results} = await PokemonService.getPokemonList(init, limit);
            this.setPokemons(results);
        } catch (error) {
        console.error("Error loading pokemons:", error);
        return [];}
    },

    setPokemons(this: StateType, results:(Pokemon & {image: string})[]) {
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
}
