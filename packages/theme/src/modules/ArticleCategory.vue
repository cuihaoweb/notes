<script setup>
import {data} from '../global.data.js'
import { store } from '../store';

function handleClick(item, index) {
    store.curArticleCategory = item.value;
    window.scrollTo({top: 0, behavior: "smooth"});
}
</script>

<template>
    <div class="article-category-root">
        <ul class="m-article m-list" >
            <li
                v-for="(item, index) in data.files"
                :key="index"
                :data-value="item.value"
                class="m-article-item m-list-item"
                @click="handleClick(item, index)"
            >{{ item.label }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.article-category-root {
    padding: 0 10px;

    .m-article-item {
        cursor: pointer;
    }
}
</style>