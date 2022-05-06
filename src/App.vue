<script setup lang="ts">
import { DButton } from "./lib";
import { ref } from "vue";
const loading = ref(false);
function onclick() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
}
</script>

<template>
  <h1>DDesign</h1>
  <p>DButton</p>
  <d-button type="primary">Primary Button</d-button>
  <d-button>Default Button</d-button>
  <d-button type="danger">Danger Button</d-button>
  <p>DButton disabled</p>
  <d-button type="primary" disabled>Primary Button</d-button>
  <d-button disabled>Default Button</d-button>
  <d-button type="danger" disabled>Danger Button</d-button>
  <p>DButton size</p>
  <d-button type="primary" size="small">Primary Button</d-button>
  <d-button>Default Button</d-button>
  <d-button type="danger" size="large">Danger Button</d-button>
  <p>DButton loading</p>
  <d-button :loading="loading" @click="onclick" type="primary"
    >Primary Button</d-button
  >
</template>

<style></style>
