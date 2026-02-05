import { state } from './../state';
import {describe, expect, it} from 'vitest';

describe('PokemonState', () => {
    it('should initialize with default values', () => {
        const storeState = state();
        expect(storeState.pokemons).toEqual([]);
        expect(storeState.isLoading).toBe(false);
        expect(storeState.selectedPokemon).toBeNull();
    });
});