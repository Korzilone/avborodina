<template>
  <ui-logo class="logo" src="Vector" size="small" title="Задачник" />
  <div class="container-list">
    <div>
      <ui-list class="list"> </ui-list>
    </div>

    <div>
      <ui-counter></ui-counter>
      <router-link :to="{ name: 'newtask' }">
        <ui-button class="btn" color="primary">
          <template v-slot:leftIcon>
            <ui-icon src="plus_primary" class="actions__item"></ui-icon>
          </template>
          Добавить задачу
        </ui-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiLogo from "@/components/UiLogo.vue";
import UiList from "@/components/UiList.vue";
import UiIcon from "@/components/UiIcon.vue";
import UiButton from "@/components/UiButton.vue";
import UiCounter from "@/components/UiCounter.vue";
</script>

<style lang="scss" scoped>
.container-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
}

.subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: $font-size-12;
  color: $color-input-subtitle;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-size: $font-size-14;
  color: $color-input-title;
}

.btn {
  margin-top: $size8;
}
</style>
