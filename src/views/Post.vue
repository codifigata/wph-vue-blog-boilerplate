<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import { SITE_URL } from '../common/config';
  import PostLayout from '../layouts/PostLayout.vue';
  import ErrorMessage from '../components/ErrorMessage.vue';
  import Loading from '../components/Loading.vue';

  const route = useRoute();
  const { id } = route.params;
  let postContent = ref();
  let postError = ref();
  let postLoading = ref(true);

  onMounted(async () => {
    axios
      .get(`${SITE_URL}/wp-json/wp/v2/posts/${id}`)
      .then((response) => {
        //console.log(response);
        postContent.value = response.data;
        postLoading.value = false;
      })
      .catch((error) => {
        //console.log(error);
        const {
          code,
          data: { status },
          message,
        } = error.response.data;
        postError.value = {
          code,
          name: status,
          message,
        };
        postLoading.value = false;
      });
  });
</script>
<template>
  <PostLayout>
    <Loading v-if="postLoading" />

    <article v-if="postContent">
      <h1
        v-html="postContent.title.rendered"
        class="mb-10 text-3xl font-bold"
      ></h1>
      <div v-html="postContent.content.rendered" class="post-content"></div>
    </article>

    <ErrorMessage v-if="postError">
      <div class="mb-2.5 text-xl font-bold">
        {{ postError.name }}: {{ postError.code }}
      </div>
      <div>{{ postError.message }}</div>
    </ErrorMessage>
  </PostLayout>
</template>
