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
        v-for="({frontmatter, url}) in qaList"
        @click="handleClick(url)"
    >
        <h1>{{ frontmatter.title }}</h1>
        <p>{{ frontmatter.description }}</p>
    </div>
</template>