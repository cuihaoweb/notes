<script setup>
import {ElCol} from 'element-plus'
import Aside from '../modules/Aside.vue';
import {useBoundingClientRect} from '../hooks/screen';
import { ref } from 'vue';

const asideRef = ref(null);
const asideSizeInfo = useBoundingClientRect(asideRef);
</script>

<template>
    <div class="home-root flex-row flex-start h-full">
        <ElCol
            :xs="24" :sm="{span: 18, offset: 1}" :md="{span: 16, offset: 3}"
            class="content-wrapper m-container-large"
        >
            <Content class="vp-doc"></Content>
        </ElCol>

        <ElCol :xs="0" :sm="5">
            <ElCol
                ref="asideRef"
                :sm="5"
                class="aside-wrapper w-full scroll-col"
                :style="{height: `calc(100vh - var(--m-layout-content-margin) - ${asideSizeInfo.y}px)`}"
            >
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
        min-height: 120%;
    }

    .aside-wrapper {
        position: fixed;
    }
}

@media screen and (max-width: 768px) {
    .content-wrapper {
        border-radius: unset;
    }
}
</style>
