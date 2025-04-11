<template>
  <div class="container-newtask">
    <div>
      <ui-logo
        class="logo"
        src="Vector"
        size="small"
        title="Задачник"
      ></ui-logo>
      <ui-input
        value=""
        type="text"
        class="container__item"
        placeholder="Введите название"
        @input="input"
      >
        <template v-slot:title>
          <p class="title">Название задачи</p>
        </template>
        <template v-slot:subtitle>
          <p class="subtitle">Будет отображаться на главной странице</p>
        </template>
      </ui-input>

      <ui-checkbox
        label="Является багом"
        :value="checkBoxValue"
        class="container__item"
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
        <ui-button
          :disabled="inputValue.length == 0"
          primary
          color="primary"
          @click="onClick"
          >Создать</ui-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiLogo from "@/components/UiLogo.vue";
import UiInput from "@/components/UiInput.vue";
import UiCheckbox from "@/components/UiCheckbox.vue";
import UiButton from "@/components/UiButton.vue";
import { useRouter } from "vue-router";
import { ref, type Ref } from "vue";
import { useTaskStore } from "@/store/tasks";

const router = useRouter();
const taskStore = useTaskStore();
let inputValue: Ref<string> = ref("");
let checkBoxValue: Ref<boolean> = ref(false);

function onClick(): void {
  taskStore.addNewTask(inputValue.value, checkBoxValue.value);
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
.container-newtask {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: $size8;
  min-height: 100%;
}

.container__item {
  margin-top: $size20;
}

.btn {
  display: flex;
  justify-content: space-between;
  margin-top: $size20;
}

.subtitle {
  display: flex;
  font-size: $font-size-12;
  color: $color-input-subtitle;
  margin-top: $size8;
}

.title {
  display: flex;
  margin-bottom: $size8;
  color: $color-input-title;
}

.logo {
  margin-bottom: $size57;
}
</style>
