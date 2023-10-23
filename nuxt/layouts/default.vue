<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <Title>{{ title }}</Title>
    <nav class="bg-white shadow text-lg px-6 py-6">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/">
            Logo
          </NuxtLink>
        </div>
        <div>
          <ClientOnly>
            <ul class="flex space-x-12">
              <li>
                <NuxtLink
                  to="/"
                  exact-active-class="font-bold"
                >
                  Home
                </NuxtLink>
              </li>
              <li v-if="!isLoggedIn">
                <NuxtLink
                  to="/login"
                  exact-active-class="font-bold"
                >
                  Login
                </NuxtLink>
              </li>
              <li v-if="!isLoggedIn">
                <NuxtLink
                  to="/register"
                  exact-active-class="font-bold"
                >
                  Register
                </NuxtLink>
              </li>
              <li v-if="isLoggedIn">
                <NuxtLink
                  to="/my-info"
                  exact-active-class="font-bold"
                >
                  My Info
                </NuxtLink>
              </li>
              <li v-if="isLoggedIn">
                <NuxtLink
                  to="/create"
                  exact-active-class="font-bold"
                >
                  Create
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  exact-active-class="font-bold"
                >
                  About
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  exact-active-class="font-bold"
                >
                  Contact
                </NuxtLink>
              </li>
              <li v-if="isLoggedIn">
                <a
                  href="#"
                  @click="logout()"
                >
                  Logout
                </a>
              </li>
              <li v-if="isLoggedIn">
                {{ getUser()?.name }}
              </li>
            </ul>
          </ClientOnly>
        </div>
      </div>
    </nav>
    <div class="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
const title = useState('title', () => 'Nuxt 3 Laravel');

const { $apiFetch } = useNuxtApp();
const { getUser, removeUser, isLoggedIn } = useAuth();

const logout = async () => {
  try {
    await $apiFetch('/logout', {
      method: 'POST'
    })
    removeUser();
    window.location.pathname = '/'
  } catch (error) {
    console.log(error);
  }
}
</script>