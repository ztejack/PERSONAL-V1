<template>
  <div ref="glowRef" class="glow">
    <div class="glow-dot glow-dot--one"></div>
    <div class="glow-dot glow-dot--two"></div>
  </div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";

const props = defineProps({
  layer: {
    type: [String, Object],
    required: false,
  },
});

const glowRef = ref(null);
let layerEl = null;

const onMouseMove = (event) => {
  const glow = glowRef.value;
  if (!layerEl || !glow) return;

  const rect = layerEl.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  glow.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${offsetX}, ${offsetY}, 0, 1)`;
};
onMounted(() => {
  if (!props.layer) return // jika null, abaikan

  layerEl = typeof props.layer === 'string'
    ? document.querySelector(props.layer)
    : props.layer?.$el || props.layer

  if (layerEl) {
    layerEl.addEventListener('mousemove', onMouseMove)
  }
})

onBeforeUnmount(() => {
  if (layerEl) {
    layerEl.removeEventListener("mousemove", onMouseMove);
  }
});
</script>
