<template>
  <ClientOnly>
    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="px-4 py-6 sm:px-6">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          My Info
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal information.
        </p>
      </div>
      <div class="border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-900">
              Name
            </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ user?.name }}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-900">
              Email address
            </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ user?.email }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div
      v-if="posts.length > 0"
      class="overflow-hidden mt-4 bg-white shadow sm:rounded-lg"
    >
      <div class="px-4 py-6 sm:px-6">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          My Blogs
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Authored Blogs List
        </p>
      </div>
      <div class="border-t border-gray-100">
        <div class="px-4 py-6 sm:px-6">
          <ul
            role="list"
            class="divide-y divide-gray-100"
          >
            <li
              v-for="post in posts"
              :key="post.id"
              class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
            >
              <div>
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  <NuxtLink
                    :to="`/posts/${post.id}`"
                    class="hover:underline"
                  >
                    {{ post.title }}
                  </NuxtLink>
                </p>
                <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p>
                    {{ new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const user = ref(null);
const posts = ref([]);
const { getUser, isLoggedIn } = useAuth();

const { $apiFetch } = useNuxtApp();

if (isLoggedIn.value) {
  user.value = getUser();
    
  posts.value = await $apiFetch('/api/user/posts');
}
</script>