<script setup>
import { toRef } from 'vue';
import {data} from '../global.data.js'
import { store } from '../store';
import { useDevice } from '../hooks/device';

const isPc = toRef(useDevice(), 'isPc');

function handleClick(item, index) {
    store.curArticleCategory = item.value;
    window.scrollTo({top: 0, behavior: "smooth"});
}
</script>

<template>
    <div  :class="['article-category-root', isPc ? 'pc' : 'h5 full']">
        <div :class="[isPc ? 'm-container-small' : 'full']">
            <h3 v-if="isPc" class="m-article-sub-title">文章分类</h3>
            <ul :class="['article-list', isPc ? 'm-article m-list' : 'full flex-row']" >
                <li
                    v-for="(item, index) in data.files"
                    :key="index"
                    :data-value="item.value"
                    :class="['item h-full m-article-desc', isPc ? 'm-article-item m-list-item' : 'flex-row']"
                    @click="handleClick(item, index)"
                >{{ item.label }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.article-category-root {
    &.h5 {
        background-color: var(--m-c-bg-1);

        .m-article-desc {
            padding: 0 20px;
            cursor: pointer;
        }
    }

    &.pc {
        padding: 0 10px;

        .m-container-small {
            background-color: var(--m-c-bg-1);
        }
    }

    .item {
        &:hover {
            background-color: var(--m-c-bg-2);
        }
    }

    .m-article-title {
        background-color: var(--m-c-bg-1);
    }

    .m-article-item {
        cursor: pointer;
    }
}
</style>