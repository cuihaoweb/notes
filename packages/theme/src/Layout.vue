<script setup>
import { useRoute, useData } from 'vitepress'
import { shallowRef, ref, watch, markRaw } from 'vue'
import localSearchIndex from '@localSearchIndex'
import {ElRow, ElCol} from 'element-plus'
import MiniSearch from 'minisearch';
import {computedAsync, watchDebounced} from '@vueuse/core'
import Home from './views/Home.vue'
// import Doc from './views/Doc.vue'
import Detail from './views/Detail.vue'
import Header from './modules/Header.vue'
// import Footer from './modules/Footer.vue'
// import { useData } from './composables/data'
// import { useCloseSidebarOnEscape, useSidebar } from './composables/sidebar'
const {localeIndex, theme} = useData();
const searchIndexData = shallowRef(localSearchIndex)
const searchValue = ref('');

const miniSearch = computedAsync(async () => {
	const documentId = (await searchIndexData.value[localeIndex.value]?.())?.default
	const miniSearch = MiniSearch.loadJSON(
		documentId,
		{
			fields: ['title', 'titles', 'text'],
			storeFields: ['title', 'titles'],
			searchOptions: {
				fuzzy: 0.6,
				prefix: true,
				boost: { title: 4, text: 2, titles: 1 }
			}
		}
	)
	return markRaw(miniSearch);
});

watchDebounced(searchValue, (value) => {
	const res = miniSearch.value.search(value)
}, {debounce: 300, maxWait: 1000})
// const {
//   isOpen: isSidebarOpen,
//   open: openSidebar,
//   close: closeSidebar
// } = useSidebar()

// const route = useRoute()
// watch(() => route.path, closeSidebar)

// useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()

// const slots = useSlots()
// const heroImageSlotExists = computed(() => !!slots['home-hero-image'])

// provide('hero-image-slot-exists', heroImageSlotExists)
</script>

<template>
    <div class="layout-root-wrapper">
        <Header></Header>
		
        <ElRow style="flex: 1;" justify="center" :gutter="20">
            <ElCol :span="5"><div style="position: fixed;">sider</div></ElCol>

            <ElCol :span="12">
				<div style="padding: 20px 0;">
					<Home v-if="frontmatter.layout === 'home'"></Home>
					<Detail v-else-if="frontmatter.layout === 'detail'"></Detail>
					<Content v-else style="padding: 20px 0;" class="vp-doc"></Content>
				</div>
			</ElCol>

            <ElCol :span="5"><div style="position: fixed;">aside</div></ElCol>
        </ElRow>

        <ElRow style="padding: 20px 0;" justify="center">footer</ElRow>
    </div>
</template>

<style lang="scss" scoped>
.layout-root-wrapper {
	padding-top: var(--m-layout-header-height);
	box-sizing: border-box;
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	overflow-y: scroll;
	display: flex;
	flex-flow: column nowrap;
}
</style>
