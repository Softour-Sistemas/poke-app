import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import PokemonCard from './PokemonCard.vue';

describe('Pokemon.vue', () => {
    const pokemon = {
        name: 'bulbasaur',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    };

    it('muestra la imagen correcta', () => {
        render(PokemonCard, { props: { pokemon } });

        const img = screen.getByRole('img', { name: "bulbasaur" });

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', pokemon.url);
        expect(img).toHaveAttribute('alt', pokemon.name);
    });

    it('muestra el nombre', () => {
        render(PokemonCard, { props: { pokemon } });

        expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    });

    it('tiene las clases de estilo correctas', () => {
        render(PokemonCard, { props: { pokemon } });

        const name = screen.getByText("bulbasaur");
        const img = screen.getByRole('img', { name: "bulbasaur" });

        expect(name).toHaveClass('pokemon-card__name');
        expect(img).toHaveClass('pokemon-card__image');
    });
});
