<script setup>
import {useData} from 'vitepress';
import {data as articleList} from '../dataList.data.js'

const { frontmatter } = useData()
</script>

<template>
    <pre>{{ articleList }}</pre>
</template>

<style scoped></style>
