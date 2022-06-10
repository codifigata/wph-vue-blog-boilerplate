<script setup>
  import { SITE_NAME } from '../common/config';
  import TheThemeToggle from './TheThemeToggle.vue';
</script>

<template>
  <header>
    <div class="container mx-auto flex items-center justify-between py-5">
      <div class="flex items-center space-x-2.5">
        <RouterLink to="/" class="text-2xl font-black uppercase">
          {{ SITE_NAME }}
        </RouterLink>
        <RouterLink to="/about" class="text-sm">About this project</RouterLink>
      </div>
      <div><TheThemeToggle /></div>
    </div>
  </header>
</template>
