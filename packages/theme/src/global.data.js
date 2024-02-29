import fs from 'fs';

export default {
    watch: ['src/public/data.json'],
    async load(watchedFiles) {
        return watchedFiles.map((file) => {
            const res = fs.readFileSync(file, 'utf-8');
            return JSON.parse(res);
        })?.[0] || {};
    }
};