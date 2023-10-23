<template>
  <ClientOnly>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div
      v-if="errors.length > 0"
      class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-md bg-red-50 p-4"
    >
      <div class="flex">
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">
            Login failed
          </h3>
          <div class="mt-2 text-sm text-red-700">
            <ul
              role="list"
              class="list-disc space-y-1 pl-5"
            >
              <li
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        action="#"
        method="POST"
        @submit.prevent="login"
      >
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >Email address</label>
          <div class="mt-2">
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            :class="{ 'bg-slate-400 text-slate-900 hover:bg-slate-400 cursor-not-allowed': isLoading }"
            :disabled="isLoading"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  middleware: ['guest']
})

const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errors = ref([]);

// const router = useRouter();
const { $apiFetch } = useNuxtApp();

const csrf = () => {
  return $apiFetch('/sanctum/csrf-cookie')
}

const login = async () => {
  isLoading.value = true;
  errors.value = [];

  try {
    await csrf();

    await $apiFetch('/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      }
    })

    const user = await $apiFetch('/api/user');
    const { setUser } = useAuth();
    setUser(user);

    email.value = '';
    password.value = '';

    // router.push('/my-info');

    // There are instances that using router.push after authentication gives unexpected behavior
    // so we do a redirect with a full page reload

    window.location.pathname = '/my-info';
  } catch (error) {
    errors.value = Object.values(error.data.errors).flat();
  } finally {
    isLoading.value = false;
  }
}
</script>