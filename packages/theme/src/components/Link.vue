<script lang="ts" setup>
import { computed } from 'vue'
import { EXTERNAL_URL_RE, normalizeLink } from '../support/util'

const props = defineProps({
    href: {
        type: String,
        required: true
    },
    tag: String,
    target: String
})

const tag = computed(() => props.tag || (props.href ? 'a' : 'span'))
const isExternal = computed(() => props.href && EXTERNAL_URL_RE.test(props.href))
</script>

<template>
  <component
        :is="tag"
        :class="{
            VPLink: true,
            link: href,
            'vp-external-link-icon': isExternal,
        }"
        :href="href ? normalizeLink(href) : undefined"
        :target="target ?? (isExternal ? '_blank' : undefined)"
    >
        <slot />
    </component>
</template>
