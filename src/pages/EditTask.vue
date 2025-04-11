<template>
  <div class="container-edittask">
    <div>
      <ui-logo
        class="logo"
        src="Vector"
        size="small"
        title="Задачник"
      ></ui-logo>

      <ui-input
        type="text"
        :value="inputValue"
        class="container-edittask__item"
        placeholder="Тестовая задача"
        @input="input"
      ></ui-input>
      <ui-checkbox
        :value="checkBoxValue"
        class="container-edittask__item"
        label="Является багом"
        @input="checkbox"
      ></ui-checkbox>
    </div>

    <div class="btn">
      <div class="btn__left">
        <router-link :to="{ name: 'home' }">
          <ui-button color="secondary"> Вернуться </ui-button>
        </router-link>
      </div>
      <div class="btn__right">
        <ui-button color="secondary">
          <template v-slot:leftIcon>
            <ui-icon
              src="trash"
              @click="onClickRemove"
              class="actions__item"
            ></ui-icon>
          </template>
        </ui-button>
        <ui-button color="primary" @click="onClickEdit">Сохранить</ui-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useTaskStore } from "@/store/tasks";
import { ref, type Ref } from "vue";

import UiLogo from "@/components/UiLogo.vue";
import UiIcon from "@/components/UiIcon.vue";
import UiInput from "@/components/UiInput.vue";
import UiCheckbox from "@/components/UiCheckbox.vue";
import UiButton from "@/components/UiButton.vue";

const taskStore = useTaskStore();
const route = useRoute();
const router = useRouter();
const id: string = route.params.id as string;
const inputValue: Ref<string> = ref("");
const checkBoxValue: Ref<boolean> = ref(false);
inputValue.value = getTaskValue();
checkBoxValue.value = isBug();

function onClickRemove(): void {
  taskStore.removeTask(id);
  router.push({ name: "home" });
}

function getTaskValue(): string {
  return taskStore.getTaskValueById(id);
}

function isBug(): boolean {
  return taskStore.isBug(id);
}

function onClickEdit(): void {
  taskStore.editTask(id, inputValue.value, checkBoxValue.value);
  router.push({ name: "home" });
}

function input(value: string): void {
  inputValue.value = value;
}

function checkbox(value: boolean): void {
  checkBoxValue.value = value;
}
</script>

<style lang="scss" scoped>
.container-edittask {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  margin: 8px 0px 8px;
  &__item {
    margin-top: $size20;
  }
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: $size20;
  &__right {
    display: flex;
    gap: $size8;
  }
}

.logo {
  margin-bottom: $size57;
}
</style>
