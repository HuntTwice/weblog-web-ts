<template>
    <div>
        <img v-if="!config.layout.menuCollapse" class="logo-img" src="src/assets/logo.png" alt="logo" />
        <div v-if="!config.layout.menuCollapse" :style="{ color: config.getColorVal('menuActiveColor') }" class="website-name">
            {{ siteConfig.siteName }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfig } from '/@/stores/config'
import { useSiteConfig } from '/@/stores/siteConfig'
const config = useConfig()
const siteConfig = useSiteConfig()
</script>

<style scoped></style>
