export default function ({ store, redirect, route, $cookies }) {
  // If the user is not authenticated
  const isLoggedIn = window.localStorage.getItem('isAuthenticate')

  if (!isLoggedIn) {
    return redirect('/')
  }
}
