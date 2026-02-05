import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PokemonService } from './pokemon.service';
import type { PokemonList, PokemonDetails } from '@/models/pokemon';
import { PokemonDetailsError, PokemonListError } from '@/domain/errors/pokemonError';

describe('PokemonService', () => {

    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('debe devolver la lista de Pokemon', async () => {

        const mockList: PokemonList = {
            count: 2,
            next: null,
            previous: null,
            results: [
                { name: 'bulbasaur', url: '...' },
                { name: 'pikachu', url: '...' },
            ],
        };

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockList),
        });

        const data = await PokemonService.getPokemonList(20, 0);

        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('/pokemon?limit=20&offset=0')
        );

        expect(data.results.length).toBe(2);
        expect(data.results[0].name).toBe('bulbasaur');
        expect(data.results[1].name).toBe('pikachu');
    });

    it('debe lanzar error si falla la lista de Pokemon', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
        });

        await expect(
            PokemonService.getPokemonList(20, 0)
        ).rejects.toThrow(PokemonListError);
    });

    it('debe devolver los detalles de un Pokemon', async () => {

        const mockDetails: PokemonDetails = {
            id: 1,
            name: 'bulbasaur',
            sprites: { front_default: 'img.png' },
            stats: [],
            types: [],
        };

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockDetails),
        });

        const data = await PokemonService.getPokemonDetails('bulbasaur');

        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('/pokemon/bulbasaur')
        );

        expect(data.name).toBe('bulbasaur');
        expect(data.id).toBe(1);
    });

    it('debe lanzar error si fallan los detalles del Pokemon', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
        });

        await expect(
            PokemonService.getPokemonDetails('bulbasaur')
        ).rejects.toThrow(PokemonDetailsError);
    });

});
