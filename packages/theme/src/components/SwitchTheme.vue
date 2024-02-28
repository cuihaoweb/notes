<script setup>
import { useData } from 'vitepress';
import { inject, computed } from 'vue'
import Switch from './Switch.vue'

const { isDark, theme } = useData()

const toggleAppearance = inject('switch-theme', () => {
    isDark.value = !isDark.value
})
</script>

<template>
    <Switch
        :title="switchTitle"
        class="VPSwitchAppearance"
        @click="toggleAppearance"
    >
        <span class="vpi-sun sun" />
        <span class="vpi-moon moon" />
    </Switch>
</template>

<style scoped>
.sun {
    opacity: 1;
}

.moon {
    opacity: 0;
}

.dark .sun {
    opacity: 0;
}

.dark .moon {
    opacity: 1;
}

.dark .VPSwitchAppearance :deep(.check) {
    transform: translateX(18px);
}
</style>
