<template>
  <div class="container-logo">
    <ui-icon :src="props.src"></ui-icon>
    <p :class="props.size">{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import UiIcon from "@/components/UiIcon.vue";

interface Props {
  src: string;
  title: string;
  size: "small";
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
img {
  margin-top: $size57;
}
.small {
  font-size: $font-size-20;
}
</style>
