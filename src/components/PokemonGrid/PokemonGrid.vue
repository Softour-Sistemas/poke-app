<template>
    <div class="pokemon-grid">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>
</template>

<script setup lang="ts">
import { Pokemon } from '@/models/pokemon';
import PokemonCard from '@/components/PokemonCard/PokemonCard.vue';

defineProps<{
    pokemons: Pokemon[];
}>();
</script>

<style lang="scss">
@use "./PokemonGrid.scss" as *;
</style>



