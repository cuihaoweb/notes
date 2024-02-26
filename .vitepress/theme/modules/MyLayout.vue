<script setup>
import DefaultTheme from 'vitepress/theme';
import { useRouter, useData } from 'vitepress';
import Home from './Home.vue';
import { data as qaList } from '../qaList.data.js';

const router = useRouter();
const {frontmatter} = useData();

const handleClick = (url) => {
    router.go(url);
};
</script>

<template>
    <DefaultTheme.Layout>
        <template #home-hero-info>
            <pre>{{ frontmatter }}</pre>
            <Home></Home>
        </template>
        <template #sidebar-nav-before>
            <h1>hello</h1>
        </template>
    </DefaultTheme.Layout>
</template>
