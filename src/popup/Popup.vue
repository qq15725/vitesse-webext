<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <ve-app>
    <ve-main>
      <ve-container>
        <div>Popup</div>
        <ve-button class="mt-2" @click="openOptionsPage">
          Open Options
        </ve-button>
        <div class="mt-2">
          <span>Storage:</span> {{ storageDemo }}
        </div>
      </ve-container>
    </ve-main>
  </ve-app>
</template>
