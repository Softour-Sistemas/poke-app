import { usePokemonStore } from '../../../index';
import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PokemonService } from "@/services/pokemon.service";

vi.mock("@/services/pokemon.service", () => ({
  PokemonService: {
    getPokemonList: vi.fn(),
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
});