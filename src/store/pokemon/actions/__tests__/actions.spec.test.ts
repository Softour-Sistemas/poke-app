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

  it('It must update the status of your Pokémon correctly after calling the service.', async () => {
    const store = usePokemonStore();
    const mockResults = [{ name: 'pikachu', url: '...' }];
    
    
    (PokemonService.getPokemonList as any).mockResolvedValue({
      results: mockResults
    });

    await store.loadPokemons(0, 20);

    expect(store.pokemons).toEqual(mockResults);
  });

  it('It must handle the error and not break the state if the service fails.', async () => {
    const store = usePokemonStore();

    (PokemonService.getPokemonList as any).mockRejectedValue(new Error('Fail'));

    await store.loadPokemons(0, 20);

    expect(store.pokemons).toEqual([]);
  });
});