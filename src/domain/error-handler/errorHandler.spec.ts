import { describe, it, expect } from 'vitest';
import { PokemonListError, PokemonDetailsError } from '@/domain/errors/pokemonError';
import { ErrorHandler } from './errorHandler';

describe('ErrorHandler', () => {

    it('devuelve el mensaje correcto para PokemonListError', () => {
        const error = new PokemonListError('List failed');
        const result = ErrorHandler.handle(error);
        expect(result).toBe('No se pudo cargar la lista de Pokemon');
    });

    it('devuelve el mensaje correcto para PokemonDetailsError', () => {
        const error = new PokemonDetailsError('Details failed');
        const result = ErrorHandler.handle(error);
        expect(result).toBe('No se pudieron cargar los detalles del Pokemon');
    });

    it('devuelve un mensaje genérico para errores desconocidos', () => {
        const error = new Error('Unknown');
        const result = ErrorHandler.handle(error);
        expect(result).toBe('Ha ocurrido un error inesperado');
    });

    it('devuelve un mensaje genérico si recibe un valor que no es un error', () => {
        const result = ErrorHandler.handle('string error');
        expect(result).toBe('Ha ocurrido un error inesperado');
    });

});
