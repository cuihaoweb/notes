<script setup>
import {ref} from 'vue'
import { useData } from '../composables/data'
import SearchPanel from './SearchPanel.vue'
import SearchButton from './SearchButton.vue'

const { theme } = useData()
const showSearch = ref(false)
</script>

<template>
    <div class="VPNavBarSearch">
        <template v-if="theme?.search?.provider === 'local'">
            <div id="local-search">
                <SearchButton @click="showSearch = true" />
            </div>

            <SearchPanel v-if="showSearch" @close="showSearch = false" />
        </template>
    </div>
</template>

<style>
.VPNavBarSearch {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .VPNavBarSearch {
    flex-grow: 1;
    padding-left: 24px;
  }
}

@media (min-width: 960px) {
  .VPNavBarSearch {
    padding-left: 32px;
  }
}

.dark .DocSearch-Footer {
  border-top: 1px solid var(--vp-c-divider);
}

.DocSearch-Form {
  border: 1px solid var(--vp-c-brand-1);
  background-color: var(--vp-c-white);
}

.dark .DocSearch-Form {
  background-color: var(--vp-c-default-soft);
}

.DocSearch-Screen-Icon > svg {
  margin: auto;
}
</style>
