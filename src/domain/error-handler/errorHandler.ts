import { PokemonDetailsError, PokemonListError } from "../errors/pokemonError";

const errorMap = new Map([
    [PokemonListError, () => 'No se pudo cargar la lista de Pokemon'],
    [PokemonDetailsError, () => 'No se pudieron cargar los detalles del Pokemon'],
]);

export class ErrorHandler {
    static handle(error: unknown): string {
        for (const [ErrorType, handler] of errorMap.entries()) {
            if (error instanceof ErrorType) {
                return handler();
            }
        }

        return 'Ha ocurrido un error inesperado';
    }
}
