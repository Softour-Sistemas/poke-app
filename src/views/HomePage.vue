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

const init_pokemons = 0;
const limit_pokemons = 151;

onMounted(async () => {
  await store.loadPokemons(limit_pokemons, init_pokemons);
});

</script>