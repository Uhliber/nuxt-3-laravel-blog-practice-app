<template>
  <article class="flex max-w-xl flex-col items-start justify-between border-b border-gray-200 pb-10 sm:mb-10 sm:pb-16 last:border-0">
    <div class="flex items-center gap-x-4 text-xs">
      <time
        :datetime="post.created_at"
        class="text-gray-500"
      >{{ new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
      <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
        Category
      </span>
    </div>
    <div class="group relative">
      <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <NuxtLink :to="`/posts/${post.id}`">
          <span class="absolute inset-0" />
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {{ post.body }}
      </p>
    </div>
    <div class="relative mt-8 flex items-center gap-x-4">
      <div class="text-sm leading-6">
        <p class="font-semibold text-gray-900">
          <span class="absolute inset-0" />
          {{ post.user.name }}
        </p>
        <p class="text-gray-600">
          Job Title
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  }
});
</script>