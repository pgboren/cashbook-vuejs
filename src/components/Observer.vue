<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import { throttle } from 'lodash';

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['intersect']);
const root = ref(null);
const observer = ref(null);

const handleIntersectThrottled = throttle(() => {
  emit('intersect');
}, 200); // Adjust the throttle duration as needed

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      requestAnimationFrame(() => {
        handleIntersectThrottled();
      });
    }
  }, props.options);

  observer.value.observe(root.value);
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div ref="root" style="width: 100%; height: 100%;">
    <!-- Your content goes here -->
  </div>
</template>
