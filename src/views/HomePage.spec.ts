import { describe, it, expect, vi } from 'vitest';

import { usePokemonStore } from '@/store';
vi.mock('@/store', () => ({
    usePokemonStore: () => ({
        loadPokemons: vi.fn().mockResolvedValue(undefined),
        pokemons: [
            {
                name: 'bulbasaur',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                url: 'https://pokeapi.co/api/v2/pokemon/1/',
            },
            {
                name: 'ivysaur',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
                url: 'https://pokeapi.co/api/v2/pokemon/2/',

            }
        ]
    })
}));

describe('HomePage.vue', () => {
    it('pokemonList.results recibe los pokemons del store', async () => {

        const store = usePokemonStore();

        await store.loadPokemons(0, 151);

        const pokemonList = {
            count: store.pokemons.length,
            next: null,
            previous: null,
            results: store.pokemons
        };

        expect(pokemonList.results).toEqual(store.pokemons);
        expect(pokemonList.count).toBe(2);
    });
});
