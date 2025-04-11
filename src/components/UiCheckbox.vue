<template>
  <div class="container-checkbox">
    <input type="checkbox" :checked="props.value" @input="handleEvent" />
    <p>{{ props.label }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, type Ref } from "vue";

interface Props {
  label: string;
  value: boolean;
}

const props = defineProps<Props>();
let value: Ref<boolean> = ref(props.value);

const emit = defineEmits<{
  input: [value: boolean];
}>();

function handleEvent(): void {
  value.value = !value.value;
  emit("input", value.value);
}
</script>

<style scoped lang="scss">
input {
  width: $size18;
  height: $size18;
  margin: $size0;
  border-radius: $border-radius;
  accent-color: $color-blue;
}

p {
  margin: $size0;
}
.container-checkbox {
  display: flex;
  gap: $size8;
}
</style>
