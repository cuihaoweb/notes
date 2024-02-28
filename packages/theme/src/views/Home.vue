<script setup>
import {ElCol} from 'element-plus'
import {data as articleList} from '../dataList.data.js'
import Link from '../components/Link.vue';
</script>

<template>
    <div class="home-root flex-row flex-start w-full">
        <ElCol :xs="0" :sm="5"><div style="position: fixed;">sider</div></ElCol>

        <ElCol tag="ul" :xs="24" :sm="14" class="m-article m-list flex-col">
            <li class="m-item-large m-article-item flex-row flex-start w-full"  v-for="item in articleList" :key="item.url">
                <Link :href="item.url" class="flex-1">
                    <h3 class="m-article-title">{{ item.frontmatter.title }}</h3>
                    <p class="m-article-desc">{{ item.frontmatter.description }}</p>
                </Link>
                <img class="m-img" v-if="item.frontmatter.coverImage" :src="item.frontmatter.coverImage" />
            </li>
        </ElCol>

        <ElCol :xs="0" :sm="5"><div style="position: fixed;">aside</div></ElCol>
    </div>
</template>

<style scoped>
.home-root {
    margin: var(--m-layout-content-margin) auto;
}
</style>
