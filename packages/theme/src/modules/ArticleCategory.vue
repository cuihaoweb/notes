<script setup>
import { toRef } from 'vue';
import {data} from '../global.data.js'
import {classes} from '../support/util';
import { store } from '../store';

const device = toRef(store, 'device')

function handleClick(item, index) {
    store.curArticleCategory = item.value;
    window.scrollTo({top: 0, behavior: "smooth"});
}
</script>

<template>
    <div  :class="classes('article-category-root', 'pc', 'h5 full')">
        <div :class="classes('', 'm-container-small', 'full')">
            <h3 v-if="device.isPc" class="m-article-sub-title">文章分类</h3>
            <ul :class="classes('', 'm-article m-list', 'full flex-row')" >
                <li
                    v-for="(item, index) in data.files"
                    :key="index"
                    :data-value="item.value"
                    :class="classes('item h-full m-article-desc', 'm-article-item m-list-item', 'flex-row')"
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