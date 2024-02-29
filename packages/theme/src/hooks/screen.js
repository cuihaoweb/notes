import { onBeforeUnmount, shallowRef, watch } from 'vue';
import {useThrottleFn, useDebounceFn } from '@vueuse/core';
import { inBrowser } from 'vitepress';

/**
 * @param {import('vue').Ref} domRef
 * @return {import('vue').Ref}
 */
export function useBoundingClientRect(domRef) {
    const height = shallowRef({});

    const handleResize = useDebounceFn((domRef) => {
        const el = domRef.value?.$el || domRef.value;
        if (!el) return;
        const info = el.getBoundingClientRect();
        height.value = info;
    }, 30, {maxWait: 60})
    const handlerResize = () => handleResize(domRef);

    if (inBrowser) {
        watch(domRef, handlerResize, {immediate: true})
        window.addEventListener('resize', handlerResize);
        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize)
        })
    }

    return height;
}