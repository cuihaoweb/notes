<script setup>
import { useData } from 'vitepress'
import {ElRow, ElCol} from 'element-plus'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Header from './modules/Header.vue'

const { frontmatter } = useData()
</script>

<template>
    <div class="layout-root-wrapper">
        <Header></Header>
		
        <ElRow style="flex: 1;" justify="center">
            <ElCol :xs="0" :sm="5"><div style="position: fixed;">sider</div></ElCol>

            <ElCol :xs="24" :sm="14">
				<div style="padding: 20px 0;">
					<Home v-if="frontmatter.layout === 'home'"></Home>
					<Detail v-else-if="frontmatter.layout === 'detail'"></Detail>
					<Content v-else style="padding: 20px 0;" class="vp-doc"></Content>
				</div>
			</ElCol>

            <ElCol :xs="0" :sm="5"><div style="position: fixed;">aside</div></ElCol>
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
