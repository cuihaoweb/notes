<script setup>
import { useData } from 'vitepress';
import VPNavBarSearch from '../components/VPNavBarSearch.vue';
import SearchBox from '../components/SearchBox.vue';
import Link from '../components/Link.vue';

const { theme, title, site } = useData();
</script>

<template>
    <header class="header-root">
        <div class="header">
            <Link class="flex-row space-row-small" href="/">
                <img class="logo" :src="theme.logo" />
                <div class="title">{{ site.title }}</div>
            </Link>
            <SearchBox></SearchBox>
            <ul class="nav-list">
                <li class="nav-item"><nav></nav></li>
            </ul>
            <div class="menu"></div>
        </div>

        <div class="split"></div>
    </header>
</template>

<style lang="scss" scoped>
.header-root {
    z-index: var(--vp-z-index-nav);
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--m-layout-header-height);
    background-color: var(--vp-c-bg);
    display: flex;
    flex-flow: column nowrap;

    .header {
        flex: 1;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        .logo {
            width: 24px;
            height: 24px;
        }
    }

    .split {
        height: 1px;
        width: 100%;
        background-color: var(--vp-c-divider);
    }
}
</style>
