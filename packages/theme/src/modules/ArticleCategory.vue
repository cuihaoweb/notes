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
        <div class="m-container-small">
            <h3 class="m-article-sub-title">文章分类</h3>
            <ul class="m-article m-list" >
                <li
                    v-for="(item, index) in data.files"
                    :key="index"
                    :data-value="item.value"
                    class="m-article-item m-article-desc m-list-item"
                    @click="handleClick(item, index)"
                >{{ item.label }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.article-category-root {
    padding: 0 10px;

    .m-container-small {
        background-color: var(--m-c-bg-1);
    }
    
    .m-article-title {
        background-color: var(--m-c-bg-1);
    }

    .m-article-item {
        cursor: pointer;
    }
}
</style>