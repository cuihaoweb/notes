<script setup>
import VPContent from '../components/VPContent.vue'
import { useData } from '../composables/data'


const { frontmatter } = useData()
</script>


<template>
    <VPContent></VPContent>
</template>


<style scoped>
</style>
