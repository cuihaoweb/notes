<script setup>
import {useData} from 'vitepress';
import {ElCol} from 'element-plus'
import Aside from '../modules/Aside.vue';
import {useBoundingClientRect} from '../hooks/screen';
import { computed, ref } from 'vue';
import dayjs from 'dayjs'

const {title, frontmatter, page} = useData();
const asideRef = ref(null);
const asideSizeInfo = useBoundingClientRect(asideRef);

const datetime = computed(() => {
    const date = page.value.lastUpdated ? new Date(page.value.lastUpdated) : new Date();
    return dayjs(date).format('YYYY-MM-DD HH:mm');
});
</script>

<template>
    <div class="home-root flex-row flex-start h-full">
        <ElCol
            :xs="24" :sm="{span: 18, offset: 1}" :md="{span: 16, offset: 3}"
            class="content-wrapper m-container-large"
        >
            <div class="page-info-wrap flex-col">
                <h1 class="doc-title">{{ title }}</h1>
                <span class="datetime">更新于：{{ datetime }}</span>
            </div>
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
        min-height: 110%;

        .page-info-wrap {
            padding: 20px 0 100px;

            .doc-title {
                text-align: center;
                line-height: 1.5;
                font-size: 32px;
                font-weight: 700;
            }

            .datetime {
                margin: 10px 0;
            }
        }
    }

    .aside-wrapper {
        position: fixed;
    }
}

@media (max-width: 768px) {
    .home-root  {
        .content-wrapper {
            border-radius: unset;

            .page-info-wrap {
                padding: 10px 0 40px;
            }
        }
    }
}
</style>
