<script setup>
  import TheHeader from '../components/TheHeader.vue';
  import TheFooter from '../components/TheFooter.vue';
</script>
<template>
  <div class="min-h-screen">
    <TheHeader />
    <div class="container mx-auto">
      <slot></slot>
    </div>
    <TheFooter />
  </div>
</template>
