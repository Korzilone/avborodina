<template>
  <div class="container-list">
    <ul class="list">
      <li v-for="(task, index) in taskStore.tasks" :key="task.id">
        <div class="list-item">
          <div class="list-item__info" :class="{ 'text-danger': task.isBug }">
            {{ `# ${index + 1}  ${task.value}` }}
          </div>

          <div class="list-item__actions">
            <router-link :to="{ name: 'edittask', params: { id: task.id } }">
              <div class="actions">
                <ui-icon src="edit" class="actions__item"></ui-icon>
              </div>
            </router-link>

            <div class="actions">
              <ui-icon
                src="trash"
                @click="onClick(task.id)"
                class="actions__item"
              ></ui-icon>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import UiIcon from "@/components/UiIcon.vue";
import { useTaskStore } from "@/store/tasks";
const taskStore = useTaskStore();

function onClick(id: string): void {
  taskStore.removeTask(id);
}
</script>

<style lang="scss" scoped>
ul {
  margin: $size0;
  padding: $size0;
  width: $size-width;
  list-style-type: none;
}

.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid $color-border;
  &__info {
    padding: 18px 18px 18px 0px;
  }
  &__actions {
    margin: $size0;
    padding: $size0;
    display: flex;
    align-items: center;
  }
}

.text-danger {
  color: $color-danger;
}
</style>
