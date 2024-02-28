import { onBeforeUnmount, shallowRef } from 'vue';
import { throttledWatch } from '@vueuse/core';
import { inBrowser } from 'vitepress';

/**
 * @param {import('vue').Ref} domRef
 * @return {import('vue').Ref}
 */
export function useBoundingClientRect(domRef) {
    const height = shallowRef({});

    if (inBrowser) {
        throttledWatch(domRef, handleResize, {throttle: 20, immediate: true})
        window.addEventListener('resize', handleResize);
        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize)
        })
    }

    function handleResize() {
        if (!domRef.value) return;
        const info = domRef.value.getBoundingClientRect();
        height.value = info;
    }

    return height;
}