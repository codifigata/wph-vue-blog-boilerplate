<script setup>
  /*className={`mt-10 flex items-center justify-between border-t py-5 ${
    theme === "dark"
        ? "border-gray-700 text-gray-400"
        : "border-gray-200 text-gray-700"
}`}*/
  const date = new Date().getFullYear();
  const SITE_NAME = 'Example';
</script>

<template>
  <footer>
    <div
      class="container mx-auto mt-10 flex items-center justify-between border-t border-gray-200 py-5 text-gray-700 dark:border-gray-700 dark:text-gray-400"
    >
      <small>
        Copyright &copy; {{ date }} {{ SITE_NAME }} - All rights reserved.
      </small>
      <small>Coded with &hearts; by Codifigata</small>
    </div>
  </footer>
</template>
