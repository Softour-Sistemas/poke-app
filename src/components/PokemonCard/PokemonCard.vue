<template>
    <div class="pokemon-card">
        <img :src="pokemon.url" :alt="pokemon.name" class="pokemon-card__image" />
        <span class="pokemon-card__name">
            {{ pokemon.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/models/pokemon';

defineProps<{
    pokemon: Pokemon;
}>();
</script>

<style scoped lang="scss">
@use "./PokemonCard.scss" as *;
</style>
