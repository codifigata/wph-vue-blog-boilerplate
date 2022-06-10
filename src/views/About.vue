<script setup>
  import PageLayout from '../layouts/PageLayout.vue';
</script>
<template>
  <PageLayout>
    <h1 class="text-4xl font-bold">WordPress Headless: Vue Blog</h1>
    <p>
      This is a simple boilerplate to give you a quick start with WordPress REST
      API.
    </p>
    <p>
      Use it as you like, make it the starting point to an awesome and stylish
      blog, or if you prefer just use it for quickly prototyping.
    </p>
    <p>
      <b>Quick note:</b> this boilerplate is not meant to be used on production
      environment as is, because it's not SEO friendly.
    </p>
    <h2 class="text-2xl font-bold">Features</h2>
    <ul class="ml-5 list-disc">
      <li>Home page with most recent posts</li>
      <li>Single post page with basic data</li>
      <li>Basic routing</li>
      <li>Specific layout for: homepage, generic page, post</li>
      <li>And more!</li>
    </ul>
    <p>
      If you prefer React.js take a look at
      <a
        href="https://github.com/codifigata/wph-react-blog-boilerplate"
        class="text-indigo-500 dark:text-indigo-300"
      >
        WordPress Headless: React Blog Boilerplate</a
      >.
    </p>
  </PageLayout>
</template>
