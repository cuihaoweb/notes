<script setup>
import VPBackdrop from '../components/VPBackdrop.vue'
import VPNav from '../components/VPNav.vue'
import VPSkipLink from '../components/VPSkipLink.vue'
import { useCloseSidebarOnEscape, useSidebar } from '../composables/sidebar'

const {
  isOpen: isSidebarOpen,
  close: closeSidebar
} = useSidebar()

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)
</script>


<template>
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav></VPNav>
</template>


<style scoped></style>
