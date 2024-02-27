<script setup>
import VPSidebar from '../components/VPSidebar.vue'
import { useData } from '../composables/data'


const { frontmatter } = useData()
</script>

<template>
    <VPSidebar :open="isSidebarOpen"></VPSidebar>
</template>

<style scoped></style>
