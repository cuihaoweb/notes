<script setup>
import { useData } from 'vitepress'
import {ElRow} from 'element-plus'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Doc from './views/Doc.vue';
import Header from './modules/Header.vue'

const { frontmatter } = useData()
</script>

<template>
    <div class="layout-root-wrapper flex-col">
        <Header></Header>

        <main class="flex-1 w-full">
            <Home v-if="frontmatter.layout === 'home'"></Home>
            <Detail v-else-if="frontmatter.layout === 'detail'"></Detail>
            <Doc v-else></Doc>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.layout-root-wrapper {
	padding-top: var(--m-layout-header-height);
	box-sizing: border-box;
	width: 100vw;
	min-height: 100vh;
}
</style>
