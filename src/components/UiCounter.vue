<template>
  <p>{{ `Задач: ${count} / Багов: ${bugCount}` }}</p>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from "vue";
import { useTaskStore } from "@/store/tasks";
import type { Task } from "@/store/models";
const taskStore = useTaskStore();

const count: ComputedRef<number> = computed(() => taskStore.tasks.length);
const bugCount: ComputedRef<number> = computed(() => {
  return taskStore.tasks.filter((task: Task) => task.isBug).length;
});
</script>
