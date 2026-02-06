<template>
  <h1>Hello App!</h1>
  <p><strong>Ruta actual:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/home">Home</RouterLink>
  </nav>
  <nav>
    <RouterLink to="/pokemon">pokemon</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/store';
import { onMounted } from 'vue';

const store = usePokemonStore()

var initPokemons = 0;
const LIMIT_POKEMONS = 25;
const MAX_POKEMONS = 151;

onMounted(async () => {
  for (let i = initPokemons; i < MAX_POKEMONS; i += LIMIT_POKEMONS) {
    await store.loadPokemons(LIMIT_POKEMONS, i)
  }
});

</script>