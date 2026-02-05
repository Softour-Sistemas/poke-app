<template>
    <div class="pokemon-card">
        <img :src="pokemon.url" :alt="pokemon.name" class="pokemon-image" />
        <span class="pokemon-name">
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

<style scoped>

.pokemon-card {
    width: 150px;
    height: 150px;
    border-radius: 16px;
    padding: 1rem;
    margin: 1rem;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
}

.pokemon-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
}

.pokemon-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
}

.pokemon-name {
    font-size: .85rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #333;
}
</style>
