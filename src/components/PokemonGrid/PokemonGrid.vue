<template>
    <ul class="pokemon-list">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
            <PokemonCard :pokemon="pokemon" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Pokemon } from '@/models/pokemon';
import PokemonCard from '@/components/PokemonCard/PokemonCard.vue';

defineProps<{
    pokemons: Pokemon[];
}>();
</script>

<style lang="scss" src='./PokemonGrid.scss'></style>
