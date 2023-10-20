<template>
  <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 max-w-2xl mx-auto">
    <div
      v-if="errors.length > 0"
      class="pt-4 px-4 sm:px-8 sm:pt-8"
    >
      <div class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">
              Post creation failed
            </h3>
            <div class="mt-2 text-sm text-red-700">
              <ul
                role="list"
                class="list-disc space-y-1 pl-5"
              >
                <li
                  v-for="(error, index) in errors"
                  :key="`error-${index}`"
                >
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form
      action="#"
      @submit.prevent="createPost"
    >
      <div class="px-4 py-6 sm:p-8">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label
              for="website"
              class="block text-sm font-medium leading-6 text-gray-900"
            >Title</label>
            <div class="mt-2">
              <input
                id="title"
                v-model="title"
                type="text"
                name="title"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="about"
              class="block text-sm font-medium leading-6 text-gray-900"
            >Body</label>
            <div class="mt-2">
              <textarea
                id="body"
                v-model="body"
                name="body"
                rows="6"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-400">
              Write your creative blog content
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <span v-show="isLoading">Loading...</span>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Post
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const title = ref('');
const body = ref('');
const isLoading = ref(false);
const errors = ref([]);

const router = useRouter();

const createPost = async () => {
  isLoading.value = true;
  errors.value = [];

  try {
    await useNuxtApp().$apiFetch('/api/post', {
      method: 'POST',
      body: {
        title: title.value,
        body: body.value,
      }
    })

    title.value = '';
    body.value = '';

    router.push('/');
  } catch (error) {
    errors.value = Object.values(error.data.errors).flat();
  } finally {
    isLoading.value = false;
  }
}
</script>