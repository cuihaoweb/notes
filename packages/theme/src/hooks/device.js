import { inBrowser } from 'vitepress';
import { onMounted, onUnmounted, reactive } from 'vue';

const deviceInfo = reactive({
    isPc: false,
    isH5: true
});

/**
 * 获取设备信息
 * @return {typeof deviceInfo}
 */
export function useDevice() {
    function handleResize() {
        deviceInfo.isPc = window.innerWidth > 768;
        deviceInfo.isH5 = !deviceInfo.isPc;
        console.log(`🚀 ~ file: device.js:10 ~ handleResize ~ deviceInfo:`, deviceInfo);
    }

    onMounted(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    })
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    })

    return deviceInfo;
}