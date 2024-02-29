<script setup>
import { onContentUpdated, useData } from 'vitepress'
import { ref, shallowRef } from 'vue'
import {getHeaders, useActiveAnchor} from '../hooks/outline';
import VPDocOutlineItem from './OutLineItem.vue'

const { frontmatter, theme } = useData()
const headers = shallowRef([])
const container = ref()
const marker = ref()

onContentUpdated(() => {
    headers.value = getHeaders(1)
})

useActiveAnchor(container, marker);
</script>

<template>
    <div class="VPDocAsideOutline m-container" :class="{ 'has-outline': headers.length > 0 }" ref="container" role="navigation">
        <div class="content">
            <div class="outline-title" role="heading" aria-level="2">On this page</div>

            <nav aria-labelledby="doc-outline-aria-label">
                <VPDocOutlineItem :headers="headers" :root="true" />
            </nav>

            <div class="outline-marker" ref="marker" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
$title-height: 32px;

.VPDocAsideOutline {
  display: none;
  background-color: var(--m-c-bg-1);
}

.VPDocAsideOutline.has-outline {
  display: block;
}

.content {
    position: relative;
    border-left: 1px solid var(--vp-c-divider);
    font-weight: 500;
    padding-left: 10px;
}

.outline-title {
    line-height: $title-height;
    font-size: 14px;
    font-weight: 600;
}

.outline-marker {
    position: absolute;
    top: 0;
    left: -1px;
    width: 2px;
    border-radius: 2px;
    transform: translateY($title-height + 9px);
    height: 18px;
    background-color: var(--vp-c-brand-1);
    transition:
        top 0.25s cubic-bezier(0, 1, 0.5, 1),
        background-color 0.5s;
}
</style>
