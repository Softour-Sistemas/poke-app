import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import PokemonGrid from './PokemonGrid.vue';

describe('PokemonGrid.vue', () => {
    const pokemons = [
        { name: 'bulbasaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
        { name: 'ivysaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
        { name: 'venusaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    ];

    it('renderiza un PokemonCard por cada pokemon', () => {
        render(PokemonGrid, { props: { pokemons } });

        const cards = screen.getAllByTestId('pokemon-card');

        expect(cards.length).toBe(pokemons.length);
    });

    it('muestra las imágenes correctas para cada pokemon', () => {
        render(PokemonGrid, { props: { pokemons } });

        const images = screen.getAllByRole('img');

        images.forEach((img, index) => {
            expect(img).toHaveAttribute('src', pokemons[index].url);
            expect(img).toHaveAttribute('alt', pokemons[index].name);
        });
    });

    it('muestra los nombres correctos', () => {
        render(PokemonGrid, { props: { pokemons } });

        pokemons.forEach(p => {
            expect(screen.getByText(p.name)).toBeInTheDocument();
        });
    });
});
