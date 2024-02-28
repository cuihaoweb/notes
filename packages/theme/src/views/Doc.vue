<script setup>
import {ElCol} from 'element-plus'
import Aside from '../modules/Aside.vue';
import {useBoundingClientRect} from '../hooks/screen';
import {data as articleList} from '../dataList.data.js'
import { ref, toRef } from 'vue';

const rootRef = ref(null);
const rootSizeInfo = useBoundingClientRect(rootRef);
</script>

<template>
    <div ref="rootRef" class="home-root flex-row flex-start h-full">
        <ElCol :xs="24" :sm="{span: 18, offset: 1}" :md="{span: 16, offset: 3}" class="content-wrapper">
            <pre>{{ rootSizeInfo.top }}</pre>
            <Content class="vp-doc"></Content>
        </ElCol>

        <ElCol :xs="0" :sm="5">
            <ElCol
                :sm="5" class="aside-wrapper w-full scroll-col"
                :style="{height: `calc(100vh - var(--m-layout-content-margin) - ${rootSizeInfo.top}px)`}"
            >
                <Aside></Aside>
                <Aside></Aside>
                <Aside></Aside>
                <Aside></Aside>
                <Aside></Aside>
                <Aside></Aside>
            </ElCol>
        </ElCol>
    </div>
</template>

<style lang="scss" scoped>
.home-root {
    margin: var(--m-layout-content-margin) auto;

    .content-wrapper {
        background-color: var(--m-c-bg-1);
        border-radius: var(--m-s-br-3);
        padding: 20px 30px;
        min-height: 100%;
    }

    .aside-wrapper {
        position: fixed;
    }
}
</style>
