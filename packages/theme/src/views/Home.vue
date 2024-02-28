<script setup>
import {useData} from 'vitepress';
import {data as articleList} from '../dataList.data.js'
import Link from '../components/Link.vue';

const { frontmatter } = useData()
</script>

<template>
    <ul class="m-list flex-col">
        <li class="m-item flex-row flex-start w-full"  v-for="item in articleList" :key="item.url">
            <Link :href="item.url" class="flex-1">
                <h3 class="m-article-title">{{ item.frontmatter.title }}</h3>
                <p class="m-article-desc">{{ item.frontmatter.description }}</p>
            </Link>
            <img class="m-img" v-if="item.frontmatter.coverImage" :src="item.frontmatter.coverImage" />
        </li>
    </ul>
</template>

<style scoped></style>
