import { createContentLoader } from 'vitepress';
import fs from 'node:fs';
import path from 'node:path';


export default createContentLoader(['src/(qa|articles|css|nginx|react|vue|nodejs|docker)/**/*.md'], {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.map(item => {
            const {url} = item || {};
            const filename = path.join(process.cwd(), 'src', url.replace(/\.html$/i, '.md'));
            const {mtime} = fs.statSync(filename);
            return {
                ...item,
                lastUpdated: +new Date(mtime)
            };
        }).sort((a, b) => {
            return b.lastUpdated - a.lastUpdated;
        });
    }
});