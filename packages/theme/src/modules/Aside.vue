<script setup>
import Author from './Author.vue';
import OutLine from './OutLine.vue';
</script>


<template>
    <aside class="aside-root space-col">
        <Author></Author>
        <OutLine></OutLine>
    </aside>
</template>


<style lang="scss" scoped>
.aside-root {
    padding: 0 10px;
}
</style>
