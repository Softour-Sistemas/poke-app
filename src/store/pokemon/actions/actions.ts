import { Pokemon, PokemonList } from "@/models/pokemon";
import { PokemonService } from "@/services/pokemon.service";    
import { state } from "../state/state";

type StateType = ReturnType<typeof state>;

export const actions = {
    async loadPokemons(this: StateType & any, init: number, limit: number) {
        try {
            const data: PokemonList = await PokemonService.getPokemonList(init, limit);
            this.setPokemons(data.results);
        } catch (error) {
        console.error("Error loading pokemons:", error);
        return [];}
    },

    setPokemons(this: StateType, results:(Pokemon & {image: string})[]) {
        this.pokemons = results;
    }
}
