export class PokemonListError extends Error {
    constructor(message: string, cause?: unknown) {
        super(message);
        this.name = 'PokemonListError';
        this.cause = cause;
    }
}

export class PokemonDetailsError extends Error {
    constructor(message: string, cause?: unknown) {
        super(message);
        this.name = 'PokemonDetailsError';
        this.cause = cause;
    }
}
