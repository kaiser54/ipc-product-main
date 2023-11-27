// middleware/auth.js

export default function ({ route, redirect }) {
  // Check if user is logged in based on localStorage or any other method
  const USER = process.client ? localStorage.getItem("user") : {};

  // Define the pages that should be accessible when the user is not logged in
  const allowedPages = [
    "/auth/login",
    "/reset",
    "/reset/:id",
    "/auth/register",
    "/auth/register/sign-up/business",
  ];

  // If the user is not logged in and is trying to access a restricted page, redirect to login
  if (!USER && !allowedPages.includes(route.path)) {
    return redirect("/auth/login"); // You can change this URL to your actual login page
  }
  ("route path middleware :", route.path)
}
