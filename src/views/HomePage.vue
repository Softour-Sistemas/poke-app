<template>
  <div class="home">
    <Pokemon :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import Pokemon from '@/components/Pokemon.vue';
import type { Pokemon as PokemonType } from '@/models/pokemon';

const pokemon: PokemonType = {
  name: 'bulbasaur',
  url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
};
</script>

<style scoped>
.home {
  padding: 2rem;
  display: flex;
  justify-content: center;
}
</style>
