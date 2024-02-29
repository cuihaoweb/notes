<script setup>
import {store} from '../store';
</script>

<template>
    <div class="author-root m-container w-full flex-col space-col">
        <div class="author-info flex-row space-row">
            <img class="m-logo-large flex-shrink-0" src="/author.jpg" />
            <div class="info flex-col flex-start">
                <h3>CH</h3>
                <p>一个热爱编程的程序员</p>
            </div>
        </div>
        <div class="data-info w-full flex-row flex-around">
            <div class="article-num flex-col">
                <span class="num">{{ store.articleList.length }}</span>
                <span class="text">文章</span>
            </div>
            <div class="star-num flex-col">
                <span class="num">305</span>
                <span class="text">浏览量</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.author-root {
    background-color: var(--m-c-bg-1);

    .m-logo-large {
        border-radius: 100%;
    }
}
</style>
