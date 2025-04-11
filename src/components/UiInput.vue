<template>
  <div class="container">
    <div class="container-input">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <input
        :value="props.value"
        :type="props.type"
        :class="$style.input"
        :placeholder="props.placeholder"
        @input="handleEvent"
      />
      <div class="subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  placeholder?: string;
  value: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  input: [value: string];
}>();

function handleEvent(e: Event): void {
  const target = e.target as HTMLTextAreaElement;
  emit("input", target.value);
}
</script>

<style lang="scss" module>
.input {
  width: 411px;
  height: 50px;
  outline: none;
  border-radius: 4px;
  border: 1px solid $color-input-border;
  &:focus {
    border: 1px solid $color-blue;
  }
}
</style>
