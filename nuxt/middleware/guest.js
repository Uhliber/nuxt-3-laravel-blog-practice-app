export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth()

  if (process.client) {
    if (isLoggedIn.value) {
      return navigateTo('/my-info')
    }
  }

})