import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/eslint-module',
  ],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '@components': fileURLToPath(new URL('./components', import.meta.url)),
  },
})