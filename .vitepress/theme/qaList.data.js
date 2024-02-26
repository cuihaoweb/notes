import { createContentLoader } from 'vitepress';

export default createContentLoader(['src/qa/**/*.md'], {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        console.log(`🚀 ~ file: qaList.data.js:8 ~ transform ~ rawData:`, rawData);
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
        }).map((page) => {
            return {
                ...page
            };
        });
    }
});