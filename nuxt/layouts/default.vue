<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <nav class="bg-white shadow text-lg px-6 py-6">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/">
            Logo
          </NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li>
              <NuxtLink
                to="/"
                exact-active-class="font-bold"
              >
                Home
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
          </ul>
        </div>
      </div>
    </nav>
    <div class="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-8">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>