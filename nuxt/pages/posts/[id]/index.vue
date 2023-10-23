<template>
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
    <Title>{{ post.title }} | {{ title }}</Title>
    <p class="text-base font-semibold leading-7 text-indigo-600">
      Blog - {{ $route.params.id }}
    </p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ post.title }}
    </h1>
    <div class="mt-6 flex gap-x-4">
      <div class="text-sm leading-6">
        <strong class="font-semibold text-gray-900">{{ post.user.name }}</strong> – 
        <time
          :datetime="post.created_at"
          class="text-gray-500"
        >{{ new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
      </div>
    </div>
    <p class="mt-6 text-xl leading-8">
      {{ post.body }}
    </p>
  </div>
</template>

<script setup>
  const title = useState('title');
  const route = useRoute();
  
  // const { data: post } = await useFetch(`http://localhost:8000/api/posts/${route.params.id}`)
  const nuxtApp = useNuxtApp();
  const post = await nuxtApp.$apiFetch(`/api/posts/${route.params.id}`);
</script>