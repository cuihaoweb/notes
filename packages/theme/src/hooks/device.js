import { inBrowser } from 'vitepress';
import { onMounted, onUnmounted, reactive } from 'vue';

const deviceInfo = reactive({
    isPc: true,
    isH5: false
});

function handleResize() {
    deviceInfo.isPc = window.innerWidth > 768;
    deviceInfo.isH5 = !deviceInfo.isPc;
}

if (inBrowser) {
    handleResize();
}

/**
 * 获取设备信息
 * @return {typeof deviceInfo}
 */
export function useDevice() {
    

    onMounted(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    })
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    })

    return deviceInfo;
}