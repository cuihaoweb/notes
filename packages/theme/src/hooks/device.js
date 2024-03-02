import { store } from '../store';
import { inBrowser } from 'vitepress';
import { onMounted, onUnmounted, reactive } from 'vue';

const deviceInfo = reactive({
    isPc: '',
    isH5: ''
});

// function forceFlush() {
//     deviceInfo.isH5 = !deviceInfo.isH5;
//     deviceInfo.isH5 = !deviceInfo.isH5;
//     deviceInfo.isPc = !deviceInfo.isPC;
//     deviceInfo.isPc = !deviceInfo.isPc;
// }

function handleResize() {
    deviceInfo.isPc = window.innerWidth > 768;
    deviceInfo.isH5 = !deviceInfo.isPc;
    store.device = deviceInfo;
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