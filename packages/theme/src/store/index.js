import {reactive} from 'vue'

export const store = reactive({
    curArticleCategory: 'all',
    articleList: [],
    files: []
});