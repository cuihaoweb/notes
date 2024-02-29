<script setup>
import {ElCol, ElPagination} from 'element-plus'
import Link from '../components/Link.vue';
import Aside from '../modules/Aside.vue';
import { computed, markRaw, ref } from 'vue';
import {useBoundingClientRect} from '../hooks/screen';
import ArticleCategory from '../modules/ArticleCategory.vue';
const asideRef = ref(null);
const asideSizeInfo = useBoundingClientRect(asideRef);
import {store} from '../store';

const pageSize = markRaw(8);
const pageIndex = ref(1);

const fitCategoryArticleList = computed(() => {
    const retList = store.articleList.map(item => {
        const {url} = item || {};
        const [_, category] = url.match(/\/(.*?)\/(?:.*?\.html)$/i);
        const articleCategory = [].concat(store.curArticleCategory)

        if (['all', category].find((item) => articleCategory.includes(item))) {
            return {...item}
        }
    }).filter(Boolean);
    return retList;
})

const realArticleList = computed(() => {
    return fitCategoryArticleList.value.slice(
        pageSize * (pageIndex.value - 1),
        pageSize * pageIndex.value
    );
});

function handlePaginationChange(index) {
    pageIndex.value = index;
    window.scrollTo({top: 0, behavior: "smooth"});
}
</script>


<template>
    <div class="home-root flex-row flex-start w-full">
        <ElCol :xs="0" :sm="5">
            <ElCol
                :sm="5"
                class="aside-wrapper w-full scroll-col space-col"
                :style="{height: `calc(100vh - var(--m-layout-content-margin) - ${asideSizeInfo.y}px)`}"
            >
                <ArticleCategory></ArticleCategory>
            </ElCol>
        </ElCol>

        <ElCol :xs="24" :sm="14" class="content-box flex-col">
            <ul class="m-article m-list">
                <li class="m-list-item-large m-article-item flex-row flex-start w-full"  v-for="item in realArticleList" :key="item.url">
                    <Link :href="item.url" class="flex-1">
                        <h3 class="m-article-title">{{ item.title }}</h3>
                        <p class="m-article-desc">{{ item.description }}</p>
                    </Link>
                    <img class="m-img" v-if="item.coverImage" :src="item.coverImage" />
                </li>
            </ul>
            <ElPagination
                class="el-pagination"
                background
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="fitCategoryArticleList.length"
                @current-change="handlePaginationChange"
            />
        </ElCol>

        <ElCol :xs="0" :sm="5">
            <ElCol
                ref="asideRef"
                :sm="5"
                class="aside-wrapper w-full scroll-col space-col"
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

    .content-box {
        background-color: var(--m-c-bg-1);

        .el-pagination {
            padding: 20px 0;
            justify-content: center;
        }
    }

    .aside-wrapper {
        position: fixed;
    }
}
</style>
