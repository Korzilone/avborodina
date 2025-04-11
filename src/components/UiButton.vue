<template>
  <div class="btn-container">
    <button :class="[props.color, { disabled: disabled }]" :disabled="disabled">
      <slot name="leftIcon" />
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
button {
  display: flex;
  align-items: center;
  height: $size38;
  border: none;
  border-radius: $border-radius;
  padding: 0 12px 0 12px;
}

.primary {
  &:hover {
    background-color: $color-button-hover-blue;
  }
  background-color: $color-blue;
  color: $color-button-white-text;
}

.secondary {
  &:hover {
    background-color: $color-button-hover-grey;
  }
  background-color: $color-button-grey;
  color: $color-grey;
}
.disabled {
  background: $color-dark-blue;
}
</style>
