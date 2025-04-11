<template>
  <div class="container-icon">
    <img :src="link" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

interface Props {
  src: string;
}

const props = defineProps<Props>();

const link = computed(() => {
  return `/src/assets/${props.src}.svg`;
});
</script>

<style lang="scss" scoped></style>
