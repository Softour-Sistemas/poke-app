import { Pokemon, PokemonDetails, PokemonList } from "@/models/pokemon";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
        pokemons: [] as (Pokemon & { image?: string })[],
        isLoading: false,
        selectedPokemon: null as PokemonDetails | null,
    }),

    actions: {
        async fetchInitialPokemons() {
            this.isLoading = true;
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
                const data = await response.json();
                this.pokemons = data.results;

                this.loadImagesInChunks(20);
            } catch (error) {
                console.error("Error cargando pokemons", error);
            } finally {
                this.isLoading = false;
            }
        },

        async loadImagesInChunks(chunkSize: number) {
            for (let i = 0; i < this.pokemons.length; i += chunkSize) {
                const chunk = this.pokemons.slice(i, i + chunkSize);
                await Promise.all(chunk.map(async (pokemon) => {
                    try {
                        const response = await fetch(pokemon.url);
                        const data = await response.json();
                        pokemon.image = data.sprites.front_default;
                    } catch (error) {
                        console.error(`Error cargando imagen de ${pokemon.name}`, error);
                    }
                }));
            }
        },

        async fetchPokemonDetails(name: string) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                this.selectedPokemon = data;
            } catch (error) {
                console.error("Error cargando detalles del pokemon", error);
            }
        }
    },
    getters: {
        
    }
});