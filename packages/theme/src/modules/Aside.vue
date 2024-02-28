<script setup>
import {ElAffix} from 'element-plus';
import Author from './Author.vue';
// import {onMounted, ref} from 'vue';

// const rootRef = ref(null);
// const affixRef = ref(null);
// const affixOffset = ref(0);

// onMounted(() => {
//     const {top} = rootRef.value.getBoundingClientRect();
//     affixOffset.value = top;
//     affixRef.value.update();
//     affixRef.value.updateRoot();
// })
</script>


<template>
    <aside class="aside-root">
        <Author></Author>
    </aside>
</template>


<style lang="scss" scoped>
.aside-root {
    padding: 0 10px;
}
</style>
