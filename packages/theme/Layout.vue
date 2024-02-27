<script setup>
import { useRoute } from 'vitepress'
import { computed, provide, useSlots, watch } from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Detail from './views/Detail.vue'
import Header from './modules/Header.vue'
import Footer from './modules/Footer.vue'
import { useData } from './composables/data'
import { useCloseSidebarOnEscape, useSidebar } from './composables/sidebar'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()

const slots = useSlots()
const heroImageSlotExists = computed(() => !!slots['home-hero-image'])

provide('hero-image-slot-exists', heroImageSlotExists)
</script>

<template>
    <div class="Layout" :class="frontmatter.pageClass">
        <Header></Header>

        <Home v-if="frontmatter.layout === 'home'"></Home>
        <Detail v-if="frontmatter.layout === 'detail'"></Detail>
        <Doc v-else></Doc>

        <Footer></Footer>
    </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
