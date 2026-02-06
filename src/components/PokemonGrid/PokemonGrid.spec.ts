import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import PokemonGrid from './PokemonGrid.vue';

describe('PokemonGrid.vue', () => {
    const pokemons = [
        {
            name: 'bulbasaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        },
        {
            name: 'ivysaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
        },
        { 
            name: 'venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
        },
    ];

    it('renderiza un listitem por cada pokemon', () => {
        render(PokemonGrid, { props: { pokemons } });

        const items = screen.getAllByRole('listitem');

        expect(items.length).toBe(pokemons.length);

    });

});
