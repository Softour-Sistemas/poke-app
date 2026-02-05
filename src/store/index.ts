import { defineStore } from "pinia";
import { state } from './pokemon/state/state';
import { actions } from './pokemon/actions/actions';
import { getters } from './pokemon/getters/getters';

export const usePokemonStore = defineStore("pokemon", {
    state,
    actions,
    getters
});
