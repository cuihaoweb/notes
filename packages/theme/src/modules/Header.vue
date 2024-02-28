<script setup>
import { useData } from 'vitepress';
// import VPNavBarSearch from '../components/VPNavBarSearch.vue';
import SearchBox from '../components/SearchBox.vue';
import Link from '../components/Link.vue';
import SwitchTheme from '../components/SwitchTheme.vue';

const { theme, title, site } = useData();
</script>

<template>
    <header class="header-root flex-row">
        <Link class="flex-row space-row-small" href="/">
            <img class="m-logo-large" :src="theme.logo" />
            <div class="title">{{ site.title }}</div>
        </Link>

        <SearchBox class="flex-1"></SearchBox>

        <SwitchTheme></SwitchTheme>
    </header>
</template>

<style lang="scss" scoped>
.header-root {
    z-index: var(--vp-z-index-nav);
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--m-layout-header-height);
    background-color: var(--m-c-bg-1);
    border-bottom: 1px solid var(--vp-c-divider);
    padding: 0 10px;
}
</style>
