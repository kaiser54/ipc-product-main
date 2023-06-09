// middleware/auth.js

export default function ({ store, redirect, route }) {
  // Check if the user is logged in
  if (!store.state.user) {
    // Specify the paths that should be accessible when not logged in
    const allowedPaths = ['/', '/register', '/business', '/individual', '/confirm', '/confirmation', '/forgot-password', '/reset-password'];

    // Redirect to the login page if the current route is not allowed
    // if (!allowedPaths.includes(route.path)) {
    //   redirect('/');
    // }
  }
  
}
