export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    }
    stats: Stats[];
    types: Types[];
}

export interface Types {
    slot: number;
    type: Type;
}

export interface Type {
    name: string;
    url: string;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export interface Stat {
    name: string;
    url: string;
}