<template>
  <div class="container mx-auto w-1/2 py-8">
    <div class="mx-auto max-w-2xl">
      <div class="mt-6 space-y-16">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const posts = await nuxtApp.$apiFetch('/api/posts');

// const { data: posts } = await useFetch('http://localhost:8000/api/posts', { server: false })


</script>