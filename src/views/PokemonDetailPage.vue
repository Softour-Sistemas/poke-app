
<template>
  <div class="grid">

  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/store';
import { onMounted } from 'vue';

const store = usePokemonStore()
const POKEMON_EXAMPLE = "bulbasaur";

onMounted(async () => {
  await store.loadPokemonDetails(POKEMON_EXAMPLE);
});

</script>