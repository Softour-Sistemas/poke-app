export interface PokemonListDTO {
    results: Array<{
        name: string;
        url: string;
    }>;
}

export interface PokemonDTO {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    }
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }>;
}