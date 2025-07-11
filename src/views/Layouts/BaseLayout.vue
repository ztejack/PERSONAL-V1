<template>
  <div ref="layoutRef" class="layout h-screen">
    <!-- Main Content -->
    <PreloaderLayer :loading="loading" />
    <main id="root" :class="{ invisible: loading }" class="layout">
      <BaseNavbar />
      <GlowMouse v-if="layoutRef" :layer="layoutRef" />
      <SideSocialLink />
      <SideEmailLink />
      <div class="main mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script setup>
import { usePreloader } from "@/utils/usePreloader";
import PreloaderLayer from "@/views/components/PreloaderLayer.vue";
import BaseNavbar from "@/views/components/BaseNavbar.vue";
import SideSocialLink from "@/views/components/SideSocialLink.vue";
import SideEmailLink from "@/views/components/SideEmailLink.vue";
import GlowMouse from "@/views/components/GlowMouse.vue";
import { ref } from "vue";

const layoutRef = ref(null);
const { loading } = usePreloader();
</script>
