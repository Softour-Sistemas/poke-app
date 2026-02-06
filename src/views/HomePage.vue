<template>
  <PokemonGrid :pokemons="pokemonList.results" />
</template>

<script setup lang="ts">
import PokemonGrid from '@/components/PokemonGrid/PokemonGrid.vue';
import { PokemonList } from '@/models/pokemon';
import { usePokemonStore } from '@/store';
import { onMounted, ref } from 'vue';

const pokemonList = ref<PokemonList>({
  count: 0,
  next: null,
  previous: null,
  results: []
});

const store = usePokemonStore()

var initPokemons = 0;
const LIMIT_POKEMONS = 25;
const MAX_POKEMONS = 151;

onMounted(async () => {
  for (let i = initPokemons; i < MAX_POKEMONS; i += LIMIT_POKEMONS) {
    await store.loadPokemons(LIMIT_POKEMONS, i)
    pokemonList.value = {
      count: store.pokemons.length,
      next: null,
      previous: null,
      results: store.pokemons
    };
  }
});

</script>