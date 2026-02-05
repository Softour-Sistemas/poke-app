<template>
    <div class="pokemon-grid">
        <Pokemon v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>
</template>

<script setup lang="ts">
import { Pokemon } from '@/models/pokemon';

defineProps<{
    pokemons: Pokemon[];
}>();
</script>


<style scoped lang="scss">
@import "./PokemonGrid.scss";
</style>
