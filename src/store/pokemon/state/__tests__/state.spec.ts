import { state } from './../state';
import {describe, expect, it} from 'vitest';

describe('PokemonState', () => {
    it('should initialize with default values', () => {
        const s = state();
        expect(s.pokemons).toEqual([]);
        expect(s.isLoading).toBe(false);
        expect(s.selectedPokemon).toBeNull();
    });
});