import { usePokemonStore } from '../../../index';
import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PokemonService } from "@/services/pokemon.service";
import { PokemonDetails } from '@/models/pokemon';

vi.mock("@/services/pokemon.service", () => ({
  PokemonService: {
    getPokemonList: vi.fn(),
    getPokemonDetails: vi.fn()
  }
}));

describe('Pokemon Actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('must update the status of your Pokémon correctly after calling the service.', async () => {
    const store = usePokemonStore();

    vi.mocked(PokemonService.getPokemonList).mockResolvedValue({
      count: 1,
      next: null,
      previous: null,
      results: [{ name: 'pikachu', url: '...' }]
    });  

    await store.loadPokemons(0, 20);

    expect(store.pokemons[0].name).toBe('pikachu');
  });

  it('must handle the error and not break the state if the service fails.', async () => {
    const store = usePokemonStore();

    vi.mocked(PokemonService.getPokemonList).mockRejectedValue(new Error('Fail'));

    await store.loadPokemons(0, 20);

    expect(store.pokemons).toEqual([]);
  });

  it('must update selectedPokemon correctly.', async () => {
    const store = usePokemonStore();
    const MOCK_DETAILS = {name: 'bulbasaur', id: 1, stats: [], types: [], sprites: {front_default: ''}} as PokemonDetails; 

    store.setPokemonDetails(MOCK_DETAILS);

    expect(store.selectedPokemon).toEqual(MOCK_DETAILS);
  });

  it('must call loadPokemonDetails and save the details.', async () => {
    const store = usePokemonStore();
    const MOCK_DETAILS = {name: 'bulbasaur', id: 1, stats: [], types: [], sprites: {front_default: ''}} as PokemonDetails;

    vi.mocked(PokemonService.getPokemonDetails).mockResolvedValue(MOCK_DETAILS);

    await store.loadPokemonDetails('bulbasaur');

    expect(PokemonService.getPokemonDetails).toHaveBeenCalledWith('bulbasaur')
    expect(store.selectedPokemon).toEqual(MOCK_DETAILS);
  });
});