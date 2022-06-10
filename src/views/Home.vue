<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import HomeLayout from '../layouts/HomeLayout.vue';
  import GridLayout from '../layouts/GridLayout.vue';
  import Card from '../components/Card.vue';
  import { SITE_URL } from '../common/config';
  import ErrorMessage from '../components/ErrorMessage.vue';
  import Loading from '../components/Loading.vue';

  let posts = ref([]);
  let postsLoading = ref(true);
  let postsError = ref();

  onMounted(async () => {
    axios
      .get(`${SITE_URL}/wp-json/wp/v2/posts`)
      .then((response) => {
        //console.log('response: ', response);
        posts.value = response.data;
        postsLoading.value = false;
      })
      .catch((error) => {
        //console.log('error: ', error);
        const {
          code,
          data: { status },
          message,
        } = error.response.data;
        postsError.value = {
          code,
          name: status,
          message,
        };
        postsLoading.value = false;
      });
  });
</script>
<template>
  <HomeLayout>
    <GridLayout>
      <template v-if="posts.length > 0" v-for="post in posts">
        <Card>
          <h2
            class="mb-2.5 text-xl font-black text-gray-900"
            v-html="post.title.rendered"
          ></h2>
          <div
            class="text-sm text-gray-800"
            v-html="post.excerpt.rendered"
          ></div>
          <RouterLink
            :to="{ name: 'Post', params: { id: post.id } }"
            class="mt-5 block w-full rounded-lg bg-gray-900 px-5 py-2.5 text-center dark:text-gray-200"
          >
            Read more
          </RouterLink>
        </Card>
      </template>

      <template v-if="postsLoading">
        <Loading />
      </template>

      <template v-if="postsError">
        <ErrorMessage>
          <div class="mb-2.5 text-xl font-bold">
            {{ postsError.name }}: {{ postsError.code }}
          </div>
          <div>{{ postsError.message }}</div>
        </ErrorMessage>
      </template>
    </GridLayout>
  </HomeLayout>
</template>
