<script setup>
import { useRouter, useData } from 'vitepress';
import { data as qaList } from '../qaList.data.js';

const router = useRouter();

const handleClick = (url) => {
    router.go(url);
};
</script>

<template>
    <div
        v-for="item in qaList"
        @click="handleClick(url)"
    >
        <pre>{{ item }}</pre>
        <h1>{{ item.frontmatter.title }}</h1>
        <p>{{ item.frontmatter.description }}</p>
    </div>
</template>