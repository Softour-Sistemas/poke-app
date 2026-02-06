<template>

    <div class="input-filter">
        <input type="text" v-model="searchQuery" placeholder="Buscar Pokemon" />
    </div>    

</template>

<script setup lang="ts">
let searchQuery = defineModel();

</script>

<style lang="scss" src="./InputFilter.scss"></style>
