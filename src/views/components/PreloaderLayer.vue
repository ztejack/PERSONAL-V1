<template>
  <div v-if="loading" id="preloader" class="preloader">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      <IconT />
    </div>
  </div>
</template>
<script setup>
import IconT from "@/views/components/icons/IconT.vue";
defineProps({
  loading: Boolean,
});
</script>

<style>
@import "../../assets/loader.css";
</style>
