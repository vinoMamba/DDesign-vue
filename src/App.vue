<script setup lang="ts">
import { DButton } from "./lib";
function onclick() {
  console.log("click");
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
</template>

<style></style>
