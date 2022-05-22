<script setup lang="ts">
  import { storageDemo } from '~/logic/storage'
</script>

<template>
  <ve-app>
    <ve-main>
      <ve-container>
        <img src="/assets/icon.svg" class="mx-2" alt="extension icon">
        <div>Options</div>
        <p class="mt-2">
          This is the options page
        </p>

        <ve-input v-model="storageDemo" class="mt-2" />

        <div class="mt-4">
          Powered by Vite
        </div>
      </ve-container>
    </ve-main>
  </ve-app>
</template>
