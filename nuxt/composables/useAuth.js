export function useAuth() {
  const setUser = (user) => {
    useCookie('is-authenticated').value = true;
    useCookie('current-user').value = JSON.stringify(user);
  }

  const getUser = () => {
    return useCookie('current-user').value;
  }

  const removeUser = () => {
    useCookie('is-authenticated').value = false;
    useCookie('current-user').value = null;
  }

  const isLoggedIn = computed(() => {
    if (process.client) {
      return useCookie('is-authenticated').value;
    }
  })

  return { setUser, getUser, removeUser, isLoggedIn }
}