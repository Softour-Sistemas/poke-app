<template>
  <h1>Hello App!</h1>
  <p><strong>Ruta actual:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/home">Home</RouterLink>
  </nav>
  <nav>
    <RouterLink to="/pokemon">pokemon</RouterLink>
  </nav>

  <RouterView />  
</template>

<script setup lang="ts">
import { PokemonService } from '@/services/pokemon.service';
import { usePokemonStore } from '@/store';
import { onMounted } from 'vue';

const store = usePokemonStore()

const initPokemons = 0;
const limitPokemons = 151;

onMounted(async () => {
  try {
    const pokemons = await PokemonService.getPokemonList(initPokemons, limitPokemons);
    store.pokemons = pokemons.results;
  } catch (e) {
    console.error(e);
  }
});

</script>