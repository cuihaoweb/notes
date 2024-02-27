<script setup lang="ts">
import NotFound from '../NotFound.vue'
import { useData } from '../composables/data'
import { useSidebar } from '../composables/sidebar'
import VPDoc from './VPDoc.vue'
import VPHome from './VPHome.vue'
import VPPage from './VPPage.vue'

const { page, frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
    <div
        class="VPContent"
        id="VPContent"
        :class="{
      'has-sidebar': hasSidebar,
      'is-home': frontmatter.layout === 'home'
    }"
    >
        <NotFound v-if="page.isNotFound" />

        <VPPage v-else-if="frontmatter.layout === 'page'"></VPPage>

        <!-- <VPHome v-else-if="frontmatter.layout === 'home'"></VPHome> -->

        <component v-else-if="frontmatter.layout && frontmatter.layout !== 'doc'" :is="frontmatter.layout" />

        <VPDoc v-else></VPDoc>
    </div>
</template>

<style scoped>
.VPContent {
  flex-grow: 1;
  flex-shrink: 0;
  margin: var(--vp-layout-top-height, 0px) auto 0;
  width: 100%;
}

.VPContent.is-home {
  width: 100%;
  max-width: 100%;
}

.VPContent.has-sidebar {
  margin: 0;
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: var(--vp-nav-height);
  }

  .VPContent.has-sidebar {
    margin: var(--vp-layout-top-height, 0px) 0 0;
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2);
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}
</style>
